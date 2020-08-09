const csv = require("csv-parser");
const fs = require("fs");

function readFile() {
  var data = fs
    .readFileSync("data/books.csv")
    .toString() // convert Buffer to string
    .split("\n") // split string to lines
    .map((e) => e.trim()) // remove white spaces for each line
    .map((e) => e.split(",").map((e) => e.trim())); // split each line to array

  //console.log(data);
  return true;
  //console.log(JSON.stringify(data, '', 2));

  /*fs.createReadStream('books.csv')
  .pipe(csv())
  .on('data', (row) => {
    console.log(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });*/
}

module.exports = readFile;
