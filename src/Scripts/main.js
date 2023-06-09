
    
///reveal
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Si el elemento está en pantalla, agregamos la clase CSS para iniciar la animación
                    entry.target.classList.add("reveal--animate");
                    // Detenemos la observación para este elemento
                    observer.unobserve(entry.target);
                }
            });
        },
        { once: true }
    );

    // Observamos los elementos
    revealElements.forEach((element) => {
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

      
      