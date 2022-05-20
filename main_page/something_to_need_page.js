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

let colorArr1 = ['#ebebeb', '#c0c0c0', '#a1a1a1', '#838383', '#464646', '#363636'];


/* -------------------------------------------------------------------- */

const root1 = document.getElementById('root');
const mainContainer1 = root1.children[1];

const mainRightBox1 = document.getElementById('right-container');
const mainLeftBox1 = document.getElementById('left-container');

const myPickMenu1 = mainRightBox1.children[0];
// console.log(myPickMenu);

const toNeedMenu1 = mainRightBox1.children[1];
// console.log(toNeedMenu);

const carefulMenu1 = mainLeftBox1.children[1];
// console.log(carefulMenu);

const costMenu1 = mainLeftBox1.children[2];
// console.log(costMenu);

let boolean1 = true;
toNeedMenu1.addEventListener('click', function() {
  if(boolean1 === true){
    const remove1 = mainContainer1.parentNode.removeChild(mainContainer1);

    const needContainer = document.createElement('main');

  root1.appendChild(needContainer);
  root1.style.color = colorArr1[3];
  // console.log(root1.children);
  for(let i = 0; i < 4; i++){
    const needSection = document.createElement('section');
    needContainer.appendChild(needSection);
  }

  const needSection1 = needContainer.children[0];
  const needSection2 = needContainer.children[1];
  const needSection3 = needContainer.children[2];
  const needSection4 = needContainer.children[3];

  /* const needSection1 -----------------------*/
  size(needSection1, '90%', '10%');
  flexStyling(needSection1, 'space-evenly', 'flex-start', 'column');

  const icon1 = document.createElement('div');
  const needH1 = document.createElement('h1');

  needSection1.appendChild(icon1);
  icon1.textContent = 'Home';
  size(icon1, '20%', '40%');
  icon1.style.cursor = 'pointer';

  needSection1.appendChild(needH1);
  needH1.textContent = 'Something to need';

    /* home-click-event------------------------------------- */
    icon1.addEventListener('click', function() {
      if(boolean1 === true){
        root1.removeChild(needContainer);
        root1.appendChild(remove1);
      }
    });
    /* home-click-event------------------------------------- */
  /* const needSection1 -----------------------*/

  /* const needSection2 -----------------------*/
    size(needSection2, '90%', '65%' );
    flexStyling(needSection2, 'space-evenly', 'center', 'column');

    for(let i = 0; i < 5; i++ ) {
      const sectionChild = document.createElement('div');
      needSection2.appendChild(sectionChild);
      // console.log(needSection2.children);
      size(needSection2.children[i], '100%', '18%');
      flexStyling(needSection2.children[i], 'space-evenly','center');

      const childLeft = document.createElement('div');
      const childRight = document.createElement('div');
      needSection2.children[i].appendChild(childLeft);
      needSection2.children[i].appendChild(childRight);
      // needSection2.children[i]
      // console.log(needSection2.children[i].children[0]);
      boxStyling(needSection2.children[i].children[0], '25%', '100%', colorArr1[0]);
      size(needSection2.children[i].children[1], '70%', '100%');
      flexStyling(needSection2.children[i].children[1], 'center', 'center');
      needSection2.children[i].children[1].textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget a quis sit egestas integer donec platea.';
    }
  // /* const needSection2 -----------------------*/


  // /* const needSection3 -----------------------*/
    size(needSection3, '50px', '50px' );
    needSection3.style.borderRadius = '50%';
    needSection3.style.border = '1px solid black';
    needSection3.textContent = 'down';

  /* const needSection3 -----------------------*/

  /* const needSection4 -----------------------*/
    size(needSection4, '90%', '15%');

    const needSection4Left = document.createElement('div');
    const needSection4Right = document.createElement('div');
  
    needSection4.appendChild(needSection4Left);
    needSection4.appendChild(needSection4Right);
  
    // console.log(needSection4.children);

    for(let i = 0; i < needSection4.children.length; i++){
      size(needSection4.children[i], '45%', '100%');
      flexStyling(needSection4.children[i], 'space-evenly', 'center', 'column');
    }

    // console.log(needSection4Left);
    // console.log(needSection4Right);

    for(let i = 0; i < 2 ; i++){
      const menue = document.createElement('div');
      needSection4Left.appendChild(menue);
    }

    for(let i = 0; i < 2 ; i++){
      const menue = document.createElement('div');
      needSection4Right.appendChild(menue);
    }    
  // console.log(needSection4Left);
  // console.log(needSection4Right);

  const  toNeedMenu1 = needSection4Left.children[0];
  const  toNeedMenu2 = needSection4Right.children[0];
  const  toNeedMenu3 = needSection4Left.children[1];
  const  toNeedMenu4 = needSection4Right.children[1];

  const toNeedMenues = [toNeedMenu1, toNeedMenu2, toNeedMenu3, toNeedMenu4];
  // console.log(toNeedMenues);
  for(let i = 0; i < toNeedMenues.length; i++){
    size(toNeedMenues[i], '90%', '45%');
    flexStyling(toNeedMenues[i], 'flex-start', 'center');
    // toNeedMenues[i].style.cursor = 'pointer';
  }

  toNeedMenu1.textContent = 'My pick cat';
  toNeedMenu2.textContent = 'To be careful';
  toNeedMenu3.textContent = 'Something to need';
  toNeedMenu4.textContent = 'Cost of raising cat';

  toNeedMenu2.style.color = '#A8A8A8';
  
  /* const needSection4 -----------------------*/
  
  
  }
});





