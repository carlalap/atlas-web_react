# React Redux action creator+normalizr

<h2>Resources</h2>

<p><strong>Read or watch:</strong></p>

<ul>
<li><a href="https://github.com/paularmstrong/normalizr" title="Normalizr" target="_blank">Normalizr</a></li>
<li><a href="https://redux.js.org/usage/structuring-reducers/normalizing-state-shape" title="Normalizing State Shape" target="_blank">Normalizing State Shape</a></li>
<li><a href="https://redux.js.org/introduction/getting-started" title="Redux Getting started and core concepts" target="_blank">Redux Getting started and core concepts</a></li>
<li><a href="https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow" title="Redux Actions" target="_blank">Redux Actions</a></li>
<li><a href="https://redux.js.org/tutorials/fundamentals/part-6-async-logic" title="Async Actions" target="_blank">Async Actions</a></li>
<li><a href="https://redux.js.org/usage/writing-tests" title="Writing tests for Redux" target="_blank">Writing tests for Redux</a></li>
</ul>

<h2>Learning Objectives</h2>

<p>At the end of this project, you are expected to be able to <a href="/rltoken/YWniKf3iaJwqGkGNcBBZWg" title="explain to anyone" target="_blank">explain to anyone</a>, <strong>without the help of Google</strong>:</p>

<ul>
<li>Normalizr&rsquo;s purpose and how to use it</li>
<li>schemas and normalization of nested JSON</li>
<li>core concepts of Redux</li>
<li>Redux actions</li>
<li>Redux action creators</li>
<li>async actions in Redux</li>
<li>how to write tests for Redux</li>
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

<h2>Provided files</h2>

<h3><code>notifications.json</code></h3>

<details>
<summary>Click to show/hide contents of <code>notifications.json</code></summary>
<pre><code>
[
  {
    "id": "5debd76480edafc8af244228",
    "author": {
      "id": "5debd764a7c57c7839d722e9",
      "name": {
        "first": "Poole",
        "last": "Sanders"
      },
      "email": "poole.sanders@holberton.nz",
      "picture": "http://placehold.it/32x32",
      "age": 25
    },
    "context": {
      "guid": "2d8e40be-1c78-4de0-afc9-fcc147afd4d2",
      "isRead": true,
      "type": "urgent",
      "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    }
  },
  {
    "id": "5debd764507712e7a1307303",
    "author": {
      "id": "5debd7648ba8641ce0a34ea4",
      "name": {
        "first": "Norton",
        "last": "Grimes"
      },
      "email": "norton.grimes@holberton.nz",
      "picture": "http://placehold.it/32x32",
      "age": 37
    },
    "context": {
      "guid": "cec84b7a-7be4-4af0-b833-f1485433f66e",
      "isRead": false,
      "type": "urgent",
      "value": "ut labore et dolore magna aliqua. Dignissim convallis aenean et tortor at risus viverra adipiscing. Ac tortor dignissim convallis aenean et. "
    }
  },
  {
    "id": "5debd76444dd4dafea89d53b",
    "author": {
      "id": "5debd764a7c57c7839d722e9",
      "name": {
        "first": "Poole",
        "last": "Sanders"
      },
      "email": "poole.sanders@holberton.nz",
      "picture": "http://placehold.it/32x32",
      "age": 25
    },
    "context": {
      "guid": "280913fe-38dd-4abd-8ab6-acdb4105f922",
      "isRead": false,
      "type": "urgent",
      "value": "Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed"
    }
  },
  {
    "id": "5debd76485ee4dfd1284f97b",
    "author": {
      "id": "5debd764f07f50822352e252",
      "name": {
        "first": "Roach",
        "last": "Cameron"
      },
      "email": "roach.cameron@holberton.nz",
      "picture": "http://placehold.it/32x32",
      "age": 26
    },
    "context": {
      "guid": "89906f88-a02d-41ee-b214-daa0c54633e3",
      "isRead": true,
      "type": "urgent",
      "value": "Odio pellentesque diam volutpat commodo sed egestas egestas"
    }
  },
  {
    "id": "5debd7644e561e022d66e61a",
    "author": {
      "id": "5debd764e66586653a8a33f3",
      "name": {
        "first": "Christy",
        "last": "Collier"
      },
      "email": "christy.collier@holberton.nz",
      "picture": "http://placehold.it/32x32",
      "age": 27
    },
    "context": {
      "guid": "f8d66cca-63ec-4f19-a422-a3e1c8f05a36",
      "isRead": false,
      "type": "urgent",
      "value": "In hendrerit gravida rutrum quisque non tellus orci. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim. Lorem mollis aliquam ut porttitor"
    }
  },
  {
    "id": "5debd7644aaed86c97bf9d5e",
    "author": {
      "id": "5debd764f5017139ce541857",
      "name": {
        "first": "Mason",
        "last": "Douglas"
      },
      "email": "mason.douglas@holberton.nz",
      "picture": "http://placehold.it/32x32",
      "age": 31
    },
    "context": {
      "guid": "de55f849-8fca-4ac7-afbb-41751f09d0c6",
      "isRead": false,
      "type": "default",
      "value": "Cursus metus aliquam eleifend mi in nulla posuere. "
    }
  },
  {
    "id": "5debd76413f0d5e5429c28a0",
    "author": {
      "id": "5debd76456a6a030695e6a70",
      "name": {
        "first": "Marshall",
        "last": "Wynn"
      },
      "email": "marshall.wynn@holberton.nz",
      "picture": "http://placehold.it/32x32",
      "age": 26
    },
    "context": {
      "guid": "8094c267-ab84-47e1-8801-58ddd23f3b2a",
      "isRead": false,
      "type": "default",
      "value": "Quam viverra orci sagittis eu volutpat odio facilisis mauris sit"
    }
  },
  {
    "id": "5debd7642e815cd350407777",
    "author": {
      "id": "5debd764f8452ef92346c772",
      "name": {
        "first": "Cherry",
        "last": "Miles"
      },
      "email": "cherry.miles@holberton.nz",
      "picture": "http://placehold.it/32x32",
      "age": 25
    },
    "context": {
      "guid": "3068c575-d619-40af-bf12-dece1ee18dd3",
      "isRead": true,
      "type": "default",
      "value": "Est ante in nibh mauris cursus mattis molestie a iaculis. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim"
    }
  },
  {
    "id": "5debd764c1127bc5a490a4d0",
    "author": {
      "id": "5debd76470dcced4a244fe7f",
      "name": {
        "first": "Sykes",
        "last": "Fulton"
      },
      "email": "sykes.fulton@holberton.nz",
      "picture": "http://placehold.it/32x32",
      "age": 36
    },
    "context": {
      "guid": "efb6c485-00f7-4fdf-97cc-5e12d14d6c41",
      "isRead": false,
      "type": "default",
      "value": "Cursus risus at ultrices mi."
    }
  },
  {
    "id": "5debd7646ef31e0861ec1cab",
    "author": {
      "id": "5debd7645c8d811b8c6a235d",
      "name": {
        "first": "Valentine",
        "last": "Juarez"
      },
      "email": "valentine.juarez@holberton.nz",
      "picture": "http://placehold.it/32x32",
      "age": 25
    },
    "context": {
      "guid": "1d3918d0-67e6-44a4-9031-72d7750234de",
      "isRead": true,
      "type": "default",
      "value": "Velit laoreet id donec ultrices tincidunt arcu non. Aliquet eget sit amet tellus cras adipiscing"
    }
  },
  {
    "id": "5debd764a4f11eabef05a81d",
    "author": {
      "id": "5debd764d0b0e7ed3e45ee6d",
      "name": {
        "first": "Maryann",
        "last": "Larson"
      },
      "email": "maryann.larson@holberton.nz",
      "picture": "http://placehold.it/32x32",
      "age": 32
    },
    "context": {
      "guid": "98fe7af4-8300-461f-a376-c147b2987616",
      "isRead": false,
      "type": "default",
      "value": "Ac placerat vestibulum lectus mauris ultrices eros in cursus. Amet nisl suscipit adipiscing bibendum est ultricies integer. Lorem donec massa sapien faucibus et molestie ac"
    }
  },
  {
    "id": "5debd764af0fdd1fc815ad9b",
    "author": {
      "id": "5debd764fb6db3a5c21ce617",
      "name": {
        "first": "Naomi",
        "last": "Hayes"
      },
      "email": "naomi.hayes@holberton.nz",
      "picture": "http://placehold.it/32x32",
      "age": 30
    },
    "context": {
      "guid": "cd1a09cf-ad6e-4478-9662-18a292807e2e",
      "isRead": false,
      "type": "urgent",
      "value": "Nulla malesuada pellentesque elit eget gravida cum sociis"
    }
  },
  {
    "id": "5debd76468cb5b277fd125f4",
    "author": {
      "id": "5debd764f7234e1d44828515",
      "name": {
        "first": "Knowles",
        "last": "Vazquez"
      },
      "email": "knowles.vazquez@holberton.nz",
      "picture": "http://placehold.it/32x32",
      "age": 28
    },
    "context": {
      "guid": "0f446b01-37c3-4884-9dc6-316f23b7711b",
      "isRead": false,
      "type": "urgent",
      "value": "Elit eget gravida cum sociis natoque penatibus et. Congue mauris rhoncus aenean vel"
    }
  },
  {
    "id": "5debd764de9fa684468cdc0b",
    "author": {
      "id": "5debd764ec7c8d21449be7d7",
      "name": {
        "first": "Greta",
        "last": "Benjamin"
      },
      "email": "greta.benjamin@holberton.nz",
      "picture": "http://placehold.it/32x32",
      "age": 23
    },
    "context": {
      "guid": "4cc5bc3a-98fe-4392-b97d-6a41da1d944b",
      "isRead": false,
      "type": "default",
      "value": "Leo vel fringilla est ullamcorper. Volutpat consequat mauris nunc congue"
    }
  }
]
</code></pre>
</details>

<h3><code>login-success.json</code></h3>

<details>
<summary>Click to show/hide contents of <code>login-success.json</code></summary>
<pre><code>
{
  "first_name": "Johann",
  "last_name": "Salva",
  "email": "johann.salva@holberton.nz",
  "profile_picture": "http://placehold.it/32x32"
}
</code></pre>
</details>

  </div>
</div>

<h2 class="gap">Tasks</h2>

   <div data-role="task21680" data-position="1" id="task-num-0">
      <div class="panel panel-default task-card " id="task-21680">
  <span id="user_id" data-id="6138"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      0. Read data from a JSON
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

<!-- Progress vs Score -->

<!-- Task Body -->
 <p>Reuse the latest dashboard project you worked on in the React course <code>0x06-React_state</code></p>

<p>For this task, place <code>notifications.json</code> into the root of the project directory and use the data inside for the next step.</p>

<p>Create a new <code>notifications.js</code> file in a <code>schema</code> folder:</p>

<ul>
<li>Import the JSON data from <code>notifications.json</code> and give it a name. Try <code>import * as [variable name] from [path to notifications.json]</code></li>
<li>Create a function named <code>getAllNotificationsByUser</code> that accepts <code>userId</code> as an argument</li>
<li>The function should return a list containing all the <code>context</code> objects from the <code>notifications.json</code> data when the author id is the same as the <code>userId</code></li>
</ul>

<p>In the same <code>schema</code> directory, create a <code>notifications.test.js</code> file:</p>

<ul>
<li>Add a test that uses the id <code>5debd764a7c57c7839d722e9</code> and verifies that the following data is returned:</li>
</ul>

<pre><code>[
  {
    guid: &quot;2d8e40be-1c78-4de0-afc9-fcc147afd4d2&quot;,
    isRead: true,
    type: &quot;urgent&quot;,
    value:
      &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.&quot;
  },
  {
    guid: &quot;280913fe-38dd-4abd-8ab6-acdb4105f922&quot;,
    isRead: false,
    type: &quot;urgent&quot;,
    value:
      &quot;Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed&quot;
  }
]
</code></pre>

<p>Tips:</p>

<ul>
<li>You can easily import JSON data using Babel</li>
<li>When writing your test, you can use the <code>arrayContaining</code> method from Jest to easily compare what the function returns and what you are expecting</li>
</ul>

<p>Requirements:</p>

<ul>
<li>You can use any loop function to go through the array</li>
<li>All the tests in the project should pass</li>
</ul>

  </div>

  <div class="list-group">
   <!-- Task URLs -->

!-- Technical information -->

<div class="list-group-item">
<p><strong>Repo:</strong></p>
<ul>
<li>GitHub repository: <code>atlas-web_react</code></li>
<li>Directory: <code>0x08_react_redux_action_creator_normalizr</code></li>
<li>File: <code>task_0/dashboard/src/schema/notifications.js, task_0/dashboard/src/schema/notifications.test.js</code></li>
</ul>
</div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      1. Normalize a nested JSON
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>Copy over <code>dashboard</code> from the previous task into a  <code>task_1</code> directory at the root of the project</p>

<p>Modify <code>src/schema/notifications.js</code> to set up a schema using Normalizr</p>

<p>You&rsquo;re going to use <code>schema.Entity</code> to create a 3 of entities.</p>

<p>The first one is an example the task will provide for you.</p>

<p><code>const user = new schema.Entity(&quot;users&quot;)</code></p>

<ul>
<li>Create a message entity in a variable called <code>message</code> whose key is <code>messages</code> and set the <code>idAttribute</code> to the string <code>guid</code> in the options</li>
<li>Create a notification entity in a variable called <code>notification</code>  whose key is <code>notifications</code> and set the definition of the entity as so:

<ul>
<li>author: user</li>
<li>context: message</li>
</ul></li>
</ul>

<p>Add a test in <code>schema/notifications.test.js</code> to verify that your normalized data has a correct <code>result</code> array. It should contain:</p>

<pre><code>  &quot;5debd76480edafc8af244228&quot;
  &quot;5debd764507712e7a1307303&quot;
  &quot;5debd76444dd4dafea89d53b&quot;
  &quot;5debd76485ee4dfd1284f97b&quot;
  &quot;5debd7644e561e022d66e61a&quot;
  &quot;5debd7644aaed86c97bf9d5e&quot;
  &quot;5debd76413f0d5e5429c28a0&quot;
  &quot;5debd7642e815cd350407777&quot;
  &quot;5debd764c1127bc5a490a4d0&quot;
  &quot;5debd7646ef31e0861ec1cab&quot;
  &quot;5debd764a4f11eabef05a81d&quot;
  &quot;5debd764af0fdd1fc815ad9b&quot;
  &quot;5debd76468cb5b277fd125f4&quot;
  &quot;5debd764de9fa684468cdc0b&quot;
</code></pre>

<p>Add a test to verify that your normalized data has a correct <code>users</code> entity. Test to access the user with the id <code>5debd764a7c57c7839d722e9</code>. It should return:</p>

<pre><code>      age: 25,
      email: &quot;poole.sanders@holberton.nz&quot;,
      id: &quot;5debd764a7c57c7839d722e9&quot;,
      name: { first: &quot;Poole&quot;, last: &quot;Sanders&quot; },
      picture: &quot;http://placehold.it/32x32&quot;
</code></pre>

<p>Add a test to verify that your normalized data has a correct <code>messages</code> entity. Test to access the message with the guid <code>efb6c485-00f7-4fdf-97cc-5e12d14d6c41</code>. It should return:</p>

<pre><code>      guid: &quot;efb6c485-00f7-4fdf-97cc-5e12d14d6c41&quot;,
      isRead: false,
      type: &quot;default&quot;,
      value: &quot;Cursus risus at ultrices mi.&quot;
</code></pre>

<p>Add a test to verify that your normalized data has a correct <code>notifications</code> entity. Test to access the notification with the id <code>5debd7642e815cd350407777</code>. It should return:</p>

<pre><code>      author: &quot;5debd764f8452ef92346c772&quot;,
      context: &quot;3068c575-d619-40af-bf12-dece1ee18dd3&quot;,
      id: &quot;5debd7642e815cd350407777&quot;
</code></pre>

<p>Tips:</p>

<ul>
<li>The expected goal is to obtain a very easy to use dataset</li>
<li>If you are having undefined issues, look at <code>idAttribute</code> from the Normalizr documentation</li>
</ul>

<p>Requirements:</p>

<ul>
<li>You must export the list of notifications using a Normalizr&rsquo;s <code>normalize</code></li>
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
            <li>Directory: <code>0x08_react_redux_action_creator_normalizr</code></li>
            <li>File: <code>task_1/dashboard/src/schema/notifications.js, task_1/dashboard/src/schema/notifications.test.js</code></li>
        </ul>
      </div>

   <!-- Self-paced manual review -->
  </div>

 <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      2. Filter a normalized Schema
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

   <!-- Progress vs Score -->
   <!-- Task Body -->
   <p>Copy the contents of <code>dashboard</code> from the <code>task_1</code> directory into a <code>task_2</code> directory at the root of the project</p>

<p>Modify the function <code>getAllNotificationsByUser</code> to use the normalized dataset</p>

<p>Requirements:</p>

<ul>
<li>You should only use one loop at this point</li>
<li>You should not use <code>Object.keys</code></li>
<li>You should not have to modify the test, and the test should pass correctly</li>
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
            <li>Directory: <code>0x08_react_redux_action_creator_normalizr</code></li>
            <li>File: <code>task_2/dashboard/src/schema/notifications.js</code></li>
        </ul>
      </div>

<!-- Self-paced manual review -->
  </div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      3. Create actions for the course list
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

   <!-- Progress vs Score -->

<!-- Task Body -->
<p>Copy the <code>dashboard</code> folder from the <code>task_2</code> directory into a directory named <code>task_3</code></p>

<p>Create a new folder named <code>actions</code></p>

<h4>Create the action types:</h4>

<p>In a file named <code>courseActionTypes.js</code>, create two action types:</p>

<ul>
<li><code>SELECT_COURSE</code></li>
<li><code>UNSELECT_COURSE</code></li>
</ul>

<p>They will be used to define if a user selected or unselected a specific course</p>

<h4>Create the action creators:</h4>

<p>In a file named <code>courseActionCreators.js</code>, create two action creators that will send the two types we previously created:</p>

<ul>
<li>The function <code>selectCourse</code> will accept <code>index</code> as argument</li>
<li>The function <code>unSelectCourse</code> will accept <code>index</code> as argument</li>
</ul>

<h4>Test the action creators:</h4>

<p>In a file named <code>courseActionCreators.test.js</code>, write a test for the <code>selectCourse</code> action. Calling the creator with 1 as argument should return:
<code>
{
  type: SELECT_COURSE,
  index: 1
}
</code></p>

<p>Write a test for the <code>unSelectCourse</code> action. Calling the creator with 1 as argument should return:
<code>
{
  type: UNSELECT_COURSE,
  index: 1
}
</code></p>

  </div>

  <div class="list-group">
    <!-- Task URLs -->

<!-- Technical information -->
   <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>atlas-web_react</code></li>
            <li>Directory: <code>0x08_react_redux_action_creator_normalizr</code></li>
            <li>File: <code>task_3/dashboard/src/actions/courseActionCreators.js, task_3/dashboard/src/actions/courseActionCreators.test.js, task_3/dashboard/src/actions/courseActionTypes.js</code></li>
        </ul>
      </div>

<!-- Self-paced manual review -->
  </div>

 <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      4. Create actions for the UI
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

   <!-- Progress vs Score -->

   <!-- Task Body -->
   <p>Copy the dashboard folder from <code>task_3</code> into a directory labeled <code>task_4</code></p>

<p>In <code>src/actions/uiActionTypes.js</code>, create four action types:</p>

<p>e.g . <code>export const LOGIN = &quot;LOGIN&quot;</code></p>

<h4>Create the action types:</h4>

<ul>
<li><code>LOGIN</code></li>
<li><code>LOGOUT</code></li>
<li><code>DISPLAY_NOTIFICATION_DRAWER</code></li>
<li><code>HIDE_NOTIFICATION_DRAWER</code></li>
</ul>

<p>They will be used to define when a user is logging in, logging out, and display / hide the notifications drawer</p>

<h4>Create the action creator:</h4>

<p>In a file named <code>uiActionCreators.js</code>, the goal of this section is to create four action creators that will send the four types we previously created. Remember to import all the types from <code>uiActionTypes</code> in this file.</p>

<ul>
<li>The function <code>login</code> will accept <code>email</code> and <code>password</code> as arguments. It will return the action with <code>LOGIN</code> as a type and the <code>user</code> object:</li>
</ul>

<pre><code>{ user : { email, password } }
</code></pre>

<ul>
<li>The function <code>logout</code> will create the action with the type <code>LOGOUT</code></li>
<li>The function <code>displayNotificationDrawer</code> will create the action with the type <code>DISPLAY_NOTIFICATION_DRAWER</code></li>
<li>The function <code>hideNotificationDrawer</code> will create the action with the type <code>HIDE_NOTIFICATION_DRAWER</code></li>
</ul>

<h4>Test the action creators:</h4>

<p>In a file named <code>uiActionCreators.test.js</code>, write a test for each of the action creator you wrote previously.</p>

  </div>

  <div class="list-group">
    <!-- Task URLs -->

<!-- Technical information -->
   <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>atlas-web_react</code></li>
            <li>Directory: <code>0x08_react_redux_action_creator_normalizr</code></li>
            <li>File: <code>task_4/dashboard/src/actions/uiActionTypes.js, task_4/dashboard/src/actions/uiActionCreators.js, task_4/dashboard/src/actions/uiActionCreators.test.js</code></li>
        </ul>
      </div>

<!-- Self-paced manual review -->
  </div>

 <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      5. Create actions for the notification list
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

   <!-- Progress vs Score -->

   <!-- Task Body -->
   <p>Copy <code>dashboard</code> from the <code>task_4</code> directory into <code>task_5</code></p>

<h4>Create the action types</h4>

<p>In <code>src/actions/notificationActionTypes.js</code>, create two action types:</p>

<ul>
<li><code>MARK_AS_READ</code></li>
<li><code>SET_TYPE_FILTER</code></li>
</ul>

<h4>Create the filter states</h4>

<p>In <code>src/actions/notificationActionTypes.js</code>, create a constant named <code>NotificationTypeFilters</code>, that will contain the two filter states:</p>

<ul>
<li><code>DEFAULT</code></li>
<li><code>URGENT</code></li>
</ul>

<p>They will be used when the user interacts with the notification drawer</p>

<h4>Create the action creator</h4>

<p>Import the action types you just created in <code>src/actions/notificationActionTypes.js</code></p>

<p>In a file named <code>notificationActionCreators.js</code>, create two action creators that will send the two action types we previously created:</p>

<ul>
<li>The function <code>markAsread</code> will accept <code>index</code> as argument</li>
<li>The function <code>setNotificationFilter</code> will accept <code>filter</code> as argument</li>
</ul>

<h4>Test the action creators</h4>

<p>Import the action types, <code>NotificationTypeFilters</code>, and the action creators into  <code>src/actions/notificationActionCreators.test.js</code></p>

<p>In this file, write a test for the <code>markAsread</code> action. Calling the creator with 1 as an argument should return:</p>

<pre><code>{
  type: MARK_AS_READ,
  index: 1
}
</code></pre>

<p>Write a test for the <code>setNotificationFilter</code> action. Calling the creator with one of the filters from <code>NotificationTypeFilters</code> as an argument should return:</p>

<pre><code>{
  type: SET_TYPE_FILTER,
  filter: &quot;DEFAULT&quot;
}
</code></pre>

  </div>

  <div class="list-group">
    <!-- Task URLs -->

<!-- Technical information -->
   <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>atlas-web_react</code></li>
            <li>Directory: <code>0x08_react_redux_action_creator_normalizr</code></li>
            <li>File: <code>task_5/dashboard/src/actions/notificationActionTypes.js, task_5/dashboard/src/actions/notificationActionCreators.js, task_5/dashboard/src/actions/notificationActionCreators.test.js</code></li>
        </ul>
      </div>

   <!-- Self-paced manual review -->
  </div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      6. Bound the actions
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

   <!-- Progress vs Score -->

   <!-- Task Body -->
   <p>Modify the Course actions creators:</p>

<ul>
<li>bound the <code>selectCourse</code> action creator</li>
<li>bound the <code>unSelectCourse</code> action creator</li>
</ul>

<p>Modify the Notification actions creators:</p>

<ul>
<li>bound the <code>markAsAread</code> action creator</li>
<li>bound the <code>setNotificationFilter</code> action creator</li>
</ul>

<p>Modify the UI actions creators:</p>

<ul>
<li>bound the <code>login</code> action creator</li>
<li>bound the <code>logout</code> action creator</li>
<li>bound the <code>displayNotificationDrawer</code> action creator</li>
<li>bound the <code>hideNotificationDrawer</code> action creator</li>
</ul>

  </div>

  <div class="list-group">
    <!-- Task URLs -->

   <!-- Technical information -->
   <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>atlas-web_react</code></li>
            <li>Directory: <code>0x08_react_redux_action_creator_normalizr</code></li>
            <li>File: <code>task_6/dashboard/src/actions/courseActionCreators.js, task_6/dashboard/src/actions/notificationActionCreators.js, task_6/dashboard/src/actions/uiActionCreators.js</code></li>
        </ul>
      </div>

<!-- Self-paced manual review -->
  </div>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      7. Async Action Creators
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

   <!-- Progress vs Score -->

   <!-- Task Body -->
   <p>Set up Redux and Redux Thunk</p>

<p>Install <code>redux</code> and <code>redux-thunk</code> in your project</p>

<p>Simulate an API</p>

<p>Copy the file <code>login-success.json</code> into the <code>dist</code> folder. You can do the same with the <code>notifications.json</code> file as well now</p>

<p>These files will be available on the web server and will be your own API</p>

<p>Create the first Async Action Creator</p>

<p>Modify the file named <code>uiActionTypes.js</code>, add two action types:</p>

<ul>
<li><code>LOGIN_SUCCESS</code></li>
<li><code>LOGIN_FAILURE</code></li>
</ul>

<p>Modify the <code>uiActionCreators</code> file:</p>

<ul>
<li>Create a <code>loginSuccess</code> action creator, that will return the previously created type</li>
<li>Create a <code>loginFailure</code> action creator, that will return the previously created type</li>
</ul>

<p>Create a <code>loginRequest</code> function that takes into argument the <code>email</code> and <code>password</code> of the user:</p>

<ul>
<li>the function should dispatch the <code>login</code> action using the action creator previously created</li>
<li>the function should fetch the API <code>/login-success.json</code> and if it succeeds, dispatch the <code>loginSuccess</code> action</li>
<li>if the API fails, dispatch the <code>loginFailure</code> action</li>
</ul>

<p>Write the tests</p>

<p>In the file <code>uiActionCreators.test.js</code>, write a test suite for the <code>loginRequest</code> action:</p>

<ul>
<li>the first test should verify that if the API returns the right response, the store received two actions <code>LOGIN</code> and <code>LOGING_SUCCESS</code></li>
<li>the first test should verify that if the API query fails, the store received two actions <code>LOGIN</code> and <code>LOGIN_FAILURE</code></li>
</ul>

<p>Tips:</p>

<ul>
<li>You can use <code>node-fetch</code> to query an API</li>
<li>You can install <code>redux-mock-store</code> and <code>fetch-mock</code> to simular the API and simulate the store</li>
<li>With <code>fetch-mock</code>, you can use <code>getOnce</code> and <code>get</code> to simulate success and failures</li>
</ul>

<p>Requirements:</p>

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
            <li>Directory: <code>0x08_react_redux_action_creator_normalizr</code></li>
            <li>File: <code>task_7/dashboard/src/actions/uiActionTypes.js, task_7/dashboard/src/actions/uiActionCreators.js, task_7/dashboard/src/actions/uiActionCreators.test.js</code></li>
        </ul>
      </div>

<!-- Self-paced manual review -->
  </div>
