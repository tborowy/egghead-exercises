Feature: Components And Containers

  Scenario: Component
    When I browse to the "/"
    And I click "componentButton"
    Then I should be directed to "/components"
    And I should see "myComponent"
    And I should see "This directive is simple component 1" text in "myComponent"
    And I click "addComponentButton"
    Then I should see "2" components in "components"
    And I should see "This directive is simple component 2" message for "2" in "components"
    And I click "addComponentButton"
    Then I should see "3" components in "components"
    And I should see "This directive is simple component 3" message for "3" in "components"

  Scenario: Container
    When I browse to the "/"
    And I click "containerButton"
    Then I should be directed to "/container"
    And I should see "myContainer"
    And I should see "I have many components" text in "myContainerName"
    And I should see "myContainerContent"
    And I click "addComponentToContainerButton"
    Then I should see "2" components in "containerComponents"
    And I should see "This directive is simple component 1" message for "1" in "containerComponents"
    And I should see "This directive is simple component 2" message for "2" in "containerComponents"
    And I click "addComponentToContainerButton"
    And I click "addComponentToContainerButton"
    Then I should see "4" components in "containerComponents"
    And I should see "This directive is simple component 3" message for "3" in "containerComponents"
    And I should see "This directive is simple component 4" message for "4" in "containerComponents"

