Feature: $http

  Scenario: Songs table
    When I browse to the "/"
    When I should see "Songs were uploaded" text in "message"

    Then I should see "John Lennon" in "artist" column in row "1" of "songs.table"
    Then I should see "Imagine" in "title" column in row "1" of "songs.table"
    Then I should see "1971" in "year" column in row "1" of "songs.table"

    Then I should see "Bob Dylan" in "artist" column in row "2" of "songs.table"
    Then I should see "Like a Rolling Stone" in "title" column in row "2" of "songs.table"
    Then I should see "1965" in "year" column in row "2" of "songs.table"

    Then I should see "Aretha Franklin" in "artist" column in row "3" of "songs.table"
    Then I should see "Respect" in "title" column in row "3" of "songs.table"
    Then I should see "1965" in "year" column in row "3" of "songs.table"

    Then I should see "The Beatles" in "artist" column in row "4" of "songs.table"
    Then I should see "Hey Jude" in "title" column in row "4" of "songs.table"
    Then I should see "1968" in "year" column in row "4" of "songs.table"

  Scenario: Add favourite song and clear list
    When I browse to the "/"
    When I click "button.add"
    Then I should see "I just add "I see fire" to your favourite songs list!" text in "message"
    Then I should see "Ed Sheeran" in "artist" column in row "1" of "favouriteSongs.table"
    Then I should see "I see fire" in "title" column in row "1" of "favouriteSongs.table"
    When I enter "Maroon 5" into "input.artist" field
    When I enter "Sugar" into "input.title" field
    When I click "button.add"
    Then I should see "I just add "Sugar" to your favourite songs list!" text in "message"
    Then I should see "Maroon 5" in "artist" column in row "2" of "favouriteSongs.table"
    Then I should see "Sugar" in "title" column in row "2" of "favouriteSongs.table"
    When I click "button.clear"
    Then I should see "The list was cleared." text in "message"
    When the "favouriteSongs.table" table should have "0" rows


