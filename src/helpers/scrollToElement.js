export const scrollToElement = (type, node) => {
    if(type === 'window' && node === null) {
        let timeout = setTimeout(() => {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth"
            });
            clearTimeout(timeout);
        }, 200);
    }
    else node.scrollIntoView({behavior: 'smooth'});
}