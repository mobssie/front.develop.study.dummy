## 문서 객체 모델(DOM)과 노드, 그리고 태그
- Document Object Medel, 문서 객체 모델
- HTML, XML페이지의 구조와 요소들을 제어할 수 있도록 제공하는 프로그래밍 인터페이스, 또는 구조화된 데이터를 말한다.


**웹 브라우저 실행 순서**
1. 먼저 HTML 파일을 읽어 문서의 구조를 파악
2. 트리 형태로 된 데이터 구조를 만든다. *(이것이 DOM)*
> DOM이 일단 완성되고 나면, 자바스크립트로 제어가 가능.
3. 웹 브라우저가 웹 페이지를 화면에 표시하는 단계로 넘어가기 전에 자바스크립트가 DOM을 제어할 수 있다. 
4. DOM 제어가 끝나면 웹 브라우저는 DOM구조를 기반으로 웹 브라우저 화면에 웹페이지를 그리고 과정을 진행한다. *(이것을 Rendering)*
> 렌더링에는 미리 작성한 CSS의 화면 배치와 속성에 대해 정보를 사용.
5. 이 과정에서 웹 브라우저는 DOM과 마찬가지로 CSS를 읽어 CSSOM(Cascading style sheet object model)을 생성.
- cssom은 css를 구조화 된 데이터 형태로 생성한 것.
6. DOM과 CSSOM을 조합해 화면에 표시할 최종 구조를 만든다. *이것이 렌더 트리(Render Tree)*
7. 렌터트리를 기초로 화면에 HTML페이지가 그려진다. 배치가 되면서 컨텐츠 파일들 또한 비동기로 읽어서 HTML페이지의 적절한 위치에 배치를 한다.
8. **렌더링 과정은 전적으로 웹 브라우저의 몫이다. DOM 구조는 표준으로 정해져 있기 때문에 모두 같은 구조를 가지지만, DOM을 웹 브라우저 호면에 어떻게 표시할 것이냐는 웹 브라우저 고유의 방식을 따른다.**
> *여기서 호환성문제가 발생!!*
> 실제로 다른 렌더링 엔진(렌더링 구현한 모듈)을 구글 크롬과 모질라 파이어폭스 같은 HTML페이지를 화면에 표시할 때 미세하게 다르게 표현되는 부분들이 있다.
> 대부분 HTML규격에 세세하게 정해지지 않은 부분들을 각자 알아서 구현하면서 나타나는 차이지만, DOM이 같다고 웹 브라우저 화면에도 100% 같은 화면이 보이는 것을 보장하는 것은 아니다.
*중요한 것은 DOM이 완성된 직후부터 자바스크립트로 제어가 가능하다는 것.*

### DOM의 구조와 노드, 태그의 이해
- DOM은 HTML 태그 구조를 데이터 구조로 표현한 것.
- DOM에서는 HTML의 태그 한 개의 해당하는 것을 노드라고 하며, 부모 자식 관계로 엮인 노드들을 트리 구조로 표현한 것을 노드 트리(Node Tree), 또는 돔 트리(DOM Tree)라 한다.

#### DOM과 HTML의 트리 구조 둘 사이에는 중요한 차이점이 있다.
1. DOM은 유효하지 않은 HTML태그를 교정해서 DOM 트리 구조로 표현할 수 있는 형태로 보정한다. 
- 문서로 존재하는 HTML페이지는 HTML문서 구조에서 필수로 있어야 하는 태그가 없을 수도 있고, 있어야 하는 끝나는 태그가 없는 태그가 있을 수도 있다. 
- 웹 브라우저는 DOM을 생성하변서 이런 HTML페이지의 구조적인 문제점 교정해서 구조적으로 문제가 없는 완전 무결한 단일 트리구조인 DOM을 생성한다. 
- HTML 페이지는 문제가 있을 수도 있지만, 생성된 DOM은 완전한 형태의 트리 구조를 가지게 된다.

2. 자바스크립트는 DOM을 제어하는 것이지, HTML페이지의 태그를 제어하는 것이 아니다.
- 자바스크립트를 이용해 태그를 추가하거나 특정 트리 구조를 다른 위치로 옮기는 것은 모두 DOM을 변경하는 것.
- DOM생성이 완료되기 전까지는 자바스크립트는 동작하지 않는다.
- 자바스크립트로 HTML페이지의 구조를 변경할 수 있다는 것은 DOM이 이미 완성되어 있다는 뜻.

3. 노드와 태그는 다른것이다.
- 자주 혼동하지만 노드와 태그는 완전히 다른 것.
- **노드는 DOM의 요소 1개를 말하고, 태그는 HTML 페이지의 태그 요소 1개를 말한다.**
- 노드는 태그 일수도 있고 아닐 수도 있다. 노드는 태그의 수퍼 셋(Super set)과 같은 개념이라고 이해하면 된다.
- 노드는 태그(앨리먼트) 노드외에 제어를 위한 특수 문자나, 줄 바꿈, 텍스트 내용, 또는 웹 브라이저에서 렌더링 되지 않는 시각적이지 않은 요소들을 모두 각각의 노드로 표현한다.

4. DOM에서 CSS에 관련된 내용이 없다. CSS는 CSSOM으로 표현하며, 둘은 완전히 분리된 데이터 구조이다.
- 웹 브라우저 개발자 도구에서 HTML구조를 표현할 때 일부 CSS 요소들이 일부 보이는 것은 시각적인 편의를 위한것이지, 실제 그 데이터가 DOM에 있기 때문이 아니다.
- 대표적으로 ":before", ":after"와 같은 CSS 가상 요소가 있다.
- 웹 브라이저 개발자 도구의 태그 소스 구조는 DOM과 CSSOM이 모두 생성된 후에 그 구조에 접근하는 것으로 이해를 해야한다.