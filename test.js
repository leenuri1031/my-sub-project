const arr = ['해리', '론', '헤르미온느', '말포이', '덤블도어', '스네이프', '시리우스', '리무스'];
console.log(arr);

arr.forEach(function(element, index, array){
  console.log(`${array}의 ${index}번째 요소 : ${element}`);
});
arr.forEach((element, index, array) => console.log(`${array}의 ${index}번째 요소 : ${element}`));
arr.forEach(function(element) {console.log(element)});
/* 
forEach : 함수를 배열 요소 만큼 실행하여 값을 반환해 주는 메서드
-> 반복을 해주는 반복문의 일종 / 함수의 실행을 중간에 멈출 수 없음
*/

arr.push('해그리드');
console.log(arr);
/* 
push : 맨 끝에 요소 추가 - (요소-여러개 가능)
['해리', '론', '헤르미온느', '말포이', '덤블도어', '스네이프', '시리우스', '리무스', '해그리드'];
 */

arr.pop();
console.log(arr);
/* 
pop : 맨 끝 요소 삭제
['해리', '론', '헤르미온느', '말포이', '덤블도어', '스네이프', '시리우스', '리무스'];
*/

arr.shift();
console.log(arr);
/* 
shift : 맨 앞 요소 삭제
['론', '헤르미온느', '말포이', '덤블도어', '스네이프', '시리우스', '리무스'];
*/

arr.unshift('해리');
console.log(arr);
/* 
unshift : 맨 앞 요소 추가 - (요소-여러개 가능)
['해리', '론', '헤르미온느', '말포이', '덤블도어', '스네이프', '시리우스', '리무스'];
*/

console.log(arr.indexOf('말포이',0));
/* 
indexOf(요소, 기준 위치-숫자) : 배열에서 지정한 요소가 기준 위치에서 몇번째 요소인지 확인 할 수 있음
요소가 배열에 없다면 -1 이 나옴
console.log(arr.indexOf('말포이',0)); arr의 0번째에서 시작하여 '말포이'가 위치한 인덱스
-> 2
*/

arr.splice(1,1);
console.log(arr);
/* 
splice(조작할 위치-숫자 , 제거할 갯수-숫자) : 요소 삭제
[ '해리', '헤르미온느', '말포이', '덤블도어', '스네이프', '시리우스', '리무스' ]
*/

arr.splice(0,2,'해리', '레귤러스');
console.log(arr);
/* 
splice(조작할 위치-숫자 , 제거할 갯수-숫자 , 요소) : 요소  변경
[ '해리', '레귤러스', '헤르미온느', '말포이', '덤블도어', '스네이프', '시리우스', '리무스' ]
*/

arr.splice(4,0,'릴리', '페튜니아');
console.log(arr);
/* 
splice(조작할 위치-숫자 , 제거할 갯수-숫자 , 요소) : 요소  추가 -> 제거할 갯수를 0으로 할 경우 
[ '해리', '레귤러스', '헤르미온느', '말포이', '릴리', '페튜니아', '덤블도어', '스네이프', '시리우스', '리무스' ]
*/

let arr2 = arr.slice(4,6); 
console.log(arr);
console.log(arr2);
/* 
slice(추출 시작 위치-숫자, 추출 종료 위치(포함하지 않음  위치 전까지 추출)-숫자) : 배열에서 요소를 추출 하여 새로운 배열을 만듦 -> 원래 배열은 변화 없음  
console.log(arr);
-> [ '해리', '레귤러스', '헤르미온느', '말포이', '릴리', '페튜니아', '덤블도어', '스네이프', '시리우스', '리무스' ]

즉, slice는 요소를 추출하기만 할 뿐 원래의 배열에 영향을 미치지 않음 
console.log(arr2);
-> [ '릴리', '페튜니아' ]
*/

console.log(Array.from("해리포터"));
console.log(Array.from({0:'해리' , 1: '론', 2: '헤르미온느', 3:'덤블도어' , 4: '지니', length: 5}));
/* 
Array.from : 유사 배열 객체를 배열 형태로 바꿔주는 메서드
console.log(Array.from("해리포터"));
문자열 '해리포터' 를 나눠서 배열로 만들어 줌 [ '해', '리', '포', '터' ];
*/

console.log(Array.isArray(arr));
/* 
Array.isArray() : ()안에는 객체가 오든 배열이 오든 상관 없으나 배열을 판단해주는 메서드이기 때문에
배열이 아닌 요소가 오게 되면 false가 나옴 (불리언 타입으로 반환)
arr는 배열이기 때문에 true 가 나옴
*/

let arr1 = ['해리', '론', '헤르미온느', '말포이', '덤블도어', '스네이프', '시리우스', '리무스'];
console.log(arr1.at(-4));
console.log(arr1.at(5));
/* 
at() : 요소 의 값을 얻을 수 있는 메서드 
-> 기본 매서드 arr[0~arr.length-1]까지 만 사용 가능하나
-> arr.at(음수 인덱스도 가능) * 단, 배열의 길이의 마이너스까지만 가능
['해리', '론', '헤르미온느', '말포이', '덤블도어', '스네이프', '시리우스', '리무스'];
[0/-8 ,  1/-7,    2/-6,      3/-5,     4/-4,       5/-3,      6/-2,     7/-1];
*/

let arr3 = arr.concat('지니', '네빌');
console.log(arr);
console.log(arr3);
/* 
contact(요소1, 요소2....) : 원래 배열에 요소를 추가하여 새로운 배열을 만듦
slice와 마찬가지로 원래의 배열에는 영향을 끼치지 않음
배열 형태의 요소도 이어 붙일 수 있음

arr.concat(['지니', '네빌'], '도비');
console.log(arr);
-> [ '해리', '레귤러스', '헤르미온느', '말포이', '릴리', '페튜니아', '덤블도어', '스네이프', '시리우스', '리무스' ]
console.log(arr3);
-> [ '해리', '레귤러스', '헤르미온느', '말포이', '릴리', '페튜니아', '덤블도어', '스네이프', '시리우스', '리무스','지니', '네빌']
*/

const number = [1, 2, 3, 4, 5];
console.log(number.every((check) => check<5));
console.log(number.every((check) => check>0)); 
/* 
every : 배열의 요소를 판별할 수 있는 메서드로 불리언값으로 나옴 - 순차적으로 판별
every((함수 이름) => 조건식); -> 조건식에 모두 부합할 경우에만 true가 나오고 하나라도 조건에 맞지 않으면 false가 나옴
=> 순차적으로 요소와 조건식을 비교해서 값을 반환 하는데 중간에 조건과 맞지 않으면 남은 요소는 확인 하지 않고 바로  false를 반환함
현 시점에서 이해한 부분은 여기까지 이고 every((element, index, array) => { ... } )의 경우, 배열에 숫자가 아니라 문자일 경우 어떻게 활용해야 할지 모르겠음
*/

console.log(number.filter(number => number >3));
console.log(arr.filter(array => array.length >3));
/* 
filter : 함수의 조건에 맞는 요소를 추출하여 새로운 배열로 만들어 주는 메서드
console.log(number.filter(number => number >3));
-> 배열  number 중에 3보다 큰 요소 추출 ->[ 4, 5 ]
console.log(arr.filter(array => array.length >3));
-> 배열 arr중에 길이가 3보다 큰 요소 추출 -> [ '레귤러스', '덤블도어', '페튜니아', '스네이프', '시리우스' ]
*/

// console.log(arr);
console.log(arr.findIndex((item) => item.length>2));
console.log(arr.findIndex((item) => item.length>5));
/* 
fimdIndex : 함수의 조건에 해당하는 첫번째 요소에 대한 인덱스 값을 반환
즉, 해당 조건에 맞는 요소들이 많아도 제일 첫번째로 찾은 요소의 위치값이 나옴 & 조건에 맞는 요소가 없는 경우에 -1이 나옴
['해리', '레귤러스','말포이','덤블도어','릴리','페튜니아','스네이프', '시리우스','리무스']
console.log(arr.findIndex((item) => item.length>2));
문자열 길이가 2가 넘는 요소는 '레귤러스', '덤블도어', '페튜니아', '스네이프', '시리우스' 가 있지만 제일 처음 요소인 '레귤러스'의 인덱스값 1이 나옴
console.log(arr.findIndex((item) => item.length>5));
문자열의 길이가 5가 넘어가는 요소는 없기 때문에 -1이 나옴
*/

console.log(arr.includes('론'));
console.log(arr.includes('해리'));
/*  
include : 배열에 해당 요소가 있는지 없는지 판단해주는 메서드로 불리언 타입으로 반환
console.log(arr.includes('론'));
-> 배열에 '론'이 없기 때문에 false
console.log(arr.includes('해리'));
-> 해당 배열에 요소가 존재하기 때문에 true가 나옴
*/

const word = ['The', 'red', 'five', 'diamonds', 'in', 'my', 'bag'];
console.log(word.join());
console.log(word.join(''));
console.log(word.join('-'));
/* 
join : 배열에 있는 모든 요소를 합쳐 하나릐 문자열로 만들어 주는 메서드
console.log(word.join());
-> The,red,five,diamonds,in,my,bag
console.log(word.join(''));
->Theredfivediamondsinmybag
console.log(word.join('-'));
->The-red-five-diamonds-in-my-bag
*/

console.log(arr.map((item) =>item.length));
console.log(number.map((i) => i*2));
/* 
map : 배열에 있는 요소를 함수의 조건에 맞춰서 나온 값들을 모아 새로운 배열을 만들어 주는 메서드
console.log(arr.map((item) =>item.length));
-> 배열 arr에  각 요소들의 길이 값을 배열로 묶어줌 [2,4,3,4,2,4,4,4,3]
console.log(number.map((i) => i*2));
-> [ 2, 4, 6, 8, 10 ]
*/

console.log(word.reduce((acc, cur) => acc + cur, []));
console.log(number.reduce((acc, cur) => acc + cur, 0));
/* 
reduce : 배열의 요소에 대해 함수의 조건을 실행 하고, 실행한 결과들의 값을 누적하여 하나의 값으로 반환해 주는 메서드
reduce((누적된 총 값, 현재 요소의 값) => 조건식 , 초기값);
console.log(word.reduce((acc, cur) => acc + cur, []));
-> The+red -> Thered + five -> Theredfive + diamomds ->  Theredfivediamonds +in -> Theredfivediamondsin +my ->Theredfivediamondsinmy +bag -> Theredfivediamondsinmybag
console.log(number.reduce((acc, cur) => acc + cur, 0));
-> 0+1-> 1+2 -> 3+3 -> 6+4 -> 10+5 -> 15
*/


console.log(number.some((data) => data >1));
console.log(number.some((data) => data >5));
/* 
some : 배열의 요소를 판별할 수 있는 메서드로 불리언값으로 나옴
every((함수 이름) => 조건식); -> 조건식중 하나라도 부합하는 요소가 있으면 true가 나오고 조건과 하나라도 맞지 않으면 false가 나옴
=> 순차적으로 요소와 조건식을 비교해서 값을 반환 하는데 조건이 맞을 때 까지 요소 확인을 함 
*/

const month = [12, 10, 5, 7, 1];
console.log(month.sort());
console.log(arr.sort());
/* 
sort : 배열의 요소를 정렬해주는 메서드로 기본 오름차순으로 정렬이 됨
console.log(month.sort());
-> [ 1, 10, 12, 5, 7 ]
console.log(arr.sort());
->['덤블도어', '레귤러스','리무스', '릴리','말포이', '스네이프','시리우스','페튜니아','해리']
*/

console.log(arr.toString());
console.log(number.toString());
/* 
toString : 배열의 요소를 문자열로 반환해 주는 메서드
console.log(arr.toString());
-> 덤블도어,레귤러스,리무스,릴리,말포이,스네이프,시리우스,페튜니아,해리
console.log(number.toString());
-> 1,2,3,4,5
*/

console.log(arr.values());
const iterator = arr.values();
for(const value of iterator){
console.log(value);
}
// Object [Array Iterator] {} 
/*
반복문으로 사용하는 것 같음
활용하는 법을 모르겠음
*/






