import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('new-kiskutya-form', 'Integration | Component | new kiskutya form', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{new-kiskutya-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#new-kiskutya-form}}
      template block text
    {{/new-kiskutya-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
