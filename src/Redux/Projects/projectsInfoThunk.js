import { setProjectsInfo } from "./projectsInfoSlice";

export const projectsInfoThunk = async (dispatch) => {
    try {
        const response = await fetch('https://gist.githubusercontent.com/AliakseiMalinouski/485503c44c1039e01e0450aef957babb/raw/8b40020bd3fbace0d43a679ae83fe99b54129531/PortfolioProjectsInfo');
        if(response.ok) {
            const data = await response.json();
            dispatch(setProjectsInfo(data));
        }
    }
    catch {
        alert("Error with download");
    }
}