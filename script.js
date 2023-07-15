let afficherOnglet = function(a){
    let li = a.parentNode
    let div = document.querySelector('.tab-container');
    let divTabContainer = document.querySelector('.tabs-content')
    let activeTab = divTabContainer.querySelector('.tab-content.active')
    let aAfficher = divTabContainer.querySelector(a.getAttribute('href'))

    if(li.classList.contains('active')){
        return false
    }
    div.querySelector('.tabs .active').classList.remove('active')
    li.classList.add('active')
    divTabContainer.querySelector('.tab-content.active').classList.remove('active');
    divTabContainer.querySelector(a.getAttribute('href')).classList.add('active');
    activeTab.classList.add('fade')
    activeTab.classList.remove('in')

}

//partie ajouté:
document.addEventListener('DOMContentLoaded', function(){
    let tabs = document.querySelectorAll('.tabs a') 
  /*  
    submitBtn.addEventListener('click', function(e){
        let form = document.getElementById('form')
        if(!form.checkValidity()){
            e.preventDefault
        }
        function openPopup(){
            popup.classList.add("open-popup");
        }
    })
*/
    for(let i =0; i<tabs.length; i++){
       tabs[i].addEventListener('click', function(e){
            e.preventDefault(); //empeche le comportement par defaut u lien
            afficherOnglet(this)
       }) 
    }
})
//popup
let popup = document.getElementById('popup')


function blockAccess(event){
    if(event.keyCode == 123 || (event.ctrlKey && event.shiftKey && event.keyCode == 73)){
        event.preventDefault();
    }
}

document.addEventListener('keydown', blockAccess);
document.addEventListener('contextmenu', event => event.preventDefault());