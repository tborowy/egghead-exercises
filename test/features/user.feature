Feature: Table filter

  Scenario: Search filter
    When I browse to the "/"
    When I enter "female" into "input.search" field
    Then I should see "5" in "id" column in row "1" of "user.table" table
    And I should see "8" in "id" column in row "2" of "user.table" table
    And I should see "11" in "id" column in row "3" of "user.table" table
    And I should see "14" in "id" column in row "4" of "user.table" table
    And I should see "15" in "id" column in row "5" of "user.table" table
    And I should see "swatson4" in "username" column in row "1" of "user.table" table
    And I should see "mbanks7" in "username" column in row "2" of "user.table" table
    And I should see "eturnera" in "username" column in row "3" of "user.table" table
    And I should see "aboydd" in "username" column in row "4" of "user.table" table
    And I should see "farmstronge" in "username" column in row "5" of "user.table" table
    And I should see "Shirley Watson" in "fullName" column in row "1" of "user.table" table
    And I should see "Martha Banks" in "fullName" column in row "2" of "user.table" table
    And I should see "Elizabeth Turner" in "fullName" column in row "3" of "user.table" table
    And I should see "Angela Boyd" in "fullName" column in row "4" of "user.table" table
    And I should see "Frances Armstrong" in "fullName" column in row "5" of "user.table" table
    And I should see "Female" in "gender" column in row "1" of "user.table" table
    And I should see "Female" in "gender" column in row "2" of "user.table" table
    And I should see "Female" in "gender" column in row "3" of "user.table" table
    And I should see "Female" in "gender" column in row "4" of "user.table" table
    And I should see "Female" in "gender" column in row "5" of "user.table" table

  Scenario: Limit the number of records to one
    When I browse to the "/"
    And I click "input.one" radio option
    Then the "user.table" table should have "1" rows

  Scenario: Limit the number of records to ten
    When I browse to the "/"
    And I click "input.two" radio option
    Then the "user.table" table should have "10" rows

  Scenario: Limit the number of records to fifteen
    When I browse to the "/"
    And I click "input.three" radio option
    Then the "user.table" table should have "15" rows

  Scenario: Sort data by id
    When I browse to the "/"
    And I click "user.idSort"
    And I should see "1" in "id" column in row "1" of "user.table" table

  Scenario: Sort data by username
    When I browse to the "/"
    And I click "user.usernameSort"
    And I should see "aboydd" in "username" column in row "1" of "user.table" table

  Scenario: Sort data by fullName
    When I browse to the "/"
    And I click "user.fullNameSort"
    And I should see "Adam Hart" in "fullName" column in row "1" of "user.table" table

  Scenario: Sort data by gender
    When I browse to the "/"
    And I click "user.gender"
    And I should see "mbanks7" in "username" column in row "1" of "user.table" table

  Scenario: Sort data by id descending
    When I browse to the "/"
    And I click "user.idSort"
    And I click "user.idSort"
    And I should see "15" in "id" column in row "1" of "user.table" table

  Scenario: Sort data by fullName descending
    When I browse to the "/"
    And I click "user.fullNameSort"
    And I click "user.fullNameSort"
    And I should see "5" in "id" column in row "1" of "user.table" table

  Scenario: Filter data with "w", limit rows to one and sort data by username
    When I browse to the "/"
    When I enter "w" into "input.search" field
    When I click "input.one" radio option
    When I click "user.usernameSort"
    Then I should see "glawson6" in "username" column in row "1" of "user.table" table

  Scenario: Filter data with "er" and sort data descending by id
    When I browse to the "/"
    When I enter "er" into "input.search" field
    When I click "user.idSort"
    When I click "user.idSort"
    Then I should see "rmcdonaldc" in "username" column in row "1" of "user.table" table

