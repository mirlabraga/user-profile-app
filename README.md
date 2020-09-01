
# User Setting Profile

You are asked to build a simple ReactJS front-end-only app that allows a user to log in, navigate to their “profile” page, update it and verify their profile has changed. No back-end services are expected or required. A simple json file is given below that you should return via a function that mocks connecting to a backend service. We expect to see the whole project with a structure that you would typically employ that contains the HTML, CSS, JavaScript and image files, plus any other translation or compilation files or configuration (e.g. Webpack) you would typically use. Usage of NPM is required and bonus points if you use TypeScript!

## User story

1.  A user logs in through a simple username and password form, page or modal.

2. The user is presented with a simple navigation menu on which “Profile” is one option (you can add or mock others just to make it obvious there are other navigation options, but these don’t need to be implemented)

3. The user clicks “Profile” and is take to a profile page which lists a collection of user data. Two buttons are also presented: Edit and Cancel. Cancel takes the user back to the first page (2).

4. The user clicks Edit and is shown the user data in editable form along with two buttons: Save and Cancel. Cancel returns the user to the “Profile” page in 3.

5. The user changes the values and clicks Save.

6. The user is presented with the updated user data in non-editable form.

7. The user presses Back and goes back to (2).

8. The user clicks the “Profile” link again and goes to the profile page which should, again, show the updated data they edited in step (5).

## Required

1. ReactJS

2. NPM

3. Maintaining state across page clicks

## Development Requirements

- node >= v12 [![node](https://img.shields.io/badge/node-v12-blue.svg?cacheSeconds=2592000)](https://nodejs.org/en/download/)
- npm >= v6 [![npm](https://img.shields.io/badge/npm-v6.3.0-blue)](https://www.npmjs.com/get-npm)

## Running the app

```bash
# clone project from github
$ git clone https://github.com/mirlabraga/user-profile-app.git

# run npm install for install dependencies
$ npm install

# run on the root project: node app.js pack-input (pack)
$ npm start

```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Application

![](https://s3.amazonaws.com/img0.recordit.co/nW0Rk4VD4s.mp4?AWSAccessKeyId=AKIAUQ5RURZ7ND2T2B6I&Expires=1598967096&Signature=DW7TNzKuXgj%2B7lh5lghyoO%2F1Huw%3D)


## Test

```bash
# run tests
$ npm run test

```
