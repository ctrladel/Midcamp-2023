export default {
  $schema: 'https://git.drupalcode.org/project/sdc/-/raw/1.x/src/metadata.schema.json',
  machineName: 'icon',
  name: 'Icon',
  status: 'stable',
  thirdPartySettings: {
    rjsf: {
      uiSchema: {
        'ui:title': 'Icon',
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
      icon: {
        title: 'Icon',
        type: 'string',
        enum: [
          'alert',
          'arrowRight',
          'star',
          'info',
          'cross',
          'checkmark'
        ]
      },
      size: {
        title: 'Size',
        type: 'string',
        enum: [
          's',
          'm',
          'l',
          'xl',
          'xxl'
        ]
      }
    }
  },
};
