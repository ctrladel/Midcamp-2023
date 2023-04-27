import iconComponent from "../icon/icon.component.js";

export default {
  $schema: 'https://git.drupalcode.org/project/sdc/-/raw/1.x/src/metadata.schema.json',
  machineName: 'button',
  name: 'Button',
  status: 'stable',
  thirdPartySettings: {
    rjsf: {
      uiSchema: {
        'ui:title': 'Button',
        active: {
          'ui:widget': 'hidden'
        },
        type: {
          'ui:widget': 'hidden'
        },
        icon: iconComponent.thirdPartySettings.rjsf.uiSchema,
        link: {
          "ui:field": "link"
        },
      }
    }
  },
  libraryOverrides: {
    dependencies: [
      'json_blocks/spectrum',
    ],
  },
  props: {
    type: 'object',
    properties: {
      link: {
        title: "Link",
        type: "object",
        properties: {
          url: {
            type: "string"
          },
          entity: {
            type: "object"
          },
          title: {
            type: "string"
          }
        },
        // $filters: {
        //   $func: "link",
        //   $vars: {
        //     target_type: "node",
        //     handler: "default",
        //     handler_settings: {
        //       target_bundles: null,
        //       sort: {
        //         field: "_none",
        //         direction: "ASC"
        //       }
        //     }
        //   }
        // }
      },
      active: {
        title: 'Active',
        type: 'boolean',
        default: true,
      },
      quiet: {
        title: 'Quiet',
        type: 'boolean'
      },
      treatment: {
        title: 'Treatment',
        type: 'string',
        enum: [
          'fill',
          'outline'
        ]
      },
      type: {
        title: 'Type',
        type: 'string',
        enum: [
          'button',
          'submit',
          'reset'
        ],
        default: 'button',
      },
      size: {
        type: 'string',
        title: 'Size',
        enum: [
          's',
          'm',
          'l',
          'xl'
        ]
      },
      variant: {
        title: 'Variant',
        type: 'string',
        enum: [
          'accent',
          'primary',
          'secondary',
          'negative',
          'white',
          'black'
        ]
      },
      icon: iconComponent.props,
    }
  },
};
