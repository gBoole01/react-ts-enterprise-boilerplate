describe('Homepage', () => {
    it('should display the Title', () => {
        cy.visit('http://localhost:5173');
        cy.contains('h1', 'Hello World');
    });
});
