const module_name = require('module');

const fs = require('fs');

const data = 'This is the data to be written to the file.';

fs.writeFile('data.txt', data, function (err) {
  if (err) throw err;
  console.log('Data written to file.');
});
