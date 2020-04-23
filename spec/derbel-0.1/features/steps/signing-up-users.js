const assert = require('assert');
const { Given, When, Then } = require('cucumber');

Given('I am on the sign up page', function() {

});

Given("I enter a name {string}", function(name) {

});

Given('I enter a username {string}', function (username) {

});

Given("I enter a password {string}", function(password) {

});

Given("I enter an existing username {string}", function(username) {

});

When('I press Sign Up', function() {

});

When('I take the focus off the username field', function() {

});

When('I take the focus off the password field', function() {

});

When('I press the see password eye button', function () {

});

When('I release the see password eye button', function () {

});

When('I click on the link: Sign in with your account', function () {

});

Then("A message bellow the username field should be displayed as {string}", function(message) {

});

Then("A message bellow the password field should be displayed as {string}", function(expectedMessage) {

});

Then('The password must be visible', function () {

});

Then('The password must be not visible', function () {

});

Then('I should be redirected to the sign in page', function() {

});
