# React inline styling

<h2>Resources</h2>

<p><strong>Read or watch</strong>:</p>

<ul>
<li><a href="/https://github.com/khan/aphrodite" title="Aphrodite" target="_blank">Aphrodite</a></li>
<li><a href="https://legacy.reactjs.org/docs/dom-elements.html" title="Inline styling" target="_blank">Inline styling</a></li>
<li><a href="" title="Enzyme Render" target="_blank">Enzyme Render</a></li>
<li><a href="https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/render.html" title="Enzyme Prop" target="_blank">Enzyme Prop</a></li>
<li><a href="https://www.w3schools.com/css/css_rwd_viewport.asp" title="CSS Viewport" target="_blank">CSS Viewport</a></li>
<li><a href="https://www.w3schools.com/css/css_rwd_mediaqueries.asp" title="CSS Media queries" target="_blank">CSS Media queries</a></li>
<li><a href="https://www.w3schools.com/css/css3_animations.asp" title="CSS Animations" target="_blank">CSS Animations</a></li>
</ul>

<h2>Learning Objectives</h2>

<p>At the end of this project, you are expected to be able to <a href="/rltoken/NGC3nKSLn6Ma0YNceXxKTA" title="explain to anyone" target="_blank">explain to anyone</a>, <strong>without the help of Google</strong>:</p>

<ul>
<li>the differences between using a CSS file and inline styling</li>
<li>how to use a CSS-in-JS tool like Aphrodite</li>
<li>how to use conditions within JS to apply different styles</li>
<li>how to use responsive design and make the application show a different UI according to the screen size</li>
<li>how to create small animations within the app</li>
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

<span id="user_id" data-id="6138"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      0. Inline styling
    </h3>

  </div>
  <!-- Task Body -->
  <ul>

<li>Copy over the <code>task_5</code> directory from the <code>0x04. React components</code> project (We’ll be using it as the base for this project)</li>
<li>Rename the <code>task_5</code> directory to <code>task_0</code></li>
</ul>

<p><strong>Modify the <code>CourseListRow</code> component in <code>task_0/dashboard/src/CourseList/CourseListRow.js</code>:</strong></p>

<ul>
<li>Using inline styling, change the background color of a row to <code>#f5f5f5ab</code></li>
<li>Using inline styling, change the background color of a header row to <code>#deb5b545</code></li>
<li>If needed, modify the test file so every test pass</li>
</ul>

<p><strong>Tips:</strong></p>

<ul>
<li>For better performances, never create and pass an object to an element directly. Use a constant instead</li>
<li>Use the <code>isHeader</code> prop to easily pick the style you want to apply to the <code>tr</code> tag</li>
</ul>

<p><strong>Requirement:</strong></p>

<ul>
<li>Even if the modification is small, make sure that your test suites are still passing. Especially the file <code>CourseListRow.test.js</code></li>
</ul>

  </div>

  <div class="list-group">
    <!-- Task URLs -->

  <!-- Technical information -->
   <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>atlas-web_react</code></li>
            <li>Directory: <code>React_inline_styling</code></li>
            <li>File: <code>task_0/dashboard/src/CourseList/CourseListRow.js, task_0/dashboard/src/CourseList/CourseListRow.test.js</code></li>
        </ul>
      </div>
    <!-- Self-paced manual review -->
  </div>

 <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      1. install Aphrodite
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>
    <!-- Task Body -->
    <p>Install Aphrodite using npm with:</p>

<p><code>npm install --save aphrodite</code></p>

<p><strong>Modify the <code>App</code> component in <code>task_1/dashboard/src/App/App.js</code>:</strong></p>

<ul>
<li>Modify the component to use Aphrodite within the js file</li>
<li>Define the styling for the body and the footer within the file</li>
<li>Delete the file <code>App.css</code> and the import</li>
</ul>

<p><strong>Modify the <code>BodySectionWithMarginBottom</code> component in <code>task_1/dashboard/src/BodySection/BodySectionWithMarginBottom.js</code>:</strong></p>

<ul>
<li>Modify the component to use Aphrodite within the js file</li>
<li>Define the styling for the margin within the file</li>
<li>Delete the file <code>BodySection.css</code> and the import</li>
</ul>

<p><strong>Modify the <code>CourseList</code> component in <code>task_1/dashboard/src/CourseList/CourseList.js</code>:</strong></p>

<ul>
<li>Modify the component to use Aphrodite within the js file</li>
<li>Define the styling for the list within the file</li>
<li>Remove the styling for the list within the <code>CourseList.css</code> file</li>
</ul>

<p><strong>Modify the <code>Header</code> component in <code>task_1/dashboard/src/Header/Header.js</code>:</strong></p>

<ul>
<li>Modify the component to use Aphrodite within the js file</li>
<li>Define the styling for the logo and the header within the file</li>
<li>Delete the file <code>Header.css</code> and the import</li>
</ul>

<p><strong>Modify the <code>Login</code> component in <code>task_1/dashboard/src/Login/Login.js</code>:</strong></p>

<ul>
<li>Modify the component to use Aphrodite within the js file</li>
<li>Define the styling for the margin within the file</li>
<li>Delete the file <code>Login.css</code> and the import</li>
</ul>

<p><strong>Modify the <code>Notifications</code> component in <code>task_1/dashboard/src/Notifications/Notifications.js</code>:</strong></p>

<ul>
<li>Modify the component to use Aphrodite within the js file</li>
<li>Define the styling for the notifications panel within the file</li>
<li>Remove the styling for the notifications panel from the <code>Notifications.css</code></li>
</ul>

<p><strong>Make sure the test suites are still passing!</strong></p>

<p><strong>Tips:</strong></p>

<ul>
<li>Look into using <code>StyleSheetTestUtils.suppressStyleInjection</code> at the top of your test file, to prevent issues with style injections</li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>At this point, the UI should look exactly the same with the inline styling as it was with the CSS files</li>
</ul>

  </div>

  <div class="list-group">
    <!-- Task URLs -->

   <!-- Technical information -->
   <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>atlas-web_react</code></li>
            <li>Directory: <code>React_inline_styling</code></li>
            <li>File: <code>task_1/dashboard/src/App/App.js, task_1/dashboard/src/BodySection/BodySectionWithMarginBottom.js, task_1/dashboard/src/CourseList/CourseList.js, task_1/dashboard/src/Header/Header.js, task_1/dashboard/src/Login/Login.js, task_1/dashboard/src/Notifications/Notifications.js, task_1/dashboard/src/App/App.test.js,task_1/dashboard/src/BodySection/BodySectionWithMarginBottom.test.js, task_1/dashboard/src/CourseList/CourseList.test.js, task_1/dashboard/src/Header/Header.test.js, task_1/dashboard/src/Login/Login.test.js, task_1/dashboard/src/Notifications/Notifications.test.js</code></li>
        </ul>
      </div>

  <!-- Self-paced manual review -->
  </div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      2. Conditionally applying style
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>
    <!-- Task Body -->
    <p><strong>Modify the <code>NotificationItem</code> component in <code>task_2/dashboard/src/Notifications/NotificationItem.js</code>:</strong></p>

<ul>
<li>Modify the component to use Aphrodite within the js file</li>
<li>Define the styling for the urgent and default items</li>
<li>Using condition, apply the styling to the <code>li</code> element</li>
<li>Delete the <code>Notifications.css</code> file and remove any import</li>
</ul>

<p><strong>Modify the <code>NotificationItem.test</code> suite in <code>task_2/dashboard/src/Notifications/NotificationItem.test.js</code>:</strong></p>

<ul>
<li>Make sure that tests are still passing</li>
</ul>

<p><strong>Modify the <code>CourseListRow</code> component in <code>task_2/dashboard/src/CourseList/CourseListRow.js</code>:</strong></p>

<ul>
<li>Modify the component to use Aphrodite within the js file</li>
<li>Define the styling for the different type of rows (default rows, header rows)</li>
<li>Define the styling for the different type of <code>th</code> elements</li>
<li>Delete the <code>CourseList.css</code> file and remove any import</li>
</ul>

<p><strong>Modify the <code>CourseListRow.test</code> suite in <code>task_2/dashboard/src/CourseList/CourseListRow.test.js</code>:</strong></p>

<ul>
<li>Make sure that tests are still passing</li>
<li>Test properties one by one if easier</li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>Use conditions as much as you can, do not repeat elements</li>
<li>At this point, the UI should look exactly the same with the inline styling as it was with the CSS files</li>
</ul>

<p><strong>Tips:</strong></p>

<ul>
<li>You can either use conditions or use an array to apply the different styling. Conditions are usually more robust</li>
<li>Testing might become difficult with the different variations. Look into the Enzyme documentation for <code>render</code>, <code>contains</code>, <code>prop</code>, and <code>html</code></li>
</ul>

  </div>

  <div class="list-group">
    <!-- Task URLs -->

  <!-- Technical information -->
   <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>atlas-web_react</code></li>
            <li>Directory: <code>React_inline_styling</code></li>
            <li>File: <code>task_2/dashboard/src/Notifications/NotificationItem.js, task_2/dashboard/src/Notifications/NotificationItem.test.js, task_2/dashboard/src/CourseList/CourseListRow.js, task_2/dashboard/src/CourseList/CourseListRow.test.js</code></li>
        </ul>
      </div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      3. Responsive design
    </h3>
  </div>

  <!-- Progress vs Score -->

  <!-- Task Body -->
  <p>Let&rsquo;s make the application responsive to the screen size using media queries. We are going to only focus on large screen and screens with a width under 900px</p>

<p><strong>Modify the component <code>Login</code> in <code>task_3/dashboard/src/Login/Login.js</code>:</strong></p>

<ul>
<li>Make sure that a label and an input are on each line</li>
<li>Make sure that the button is on a new line</li>
<li>The screen should look like the image below:</li>
</ul>

![Responsive Design](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2019/12/c3ed54e1dba4b232adc1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20240522%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20240522T173338Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=508e7c21a3e71f0e0267bfdc13bc300a56ec60ffc9bd2420984b2db4cbe15198)

<p><strong>Modify the component <code>Notifications</code> in <code>task_3/dashboard/src/Notifications/Notifications.js</code>:</strong></p>
<ul>
<li>When the panel is open, it should take over the entire screen</li>
<li>There should be no padding because of the <code>ul</code> element</li>
<li>The font size of the text should be 20px</li>
</ul>

<p><strong>Modify the component <code>NotificationItem</code> in <code>task_3/dashboard/src/Notifications/NotificationItem.js</code>:</strong></p>

<ul>
<li>The item should take the entire screen width</li>
<li>A black border should be displayed at the bottom</li>
<li>The font size of the text should be 20px</li>
<li>The padding for the item should be <code>10px 8px</code></li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>When the notifications panel is open, the screen should look like the image below:</li>
</ul>

![Responsive Design](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2019/12/e0d15ee8d2e28be1e130.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20240522%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20240522T173338Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=3f9e4201bfa75481cb2cb4b20fcf8571570540339dfa8760f150427bfe857b0b)

</div>

  <div class="list-group">
    <!-- Task URLs -->
    <!-- Technical information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>atlas-web_react</code></li>
            <li>Directory: <code>React_inline_styling</code></li>
            <li>File: <code>task_3/dashboard/src/Login/Login.js, task_3/dashboard/src/Notifications/Notifications.js, task_3/dashboard/src/Notifications/NotificationItem.js</code></li>
        </ul>
      </div>
    <!-- Self-paced manual review -->
  </div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      4. Animation
    </h3>
  </div>

   <!-- Progress vs Score -->

   <!-- Task Body -->
   <p>Let&rsquo;s create an animation that we can display when the user hovers on the <code>Notifications</code> menu or when there is a new notification. In <code>task_4/dashboard/Notifications/Notifications.js</code>:</p>

<ul>
<li>Create one object containing the CSS frames to make the opacity change from <code>0.5</code> to <code>1</code></li>
<li>Create one object containing the CSS frames to make the element bounce. You can play with translateY and alternate from 0px to -5px and 5px</li>
</ul>

<p>Modify the styling for the menu item to:</p>

<ul>
<li>Float on the right of the screen over every element</li>
<li>The background color should be <code>#fff8f8</code></li>
<li>Show the pointer cursor when hovering the element</li>
<li>On hover, animate the element with the two new animations. The duration for the opacity change should be 1s, and the duration for the bouncing effect should be 0.5s. The animation should repeat 3 times only</li>
<li>When the list of notifications is visible, hide the menu item</li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>When the notifications panel is hovered or opened, the UI should look like the image below:</li>
</ul>

<p><img src="https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2019/12/8d302a65b1be36662c54.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20240522%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20240522T195518Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=bbb5013dfc82338e63b261bf127b53ca5af9202cde5b2f084962be5d6e2a6039" alt="" loading='lazy' style="" /></p>

  </div>

  <div class="list-group">
   <!-- Task URLs -->

   <!-- Technical information -->
   <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>atlas-web_react</code></li>
            <li>Directory: <code>React_inline_styling</code></li>
            <li>File: <code>task_4/dashboard/src/Notifications/Notifications.js</code></li>
        </ul>
      </div>

  <!-- Self-paced manual review -->
  </div>
