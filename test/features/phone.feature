Feature: Experimental "Controller as" Syntax

  Scenario: Initial state
    When I browse to the "/"
    When I select option "Good Burnett" in "phoneBook"
    When I click "button"
    Then I should see "+1 (820) 450-3124" in "phoneNumber"
    When I select option "Candace Gordon" in "phoneBook"
    When I click "button"
    When I click "button"
    Then I should see "+1 (932) 408-2012" in "phoneNumber"

