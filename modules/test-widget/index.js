module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'test widget',
    icon: 'test-icon'
  },
  // Icons config ripped from node_modules/apostrophe/modules/@apostrophecms/rich-text-widget/index.js
  icons: {
    'format-text-icon': 'FormatText', // does work (presumably because it's pulling from core)
    'test-icon': 'FormatText', // doesn't work
    'format-color-highlight-icon': 'FormatColorHighlight',
    'table-icon': 'Table'
  }
};
