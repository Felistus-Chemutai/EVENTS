const fsPromises = require('fs').promises;
const { v4: uuidv4 } = require("uuid");
const { format } = require("date-fns");
const path = require("path");
const fs= require('fs')
const newId = uuidv4();
const newDate = format(new Date(), "yyyyMMdd\tHH:mm:ss");
console.log(newDate);
console.log(newId);

const logDir = "./log";
const logFile = "eventlog.txt";

const logEvents = async (msg) => {
  try {
    if (!fs.existsSync(path.join(__dirname, "log"))) {
      try {
         fs.mkdir(path.join(__dirname, "log"));
         console.log(`folder created successfully`);
      } catch (error) {
         console.error(`Error creating folder: ${error.message}`);
      }
    } else {
      console.log(`folder already exists`);
    }
    var msg= `${msg}`

    await fsPromises.appendFile(`${logDir}/${logFile}`, `${newDate}\t${newId}\t${msg}\n`);
    console.log('successful');

  } catch (error) {
    console.error(error);//
  }
};

module.exports = logEvents;
