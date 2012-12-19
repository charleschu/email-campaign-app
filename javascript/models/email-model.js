YUI.add('emailModel', function (Y) {
  Y.Email = Y.Base.create('email', Y.Model, [], {

  },{
    ATTRS: {
      name: null
    }
  });
}, '0.0.1', {
  requires: [
    'model',
    'handlebars'
  ]});