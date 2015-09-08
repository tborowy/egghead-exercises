Feature: Bind controller

  Scenario: I want to buy 52 oranges from John
    When I browse to the "/"
    When I enter "Jack" into "input.seller" field
    When I enter "orange" into "input.name" field
    When I enter "52" into "input.count" field
    Then I should see "Good morning Jack!" in "welcomeSeller"
    Then I should see "I want to buy one orange x 52 times" in "order"
    Then I should see "I'm "orange" please buy me!" in "heading"

  Scenario: I want to buy 2 potatoes from John
    When I browse to the "/"
    When I enter "John" into "input.seller" field
    When I enter "potato" into "input.name" field
    When I enter "2" into "input.count" field
    Then I should see "Good morning John!" in "welcomeSeller"
    Then I should see "I want to buy one potato x 2 times" in "order"
    Then I should see "I'm "potato" please buy me!" in "heading"
