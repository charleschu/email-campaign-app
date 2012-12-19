YUI.add('campaignView', function (Y) {
  Y.CampaignView = Y.Base.create('campaignView', Y.View, [], {
    template: Y.Handlebars.compile(Y.one('#campaign-content').getHTML()),

    render: function () {
      var page = this.get('page'),
        content = this.template({character_size: "80"});
//        content = Y.Lang.sub(this.template);
      this.get('container').setHTML(content);
      return this;
    }
  });
}, '0.0.1', {
  requires: [
    'view',
    'handlebars'
  ]});