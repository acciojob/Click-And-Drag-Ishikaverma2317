cy.get('.cube')
  .first()
  .trigger('mousedown', { which: 1, pageX: 100, pageY: 100, force: true })
  .trigger('mousemove', { pageX: 200, pageY: 100, force: true })
  .wait(200)
  .trigger('mouseup', { force: true });

cy.get('.cube').should(($el) => {
  const left = parseInt($el[0].style.left);
  expect(left).to.be.greaterThan(0);
});
