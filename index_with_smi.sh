export HOST=10.10.16.123
export APIKEY=3Cu0QsTriuVBNKmcMXTK1QGc7PpZh2UbPVZ0sU5nOmlRZ8uu
START_YEAR=2008
END_YEAR=2024
while true
do
    node cli.js $START_YEAR
    START_YEAR=`expr $START_YEAR \+ 1`
    if [ ${START_YEAR} -gt ${END_YEAR} ]
    then
        break
    fi
done