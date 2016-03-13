const metalsmith = require('metalsmith');


metalsmith(__dirname)
  .destination('./build')
  .build();
