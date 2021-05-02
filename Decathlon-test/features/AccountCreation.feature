Feature: The Decathlon online account creation

        Scenario Outline: As a user for online shopping, I want to create a decathlon account
            Given I am on the Decathlon US site home page
             Then I create the decathlon account
             Then I go to rediff home page
              And I do rediff login
              And I open the email for activation and click on link for account activation
              And I set the password and activate decathlon account