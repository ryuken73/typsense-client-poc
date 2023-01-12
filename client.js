const server = require('./server'); 
const fs = require('fs/promises');
const dasScheam = require('./das_program_schema');

const client = server.createConnection();
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