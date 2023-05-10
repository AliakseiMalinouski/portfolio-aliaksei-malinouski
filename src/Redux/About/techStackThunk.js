import { setStack } from "./techStackSlice";


export const techStackThunk = (dispatch) => {
    fetch('https://gist.githubusercontent.com/AliakseiMalinouski/64cdf7973b97328bea9f3d08ff8369aa/raw/08e4c242208beeb60bdf45dba496ae9883651d68/TechStackPortfolio')
    .then(r => r.ok ? r.json() : alert("Error with download"))
    .then(d => dispatch(setStack(d)))
    .catch(e => alert(`${e}`))
}