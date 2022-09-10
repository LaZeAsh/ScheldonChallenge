import * as fs from 'fs';
import * as path from "path";
import { parse } from 'csv-parse';

interface Securities {
    security_id: string,
    cusip: string,
    sedol: string
    isin: string
    ric: string,
    bloomberg: string,
    bbg: string,
    symbol: string,
    root_symbol: string,
    bb_yellow: string,
    spn: string,
}


(() => {
    const csvFilePath = path.resolve(__dirname, '../Securities.csv');
    const headers = ['security_id', 'cusip', 'sedol', 'isin', 'ric', 'bloomberg', 'bbg', 'symbol', 'root_symbol', 'bb_yellow', 'spn']
    const fileContent = fs.readFileSync(csvFilePath, {encoding: 'utf-8'});

    parse(fileContent, {
        delimiter: ',', 
        columns: headers,
    }, (error, result: Securities[]) => {
        if (error) {
            console.error(error);
        }

        console.log("Result", result);
    });
})();


// Directory '../Securities.csv'

/*
Notes: 
- exact match to any of its street IDs, case-insensitive
- Closer the query is to a result = more relevant
- Certain streetIDs have more priority than others... determine this by the behavior of the user (if 1 street id is more searched for prioritize it more)
- Allow end user to select a security
- Different street id types can be the same for a security
*/