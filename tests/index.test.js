import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { greet } from '../src/index.js';

describe('greet', () => {
  it('returns a default greeting', () => {
    assert.equal(greet(), 'Hello, world!');
  });

  it('returns a personalized greeting', () => {
    assert.equal(greet('agent'), 'Hello, agent!');
  });
});
