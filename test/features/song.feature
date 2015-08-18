Feature: Injectors

  Scenario: Sing and fake
    When I browse to the "/"
    Then I should see "Author: Gotye feat. Kimbra" in "author"
    Then I should see "Title: Somebody That I Used To Know" in "title"
    When I click "showSongButton"
    Then I should see "But you did not have to cut me off... But you treat me like a stranger ..." in "songFragment"
    When I click "showFakeButton"
    Then I should see "Buuuuuuuuuuuuuut you niah niah blah bla ..." in "fakeFragment"


