Feature: Products

  Scenario: Add petals
    When I browse to the "/"
    And I move mouse on "greenSquare" element
    And I move mouse on "title" element
    And I move mouse on "greenSquare" element
    And I move mouse on "title" element
    And I move mouse on "greenSquare" element
    Then I should see "*,*,*" in "petals" list
    And I should see "3" stars

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
    Then I should see "*,*" in "petals" list
    And I should see "2" stars

