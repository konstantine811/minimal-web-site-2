document.addEventListener('DOMContentLoaded', () => {
    // cursor move
    document.addEventListener('mousemove', (e) => {
        gsap.to('.cursor-sm', {
            x: e.pageX - 4,
            y: e.pageY - 4,
            ease: 'expo.out',
            duration: 0.2
        })

        gsap.to('.cursor-lg', {
            x: e.pageX - 15,
            y: e.pageY - 15,
            ease: 'expo.out',
            duration: 1.5
        })
    })

    // on hover elements

    const hoverableEl = document.getElementsByClassName('hoverable');
    
    for(let hoverable of hoverableEl) {
        hoverable.addEventListener('mouseenter', (e) => {
            gsap.to('.cursor-lg', {
                scale: 2,
                ease: "back.out(1.7)",
                duration: 0.6,
                overwrite: true
            })
        })

        hoverable.addEventListener('mouseleave', (e) => {
            gsap.to('.cursor-lg', {
                scale: 1,
                ease: "expo.out",
                duration: 0.4,
                overwrite: true
            })
        })
    }

    // text animations
    const textAnimEl = document.getElementsByClassName('text-anim');
    for(textEl of textAnimEl) {
        textEl.innerHTML = textEl.textContent.replace(/\S/g, '<span class="text-letter-anim">$&</span>');
    }


    function fadeIn(className, y, s) {
        gsap.from(className, {
            y: y,
            opacity: 0,
            duration: 2,
            filter: "blur(5px)",
            ease: 'circ.out',
            stagger: s
        });
    }

    fadeIn('.text-letter-anim', 100, 0.05);
    fadeIn('.item-anim', 40, 0.3)
})