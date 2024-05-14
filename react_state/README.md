# React state

<h2>Resources</h2>

<p><strong>Read or watch</strong>:</p>

<ul>
<li><a href="https://legacy.reactjs.org/docs/state-and-lifecycle.html" title="State and lifecycle" target="_blank">State and lifecycle</a></li>
<li><a href="/rltoken/_9IOkAcTDr5f-XYW6dl3Ig"" title="SetState and State callback" target="_blank">SetState and State callback</a></li>
<li><a href="https://legacy.reactjs.org/docs/context.html" title="Context" target="_blank">Context</a></li>
<li><a href="https://legacy.reactjs.org/docs/forms.html" title="Forms and Controlled components" target="_blank">Forms and Controlled components</a></li>
<li><a href="/https://legacy.reactjs.org/docs/lifting-state-up.html" title="Lifting State Up" target="_blank">Lifting State Up</a></li>
<li><a href="https://legacy.reactjs.org/docs/hooks-intro.html" title="React Hooks" target="_blank">React Hooks</a></li>
<li><a href="https://enzymejs.github.io/enzyme/docs/api/ReactWrapper/state.html" title="Enzyme State" target="_blank">Enzyme State</a></li>
<li><a href="https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/setState.html" title="Enzyme SetState" target="_blank">Enzyme SetState</a></li>
<li><a href="https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/instance.html" title="Enzyme Instance" target="_blank">Enzyme Instance</a></li>
<li><a href="https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/simulate.html" title="Enzyme Simulate" target="_blank">Enzyme Simulate</a></li>
</ul>

<h2>Learning Objectives</h2>

<p>At the end of this project, you are expected to be able to <a href="/rltoken/HopRXDXhGy_1smrX7kHZog" title="explain to anyone" target="_blank">explain to anyone</a>, <strong>without the help of Google</strong>:</p>

<ul>
<li>What the state of a component or a container is</li>
<li>The lifecycle of a component</li>
<li>How to modify a state and execute code in the right order</li>
<li>What a controlled component is</li>
<li>How to use Forms in React</li>
<li>How to reuse smaller components, keep them pure, and lift its state to principal containers</li>
<li>The use of a React Hook and how to create one</li>
<li>How to test State changes with Enzyme</li>
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

<div data-role="task21665" data-position="1" id="task-num-0">
      <div class="panel panel-default task-card " id="task-21665">
  <span id="user_id" data-id="6138"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      0. Adding a local state for notifications
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

<!-- Progress vs Score -->

<!-- Task Body -->
 <p>Using the previous project (<code>React inline styling</code>), we have modularized our React application without worrying about interactions and state, which is usually a recommended process of development. Now, our application is in a good place to start adding logic and state.</p>

<p><strong>Modify the App component in <code>task_0/dashboard/src/App.App.js</code>:</strong></p>

<p>Create a local state to store a <code>displayDrawer</code> element:</p>

<ul>
<li>Define the default state for the state in the <code>constructor</code> of the Class</li>
<li>Create a function named <code>handleDisplayDrawer</code> that will change the value of <code>displayDrawer</code> to <code>true</code></li>
<li>Create a function named <code>handleHideDrawer</code> that will change the value of <code>displayDrawer</code> to <code>false</code></li>
</ul>

<p><strong>Modify the <code>Notifications</code> import in <code>task_0/dashboard/src/App/App.js</code>:</strong></p>

<ul>
<li>Pass to the component the prop <code>displayDrawer</code> using the local state</li>
<li>Pass the new functions <code>handleDisplayDrawer</code> and <code>handleHideDrawer</code></li>
</ul>

<p><strong>Modify the App test suite in <code>task_0/dashboard/src/App/App.test.js</code>:</strong></p>

<ul>
<li>Add a test to verify that the default state for <code>displayDrawer</code> is <code>false</code>. Verify that after calling <code>handleDisplayDrawer</code>, the state should now be <code>true</code></li>
<li>Add a test to verify that after calling <code>handleHideDrawer</code>, the state is updated to be <code>false</code></li>
</ul>

<p><strong>Modify the Notifications component in <code>task_0/dashboard/src/Notifications/Notifications.js</code>:</strong></p>

<ul>
<li>Define the <code>propTypes</code> and the <code>defaultProps</code> for the new props</li>
<li>When clicking on <code>Your notifications</code>, call <code>handleDisplayDrawer</code></li>
<li>When clicking on the close button, call <code>handleHideDrawer</code></li>
</ul>

<p>At this point, after reloading the app, you should be able to show / hide the notifications panel</p>

<p><strong>Modify the Notifications test suite in <code>task_0/dashboard/src/Notifications/Notifications.test.js</code>:</strong></p>

<ul>
<li>Add a test to verify that clicking on the menu item calls <code>handleDisplayDrawer</code></li>
<li>Add a test to verify that clicking on the button calls <code>handleHideDrawer</code></li>
</ul>

<p><strong>Tips:</strong></p>

<ul>
<li>Remember that you implemented <code>shouldComponentUpdate</code>. You will need to modify the logic to allow the component to rerender when the prop <code>displayDrawer</code> changes</li>
<li>Use <code>setState</code> and <code>instance</code> when creating tests with Enzyme</li>
<li>Remember to use spies to verify if a function is being called. You can pass a spy as a property</li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>Do not forget to bind the functions you are passing to the children to improve performances</li>
<li>When running, there should not be any lint error in the console</li>
</ul>

  </div>

<div class="list-group">
    <!-- Task URLs -->

<!-- Technical information -->
   <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>atlas-web_react</code></li>
            <li>Directory: <code>react_state</code></li>
            <li>File: <code>task_0/dashboard/src/App/App.js, task_0/dashboard/src/App/App.test.js, task_0/dashboard/src/Notifications/Notifications.js, task_0/dashboard/src/Notifications/Notifications.test.js</code></li>
        </ul>
      </div>

 <!-- Self-paced manual review -->
  </div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      1. Controlled components and state callback
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

 <!-- Progress vs Score -->

 <!-- Task Body -->
<p><strong>create a form within the Login component &amp; handle login submit in <code>task_1/dashboard/src/Login/Login.js</code>:</strong></p>

<ul>
<li>Create a local state with the value <code>isLoggedIn</code> set to <code>false</code></li>
<li>Wrap the inputs within a <code>form</code> element</li>
<li>Replace the button by an <code>input</code> element with type <code>submit</code></li>
<li>Create a function named <code>handleLoginSubmit</code> that will update the local state by setting <code>isLoggedIn</code> to <code>true</code></li>
<li>When the form is submitted call the newly created login submission handling function</li>
</ul>

<p><strong>create controlled components in the <code>Login</code> component in<code>task_1/dashboard/src/Login/Login.js</code></strong></p>

<ul>
<li>Modify the local state to add two new values <code>email</code> and <code>password</code>. By default these values are empty but not <code>null</code></li>
<li>Modify the two inputs elements in the form and set their values to use the local state</li>
<li>Create two function <code>handleChangeEmail</code> and <code>handleChangePassword</code> that the two inputs will call when the value in the input field is changed. The local state should update with what the user is typing</li>
</ul>

<p><strong>modify state callback in <code>task_1/dashboard/src/Login/Login.js</code></strong></p>

<ul>
<li>Modify the local state to add one value <code>enableSubmit</code>. It should be set to <code>false</code> by default</li>
<li>Modify the Submit button to only be enabled when the <code>enableSubmit</code> value of the local state is <code>true</code></li>
<li>Every time the user changes the value of the <code>email</code> or <code>password</code> field, verify that both fields are not empty. If they are not empty, you can enable the submit button</li>
</ul>

<p><strong>add tests in the <code>task_1/dashboard/src/Login/Login.js</code> suite</strong></p>

<ul>
<li>Add a test to verify that the submit button is disabled by default</li>
<li>Add a test to verify that after changing the value of the two inputs, the button is enabled</li>
</ul>

<p><strong>Tips:</strong></p>

<ul>
<li>To simulate an input change, you can use the <code>simulate</code> method and use the <code>change</code> event</li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>The state should have all the default values set in the <code>constructor</code></li>
<li>Do not forget to bind the functions you are passing to the children to improve performances</li>
<li>When submitting the form, the page should not reload</li>
<li>Make sure that the button is always enabled when the two inputs are not empty. And make sure that the button is always disabled when one of the input&rsquo;s value is empty</li>
<li>When running, there should not be any lint error in the console</li>
</ul>

  </div>

  <div class="list-group">
    <!-- Task URLs -->

<!-- Technical information -->
   <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>atlas-web_react</code></li>
            <li>Directory: <code>react_state</code></li>
            <li>File: <code>task_1/dashboard/src/Login/Login.js, task_1/dashboard/src/Login/Login.test.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->

  </div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      2. Context
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

 <!-- Progress vs Score -->

<!-- Task Body -->
<p><strong>Create a simple React Context in <code>task_2/dashboard/src/App/AppContext.js</code></strong></p>

<ul>
<li>Define a default user object, containing <code>email</code>, <code>password</code>, and <code>isLoggedIn</code></li>
<li>Define a default <code>logOut</code> function</li>
<li>Create a React context containing a <code>user</code> object and a <code>logOut</code> function. Set both default values using the previously created elements</li>
</ul>

<p><strong>Create the local state for the App in <code>task_2/dashboard/src/App/App.js</code></strong></p>

<ul>
<li>Modify the local state of the App container by adding a <code>user</code> object and <code>logOut</code> function. Set the default (or empty) values using the ones you previously created for the context</li>
</ul>

<p><strong>Create the login and logout functions in the <code>App</code> container in <code>task_2/dashboard/src/App/App.js</code> and use them</strong></p>

<ul>
<li>Create a <code>logIn</code> function that takes as argument <code>email</code> and <code>password</code>. When the function is called, update the user object in the local state. Set the <code>email</code> and <code>password</code>. Set the <code>isLoggedIn</code> value to <code>true</code></li>
<li>Modify the <code>logOut</code> function to reset the value of the <code>user</code> object in the local state</li>
<li>Remove the two props <code>isLoggedIn</code> and <code>logOut</code> from the App, they will now be used through the state</li>
<li>Refactor the render method to use the objects from the state to display the <code>CourseList</code> or the <code>Login</code> components</li>
<li>Pass the new <code>logIn</code> function to the <code>Login</code> component</li>
</ul>

<p><strong>in <code>task_2/dashboard/src/Login/Login.js</code></strong></p>

<ul>
<li>Remove from the state the <code>isLoggedIn</code> property, since we don&rsquo;t use it anymore</li>
<li>Modify the <code>handleLoginSubmit</code> to call the newly created <code>logIn</code> function</li>
</ul>

<p><strong>Checkpoint</strong></p>

<p>Take a moment to test your application. At this point, you should be able to login inside the app:</p>

<ul>
<li>Enter a few letters to the email and the password inputs, and click on the submit button. You should see the list of courses and the login component should be unmounted.</li>
<li>Verify that the Notifications panel is still working correctly. You should be able to show/hide the panel by clicking on the top right link and the close button.</li>
</ul>

<p><strong>Setting the context in <code>task_2/dashboard/src/App/App.js</code>:</strong></p>

<ul>
<li>In the <code>App</code> container, wrap the entire app with the <code>AppContext</code> created earlier using the <code>provider</code> element. Set the value to the <code>user</code> and <code>logOut</code> function using the local state</li>
</ul>

<p><strong>Modify the <code>Header</code> component in <code>task_2/dashboard/src/Header/Header.js</code>:</strong></p>

<ul>
<li>Modify the <code>Header</code> to inherit the context using the <code>ContextType</code> API</li>
<li>Add a new line under the header, that is only displayed when the value <code>isLoggedIn</code> in the <code>user</code> object within the context is <code>true</code>

<ul>
<li>This section should display &ldquo;Welcome <strong>email</strong> (<em>logout</em>)&rdquo;</li>
<li>Add the id <code>logoutSection</code> to the section</li>
<li>Clicking on the <code>logout</code> link, should call the <code>logOut</code> function included within the context</li>
</ul></li>
</ul>

<p>At this point, you should be able to login (remove Login component and show CourseList component) and logout within the map (remove CourseList component, show Login component, show new header section)</p>

<p><strong>Create the tests!</strong></p>

<p><strong>in <code>task_2/dashboard/src/Header/Header.test.js</code></strong></p>

<ul>
<li>Make sure the current tests pass correctly</li>
<li>Add a test that mounts the <code>Header</code> component with a default context value. Verify that the <code>logoutSection</code> is not created</li>
<li>Add a test that mounts the <code>Header</code> component with a user defined (<code>isLoggedIn</code> is <code>true</code> and an email is set). Verify that the <code>logoutSection</code> is  created</li>
<li>Add a test that mounts the <code>Header</code> component with a user defined (<code>isLoggedIn</code> is <code>true</code> and an email is set) and the <code>logOut</code> is linked to a spy. Verify that clicking on the link is calling the spy</li>
</ul>

<p><strong>in <code>task_2/dashboard/src/App/App.test.js</code></strong></p>

<ul>
<li>Refactor the previous tests to not use props but state instead</li>
<li>Refactor the test checking if <code>logOut</code> is being called by verifying if the state is updated correctly instead</li>
<li>Create a test to verify that the <code>logIn</code> function updates the state correctly</li>
<li>Create a test to verify that the <code>logOut</code> function updates the state correctly</li>
</ul>

<p><strong>Tips:</strong></p>

<ul>
<li>Remember that function components can not use the context, you might need to convert the <code>Header</code> function component to a Class</li>
<li>Unfortunately, Enzyme does not fully support the newly created Static Context API of React. Therefore do not use the <code>setContext</code> API of Enzyme since it is not compatible. Instead wrap the component using the <code>Context.Provider</code> to pass different context values</li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>Be careful that Context is using reference identity to determine when to re-render. Don&rsquo;t create directly an object within the Provider value</li>
<li>Don&rsquo;t forget to export elements that are going to be reused through the app (e.g default user)</li>
<li>Don&rsquo;t forget to clean unused state and props after refactoring</li>
<li>Don&rsquo;t forget to set the <code>propTypes</code> and <code>defaultProps</code> for any new prop</li>
</ul>

  </div>

  <div class="list-group">
    <!-- Task URLs -->

<!-- Technical information -->
   <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>atlas-web_react</code></li>
            <li>Directory: <code>react_state</code></li>
            <li>File: <code>task_2/dashboard/src/App/AppContext.js, task_2/dashboard/src/App/App.js, task_2/dashboard/src/Login/Login.js, task_2/dashboard/src/Header/Header.js, task_2/dashboard/src/Header/Header.test.js, task_2/dashboard/src/App/App.test.js</code></li>
        </ul>
      </div>

   <!-- Self-paced manual review -->
  </div>

  </div>
    <div data-role="task21668" data-position="4" id="task-num-3">
      <div class="panel panel-default task-card " id="task-21668">
  <span id="user_id" data-id="6138"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      3. Context consumer &amp; advanced state
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

   <!-- Progress vs Score -->

   <!-- Task Body -->
   <p><strong>Context consumer: modify the Footer component in <code>task_3/dashboard/src/Footer/Footer.js</code></strong></p>

<ul>
<li>Without making the component a Class, make the component subscribe to the context changes</li>
<li>When the user is logged in, display a new paragraph containing a link with the text <code>Contact us</code></li>
</ul>

<p><strong>Modify the test suite in <code>task_3/dashboard/src/Footer/Footer.test.js</code>:</strong></p>

<ul>
<li>Refactor the test to make them work correctly with the changes</li>
<li>Add a test to verify that the link is not displayed when the user is logged out within the context</li>
<li>Add a test to verify that the link is displayed when the user is logged in within the context</li>
</ul>

<p><strong>Advanced state: modify the <code>App</code> container in <code>task_3/dashboard/src/App/App.js</code>:</strong></p>

<ul>
<li>Set the <code>listNotifications</code> within the state</li>
<li>Create a function <code>markNotificationAsRead</code>. It accepts an <code>id</code> (number) in argument. When the function is called, it remove the notification with that id from the list of notifications within the state</li>
<li>Pass the list of notifications to the <code>Notifications</code> component using the state</li>
<li>Pass the newly created function to the <code>Notifications</code> component</li>
</ul>

<p><strong>Modify the test suite in <code>task_3/dashboard/src/App/App.test.js</code>:</strong></p>

<ul>
<li>Add a test to verify that <code>markNotificationAsRead</code> works as intended. You can for example set the state with a mock list of notifications, then call the function and verify that the state of the container has been updated correctly</li>
</ul>

<p><strong>Modify the <code>Notifications</code> container in <code>task_3/dashboard/src/Notifications/Notifications.js</code>:</strong></p>

<ul>
<li>Refactor the code to delete the function <code>markAsRead</code>, we can now use the real one</li>
<li>Refactor the code to delete the <code>shouldComponentUpdate</code>, the component is only using prop and state, and you should be able to optimize the performance with <code>PureComponent</code></li>
<li>Use the newly created function <code>markNotificationAsRead</code> to mark a notification as read</li>
<li>Define the prop type and the default for <code>markNotificationAsRead</code></li>
</ul>

<p><strong>Modify the test suite in <code>task_3/dashboard/src/Notifications/Notifications.test.js</code>:</strong></p>

<ul>
<li>Refactor the tests to match the new container</li>
</ul>

<p><strong>Checkpoint</strong></p>

<p>Take a moment to test your application. At this point:</p>

<ul>
<li>When you log in, you should be able to see a new footer</li>
<li>When you display the panel of notifications, you should each of them disappear on click</li>
</ul>

<p><strong>Tips:</strong></p>

<ul>
<li>If you end up having to reuse mock data a lot, feel free to export and import the same mockup from the same file</li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>Don&rsquo;t forget to clean unused state and props after refactoring</li>
<li>Don&rsquo;t forget to set the <code>propTypes</code> and <code>defaultProps</code> for any new prop</li>
</ul>

  </div>

  <div class="list-group">
    <!-- Task URLs -->

<!-- Technical information -->
   <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>atlas-web_react</code></li>
            <li>Directory: <code>react_state</code></li>
            <li>File: <code>task_3/dashboard/src/Footer/Footer.js, task_3/dashboard/src/Footer/Footer.test.js, task_3/dashboard/src/App/App.js, task_3/dashboard/src/App/App.test.js, task_3/dashboard/src/Notifications/Notifications.test.js</code></li>
        </ul>
      </div>

<!-- Self-paced manual review -->
  </div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      4. Introduction to react hook
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

<!-- Progress vs Score -->

<!-- Task Body -->
<p><strong>Using React Hooks, modify the <code>CourseListRow</code> component in <code>task_4/dashboard/src/CourseList/CourseListRow.js</code>:</strong></p>

<ul>
<li>Add a new style named <code>rowChecked</code> with the background color <code>#e6e4e4</code></li>
<li>When the row is a simple row, add a checkbox within the first cell</li>
<li>When the user checks the box, the styling of the row should use <code>rowChecked</code></li>
</ul>

<p><strong>Tips &amp; Requirements:</strong></p>

<ul>
<li>Make sure that the checkbox of each row is correctly checked or unchecked after the user interaction</li>
<li>React Hooks are new in React and the number of resources can be limited. Refer to the official documentation of React. The exercise is simple enough that should not need anything else</li>
<li>Do not modify the component to a Class. You need to use the React Hook</li>
</ul>

  </div>

  <div class="list-group">
    <!-- Task URLs -->

<!-- Technical information -->
  <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>atlas-web_react</code></li>
            <li>Directory: <code>react_state</code></li>
            <li>File: <code>task_4/dashboard/src/CourseList/CourseListRow.js</code></li>
        </ul>
      </div>
  <!-- Self-paced manual review -->
  </div>
