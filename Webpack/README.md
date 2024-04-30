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

 <h2 class="gap">Tasks</h2>

<div data-role="task21505" data-position="1" id="task-num-0">
      <div class="panel panel-default task-card " id="task-21505">
  <span id="user_id" data-id="6138"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      0. Basic setup
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

<!-- Task Body -->
  <p>Create and run Webpack using a basic installation.</p>

<ul>
<li>Create a folder named <code>task_0</code>.</li>
<li>Install <code>webpack</code> and <code>webpack-cli</code>  as developer dependencies within the folder using <code>npm</code>.</li>
<li>Install <code>jQuery</code> as a regular dependency using <code>npm</code>.</li>
<li>Make sure that <code>webpack</code> and <code>webpack-cli</code> are listed under the devDependencies key along with <code>jQuery</code> being listed under the dependencies key within the package.json</li>
<li>Create a <code>src</code> directory with a <code>index.js</code> in it. </li>
<li>The file should import <code>jquery</code> and add three different paragraphs to the page body: (refer to this <a href="/rltoken/XJSRYhglsAljFvprI-PcDQ" title="link" target="_blank">link</a> under the Babel section for importing jQuery)</li>
</ul>

<pre><code>Holberton Dashboard

Dashboard data for the students

Copyright - Holberton School
</code></pre>

<ul>
<li>Create a <code>dist/index.html</code>. Import your <code>main.js</code> in the body.</li>
<li>You must use <code>jQuery</code> to add the elements to the body of the page.</li>
<li>When running <code>Webpack</code>, your <code>javascript</code> and <code>html</code> files should be generated in a <code>dist</code> folder.</li>
<li>You should not use a custom <code>webpack</code> config file.</li>
<li>Opening your main file should not generate any error in the console.</li>
<li>Your <code>html</code> code should only import one <code>Javascript</code> script (the one generated by <code>webpack</code>).</li>
<li>Do NOT push your <code>dist/main.js</code> if you have one.</li>
</ul>

  </div>

  <div class="list-group">
    <!-- Task URLs -->

<!-- Technical information -->
   <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>atlas-web_react</code></li>
            <li>Directory: <code>Webpack</code></li>
            <li>File: <code>task_0/package.json, task_0/src/index.js, task_0/dist/index.html</code></li>
        </ul>
      </div>

 <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      1. Learning how to use Webpack with a config file
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

<!-- Task Body -->
  <p><strong>Installing packages</strong></p>

<ul>
<li>Create a folder named <code>task_1</code>, <code>cd</code> into it, and create a package.json using <code>npm init -y</code></li>
<li>Install webpack (dev dependency), jQuery (dependency), and Lodash (dependency) within the folder using <code>npm</code>.</li>
<li>Modify your <code>package.json</code> to add a <code>build</code> script that runs <code>webpack</code> to create build output. This lets you execute <code>npm run build</code> on the command line. </li>
</ul>

<p><strong>Using jQuery</strong></p>

<ul>
<li>Create a <code>js</code> directory with a javascript file named <code>dashboard_main.js</code> in it. The file should import <code>jquery</code> and add the below elements in the following order:

<ul>
<li>Paragraph element: <code>Holberton Dashboard</code></li>
<li>Paragraph element: <code>Dashboard data for the students</code></li>
<li>Button element with the text <code>Click here to get started</code></li>
<li>Add a paragraph element as so <code>&lt;p id=&#39;count&#39;&gt;&lt;/p&gt;</code></li>
<li>Add another paragraph: <code>Copyright - Holberton School</code></li>
</ul></li>
</ul>

<p><strong>Prevent spammers</strong></p>

<ul>
<li>Write a function called <code>updateCounter()</code> that tracks the number of times the button element has been clicked. </li>
<li>Each time it&rsquo;s called, update the count by 1 and set the content of the paragraph element with id=&lsquo;count&rsquo; to <code>{count} clicks on the button</code></li>
<li>Bind the debounce function in Lodash to the click event on the button you created previously (The number of milliseconds to delay invocation should be 500). </li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>When running Webpack, your javascript should be generated in a <code>public</code> folder. You should also place your index.html in this folder.</li>
<li>The javascript file generated by Webpack should be named <code>bundle.js</code></li>
<li>Set Webpack config mode to production</li>
<li>Opening your html file should not generate any error in the console</li>
<li>Your html code should only import one Javascript script (the one generated by webpack)</li>
</ul>

<p><strong>Resources:</strong></p>

<ul>
<li><a href="/rltoken/7QYXiG5Yp93dN0WWCPMpVA" title=" Debounce documentation on Lodash " target="_blank"> Debounce documentation on Lodash </a></li>
</ul>

  </div>

  <div class="list-group">
    <!-- Task URLs -->

<!-- Technical information -->
   <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>atlas-web_react</code></li>
            <li>Directory: <code>Webpack</code></li>
            <li>File: <code>task_1/js/dashboard_main.js, task_1/package.json, task_1/webpack.config.js, task_1/public/index.html</code></li>
        </ul>
      </div>

 <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      2. Adding CSS &amp; Images
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

  <!-- Task Body -->
  <p>Create a specific configuration for Webpack.</p>

<ul>
<li>Using the folder named <code>task_2</code>.</li>
<li>Reuse the code from <code>task_1</code>.</li>
<li>Modify the webpack config to support adding CSS to the bundle.</li>
<li>Modify the webpack config to support adding images to the CSS.</li>
<li>Create a folder named <code>css</code></li>
<li>In a file named <code>main.css</code>, change the position of the counter text to be displayed on the right of the button and in bold.</li>
<li>Add an element at the top of document with the id <code>#logo</code> which has a width of 200px and height of 200px.</li>
<li>Set the background of th element with the image in <code>task_2/assets/holberton-logo.jpg</code>.</li>
<li>Set the width and height of the logo background image to 200px by 200px.</li>
<li>Make sure to configure Webpack to optimize images.</li>
<li>When running Webpack, your javascript and html files should be generated in a <code>public</code> folder.</li>
<li>The javascript file generated by Webpack should be named <code>bundle.js</code>.</li>
<li>Set Webpack config mode to production.</li>
<li>Opening your main file should not generate any error in the console.</li>
<li>Your html code should only import one Javascript script (the one generated by webpack).</li>
<li>When running Webpack, you should not see the warning <code>WARNING in asset size limit: The following asset(s) exceed the recommended size limit</code></li>
</ul>

  </div>

  <div class="list-group">
    <!-- Task URLs -->

<!-- Technical information -->
   <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>atlas-web_react</code></li>
            <li>Directory: <code>Webpack</code></li>
            <li>File: <code>task_2/package.json, task_2/css/main.css, task_2/webpack.config.js, task_2/js/dashboard_main.js, task_2/public/index.html</code></li>
        </ul>
      </div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      3. Dev servers, modules, and tree shaking
    </h3>

   </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

  <!-- Task Body -->
   <p>Using the folder named <code>task_3</code>. <strong>Set up a development server:</strong></p>

<ul>
<li>Reuse the code from <code>task_2</code>.</li>
<li>Modify the Webpack config to setup a development server running on the port 8564.</li>
<li>Modify the Webpack config to set its <code>mode</code> to <code>development</code>.</li>
<li>Add a script in the <code>package.json</code> to start the server and open the browser with <code>npm run start-dev</code>.</li>
</ul>

<p><strong>Divide the code into modules:</strong></p>

<ul>
<li>Divide the main bundle into three modules.</li>
<li><code>header</code> should contain a <code>header.css</code> and <code>header.js</code> files.</li>
<li>Import jQuery, and add the logo and the H1 title to the <code>header.js</code> file (with content <code>Holberton Dashboard</code>). Add a console.log printing <code>Init header</code>.</li>
<li>Add the needed style to the <code>header.css</code> file.</li>
<li><code>body</code> should contain a <code>body.css</code> and <code>body.js</code> files.</li>
<li>Import jQuery, Lodash and add the body code (button, counter) in the <code>body.js</code> file.</li>
<li>Add the needed style to the <code>body.css</code> file.</li>
<li><code>footer</code> should contain a <code>footer.css</code> and <code>footer.js</code> files.</li>
<li>Import jQuery, and append a paragraph the copyright text <code>Copyright - Holberton School</code>.</li>
<li>Add the needed style to the <code>footer.css</code> file.</li>
<li>Modify the Webpack configuration to support three different entry points (<code>header</code>, <code>body</code>, <code>footer</code>). Each entry point should generate a filename with the following format <code>name_of_the_file.bundle.js</code>.</li>
<li>Do NOT have a <code>task_3/public/</code> directory pushed to your repository.</li>
<li>Add a plugin to Webpack to automatically create an <code>index.html</code> HTML file</li>
</ul>

<p><strong>Improve development speed</strong></p>

<ul>
<li>Modify the webpack config to support inline source mapping.</li>
<li>Check that the console.log in the header.js now takes you to your javascript file instead of the main bundle.</li>
<li>Add a plugin to Webpack to clean your build folder on each build.</li>
</ul>

<p><strong>Improve bundles size:</strong></p>

<ul>
<li>You can see that the current modules generated with <code>npm run build</code> are quite large. They all contain jQuery and/or Lodash. Modify the Webpack configuration to split the modules in chunks.</li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>When running the dev server, your code should work on <code>http://localhost:8564/</code>.</li>
<li>When running Webpack, your javascript and html files should be generated in a <code>public</code> folder.</li>
<li>Opening your main file should not generate any error in the console.</li>
</ul>

  </div>

  <div class="list-group">
    <!-- Task URLs -->

<!-- Technical information -->
   <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>atlas-web_react</code></li>
            <li>Directory: <code>Webpack</code></li>
            <li>File: <code>task_3/modules/body/body.css, task_3/modules/body/body.js, task_3/modules/footer/footer.css, task_3/modules/footer/footer.js, task_3/modules/header/header.css, task_3/modules/header/header.js, task_3/package.json, task_3/webpack.config.js</code></li>
        </ul>
      </div>
