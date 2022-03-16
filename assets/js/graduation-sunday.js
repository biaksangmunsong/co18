const code = '<a href="assets/photos/graduation-sunday/NUMBER.JPG" target="_blank" class="photo"><img src="assets/photos/graduation-sunday/NUMBERthumb.JPG" alt="Bcd Pearsonmun Graduation Sunday 2018"></a>';
const main = document.getElementsByTagName("main")[0];
const loading = document.getElementById("loading");
const loadMorePhotos = () => {
    setTimeout(() => {
        for (let i = 25; i < 49; i++){
            main.innerHTML += code.split("NUMBER").join(i);
        }
        loading.remove();
    }, 2000);
}

loadMorePhotos();