
const $form = $('#gif-form');

function makeGif(res){
    let numResults = res.data.length;
    if(numResults) {
        let randomIdx = Math.floor(Math.random() * numResults);
        let $newDiv = $('<div>');
        let $newGif = $('<img>', {src:res.data[randomIdx].images.original.url });
        $newDiv.append($newGif);
        $('#giphyContainer').append($newDiv);
    }
}

$form.on("submit", async function(e){
    e.preventDefault();
    const  $input = $('#gif-input');
    let $searchTerm = $input.val();
    const res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=gk14FehMRpWhAjegNafQOGG5jWwITo5x&q=${$searchTerm}&limit=25&offset=0&rating=g&lang=en`);
    makeGif(res.data)
});

$('#clear').on('click', function(){
    $('#giphyContainer').empty();
})
