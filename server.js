require('@babel/register');
const Typesense = require('typesense');

const createConnection = () => {
    const typesense = new Typesense.Client({
        nodes: [
            {
                host: '10.10.16.122',
                port: '8108',
                protocol: 'http'
            }
        ],
        numRetries: 10,
        apiKey: 'XrS5t2LD1vPiIzjfgnYBLDBs94kBzcL9pFIXNyG0G6cyf1d0',
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