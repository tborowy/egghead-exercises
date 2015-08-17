Feature: Details routing

  Scenario: Route to details.html
    When I browse to the "/"
    When I click "nextButton"
    Then I should be directed to "details/Ferrari/3.5"
    And I should see "Brand: Ferrari" text in "brandText"
    And I should see "Capacity: 3.5" text in "capacityText"
    And I should not see "secret" image

  Scenario: Route to home.html and return to home.html
    When I browse to the "/"
    And I enter "Honda" into "brand" field
    When I click "nextButton"
    Then I should be directed to "details/Honda/3.5"
    And I should see "Brand: Honda" text in "brandText"
    And I should see "Capacity: 3.5" text in "capacityText"
    And I click "backButton"
    Then I should be directed to "/"

  Scenario: Route to secret.html from brand
    When I browse to the "/"
    And I enter "secret" into "brand" field
    When I click "nextButton"
    Then I should be directed to "secret"
    And I should see "secret" image

  Scenario: Route to secret.html from capacity
    When I browse to the "/"
    And I enter "secret" into "capacity" field
    When I click "nextButton"
    Then I should be directed to "secret"
    And I should see "secret" image
