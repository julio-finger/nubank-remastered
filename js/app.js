
/* FUNÇÃO HEADER SCROLL */
function scrollHeader(){
    const nav = document.getElementById('header');

    if(this.scrollY >= 50) nav.classList.add('active-header'); else nav.classList.remove('active-header');
}

window.addEventListener('scroll', scrollHeader);



/*DROP DOWN MENU*/

const dropdownMenu1 = document.getElementById('dropdown-item-1')
const dropdownMenu2 = document.getElementById('dropdown-item-2')
const dropdownMenu3 = document.getElementById('dropdown-item-3')

const navItem1 = document.getElementById('nav-link-1')
const navItem2 = document.getElementById('nav-link-2')
const navItem3 = document.getElementById('nav-link-3')


function showDropDown1(event){
    event.preventDefault(); // não fazer a função de link de redirecionamento
    dropdownMenu1.classList.toggle('active-dropdown-menu');
    dropdownMenu2.classList.remove('active-dropdown-menu');
    dropdownMenu3.classList.remove('active-dropdown-menu');


}

function showDropDown2(event){
    event.preventDefault(); // não fazer a função de link de redirecionamento
    dropdownMenu2.classList.toggle('active-dropdown-menu');
    dropdownMenu1.classList.remove('active-dropdown-menu');
    dropdownMenu3.classList.remove('active-dropdown-menu');


}

function showDropDown3(event){
    event.preventDefault(); // não fazer a função de link de redirecionamento
    dropdownMenu3.classList.toggle('active-dropdown-menu');
    dropdownMenu1.classList.remove('active-dropdown-menu');
    dropdownMenu2.classList.remove('active-dropdown-menu');
}

navItem1.addEventListener('click', showDropDown1)
navItem2.addEventListener('click', showDropDown2)
navItem3.addEventListener('click', showDropDown3)

dropdownMenu1.addEventListener('mouseleave', removeDropDown1);
dropdownMenu2.addEventListener('mouseleave', removeDropDown2);
dropdownMenu3.addEventListener('mouseleave', removeDropDown3);


function removeDropDown1(){
    dropdownMenu1.classList.remove('active-dropdown-menu');
}


function removeDropDown2(){
    dropdownMenu2.classList.remove('active-dropdown-menu');
}


function removeDropDown3(){
    dropdownMenu3.classList.remove('active-dropdown-menu');
}




const bx = document.getElementById('bx')
const menuMobile = document.getElementById('menu-mobile')


bx.addEventListener('click', activeBx)



function activeBx(){
    bx.classList.toggle('active-bx');
    menuMobile.classList.toggle('active-menu-mobile');

}