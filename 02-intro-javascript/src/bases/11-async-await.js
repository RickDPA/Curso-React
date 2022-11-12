
/*
const getImagen = async() => {
    return "https://asdasdassdas.com";
}

getImagen().then(console.log);
*/

const getImagen = async() => {
    
    try {
        const apiKey = "frrzmNjMKyJpuvlCTQjrYgaQKUtjYqzh";
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
    
        const {url} = data.images.original;
    
        const img = document.createElement("img");
        img.src = url;
    
        document.body.append(img);
    }catch {
        //Manejo del error
    }

}

getImagen();
    