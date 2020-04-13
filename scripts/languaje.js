var language;

function init() {
    setLanguage();
}

function setTextOnHtml() {
    setText('nav-about','about', true);
    setText('nav-portfolio','portfolio', true);
    setText('nav-contact','contact', true);
    setText('hello-text','hello', true);
    setText('developer-text','developer', true);
    setText('awesome-text','awesome', false);
    setText('technologies-text','technoligies', true);
    setText('methodologies-text','methodologies', true);
    setText('construction-text','construction', false);
    setText('touch-text','touch', false);
    setText('talk-text','talk', false);
    setText('contact-button','contactButton', false);
    setText('loading-text','loading', true);
}

function setText(id, atribute, upercase){
    const text = upercase ? language[atribute].toUpperCase() : language[atribute];
    document.querySelector('#'+id).innerHTML = text;
}

function setLanguageFromMenu(lenguage) {
    const lang = lenguage;
    document.querySelector('.language-selector').style.height = 0;
    document.querySelector('.language-content').style.opacity = 0;
    setLanguageReference(lang);
    setTextOnHtml();
}

function setLanguage(){
    const lang = document.querySelector("#lang").value;
    setLanguageReference(lang);
    setTextOnHtml();
}

function setLanguageReference(str) {
    if(str === 'es'){
        language = spanish;
    }
    if(str === 'en'){
        language = english;
    }
}

init();

