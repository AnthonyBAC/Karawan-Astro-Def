

    const fadeElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fadeInUp");
                observer.unobserve(entry.target);
            }
        });
    });

    fadeElements.forEach((element) => {
        observer.observe(element);
    });


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

      
      