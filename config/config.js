YUI.GlobalConfig = {
  groups: {
    views: {
      base: '/javascript/views/',
      modules:{
        campaignView: {
          path: '/campaign.view.js'
        },
        designView: {
          path: '/design.view.js'
        },
        pageView: {
          path: '/page.view.js'
        }
      }
    },
    models: {
      base: '/javascript/models/',
      modules:{
        emailModel: {
          path: '/email.model.js'
        }
      }
    },
    app: {
      base: '/javascript/',
      modules: {
        emailApp: {
          path: '/app.js'
        }
      }
    }
  }
}