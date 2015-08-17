Feature: Money

  Scenario: Directive proper attribute
    When I browse to the "/"
    Then I should see "money"
    And I should see "toggleButton"

  Scenario: Button text
    When I browse to the "/"
    And I enter "For hungry cats" into "forWhat" field
    Then I should see "For hungry cats" in "toggleButton"
    When I enter "For hungry dogs" into "forWhat" field
    Then I should see "For hungry dogs" in "toggleButton"

  Scenario: Select from directive
    When I browse to the "/"
    And I select option "20" in "devote"
    Then I should see "I want to devote: $20.00" in "proposal"
    And I select option "40" in "devote"
    Then I should see "I want to devote: $40.00" in "proposal"

  Scenario: Toggle message
    When I browse to the "/"
    And I click "toggleButton"
    Then I should see "Shut up and take my money!" in "message"
    When I click "toggleButton"
    Then I should not see message in "message"
    And I click "toggleButton"
    Then I should see "Shut up and take my money!" in "message"




