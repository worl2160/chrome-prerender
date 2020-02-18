var prerender = require('prerender');
var server = prerender({
  port: 8000,
  followRedirects: true,
  chromeLocation: '/opt/google/chrome/google-chrome',
  chromeFlags: ['--no-sandbox', '--headless', '--disable-gpu', '--remote-debugging-port=9222', '--hide-scrollbars']
});
server.start();
