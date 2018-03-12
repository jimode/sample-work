Feature: See the home page

As a User
I want to be able to view the home page

  Background: Visit the homepage
    Given I visit the YLD home page

  Scenario: View the homepage
    Then I should see the "What we do" section
    And I should see the "Customers" titled section

  Scenario Outline: View and use the menu
    Then Link <link> should dispay the <pageUrl> page

    Examples:
      | link | pageUrl         |
      | 0    | www.yld.io/     |
      | 1    | what-we-do.html |
      | 2    | our-work.html   |
      | 3    | resources.html  |
      | 4    | about.html      |
      | 5    | newsroom.html   |
      | 6    | contact.html    |

  Scenario: Subscribe to the YLD Newsletter
    And I navigate to the blog page
    When I subscribe to the newsletter