const metalsmith = require('metalsmith');
const markdown = require('metalsmith-markdown');
const layouts = require('metalsmith-layouts');
const buildCallback = function buildCallback(err) {
  if (err) {
    console.log(err);
  }
};


metalsmith(__dirname)
  .use(markdown())
  .use(layouts({
    engine: 'jade',
  }))
  .destination('./build')
  .build(buildCallback);
