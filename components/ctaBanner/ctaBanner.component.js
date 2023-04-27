export default {
  $schema: 'https://git.drupalcode.org/project/sdc/-/raw/1.x/src/metadata.schema.json',
  machineName: 'ctaBanner',
  name: 'CTA Banner',
  status: 'stable',
  thirdPartySettings: {  },
  props: {
    type: 'object',
    properties: {
      background: {
        type: 'string',
        title: 'Background Color',
        enum: [
          'cadetblue',
          'lightgreen',
          'whitesmoke'
        ]
      },
    }
  },
};
