Feature: Defining a method on the scope

  Scenario: Word replace
    When I browse to the "/"
    When I enter "o" into "inputs.word" field
    Then the css element ".well" should contain the text "Soft Kitty, Warm Kitty, little ball of fur. Happy Kitty, Sleepy Kitty, o, o, o..."
    When I enter "aaa" into "inputs.word" field
    Then the css element ".well" should contain the text "Soft Kitty, Warm Kitty, little ball of fur. Happy Kitty, Sleepy Kitty, aaa, aaa, aaa..."

  Scenario: Enter new main text without "purr" word
    When I browse to the "/"
    When I enter "Lorem ipsum dolor sit amet..." into "inputs.mainText" field
    Then the css element ".well" should contain the text "Lorem ipsum dolor sit amet..."
    When I enter "One two three..." into "inputs.mainText" field
    Then the css element ".well" should contain the text "One two three..."

  Scenario: Enter new main text with 'purr' word and replace 'purr' word with new word
    When I browse to the "/"
    When I enter "Lorem ipsum dolor purr sit amet purr." into "inputs.mainText" field
    When I enter "kitty" into "inputs.word" field
    Then the css element ".well" should contain the text "Lorem ipsum dolor kitty sit amet kitty."
    When I enter "One two purr three purr four six purr." into "inputs.mainText" field


