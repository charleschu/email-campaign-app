/**
 * Created with JetBrains WebStorm.
 * User: scsvcbear
 * Date: 12-12-14
 * Time: PM1:27
 * To change this template use File | Settings | File Templates.
 */
YUI().use('app','handlebars', function(Y){

  Y.use('node-menunav', function(Y) {
    //for the css grid
    var menu = Y.one("#menu-bar");
    menu.plug(Y.Plugin.NodeMenuNav);
  });

  Y.EmailApp = Y.Base.create('emailApp', Y.App, [], {

    showCampaignPage: function(req){
      this.showView('campaign');
    },
    showDesignPage:function(req){
      this.showView('design');
    },
    showPreviewPage:function(req){
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

//===========================define the view============================================
  //this is the view for campaign page
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

  //this is the view for campaign page
  Y.DesignView = Y.Base.create('designView', Y.View, [], {
    template: Y.one('#design-content').getHTML(),

    render: function () {
      var page = this.get('page'),
        content = Y.Lang.sub(this.template);
      this.get('container').setHTML(content);
      return this;
    }
  });

  //
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
//==============================================================================

  var app = new Y.EmailApp({
    serverRouting: true,
    viewContainer: '#wrapper'
  });


//    app.render().save('campaign');
  app.render();
});
