var fs = require('fs');
var f = fs.readFileSync('./mockData/skillBehind.md', 'utf-8');
var r = f.replace(/\r/g, '');
var o = {
    id: 1,
    title: 'skillBehind',
    content: r,
    time: Date.now() / 1000
};
fs.writeFileSync('./mockData/skillBehind.json', JSON.stringify(o));