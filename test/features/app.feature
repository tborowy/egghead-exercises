Feature: Experimental "Controller as" Syntax

  Scenario: Enter only success message
    When I browse to the "/"
    When I enter "Correct!" into "input.success" field
    When I click "button.display"
    Then I should not see "button.success"
    Then I should not see "button.unSuccess"

  Scenario: Enter only unsuccess message
    When I browse to the "/"
    When I enter "Bug!" into "input.unSuccess" field
    When I click "button.display"
    Then I should not see "button.success"
    Then I should not see "button.unSuccess"

  Scenario: Enter "Correct!" success and "Bug!" unsuccess messages
    When I browse to the "/"
    When I enter "Correct!" into "input.success" field
    When I enter "Bug!" into "input.unSuccess" field
    When I click "button.display"
    Then I should see "button.success"
    Then I should see "button.unSuccess"
    When I click "button.success"
    Then I should see "Correct!" in "message.success"
    When I click "button.unSuccess"
    Then I should see "Bug!" in "message.unSuccess"

  Scenario: Enter "Ok!" success and "Not ok!" unsuccess messages
    When I browse to the "/"
    When I enter "Ok!" into "input.success" field
    When I enter "Not ok!" into "input.unSuccess" field
    When I click "button.display"
    Then I should see "button.success"
    Then I should see "button.unSuccess"
    When I click "button.success"
    Then I should see "Ok!" in "message.success"
    When I click "button.unSuccess"
    Then I should see "Not ok!" in "message.unSuccess"


