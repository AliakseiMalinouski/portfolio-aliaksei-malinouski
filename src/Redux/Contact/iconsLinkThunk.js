import { setIconsLink, setLoadStateIconsLinks } from "./iconsLinkSlice";

export const iconsLinkThunk = (dispatch) => {
    dispatch(setLoadStateIconsLinks(true));
    fetch("https://gist.githubusercontent.com/AliakseiMalinouski/d713d06cd1329953566dd86e4c23af1c/raw/bce55b23198e3aeb9845aa07d32d9b3fbce45e08/iconsLinkPortfolio")
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