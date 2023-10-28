/// <reference types="cypress" />

describe("Add products to the cart", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clearLocalStorage();
  });

  xit("Should add the product correctly", () => {
    // Click on the first product
    cy.get(".product-item:first-child").click();

    // Verify that the number of products in the cart is 1
    cy.get("button").contains("CART (1)");
  });

  xit("Should add multiple products to the cart", () => {
    // Click on the first product
    cy.get(".product-item:first-child").click();

    // Click on the second product
    cy.get(".product-item:nth-child(2)").click();

    // Click on the third product
    cy.get(".product-item:nth-child(3)").click();

    // Verify that the number of products in the cart is 3
    cy.get("button").contains("CART (3)");
  });

  xit("Should add the product correctly to localStorage", () => {
    // Click on the first product
    cy.get(".product-item:first-child").click();

    // Get the value of localStorage
    cy.getAllLocalStorage().then((result) => {
      //Get the actual value from the storage
      const origin = "http://localhost:3000";
      const productsJSON = result[origin].products;
      const products = JSON.parse(productsJSON);

      expect(products.length).to.eq(1);
      expect(products[0]).contains({ price: 7.95, name: "Black t-shirt" });
    });
  });

  xit("Should add multiple products correctly to localStorage", () => {
    // Click on the first product
    cy.get(".product-item:first-child").click();

    // Click on the second product
    cy.get(".product-item:nth-child(2)").click();

    // Click on the third product
    cy.get(".product-item:nth-child(3)").click();

    // Get the value of localStorage
    cy.getAllLocalStorage().then((result) => {
      //Get the actual value from the storage
      const origin = "http://localhost:3000";
      const productsJSON = result[origin].products;
      const products = JSON.parse(productsJSON);

      expect(products.length).to.eq(3);
      expect(products[0]).contains({ price: 7.95, name: "Black t-shirt" });
      expect(products[1]).contains({ price: 13, name: "Black hoodie" });
      expect(products[2]).contains({ price: 23, name: "Black cap" });
    });
  });

  //@todo
  xit("Should allow to modify the size of the product from the cart", () => {
    // Click on the first product
    cy.get(".product-item:first-child").click();


    //Verify the initial product's size
    cy.getAllLocalStorage().then((result) => {
      //Get the actual value from the storage
      const origin = "http://localhost:3000";
      const productsJSON = result[origin].products;
      const products = JSON.parse(productsJSON);

      expect(products[0].checkoutSize).to.eq("S");
    });

    cy.get("button").contains("CART (1)").click();

    cy.get("button[id='M  ']")







    

  });
});
