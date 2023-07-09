/**
 * Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.
 * The class has three public methods:
 * set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.
 * get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1
 * count(): returns the count of un-expired keys.
 * @refs https://leetcode.com/problems/cache-with-time-limit/?envType=study-plan-v2&envId=30-days-of-javascript
 */

export class CacheWithTimeLimit {
  private cache = new Map<
    number,
    { value: number; timeoutId: NodeJS.Timeout }
  >();
  set(key: number, value: number, duration: number) {
    const existing = this.cache.get(key);
    if (existing) {
      clearTimeout(existing.timeoutId);
    }
    const timeoutId = setTimeout(() => {
      this.cache.delete(key);
    }, duration);
    this.cache.set(key, { value, timeoutId });
    return Boolean(existing);
  }
  get(key: number) {
    if (this.cache.has(key)) return this.cache.get(key)?.value;
    return -1;
  }
  count() {
    return this.cache.size;
  }
}
