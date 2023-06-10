//appear
const appear = document.querySelector('.appear'); 
const cb = function(entries){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('inview');
    }else{
      entry.target.classList.remove('inview');
    }
  });
}
const io = new IntersectionObserver(cb);
io.observe(appear);




const items = document.querySelectorAll('.appear2');

const active = function(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
        entry.target.classList.add('inview2'); 
        }else{
            entry.target.classList.remove('inview2'); 
        }
    });
}
const io2 = new IntersectionObserver(active);
 for(let i=0; i < items.length; i++){
    io2.observe(items[i]);
 }


const appear3 = document.querySelector('.appear3'); 
const cb3 = function(entries){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('inview');
      entry.unobserve(entry.target)
    }
  });
}
const io3 = new IntersectionObserver(active);
io3.observe(appear3);
///appear

    

///scroll top
    window.onbeforeunload = function () {
        if (window.scrollTo) window.scrollTo(0, 0);
        if (history && history.scrollRestoration) history.scrollRestoration = "manual";
    };


    export function setupCounter(element) {
        let counter = 0
        const setCounter = (count) => {
          counter = count
          element.innerHTML = `count is ${counter}`
        }
        element.addEventListener('click', () => setCounter(counter + 1))
        setCounter(0)
      }

      ///lenis

      
      