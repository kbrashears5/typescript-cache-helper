/**
 * Test values
 */
export class TestingValues {
    // descriptions
    public CacheError: string = 'Cache Error';
    public InvalidTest: string = 'returns error';
    public MustSupply: string = 'Value cannot be null or undefined:';
    public ThrowsOnEmpty: string = 'throws on empty';
    public ValidTest: string = 'returns valid response';

    // empty values
    public EmptyArray = [];
    public EmptyObject = {};
    public EmptyString: string = '';

    // strings
    public CacheName: string = 'cache-name';
    public Key: string = 'cache-key';
    public Value: object = { 'key': 'cache-value' };

    // numbers
    public CacheExpirationSeconds: number = 5;

    // objects
    public CacheNames: string[] = [this.CacheName];
}
