# React Redux Connectors and Providers

<h2>Resources</h2>

<p><strong>Read or watch</strong>:</p>

<ul>
<li><a href="https://react-redux.js.org/api/connect" title="Redux CreateStore" target="_blank">Redux CreateStore</a></li>
<li><a href="https://react-redux.js.org/api/connect" title="Redux Connect" target="_blank">Redux Connect</a></li>
<li><a href="https://react-redux.js.org/api/provider" title="Redux Provider" target="_blank">Redux Provider</a></li>
<li><a href="https://redux.js.org/tutorials/fundamentals/part-4-store#middleware" title="Redux Middleware" target="_blank">Redux Middleware</a></li>
<li><a href="https://github.com/reduxjs/redux-thunk" title="Redux Thunk" target="_blank">Redux Thunk</a></li>
<li><a href="https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en" title="Redux devtools" target="_blank">Redux devtools</a></li>
<li><a href="https://github.com/reduxjs/reselect" title="Redux Reselect" target="_blank">Redux Reselect</a></li>
</ul>

<h2>Learning Objectives</h2>

<p>At the end of this project, you are expected to be able to <a href="/rltoken/_4aXeH1_dZRlF-ZV_d3L4g" title="explain to anyone" target="_blank">explain to anyone</a>, <strong>without the help of Google</strong>:</p>

<ul>
<li>Redux connectors and how to use them</li>
<li>The different functions you can pass to a connector (mapStateToProps, mapDispatchToPros)</li>
<li>How to map an action creator to a component using a connector</li>
<li>How to map an async action creator to a component with Redux Thunk</li>
<li>What Redux Providers are and how to set up your app&rsquo;s store</li>
<li>How you can improve a connector&rsquo;s performance using Reselect</li>
<li>How to use Redux&rsquo;s dev tools to debug the state of your application</li>
</ul>

<h2>Requirements</h2>

<ul>
<li>Allowed editors: <code>vi</code>, <code>vim</code>, <code>emacs</code>, <code>Visual Studio Code</code></li>
<li>All your files should end with a new line</li>
<li>A <code>README.md</code> file, at the root of the folder of the project, is mandatory</li>
<li>All your files will be interpreted/compiled on Ubuntu 18.04 LTS using node <code>12.x.x</code> and <code>npm 6.x.x</code></li>
<li>Push all of your files, including <code>package.json</code> and <code>.babelrc</code></li>
<li>All of your functions must be exported</li>
</ul>

<h2>Provided files</h2>

<h3><code>dashboard/dist/courses.json</code></h3>

<details>
<summary>Click to show/hide file contents</summary>
<pre><code>
[
  {
    "id": "1",
    "name": "ES6",
    "credit": 60
  },
  {
    "id": "2",
    "name": "Webpack",
    "credit": 20
  },
  {
    "id": "3",
    "name": "React",
    "credit": 40
  }
]
</code></pre>
</details>

<h3><code>dashboard/dist/login-success.json</code></h3>

<details>
<summary>Click to show/hide file contents</summary>
<pre><code>
{
  "first_name": "Johann",
  "last_name": "Salva",
  "email": "johann.salva@holberton.nz",
  "profile_picture": "http://placehold.it/32x32"
}
</code></pre>
</details>

<h3><code>dashboard/dist/notifications.json</code></h3>

<details>
<summary>Click to show/hide file contents</summary>
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

  </div>
</div>

<h2 class="gap">Tasks</h2>
    <div data-role="task21694" data-position="1" id="task-num-0">
      <div class="panel panel-default task-card " id="task-21694">

<span id="user_id" data-id="6138"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      0. Write mapStateToProps
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>
    <!-- Progress vs Score -->
    <!-- Task Body -->
    <p>Reuse the latest dashboard project you worked on in the React course <code>0x09-React_Redux_reducer</code> and install <code>react-redux</code></p>

<p>Within the <code>App/App.js</code> file:</p>

<ul>
<li>Create a function named <code>mapStateToProps</code>. This should connect the <code>uiReducer</code> you created and the property <code>isLoggedIn</code> that your component is already using</li>
<li>Import <code>connect</code> from Redux, and connect the <code>mapStateToProps</code> to the component</li>
</ul>

  </div>

  <div class="list-group">
    <!-- Task URLs -->

   <!-- Technical information -->
   <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>atlas-web_react</code></li>
            <li>Directory: <code>react_redux_connectors_and_providers</code></li>
            <li>File: <code>task_0/dashboard/src/App/App.js</code></li>
        </ul>
      </div>

   <!-- Self-paced manual review -->
  </div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      1. Create a small store
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>
    <!-- Progress vs Score -->
    <!-- Task Body -->
    <p>In the <code>index.js</code> file:</p>

<ul>
<li>Create a store using <code>createStore</code> from Redux that would contain the <code>uiReducer</code> state</li>
<li>Implement a provider passing the store that you created to the main <code>App</code></li>
</ul>

  </div>

  <div class="list-group">
    <!-- Task URLs -->
   <!-- Technical information -->
     <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>atlas-web_react</code></li>
            <li>Directory: <code>react_redux_connectors_and_providers</code></li>
            <li>File: <code>task_0/dashboard/src/index.js</code></li>
        </ul>
      </div>
    <!-- Self-paced manual review -->
  </div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      2. Test MapStateToProps
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>
    <!-- Progress vs Score -->
    <!-- Task Body -->
    <p>Export the <code>mapStateToProps</code> function you created if you haven&rsquo;t already, and in the <code>App.test.js</code> file:</p>

<ul>
<li>Create a new suite to test the function</li>
<li>Create a test that verify that the function returns the right object when passing the </li>
</ul>

<pre><code>let state = fromJS({
  isUserLoggedIn: true
});
</code></pre>

<p>Should return
<code>
{
  isLoggedIn: true
}
</code></p>

<p>Tips:</p>

<ul>
<li>At this point your app is not functional but you should be able to load the page without crashing</li>
<li>Remember that the state of uiReducer is using Map from Immutable</li>
</ul>

<p>Requirements:</p>

<ul>
<li>No error should be displayed within the console</li>
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
            <li>Directory: <code>react_redux_connectors_and_providers</code></li>
            <li>File: <code>task_0/dashboard/src/App/App.test.js</code></li>
        </ul>
      </div>
    <!-- Self-paced manual review -->
  </div>

 <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      3. Update mapStateToProps
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

<!-- Progress vs Score -->
   <!-- Task Body -->
  <p>In the <code>App.js</code> file:</p>

<ul>
<li>Update the <code>mapStateToProps</code> function to also pass to the component the value for <code>displayDrawer</code>. It should be connected to the Reducer attribute <code>isNotificationDrawerVisible</code></li>
<li>Update the render function of the component to use the value <code>displayDrawer</code> coming from the props instead of the state</li>
</ul>

  </div>

  <div class="list-group">
    <!-- Task URLs -->
    <!-- Technical information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>atlas-web_react</code></li>
            <li>Directory: <code>react_redux_connectors_and_providers</code></li>
            <li>File: <code>task_1/dashboard/src/App/App.js</code></li>
        </ul>
      </div>
    <!-- Self-paced manual review -->
  </div>

 <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      4. Connect your actions creators
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>
    <!-- Progress vs Score -->
    <!-- Task Body -->
    <p>In the <code>App.js</code> file:</p>

<ul>
<li>Connect to the component the actions creators <code>displayNotificationDrawer</code> and <code>hideNotificationDrawer</code></li>
<li>You should use the simplified version for the <code>mapDispatchToProps</code>. No need to import <code>bindActionCreators</code></li>
<li>Modify the render function of the component to use the functions passed within the props instead of the action within the Class component</li>
</ul>

  </div>

  <div class="list-group">
    <!-- Task URLs -->
    <!-- Technical information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>atlas-web_react</code></li>
            <li>Directory: <code>react_redux_connectors_and_providers</code></li>
            <li>File: <code>task_1/dashboard/src/App/App.js</code></li>
        </ul>
      </div>
    <!-- Self-paced manual review -->
  </div>

 <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      5. Refactor your code
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>
    <!-- Progress vs Score -->
    <!-- Task Body -->
    <p>In the <code>App.js</code> file:</p>

<ul>
<li>You can delete the old function <code>handleDisplayDrawer</code></li>
<li>You can delete the old function <code>handleHideDrawer</code></li>
<li>Remove any state property related to the display of the drawer</li>
<li>Remove any binding in the constructor</li>
<li>You are now passing to your components props. You need to define <code>propTypes</code> and <code>defaultProps</code></li>
</ul>

  </div>

  <div class="list-group">
    <!-- Task URLs -->
    <!-- Technical information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>atlas-web_react</code></li>
            <li>Directory: <code>react_redux_connectors_and_providers</code></li>
            <li>File: <code>task_1/dashboard/src/App/App.js</code></li>
        </ul>
      </div>
    <!-- Self-paced manual review -->
  </div>
