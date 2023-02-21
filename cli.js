const client = require('./client');
// const dasSchema = require('./das_program_schema');
const dasSchema = require('./das_program_schema_with_smi');
const fs = require('fs');

const DAS_COLLECTION_NAME = 'das_programs';

const collectionExists = async (name) => {
    const collections = await client.listCollections();
    return collections.some((collection) => collection.name === name);
}

const main = async (schema, year) => {
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
        importDocumentsByLines,
        getDocument,
        searchDocuments,
        dropCollection,
    } = client.getCollection(DAS_COLLECTION_NAME);
    // const result = await dropCollection();

    if(year){
        await importDocumentsByLines(`program_${year}.del.with_smi`, 1000)
    } else {
        for(i=2008;i < 2015;i++){
            console.log(`processing....${i}..${new Date()}`)
            await importDocuments(`program_${i}.del.with_smi`)
        }
    }

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
}

const year = process.argv[2];
console.log('######################################');
console.log('indxing', year);
console.log('######################################');
main(dasSchema, year);

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
