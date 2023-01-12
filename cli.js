const client = require('./client');
const dasSchema = require('./das_program_schema');
const fs = require('fs');

const DAS_COLLECTION_NAME = 'das_programs';

const collectionExists = async (name) => {
    const collections = await client.listCollections();
    return collections.some((collection) => collection.name === name);

}

const main = async (schema) => {
    const hasCollection = await collectionExists(DAS_COLLECTION_NAME);
    if(!hasCollection){
        console.log('making new collection:', DAS_COLLECTION_NAME);
        try {
            const result = await client.createCollection(dasSchema);
            console.log(result);
        } catch(err) { 
            console.error(err); 
        }
    }
    const {
        importDocuments,
        getDocument,
        searchDocuments,
        dropCollection,
    } = client.getCollection(DAS_COLLECTION_NAME);
    // const result = await dropCollection();
    const result = await importDocuments('program_2022.del', DAS_COLLECTION_NAME)
    // console.log(result1)
    // const searchParams = {
    //     "query_by":"PGMNM_TITLE, PGM_NM, TITLE, SNPS, DRT_NM, WRITER_NM, CAST_NM, SUB_TTL",
    //     "sort_by":"",
    //     "highlight_full_fields":"PGMNM_TITLE, PGM_NM, TITLE, SNPS, DRT_NM, WRITER_NM, CAST_NM, SUB_TTL",
    //     "collection":"das_programs",
    //     "q":"8",
    //     "facet_by":["*"],
    //     "max_facet_values":20,
    //     "page":1,
    //     "per_page":8
    // }
    // const result = await searchDocuments(searchParams);
    console.log(result);

}

main(dasSchema)

// const showInstruction = () => {
//     console.log(`#######################################`)
//     console.log(`1. list collections`);
//     console.log(`#######################################`)
// }

// showInstruction();

// const cmdRouter = async number => {
//     console.log(number,'')
//     switch(number){
//         case 1:
//             const collections = await client.listCollections();
//             console.log(collections);
//             break;
//         default:
//             console.log('enter number!!');
//             break;
//     } 
// }
// // process.stdin.on('data', data => {
// //     const selection = data.toString().trim();
// //     cmdRouter(parseInt(selection,10));
// //     showInstruction();
// // })
// const data = process.stdin.read()
// console.log(data)
