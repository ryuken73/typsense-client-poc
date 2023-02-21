const dasSchema = {
    'name': 'das_programs',
    'fields': [
        {'name': 'PGMNM_TITLE', 'type': 'string', 'facet': true, 'locale': 'ko'},
        {'name': 'PGM_NM', 'type': 'string', 'locale': 'ko'},
        {'name': 'MASTER_ID', 'type': 'string', 'locale': 'ko'},
        {'name': 'TITLE', 'type': 'string', 'facet': true, 'locale': 'ko'},
        {'name': 'SNPS', 'type': 'string', 'locale': 'ko'},
        {'name': 'KEY_WORDS', 'type': 'string', 'locale': 'ko'},
        {'name': 'DRT_NM', 'type': 'string', 'facet': true, 'locale': 'ko'},
        {'name': 'PRODUCER_NM', 'type': 'string', 'facet': true, 'locale': 'ko'},
        {'name': 'PRDT_DEPT_NM', 'type': 'string', 'facet': true, 'locale': 'ko'},
        {'name': 'WRITER_NM', 'type': 'string', 'locale': 'ko'},
        {'name': 'MC_NM', 'type': 'string', 'facet': true, 'locale': 'ko'},
        {'name': 'CAST_NM', 'type': 'string', 'facet': true, 'locale': 'ko'},
        {'name': 'CMR_PLACE', 'type': 'string', 'facet': true, 'locale': 'ko'},
        {'name': 'CMR_DRT_NM', 'type': 'string', 'locale': 'ko'},
        {'name': 'MUSIC_INFO', 'type': 'string', 'locale': 'ko'},
        {'name': 'SUB_TTL', 'type': 'string', 'facet': true, 'locale': 'ko'},
        {'name': 'DAY', 'type': 'string', 'facet': true, 'locale': 'ko'},
        {'name': 'YEAR', 'type': 'string', 'facet': true, 'locale': 'ko'},
        {'name': 'VD_QLTY_NM', 'type': 'string', 'locale': 'ko'},
        {'name': 'SCENARIO_TITLE', 'type': 'string', 'locale': 'ko'},
        {'name': 'CN_INFO', 'type': 'string', 'facet': true, 'locale': 'ko'},
        {'name': 'ARTIST', 'type': 'string', 'locale': 'ko'},
    ]
}

module.exports = dasSchema;