$( "#legislators" ).on( "click", function( event ) {
    legislators.load()
})

$( "#districts" ).on( "click", function( event ) {
    districts.load()
})

$("#nominations").on("click", function(event) {
    nominations.load()
})

// TODO: add loaders for more features
