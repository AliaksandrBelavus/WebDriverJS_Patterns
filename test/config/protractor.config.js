exports.config = {

  restartBrowserBetweenTests: true,

  directConnect: true,

  capabilities: {
    'browserName': 'chrome'
  },

  framework: 'jasmine',

  specs: ['../specs/*.js'],

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
