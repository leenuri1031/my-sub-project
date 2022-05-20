
// let createElement = (obj) => {
//   const elementName = document.createElement(obj);
//   // Node.appendChild(elementName);
// }
// TypeError: Node.appendChild is not a function 가 나옴

// 요소 동적 생성하는 함수를 만들고 싶음

const root = document.getElementById('root');
console.log(root);

/* function solution(tagName, count, parent) {
  let setElem = document.createElement(tagName);
  for(let i = 0 ; i < count ; i++) {
    parent.appendChild(setElem);
  }
}

solution("div", 4, root); */

/*
함수 이름 (매개변수){
  변수 이름 = document.createElement(태그이름);
  반복(let i =0 ; i < 매개변수; i++ ) {
  매개변수(사용해 부모를 대신).appendChild(변수 이름);
  }
}
*/

/* 
함수콜(매개변수에 대입);
*/


/* ------------------------------- */
function createElement (tag, parent){
  let objName = document.createElement(tag);
  parent.appendChild(objName);
}

for(let i = 0; i < 4; i++){
  createElement('div', root);
}

function removeElement (parent){
  parent.parentNode.removeChild(parent);
}

removeElement(root.children[2]);
console.log(root);

const div2 = root.children[2];
console.log(div2);

let remove = removeElement(root.children[2]);

// 일단 생성 함수도 잘 되고 삭제 함수도 잘 되는데 삭제한 요소를 추후 다시 사용할 때가 있기때문에 함수를 통해 삭제한 요소를 변수로 지정 해 두어도 지정한 요소는 undefinded로 나옴

