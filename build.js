const metalsmith = require('metalsmith');
const markdown = require('metalsmith-markdown');


metalsmith(__dirname)
  .destination('./build')
  .use(markdown())
  .build();
