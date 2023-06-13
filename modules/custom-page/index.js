module.exports = {
  extend: '@apostrophecms/page-type',
  fields: {
    add: {
      title: {
        label: 'Title',
        type: 'string',
        req: true
      },
      area: {
        label: 'Area',
        type: 'area',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {},
            '@apostrophecms/image': {}
          }
        }
      }
    },
    group: {
      basics: {
        fields: [ 'Title', 'Area' ]
      }
    }
  },
  init(self) {

  }
};
