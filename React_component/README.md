# React component

<h2>Resources</h2>

<p><strong>Read or watch</strong>:</p>

<ul>
<li><a href="https://react.dev/reference/react/components" title="React components" target="_blank">React components</a></li>
<li><a href="https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi" title="React Developer Tools" target="_blank">React Developer Tools</a></li>
<li><a href="https://enzymejs.github.io/enzyme/docs/api/shallow.html" title="Enzyme Shallow" target="_blank">Enzyme Shallow</a></li>
<li><a href="https://enzymejs.github.io/enzyme/docs/api/ReactWrapper/mount.html" title="Enzyme Mount" target="_blank">Enzyme Mount</a></li>
<li><a href="" title="Enzyme Unmount" target="_blank">Enzyme Unmount</a></li>
<li><a href="https://react.dev/reference/react/components" title="React Pure components" target="_blank">React Pure components</a></li>
<li><a href="https://legacy.reactjs.org/docs/higher-order-components.html" title="React Higher Order Components" target="_blank">React Higher Order Components</a></li>
<li><a href="https://jestjs.io/docs/jest-object" title="Jest mock function" target="_blank">Jest mock function</a></li>
</ul>

<h2>Learning Objectives</h2>

<p>At the end of this project, you are expected to be able to <a href="/rltoken/wk6j6nYuf2em3Yql6PTQIw" title="explain to anyone" target="_blank">explain to anyone</a>, <strong>without the help of Google</strong>:</p>

<ul>
<li>When to use a Class or a function to create a component</li>
<li>The lifecycle of a Class component</li>
<li>How to test a component</li>
<li>How to utilize a Jest spy to verify that a function is being called correctly</li>
<li>What an HOC is and how to use it</li>
<li>How to optimize performance and control which components to render</li>
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

    <div data-role="task19288" data-position="1" id="task-num-0">
      <div class="panel panel-default task-card " id="task-19288">

<span id="user_id" data-id="6138"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      0. Commence with class components
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

<!-- Progress vs Score -->

  <!-- Task Body -->
  <p>Start this project with files from the the last task of the <code>React Props</code> project:</p>

<p><strong>Convert the App function into a React Class:</strong></p>

<ul>
<li>Modify the function within <code>App.js</code> to convert the App function into a React class</li>
<li>Make sure that the tests are still passing</li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>At this point, reloading the App should display the exact same page as the last task</li>
<li>The console in your browser should not show any error or warning</li>
</ul>

  </div>

</div>

  <div class="list-group">
<!-- Task URLs -->

   <!-- Technical information -->
   <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>atlas-web_react</code></li>
            <li>Directory: <code>React_component</code></li>
            <li>File: <code>task_0/dashboard/src/App/App.js</code></li>
        </ul>
      </div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      1. Lifecycles
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

   <!-- Progress vs Score -->

   <!-- Task Body -->
   <p><strong>Add lifecycle to a component</strong></p>

<p>In the <code>App</code> Class:</p>

<ul>
<li>Add a props named <code>logOut</code> with the props type being <code>function</code></li>
<li>The default value for this property, should be an empty function</li>
<li>Add an event listener when the component is mounted to listen to when the user is pressing down the keyboard keys</li>
<li>When the user is pressing down the <code>control</code> and the <code>h</code> keys simultaneously, display the alert <code>Logging you out</code> and call the function <code>logOut</code></li>
</ul>

<p><strong>Add the tests</strong></p>

<p>In the test file for the App Class:</p>

<ul>
<li>Create a test to verify that when the keys <code>control</code> and <code>h</code> are pressed the <code>logOut</code> function, passed as a prop, is called and the alert function is called with the string <code>Logging you out</code></li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>Make sure to remove the event listener when the component is unmounted</li>
<li>In the test file, make sure to restore the alert function you mocked</li>
<li>At this point, reloading the App should display the exact same page as the last task</li>
<li>The console in your browser should not show any error or warning</li>
</ul>

  </div>

  <div class="list-group">
    <!-- Task URLs -->

<!-- Technical information -->
   <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>atlas-web_react</code></li>
            <li>Directory: <code>React_component</code></li>
            <li>File: <code>task_1/dashboard/src/App/App.js, task_1/dashboard/src/App/App.test.js</code></li>
        </ul>
      </div>

 <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      2. Handling Events
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

  <!-- Progress vs Score -->

  <!-- Task Body -->
  <p><strong>Create a new handing event</strong></p>

<p>In the <code>Notifications</code> component:</p>

<ul>
<li>Convert the function into a React Class</li>
<li>Make sure that the tests are still passing</li>
<li>Create a new <code>markAsRead</code> function within the Notifications class. It accepts one argument: id(number)</li>
<li>When the function is called, it logs to the console the message &ldquo;Notification $id has been marked as read</li>
<li>Pass the function <code>markAsRead</code> to the <code>NotificationItem</code> component as a property</li>
</ul>

<p>In the <code>NotificationItem</code> Class:</p>

<ul>
<li>Modify the <code>li</code> element to call the new function <code>markAsRead</code> on click. It should send the id of the notification</li>
<li>Define the new property type and the default property for the new properties</li>
</ul>

<p><strong>Add the tests</strong></p>

<p>In the <code>Notifications</code> test file:</p>

<ul>
<li>Create a test, that will mockup the console.log function</li>
<li>Check that when calling the function <code>markAsRead</code> on an instance of the component, the spy is being called with the right message</li>
</ul>

<p>In the <code>NotificationItem</code> test file:</p>

<ul>
<li>Create a test, that will pass a spy as the <code>markAsRead</code> property</li>
<li>Check that when simulating a click on the component, the spy is called with the right ID argument</li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>Make sure to bind the function <code>markAsRead</code> in your constructor to avoid unecessary re-rendering</li>
<li>In the test file, make sure to restore the console function you mocked</li>
<li>At this point, reloading the App should display the exact same page as the last task. Use the React Chrome Extension to make sure the Notifications component displays correctly</li>
<li>The console in your browser should not show any error or warning</li>
</ul>

  </div>

  <div class="list-group">
    <!-- Task URLs -->

 <!-- Technical information -->
   <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>atlas-web_react</code></li>
            <li>Directory: <code>React_component</code></li>
            <li>File: <code>task_2/dashboard/src/Notifications/NotificationItem.js, task_2/dashboard/src/Notifications/NotificationItem.test.js, task_2/dashboard/src/Notifications/Notifications.js, task_2/dashboard/src/Notifications/Notifications.test.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->

  </div>
