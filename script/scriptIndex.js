/**
 * Created by JUANPABLO on 11/10/2015.
 */
dojo.ready(function() {
    dojo.xhrGet({
        url: "https://restcountries.eu/rest/v1/all",
        handleAs: "json",
        load: function (obj) {
            dojo.forEach(obj, function (index, country) {
                var countryObj = {
                    name: country.name,
                    capital: country.capital,
                    alpha2Code: country.alpha2Code
                };
                /* here, obj will already be a JS object deserialized from the JSON response */

                dojo.place('<label for="field">' + countryObj.name + '</label>');

            })
        }

    });
});

