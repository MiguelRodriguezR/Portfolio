VanillaTilt.init(document.querySelector(".card"), {
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
    gyroscopeMaxAngleY: 45
})
;