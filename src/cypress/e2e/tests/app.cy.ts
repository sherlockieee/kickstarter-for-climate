/// <reference types="Cypress" />

describe("Navigation", () => {
	it("should navigate to the projects page", () => {
		// Start from the index page
		cy.visit("/");
		cy.get("h1").contains("Crowdfund climate projects");

		// Find a link with an href attribute containing "about" and click it
		cy.get('a[href*="projects"]').click();

		// The new url should include "/projects"
		cy.url().should("include", "/projects");

		// The new page should contain an h1 with "projects page"
		cy.get("h1").contains("Fund a project");
	});
});

export {};
