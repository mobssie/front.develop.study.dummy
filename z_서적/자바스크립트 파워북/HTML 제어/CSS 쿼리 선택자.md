## CSS 쿼리 선택자

CSS 선택자 2가지
**document.querySelector() 메서드는 처음 나오는 엘리먼트 노드 한 개를 반환한다. 반환할 노드가 없으면 null을 반환한다. 반환값이 있는지 체크할 때는 null 여부를 체크한다.**

**document.querySeelctorAll() 메서드는 해당되는 모든 엘리먼트 노드를 반환한다. 반환한 노드가 없으면 길이가 0인 노드리스트를 반환한다. 반환된 노드가 있는지 확인하려면 length 속성이 0보다 큰지 확인한다.**

노드 리스트는 배열 인덱스로 배열을 접근하는 방식으로 노드 순환을 할 수 있다. 단, 배열은 아니기 때문에 다른 배열 메서드를 사용할 수는 없다. 자바스크립트의 CSS 쿼리 선택자는 CSS로 대상 엘리먼트를 선택하는 방법을 그대로 사용한다.


### ID로 선택
"#ID" 형태로 앞에 #을 붙여서 ID인자를 넣어야 한다. #이 없으면 아이디로 처리 되지 않는다.

### 클래스(Class)로 선택
클래스를 조합해서 다양한 검색 조건을 설정할 수 있다.
document.querySelector('.classname');
docuemnt.querySelector('.item li');
document.querySelectorAll('div.product > ul.bold');
document.querySelectorAll('ul p span');
document.querySelectorAll('div.class, ul')


### 속성 선택자(Attribute Selector)로 선택
속성 선택자를 사용하면 HTML 속성, 또는 속성값을 비교해 엘리먼트 선택 범위를 제한할 수 있다. 속성 선택자에는 표준 속성(어트리뷰트)과 데이터셋(Dataset) 속성을 모두 사용할 수 있다.

document.querySelectorAll('div[class~="wide"]')
document.querySelectorAll('a[href="https://example.com"]')
document.querySelectorAll('ul[data-size="3"]')


### 선택한 노드들의 순환
querySelectorAll()로 여러 개의 노드를 선택한 경우 다음과 같이 노드를 순환하면서 개별 노드에 대한 처리를 할 수 있다.
querySelector(), querySelectorAll()로 선택되는 것은 모두 엘리먼트 노드만이다. 별도로 엘리먼트 노드로 구분하지 않아도 선택한 노드는 모두 엘리먼트 노드라고 생각하면 된다.
```javascript
let nodes = docuement.querySelectorAll('ul li');
if(nodes.length > 0){
  nodes.forEach(node=>{
    if(node.textContent == ''){
      node.remove();
    }
  })
}
```