# Webpack

<h2>Resources</h2>

<p><strong>Read or watch</strong>:</p>

<ul>
<li><a href="https://webpack.js.org/concepts/" title="Webpack documentation" target="_blank">Webpack documentation</a></li>
<li><a href="https://www.sitepoint.com/webpack-beginner-guide/" title="Webpack beginner guide" target="_blank">Webpack beginner guide</a></li>
<li><a href="https://docs.npmjs.com/cli/v10/configuring-npm/package-json" title="npm-package.json" target="_blank">npm-package.json</a></li>
</ul>

<h2>Learning Objectives</h2>

<p>At the end of this project, you are expected to be able to <a href="/rltoken/Jro3_KRVPzkj6zLjvs1mVQ" title="explain to anyone" target="_blank">explain to anyone</a>, <strong>without the help of Google</strong>:</p>

<ul>
<li>How to setup Webpack for a basic project</li>

<br><code>npm install webpack webpack-cli --save-dev </code>
<br><code> npm install jquery</code>
<br><code> npm install lodash</code>

<li>Entry points, output, and loaders:</li>

<br>-<b>Entry:</b> the entry point is the module that webpack uses to start building its internal dependency graph. From there, it determines which other modules and libraries that entry point depends on (directly and indirectly) and includes them in the graph until no dependency is left. By default, the entry property is set to ./src/index.js, but we can specify a different module (or even multiple modules) in the webpack configuration file.
<br>-<b>Output:</b> the output property instructs webpack where to emit the bundle(s) and what name to use for the file(s). The default value for this property is ./dist/main.js for the main bundle and ./dist for other generated files — such as images, for example. Of course, we can specify different values in the configuration depending on our needs.
<br>-<b>Loaders:</b> by default, webpack only understands JavaScript and JSON files. To process other types of files and convert them into valid modules, webpack uses loaders. Loaders transform the source code of non-JavaScript modules, allowing us to preprocess those files before they’re added to the dependency graph. For example, a loader can transform files from a CoffeeScript language to JavaScript or inline images to data URLs. With loaders we can even import CSS files directly from our JavaScript modules.
<br>-<b>Plugins:</b> plugins are used for any other task that loaders can’t do. They provide us with a wide range of solutions about asset management, bundle minimization and optimization, and so on.
<br>-<b>Mode:</b> typically, when we develop our application we work with two types of source code — one for the development build and one for the production build. Webpack allows us to set which one we want to be produced by changing the mode parameter to development, production or none. This allows webpack to use built-in optimizations corresponding to each environment. The default value is production. The none mode means that no default optimization options will be used. To learn more about the options webpack uses in development and production mode, visit the mode configuration page.

<li>How to add plugins</li>
<li>How to split your code into chunks</li>
<li>How to setup a dev server</li>
</ul>

<h2>Requirements</h2>

<ul>
<li>All of your code will be executed on Ubuntu 18.04 LTS using Node <code>12.x.x</code></li>
<li>Allowed editors: <code>vi</code>, <code>vim</code>, <code>emacs</code>, <code>Visual Studio Code</code></li>
<li>All of your files should end with a new line</li>
<li>A <code>README.md</code> file at the root of the folder of the project is mandatory</li>
</ul>
