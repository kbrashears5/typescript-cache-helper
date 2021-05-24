/* eslint-disable no-unused-vars */
import * as NodeCache from 'node-cache';

/**
 * Represents a singular cache
 */
export interface Cache {
  Name: string;
  NodeCache: NodeCache;
}

/**
 * Cache Helper
 */
export interface ICacheHelper {
  /**
   * Caches
   */
  Caches: Cache[];

  /**
   * Store item in cache
   * @param cacheName {string} Cache name
   * @param key {string} Cache item key
   * @param value {any} Cache item value
   */
  Add(cacheName: string, key: string, value: any): boolean;

  /**
   * Delete item in cache
   * @param cacheName {string} Cache name
   * @param key {string} Cache item key
   */
  Delete(cacheName: string, key: string): boolean;

  /**
   * Find cache
   * @param cacheName {string} Cache name
   */
  FindCache(cacheName: string): NodeCache;

  /**
   * Flush cache
   * @param cacheName {string} Cache name
   */
  Flush(cacheName: string): void;

  /**
   * Get item from cache
   * @param cacheName {string} Cache name
   * @param key {string} Cache item key
   */
  Get(cacheName: string, key: string): any | undefined;

  /**
   * Initialize the caches
   * @param cacheName {string} Cache name
   * @param cacheExpirationSeconds {number} Time to expiration for the cache in seconds
   */
  Initialize(cacheNames: string[], cacheExpirationSeconds: number): void;

  /**
   * Replace item in cache
   * @param cacheName {string} Cache name
   * @param key {string} Cache item key
   * @param value {any} Cache item value
   */
  Replace(cacheName: string, key: string, value: any): void;
}
