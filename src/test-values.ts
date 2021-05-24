/**
 * Test values
 */
export class TestingValues {
  // descriptions
  public CacheError = 'Cache Error';
  public InvalidTest = 'returns error';
  public MustSupply = 'Value cannot be null or undefined:';
  public ThrowsOnEmpty = 'throws on empty';
  public ValidTest = 'returns valid response';

  // empty values
  public EmptyArray = [];
  public EmptyObject = {};
  public EmptyString = '';

  // strings
  public CacheName = 'cache-name';
  public Key = 'cache-key';
  public Value = { key: 'cache-value' };

  // numbers
  public CacheExpirationSeconds = 5;

  // objects
  // eslint-disable-next-line no-invalid-this
  public CacheNames: string[] = [this.CacheName];
}
