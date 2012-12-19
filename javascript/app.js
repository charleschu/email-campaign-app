/**
 * Date: 12-12-18
 * Time: PM4:36
 */
YUI.add('emailApp', function (Y) {
  Y.EmailApp = Y.Base.create('emailApp', Y.App, [], {

    showCampaignPage: function(req){
      this.showView('campaign');
    },
    showDesignPage: function(req){
      this.showView('design');
    },
    showPreviewPage: function(req){
      this.showView('page',
        {page: "preview" });
    },
    initializer: function () {
      this.once('ready', function (e) {
        if (this.hasRoute(this.getPath())) {
          this.dispatch();
        } else {
          this.showCampaignPage();
        }
      });
    },
    views: {
      campaign: {type: 'CampaignView'},
      design: {type: 'DesignView'},
      page: {type: 'PageView'}
    }
  },{
    ATTRS:{
      routes: {
        value: [
          {path: '/', callbacks: 'showCampaignPage'},
          {path: '/campaign', callbacks: 'showCampaignPage'},
          {path: '/design', callbacks: 'showDesignPage'},
          {path: '/preview', callbacks: 'showPreviewPage'},
          {path: '/recipients', callbacks: 'showPreviewPage'},
          {path: '/test', callbacks: 'showPreviewPage'},
          {path: '/launch', callbacks: 'showPreviewPage'},
          {path: '/results', callbacks: 'showPreviewPage'}
        ]

      }
    }
  });
}, '0.0.1', {
  requires: [
    'app',
    'handlebars',
    'campaignView',
    'designView',
    'pageView',
    'emailModel'
  ]});