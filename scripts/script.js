window.onload = function () {

  msieversion();

  function msieversion() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
      document.querySelector('.text-loader').innerHTML = 'Please use Chrome or Firefox'
    }
    else {
      init();
    }

    return false;
  }

  function init() {
    document.querySelector('.main-container').style.opacity = 1;
    document.querySelector('.loader').style.height = 0;
    document.querySelector('.text-loader').style.opacity = 0;
    startTechnologies();
    startStandars();
    startProjects();
  }

};

function startTechnologies() {
  let container = document.querySelector('.technologies-section');
  technologiesList.forEach(function (t) {
    container.innerHTML +=
        '<div class="technologie">' +
        '   <div class="image"><img src="img/technologies/' + t.img + '.png" alt=""></div>' +
        '   <div class="techno-text">' + t.name + '</div>' +
        '</div>'
  });
}

function startStandars() {
  let container = document.querySelector('.standars-section');
  standarsList.forEach(function (t) {
    container.innerHTML +=
        '<div class="technologie">' +
        '   <div class="image"><img src="img/standars/' + t.img + '.png" alt=""></div>' +
        '   <div class="techno-text">' + t.name + '</div>' +
        '</div>'
  });
}

function startProjects() {
  let container = document.querySelector('#projects-section');
  projectsList.forEach(function (p) {
    container.innerHTML +=
        '<div class="project" style=\'background-image: url("' + p.image + '") \'>' +
        // '   <div class="image"><img src="' + p.image + '" alt=""></div>' +
        '   <div class="links">' +
        '     <a class="proj-link" href="' + p.demo + '" target="_blank"><i class="material-icons md-18">link</i></a>' +
        '     <a class="proj-link" href="' + p.repo + '" target="_blank"><i class="material-icons md-18">build</i></a>' +
        '   </div>' +
        '   <div class="project-title">' + p.name + '</div>' +
        '</div>'
  });
}

