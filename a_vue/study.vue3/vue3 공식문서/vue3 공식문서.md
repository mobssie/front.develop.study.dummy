# vue.js 3.0 공식 사이트
https://v3.ko.vuejs.org/guide/migration/introduction.html



## 주목할 만한 새로운 기능들
Composition API
Teleport
Fragments
Emits 컴포넌트 옵션
커스텀 렌더들 (custom renderers)을 생성하기 위한 @vue/runtime-core의 createRenderer API
SFC Composition API



## 주의해야 할 변경사항들
### 전역 API
* 전역 Vue API가 애플리케이션 인스턴스를 사용하도록 변경 되었다.
* 글로벌 및 내부 API트리쉐이킹 (*Treeshaking) 가능하도록 재구성 되었다.

### 템플릿 디렉티브
* `v-model` 컴포넌트 사용법이 재정의되었다.
* `<template v-for></template>` 와 `v-for`가 아닌 `key` 사용 방법이 변경되었다.
* 같은 요소에 `v-if`와 `v-for` 사용될 때 우선순위가 변경 되었다.
* 이제부터 `v-bind="object"`는 순서에 민감하다.
* `v-for`내부의 `ref`는 더이상 refs 참조 배열을 자동생성하지 않는다.

### 컴포넌트들
* 함수형 컴포넌트는 오직 일반 함수를 사용해서만 만들수 있다.
* 싱글 파일 컴포넌트(SFC) `<template>` 및 `함수형` 컴포넌트 옵션의 `functional` 속성은 더 이상 사용되지 않는다.
* 비동기 컴포넌트는 이제 생성을 위해 `defineAsyncComponent` 메서드가 필요하다.

### 렌더 함수
* 렌더함수 API가 변경되었다.
* `$scopedSlots` 속성이 제거되고 모든 슬롯이 `$slots`를 통해 함수로 노출된다.

### 커스텀 요소들
* 이제 커스텀 요소 허용이 Template 컴파일 시 수행된다.
* 사용자 지정 속성 `js`의 사용은 예약어인 `<component>`태그로 제한된다.

### 기타 소소한 변경사항들
* `destroyed` 라이프사이클 옵션의 명칭이 `unmounted로` 변경되었다.
* `beforeDestroy` 생명주기 옵션의 명칭이 `beforeUnmount로` 변경 되었다.
* Props `default` 팩토리 함수는 더이상 this에 접근할 수 없다.
* 컴포넌트 라이프사이클에 맞게 사용자 지정 디렉티브 API가 변경되었다.
* `data` 옵션은 항상 함수로 선언되어야 한다.
* 이제 mixins의 `data` 옵션을 얕게 병합된다.
* 속성 강제 방법이 변경되었다.
* 몇몇 Transition 클래스의 명칭이 변경되었다.
* 배열에서 watch 콜백은 배열이 교체될 때만 발생한다.
* 배열의 변경 사항에 대해 watch 콜백을 실행하려면, 반드시 deep 옵션을 설정해야 한다.
* 특수 디렉티브 ( v-if / else-if / else, v-for )이 없는 <template> 태그는 이제 일반 요소로 처리되며 내부 콘텐츠를 렌더링하는 대신 native <template>요소가 된다.
* vue 2.x에서 애플리케이션 루트 컨테이너의 outerHTML은 루트 컴포넌트 템플릿으로 대체된다. (또는 루트 컴포넌트에 템플릿/렌더링 옵션이 없는 경우 최종적으로 템플릿에 컴파일 된다.) Vue 3.x는 이제 애플리케이션 컨테이너의 innerHTML을 대신 사용한다. 이는 컨테이너 자체가 더이상 템플릿의 일부로서 고려되지 않음을 의미한다.

### 제거된 APIs
* `v-on` 수정사로서의 `키코드(KeyCode)`지원
* $on, $off 그리고 $once 인스턴스 메소드
* 필터
* 인라인 템플릿 속성
* `$destroy` 인스턴스 메서드, 사용자는 더이상 개별 Vue 구성 요소의 수명주기를 수동으로 관리할 필요가 없다.

