var EventEmitter=require('events');
var dancerConfig=require('./dancers_config.js').events;

module.exports=class operation extends EventEmitter{
    constructor(name,pirouettes){
        super();
        this.pirouettes=pirouettes;
        this.name=name;
        this.sport='dance';
    }

    add(){
        if(this.pirouettes>=0){
            ++this.pirouettes;
            this.emit(dancerConfig.ADD);
            this.emit(dancerConfig.PUSH);
        }
        else
            this.emit(dancerConfig.ERR);
    }

    minus(){
        if(this.pirouettes>0){

            --this.pirouettes;
            this.emit(dancerConfig.MINUS);
            this.emit(dancerConfig.PUSH);
        }
        else
            this.emit(dancerConfig.ERR);
        
    }
}
