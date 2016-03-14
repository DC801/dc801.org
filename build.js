const metalsmith = require('metalsmith');
const markdown = require('metalsmith-markdown');
const permalinks = require('metalsmith-permalinks');
const layouts = require('metalsmith-layouts');
const watch = require('metalsmith-watch');
const buildCallback = function buildCallback(err) {
  if (err) {
    console.log(err);
  }
};


metalsmith(__dirname)
  .use(markdown())
  .use(permalinks({
    linksets: [{
      match: { collection: 'blog' },
      pattern: 'blog/:title',
    },
    {
      match: { collection: 'pages' },
      pattern: ':title',
    }],
  }))
  .use(layouts({
    engine: 'jade',
  }))
  .use(watch({
    paths: {
      'layouts/**/*.jade': '**/*.md',
      '${source}/**/*.md': true,
    },
    livereload: true,
  }))
  .destination('./build')
  .build(buildCallback);
