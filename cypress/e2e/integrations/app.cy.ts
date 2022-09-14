/// <reference types="Cypress" />

describe("Navigation", () => {
	it("should navigate to the projects page", () => {
		// Start from the index page
		cy.visit("/");
		cy.get("h1").contains("Crowdfund climate projects");

		// Find a link with an href attribute containing "project" and click it
		cy.get('a[href*="projects"]').first().click();

		// The new url should include "/projects"
		cy.url().should("include", "/projects");
		cy.wait(3000);
		// The new page should contain an h1
		cy.get("h1").contains("Fund a project");
	});
});

export {};
