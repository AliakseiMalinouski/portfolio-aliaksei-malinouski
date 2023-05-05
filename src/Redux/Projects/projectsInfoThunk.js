import { setProjectsInfo } from "./projectsInfoSlice";

export const projectsInfoThunk = async (dispatch) => {
    try {
        const response = await fetch('https://gist.githubusercontent.com/AliakseiMalinouski/485503c44c1039e01e0450aef957babb/raw/1105821c8cc1d3de7ec118d7a172fcfe32d52c54/PortfolioProjectsInfo');
        if(response.ok) {
            const data = await response.json();
            dispatch(setProjectsInfo(data));
        }
    }
    catch {
        alert("Error with download");
    }
}