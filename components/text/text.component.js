export default {
  $schema: 'https://git.drupalcode.org/project/sdc/-/raw/1.x/src/metadata.schema.json',
  machineName: 'text',
  name: 'Text',
  status: 'stable',
  thirdPartySettings: {
    rjsf: {
      uiSchema:{
        'ui:title': 'Text',
        text:{
          "ui:field":"rich_text"
        }
      }
    }
  },
  props: {
    type: 'object',
    properties: {
      text: {
        type: 'object',
        properties: {
          format: {
            type: "string"
          },
          value: {
            type: "string"
          }
        },
        $filters: {
          $func: "rich_text",
          $vars: {
            default_format: "basic_html",
            allowed_formats: [
              "basic_html",
              "full_html"
            ]
          }
        }
      }
    }
  },
};
