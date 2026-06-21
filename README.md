# 🖥️ System Information & File Management Tool

A Node.js-based tool that collects system information, environment variables, performs file CRUD operations, and generates a structured JSON report.

---

## 🚀 Project Objective

The goal of this project is to:

- Gather system information from the operating system.
- Collect selected environment variables.
- Perform CRUD operations on files.
- Generate a structured JSON report.
- Handle errors gracefully.
- Demonstrate modular Node.js application design.

---

## ✨ Features

### 📊 System Information Collection

The application collects:

- Hostname
- Operating System Platform
- CPU Architecture
- Node.js Version
- Process ID (PID)
- Current Working Directory
- Home Directory
- CPU Core Count
- Total Memory (GB)
- Free Memory (GB)
- System Uptime

---

### 🌍 Environment Variables

The application collects:

- USERNAME
- USERPROFILE
- TEMP
- PATH

Missing values are handled gracefully using fallback values.

---

### 📁 File CRUD Operations

Supports the following operations:

#### Create File

```javascript
createFile(filePath, content);
```

#### Read File

```javascript
readFile(filePath);
```

#### Update File

```javascript
updateFile(filePath, content);
```

#### Delete File

```javascript
deleteFile(filePath);
```

---

### 📄 JSON Report Generation

The application generates a structured report containing:

- Timestamp
- System Information
- Environment Variables
- File Operation Results

The report is automatically saved as:

```text
data/report.json
```

---

## 🏗️ Project Structure

```text
system-info-tool/
│
├── data/
│   ├── sample.txt
│   └── report.json
│
├── services/
│   ├── systemInfo.js
│   ├── envInfo.js
│   └── fileManager.js
│
├── app.js
├── README.md
└── .gitignore
```

---

## ⚙️ Technologies Used

- Node.js
- JavaScript
- OS Module
- File System Module (fs)
- Process Object

---

## 🔄 Code Flow

### Step 1

Collect system information.

```javascript
const systemInfo = getSystemInfo();
```

### Step 2

Collect environment variables.

```javascript
const envInfo = getEnvironmentInfo();
```

### Step 3

Perform file CRUD operations.

```javascript
createFile();
readFile();
updateFile();
deleteFile();
```

### Step 4

Generate a structured report.

```javascript
const finalReport = {
    timestamp,
    systemInfo,
    envInfo,
    fileOperations
};
```

### Step 5

Save report as JSON.

```javascript
fs.writeFileSync(
    "./data/report.json",
    JSON.stringify(finalReport, null, 2)
);
```

---

## 🧠 Strategy

This project follows a modular architecture:

### Module 1: System Information

Uses the built-in OS module to gather system details.

### Module 2: Environment Variables

Uses the Process object to collect environment variables.

### Module 3: File Manager

Uses the File System (fs) module to perform CRUD operations.

### Module 4: Report Generator

Combines all collected information into a single JSON report.

### Benefits

- Easy to maintain
- Reusable code
- Better separation of concerns
- Scalable architecture

---

## 🛡️ Error Handling

All file operations use `try-catch` blocks.

Example:

```javascript
try {
    fs.writeFileSync(filePath, content);
} catch (error) {
    return error.message;
}
```

This prevents unexpected application crashes.

---

## ▶️ How to Run

### Clone Repository

```bash
git clone <repository-url>
```

### Navigate to Project

```bash
cd system-info-tool
```

### Run Application

```bash
node app.js
```

## 📊 Sample Output

```json
{
  "timestamp": "2026-06-21T12:00:00.000Z",
  "systemInfo": {
    "hostname": "DESKTOP-DEMO123",
    "platform": "win32",
    "architecture": "x64",
    "homeDirectory": "C:\\Users\\<user>",
    "nodeVersion": "v22.17.0",
    "pid": 12345,
    "cwd": "C:\\Projects\\system-info-tool",
    "cpuCount": 8,
    "totalMemory": "16.00 GB",
    "freeMemory": "8.50 GB",
    "uptime": "12 Hours 30 Minutes"
  },
  "envInfo": {
    "username": "demo-user",
    "userProfile": "C:\\Users\\demo-user",
    "temp": "C:\\Temp"
  },
  "fileOperations": {
    "create": "File Created Successfully",
    "initialContent": "Hello World",
    "update": "File Updated Successfully",
    "finalContent": "Hello World\nLearning Node.js",
    "delete": "File Deleted Successfully"
  }
}
```

---

## 📚 Learning Outcomes

Through this project, I learned:

- Node.js Fundamentals
- Built-in Node.js Modules
- OS Module
- Environment Variables
- File System Operations
- CRUD Operations
- Error Handling
- JSON Formatting
- Modular Architecture
- Report Generation

---

## 🔮 Future Enhancements

- Express.js Integration
- Web Dashboard UI
- Command Line Interface (CLI)
- CSV Export Support
- Report History Tracking
- REST API Support

---
## 📸 Screenshots

![Homepage](https://github.com/Zoregaurav/system-info-tool/blob/56c35bfd7ce8bb4cca79ebb530d9bd331a3b8f6e/Screenshot%202026-06-21%20141309.png)
---
![Homepage](https://github.com/Zoregaurav/system-info-tool/blob/7e901404dcf1b24f077b6a2f4a429b71c2636425/Screenshot%202026-06-21%20141943.png)

---
⭐ If you found this project interesting, feel free to star the repository.
