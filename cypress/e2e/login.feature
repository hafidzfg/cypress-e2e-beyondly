Feature: Login page
    Scenario Outline: Try to login with invalid credential
        Given As a user I open the homepage
        Then I click the "Masuk" button
        Then I input phone number <email>
        Then I input password <password>
        Then I am shown an appropriate error

    Examples:
    | email                                 | password   |
    | test9999test99992812@gmail.com        | Random123$ |
    | notregistered123email@googl.com       | Random123$ |