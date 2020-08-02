// import { CacheMock } from './mock';
import { TestingValues } from './test-values';
import { CacheHelper } from './helper';
import NodeCache = require('node-cache');

const TestValues = new TestingValues();
// const mockerResolves = new CacheMock(false);
const cacheHelperMockResolves = new CacheHelper(TestValues.CacheNames, TestValues.CacheExpirationSeconds);
// const mockerRejects = new CacheMock(true);
// const cacheHelperMockRejects = new CacheHelper(TestValues.CacheNames, TestValues.CacheExpirationSeconds);

beforeAll(() => {
    cacheHelperMockResolves.Initialize(TestValues.CacheNames, TestValues.CacheExpirationSeconds);
    // cacheHelperMockRejects.Initialize(TestValues.CacheNames, TestValues.CacheExpirationSeconds);
});

/**
 * Test the Add method
 */
describe(`${CacheHelper.name}.${cacheHelperMockResolves.Add.name}`, () => {
    // set action for this method
    const action = `${CacheHelper.name}.${cacheHelperMockResolves.Add.name}`;

    test(`${TestValues.ThrowsOnEmpty} cacheName`, () => {
        const actual = () => cacheHelperMockResolves.Add(TestValues.EmptyString, TestValues.Key, TestValues.Value);
        return expect(actual).toThrow(`[${action}]-${TestValues.MustSupply} [cacheName]`);
    });
    test(`${TestValues.ThrowsOnEmpty} key`, () => {
        const actual = () => cacheHelperMockResolves.Add(TestValues.CacheName, TestValues.EmptyString, TestValues.Value);
        return expect(actual).toThrow(`[${action}]-${TestValues.MustSupply} [key]`);
    });
    test(`${TestValues.ThrowsOnEmpty} value`, () => {
        const actual = () => cacheHelperMockResolves.Add(TestValues.CacheName, TestValues.Key, TestValues.EmptyObject);
        return expect(actual).toThrow(`[${action}]-${TestValues.MustSupply} [value]`);
    });
    test(TestValues.ValidTest, () => {
        const actual = cacheHelperMockResolves.Add(TestValues.CacheName, TestValues.Key, TestValues.Value);
        return expect(actual).toEqual(true);
    });
});

/**
 * Test the Delete method
 */
describe(`${CacheHelper.name}.${cacheHelperMockResolves.Delete.name}`, () => {
    // set action for this method
    const action = `${CacheHelper.name}.${cacheHelperMockResolves.Delete.name}`;

    test(`${TestValues.ThrowsOnEmpty} cacheName`, () => {
        const actual = () => cacheHelperMockResolves.Delete(TestValues.EmptyString, TestValues.Key);
        return expect(actual).toThrow(`[${action}]-${TestValues.MustSupply} [cacheName]`);
    });
    test(`${TestValues.ThrowsOnEmpty} key`, () => {
        const actual = () => cacheHelperMockResolves.Delete(TestValues.CacheName, TestValues.EmptyString);
        return expect(actual).toThrow(`[${action}]-${TestValues.MustSupply} [key]`);
    });
    test(TestValues.ValidTest, () => {
        const actual = cacheHelperMockResolves.Delete(TestValues.CacheName, TestValues.Key);
        return expect(actual).toEqual(true);
    });
});

/**
 * Test the FindCache method
 */
describe(`${CacheHelper.name}.${cacheHelperMockResolves.FindCache.name}`, () => {
    // set action for this method
    const action = `${CacheHelper.name}.${cacheHelperMockResolves.FindCache.name}`;

    test(`${TestValues.ThrowsOnEmpty} cacheName`, () => {
        const actual = () => cacheHelperMockResolves.FindCache(TestValues.EmptyString);
        return expect(actual).toThrow(`[${action}]-${TestValues.MustSupply} [cacheName]`);
    });
    test(TestValues.ValidTest, () => {
        const actual = cacheHelperMockResolves.FindCache(TestValues.CacheName);
        return expect(actual).toBeInstanceOf(NodeCache);
    });
});

/**
 * Test the Flush method
 */
describe(`${CacheHelper.name}.${cacheHelperMockResolves.Flush.name}`, () => {
    // set action for this method
    const action = `${CacheHelper.name}.${cacheHelperMockResolves.Flush.name}`;

    test(`${TestValues.ThrowsOnEmpty} cacheName`, () => {
        const actual = () => cacheHelperMockResolves.Flush(TestValues.EmptyString);
        return expect(actual).toThrow(`[${action}]-${TestValues.MustSupply} [cacheName]`);
    });
    test(TestValues.ValidTest, () => {
        const actual = cacheHelperMockResolves.Flush(TestValues.CacheName);
        return expect(actual).toBeUndefined();
    });
});

/**
 * Test the Get method
 */
describe(`${CacheHelper.name}.${cacheHelperMockResolves.Get.name}`, () => {
    // set action for this method
    const action = `${CacheHelper.name}.${cacheHelperMockResolves.Get.name}`;

    test(`${TestValues.ThrowsOnEmpty} cacheName`, () => {
        const actual = () => cacheHelperMockResolves.Get(TestValues.EmptyString, TestValues.Key);
        return expect(actual).toThrow(`[${action}]-${TestValues.MustSupply} [cacheName]`);
    });
    test(`${TestValues.ThrowsOnEmpty} key`, () => {
        const actual = () => cacheHelperMockResolves.Get(TestValues.CacheName, TestValues.EmptyString);
        return expect(actual).toThrow(`[${action}]-${TestValues.MustSupply} [key]`);
    });
    test(TestValues.ValidTest, () => {
        const actual = cacheHelperMockResolves.Get(TestValues.CacheName, TestValues.Key);
        return expect(actual).toBeUndefined();
    });
});

/**
 * Test the Initialize method
 */
describe(`${CacheHelper.name}.${cacheHelperMockResolves.Initialize.name}`, () => {
    // set action for this method
    const action = `${CacheHelper.name}.${cacheHelperMockResolves.Initialize.name}`;

    test(`${TestValues.ThrowsOnEmpty} cacheName`, () => {
        const actual = () => cacheHelperMockResolves.Initialize(TestValues.EmptyArray, TestValues.CacheExpirationSeconds);
        return expect(actual).toThrow(`[${action}]-${TestValues.MustSupply} [cacheNames]`);
    });
    test(TestValues.ValidTest, () => {
        const actual = cacheHelperMockResolves.Initialize(TestValues.CacheNames, TestValues.CacheExpirationSeconds);
        return expect(actual).toBeUndefined();
    });
});

/**
 * Test the Replace method
 */
describe(`${CacheHelper.name}.${cacheHelperMockResolves.Replace.name}`, () => {
    // set action for this method
    const action = `${CacheHelper.name}.${cacheHelperMockResolves.Replace.name}`;

    test(`${TestValues.ThrowsOnEmpty} cacheName`, () => {
        const actual = () => cacheHelperMockResolves.Replace(TestValues.EmptyString, TestValues.Key, TestValues.Value);
        return expect(actual).toThrow(`[${action}]-${TestValues.MustSupply} [cacheName]`);
    });
    test(`${TestValues.ThrowsOnEmpty} key`, () => {
        const actual = () => cacheHelperMockResolves.Replace(TestValues.CacheName, TestValues.EmptyString, TestValues.Value);
        return expect(actual).toThrow(`[${action}]-${TestValues.MustSupply} [key]`);
    });
    test(`${TestValues.ThrowsOnEmpty} value`, () => {
        const actual = () => cacheHelperMockResolves.Replace(TestValues.CacheName, TestValues.Key, TestValues.EmptyObject);
        return expect(actual).toThrow(`[${action}]-${TestValues.MustSupply} [value]`);
    });
    test(TestValues.ValidTest, () => {
        const actual = cacheHelperMockResolves.Replace(TestValues.CacheName, TestValues.Key, TestValues.Value);
        return expect(actual).toBeUndefined();
    });
});
