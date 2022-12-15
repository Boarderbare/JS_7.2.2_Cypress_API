Cypress.Commands.add(
  "createUser",
  (id, username, firstName, lastName, email, password, phone, userStatus) => {
    cy.request({
      method: "POST",
      url: "https://petstore.swagger.io/v2/user",
      body: {
        id: id,
        username: username,
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        phone: phone,
        userStatus: userStatus,
      },
    });
  }
);

Cypress.Commands.add(
  "updateUser",
  (id, username, firstName, lastName, email, password, phone, userStatus) => {
    cy.request({
      method: "PUT",
      url: "https://petstore.swagger.io/v2/user/Boarder",
      body: {
        id: id,
        username: username,
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        phone: phone,
        userStatus: userStatus,
      },
    });
  }
);

Cypress.Commands.add(
  "checkPassword",
  () => {
    cy.request({
      method: "GET",
      url: "https://petstore.swagger.io/v2/user/Boarder"
   });
  }
);

Cypress.Commands.add("deleteUser", (username) => {
  cy.request({
    method: "DELETE",
    url: "https://petstore.swagger.io/v2/user/Boarder",
  });
});
