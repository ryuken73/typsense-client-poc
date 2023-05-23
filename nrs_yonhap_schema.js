const nrsInfoSchema = {
    'name': 'nrs_yonhap_surface',
    'fields': [
        {'name': 'WIRE_SEQ', 'type': 'string'},
        {'name': 'WIRE_TITLE', 'type': 'string', 'facet': true, 'infix': false},
        {'name': 'TITLE_SURFACE', 'type': 'string[]', 'facet': false, 'infix': false},
        {'name': 'WIRE_YEAR', 'type': 'int32', 'facet': true, 'infix': false, 'sort': true}, 
        {'name': 'WIRE_DATE', 'type': 'string', 'facet': true, 'infix': false, 'sort': true}, 
        {'name': 'FIELD1_NM', 'type': 'string', 'facet': true, 'infix': false}, 
        {'name': 'FIELD2_NM', 'type': 'string', 'facet': true, 'infix': false}, 
        {'name': 'WIRE_CONTENT', 'type': 'string', 'infix': false}, 
        {'name': 'CONTENT_SURFACE', 'type': 'string[]', 'facet':false, 'infix': false}, 
        {'name': 'RECEIVE_TIME', 'type': 'string', 'sort': true}, 
    ],
    'symbols_to_index': [
        '!','\\','#','$','%','&',"'",'(',')','*','+','-',',','.','/',';','>','<','=','?','@','[',']','^','_','`','{','|','}','~'
    ],
    'token_separators': [
        '/'
    ]
}

module.exports = nrsInfoSchema;