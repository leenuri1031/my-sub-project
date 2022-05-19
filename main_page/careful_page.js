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

function positionStyling(target, posi, top= '0', left = '0', zIndex = '0'){
  target.style.position = posi;
  target.style.zIndex = zIndex;
  target.style.top = top;
  target.style.left = left;
}

let colorArr2 = ['#ebebeb', '#c0c0c0', '#a1a1a1', '#838383', '#464646', '#363636'];


/* -------------------------------------------------------------------- */

const root2 = document.getElementById('root');
const mainContainer2 = root2.children[1];

// console.dir(mainContainer2);

const mainLeftContainer = document.getElementById('left-container');

// console.dir(MainLeftContainer);
// console.log(MainLeftContainer.children[1]);

const carefulBtn = mainLeftContainer.children[1];

// console.log(carefulBtn);

let boolean2 = true;
carefulBtn.addEventListener('click', function() {
  if(boolean2 ===true){
    const remove2 = mainContainer2.parentNode.removeChild(mainContainer2);

    const carefulContainer = document.createElement('main');

    root2.appendChild(carefulContainer);
    root2.style.color = colorArr2[3];

    for(let i = 0; i < 3; i++){
      const carefulSection = document.createElement('section');
      carefulContainer.appendChild(carefulSection);
    }

    const carefulSection1 = carefulContainer.children[0];
    const carefulSection2 = carefulContainer.children[1];
    const carefulSection3 = carefulContainer.children[2];

  /* const carefulSection1 -----------------------*/
  size(carefulSection1, '90%', '10%');
  flexStyling(carefulSection1, 'space-evenly', 'flex-start', 'column');

    const icon2 = document.createElement('div');
    const carefulH1 = document.createElement('h1');

    carefulSection1.appendChild(icon2);
    icon2.textContent = 'Home';
    size(icon2, '20%', '40%');
    icon2.style.cursor = 'pointer';
  
    carefulSection1.appendChild(carefulH1);
    carefulH1.textContent = 'To be carefule';

  /* home-click-event------------------------------------- */
    icon2.addEventListener('click', function() {
      if(boolean1 === true){
        root2.removeChild(carefulContainer);
        root2.appendChild(remove2);
      }
    });
  /* home-click-event------------------------------------- */

  /* const carefulSection1 -----------------------*/

  /* const carefulSection2 -----------------------*/
    size(carefulSection2, '90%', '70%' );
    flexStyling(carefulSection2, 'space-evenly', 'center', 'column');

    // 4section만들기
    for(let i = 0; i < 4; i++){
      const makeSection = document.createElement('section');
      carefulSection2.appendChild(makeSection);
      size(makeSection, '100%', '23%');
      flexStyling(makeSection, 'space-evenly', 'flex-start', 'column');

      for(let i = 0; i < 3; i++){
        const makeDiv = document.createElement('div');
        makeSection.appendChild(makeDiv);
      }
    }

    // 반복문으로 자식을 생성한 후에 필요없는 섹션의 자식을 다시 삭제
    const makeSections = carefulSection2.children;
    
    makeSections[1].removeChild(makeSections[1].children[2]);
    makeSections[2].removeChild(makeSections[2].children[2]);
    
    // console.log(makeSections[1].children);
    // console.log(makeSections[2].children);

    // 메인 섹션 자식 스타일링
    for(let i = 0; i < makeSections.length; i++){
      size(makeSections[i].children[0], '50%', '25%');
      flexStyling(makeSections[i].children[0], 'flex-start', 'center');
      makeSections[i].children[0].style.fontSize = '17px';
      makeSections[i].children[0].style.zIndex = '1';
      makeSections[i].children[0].textContent =`${i+1}.Lorem Ipsum`;
      size(makeSections[i].children[1], '100%', '70%');
      flexStyling(makeSections[i].children[1], 'center', 'center');
      makeSections[i].children[1].style.zIndex = '1';
      makeSections[i].children[1].textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nunc, ullamcorper leo auctor odio faucibus et ultricies orci.';
    }

    // makeSections[0].children[2]
    // makeSections[3].children[2]

    boxStyling(makeSections[0].children[2], '200px', '200px', colorArr2[0], '50%');
    positionStyling(makeSections[0].children[2], 'absolute', '20vh', '5vw');

    boxStyling(makeSections[3].children[2], '200px', '200px', colorArr2[0], '50%');
    positionStyling(makeSections[3].children[2], 'absolute', '60vh', '25vw');


    // 4section과 자식만들기 styling 끝 ',top= '0', left = '0', bottom= '0'

  /* const carefulSection2 -----------------------*/


  /* const carefulSection3 -----------------------*/
  size(carefulSection3, '90%', '15%');

  const carefulSection3Left = document.createElement('div');
  const carefulSection3Right = document.createElement('div');

  carefulSection3.appendChild(carefulSection3Left);
  carefulSection3.appendChild(carefulSection3Right);

  for(let i = 0; i < carefulSection3.children.length; i++){
    size(carefulSection3.children[i], '45%', '100%');
    flexStyling(carefulSection3.children[i], 'space-evenly', 'center', 'column');
  }

  for(let i = 0; i < 2 ; i++){
    const menue2 = document.createElement('div');
    carefulSection3Left.appendChild(menue2);
  }

  for(let i = 0; i < 2 ; i++){
    const menue = document.createElement('div');
    carefulSection3Right.appendChild(menue);
  }  
  
  
  const  careMenu1 = carefulSection3Left.children[0];
  const  careMenu2 = carefulSection3Right.children[0];
  const  careMenu3 = carefulSection3Left.children[1];
  const  careMenu4 = carefulSection3Right.children[1];

  const careMenues = [careMenu1, careMenu2, careMenu3, careMenu4];

  for(let i = 0; i < careMenues.length; i++){
    size(careMenues[i], '90%', '45%');
    flexStyling(careMenues[i], 'flex-start', 'center');
    // careMenues[i].style.cursor = 'pointer';
  }

  careMenu1.textContent = 'My pick cat';
  careMenu2.textContent = 'To be careful';
  careMenu3.textContent = 'Something to need';
  careMenu4.textContent = 'Cost of raising cat';

  careMenu3.style.color = '#A8A8A8';

  /* const carefulSection3 -----------------------*/  

  }
});