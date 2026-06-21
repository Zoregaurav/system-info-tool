const fs = require("fs");

function createFile(filePath, content) {
    try {
        fs.writeFileSync(filePath, content);
        return "File Created Successfully";
    } catch (error) {
      return `Error: ${error.message}`;
    }
}

function readFile(filePath) {
    try {
        return fs.readFileSync(filePath, "utf8");
    } catch (error) {
      return `Error: ${error.message}`;
    }
}

function updateFile(filePath, content) {
    try {
        fs.appendFileSync(filePath, content);
        return "File Updated Successfully";
    } catch (error) {
        return `Error: ${error.message}`;
    }
}

function deleteFile(filePath) {
    try {
        fs.unlinkSync(filePath);
        return "File Deleted Successfully";
    } catch (error) {
         return `Error: ${error.message}`;
    }
}

module.exports = {
    createFile,
    readFile,
    updateFile,
    deleteFile
};