Feature: Directive Communication

  Scenario: Nesting directives
    When I browse to the "/"
    Then I should see "vehicle"
    Then I should see "car"
    Then I should see "audi"
    Then I should see "bus"
    Then I should see "jelcz"

  Scenario: Changing car speed
    When I browse to the "/"
    When I enter "30" into "input.driveCar" field
    When I click "button.carDrive"
    Then I should see "I am fast car! 30 km/h! Whoa!" text in "driveCarMessage"
    When I enter "89" into "input.driveCar" field
    When I click "button.carDrive"
    Then I should see "I am fast car! 89 km/h! Whoa!" text in "driveCarMessage"

  Scenario: Changing bus speed
    When I browse to the "/"
    When I enter "11" into "input.driveBus" field
    When I click "button.busDrive"
    Then I should see "I am fast bus! 11 km/h! Whoa!" text in "driveBusMessage"
    When I enter "89" into "input.driveBus" field
    When I click "button.busDrive"
    Then I should see "I am fast bus! 89 km/h! Whoa!" text in "driveBusMessage"

