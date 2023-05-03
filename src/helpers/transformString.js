export const transformString = (type, string) => {
    let symbols = string.split("");
    if(type === 'divide') {
        let middle = Math.ceil(symbols.length / 1.25);
        let afterMiddle = [];
        let middleArray = symbols.filter((elem, index) => {
          if(index < middle) return elem;
          else afterMiddle.push(elem);
        });
        return {
          type: "Divide",
          tag: "<br/>",
          middleString: middleArray.join(""),
          afterMiddleString: afterMiddle.join("")
        }
    }
    else if(type === 'language') {
        let currentLanguage = string;
        let languages = {
            "en": {
                language: "english",
                text: "The language has been successfully changed to english"
            },
            "ru": {
                language: "russian",
                text: "Язык успешно был сменён на русский"
            },
            "pl": {
                language: "polish",
                text: "Język został pomyślnie zmieniony na polski"
            }
        }
        for(let language in languages) {
            if(language === currentLanguage) {
                return {
                    type: "language",
                    languageParams: languages[language],
                }
            }
        }
    }
}