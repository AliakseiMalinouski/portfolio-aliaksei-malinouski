import { setProjectsInfo } from "./projectsInfoSlice";

export const projectsInfoThunk = async (dispatch) => {
    try {
        const response = await fetch('https://gist.githubusercontent.com/AliakseiMalinouski/485503c44c1039e01e0450aef957babb/raw/47407a21455d0c816a3710647c8e5409bada0124/PortfolioProjectsInfo');
        if(response.ok) {
            const data = await response.json();
            dispatch(setProjectsInfo(data));
        }
    }
    catch {
        alert("Error with download");
    }
}