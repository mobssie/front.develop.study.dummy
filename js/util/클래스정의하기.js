class Estimate {
  constructor(param){
    this.unit = param;
  }
  // 견적가 얻기 메서드
  getEstimate(unitype, width, height){
    let priceinfo = this.unit.find(item=>item.type == unitype);
    return priceinfo.price*width*height;
  }
  addUint(unit){
    unit.push(unit);
  }
}
let unitinfo = [{type:"wood", price: 100}, {type:"iron", price: 300}, {type:"plast", price: 200}]
const estimator = new Estimate(unitinfo);
let result = Estimate.getEstimate('wood', 20, 20);
console.log(result)