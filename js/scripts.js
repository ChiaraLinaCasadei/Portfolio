
//BLOCK SCROLL UNTIL ANIMATION ENDS
const html = document.querySelector('HTML');

const arrowScroll = document.getElementById('arrowContainer');
let animationsFinished = 0; //deben ser 3 animaciones terminadas, una por cada arrow
const AnimationListener = () => {
    animationsFinished++;
    if(animationsFinished == 3){
        html.classList.add('release-scroll');
    }
}
arrowScroll.addEventListener("animationend", AnimationListener, false);


//LAZY LOADING

//guardo todos los elementos que quiera que cargue de esta forma
const lazyElements = document.querySelectorAll('.lazy');

console.log(lazyElements);

//que ocurrirá cuando el elemento está en el campo de vision?
const callback = (entries) => {
    //recorro todos esos objetos que voy a observar
    entries.forEach(entry => {
        if(entry.isIntersecting){ //si el objeto entra en nuestra vision
            
            entry.target.classList.add('lazyAnimateIn');
            entry.target.classList.remove('lazyAnimateOut');
        }
        else{
            entry.target.classList.add('lazyAnimateOut');
            entry.target.classList.remove('lazyAnimateIn');
            
        }
    });
}
const options = {
    threshold: 0.45 //cuando vea un 45% de la imagen, la detecta como dentro del rango de vision
}
const observer = new IntersectionObserver(callback, options);

lazyElements.forEach(element => observer.observe(element));

//HIDE AND SHOW INFO IN CARDS

/*todas las cartas estan dentro de un contenedor, por lo cual la escucha se le agrega al elemento padre, 
y luego vemos en cual de sus hijos se disparó el evento*/

const cardContainer = document.getElementById('project-container');

cardContainer.addEventListener('click', (element) => {
    //busco si lo que se clickeó fue un botón para mostrar
    if(element.target.classList.contains('show-info-btn')){
        //le agrego la clase .show-info a al .info en esa tarjeta (.nextElementSibling), y si tiene la clase hide info se la saco
       
        element.target.nextElementSibling.classList.remove('hide-info');
        element.target.nextElementSibling.classList.add('show-info');


    }
    //o uno para ocultar
    else if (element.target.classList.contains('hide-info-btn')){
        //le agrego la clase .hide-info al .info en esa tarjeta (.parentElement), y si tiene la clase show info se la saco
        
        element.target.parentElement.classList.remove('show-info');
        element.target.parentElement.classList.add('hide-info');
    }
})


//FLOATING MENU 

const menuBtn = document.getElementById('menu');
        const iconWrapper = document.getElementById('items-wrapper');

        menuBtn.addEventListener('click', ()=> {

            console.log("presionaron el menu");
        
            if(menuBtn.classList.contains('rotateMenuOpen')){
                menuBtn.classList.remove('rotateMenuOpen');
                menuBtn.classList.add('rotateMenuClose');
                iconWrapper.classList.remove('showMenu');
                iconWrapper.classList.add('hideMenu');

            }
            else if(menuBtn.classList.contains('rotateMenuClose')){
                menuBtn.classList.remove('rotateMenuClose');
                menuBtn.classList.add('rotateMenuOpen');
                iconWrapper.classList.remove('hideMenu');
                iconWrapper.classList.add('showMenu');
            }
            //este es el caso del inicio, va a lo ultimo porque en el resto de los casos siempre tendrá la clase 'menu'
            else if(menuBtn.classList.contains('menu')){
                menuBtn.classList.add('rotateMenuOpen');
                iconWrapper.classList.add('showMenu');

            }
        })



window.addEventListener("scroll", () => {
        
    let navArea = document.getElementById("navArea");

    navArea.classList.add("is-sticky", "lazyAnimateIn");
    
}); 

window.addEventListener("touchmove", () => {

    console.log("Scrolleaste con el dedo");

    let navArea = document.getElementById("navArea");

    navArea.classList.add("is-sticky", "lazyAnimateIn");
})