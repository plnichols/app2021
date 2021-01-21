# Wallet 2021

## Challenge

Create a basic wallet application to display and change a users balance using React, Redux and one of redux-thunk, redux-saga or redux-observable middlewares.

## Requirements

- The application should load the current balance from the JSON file located at:
  https://demo9104838.mockable.io/currencies
- The application should display the current balance on the screen.
- The user should be able to increment the value of the balance.
- The user should be able to decrement the value of the balance.
- The application should show a warning when the balance is negative.
- The application does not need to update the JSON file.

## Solution

### Bundler

I decided to build the app using [Parcel.js](https://parceljs.org/). I had never used this bundler before but I had heard good things about it, so I decided to give it a go. And since it claims to be blazingly fast and most importantly, zero configuration, it allowed to get the app up and running quickly :rocket:.

### Test Framework

The test framework is made up of [Jest](https://jestjs.io/en/) and [React Testing Library](https://testing-library.com/) because I am familiar with both tools from recent projects and I quite like the React Testing Library guiding principles around testing: 
>...encourage you to write tests that closely resemble how your web pages are used.

### Store

For the store/state of the app, I used [Redux](https://redux.js.org/) but more specifically their latest [Redux Toolkit](https://redux-toolkit.js.org/). This was also a new discovery, but once again allowed to get setup quickly. At first glance, it looks like a much cleaner solution with less code repetition than _old-school_ custom Redux actions, reducers, etc... Definitely something I would consider for future projects :+1:.

### Styling

Given the size of the app/test, there was not point (or time really :smiley:) to integrate a full-fledge styling framework (ie: Tailwind, Bootstrap...) or component library (ie: Material-UI...) so I decided to go with a simple but reliable Sass implementation. Parcel supports it out-of-the-box.

## Final Comments

Obviously, with a strict 3 hours limit, some decisions had to be made and priorities had to be taken into account. Unfortunately, I had to comment out a few tests for components/modules which used the store (`<Provider />`) as I didn't have time to mock this.

Also, as I'm sure you'll notice, I had to hard-code a dummy currencies json response. The link provided didn't work when I started the test so I had to improvise a little bit!

I'll be happy to discuss the test in more details.

Thanks
