module.exports = class Stack{

    constructor(array,index){
        this.array= array
        this.index= index
    }

    getArray(){
        return this.array
    }

    push(element){
        this.array[this.index]=element
        this.index+=1
    
    }
    pop(){
        var lastElement
        if(this.index==0){
            return "isEmpty"
        }else{
            lastElement = this.array[this.index-=1]
            this.index -=1
        }
     
        return lastElement
    }

    top(){
        if(this.index==0){
            return "there is no element in the stack"
        }else{
            return this.array[this.index-=1]
        }
    }

    order(){
        for(var i=0;i<this.index;i++){
            for(var j=i+1;j<this.index;j++){
                if(this.array[i]>this.array[j]){
                    var temp = this.array[i]
                    this.array[i]=this.array[j]
                    this.array[j]=temp
                }
            }
        }
        console.log(this.array)
        return this.array
    }

}
