    function googleTranslateElementInit() {
        new google.translate.TranslateElement(
        {
            pageLanguage: 'pt',        // idioma original da página
            includedLanguages: 'en,es', // idiomas permitidos (ex: inglês e espanhol)
            autoDisplay: true          // força tradução automática
        },
        'google_translate_element'
        );
    }