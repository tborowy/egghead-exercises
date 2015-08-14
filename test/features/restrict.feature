Feature: Table filter

  Scenario: Search filter
    When I browse to the "/"
    Then I should see "Restrict M: working..." alert
    Then I confirm alert
    When I should see "restrictE"
    When I should see "restrictA"
    When I should see "restrictC"

