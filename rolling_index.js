document.addEventListener('DOMContentLoaded', () => {

    const upBtn = document.querySelector('.top-btn');
    const bodyHeight = document.body.scrollHeight;

    console.log(bodyHeight);
    document.addEventListener('scroll', () => {
        if (window.scrollY > bodyHeight / 10) {
            upBtn.classList.add('top-btn-show');
        } else {
            upBtn.classList.remove('top-btn-show');
        }
    })


    upBtn.addEventListener('click', () => {
        scrollIntoView('#main');
    })

    function scrollIntoView(selector) {
        const scrollTo = document.querySelector(selector);
        scrollTo.scrollIntoView({
            behavior: 'smooth'
        });
    }

    ////////////////////////////////////////////////////////////////////////////////////////////



    let main = document.querySelector('#main');
    // let sec1 = document.querySelector('#sec01');
    mainHeight = window.scrollY;
    // sec1Height = window.outerHeight;
    console.log(mainHeight);
    // console.log(sec1Height);

    let circle = document.querySelectorAll('.skill_circle li')

    console.log(circle);

    window.addEventListener('scroll', () => {

        if (scrollY >= bodyHeight / 6) {
            for (i = 0; i < circle.length; i++) {
                circle[i].classList.add('on');
            }
        } else {
            for (i = 0; i < circle.length; i++) {
                circle[i].classList.remove('on');
            }
        }

    });

    window.addEventListener('resize', () => {
        bodyHeight = document.body.scrollHeight;
        main = document.querySelector('#main');
        mainHeight = window.scrollY;
        console.log(mainHeight);


    });

    ////////////////////////////////////////////////////////////////////////////////////////////


    let rollerBox = document.querySelector('#rolling');
    let roller = document.querySelector('.expertise');
    let clone = roller.cloneNode(true);

    let expertise = document.querySelector('.expertise_warp');
    let expertiseWidth = roller.offsetWidth + 'px'

    rollerBox.appendChild(clone);
    // rollerBox.prependChild(clone);

    roller.style.left = '0px';
    clone.style.left = expertiseWidth;
    // console.log(expertiseWidth)
    roller.classList.add('original');
    clone.classList.add('clone');



    window.addEventListener('resize', () => {

        expertiseWidth = roller.offsetWidth + 'px'
        roller.style.left = '0px';
        clone.style.left = expertiseWidth;

    });



}); //end