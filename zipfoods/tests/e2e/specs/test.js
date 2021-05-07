// /tests/e2e/specs/zipfoods.js

// `describe` is a Cypress method used to group tests
// It takes two arguments:
// 1) The name of the test
// 2) A callback function with tests
describe('Zipfoods', () => {

  // Define a product we can use throughout our tests
  const product = {
    name: 'Driscoll’s Strawberries',
    id: 1
  }

  // `it` is another Cypress method, and it's used to define individual tests within our groups
  // It takes two arguments:
  // 1) A string explaining what the test should do 
  // 2) A callback function which contains the actual test
  it('shows all the products', () => {

    // https://docs.cypress.io/api/commands/visit.html#Syntax)
    cy.visit('/products')

    // Confirm we see a specific product
    // https://docs.cypress.io/api/commands/contains.html#Syntax
    cy.contains('.name', product.name)

    // Confirm we see all 10 products
    // https://docs.cypress.io/api/commands/get.html#Syntax
    // https://docs.cypress.io/api/commands/should.html#Syntax
    // https://docs.cypress.io/guides/references/assertions.html#Length
    cy.get('.name').should('have.length', 10);

    // Confirm we can click on a product and get to its indiviudal page
    // https://docs.cypress.io/api/commands/click.html#Syntax
    cy.get('.name').contains(product.name).click();

    cy.contains('.price', '$4.99');

  })

  /* Note in the following test we switched to using a custom selector (data-test) to target the element on the page. This can be useful when testing as it makes our testing-specific selectors independent of styling-specific selectors (classes, ids, etc.)
  */
  it('interacts with cart', () => {
    cy.visit('/products/' + product.id);
    cy.get('[data-test="add-to-cart-button"]').click();
    cy.contains('[data-test="cart-count"]', 1);
    cy.visit('/cart');
    cy.contains('[data-test="cart-contents"]', '1 x ' + product.name);
    cy.get('[data-test="remove-from-cart-button"]').click();
    cy.contains('[data-test="cart-count"]', 0);
    cy.contains('No items');
  })

})