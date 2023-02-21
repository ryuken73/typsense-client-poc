const dasSchema = require('./das_program_schema');
const dasSchemaWithSMI = {
    'name': 'das_programs',
    'fields': [
        ...dasSchema.fields,
        {'name': 'SMI', 'type': 'string', 'locale': 'ko'},
    ]
}

module.exports = dasSchemaWithSMI;