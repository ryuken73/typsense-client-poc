const dasSchema = {
    'name': 'das_programs',
    'fields': [
        {'name': 'PGMNM_TITLE', 'type': 'string', 'facet': true},
        {'name': 'PGM_NM', 'type': 'string'},
        {'name': 'MASTER_ID', 'type': 'string'},
        {'name': 'TITLE', 'type': 'string', 'facet': true},
        {'name': 'SNPS', 'type': 'string'},
        {'name': 'KEY_WORDS', 'type': 'string'},
        {'name': 'DRT_NM', 'type': 'string', 'facet': true},
        {'name': 'PRODUCER_NM', 'type': 'string'},
        {'name': 'PRDT_DEPT_NM', 'type': 'string'},
        {'name': 'WRITER_NM', 'type': 'string'},
        {'name': 'MC_NM', 'type': 'string'},
        {'name': 'CAST_NM', 'type': 'string'},
        {'name': 'CMR_PLACE', 'type': 'string', 'facet': true},
        {'name': 'CMR_DRT_NM', 'type': 'string'},
        {'name': 'MUSIC_INFO', 'type': 'string'},
        {'name': 'SUB_TTL', 'type': 'string'},
        {'name': 'DAY', 'type': 'string', 'facet': true},
        {'name': 'VD_QLTY_NM', 'type': 'string'},
        {'name': 'SCENARIO_TITLE', 'type': 'string'},
        {'name': 'CN_INFO', 'type': 'string'},
        {'name': 'ARTIST', 'type': 'string'},
    ]
}

module.exports = dasSchema;