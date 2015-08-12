Feature: Share data between controllers

  Scenario: Check Left to Right controller bind
    When I browse to the "/"
    When I enter "some text" into "inputs.left" field
    Then the css element ".bg-warning" should contain the text "some text"
    Then the css element ".bg-success" should contain the text "some text"
    When I enter "controller" into "inputs.left" field
    Then the css element ".bg-warning" should contain the text "controller"
    Then the css element ".bg-success" should contain the text "controller"


  Scenario: Check Right to Left controller bind
    When I browse to the "/"
    When I enter "text" into "inputs.right" field
    Then the css element ".bg-warning" should contain the text "text"
    Then the css element ".bg-success" should contain the text "text"
    When I enter "lorem" into "inputs.right" field
    Then the css element ".bg-warning" should contain the text "lorem"
    Then the css element ".bg-success" should contain the text "lorem"

