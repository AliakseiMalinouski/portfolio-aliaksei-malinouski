import { setProjectsInfo } from "./projectsInfoSlice";

export const projectsInfoThunk = async (dispatch) => {
    try {
        const response = await fetch('https://gist.githubusercontent.com/AliakseiMalinouski/485503c44c1039e01e0450aef957babb/raw/efe308f8759801a3f8159d63f23d5a54c7fec699/PortfolioProjectsInfo');
        if(response.ok) {
            const data = await response.json();
            dispatch(setProjectsInfo(data));
        }
    }
    catch {
        alert("Error with download");
    }
}