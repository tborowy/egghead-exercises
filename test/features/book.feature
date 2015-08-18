Feature: Components And Containers

  Scenario: Book directive
    When I browse to the "/"
    Then I should see "bookTitle"
    Then I should see "bookDescription"
    Then I should see "bookPages"
    Then I should see "The Da Vinci Code" text in "bookTitleContent"
    Then I should see "While in Paris, Harvard symbologist Robert Langdon is awakened by a phone call in the dead of the night. The elderly curator of the Louvre has been murdered inside the museum, his body covered in baffling symbols. As Langdon and gifted French..." text in "bookDescriptionContent"
    Then I should see "454 pages" text in "bookPagesContent"
