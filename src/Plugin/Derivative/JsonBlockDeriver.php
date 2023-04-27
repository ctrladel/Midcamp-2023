<?php

namespace Drupal\json_blocks\Plugin\Derivative;

use Drupal\Component\Plugin\Derivative\DeriverBase;
use Drupal\Core\Plugin\Discovery\ContainerDeriverInterface;
use Drupal\sdc\ComponentPluginManager;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Derive blocks from all the provided JSON components.
 *
 * @package Drupal\json_blocks\Plugin\Derivative
 */
class JsonBlockDeriver extends DeriverBase implements ContainerDeriverInterface {

  protected ComponentPluginManager $componentPluginManager;

  /**
   * Constructs a new JsonBlockDeriver object.
   *
   * @param \Drupal\sdc\ComponentPluginManager $componentPluginManager
   */
  public function __construct(ComponentPluginManager $componentPluginManager) {
    $this->componentPluginManager = $componentPluginManager;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, $base_plugin_id) {
    return new static(
      $container->get('plugin.manager.sdc')
    );
  }

  /**
   * {@inheritdoc}
   */
  public function getDerivativeDefinitions($base_plugin_definition) {
    $this->derivatives = [];

    $components = $this->componentPluginManager->getAllComponents();
    foreach ($components as $component) {
      $def = $component->getPluginDefinition();
      $this->derivatives[$def['machineName']] = $base_plugin_definition;
      $this->derivatives[$def['machineName']]['admin_label'] = $def['name'];
      $this->derivatives[$def['machineName']]['definition'] = $def;
    }

    return $this->derivatives;
  }

}
