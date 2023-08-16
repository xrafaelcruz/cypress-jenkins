@secure
Feature: Secure
    Background:
        Given I log in

    Scenario: Secure successfully
        Given I visit "/abc"
        Then I see "You logged into a secure area!" message2

    Scenario: Secure successfully2
        Given I visit "/abc"
        Then I see "You logged into a secure area!" message2
