var splide = new Splide( '.splide', {
    gap: '3rem',
    perMove: 1,
    rewind: true,
    width : '100%',
    // padding: '3rem',
    pagination: false,
    snap: true,
    breakpoints: {
        640: {
            perMove: 1,
        },
        480: {
            perMove: 1,
             
        }
    }
});
var bar = splide.root.querySelector( '.my-carousel-progress-bar' );

// Updates the bar width whenever the carousel moves:
splide.on( 'mounted move', function () {
  var end  = splide.Components.Controller.getEnd() + 1;
  var rate = Math.min( ( splide.index + 1 ) / end, 1 );
  bar.style.width = String( 100 * rate ) + '%';
} );

splide.mount();

let hueta = document.querySelectorAll('.splide__arrow');
hueta = Array.from(hueta);

hueta.forEach(element => {
    element.style.width = "40px";
    element.style.height = "40px";
    element.removeChild(element.firstElementChild);
})