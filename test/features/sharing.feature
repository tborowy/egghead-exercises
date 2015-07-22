Feature: Share data between controllers

  Scenario: Check Left to Right controller bind
    When I browse to the "/"
    When I enter "some text" into "inputs.left" field
    Then the css element ".bg-warning" should contain the text "some text"
    Then the css element ".bg-success" should contain the text "some text"

  Scenario: Check Right to Left controller bind
    When I browse to the "/"
    When I enter "another text" into "inputs.right" field
    Then the css element ".bg-warning" should contain the text "another text"
    Then the css element ".bg-success" should contain the text "another text"
