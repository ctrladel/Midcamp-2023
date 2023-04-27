export default {
  $schema: 'https://git.drupalcode.org/project/sdc/-/raw/1.x/src/metadata.schema.json',
  machineName: 'image',
  name: 'Image',
  status: 'stable',
  thirdPartySettings: {
    rjsf: {
      uiSchema: {
        'ui:title': 'Image',
        multiple: {
          "ui:field": "entity_browser",
          "ui:options": {
            browser: "rjsf_media_image_browser",
            thumbnailStyle: "medium",
            preview: "grid"
          }
        }
      }
    }
  },
  props: {
    type: 'object',
    properties: {
      multiple: {
        type: "array",
        format: "entity_reference",
        maxItems: 5,
        items: {
          type: "object"
        },
        title: "Multiple media reference",
        description: "Select media to display",
        $filters: {
          $func: "entity_type",
          $vars: {
            target_type: "media",
            bundles: [
              "image"
            ]
          }
        }
      }
    }
  },
};
