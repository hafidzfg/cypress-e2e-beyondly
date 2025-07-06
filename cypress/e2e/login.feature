Feature: Login page
    Scenario Outline: Try to login with invalid credential
        Given As a user I open the homepage
        Then I click the Masuk button
        Then I click the Email tab
        Then I input email '<email>'
        And I input password '<password>'
        And I click the login button
        Then I am shown the appropriate error

    Examples:
    | email                                 | password   |
    | test9999test99992812@gmail.com        | Random123$ |
    | notregistered123email@googl.com       | Random123$ |