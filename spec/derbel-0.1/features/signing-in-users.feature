@SignInUserFeature
Feature: Sign In User Account
	In order to be recognized by the application
	As a user
	I want to be able to identify myself with an account


	Scenario: User sign in an existing account with correct password
		Given I am on the sign in page
		And I enter an existing username 'mateusmento'
		And I enter the correct password 'g3G6ja5A7v'
		When I press Sign In
		Then I should be signed in
		And I should be redirected to the home page

	Scenario: User sign in an existing account with wrong password
		Given I am on the sign in page
		And I enter an existing username 'mateusmento'
		And I enter a wrong password '4h2Kn4k6'
		When I press Sign In
		Then A message should be displayed as 'Username and password dont match'

	Scenario: User clicks on the link: Sign up a new account
		Given I am on the sign in page
		When I click on the link: Sign up a new account
		Then I should be redirected to the sign up page
