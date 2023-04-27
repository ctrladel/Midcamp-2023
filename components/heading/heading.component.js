export default {
  $schema: 'https://git.drupalcode.org/project/sdc/-/raw/1.x/src/metadata.schema.json',
  machineName: 'heading',
  name: 'Heading',
  status: 'stable',
  thirdPartySettings: {
    rjsf: {
      uiSchema: {
        'ui:title': 'Heading',
      }
    }
  },
  props: {
    type: 'object',
    properties: {
      text: {
        title: 'Text',
        type: 'string'
      },
      element: {
        title: 'Element',
        type: 'string',
        enum: [
          'div',
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
        ]
      },
      style: {
        title: 'Style',
        type: 'string',
        enum: [
          'text',
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
        ]
      }
    }
  },
};
