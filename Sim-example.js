require('uppercase-core');

INIT_OBJECTS();

require('./Sim.js');

let simCode = READ_FILE({
	path : 'Example/SON.sim',
	isSync : true
}).toString();

let jsCode = Sim(simCode);

console.log('=========================================================');
console.log(jsCode);

console.log('=========================================================');
eval(jsCode);
