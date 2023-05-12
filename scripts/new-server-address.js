const fs = require('fs');

const params = process.argv

function readWriteAsync(params) {
  console.log(params)
  // fs.readFile('src/global/appLinks.ts', 'utf-8', function(err, data){
  //   if (err) throw err;
  //   const value = `,${params[2]} : "${params[3]}"
  // }
  //   `
  //   const newValue = data.replace("}", value);
  //   fs.writeFile('src/global/appLinks.ts', newValue, 'utf-8', function (err) {
  //     if (err) throw err;
  //     console.log(`Added server ${params[2]} to the app`);
  //   });
  // });
}

readWriteAsync(params);