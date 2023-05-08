import { setStack } from "./techStackSlice";


export const techStackThunk = (dispatch) => {
    fetch('https://gist.githubusercontent.com/AliakseiMalinouski/64cdf7973b97328bea9f3d08ff8369aa/raw/33c0856de1051c4c44c9b52bcc37af133f3fcaae/TechStackPortfolio')
    .then(r => r.ok ? r.json() : alert("Error with download"))
    .then(d => dispatch(setStack(d)))
    .catch(e => alert(`${e}`))
}