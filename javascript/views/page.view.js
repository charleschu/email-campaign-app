YUI.add('pageView', function (Y) {
  Y.PageView = Y.Base.create('pageView', Y.View, [], {
  template: '<p>This is {name} page</p>' +
    '<button>Go</button>',

  render: function () {
    var page = this.get('page'),
      content = Y.Lang.sub(this.template, {name: page});
    this.get('container').setHTML(content);
    return this;
  }
});
}, '0.0.1', {
  requires: [
    'view',
    'handlebars'
  ]});