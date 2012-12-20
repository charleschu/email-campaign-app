YUI.add('campaignView', function (Y) {
  Y.CampaignView = Y.Base.create('campaignView', Y.View, [], {
    initializer:function(){
      var that=this,
        requset = Y.io('javascript/views/templates/campaign.handlebar',{
          on:{
            complete:function(id,response){
              var template = Y.Handlebars.compile(response.responseText);
              that.get('container').setHTML(template({character_size: "80"}));
            }
          }
        });
    },

    render: function () {
      return this;
    }
  });
}, '0.0.1', {
  requires: [
    'view',
    'handlebars'
  ]});