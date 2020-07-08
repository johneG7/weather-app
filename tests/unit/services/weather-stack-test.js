import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | weather-stack', function(hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function(assert) {
    let service = this.owner.lookup('service:weather-stack');
    assert.ok(service);
  });
});
