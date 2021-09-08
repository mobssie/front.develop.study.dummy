function Estimate(param){
  this.unit = param;
  //this 키워드를 사용해 현재 함수 객체의 로컬 변수와 매서드를 생성.
  this.getEstimate = function(unittype, width, height){
    let priceinfo = this.unit.find(item=>item.type == unittype);
    return priceinfo.price*width*height;
  }
}
// 초기화 데이터를 파라미터로 넘겨서 new 키워드로 함수의 인스턴스를 생성한다.
let unitinfo = [{type:"wood", price: 100}, {type:"iron", price: 300}, {type:"plast", price: 200}]
const estimate = new Estimate(unitinfo)

// 메서드를 호출해 견적가를 얻는다.
let result = estimate.getEstimate('wood', 20, 20)
console.log(result)




// 생성자 키워드 new로 만든 인스턴스는 사용이 끝나면 반드시 즉시 해제해야한다.
// 해제하지 않으면 계속 메모리 영역을 차지한다.
