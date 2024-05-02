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

![full_dashboard](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2019/11/7743eba00239687a6fdd.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20240502%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20240502T222918Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=aac1f5e638fc11314da0d5d9e43e16ed00d16ef7d5853d1cd822a92945764f53)

<p><strong>Requirements:</strong></p>

<ul>
<li>When running, there should not be any lint error in the console</li>
</ul>

  </div>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      1. Embedding expressions, functions
    </h3>

   </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

   <!-- Progress vs Score -->

   <!-- Task Body -->
   <p><strong>Using your code from the previous task, in <code>task_1/dashboard/src/utils.js</code>:</strong></p>

<ul>
<li>Create a function named <code>getFullYear</code> that will return the current year</li>
<li>Create a function named <code>getFooterCopy</code>:

<ul>
<li>It accepts one argument <code>isIndex</code>(boolean). When true, the function should return <code>Holberton School</code>. When false, the function should return <code>Holberton School main dashboard</code></li>
</ul></li>
<li>Modify the footer returned in <code>task_1/dashboard/src/App.js</code> to use these two functions. <code>isIndex</code> should be true</li>
</ul>

<p><strong>in <code>task_1/dashboard/src/Notifications.js</code>, create a Notifications element:</strong></p>

<ul>
<li>It should import React</li>
<li>It should export a functional component</li>
<li>The functional component should return a <code>div</code> with the class <code>Notifications</code></li>
<li>The div should contain a paragraph with the text <code>Here is the list of notifications</code></li>
<li>import the file <code>Notifications.css</code>. </li>
</ul>

<p><strong>in <code>task_1/dashboard/src/Notifications.css</code>, style the Notifications class:</strong></p>

<ul>
<li>Add a border and some padding around the <code>div</code></li>
</ul>

<p><strong>Render the Notifications element:</strong></p>

<ul>
<li>Modify <code>task_1/dashboard/src/index.js</code> to render the new element (<code>Notifications</code>) in a <code>div</code> with the class name <code>root-notifications</code></li>
<li>Check that you can see the two elements on the browser, and using the React browser extension</li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>When running, <strong>there should not be any lint errors</strong> in the console</li>
</ul>

  </div>

  <div class="list-group">
    <!-- Task URLs -->

  <!-- Technical information -->
   <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>atlas-web_react</code></li>
            <li>Directory: <code>react_intro</code></li>
            <li>File: <code>task_1/dashboard/src/, task_1/dashboard/src/utils.js, task_1/dashboard/src/App.js, task_1/dashboard/src/Notifications.css, task_1/dashboard/src/Notifications.js, task_1/dashboard/src/index.js</code></li>
        </ul>
      </div>

 <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      2. Modify the App
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

   <!-- Task Body -->
   <p><strong>using your code from the previous task, in <code>task_2/dashboard/src/App.js</code> under the paragraph that says <code>Login to access the full dashboard</code>:</strong></p>

<ul>
<li>add a label and input for email</li>
<li>add a label and input for password</li>
<li>when the user clicks on a label, it should select the corresponding input</li>
<li>add one button element with the text &ldquo;OK&rdquo;</li>
</ul>

  </div>

  <div class="list-group">
    <!-- Task URLs -->

  <!-- Technical information -->
   <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>atlas-web_react</code></li>
            <li>Directory: <code>react_intro</code></li>
            <li>File: <code>task_2/dashboard/src/, task_2/dashboard/src/App.js</code></li>
        </ul>
      </div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      3. Modify the Notifications
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

  <!-- Progress vs Score -->

  <!-- Task Body -->
  <p><strong>in <code>task_2/dashboard/src/utils.js</code>:</strong></p>

<ul>
<li>Create a function named <code>getLatestNotification</code> that returns the following string: <code>&lt;strong&gt;Urgent requirement&lt;/strong&gt; - complete by EOD</code></li>
</ul>

<p><strong>in <code>task_2/dashboard/src/Notifications.js</code> in the Notifications div:</strong></p>

<ul>
<li>add a button element with inline styling (without using the CSS file):

<ul>
<li>show button on right side of notifications box</li>
<li><code>aria-label</code> is <code>Close</code></li>
<li>when user clicks on the button it logs to the console <code>Close button has been clicked</code></li>
</ul></li>
<li>in the button element there should be an &ldquo;x&rdquo;</li>
<li>after the paragraph add an unordered list

<ul>
<li>the list has the following items:

<ul>
<li>The first one has a default priority and says <code>New course available</code></li>
<li>The second one has a urgent priority and says <code>New resume available</code></li>
<li>The last item has a urgent priority and should correctly displays the content of <code>getLatestNotification</code> using <code>dangerouslySetInnerHTML</code></li>
<li>Add the priority to the items of the list using a <code>data</code> attribute</li>
</ul></li>
</ul></li>
</ul>

<p><strong>in <code>task_2/dashboard/src/Notifications.css</code>:</strong></p>

<ul>
<li>style the notification priorities using their data attribute: set the color of default items to blue, and the color of urgent items to red.</li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>When running, there should not be any lint error in the console</li>
<li>Your app should look like the following screenshot:</li>
</ul>

<p><img src="https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2019/11/8d639e2671ebe15575ad.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20240502%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20240502T222918Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=9424179505598f7422ebc682b358835acb4ddeba73987221298acef1dde336af" alt="" loading='lazy' style="" /></p>

  </div>

  <div class="list-group">
    <!-- Task URLs -->
  <!-- Technical information -->
    <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>atlas-web_react</code></li>
            <li>Directory: <code>react_intro</code></li>
            <li>File: <code>task_2/dashboard/src/, task_2/dashboard/src/utils.js, task_2/dashboard/src/Notifications.js, task_2/dashboard/src/Notifications.css</code></li>
        </ul>
      </div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      4. Create basic tests with four tests
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

  <!-- Progress vs Score -->

  <!-- Task Body -->
  <p><strong>in <code>task_3/dashboard/src/utils.test.js</code>:</strong></p>

<ul>
<li>Write a test to check that the function <code>getFullYear</code> returns the correct year (be careful to not create a time bomb)</li>
<li>Write a test to check that <code>getFooterCopy</code> returns the correct string when the argument is true or false</li>
<li>Write a test checking the returned string for <code>getLatestNotification</code></li>
</ul>

  </div>

  <div class="list-group">
    <!-- Task URLs -->

  <!-- Technical information -->
   <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>atlas-web_react</code></li>
            <li>Directory: <code>react_intro</code></li>
            <li>File: <code>task_3/dashboard/src/utils.test.js</code></li>
        </ul>
      </div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      5. Install Enzyme
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>
   <!-- Task Body -->
   <ul>
<li>Install Enzyme and the enzyme adapter with <code>npm</code></li>
<li>Create a file named <code>setupTests.js</code> and configure the adapter for Enzyme</li>
</ul>

  </div>

  <div class="list-group">
    <!-- Task URLs -->

  <!-- Technical information -->
   <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>atlas-web_react</code></li>
            <li>Directory: <code>react_intro</code></li>
            <li>File: <code>task_3/dashboard/src/setupTests.js</code></li>
        </ul>
      </div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      6. Create React tests
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

   <!-- Task Body -->
   <p><strong>in <code>task_3/dashboard/src/App.test.js</code> create four tests:</strong></p>

<ul>
<li>test that App renders without crashing</li>
<li>verify that App renders a div with the class <code>App-header</code></li>
<li>verify that App renders a div with the class <code>App-body</code></li>
<li>verify that App renders a div with the class <code>App-footer</code></li>
</ul>

<p><strong>in <code>task_3/dashboard/src/Notifications.test.js</code> create three tests</strong></p>

<ul>
<li>test that Notifications renders without crashing</li>
<li>verify that Notifications renders three list items</li>
<li>verify that Notifications renders the text <code>Here is the list of notifications</code></li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>When running the test suites, you should see the following result</li>
<li>You must use shallow rendering to write the React tests</li>
</ul>

<pre><code>Test Suites: 2 passed, 2 total
Tests: 7 passed, 7 total
</code></pre>

  </div>

  <div class="list-group">
    <!-- Task URLs -->

  <!-- Technical information -->
   <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>atlas-web_react</code></li>
            <li>Directory: <code>react_intro</code></li>
            <li>File: <code>task_3/dashboard/src/App.test.js, task_3/dashboard/src/Notifications.test.js</code></li>
        </ul>
      </div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      7. Deploy to a GitHub page
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

  <!-- Progress vs Score -->

  <!-- Task Body -->
  <p>Deploy your application to GitHub Pages using <code>gh-pages</code> branch and <code>create-react-app</code></p>

<p>Your application should be working correctly when accessing the GitHub URL.</p>

  </div>

  <div class="list-group">
    <!-- Task URLs -->
      <div class="list-group-item">
        <div class="blog_post_div">
          <h4>Add URLs here:</h4>

  <ol class="list_21588 sm-gap">
              <li>
                <a target="_blank" href="https://carlalap.github.io/atlas-web_react/">https://carlalap.github.io/atlas-web_react/</a>
              </li>
          </ol>
  </div>
  </div>
