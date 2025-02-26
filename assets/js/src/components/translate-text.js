/**
 * Translate texts
 * PT-BR <--> EN-US
*/

document.addEventListener("DOMContentLoaded", function() {
    const languageButtons = document.querySelectorAll(".languageButton");

    languageButtons.forEach(function(languageButton) {

        languageButton.addEventListener("click", function() {
            
            if (languageButton.innerHTML.includes("In English")) 
            {


            } 
            else 
            {

            }
        });
    });
});

export default translateText;