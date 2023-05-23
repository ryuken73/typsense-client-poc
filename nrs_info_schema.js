const nrsInfoSchema = {
    'name': 'nrs_info_surface',
    'fields': [
        {'name': 'SEQ', 'type': 'string'},
        {'name': 'INFO_NM', 'type': 'string', 'facet': true, 'infix': false},
        {'name': 'TITLE', 'type': 'string', 'facet': true, 'infix': false},
        {'name': 'TITLE_SURFACE', 'type': 'string[]', 'facet': false, 'infix': false},
        {'name': 'MAKE_NM', 'type': 'string', 'facet': true, 'infix': false},
        {'name': 'MAKE_YEAR', 'type': 'int32', 'facet': true, 'infix': false, 'sort': true}, 
        {'name': 'MAKE_DATE', 'type': 'string', 'facet': true, 'infix': false, 'sort': true}, 
        {'name': 'UPDATE_NM', 'type': 'string', 'facet': true, 'infix': false}, 
        {'name': 'FIELD_NM', 'type': 'string', 'facet': true, 'infix': false}, 
        {'name': 'MAKE_DEPT_NM', 'type': 'string', 'facet': true, 'infix': false},
        {'name': 'EDIT_NM', 'type': 'string', 'facet': true, 'infix': false}, 
        {'name': 'CONTENT', 'type': 'string', 'infix': false}, 
        {'name': 'CONTENT_SURFACE', 'type': 'string[]', 'index': true, 'facet':false, 'optional': false}, 
        {'name': 'CONTENT_HTML', 'type': 'string', 'index': false, 'optional': true}, 
        {'name': 'SEND_DATETIME', 'type': 'string', 'sort': true}, 
        {'name': 'MAKE_DATETIME', 'type': 'string', 'sort': true}, 
    ],
    'symbols_to_index': [
        '!','\\','#','$','%','&',"'",'(',')','*','+','-',',','.','/',';','>','<','=','?','@','[',']','^','_','`','{','|','}','~'
    ],
    'token_separators': [
        '/'
    ]
}

module.exports = nrsInfoSchema;