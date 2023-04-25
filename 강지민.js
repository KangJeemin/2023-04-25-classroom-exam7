class exampleOne{
  constructor(arr,dataType,itemTofind){
    this.arr = arr;
    this.dataType= dataType;
    this.itemTofind=itemTofind;
 }

 get arr(){
    return this._arr;
 }
 set arr(value){
    if(Array.isArray(value)===false){
        console.log("배열이 아닙니다.")
        return false;
    }
    else{
        this._arr=value;
    }
 }
 check() {
    if(this.dataType==typeof(this.itemTofind) && this._arr.includes(this.itemTofind)){
        console.log(`${this.itemTofind}는 배열에 존재합니다.`)
        return true;
    }
    else if(this._arr.includes(this.itemTofind)==false && this.dataType==typeof(this.itemTofind)==true){
        console.log(`${this.itemTofind}는 배열에 존재하지 않습니다.`)
        return false;
    }
    else if(this._arr.includes(this.itemTofind)==true && this.dataType==typeof(this.itemTofind)==false){
        console.log(`찾으려는 항목은 ${this.dataType} 데이터 타입이 아닙니다.`)
        return false;
    }
 }
}

const basicData = ["안녕하세요","어디선가","입력된","데이터를","찾아보는","함수입니다."];

const a = new exampleOne(basicData,"number","데이터를")
a.check()