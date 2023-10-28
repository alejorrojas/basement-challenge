/// <reference types="cypress" />

describe("Add products to the cart", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clearLocalStorage();
  });

  it("Should add the product correctly", () => {
    // Click on the first product
    cy.get(".product-item:first-child").click();

    // Verify that the number of products in the cart is 1
    cy.get("button").contains("CART (1)");
  });

  it("Should add multiple products to the cart", () => {
    // Click on the first product
    cy.get(".product-item:first-child").click();

    // Click on the second product
    cy.get(".product-item:nth-child(2)").click();

    // Click on the third product
    cy.get(".product-item:nth-child(3)").click();

    // Verify that the number of products in the cart is 3
    cy.get("button").contains("CART (3)");
  });

  it("Should add the product correctly to localStorage", () => {
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

  it("Should add multiple products correctly to localStorage", () => {
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

  it("Should allow to modify the size of the product from the cart", () => {
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

    cy.get('[data-cy="modal-desktop"]').within(() => {
      cy.get("button[id='L']").click();
    });

    //Verify the modify product's size
    cy.getAllLocalStorage().then((result) => {
      //Get the actual value from the storage
      const origin = "http://localhost:3000";
      const productsJSON = result[origin].products;
      const products = JSON.parse(productsJSON);

      expect(products[0].checkoutSize).to.eq("L");
    });
  });

  describe("Should allow to modify the quantity of the product from the cart", () => {
    it("Should allow to add more products", () => {
      // Click on the third product
      cy.get(".product-item:nth-child(3)").click();

      //Verify the initial quantity
      cy.getAllLocalStorage().then((result) => {
        //Get the actual value from the storage
        const origin = "http://localhost:3000";
        const productsJSON = result[origin].products;
        const products = JSON.parse(productsJSON);

        expect(products[0].quantity).to.eq(1);
      });

      cy.get("button").contains("CART (1)").click();

      //Verify the initial quantity
      cy.get("[data-cy=quantity]").contains(1);

      //Add more products actions
      cy.get('[data-cy="modal-desktop"]').within(() => {
        cy.get("button").contains("+").click();
        cy.get("button").contains("+").click();
      });

      //Verify the modify quantity
      cy.getAllLocalStorage().then((result) => {
        //Get the actual value from the storage
        const origin = "http://localhost:3000";
        const productsJSON = result[origin].products;
        const products = JSON.parse(productsJSON);

        expect(products[0].quantity).to.eq(3);
      });

      cy.get("[data-cy=quantity]").contains(3);
    });

    it("Should allow to remove products", () => {
      // Click on the third product
      cy.get(".product-item:nth-child(3)").click();

      //Verify the initial quantity
      cy.getAllLocalStorage().then((result) => {
        //Get the actual value from the storage
        const origin = "http://localhost:3000";
        const productsJSON = result[origin].products;
        const products = JSON.parse(productsJSON);

        expect(products[0].quantity).to.eq(1);
      });

      cy.get("button").contains("CART (1)").click();

      //Add more products actions
      cy.get('[data-cy="modal-desktop"]').within(() => {
        cy.get("button").contains("+").click();
        cy.get("button").contains("+").click();
      });

      //Verify the initial quantity
      cy.get("[data-cy=quantity]").contains(3);

      //Delete products
      cy.get('[data-cy="modal-desktop"]').within(() => {
        cy.get("button").contains("-").click();
      });

      //Verify the modify quantity
      cy.getAllLocalStorage().then((result) => {
        //Get the actual value from the storage
        const origin = "http://localhost:3000";
        const productsJSON = result[origin].products;
        const products = JSON.parse(productsJSON);

        expect(products[0].quantity).to.eq(2);
      });

      cy.get("[data-cy=quantity]").contains(2);
    });
  });

  it("Should update and sum correctly the total price", () => {
    // Click on the third product
    cy.get(".product-item:nth-child(3)").click();

    cy.get("button").contains("CART (1)").click();

    cy.get('[data-cy="total-price"]').should("have.text", " $23");

    //Add more products actions
    cy.get('[data-cy="modal-desktop"]').within(() => {
      cy.get("button").contains("+").click();
      cy.get("button").contains("+").click();
    });

    cy.get('[data-cy="total-price"]').should("have.text", " $69");

    //Add delete products actions
    cy.get('[data-cy="modal-desktop"]').within(() => {
      cy.get("button").contains("-").click();
    });

    cy.get('[data-cy="total-price"]').should("have.text", " $46");

  });
});
