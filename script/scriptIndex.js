/**
 * Created by JUANPABLO on 11/10/2015.
 */

// Create the store for later use
var store = new dojo.data.ItemFileReadStore({
    contentType: 'application/json'
    ,clearOnClose: true
    ,urlPreventCache: true
    ,url: "http://192.168.1.65:9080/RAD8JAX-RSWeb/jaxrs/customers"
});


    store.fetch({
        onItem: function(item, request) {
            alert('I fire after each returned json item')
        }
        ,onComplete: function(items, findResult) {
            alert('I fire when the data has loaded completely.');
        }
        ,onError: function(error, request) {
            alert('I fire when an error occurs');
        }
    });