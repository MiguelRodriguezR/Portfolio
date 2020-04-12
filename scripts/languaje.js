var defaultLanguage = 'es';
var language;

function init() {
    setLanguage(defaultLanguage);
}

function setTextOnHtml() {
    setText('nav-about','about', true);
    setText('nav-portfolio','portfolio', true);
    setText('nav-contact','contact', true);
    setText('hello-text','hello', true);
    setText('developer-text','developer', true);
    setText('awesome-text','awesome', false);
}

function setText(id, atribute, upercase){
    const text = upercase ? language[atribute].toUpperCase() : language[atribute];
    document.querySelector('#'+id).innerHTML = text;
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

