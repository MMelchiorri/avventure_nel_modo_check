const Stack = require('./stack')
module.exports = class Queue{
    constructor(array,firstIndex,lastIndex){
        this.array= new Stack(array,firstIndex)
        this.firstIndex= firstIndex
        this.lastIndex=lastIndex
    }

    getArray(){
        return this.array
    }

    enqueue(element){
        this.array.push(element)
        this.lastIndex++

    }

    dequeue(){
        var element = this.array['array'][this.firstIndex]
        this.firstIndex++
        return element
    }

    peek(){
        return this.array['array'][this.firstIndex]
    }

    empty(){
        if(this.firstIndex>this.lastIndex || (this.firstIndex==0 && this.lastIndex==0)){
            return "isEmpty"
        }
    }
}