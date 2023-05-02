import { setNavLinks } from "./navLinksSlice";

export const navLinksThunk = (dispatch) => {
    fetch("https://gist.githubusercontent.com/AliakseiMalinouski/93e1a56c1f58beb56ef6fe8e1c33b1de/raw/738d53a41631157dac668510f68929f99397a083/PortfolioLinks"
    )
    .then(response => {
        if(response.ok) {
            return response.json();
        }
        else {
            alert("Error with download");
        }
    })
    .then(data => {
        dispatch(setNavLinks(data));
    })
    .catch(error => {
        alert(`Error with download. Error type is ${error}`)
    })
}