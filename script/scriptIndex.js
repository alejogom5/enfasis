/**
 * Created by JUANPABLO on 11/10/2015.
 */

dojo.xhrGet({
    url: "https://restcountries.eu/rest/v1/all",
    handleAs: "json",
    load: function(obj) {
        var countryObj = {
            name: obj.name,
            capital: obj.capital,
            alpha2Code: obj.alpha2Code
        };
        /* here, obj will already be a JS object deserialized from the JSON response */

        require(["dojo/dom-construct"], function(domConstruct){
            // create a div node
            var node = domConstruct.create("div");
        });





    },
    error: function(err) {
        /* this will execute if the response couldn't be converted to a JS object,
         or if the request was unsuccessful altogether. */
    }
});

