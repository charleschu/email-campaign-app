YUI.add('designView', function (Y) {
  Y.DesignView = Y.Base.create('designView', Y.View, [], {
    initializer:function(){
      var that=this,
        requset = Y.io('javascript/views/templates/design.handlebar',{
          on:{
            complete:function(id, response){
              var template = Y.Lang.sub(response.responseText);
              that.get('container').setHTML(template);
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