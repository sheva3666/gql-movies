describe("App E2E", () => {
  it("open page", () => {
    cy.visit("http://localhost:3000/");

    cy.get("td[data-testid='movie-name']").should(
      "have.text",
      "LoTR: The Fellowship of the RingPulp FictionForrest GumpInceptionThe Matrix"
    );
    cy.get("td[data-testid='movie-director']").should(
      "have.text",
      "Peter JacksonQuentin TarantinoRobert ZemeckisChristopher NolanLana Wachowski"
    );
    cy.get("td[data-testid='movie-date']").should(
      "have.text",
      "2001-12-101994-10-141994-07-102010-07-221999-04-04"
    );
    cy.get("td[data-testid='movie-runtime']").should(
      "have.text",
      "178 minutes154 minutes144 minutes148 minutes136 minutes"
    );
  });

  it("open favourite page and add new mouvie", () => {
    cy.contains("Favourites").click();
    cy.contains("Add movie").click();
    cy.get("button[data-testid='btn-add']").first().click();

    cy.get("td[data-testid='favouriteMovie-name']").should(
      "have.text",
      "LoTR: The Fellowship of the Ring"
    );
    cy.get("td[data-testid='favouriteMovie-director']").should(
      "have.text",
      "Peter Jackson"
    );
    cy.get("td[data-testid='favouriteMovie-date']").should(
      "have.text",
      "2001-12-10"
    );
    cy.get("td[data-testid='favouriteMovie-runtime']").should(
      "have.text",
      "178 minutes"
    );
  });

  it("should have error message", () => {
    cy.get('button[data-testid="add"]').click();
    cy.get("button[data-testid='btn-add']").first().click();

    cy.contains("Cancel");
  });

  it("cancel and add next movie", () => {
    cy.contains("Cancel").click;
    cy.get("button[data-testid='btn-add']").last().click();

    cy.get("td[data-testid='favouriteMovie-name']").should(
      "have.text",
      "LoTR: The Fellowship of the RingThe Matrix"
    );
    cy.get("td[data-testid='favouriteMovie-director']").should(
      "have.text",
      "Peter JacksonLana Wachowski"
    );
    cy.get("td[data-testid='favouriteMovie-date']").should(
      "have.text",
      "2001-12-101999-04-04"
    );
    cy.get("td[data-testid='favouriteMovie-runtime']").should(
      "have.text",
      "178 minutes136 minutes"
    );
  });

  it("delete movie", () => {
    cy.contains("X").first().click();
    cy.get("td[data-testid='favouriteMovie-name']").should(
      "have.text",
      "The Matrix"
    );
    cy.get("td[data-testid='favouriteMovie-director']").should(
      "have.text",
      "Lana Wachowski"
    );
    cy.get("td[data-testid='favouriteMovie-date']").should(
      "have.text",
      "1999-04-04"
    );
    cy.get("td[data-testid='favouriteMovie-runtime']").should(
      "have.text",
      "136 minutes"
    );
  });
});
