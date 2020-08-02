import { BaseMock } from 'typescript-helper-functions';
import * as NodeCache from 'node-cache';

/**
 * Cache Mock class
 */
export class CacheMock extends BaseMock {

    /**
     * Mocks a Delete response
     */
    public Delete: number = 1;

    /**
     * Mocks a Get response
     */
    public Get: object = { 'key': 'value' };

    /**
     * Mocks a Set response
     */
    public Set: boolean = true;

    /**
     * Create the APIGateway mock
     */
    protected CreateMock(returnError: boolean) {
        const rejectResponse = new Error(`Cache Error`);

        // implement the responses
        const responses = {
            // delete response
            del: {
                response: () => {
                    return returnError ?
                        rejectResponse :
                        this.Delete;
                }
            },
            // flush response
            flushAll: {
                response: () => {
                    return returnError ?
                        rejectResponse :
                        undefined;
                }
            },
            // get response
            get: {
                response: () => {
                    return returnError ?
                        rejectResponse :
                        this.Get;
                }
            },
            // set response
            set: this.Set,
        };

        // create the functions
        let functions = new NodeCache();
        functions = {
            del: () => this.Delete,
            flushAll: () => responses.flushAll,
            get: () => responses.get as any,
            set: () => responses.set,
        } as any;

        return functions;
    }
}
