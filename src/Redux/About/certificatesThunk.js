import { setCertificates } from "./certificatesSlice";


export const certificatesThunk = async (dispatch) => {
    try {
        const rs = await fetch("https://gist.githubusercontent.com/AliakseiMalinouski/a284a1bc65a86e9e698933b5a2cbaf8b/raw/189164c6f048d16a53837fd5ac612e8d2bd95c06/CertificatesPortfilio")
        if(rs.ok) {
            const data = await rs.json();
            dispatch(setCertificates(data));
        }
        else {
            alert('Error with download');
        }
    }
    catch {
        alert('Error with download');   
    }
}