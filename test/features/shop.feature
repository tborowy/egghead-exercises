Feature: Products

  Scenario: Add petals
    When I browse to the "/"
    And I move mouse on "greenSquare" element
    And I move mouse on "title" element
    And I move mouse on "greenSquare" element
    And I move mouse on "title" element
    And I move mouse on "greenSquare" element
    And I should see "3" petals

  Scenario: Remove petals
    When I browse to the "/"
    And I move mouse on "greenSquare" element
    And I move mouse on "title" element
    And I move mouse on "greenSquare" element
    And I move mouse on "title" element
    And I move mouse on "greenSquare" element
    And I move mouse on "title" element
    And I move mouse on "redSquare" element
    And I move mouse on "title" element
    And I move mouse on "redSquare" element
    And I move mouse on "greenSquare" element
    And I move mouse on "title" element
    And I should see "2" petals

