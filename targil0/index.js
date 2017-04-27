var express = require('express');
var app = express();

var EventEmitter=require('events');
var dancerConfig=require('./dancers_config.js').events;
var operation=require('./operation.js');
var message="";

var dancer=new operation("nofar",20);

dancer.on(dancerConfig.ADD,function(){
    console.log(`Pirouettes has been changed(+1).
    The name of the athlete:${dancer.name}.
    Major:${dancer.sport}.
    The number of pirouetts:${dancer.pirouettes}`);
});

dancer.on(dancerConfig.MINUS,function(){
    console.log(`Pirouettes has been changed(-1).
    The name of the athlete:${dancer.name}.
    Major:${dancer.sport}.
    The number of pirouetts:${dancer.pirouettes}`);
});

dancer.on(dancerConfig.PUSH,function(){
    message+=`Pirouettes has been changed.
    The name of the athlete:${dancer.name}.
    Major:${dancer.sport}.
    The number of pirouetts:${dancer.pirouettes} | `;
});

dancer.on(dancerConfig.ERR,function(){
    console.log("Invalid number of pirouettes.");
    message+=`Invalid number of pirouettes.`;
});

app.get('/',function(req,res){
    dancer.add();
    dancer.minus();
    res.send(message);
});
app.listen(8080);
console.log('listening to port 8080');