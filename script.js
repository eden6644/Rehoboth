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
    
    for(let i =0; i<tabs.length; i++){
       tabs[i].addEventListener('click', function(e){
            e.preventDefault(); //empeche le comportement par defaut u lien
            afficherOnglet(this)
       }) 
    }
})
// fin partie ajouté

/*ancienne partie

let tabs = document.querySelectorAll('.tabs a')
for(let i = 0; i<tabs.length; i++){
    tabs[i].addEventListener('click', function(e){
        afficherOnglet(this)                
                //retire la classe acive sur lecontenu actif
        
        //code à concerver
        //divTabContainer.querySelector('.tab-content.active').classList.remove('active');
        
        //ajoute la classe active sur le contenu
        
        //code à concerver
        //divTabContainer.querySelector(this.getAttribute('href')).classList.add('active');
        
        /*
        console.log("active ", activeTab);
        activeTab.classList.add('fade')
        activeTab.classList.remove('in')

        activeTab.addEventListener('transitionend', function(){
            this.classList.remove('fade')
            this.classList.remove('active')
            aAfficher.classList.add('active')
            aAfficher.classList.add('fade')
            aAfficher.classList.add('in')
        })
        
        //ajout de la classe fade sur l'element actif
        //  à la fin de l'animation, 
            // on retire la classe fade et actif
            //on ajoute la classe active et fade à l'element à afficher
            //on ajoute la classe in
    })
}
*/