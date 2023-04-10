var section = document.querySelector('section');
var textareaHTML = document.querySelector('.playable-html');
var reset = document.getElementById('reset');
var showResult = document.getElementById('show-result');
var codeResult = 
	'<ol>\n'+
        '<li>Je me lève</li>\n'+
        '<li>Je fais ma toilette du matin</li>\n'+
        '<li>Je sors dehors faire du footing</li>\n'+
        '<li>Je prends une douche</li>\n'+
        '<li>Je vais au travail</li>\n'+
      '</ol>'
;
var htmlCodeInit = 
    
    'Je me lève\n'+
    'Je fais ma toilette du matin\n'+
    'Je sors dehors faire du footing\n'+
    'Je prends une douche\n'+
    'Je vais au travail'
;
textareaHTML.value = htmlCodeInit;

function fillCode() {
    section.innerHTML = textareaHTML.value;
}

reset.addEventListener('click', function () {
    textareaHTML.value = htmlCodeInit;
    fillCode();
});
showResult.addEventListener('click', function () {
    textareaHTML.value = codeResult;
    fillCode();
});

textareaHTML.addEventListener('input', fillCode);
window.addEventListener('load', fillCode);