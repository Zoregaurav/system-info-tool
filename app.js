const fs = require("fs");

// System Modules
const getSystemInfo = require("./services/systemInfo");
const getEnvironmentInfo = require("./services/envInfo");
const timestamp = new Date().toISOString();



// File CRUD Module
const {
    createFile,
    readFile,
    updateFile,
    deleteFile
} = require("./services/fileManager");


// Get System Information
const systemInfo = getSystemInfo();

// Get Environment Information
const envInfo = getEnvironmentInfo();



console.log("===== SYSTEM REPORT =====");

console.log(
  JSON.stringify(systemInfo, null, 2)
);

console.log(
  JSON.stringify(envInfo, null, 2)
);



console.log("\n===== FILE OPERATIONS =====");

// CRUD Testing

// CREATE
const fileReport = {
    create: createFile(
        "./data/sample.txt",
        "Hello Gaurav"
    ),

    initialContent: readFile(
        "./data/sample.txt"
    ),

    update: updateFile(
        "./data/sample.txt",
        "\nLearning Node.js"
    ),

    finalContent: readFile(
        "./data/sample.txt"
    ),

    delete: deleteFile(
        "./data/sample.txt"
    )
};

console.log(
    JSON.stringify(fileReport, null, 2)
);


console.log("\n===== final Report =====");

//final Report:

const finalReport = {
    timestamp,
    systemInfo,
    envInfo,
    fileOperations: fileReport
};

console.log(
    JSON.stringify(finalReport, null, 2)
);


fs.writeFileSync(
    "./data/report.json",
    JSON.stringify(finalReport, null, 2)
);

console.log(
    "Report saved successfully in report.json"
);