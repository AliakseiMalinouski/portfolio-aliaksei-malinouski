import { setProjectsInfo } from "./projectsInfoSlice";

export const projectsInfoThunk = async (dispatch) => {
    try {
        const response = await fetch('https://gist.githubusercontent.com/AliakseiMalinouski/485503c44c1039e01e0450aef957babb/raw/97fba11a5307bd7073b9d153237dfc3d8c09ecf3/PortfolioProjectsInfo');
        if(response.ok) {
            const data = await response.json();
            dispatch(setProjectsInfo(data));
        }
    }
    catch {
        alert("Error with download");
    }
}