const fs = require('fs')
const logEvents = require('./logEvents');
const EventEmitter = require('events')


const customEmitter = new EventEmitter();

customEmitter.on('log',(msg) =>logEvents (msg))
setTimeout(()=>{
    customEmitter.emit("log","new messages emmitted successfully❤🙌🤦‍♀️ ")
}, 3000)
