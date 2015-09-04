Feature: Accessing Data in HTML

  
  Scenario: Bus table
    When I browse to the "/"
    Then I should see "Tarnów" in "start" column in row "1" of "bus.table" table
    Then I should see "Tarnów" in "start" column in row "2" of "bus.table" table
    Then I should see "Tarnów" in "start" column in row "3" of "bus.table" table

    Then I should see "Tarnów Mościce" in "via" column in row "1" of "bus.table" table
    Then I should see "Wojnicz" in "via" column in row "2" of "bus.table" table
    Then I should see "Tarnów Mościce" in "via" column in row "3" of "bus.table" table

    Then I should see "Kraków" in "stop" column in row "1" of "bus.table" table
    Then I should see "Kraków" in "stop" column in row "2" of "bus.table" table
    Then I should see "Kraków" in "stop" column in row "3" of "bus.table" table

    Then I should see "8:00" in "departure" column in row "1" of "bus.table" table
    Then I should see "8:10" in "departure" column in row "2" of "bus.table" table
    Then I should see "8:15" in "departure" column in row "3" of "bus.table" table

  
  Scenario: Change bus via stop
    When I browse to the "/"
    When I click "1" bus button
    Then I should see "Wojnicz" in "via" column in row "1" of "bus.table" table
    Then I enter "Wierzchosławice" into "bus.input" field
    When I click "2" bus button
    Then I should see "Wierzchosławice" in "via" column in row "2" of "bus.table" table
    When I click "3" bus button
    Then I should see "Wierzchosławice" in "via" column in row "3" of "bus.table" table
    Then I enter "Tarnów Mościce" into "bus.input" field
    When I click "1" bus button
    Then I should see "Tarnów Mościce" in "via" column in row "1" of "bus.table" table


  
  Scenario: Train table
    When I browse to the "/"
    Then I should see "Kraków Główny" in "start" column in row "1" of "train.table" table
    Then I should see "Kraków Główny" in "start" column in row "2" of "train.table" table
    Then I should see "Kraków Główny" in "start" column in row "3" of "train.table" table

    Then I should see "Wieliczka" in "stop" column in row "1" of "train.table" table
    Then I should see "Rzeszów Główny" in "stop" column in row "2" of "train.table" table
    Then I should see "Krzeszowice" in "stop" column in row "3" of "train.table" table

    Then I should see "9:10" in "departure" column in row "1" of "train.table" table
    Then I should see "12:10" in "departure" column in row "2" of "train.table" table
    Then I should see "12:30" in "departure" column in row "3" of "train.table" table

    Then I should see "0" in "delay" column in row "1" of "train.table" table
    Then I should see "0" in "delay" column in row "2" of "train.table" table
    Then I should see "0" in "delay" column in row "3" of "train.table" table

  
  Scenario: Change train delay
    When I browse to the "/"
    When I click "1" train button
    Then I should see "2" in "delay" column in row "1" of "train.table" table
    Then I enter "10" into "train.input" field
    When I click "2" train button
    Then I should see "10" in "delay" column in row "2" of "train.table" table
    When I click "3" train button
    Then I should see "10" in "delay" column in row "3" of "train.table" table
    Then I enter "5" into "train.input" field
    When I click "1" train button
    Then I should see "5" in "delay" column in row "1" of "train.table" table


  
  Scenario: Flight table
    When I browse to the "/"
    Then I should see "Eurolot" in "airline" column in row "1" of "flight.table" table
    Then I should see "Lufthansa" in "airline" column in row "2" of "flight.table" table
    Then I should see "Air Berlin" in "airline" column in row "3" of "flight.table" table

    Then I should see "Amsterdam" in "destination" column in row "1" of "flight.table" table
    Then I should see "Frankfurt" in "destination" column in row "2" of "flight.table" table
    Then I should see "Frankfurt" in "destination" column in row "3" of "flight.table" table

    Then I should see "10:15" in "scheduled" column in row "1" of "flight.table" table
    Then I should see "10:30" in "scheduled" column in row "2" of "flight.table" table
    Then I should see "11:30" in "scheduled" column in row "3" of "flight.table" table

  Scenario: Cancel the flight
    When I browse to the "/"
    When I click "1" flight button
    Then "1" row of "flight.table" table should have "danger" class
    Then "2" row of "flight.table" table should not have "danger" class
    Then "3" row of "flight.table" table should not have "danger" class
    When I click "1" flight button
    Then "1" row of "flight.table" table should not have "danger" class
    When I click "2" flight button
    When I click "3" flight button
    Then "2" row of "flight.table" table should have "danger" class
    Then "3" row of "flight.table" table should have "danger" class
