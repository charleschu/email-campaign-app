/**
 * This is the YUI code
 */
YUI().use('emailApp', function(Y){

  Y.use('node-menunav', function(Y) {
    //for the css grid
    var menu = Y.one("#menu-bar");
    menu.plug(Y.Plugin.NodeMenuNav);
  });

  var app = new Y.EmailApp({
    serverRouting: true,
    viewContainer: '#wrapper'
  });


  app.render();
});
