cy.get('.items')
  .trigger('mousedown', { which: 1, pageX: 493, pageY: 391 })
  .trigger('mousemove', { pageX: 271, pageY: 391 }) // larger delta = bigger scroll
  .trigger('mouseup', { force: true });
