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

let colorArr3 = ['#ebebeb', '#c0c0c0', '#a1a1a1', '#838383', '#464646', '#363636'];

/* -------------------------------------------------------------------- */

const root3 = document.getElementById('root');
const mainContainer3 = root3.children[1];
// console.log(mainContainer3);

const mainLeftContainer2 = document.getElementById('left-container');

const costBtn = mainLeftContainer2.children[2];
// console.log(costBtn);

let boolean3 = true;
costBtn.addEventListener('click', function() {
  if(boolean3 === true){
    // console.log('test');
    const remove3 = mainContainer3.parentNode.removeChild(mainContainer3);
    
    const costContainer = document.createElement('main');
    root3.appendChild(costContainer);
    root3.style.color = colorArr3[3];

  /* 새로운 main 생성 finish----------------------------------- */

  for(let i = 0; i < 4; i++){
    const costSection = document.createElement('section');
    costContainer.appendChild(costSection);
  }

  const costSection1 = costContainer.children[0];
  const costSection2= costContainer.children[1];
  const costSection3= costContainer.children[2];
  const costSection4 = costContainer.children[3];
  /* 새로운 main children 생성 및 식별 finishfinish----------------------------------- */
  /* const costSection1 -----------------------*/

  size(costSection1, '90%', '10%');
  flexStyling(costSection1, 'space-evenly', 'flex-start', 'column');

  const icon3 = document.createElement('div');
  const costH1 = document.createElement('h1');

  costSection1.appendChild(icon3);
  icon3.textContent = 'Home';
  size(icon3, '20%', '40%');
  icon3.style.cursor = 'pointer';

  costSection1.appendChild(costH1);
  costH1.textContent = 'Cost of rasing cat';

/* home-click-event------------------------------------- */
  icon3.addEventListener('click', function() {
    if(boolean2 === true){
      root3.removeChild(costContainer);
      root3.appendChild(remove3);
    }
  });
/* home-click-event------------------------------------- */
  /* const costSection1 -----------------------*/


  /* const costSection2 -----------------------*/
  size(costSection2, '90%', '45%' );
  flexStyling(costSection2, 'space-evenly', 'center', 'column');

  for(let i = 0; i<2; i++ ) {
    const list = document.createElement('div');
    costSection2.appendChild(list);
    size(costSection2.children[i], '80%', '45%');
    flexStyling(costSection2.children[i],  'space-evenly', 'center', 'column');
  }


  const listTop = costSection2.children[0];
  
  
  for(let i = 0; i<2; i++ ) {
    const list1 = document.createElement('div');
    listTop.appendChild(list1);
  }
  
  const listTopTitle =listTop.children[0];
  
  size(listTopTitle, '90%', '15%');
  listTopTitle.textContent = 'Lorem ipsum1';
  listTopTitle.style.fontSize = '1.2rem';
  
  const listTopContents =listTop.children[1];
  size(listTopContents, '90%', '75%');
  flexStyling(listTopContents, 'space-between', 'center');

  for(let i = 0; i<2; i++ ) {
    const list2 = document.createElement('div');
    listTopContents.appendChild(list2);
    size(list2, '40%', '100%');
    flexStyling(list2, 'space-evenly', 'felx-start', 'column');
  }

  const leftListTop = listTopContents.children[0];
  const rightListTop = listTopContents.children[1];


  flexStyling(leftListTop, 'space-evenly', 'flex-start', 'column');
  for(let i = 0; i < 6; i++ ) {
    const listcontent = document.createElement('div');
    leftListTop.appendChild(listcontent);
    size(listcontent, '80%', '12%');
    listcontent.textContent = `list-${i+1}`;
  }

  flexStyling(rightListTop, 'space-evenly', 'flex-start', 'column');
  for(let i = 0; i < 6; i++ ) {
    const listcontent1 = document.createElement('div');
    rightListTop.appendChild(listcontent1);
    size(listcontent1, '80%', '12%');
    listcontent1.textContent = `10,000 won`;
  }
  
  // --------------------------------------------------------

  const listBottom = costSection2.children[1];

  for(let i = 0; i < 2; i++ ) {
    const list2 = document.createElement('div');
    listBottom.appendChild(list2);
  }

  const listBottomTitle =listBottom.children[0];
  
  size(listBottomTitle, '90%', '15%');
  listBottomTitle.textContent = 'Lorem ipsum2';
  listBottomTitle.style.fontSize = '1.2rem';
  
  const listBottomContents =listBottom.children[1];

  size(listBottomContents, '90%', '75%');
  flexStyling(listBottomContents, 'space-between', 'center');

  for(let i = 0; i<2; i++ ) {
    const list3 = document.createElement('div');
    listBottomContents.appendChild(list3);
    size(list3, '40%', '100%');
    flexStyling(list3, 'space-evenly', 'felx-start', 'column');
  }

  const leftListBottom = listBottomContents.children[0];
  const rightListBottom = listBottomContents.children[1];


  flexStyling(leftListBottom, 'space-evenly', 'flex-start', 'column');
  for(let i = 0; i < 6; i++ ) {
    const listcontent2 = document.createElement('div');
    leftListBottom.appendChild(listcontent2);
    size(listcontent2, '80%', '12%');
    listcontent2.textContent = `list-${i+1}`;
  }

  flexStyling(rightListBottom, 'space-evenly', 'flex-start', 'column');
  for(let i = 0; i < 6; i++ ) {
    const listcontent3 = document.createElement('div');
    rightListBottom.appendChild(listcontent3);
    size(listcontent3, '80%', '12%');
    listcontent3.textContent = `10,000 won`;
  }
  /* const costSection2 -----------------------*/

  /* const costSection3 -----------------------*/
  boxStyling(costSection3, '80%', '25%', colorArr3[0], '40px');
  flexStyling(costSection3, 'space-evenly', 'center', 'column');

  for(let i = 0; i < 2; i++){
    const totalDiv = document.createElement('div');
    costSection3.appendChild(totalDiv);
  }
  const divTop = costSection3.children[0]; 
  const divBottom = costSection3.children[1]; 

  size(divTop, '80%', '25%');
  flexStyling(divTop, 'flex-start', 'center');
  divTop.textContent = 'Total 120,000 won';

  size(divBottom, '80%', '65%');
  divBottom.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nunc, ullamcorper leo auctor odio faucibus et ultricies orci.';


  /* const costSection3 -----------------------*/


  /* const costSection4 -----------------------*/
  size(costSection4, '90%', '15%');
  flexStyling(costSection4, ' space-around', 'center');


  for(let i = 0; i < 2; i++){
    const divMenue = document.createElement('div');
    costSection4.appendChild(divMenue);
    // console.log(costSection3.children);

// -----------------------------------------
    size(costSection4.children[i], '45%', '100%');
    flexStyling(costSection4.children[i], 'space-evenly', 'center', 'column');
  }
  
  // console.log(costSection3.children);

  const left = costSection4.children[0];
  const right = costSection4.children[1];

  // console.log(left);
  // console.log(right);

  for(let i = 0; i<2; i++){
    const div = document.createElement('div');
    left.appendChild(div);
  }

  for(let i = 0; i<2; i++){
    const div1 = document.createElement('div');
    right.appendChild(div1);
  }

  const  costMenu1 = left.children[0];
  const  costMenu2 = right.children[0];
  const  costMenu3 = left.children[1];
  const  costMenu4 = right.children[1];

  const costMenues = [costMenu1, costMenu2, costMenu3, costMenu4];

  for(let i = 0; i < costMenues.length; i++){
    size(costMenues[i], '90%', '45%');
    flexStyling(costMenues[i], 'flex-start', 'center');
    // costMenues[i].style.cursor = 'pointer';
  }

  costMenu1.textContent = 'My pick cat';
  costMenu2.textContent = 'To be careful';
  costMenu3.textContent = 'Something to need';
  costMenu4.textContent = 'Cost of raising cat';
  costMenu4.style.color = '#A8A8A8';
  /* const costSection4 -----------------------*/
  }
});












