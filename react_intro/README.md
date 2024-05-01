# React intro

<h2>Resources</h2>

<p><strong>Read or watch</strong>:</p>

<ul>
<li><a href="https://react.dev/" title="React Official Website" target="_blank">React Official Website</a></li>
<li><a href="https://www.taniarascia.com/getting-started-with-react/" title="Getting started with React" target="_blank">Getting started with React</a></li>
<li><a href="https://legacy.reactjs.org/docs/getting-started.html" title="React overview" target="_blank">React overview</a></li>
<li><a href="https://github.com/facebook/create-react-app" title="create-react-app" target="_blank">create-react-app</a></li>
<li><a href="https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?pli=1" title="React Developer Tools" target="_blank">React Developer Tools</a></li>
<li><a href="https://babeljs.io/docs/" title="What is Babel?" target="_blank">What is Babel?</a></li>
<li><a href="https://enzymejs.github.io/enzyme/docs/api/shallow.html" title="Enzyme" target="_blank">Enzyme</a></li>
</ul>

<h2>Learning Objectives</h2>

<p>At the end of this project, you are expected to be able to <a href="/rltoken/ajL0MshJHRMRNpXl-WPJ3A" title="explain to anyone" target="_blank">explain to anyone</a>, <strong>without the help of Google</strong>:</p>

<ul>
<li>How to create a basic Javascript application using React</li>
<li>How to use the package <code>create-react-app</code> to start developing quickly with React</li>
<li>What JSX is and how to use it</li>
<li>How to use the React Developer Tools to debug your code</li>
<li>How to use Enzyme&rsquo;s Shadow rendering to test your application</li>
<li>How to use React with Webpack &amp; Babel</li>
</ul>

<h2>Requirements</h2>

<ul>
<li>All your files will be interpreted/compiled on Ubuntu 18.04 LTS using <code>node 12.x.x</code> and <code>npm 6.x.x</code></li>
<li>Allowed editors: <code>vi</code>, <code>vim</code>, <code>emacs</code>, <code>Visual Studio Code</code></li>
<li>All your files should end with a new line</li>
<li>A <code>README.md</code> file, at the root of the folder of the project, is mandatory</li>
</ul>

  </div>
</div>

  <h2 class="gap">Tasks</h2>

   <div data-role="task21581" data-position="1" id="task-num-0">
      <div class="panel panel-default task-card " id="task-21581">
  <span id="user_id" data-id="6138"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      0. Basic application
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

<!-- Progress vs Score -->

<!-- Task Body -->
<p><strong>Create a basic app named <code>dashboard</code> using <code>create-react-app</code> in your <code>task_0</code> directory</strong></p>

<p>You will need a favicon and the Holberton logo. Download them and add them to the <code>src/</code> directory under <code>dashboard/</code></p>

<p><strong>Holberton Logo</strong></p>

<p><img src="https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2019/11/175b85183ecedb529e14.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20240501%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20240501T123845Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=152dc76d2059357e96cdc3e3f101c12581313d84e95bec4bb94ed9ae3ff8bcac" alt="" loading='lazy' style="" /></p>

<p><strong>Favicon</strong></p>

<p><img src="https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/misc/2019/11/e240f8157634d33a9757.ico?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20240501%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20240501T123845Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=769a2050bf2013cc082e7a6a714441c5605e826e42a09cbb2a825ee9b56ca15e" alt="" loading='lazy' style="" /></p>

<p><strong>Remove the unused files:</strong></p>

<ul>
<li><code>reportWebVitals.js</code></li>
<li><code>index.css</code></li>
<li><code>App.test.js</code></li>
</ul>

<p><strong>in <code>task_0/dashboard/src/App.js</code>, create a function <code>App</code> that returns:</strong></p>

<ul>
<li>a header div with a class named <code>App-header</code> containing the Holberton logo and a h1 with the text <code>School dashboard</code></li>
<li>a body div with a class named <code>App-body</code> containing at least one paragraph with the text <code>Login to access the full dashboard</code></li>
<li>a footer div with a class named <code>App-footer</code> containing at least one paragraph with the text <code>Copyright 2024 - holberton School</code></li>
</ul>

<p><strong>Modify the App.css to make the project looks like the following screenshot:</strong></p>

<p><img src="https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2019/11/7743eba00239687a6fdd.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20240501%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20240501T123845Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=dc811f5b20979fdd03e0f47b4df88d9d120be065a4394611a5637fdc89d711a7" alt="" loading='lazy' style="" /></p>

<p><strong>Requirements:</strong></p>

<ul>
<li>When running, there should not be any lint error in the console</li>
</ul>

  </div>
