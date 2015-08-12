Feature: Bind controller

  Scenario: I want to buy 52 oranges from John
    When I browse to the "/"
    When I enter "Jack" into "inputs.seller" field
    When I enter "orange" into "inputs.name" field
    When I enter "52" into "inputs.count" field
    Then the id element "welcomeSeller" should contain the text "Good morning Jack!"
    Then the id element "order" should contain the text "I want to buy one orange x 52 times"
    Then the css element "h1" should contain the text "I'm "orange" please buy me!"

  Scenario: I want to buy 2 potatoes from John
    When I browse to the "/"
    When I enter "John" into "inputs.seller" field
    When I enter "potato" into "inputs.name" field
    When I enter "2" into "inputs.count" field
    Then the id element "welcomeSeller" should contain the text "Good morning John!"
    Then the id element "order" should contain the text "I want to buy one potato x 2 times"
    Then the css element "h1" should contain the text "I'm "potato" please buy me!"
