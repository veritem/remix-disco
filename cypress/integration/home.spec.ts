describe('Home page', () => {
    it('Should open home page and find the text', () => {
        cy.visit('/')

        cy.get('h1').contains('Remix Starter and tailwindcss')
    })
})
