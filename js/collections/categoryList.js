/**
 * Created by frida on 11/27/15.
 */
var collections = {};

collections.CategoryList = Backbone.Collection.extend({
    url: '#',
    model: models.Category,
    localStorage: new Backbone.LocalStorage('CategoryList'),
    render: function() {
        return this;
    }
});

