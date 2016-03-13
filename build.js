var Metalmsith = require('metalsmith');



Metalsmith(__dirname)
  .destination('./build')
  .build()
