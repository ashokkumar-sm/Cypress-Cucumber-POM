Feature: Login to Portal
I want to login to Portal

Background: Browse URL
Given Browse URL

Scenario: Login as Admin
    Then Enter credential
    |username | password|
    |admin    |admin    |
    Then Select loginbutton
    And Ensure user is loggedin