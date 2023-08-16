@login
Feature: Login
    Background:
        Given I open Login Page

    Scenario: Login successfully
        When I fill the username input with "tomsmith"
        And I fill the password input with "SuperSecretPassword!"
        And I click on Login button
        Then I see "You logged into a secure area!" message

    Scenario: Login successfully2
        When I fill the username input with "tomsmith"
        And I fill the password input with "SuperSecretPassword!"
        And I click on Login button
        Then I see "You logged into a secure area!" message