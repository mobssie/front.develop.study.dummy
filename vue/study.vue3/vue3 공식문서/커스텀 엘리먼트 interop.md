## 커스텀 엘리먼트 Interop(Custom Elements Interop)

* BREAKING: 커스텀 엘리먼트 허용목록(whitelisting)은 이제 템플릿 컴파일 중에 수행되며, 런 타임 구성 대신 컴파일러 옵션을 통해 구성해야 한다.
* BREAKING: 특별한 `is` prop 사용은 예약된 <component>태ㅑ그로만 제한된다.
* NEW: 네이티브 HTML 파싱 제한을 해결하기 위해, 네이티브 엘리먼트에 `is`가 사용된 2.x 사용사례를 지원하는 새로운 `v-is`디렉티브가 있다.

### 자율 커스텀 엘리먼트(Autonomous Custom Elements)
Vue 외부에서 정의된 커스텀 엘리먼트를 추가하려면 (예: Web Components API 사용), Vue에 이를 커스텀 엘리먼트로 취급하도록 '지시(instruct)'해야 한다. 
```html
<plastic-button></plastic-button>
```

2.x 문법
Vue 2.x에서는 `Vue.config.ignoredElements`를 통해 태그를 커스텀 엘리먼트로 허용목록에 추가하였다.
```javascript
// Vue가 Vue외부에서 정의된 커스텀 엘리먼트를 무시하게 된다.
// (예: Web Components APIs 사용)
Vue.config.ignoredElements = ['plastic-button']
```


3.x 문법
**Vue 3.0에서는 템플릿 컴파일 중에 수행**된다. 컴파일러가 <plastic-button>을 커스텀 엘리먼트로 처리하도록 지시하려면 다음을 수행하라.

* 빌드 단계를 사용하는 경우: `inCustomElement` 옵션을 Vue 템플릿 컴파일러에 전달된다.
`vue-loader`를 사용하는 경우, `vue-loader`의 `complierOptions` 옵션을 통해 전달해야 한다.

```javascript
// 웹팩 config 내부
rules: [
  {
    test: /\.vue$/,
    use: 'vue-loader',
    options: {
      compilerOptions: {
        isCustomElement: tag => tag === 'plastic-button'
      }
    }
  }
  // ...
]
```

* 즉석(on-the-fly) 템플릿 컴파일을 사용하는 경우, `app.config.isCustomElement`를 통해 전달한다.
```js
const app = Vue.createApp({})
app.config.isCustomElement = tag => tag === 'plastic-button'
```
런타임 구성은 런타임 템플릿 컴파일에만 영향을 미친다. 사전 컴파일된 템플릿에는 영향을 주지 않는다.


### 커스텀 내장 엘리먼트(Customized Built-in Elements)
커스텀 엘리먼트의 사양은 내장된 엘리먼트에 `is` 속성에 추가하여 Customized Built-in Element로 사용하는 방법을 제공한다.
```html
<button is="plastic-button">Click Me!</button>
```

Vue의 특별한 is props에 대한 Vue의 특수한 처리를 <component>태그로만 제한한다.
* <component> 태그에 사용하면 2.x 에서와 정확히 동일하게 작동한다.
* 일반 컴포넌트에서 사용하면, 일반 prop처럼 작동한다.

```html
<foo is="bar" />
```
** 2.x 동작 : `bar` 컴포넌트를 렌더링한다
** 3.x 동작 : `foo` 컴포넌트를 렌더링하고 `is` prop를 전달한다.

* 일반 엘리먼트(plain element)에서 사용되는 경우 `is` 옵션으로 `createElement` 호출에 전달되고 기본 속성(native attribute)으로 렌더링 된다. 이것은 customized built-in elements의 사용을 지원한다.
```html
<button is="plastic-button">CLick Me!</button>
```
** 2.x 동작: plastic-button 컴포넌트를 렌더링 한다.
** 3.x 동작: 호출하여 네이티브 버튼(natice button)을 렌더링한다.
```js
document.createElement('button', { is: 'plastic-button' })
```

### In-DOM 템플릿 구문분석 해결방법을 위한 v-is ( v-is for In-DOM Template Parsing Workarounds)
Note: 이 섹션은 Vue템플릿이 페이지의 HTML에 직접 작성된 경우에만 영향을 준다. In-DOM 템플릿을 사용할 때, 템플릿은 기본 HTML 구문분석 규칙을 따른다. <ul>, <ol>, <table>, 및 <select>와 같은 일부 HTML 요소에는 내부에 표시할 수 있는 요소에 대한 제한이 있으며, <li>, <tr> 및 <option>과 같은 일부요소는 다른 특징 요소안에 나타난다. 

2.x 문법
Vue2에서는 네이티브 태그(native tag)에 `is` prop를 사용하여, 이러한 제한사항을 해결하는 것이 좋다.
```html
<table>
  <tr is="blog-post-row"></tr>
</table>
```

3.x 문법
is의 동작 변경으로, 다음과 같은 경우를 해결하기 위한 새로운 디렉티브 v-is를 소개한다.
```html
<table>
  <tr v-is="'blog-post-row'"></tr>
</table>
```

**!WARNING**
`v-is`는 동작 2.x `:is` 바인딩과 같은 기능을 한다. 따라서 등록된 이름으로 컴포넌트를 렌더링 하려면 해당 값이 자바스크립트 문자열 리터럴이어야 한다.
```html
<!-- 올바르지 않는 사용법, 아무것도 렌더링 되지 않는다.-->
<tr v-is="blog-post-row"></tr>
<!-- 올바른 사용법 -->
<tr v-is="'blog-post-row'"></tr>
```

### 마이그레이션 방법
* config.ignoredElements를 vue-loader의 compilerOptions (빌드 단계 포함) 또는 app.config.isCustomElement (즉석 템플릿 컴파일 포함)로 대체한다.
* is 사용이 있는 모든 비 <component> 태그를 <component is="..."> (SFC 템플릿의 경우) 또는 v-is (In-DOM 템플릿의 경우)로 변경한다.