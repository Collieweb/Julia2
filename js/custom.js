const mediaQuery = window.matchMedia('(min-width: 768px)')
// Check if the media query is true
if (mediaQuery.matches) {
 

    let elements = document.getElementsByClassName('slideheight');
    
    
    for (const element of elements) {
    
        element.classList.add('vh-100');
    
      }

      console.log(elements)


      new fullpage('#fullpage', {
        //options here
        autoScrolling:true,
        scrollHorizontally: false,
        onLeave: function(origin, destination, direction, trigger){
            var loading2 = new TimelineMax();
            loading2.fromTo('h2',3.5,{
                autoAlpha:0
            },{
                autoAlpha:1
            })
            .fromTo('p',2.5,{
                autoAlpha:0
            },{
                autoAlpha:1
            },'-=3.5')
            .fromTo('img',2.5,{
                autoAlpha:0
            },{
                autoAlpha:1
            },'-=3.5')
        }
    });


}


document.addEventListener("DOMContentLoaded",function(){
    var loading = new TimelineMax();
    

    
    loading.fromTo(
        ".name-animation",
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 2,
          ease: 'elastic.out(1,0.3)',
          transformOrigin: 'left top',
          stagger: {
            each: 0.1,
            from: 'random'
          }
        }
      );
      
      gsap.fromTo(
        ".job-title",
        {  opacity: 0 },
        { delay: 2, opacity: 1,  duration: 3, }
      );

})