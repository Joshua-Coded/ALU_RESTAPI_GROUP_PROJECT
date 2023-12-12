const form = document.querySelector('#searchForm');
const btn = document.querySelector('.search-btn')

document.addEventListener('DOMContentLoaded', async function () {
    console.log('Hello')
    const config = { params: { q: "heist" } };
    console.log(config)
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    makeImages(res.data)
}, false);

form.addEventListener('click', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } };
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);


    makeImages(res.data)

    form.elements.query.value = '';


})

btn.addEventListener('click', function (e) {
    var elements = document.querySelectorAll('.movie_image');
    elements.forEach(function (element) {
        element.remove();
    });

})



const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            img.classList.add('movie_image')
            document.body.append(img);
        }
    }
}