Feature: angular.copy

  Scenario: Update 'Consultant' images title
    When I browse to the "/"
    Then I should not see "input"
    When I click "2" image
    Then I should see "input"
    When I enter "Documentation" into "input" field
    Then I should see "Consultant" in "2" title
    And I click "saveButton"
    Then I should see "Documentation" in "2" title

  Scenario: Update 'Consultant' images title
    When I browse to the "/"
    Then I should not see "input"
    When I click "3" image
    Then I should see "input"
    When I enter "Programmer" into "input" field
    Then I should see "Customer" in "3" title
    And I click "saveButton"
    Then I should see "Programmer" in "3" title
