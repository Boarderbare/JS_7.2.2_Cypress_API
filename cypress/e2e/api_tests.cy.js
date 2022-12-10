const {
  id,
  username,
  firstName,
  lastName,
  email,
  password,
  phone,
  userStatus,
} = require("../fixtures/user.json");

describe("Api tests", () => {
  it("Should create a new user", () => {
    cy.createUser(id, username, firstName, lastName, email, password[0], phone, userStatus).then(
      (response) => {
        expect(response.status).to.eq(200);
        expect(response.body.message).to.eql("555");
      }
    );
  });

  it("Should update pass", () => {
    cy.createUser(id, username, firstName, lastName, email, password[0], phone, userStatus);
    cy.updateUser(id, username, firstName, lastName, email, password[1], phone, userStatus).then(
      (response) => {
        expect(response.status).to.eq(200);
      }
    );
  });

  it("Should delete user", () => {
    cy.createUser(id, username, firstName, lastName, email, password[0], phone, userStatus);
    cy.deleteUser(username).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eql("Boarder");
    });
  });
});
