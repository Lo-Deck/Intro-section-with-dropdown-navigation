

const btnMenu = document.getElementById('open-menu');
const displayMenu = document.getElementById('display-menu');
const background = document.getElementById('background');
const btnSubMenu = document.getElementsByClassName('list-title');
const displaySubMenu = document.getElementsByClassName('sub-menu');



//console.log(btnMenu);

//console.log(displaySubMenu);


btnMenu.addEventListener('click', () => 
    {

        console.log(displayMenu.style.visibility);

        //if(displayMenu.style.visibility === 'hidden')
        if(!displayMenu.style.visibility)
        {

            //console.log(displayMenu.style.visibility);

            displayMenu.style.visibility = 'visible';
            btnMenu.innerHTML = '<svg width="26" height="26" xmlns="http://www.w3.org/2000/svg"><g fill="#151515" fill-rule="evenodd"><path d="m2.393.98 22.628 22.628-1.414 1.414L.979 2.395z"/><path d="M.98 23.607 23.609.979l1.414 1.414L2.395 25.021z"/></g></svg>';
            background.style.visibility = 'visible';            
        }

        else
        {
            displayMenu.style.visibility = '';
            btnMenu.innerHTML = '<svg width="32" height="18" xmlns="http://www.w3.org/2000/svg"><g fill="#151515" fill-rule="evenodd"><path d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z"/></g></svg>';
            background.style.visibility = 'hidden';      
        }

    }
);



Array.from(btnSubMenu).forEach( (item, index) => 
    {

        item.addEventListener('click', () => {

           // console.log(item.firstElementChild.firstElementChild);

            if(!displaySubMenu[index].style.display)
            {
                displaySubMenu[index].style.display = 'block'; 
                
                item.firstElementChild.firstElementChild.src = './images/icon-arrow-up.svg';
                
            }
            else
            {
                displaySubMenu[index].style.display = ''; 

                item.firstElementChild.firstElementChild.src = './images/icon-arrow-down.svg';

            }

        });

    }
);




