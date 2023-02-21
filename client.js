const server = require('./server'); 
const fs = require('fs/promises');
const dasScheam = require('./das_program_schema');
const readByLines = require('./readByLines');

const host = process.env.HOST || '10.10.16.122'
const port = process.env.PORT || '8108'
const protocol = process.env.PROTOCOL || 'http'
const apiKey = process.env.APIKEY || 'XrS5t2LD1vPiIzjfgnYBLDBs94kBzcL9pFIXNyG0G6cyf1d0'

const conn = [
    {
        host,
        port,
        protocol
    }
]

const client = server.createConnection({conn, apiKey});

const createCollection = async (schemaDef) => {
    const schema = {
        'name': 'sample',
        ...schemaDef,
    }
    return client.collections().create(schema);
};

const listCollections = async () => {
    return client.collections().retrieve();
};

const getCollection = (collectionName) => {
    const importDocuments = async (fname) => {
        const jsonl = await fs.readFile(fname);
        return client.collections(collectionName).documents().import(jsonl);
    }
    const importDocumentsByLines = (fname, numOfLines) => {
        readByLines(fname, numOfLines, (lines) => {
            return client.collections(collectionName).documents().import(lines);
        })
    }

    const getDocument = async (docId ) => {
        return client.collections(collectionName).documents(docId).retrieve();
    }

    const searchDocuments =  async (searchParams ) => {
        return client.collections(collectionName).documents().search(searchParams);
    }
    const dropCollection = async() => {
        return client.collections(collectionName).delete();
    }

    return {
        importDocuments,
        importDocumentsByLines,
        getDocument,
        searchDocuments,
        dropCollection
    }
}

module.exports = {
    createCollection,
    listCollections,
    getCollection
}