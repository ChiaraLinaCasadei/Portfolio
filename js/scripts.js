
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


//FLOATING MENU (MOBILE)

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
    let desktopMenuArea = document.getElementById("desktopMenuArea");

    navArea.classList.add("is-sticky", "lazyAnimateIn");
    desktopMenuArea.classList.add("is-sticky", "lazyAnimateIn");
    
}); 

window.addEventListener("touchmove", () => {

    let navArea = document.getElementById("navArea");

    navArea.classList.add("is-sticky", "lazyAnimateIn");
})


//DESKTOP MENU

let homeIcon = document.getElementById('homeIcon');
let aboutMeIcon = document.getElementById('aboutMeIcon');
let portfolioIcon = document.getElementById('portfolioIcon');
let contactMeIcon = document.getElementById('contactIcon');


//guardo todos los elementos que quiera que detecte
const observedTitles = document.getElementsByTagName('SECTION');
//que ocurrirá cuando el elemento está en el campo de vision?
const callback1 = (entries) => {
    //recorro todos esos objetos que voy a observar
    entries.forEach(entry => {
        if(entry.isIntersecting){ //si el objeto entra en nuestra vision
            
            if(entry.target.classList.contains("main-section")){
                homeIcon.classList.add("active");

                aboutMeIcon.classList.remove("active");
                portfolioIcon.classList.remove("active");
                contactMeIcon.classList.remove("active");
                console.log("viste home");
            }
            else if(entry.target.classList.contains("about-me-section")){
                aboutMeIcon.classList.add("active");

                homeIcon.classList.remove("active");
                portfolioIcon.classList.remove("active");
                contactMeIcon.classList.remove("active");
                console.log("viste aboutme");
            }
            else if(entry.target.classList.contains("portfolio-section")){
                portfolioIcon.classList.add("active");

                homeIcon.classList.remove("active");
                aboutMeIcon.classList.remove("active");
                contactMeIcon.classList.remove("active");
                console.log("viste portfolio");
            }
            else if(entry.target.classList.contains("contact-section")){
                contactMeIcon.classList.add("active");

                homeIcon.classList.remove("active");
                aboutMeIcon.classList.remove("active");
                portfolioIcon.classList.remove("active");
                console.log("viste contact");
            }
        }
    });
}
const options1 = {
    threshold: 0.10 //cuando vea un 45% de la imagen, la detecta como dentro del rango de vision
}
const observer1 = new IntersectionObserver(callback1, options1);

for( title of observedTitles){
    observer1.observe(title)
}
