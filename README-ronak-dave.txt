Commands :

  - "gulp test:e2e" will run e2e tests with protractor (test are in e2e folder).
  - "npm test" will run all the integration/unit tests.
  - "gulp serve" will serve the app and open the browser.
  - "gulp build" will build the app.

See data in mongodb :
  - open a shell, type "mongo"
  - type "use angulartest"
  - type "db.userdatas.find({});" to show all saved userdatas.

- First I used the angular-fullstack-generator to scaffold the project with the best practisses.
- I updated the name of the db to "angulartest"
- I used the generator to generate a usedata endpoint : "yo angular-fullstack:endpoint userdata"
- I used the generator to generate a route for ui-router application page : "yo angular-fullstack:route application"
- I used the generator to generate a route for ui-router application Success page : "yo angular-fullstack:route applicationSuccess"
- Setup the new components and routes in client/app/app.js.
- Create the form and styling on the application component.
- Created the validation on the application component's form
- Communicate a parameter when transitioning from application page to success page.
- I updated the userData model to fit the requirement.
https://www.sitepoint.com/javascript-testing-unit-functional-integration/
- I updated the integration for the api (*.integration file)
- I updated the unit for the api (*.spec file)
- I wrote a test for the application component. It checks that the retrieval of the countries
works. Another
- I made sure all tests work and pass without error.
Testing :
  So we test elements of the app (api,frontend,external api) independently and all together:

  - the retrieval of the countries from the API is testested with the unit
 test of the "application" component.
  - We test the persistance of data by checking
  that the api answers to post request for the creation of userData objects.
  - We also check that the application Component separately, making sure that it
  populates the dropdown correctly by intercepting it's http request to the API and feeding
  it 4 fake countries to populate the dropdown.
  - We check all the elements together with some end-to-end test with protractor. This runs a browser and interacts
  with the app.

  Going further : I would write more tests, especially 100% coverage of the form.
  Also, some unit test for the application success page could be written (they are written for the application main page)
