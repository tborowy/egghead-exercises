Feature: Detect route change error

  Scenario: Without alert messages
    When I browse to the "/"
    And I should see "error"
    When I should see "alert.info"
    When I should not see "alert.danger"
    When I should not see "alert.success"

  Scenario: Error message - left button
    When I browse to the "/"
    When I click "button.left"
    Then I should see "Dead end! You went in the wrong direction!" text in "alert.danger"

  Scenario: Success message - right button
    When I browse to the "/"
    When I click "button.right"
    Then I should see "Great job! You have reached your destination!" text in "alert.success"

