YUI.add('designView', function (Y) {
  Y.DesignView = Y.Base.create('designView', Y.View, [], {
    template: Y.one('#design-content').getHTML(),

    render: function () {
      var page = this.get('page'),
        content = Y.Lang.sub(this.template);
      this.get('container').setHTML(content);
      return this;
    }
  });
}, '0.0.1', {
  requires: [
    'view',
    'handlebars'
  ]});