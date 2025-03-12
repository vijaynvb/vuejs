const fs = require("fs");
// syncronos write blocking call
 fs.writeFileSync("example_sync.txt", "This is written synchronously.");
 console.log("Sync file created!");

// asyncronous wrtie non blocking calls
// fs.writeFile("example_assync.txt", "This is written asynchronously.",
//     (err) => {
//     if (err) throw err;
//     console.log("File created successfully!");
// });
// console.log("Inline Execution");