import { setLanguages } from "./languagesSlice";

export const languagesThunk = (dispatch) => {
    fetch("https://gist.githubusercontent.com/AliakseiMalinouski/6daf252f01c0a8cd6e0109a34c2e6a67/raw/6069efc4a0f7bc42a95e8abf85b3bec565839bb5/LanguagesPortfolio")
    .then(response => {
        if(response.ok) {
            return response.json();
        }
        else {
            alert("Error with download")
        }
    })
    .then(data => {
        dispatch(setLanguages(data));
    })
    .catch(error => {
        alert(`Error with download. ${error}`)
    })
}