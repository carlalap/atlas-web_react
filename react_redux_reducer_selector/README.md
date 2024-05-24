# React Redux reducer+selector

<h2>Resources</h2>

<p><strong>Read or watch:</strong></p>

<ul>
<li><a href="https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers" title="Reducers" target="_blank">Reducers</a></li>
<li><a href="https://redux.js.org/introduction/learning-resources#selectors" title="Selectors" target="_blank">Selectors</a></li>
<li><a href="https://redux.js.org/usage/writing-tests" title="Writing tests" target="_blank">Writing tests</a></li>
<li><a href="https://immutable-js.com/docs/v4.3.6/" title="Immutable Map documentation" target="_blank">Immutable Map documentation</a></li>
<li><a href="https://github.com/paularmstrong/normalizr" title="Normalizr" target="_blank">Normalizr</a></li>
<li><a href="https://redux.js.org/usage/structuring-reducers/normalizing-state-shape" title="Normalizing State Shape" target="_blank">Normalizing State Shape</a></li>
</ul>

<h2>Learning Objectives</h2>

<p>At the end of this project, you should be able to <a href="/rltoken/fVm4QhOu3iH5NhYKF2E3Cg" title="explain to anyone" target="_blank">explain to anyone</a>, <strong>without the help of Google</strong>:</p>

<ul>
<li>The purpose of a reducer and the role it plays within your application</li>
<li>Why a reducer should stay as pure as possible</li>
<li>Why mutations should not happen within a reducer</li>
<li>The use of Immutable within the reducer</li>
<li>The use of Normalizr within the app</li>
<li>Selectors: what they are and when to use them</li>
</ul>

<h2>Requirements</h2>

<ul>
<li>Allowed editors: <code>vi</code>, <code>vim</code>, <code>emacs</code>, <code>Visual Studio Code</code></li>
<li>All your files should end with a new line</li>
<li>All your files will be interpreted/compiled on Ubuntu 18.04 LTS using node <code>12.x.x</code> and <code>npm 6.x.x</code></li>
<li>A <code>README.md</code> file, at the root of the folder of the project, is mandatory</li>
<li>Push all of your files, including <code>package.json</code> and <code>.babelrc</code></li>
<li>All of your functions must be exported</li>
</ul>

  </div>
</div>

 <h2 class="gap">Tasks</h2>

    <div data-role="task21688" data-position="1" id="task-num-0">
      <div class="panel panel-default task-card " id="task-21688">

<span id="user_id" data-id="6138"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      0. Write a basic reducer
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

<!-- Progress vs Score -->

   <!-- Task Body -->
   <ul>
<li>Reuse the latest dashboard project you worked on in the React course <code>0x08-React_Redux_action_creator+normalizr</code></li>
</ul>

<p><strong>Create the basic state</strong></p>

<p>In a file named <code>reducers/uiReducer.js</code>, define the initial state of the reducer for the UI:</p>

<ul>
<li>It should have one boolean property <code>isNotificationDrawerVisible</code></li>
<li>It should have one boolean property <code>isUserLoggedIn</code></li>
<li>It should have one empty object <code>user</code></li>
</ul>

<p><strong>Create the reducer function</strong></p>

<p>In the same file, import all the actions that you created in the file <code>actions/uiActionTypes</code> and create a reducer function named <code>uiReducer</code>:</p>

<ul>
<li><code>DISPLAY_NOTIFICATION_DRAWER</code> should set <code>isNotificationDrawerVisible</code> to <code>true</code></li>
<li><code>HIDE_NOTIFICATION_DRAWER</code> should set <code>isNotificationDrawerVisible</code> to <code>false</code></li>
<li><code>LOGIN_SUCCESS</code> should set <code>isUserLoggedIn</code> to <code>true</code></li>
<li><code>LOGIN_FAILURE</code> should set <code>isUserLoggedIn</code> to <code>false</code></li>
<li><code>LOGOUT</code> should set <code>isUserLoggedIn</code> to <code>false</code></li>
</ul>

<p><strong>Write the tests</strong></p>

<p>In a file named <code>reducers/uiReducer.test.js</code>, define the test suite for our simple reducer:</p>

<ul>
<li>Write a test verifying the state returned by the <code>uiReducer</code> function equals the initial state when no action is passed</li>
<li>Write a test verifying the state returned by the <code>uiReducer</code> function equals the initial state when the action <code>SELECT_COURSE</code> is passed</li>
<li>Write a test verifying the state returned by the <code>uiReducer</code> function,  when the action <code>DISPLAY_NOTIFICATION_DRAWER</code> is passed, changes correctly the <code>isNotificationDrawerVisible</code> property</li>
</ul>

<p><strong>Tips:</strong></p>

<ul>
<li>Don&rsquo;t forget to set up the default case in your switch function</li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>You should not mutate the state within the reducer</li>
<li>You must use the spread operator to change the state</li>
<li>All the tests in the project should pass</li>
</ul>

  </div>

  <div class="list-group">
    <!-- Task URLs -->
    <!-- Technical information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>atlas-web_react</code></li>
            <li>Directory: <code>react_redux_reducer_selector</code></li>
            <li>File: <code>task_0/dashboard/src/reducers/uiReducer.js, task_0/dashboard/src/reducers/uiReducer.test.js</code></li>
        </ul>
      </div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      1. Use Immutable for the UI Reducer
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>
    <!-- Progress vs Score -->
    <!-- Task Body -->
    <p>Now that you have set up a basic reducer, let&rsquo;s reuse what we learned in the Immutable module and apply it to that reducer:</p>

<ul>
<li>Install <code>Immutable.js</code> within the project</li>
<li>Update the <code>uiReducer.js</code> file to use <code>Map</code> from <code>Immutable.js</code></li>
<li>Update the different part of the reducer function to use <code>set</code> from <code>Map</code></li>
<li>Update the test suite, so it takes into account the changes</li>
</ul>

<p><strong>Tips:</strong></p>

<ul>
<li>You can use the <code>toJS</code> function within your tests for an easy comparison</li>
<li>Remember that <code>Immutable.js</code> always return a new Map after a modification</li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>For better performances, do not use any <code>fromJS</code>, <code>toJS</code> function within the reducer</li>
<li>All the tests in the project should pass</li>
</ul>

  </div>

  <div class="list-group">
    <!-- Task URLs -->

   <!-- Technical information -->
   <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>atlas-web_react</code></li>
            <li>Directory: <code>react_redux_reducer_selector</code></li>
            <li>File: <code>task_1/dashboard/src/reducers/uiReducer.js, task_1/dashboard/src/reducers/uiReducer.test.js</code></li>
        </ul>
      </div>

<!-- Self-paced manual review -->
  </div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      2. Create a reducer for Courses
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>
    <!-- Progress vs Score -->
    <!-- Task Body -->
    <p><strong>Create a load action</strong></p>

<p>In the <code>courseActionTypes</code> file, create a new action corresponding to when the API returns the list of courses. You can name it <code>FETCH_COURSE_SUCCESS</code></p>

<p><strong>Create the course reducer and default state</strong></p>

<p>In a file <code>courseReducer.js</code>, write a reducer function. The default state should be an empty array. </p>

<p><strong>Define the <code>FETCH_COURSE_SUCCESS</code> action</strong></p>

<p>When the action creator sends the action <code>FETCH_COURSE_SUCCESS</code>, it also sends the list of courses in a data attribute. The action would look like:</p>

<pre><code>{
  type: FETCH_COURSE_SUCCESS,
  data: [
    {
      id: 1,
      name: &quot;ES6&quot;,
      credit: 60
    },
    {
      id: 2,
      name: &quot;Webpack&quot;,
      credit: 20
    },
    {
      id: 3,
      name: &quot;React&quot;,
      credit: 40
    }
  ]
}
</code></pre>

<p>When updating the state of the reducer, you should also set the attribute <code>isSelected</code> to false for every item in the list. The expected data from the reducer should be:</p>

<pre><code>[
  {
    id: 1,
    name: &quot;ES6&quot;,
    isSelected: false,
    credit: 60
  },
  {
    id: 2,
    name: &quot;Webpack&quot;,
    isSelected: false,
    credit: 20
  },
  {
    id: 3,
    name: &quot;React&quot;,
    isSelected: false,
    credit: 40
  }
]
</code></pre>

<p><strong>Define the <code>SELECT_COURSE</code> and <code>UNSELECT_COURSE</code> actions</strong></p>

<p>When the action creator sends the action <code>SELECT_COURSE</code>, it also sends an index corresponding to the id of the course to update. The action would look like:</p>

<pre><code>{
  type: SELECT_COURSE,
  index: 2
}
</code></pre>

<p>The expected data from the reducer should be:</p>

<pre><code>[
  {
    id: 1,
    name: &quot;ES6&quot;,
    isSelected: false,
    credit: 60
  },
  {
    id: 2,
    name: &quot;Webpack&quot;,
    isSelected: true,
    credit: 20
  },
  {
    id: 3,
    name: &quot;React&quot;,
    isSelected: false,
    credit: 40
  }
]
</code></pre>

<p>When the action creator sends the action <code>UNSELECT_COURSE</code>, it also sends an index corresponding to the id of the course to update. The action would look like:</p>

<pre><code>{
  type: UNSELECT_COURSE,
  index: 2
}
</code></pre>

<p>The expected data from the reducer should be:</p>

<pre><code>[
  {
    id: 1,
    name: &quot;ES6&quot;,
    isSelected: false,
    credit: 60
  },
  {
    id: 2,
    name: &quot;Webpack&quot;,
    isSelected: false,
    credit: 20
  },
  {
    id: 3,
    name: &quot;React&quot;,
    isSelected: false,
    credit: 40
  }
]
</code></pre>

<p><strong>Write the tests</strong></p>

<p>In a <code>courseReducer.test.js</code>, write a test suite for the new reducer. Define the following tests:</p>

<ul>
<li>Test that the default state returns an empty array</li>
<li>Test that <code>FETCH_COURSE_SUCCESS</code> returns the data passed</li>
<li>Test that <code>SELECT_COURSE</code> returns the data with the right item updated</li>
<li>Test that <code>UNSELECT_COURSE</code> returns the data with the right item updated</li>
</ul>

<p><strong>Tips:</strong></p>

<ul>
<li>Use ES6 for this reducer, we can look at Immutable later</li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>Try to make the update of object as efficient as possible, for example you can use ES6 Map</li>
<li>All the tests in the project should pass</li>
</ul>

  </div>

  <div class="list-group">
    <!-- Task URLs -->

   <!-- Technical information -->
   <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>atlas-web_react</code></li>
            <li>Directory: <code>react_redux_reducer_selector</code></li>
            <li>File: <code>task_2/dashboard/src/actions/courseActionTypes.js, task_2/dashboard/src/reducers/courseReducer.js, task_2/dashboard/src/reducers/courseReducer.test.js</code></li>
        </ul>
      </div>

   <!-- Self-paced manual review -->
  </div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      3. Create the reducer for notifications
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>
    <!-- Progress vs Score -->
    <!-- Task Body -->
    <p><strong>Create a load action</strong></p>

<p>In the <code>notificationActionTypes</code> file, create a new action corresponding to when the API returns the list of notifications. You can name it <code>FETCH_NOTIFICATIONS_SUCCESS</code></p>

<p><strong>Create the notifications reducer and default state</strong></p>

<p>In a file <code>notificationReducer.js</code>, write a reducer function. The default state should be an object with:</p>

<ul>
<li><code>notifications</code>, which will store the list of notifications</li>
<li><code>filter</code>, which will be the attribute storing which filter is selected</li>
</ul>

<p><strong>Define the <code>FETCH_NOTIFICATIONS_SUCCESS</code> action</strong></p>

<p>When the action creator sends the action <code>FETCH_NOTIFICATIONS_SUCCESS</code>, it also sends the list of notifications in a data attribute. The action would look like:</p>

<pre><code>{
  type: FETCH_NOTIFICATIONS_SUCCESS,
  data: [
    {
      id: 1,
      type: &quot;default&quot;,
      value: &quot;New course available&quot;
    },
    {
      id: 2,
      type: &quot;urgent&quot;,
      value: &quot;New resume available&quot;
    },
    {
      id: 3,
      type: &quot;urgent&quot;,
      value: &quot;New data available&quot;
    }
  ]
}
</code></pre>

<p>When updating the state of the reducer, you should also set the attribute <code>isRead</code> to false for every item in the list. The expected data from the reducer should be:</p>

<pre><code>{
  filter: &quot;DEFAULT&quot;,
  notifications: [
    {
      id: 1,
      isRead: false,
      type: &quot;default&quot;,
      value: &quot;New course available&quot;
    },
    {
      id: 2,
      isRead: false,
      type: &quot;urgent&quot;,
      value: &quot;New resume available&quot;
    },
    {
      id: 3,
      isRead: false,
      type: &quot;urgent&quot;,
      value: &quot;New data available&quot;
    }
  ]
}
</code></pre>

<p><strong>Define the <code>MARK_AS_READ</code> action</strong></p>

<p>When the action creator sends the action <code>MARK_AS_READ</code>, it also sends an index corresponding to the id of the notification to update. The action would look like:</p>

<pre><code>{
  type: MARK_AS_READ,
  index: 2
}
</code></pre>

<p>The expected data from the reducer should be:</p>

<pre><code>{
  filter: &quot;DEFAULT&quot;,
  notifications: [
    {
      id: 1,
      isRead: false,
      type: &quot;default&quot;,
      value: &quot;New course available&quot;
    },
    {
      id: 2,
      isRead: true,
      type: &quot;urgent&quot;,
      value: &quot;New resume available&quot;
    },
    {
      id: 3,
      isRead: false,
      type: &quot;urgent&quot;,
      value: &quot;New data available&quot;
    }
  ]
}
</code></pre>

<p><strong>Define the <code>SET_TYPE_FILTER</code> action</strong></p>

<p>When the action creator sends the action <code>SET_TYPE_FILTER</code>, it also sends a filter attribute with either <code>DEFAULT</code> or <code>URGENT</code>. The action would look like:</p>

<pre><code>{
  type: SET_TYPE_FILTER,
  filter: &quot;URGENT&quot;
}
</code></pre>

<p>The expected data from the reducer should be:</p>

<pre><code>{
  filter: &quot;URGENT&quot;,
  notifications: [
    {
      id: 1,
      isRead: false,
      type: &quot;default&quot;,
      value: &quot;New course available&quot;
    },
    {
      id: 2,
      isRead: false,
      type: &quot;urgent&quot;,
      value: &quot;New resume available&quot;
    },
    {
      id: 3,
      isRead: false,
      type: &quot;urgent&quot;,
      value: &quot;New data available&quot;
    }
  ]
}
</code></pre>

<p><strong>Tips:</strong></p>

<ul>
<li>Use ES6 for this reducer, we can look at Immutable later</li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>Try to make the update of object as efficient as possible, for example you can use ES6 Map</li>
<li>All the tests in the project should pass</li>
</ul>

  </div>

  <div class="list-group">
    <!-- Task URLs -->
    <!-- Technical information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>atlas-web_react</code></li>
            <li>Directory: <code>react_redux_reducer_selector</code></li>
            <li>File: <code>task_3/dashboard/src/actions/notificationActionTypes.js, task_3/dashboard/src/reducers/notificationReducer.js, task_3/dashboard/src/reducers/notificationReducer.test.js</code></li>
        </ul>
      </div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      4. Normalizr &amp; Immutable
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>
    <!-- Progress vs Score -->
    <!-- Task Body -->
    <p>As you can see, updating a specific item in a collection is rather complicated and error prone. Using Normalizr is a good opportunity to simplify mutation</p>

<p><strong>Course schema</strong></p>

<p>Create a new file <code>schema/courses.js</code>. In the file define a schema entity for <code>courses</code>. Create a function <code>coursesNormalizer</code> that would take <code>data</code> as argument and normalize the data with the schema you created. </p>

<p><strong>In the course reducer function:</strong></p>

<ul>
<li>Update the initial state to use an <code>Immutable.js</code> Map</li>
<li>When <code>FETCH_COURSE_SUCCESS</code> action is called, normalize the data with the function you created and merge it with the state</li>
<li>When <code>SELECT_COURSE</code> or <code>UNSELECT_COURSE</code> is called, use the <code>setIn</code> function from Immutable to update the value of the item</li>
</ul>

<p><strong>Update the notification schema</strong></p>

<p>In the file <code>schema/notifications.js</code>, create a function <code>notificationsNormalizer</code> that would take <code>data</code> as argument and normalize it with the notification schema you created in the previous course. </p>

<p><strong>Update the notification reducer</strong></p>

<p>In the notification reducer function:</p>

<ul>
<li>Update the initial state to use an <code>Immutable.js</code> Map</li>
<li>When <code>FETCH_NOTIFICATIONS_SUCCESS</code> action is called, normalize the data with the function <code>notificationsNormalizer</code> you created and merge it with the state</li>
<li>When <code>SET_TYPE_FILTER</code>, use the <code>set</code> function from Immutable to update the value of the state</li>
<li>When <code>MARK_AS_READ</code>, use the <code>setIn</code> function from Immutable to update the value of the item in the state</li>
</ul>

<p><strong>Update the test files/suites:</strong></p>

<ul>
<li>Update the course reducer test file to match the new reducer</li>
</ul>

<p><strong>Tips:</strong></p>

<ul>
<li>You can use the <code>fromJS</code> function from <code>Immutable.js</code> to easily create the initial state from an object</li>
<li>You can use the <code>toJS</code> function from <code>Immutable.js</code> to easily compare the expected data</li>
<li>Selecting an unselecting a course item should only take one line now</li>
<li>Marking a notification item as read should only take one line now</li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>All the tests in the project should pass</li>
</ul>

  </div>

  <div class="list-group">
    <!-- Task URLs -->
    <!-- Technical information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>atlas-web_react</code></li>
            <li>Directory: <code>react_redux_reducer_selector</code></li>
            <li>File: <code>task_4/dashboard/src/schema/courses.js, task_4/dashboard/src/reducers/courseReducer.js, task_4/dashboard/src/schema/notifications.js, task_4/dashboard/src/reducers/notificationReducer.js, task_4/dashboard/src/reducers/courseReducer.test.js, task_4/dashboard/src/reducers/notificationReducer.test.js</code></li>
        </ul>
      </div>
    <!-- Self-paced manual review -->
  </div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      5. Selectors
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>
    <!-- Progress vs Score -->
    <!-- Task Body -->
    <p>Selectors are an efficient way to access the data from the state because a selector is not recomputed unless one of its arguments change.</p>

<p>Let&rsquo;s create a few selectors for the Notifications reducer in <code>src/selectors/notificationSelector.js</code></p>

<ul>
<li>Create a first selector for the filter named <code>filterTypeSelected</code>, that will return the value of the filter</li>
<li>Create another selector for the notifications named <code>getNotifications</code>, that will return the list of notifications in a Map format</li>
<li>Create another selector for the notifications named <code>getUnreadNotifications</code>, that will return the list of unread notifications in a Map format</li>
</ul>

<p>Create a test suite for your selectors in a file named <code>src/selectors/notificationSelector.test.js</code>:</p>

<ul>
<li>test that <code>filterTypeSelected</code> works as expected</li>
<li>test that <code>getNotifications</code> returns a list of the message entities within the reducer</li>
<li>test that <code>getUnreadNotifications</code> return a list of the message entities within the reducer</li>
</ul>

<p><strong>Tips:</strong></p>

<ul>
<li>To write your tests, you can have a state variable using the reducer you created. And pass the state to the selector functions</li>
<li>You can also look into using Reselect for your own projects when you have advanced needs for filtering, reducing and merging data from the state</li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>All the tests in the project should pass</li>
</ul>

  </div>

  <div class="list-group">
    <!-- Task URLs -->

<!-- Technical information -->
   <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>atlas-web_react</code></li>
            <li>Directory: <code>react_redux_reducer_selector</code></li>
            <li>File: <code>task_5/dashboard/src/selectors/notificationSelector.js, task_5/dashboard/src/selectors/notificationSelector.test.js</code></li>
        </ul>
      </div>
