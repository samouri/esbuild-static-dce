const esbuild = require('esbuild');
esbuild.buildSync({
  entryPoints: ['index.js'],
  outfile: './esbuild/bundled.js',
  bundle: true,
  minify: true,
  treeShaking: true,
});
