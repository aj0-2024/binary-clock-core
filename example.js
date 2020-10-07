const binCore = require('./dist');

const core = binCore.createBinaryClock(new Date());

console.log(core.getHours());
