/**
 * Simulates network latency for fake API calls.
 * Swap this module when migrating to a real REST client.
 */
export function fakeApi(callback, delay = 300) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const result = callback();
        resolve(result);
      } catch (error) {
        reject(error);
      }
    }, delay);
  });
}
