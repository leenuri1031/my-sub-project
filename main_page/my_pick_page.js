function flexStyling(target, justi, ali, flexDirection="row") {
  target.style.display = "flex";
  target.style.justifyContent = justi;
  target.style.alignItems = ali;
  target.style.flexDirection = flexDirection;
}

function size(target, w, h){
  target.style.width = w;
  target.style.height = h;
}

function boxStyling(target, w, h, bgc, radius = '0%'){
  target.style.width = w;
  target.style.height = h;
  target.style.backgroundColor = bgc;
  target.style.borderRadius = radius;
}

let colorArr = ['#ebebeb', '#c0c0c0', '#a1a1a1', '#838383', '#464646', '#363636'];


/* -------------------------------------------------------------------- */

const root = document.getElementById('root');
const mainContainer = root.children[1];

const mainRightBox = document.getElementById('right-container');
const mainLeftBox = document.getElementById('left-container');

const myPickMenu = mainRightBox.children[0];
// console.log(myPickMenu);

const toNeedMenu = mainRightBox.children[1];
// console.log(toNeedMenu);

const carefulMenu = mainLeftBox.children[1];
// console.log(carefulMenu);

const costMenu = mainLeftBox.children[2];
// console.log(costMenu);



let boolean = true;
myPickMenu.addEventListener('click', function() {
if(boolean === true){
  // console.log('delete');
  // root.removeChild(mainContainer);

  const remove = mainContainer.parentNode.removeChild(mainContainer);
  
  const container = document.createElement('main');

  root.appendChild(container);
  // my pick cat클릭시 메인 삭제 후 다시 생성 
  // const mainBox = root.children[1];
  // 생성한 메인을 쓰고 싶어서 식별해줌
  // console.log(root.children);
  
  root.style.color = colorArr[3];
  // mainBox.appendChild(section); 총 4개의 section을 만들어야 하기 때문에 반복문 필요

  for(let i = 0; i < 4; i++){
    const section = document.createElement('section');
    container.appendChild(section);
  }
  // for문으로 section*4 동적 생성 완료
  // console.log(container.children);
  // 확인하니까 main>section이 4개 생긴 걸 알 수 있었음

  const section1 = container.children[0];
  const section2 = container.children[1];
  const section3 = container.children[2];
  const section4 = container.children[3];
  // 생성된 section의 스타일링을 위한 식별 완료
  
  size(section1, '90%', '10%');
  flexStyling(section1, 'space-evenly', 'flex-start', 'column');

  const icon = document.createElement('div');
  const h1 = document.createElement('h1');

  section1.appendChild(icon);
  // console.dir(icon);
  icon.textContent = 'Home';
  size(icon, '20%', '40%');
  icon.style.cursor = 'pointer';

  /* home-click-event------------------------------------- */
  icon.addEventListener('click', function() {
    if(boolean === true){
      console.log('test');
      root.removeChild(container);
      root.appendChild(remove);
    }
  });
  /* home-click-event------------------------------------- */

  section1.appendChild(h1);
  h1.textContent = 'My pick cat'
  
  // section1
  size(section2, '90%', '35%');

  const section2Left = document.createElement('div');
  const section2Right = document.createElement('div');

  section2.appendChild(section2Left);
  boxStyling(section2Left, '45%', '90%', colorArr[0]);
  
  section2.appendChild(section2Right);
  size(section2Right, '45%' , '90%');
  flexStyling(section2Right, 'space-evenly', 'flex-start', 'column');

  const section2RightH2 = document.createElement('h2');
  const section2RightText = document.createElement('div');

  section2Right.appendChild(section2RightH2);
  section2Right.appendChild(section2RightText);


  section2RightH2.textContent = 'Maine Coon';
  size(section2RightH2, '90%', '10%');

  section2RightText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nunc, ullamcorper leo auctor odio faucibus et ultricies orci.';
  size(section2RightText, '100%', '60%');
  

  // section2
  size(section3, '90%', '35%');

  const section3Left = document.createElement('div');
  const section3Right = document.createElement('div');

  section3.appendChild(section3Left);
  size(section3Left, '45%' , '90%');

  const section3LeftText = document.createElement('div');
  section3Left.appendChild(section3LeftText);

  section3.appendChild(section3Right);
  boxStyling(section3Right, '45%', '90%', colorArr[0]);
  section3LeftText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nunc, ullamcorper leo auctor odio faucibus et ultricies orci.';
  size(section3LeftText, '100%', '90%');
  flexStyling(section3LeftText, 'center', 'center');

  
  // section3
  size(section4, '90%', '15%');

  const section4Left = document.createElement('div');
  const section4Right = document.createElement('div');

  section4.appendChild(section4Left);
  section4.appendChild(section4Right);

  // console.log(section4.children);
  for(let i = 0; i < section4.children.length; i++){
    size(section4.children[i], '45%', '100%');
    flexStyling(section4.children[i], 'space-evenly', 'center', 'column');
  }

  for(let i = 0; i < 2; i++){
    const menu = document.createElement('div');
    section4Left.appendChild(menu);
  }

  for(let i = 0; i < 2; i++){
    const menu = document.createElement('div');
    section4Right.appendChild(menu);
  }

  console.log(section4Left);
  console.log(section4Right);

  const menu1 = section4Left.children[0];
  const menu2 = section4Right.children[0];
  const menu3 = section4Left.children[1];
  const menu4 = section4Right.children[1];

  const menues =[menu1, menu2, menu3, menu4];
  console.log(menues);

  for(let i = 0; i < menues.length; i++){
    size(menues[i], '90%', '45%');
    flexStyling(menues[i], 'flex-start', 'center');
    menues[i].style.cursor = 'pointer';
  }

  menu1.textContent = 'My pick cat';
  menu2.textContent = 'To be careful';
  menu3.textContent = 'Something to need';
  menu4.textContent = 'Cost of raising cat';

  menu1.style.color = '#A8A8A8';
  // section4
}
});
