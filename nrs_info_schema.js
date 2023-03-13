const nrsInfoSchema = {
    'name': 'nrs_info',
    'fields': [
        {'name': 'SEQ', 'type': 'string', 'locale': 'ko'},
        {'name': 'MAKE_ID', 'type': 'string', 'locale': 'ko', 'facet': true, 'infix': true},
        {'name': 'INFO_NM', 'type': 'string', 'locale': 'ko', 'facet': true, 'infix': true},
        {'name': 'TITLE', 'type': 'string', 'locale': 'ko', 'facet': true, 'infix': true},
        {'name': 'MAKE_NM', 'type': 'string', 'locale': 'ko', 'facet': true, 'infix': true},
        {'name': 'MAKE_YEAR', 'type': 'string', 'facet': true, 'infix': true}, 
        {'name': 'MAKE_DATE', 'type': 'string', 'facet': true, 'infix': true}, 
        {'name': 'UPDATE_NM', 'type': 'string', 'locale': 'ko', 'facet': true, 'infix': true}, 
        {'name': 'FIELD_NM', 'type': 'string', 'locale': 'ko', 'facet': true, 'infix': true}, 
        {'name': 'MAKE_DEPT_NM', 'type': 'string', 'locale': 'ko', 'facet': true, 'infix': true},
        {'name': 'EDIT_NM', 'type': 'string', 'locale': 'ko', 'facet': true, 'infix': true}, 
        {'name': 'EDIT_ID', 'type': 'string', 'locale': 'ko', 'facet': true, 'infix': true}, 
        {'name': 'CONTENT', 'type': 'string[]', 'locale': 'ko'}, 
    ]
}

module.exports = nrsInfoSchema;