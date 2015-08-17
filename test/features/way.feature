Feature: Detect route change error

  Scenario: Without alert messages
    When I browse to the "/"
    When I should not see "alertDanger"
    When I should not see "alertSuccess"

  Scenario: Error message - left button
    When I browse to the "/"
    When I click "leftButton"
    Then I should see "No, no, no. That is not good way!" text in "alertDanger"

  Scenario: Success message - right button
    When I browse to the "/"
    When I click "rightButton"
    Then I should see "You choose the right way! :)" text in "alertSuccess"

