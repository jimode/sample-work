Feature: See the home page

As a User
I want to be able to view the home page
    And Subscribe to the YLD Newsletter

  Scenario: Subscribe to the YLD Newsletter
    Given I navigate to the blog page
    When I subscribe to the newsletter
    Then the success message should be displayed