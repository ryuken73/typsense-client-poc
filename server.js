require('@babel/register');
const Typesense = require('typesense');

const DEFAULT_HOST = '10.10.16.122'
const DEFAULT_PORT = '8108'
const DEFAULT_PROTO = 'http'
const DEFAULT_APIKEY ='XrS5t2LD1vPiIzjfgnYBLDBs94kBzcL9pFIXNyG0G6cyf1d0'

const createConnection = (params) => {
    const {
        conn = [
            {
                host: DEFAULT_HOST,
                port: DEFAULT_PORT,
                protocol: DEFAULT_PROTO
            }
        ],
        apiKey = DEFAULT_APIKEY
    } = params
    const typesense = new Typesense.Client({
        nodes: conn,
        numRetries: 10,
        apiKey,
        connectionTimeoutSeconds: 10,
        retryIntervalSeconds: 0.1,
        healthcheckIntervalSeconds: 2,
        logLevel: 'debug'
    });
    return typesense
}


module.exports = {
    createConnection
};