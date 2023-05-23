YEAR=2006
COLLECTION_NAME=$1
while true
do
	node cli_nrs.js /d/002.Code/002.node/typesense_db2_indexer/nrs_info_${YEAR}.jsonl ${COLLECTION_NAME}
        YEAR=`expr ${YEAR} \- 1`
        if [ ${YEAR} -eq 1995 ]
        then
                exit
        fi
done

