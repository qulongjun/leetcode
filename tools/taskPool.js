var startTime =new Date().getTime()

function taskPool(){
    this.tasks = [];
    this.pool = [];
    this.max = 1;
}

taskPool.prototype.removeTask = function() {
    this.tasks = [];
    this.pool = [];
}


taskPool.prototype.addTask = function(task){
    this.tasks.push(task);
    this.run();
}

taskPool.prototype.run = function(){
    if(this.tasks.length ===0) return;
    let min = Math.min(this.tasks.length, this.max - this.pool.length);
    for(var i=0;i<min;i++){
        var currTask = this.tasks.shift();
        this.pool.push(currTask);
        currTask().then(res=>{
            // TODO anything when success
        }).catch(err=>{
            console.log('err', err);
        }).finally(()=>{
            this.pool.splice(this.pool.indexOf(currTask), 1);
            this.run();
        })
    }
}



module.exports = taskPool;