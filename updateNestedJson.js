var data = [{
    "id": 1,
    "values": [
        {
            "sub": "fr",
            "name": "foobar1"
        }, 
        {
            "sub": "en",
            "name": "foobar2"
        }
    ]
}, 
{
    "id": 2,
    "values": [
        {
            "sub": "fr",
            "name": "foobar3"
        },
        {
            "sub": "en",
             "name": "foobar4"
        }
    ]
}];


function updateRecords(record, key, val, newVal) {
    const newValue = newVal;
    let records = [];
    for (let i in record) {
        if (!record.hasOwnProperty(i)) continue;
        if (typeof record[i] == 'object') {
            records = records.concat(updateRecords(record[i], key, val, newValue));
        } else if (i == key && record[key] == val) {
            record[key] = newVal;
        }
    }
    return record;
}
 
console.log(updateRecords(data, 'name', 'foobar1', 'foobarX' ));
