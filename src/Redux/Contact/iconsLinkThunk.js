import { setIconsLink, setLoadStateIconsLinks } from "./iconsLinkSlice";

export const iconsLinkThunk = (dispatch) => {
    dispatch(setLoadStateIconsLinks(true));
    fetch("https://gist.githubusercontent.com/AliakseiMalinouski/d713d06cd1329953566dd86e4c23af1c/raw/ea84dd2b4f64a406721d1281856243e799cd0a47/iconsLinkPortfolio")
    .then(r => r.ok ? r.json() : alert(`Error with download`))
    .then(d => {
        let result = {
            developer: {},
            personal: {},
        }
        for(let elem of d) {
            if(elem.type === 'developer-social-networks') {
                result.developer = elem;
            }
            else {
                result.personal = elem;
            }
        }
        return result;
    })
    .then(result => dispatch(setIconsLink(result)))
    .catch(e => alert(`Error with download: ${e}`))
}