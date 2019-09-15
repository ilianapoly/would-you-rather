
# Udacity project specification rubric

Udacity React Developer Nanodegree program

#### Project 2. React with Redux : Would You Rather?



##### Application Setup
<table class="table table-bordered section-table"> <thead> <tr> <!-- ngIf: !ctrl.hideCriteria --><th class="rubric-category criteria col-xs-3 ng-scope" ng-if="!ctrl.hideCriteria"> <span translate="" class="ng-scope">Criteria</span> </th><!-- end ngIf: !ctrl.hideCriteria --> <th class="rubric-category meets-specs" ng-class="ctrl.reviewerTips ? col-xs-7 : col-xs-4"> <span translate="" class="ng-scope">Meets Specifications</span> </th> <!-- ngIf: ctrl.reviewerTips --> </tr> </thead> <tbody>  <!-- ngRepeat: rubricItem in section.rubric_items --><tr ng-repeat="rubricItem in section.rubric_items" class="ng-scope"> <!-- ngIf: !ctrl.hideCriteria --><td class="rubric-item col-xs-3 ng-binding ng-scope" ng-if="!ctrl.hideCriteria" ng-bind-html="localize(rubricItem, 'criteria', markup=true)"><p>Is the application easy to install and start?</p>
</td><!-- end ngIf: !ctrl.hideCriteria --> <td class="rubric-item ng-binding" ng-class="ctrl.reviewerTips ? col-xs-7 : col-xs-4" ng-bind-html="localize(rubricItem, 'passed_description', markup=true)"><p>The application requires only <code>npm install</code> and <code>npm start</code> to install and launch. </p>
</td> <!-- ngIf: ctrl.reviewerTips --> </tr><!-- end ngRepeat: rubricItem in section.rubric_items --><tr ng-repeat="rubricItem in section.rubric_items" class="ng-scope"> <!-- ngIf: !ctrl.hideCriteria --><td class="rubric-item col-xs-3 ng-binding ng-scope" ng-if="!ctrl.hideCriteria" ng-bind-html="localize(rubricItem, 'criteria', markup=true)"><p>Does the application include README with clear installation and launch instructions?</p>
</td><!-- end ngIf: !ctrl.hideCriteria --> <td class="rubric-item ng-binding" ng-class="ctrl.reviewerTips ? col-xs-7 : col-xs-4" ng-bind-html="localize(rubricItem, 'passed_description', markup=true)"><p>A README is included with the project. The README includes a description and clear instructions for installing and launching the project.</p>
</td> <!-- ngIf: ctrl.reviewerTips --> </tr><!-- end ngRepeat: rubricItem in section.rubric_items --> </tbody> </table>

##### Login Flow
<table class="table table-bordered section-table"> <thead> <tr> <!-- ngIf: !ctrl.hideCriteria --><th class="rubric-category criteria col-xs-3 ng-scope" ng-if="!ctrl.hideCriteria"> <span translate="" class="ng-scope">Criteria</span> </th><!-- end ngIf: !ctrl.hideCriteria --> <th class="rubric-category meets-specs" ng-class="ctrl.reviewerTips ? col-xs-7 : col-xs-4"> <span translate="" class="ng-scope">Meets Specifications</span> </th> <!-- ngIf: ctrl.reviewerTips --> </tr> </thead> <tbody>  <!-- ngRepeat: rubricItem in section.rubric_items --><tr ng-repeat="rubricItem in section.rubric_items" class="ng-scope"> <!-- ngIf: !ctrl.hideCriteria --><td class="rubric-item col-xs-3 ng-binding ng-scope" ng-if="!ctrl.hideCriteria" ng-bind-html="localize(rubricItem, 'criteria', markup=true)"><p>Does the application have a way to log in and log out?</p>
<p>Does the application work correctly regardless of which person the user impersonates?</p>
</td><!-- end ngIf: !ctrl.hideCriteria --> <td class="rubric-item ng-binding" ng-class="ctrl.reviewerTips ? col-xs-7 : col-xs-4" ng-bind-html="localize(rubricItem, 'passed_description', markup=true)"><ol>
<li>There should be a way for the user to impersonate/ log in as an existing user. (This could be as simple as having a login box that appears at the root of the application. The user could then select a name from the list of existing users.)</li>
<li>The application works correctly regardless of which user is selected.</li>
<li>The application allows the user to log out and log back in. The user should be logged in to submit new polling questions, vote, and view the leaderboard.  </li>
<li>Once the user logs in, the home page is shown.</li>
<li>Whenever the user types something in the address bar, the user is asked to log in before the requested page is shown.</li>
</ol>
</td> <!-- ngIf: ctrl.reviewerTips --> </tr><!-- end ngRepeat: rubricItem in section.rubric_items --> </tbody> </table>

##### Application Functionality
<table class="table table-bordered section-table"> <thead> <tr> <!-- ngIf: !ctrl.hideCriteria --><th class="rubric-category criteria col-xs-3 ng-scope" ng-if="!ctrl.hideCriteria"> <span translate="" class="ng-scope">Criteria</span> </th><!-- end ngIf: !ctrl.hideCriteria --> <th class="rubric-category meets-specs" ng-class="ctrl.reviewerTips ? col-xs-7 : col-xs-4"> <span translate="" class="ng-scope">Meets Specifications</span> </th> <!-- ngIf: ctrl.reviewerTips --> </tr> </thead> <tbody>  <!-- ngRepeat: rubricItem in section.rubric_items --><tr ng-repeat="rubricItem in section.rubric_items" class="ng-scope"> <!-- ngIf: !ctrl.hideCriteria --><td class="rubric-item col-xs-3 ng-binding ng-scope" ng-if="!ctrl.hideCriteria" ng-bind-html="localize(rubricItem, 'criteria', markup=true)"><p>Does the home page have the desired functionality?</p>
</td><!-- end ngIf: !ctrl.hideCriteria --> <td class="rubric-item ng-binding" ng-class="ctrl.reviewerTips ? col-xs-7 : col-xs-4" ng-bind-html="localize(rubricItem, 'passed_description', markup=true)"><ol>
<li>The answered and unanswered polls are both available at the root. </li>
<li>The user can alternate between viewing answered and unanswered polls. </li>
<li>The unanswered questions are shown by default.</li>
<li>The name of the logged in user is visible on the page.</li>
<li>The user can navigate to the leaderboard. </li>
<li>The user can navigate  to the form that allows the user to create a new poll.</li>
</ol>
</td> <!-- ngIf: ctrl.reviewerTips --> </tr><!-- end ngRepeat: rubricItem in section.rubric_items --><tr ng-repeat="rubricItem in section.rubric_items" class="ng-scope"> <!-- ngIf: !ctrl.hideCriteria --><td class="rubric-item col-xs-3 ng-binding ng-scope" ng-if="!ctrl.hideCriteria" ng-bind-html="localize(rubricItem, 'criteria', markup=true)"><p>Are the polling questions listed in the correct category (Unanswered vs Answered), and do they have the desired functionality on the home page?</p>
</td><!-- end ngIf: !ctrl.hideCriteria --> <td class="rubric-item ng-binding" ng-class="ctrl.reviewerTips ? col-xs-7 : col-xs-4" ng-bind-html="localize(rubricItem, 'passed_description', markup=true)"><p>Each polling question resides in the correct category. For example, if a question hasn’t been answered by the current user, it should be in the “Unanswered” category.</p>
<p>A polling question links to details of that poll. </p>
<p>The polls in both categories are arranged from the most recently created (top) to the least recently created (bottom).</p>
</td> <!-- ngIf: ctrl.reviewerTips --> </tr><!-- end ngRepeat: rubricItem in section.rubric_items --><tr ng-repeat="rubricItem in section.rubric_items" class="ng-scope"> <!-- ngIf: !ctrl.hideCriteria --><td class="rubric-item col-xs-3 ng-binding ng-scope" ng-if="!ctrl.hideCriteria" ng-bind-html="localize(rubricItem, 'criteria', markup=true)"><p>Are the details of each poll displayed with all of the relevant information?</p>
</td><!-- end ngIf: !ctrl.hideCriteria --> <td class="rubric-item ng-binding" ng-class="ctrl.reviewerTips ? col-xs-7 : col-xs-4" ng-bind-html="localize(rubricItem, 'passed_description', markup=true)"><ol>
<li>The details of the poll are available at <code>questions/:question_id</code>.</li>
<li>When a poll is clicked on the home page, the following is shown:<ul>
<li>the text “Would You Rather”;</li>
<li>the picture of the user who posted the polling question; and</li>
<li>the two options.</li>
</ul>
</li>
<li>For answered polls, each of the two options contains the following:<ul>
<li>the text of the option;</li>
<li>the number of people who voted for that option;</li>
<li>the percentage of people who voted for that option.</li>
</ul>
</li>
<li>The option selected by the logged in user should be clearly marked. </li>
<li>When the user is logged in, the details of the poll are shown. If the user is logged out, he/she is asked to log in before before being able to access the poll.</li>
<li>The application asks the user to sign in and shows a 404 page if that poll does not exist. (In other words, if a user creates a poll and then the same or another user tries to access that poll by its url, the user should be asked to sign in and then be shown a 404 page. Please keep in mind that new polls will not be accessible at their url because of the way the backend is set up in this application.) </li>
</ol>
</td> <!-- ngIf: ctrl.reviewerTips --> </tr><!-- end ngRepeat: rubricItem in section.rubric_items --><tr ng-repeat="rubricItem in section.rubric_items" class="ng-scope"> <!-- ngIf: !ctrl.hideCriteria --><td class="rubric-item col-xs-3 ng-binding ng-scope" ng-if="!ctrl.hideCriteria" ng-bind-html="localize(rubricItem, 'criteria', markup=true)"><p>Does the voting mechanism work correctly?</p>
</td><!-- end ngIf: !ctrl.hideCriteria --> <td class="rubric-item ng-binding" ng-class="ctrl.reviewerTips ? col-xs-7 : col-xs-4" ng-bind-html="localize(rubricItem, 'passed_description', markup=true)"><ol>
<li>Upon voting in a poll, all of the information of the answered poll is displayed. </li>
<li>The user’s response is recorded and is clearly visible on the poll details page.</li>
<li>When the user comes back to the home page, the polling question appears in the “Answered” column.</li>
<li>The voting mechanism works correctly, and the data on the leaderboard changes appropriately.</li>
</ol>
</td> <!-- ngIf: ctrl.reviewerTips --> </tr><!-- end ngRepeat: rubricItem in section.rubric_items --><tr ng-repeat="rubricItem in section.rubric_items" class="ng-scope"> <!-- ngIf: !ctrl.hideCriteria --><td class="rubric-item col-xs-3 ng-binding ng-scope" ng-if="!ctrl.hideCriteria" ng-bind-html="localize(rubricItem, 'criteria', markup=true)"><p>Can users add new polls?</p>
</td><!-- end ngIf: !ctrl.hideCriteria --> <td class="rubric-item ng-binding" ng-class="ctrl.reviewerTips ? col-xs-7 : col-xs-4" ng-bind-html="localize(rubricItem, 'passed_description', markup=true)"><ol>
<li>The form is available at<code>/add</code>.</li>
<li>The application shows the text “Would You Rather” and has a form for creating two options. </li>
<li>Upon submitting the form, a new poll is created and the user is taken to the home page. </li>
<li>The new polling question appears in the correct category on the home page.</li>
</ol>
</td> <!-- ngIf: ctrl.reviewerTips --> </tr><!-- end ngRepeat: rubricItem in section.rubric_items --><tr ng-repeat="rubricItem in section.rubric_items" class="ng-scope"> <!-- ngIf: !ctrl.hideCriteria --><td class="rubric-item col-xs-3 ng-binding ng-scope" ng-if="!ctrl.hideCriteria" ng-bind-html="localize(rubricItem, 'criteria', markup=true)"><p>Does the leaderboard work correctly and have the desired functionality?</p>
</td><!-- end ngIf: !ctrl.hideCriteria --> <td class="rubric-item ng-binding" ng-class="ctrl.reviewerTips ? col-xs-7 : col-xs-4" ng-bind-html="localize(rubricItem, 'passed_description', markup=true)"><ol>
<li>The Leaderboard is available at<code>/leaderboard</code>.</li>
<li>Each entry on the leaderboard contains the following:<ul>
<li>the user’s name;</li>
<li>the user’s picture;</li>
<li>the number of questions the user asked; and </li>
<li>the number of questions the user answered.</li>
</ul>
</li>
<li>Users are ordered in descending order based on the sum of the number of questions they’ve answered and the number of questions they’ve asked.</li>
</ol>
</td> <!-- ngIf: ctrl.reviewerTips --> </tr><!-- end ngRepeat: rubricItem in section.rubric_items --><tr ng-repeat="rubricItem in section.rubric_items" class="ng-scope"> <!-- ngIf: !ctrl.hideCriteria --><td class="rubric-item col-xs-3 ng-binding ng-scope" ng-if="!ctrl.hideCriteria" ng-bind-html="localize(rubricItem, 'criteria', markup=true)"><p>Is the application navigable?</p>
</td><!-- end ngIf: !ctrl.hideCriteria --> <td class="rubric-item ng-binding" ng-class="ctrl.reviewerTips ? col-xs-7 : col-xs-4" ng-bind-html="localize(rubricItem, 'passed_description', markup=true)"><p>The app contains a navigation bar that is visible on all of the pages.</p>
<p>The user can navigate between the page for creating new polls, and the leaderboard page, and the home page without typing the address into the address bar.</p>
</td> <!-- ngIf: ctrl.reviewerTips --> </tr><!-- end ngRepeat: rubricItem in section.rubric_items --><tr ng-repeat="rubricItem in section.rubric_items" class="ng-scope"> <!-- ngIf: !ctrl.hideCriteria --><td class="rubric-item col-xs-3 ng-binding ng-scope" ng-if="!ctrl.hideCriteria" ng-bind-html="localize(rubricItem, 'criteria', markup=true)"><p>Does the application interact with the backend correctly?</p>
</td><!-- end ngIf: !ctrl.hideCriteria --> <td class="rubric-item ng-binding" ng-class="ctrl.reviewerTips ? col-xs-7 : col-xs-4" ng-bind-html="localize(rubricItem, 'passed_description', markup=true)"><p>The data that’s initially displayed is populated correctly from the backend.</p>
<p>Each user’s answer and each new poll is correctly recorded on the backend.</p>
</td> <!-- ngIf: ctrl.reviewerTips --> </tr><!-- end ngRepeat: rubricItem in section.rubric_items --><tr ng-repeat="rubricItem in section.rubric_items" class="ng-scope"> <!-- ngIf: !ctrl.hideCriteria --><td class="rubric-item col-xs-3 ng-binding ng-scope" ng-if="!ctrl.hideCriteria" ng-bind-html="localize(rubricItem, 'criteria', markup=true)"><p>Does the code run without errors? Is the code free of warnings that resulted from not following the best practices listed in the documentation, such as using <code>key</code> for list items? Is the code formatted properly?</p>
</td><!-- end ngIf: !ctrl.hideCriteria --> <td class="rubric-item ng-binding" ng-class="ctrl.reviewerTips ? col-xs-7 : col-xs-4" ng-bind-html="localize(rubricItem, 'passed_description', markup=true)"><p>The code runs without errors. There are no warnings that resulted from not following the best practices listed in the documentation, such as using <code>key</code> for list items. All code is functional and formatted properly.  </p>
</td> <!-- ngIf: ctrl.reviewerTips --> </tr><!-- end ngRepeat: rubricItem in section.rubric_items --> </tbody> </table>
 
##### Architecture
<table class="table table-bordered section-table"> <thead> <tr> <!-- ngIf: !ctrl.hideCriteria --><th class="rubric-category criteria col-xs-3 ng-scope" ng-if="!ctrl.hideCriteria"> <span translate="" class="ng-scope">Criteria</span> </th><!-- end ngIf: !ctrl.hideCriteria --> <th class="rubric-category meets-specs" ng-class="ctrl.reviewerTips ? col-xs-7 : col-xs-4"> <span translate="" class="ng-scope">Meets Specifications</span> </th> <!-- ngIf: ctrl.reviewerTips --> </tr> </thead> <tbody>  <!-- ngRepeat: rubricItem in section.rubric_items --><tr ng-repeat="rubricItem in section.rubric_items" class="ng-scope"> <!-- ngIf: !ctrl.hideCriteria --><td class="rubric-item col-xs-3 ng-binding ng-scope" ng-if="!ctrl.hideCriteria" ng-bind-html="localize(rubricItem, 'criteria', markup=true)"><p>Does the store serve as the application’s single source of truth?</p>
</td><!-- end ngIf: !ctrl.hideCriteria --> <td class="rubric-item ng-binding" ng-class="ctrl.reviewerTips ? col-xs-7 : col-xs-4" ng-bind-html="localize(rubricItem, 'passed_description', markup=true)"><p>The store is the application’s source of truth.</p>
<p>Components read the necessary state from the store; they do not have their own versions of the same state.</p>
<p>There are no direct API calls in the components' lifecycle methods.</p>
</td> <!-- ngIf: ctrl.reviewerTips --> </tr><!-- end ngRepeat: rubricItem in section.rubric_items --><tr ng-repeat="rubricItem in section.rubric_items" class="ng-scope"> <!-- ngIf: !ctrl.hideCriteria --><td class="rubric-item col-xs-3 ng-binding ng-scope" ng-if="!ctrl.hideCriteria" ng-bind-html="localize(rubricItem, 'criteria', markup=true)"><p>Is application state managed by Redux?</p>
</td><!-- end ngIf: !ctrl.hideCriteria --> <td class="rubric-item ng-binding" ng-class="ctrl.reviewerTips ? col-xs-7 : col-xs-4" ng-bind-html="localize(rubricItem, 'passed_description', markup=true)"><p>Most application state is managed by the Redux store. State-based props are mapped from the store rather than stored as component state.</p>
<p>Form inputs and controlled components may have some state handled by the component.</p>
</td> <!-- ngIf: ctrl.reviewerTips --> </tr><!-- end ngRepeat: rubricItem in section.rubric_items --><tr ng-repeat="rubricItem in section.rubric_items" class="ng-scope"> <!-- ngIf: !ctrl.hideCriteria --><td class="rubric-item col-xs-3 ng-binding ng-scope" ng-if="!ctrl.hideCriteria" ng-bind-html="localize(rubricItem, 'criteria', markup=true)"><p>Does application state update correctly?</p>
</td><!-- end ngIf: !ctrl.hideCriteria --> <td class="rubric-item ng-binding" ng-class="ctrl.reviewerTips ? col-xs-7 : col-xs-4" ng-bind-html="localize(rubricItem, 'passed_description', markup=true)"><p>Updates are triggered by dispatching action creators to reducers.</p>
<p>Reducers and actions are written properly and correctly return updated state to the store.</p>
</td> <!-- ngIf: ctrl.reviewerTips --> </tr><!-- end ngRepeat: rubricItem in section.rubric_items --><tr ng-repeat="rubricItem in section.rubric_items" class="ng-scope"> <!-- ngIf: !ctrl.hideCriteria --><td class="rubric-item col-xs-3 ng-binding ng-scope" ng-if="!ctrl.hideCriteria" ng-bind-html="localize(rubricItem, 'criteria', markup=true)"><p>Does the architecture of the application make sense?</p>
</td><!-- end ngIf: !ctrl.hideCriteria --> <td class="rubric-item ng-binding" ng-class="ctrl.reviewerTips ? col-xs-7 : col-xs-4" ng-bind-html="localize(rubricItem, 'passed_description', markup=true)"><p>The code is structured and organized in a logical way.</p>
<p>Components are modular and reusable.</p>
</td> <!-- ngIf: ctrl.reviewerTips --> </tr><!-- end ngRepeat: rubricItem in section.rubric_items --> </tbody> </table>

##### Suggestions to extend the project: 
<ul>
<li>Add the functionality for creating new users. </li>
<li>Add authentication. </li>
<li>Add a loading bar.</li>
</ul>


 
 





