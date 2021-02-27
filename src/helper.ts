import { ICacheHelper, Cache } from './interface';
import { ObjectOperations } from 'typescript-helper-functions';
import * as NodeCache from 'node-cache';

export class CacheHelper implements ICacheHelper {
  /**
   * Caches
   */
  Caches: Cache[];

  /**
   * Object operations
   */
  ObjectOperations: ObjectOperations;

  /**
   * Create new instance of CacheHelper
   * @param cacheNames {string[]} List of cache names
   * @param cacheExpirationSeconds {number} Time to expiration for the cache in seconds
   */
  constructor(cacheNames: string[], cacheExpirationSeconds: number = 300) {
    this.ObjectOperations = new ObjectOperations();

    if (this.ObjectOperations.IsNullOrEmpty(cacheNames))
      throw new Error(`Value cannot be null or undefined: [cacheNames]`);
    if (cacheNames.length < 1)
      throw new Error(`Value cannot be null or undefined: [cacheNames]`);

    this.Caches = [];

    this.Initialize(cacheNames, cacheExpirationSeconds);
  }

  /**
   * Store item in cache
   * @param cacheName {string} Cache name
   * @param key {string} Cache item key
   * @param value {string} Cache item value
   */
  public Add(cacheName: string, key: string, value: object): boolean {
    const action = `${CacheHelper.name}.${this.Add.name}`;

    if (this.ObjectOperations.IsNullOrWhitespace(cacheName))
      throw new Error(
        `[${action}]-Value cannot be null or undefined: [cacheName]`,
      );
    if (this.ObjectOperations.IsNullOrWhitespace(key))
      throw new Error(`[${action}]-Value cannot be null or undefined: [key]`);
    if (this.ObjectOperations.IsNullOrEmpty(value))
      throw new Error(`[${action}]-Value cannot be null or undefined: [value]`);

    const cache = this.FindCache(cacheName);

    return cache.set(key, value);
  }

  /**
   * Delete item in cache
   * @param cacheName {string} Cache name
   * @param key {string} Cache item key
   */
  public Delete(cacheName: string, key: string): boolean {
    const action = `${CacheHelper.name}.${this.Delete.name}`;

    if (this.ObjectOperations.IsNullOrWhitespace(cacheName))
      throw new Error(
        `[${action}]-Value cannot be null or undefined: [cacheName]`,
      );
    if (this.ObjectOperations.IsNullOrWhitespace(key))
      throw new Error(`[${action}]-Value cannot be null or undefined: [key]`);

    const cache = this.FindCache(cacheName);

    const deleted = cache.del(key);

    return deleted > 0;
  }

  /**
   * Find cache
   * @param cacheName {string} Cache name
   */
  public FindCache(cacheName: string): NodeCache {
    const action = `${CacheHelper.name}.${this.FindCache.name}`;

    if (this.ObjectOperations.IsNullOrWhitespace(cacheName))
      throw new Error(
        `[${action}]-Value cannot be null or undefined: [cacheName]`,
      );

    const cache = this.Caches.find((c) => c.Name === cacheName);

    if (this.ObjectOperations.IsNullOrEmpty(cache)) {
      throw new Error('Cache not found');
    } else {
      return cache!.NodeCache;
    }
  }

  /**
   * Flush cache
   * @param cacheName {string} Cache name
   */
  public Flush(cacheName: string): void {
    const action = `${CacheHelper.name}.${this.Flush.name}`;

    if (this.ObjectOperations.IsNullOrWhitespace(cacheName))
      throw new Error(
        `[${action}]-Value cannot be null or undefined: [cacheName]`,
      );

    const cache = this.FindCache(cacheName);

    cache.flushAll();
  }

  /**
   * Get item from cache
   * @param cacheName {string} Cache name
   * @param key {string} Cache item key
   */
  public Get(cacheName: string, key: string): object | undefined {
    const action = `${CacheHelper.name}.${this.Get.name}`;

    if (this.ObjectOperations.IsNullOrWhitespace(cacheName))
      throw new Error(
        `[${action}]-Value cannot be null or undefined: [cacheName]`,
      );
    if (this.ObjectOperations.IsNullOrWhitespace(key))
      throw new Error(`[${action}]-Value cannot be null or undefined: [key]`);

    const cache = this.FindCache(cacheName);

    return cache.get(key);
  }

  /**
   * Initialize the caches
   * @param cacheName {string} Cache name
   * @param cacheExpirationSeconds {number} Time to expiration for the cache in seconds
   */
  public Initialize(
    cacheNames: string[],
    cacheExpirationSeconds: number,
  ): void {
    const action = `${CacheHelper.name}.${this.Initialize.name}`;

    if (this.ObjectOperations.IsNullOrEmpty(cacheNames))
      throw new Error(
        `[${action}]-Value cannot be null or undefined: [cacheNames]`,
      );

    const options: NodeCache.Options = {
      stdTTL: cacheExpirationSeconds,
    };

    for (const cacheName of cacheNames) {
      this.Caches.push({
        Name: cacheName,
        NodeCache: new NodeCache(options),
      } as Cache);
    }
  }

  /**
   * Replace item in cache
   * @param cacheName {string} Cache name
   * @param key {string} Cache item key
   * @param value {object} Cache item value
   */
  public Replace(cacheName: string, key: string, value: object): void {
    const action = `${CacheHelper.name}.${this.Replace.name}`;

    if (this.ObjectOperations.IsNullOrWhitespace(cacheName))
      throw new Error(
        `[${action}]-Value cannot be null or undefined: [cacheName]`,
      );
    if (this.ObjectOperations.IsNullOrWhitespace(key))
      throw new Error(`[${action}]-Value cannot be null or undefined: [key]`);
    if (this.ObjectOperations.IsNullOrEmpty(value))
      throw new Error(`[${action}]-Value cannot be null or undefined: [value]`);

    const cacheItem = this.Get(cacheName, key);

    if (!this.ObjectOperations.IsNullOrEmpty(cacheItem)) {
      this.Delete(cacheName, key);
    }

    this.Add(cacheName, key, value);
  }
}
