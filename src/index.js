/**
 * Returns a greeting for the given name.
 *
 * @param {string} [name='world']
 * @returns {string}
 */
export function greet(name = 'world') {
  return `Hello, ${name}!`;
}

/**
 * Returns the publication marker used for live E2E verification.
 *
 * @returns {string}
 */
export function getPublicationMarker() {
  return 'acp-live-publication-e2e';
}
