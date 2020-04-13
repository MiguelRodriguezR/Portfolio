VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 10,
    speed: 1100,
    transition: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    scale: 1.05,
    glare: true,
    "max-glare": 0.1,

    gyroscope: true,
    gyroscopeMinAngleX: -45,
    gyroscopeMaxAngleX: 45,
    gyroscopeMinAngleY: -45,
    gyroscopeMaxAngleY: 45,
    gyroscopeSamples: 10
})
;

function activeCard(card) {
    let deactive = document.querySelector('.card-active');
    if(deactive){
        deactive.classList.remove("card-active");
        deactive.classList.add("card-deactive");
    } else{
        document.querySelector('#home-card').classList.add("card-deactive");
    }
    let active = document.querySelector('#'+card);
    active.classList.remove("card-hidden");
    active.classList.remove("card-deactive");
    active.classList.add("card-active");
}