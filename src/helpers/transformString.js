export const transformString = (type, string) => {
    let symbols = string.split("");
    if(type === 'divide') {
        let middle = Math.ceil(symbols.length / 1.25);
        let afterMiddle = [];
        let middleArray = symbols.filter((elem, index) => {
          if(index < middle) return elem;
          else afterMiddle.push(elem);
        })
        return {
          type: "Divide",
          tag: "<br/>",
          middleString: middleArray.join(""),
          afterMiddleString: afterMiddle.join("")
        }
    }
}