function getPreview() {    
    $.ajax({
        url: 'https://itunes.apple.com/search',
        jsonp: "callback",
        dataType: "jsonp",

        data: {
            term: document.getElementById("query").value,
            entity: "song",
        },

        success: function(data) {
            var source = document.getElementById("source");
            source.src = data.results[0].previewUrl;
            
            var title = data.results[0].trackName;
            var artist = data.results[0].artistName;

            document.getElementById("result").innerHTML = 
                "<p>Closest match found was <b>" + title + "</b> by <b>" + artist + "</b></p>";

            source.controls = true;
        }
    });
}