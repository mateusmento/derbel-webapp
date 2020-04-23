@SignUpUserFeature
Feature: Sign Up User Account
	In order to have a identity that can be recognized by the application
	As a user
	I want to be able to create a new account


	Scenario: User sign up a new account
		Given I am on the sign up page
		And I enter a name "Mateus Sarmento"
		And I enter a username "mateusmento"
		And I enter a password "@g3G6ja5A7v"
		When I press Sign Up
		Then I should be signed in
		And I should be redirected to the home page

	Scenario: User enters an existing username
		Given I am on the sign up page
		And I enter an existing username "mateusmento"
		When I take the focus off the username field
		Then A message bellow the username field should be displayed as "Username already exists"

	Scenario Outline: User enters an invalid password
		Given I am on the sign up page
		And I enter a password "<password>"
		When I take the focus off the password field
		Then A message bellow the password field should be displayed as "Password must have atleast 8 and contain number and letter."

	Examples:
		| password		|
		| 123456789		|
		| abcdefghij	|
		| abcd123		|
		| a1b2c3d		|

	Scenario Outline: User enters an valid password
		Given I am on the sign up page
		And I enter a password "<password>"
		When I take the focus off the password field
		Then A message bellow the password field should be displayed as ""

	Examples:
		| password				|
		| blacktema123			|
		| b1k3n#%n @nq31@(%*)	|

	Scenario: User press the see password eye button
		Given I am on the sign up page
		And I enter a password "mysecret"
		When I press the see password eye button
		Then The password must be visible

	Scenario: User release the see password eye button
		Given I am on the sign up page
		And I enter a password "mysecret"
		When I press the see password eye button
		And I release the see password eye button
		Then The password must be not visible

	Scenario: User clicks on the link: Sign in with your account
		Given I am on the sign up page
		When I click on the link: Sign in with your account
		Then I should be redirected to the sign in page
