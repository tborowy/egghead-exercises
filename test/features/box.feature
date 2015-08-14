Feature: Box

  Scenario: Start application
    When I browse to the "/"
    Then I should see "smallBox"
    Then I should see "mediumBox"
    Then I should see "bigBox"

  Scenario: Box name
    When I browse to the "/"
    And I enter "John" into "first" box in "name" field
    And I enter "Maria" into "second" box in "name" field
    And I enter "Andrew" into "third" box in "name" field
    Then I should see "John" into "first" box in "panelName" field
    Then I should see "Maria" into "second" box in "panelName" field
    Then I should see "Andrew" into "third" box in "panelName" field

  Scenario: Box color
    When I browse to the "/"
    And I select option "blue" in "color" into "first" box
    Then "First" "square" should change color to "blue"
    Then "Second" "square" should change color to "blue"
    Then "Third" "square" should change color to "blue"
    When I select option "red" in "color" into "third" box
    Then "First" "square" should change color to "red"
    Then "Second" "square" should change color to "red"
    Then "Third" "square" should change color to "red"

