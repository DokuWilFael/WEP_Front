## What is this ?

This project is a front-end created in ReactJs with Redux.
It uses [this](https://github.com/PosnicAntoine/WEP) API to
provide a basic week-end planifier service.

When connected, users can browse location and events and hopefully find
something they want to do.

##Initial settings

To permit the use of a personal server, the config.js file in src
contains the URL and port where the API should be localized.

Before deploying in production, you want to verify that those values
are correct for you (and change them if necessary).

##Tricks
This project is in pre-alpha and as still a lot of bugs.
I will list here some weird "feature" you will have to face.

- When sharing an activity, you have to click a second time on
the button to actually link the address and the activity together.
This is a timing bug with the api request but I didn't find a fix.

- The drop down list to select city and activity are not updated when
you add a new activity/address. You have to refresh the page for it to
update.

- Clicking the MAIN HUB/MY WEEK END button refresh the page. Another
timing related bug...

- Due to previous bug, refreshing the page will trigger the vue change
between the main hub and my week-end vue.

- I think the drop down menu in My Week-end is useless. I probably forgot
to connect it properly.

##Author
Damien Vansteene

## Auto-generated Documentation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
