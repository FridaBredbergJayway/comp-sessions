/**
 * Created by frida on 11/27/15.
 */
var collections = {};

collections.CategoryList = Backbone.Collection.extend({
    url: '#',
    model: models.Category,
    localStorage: new Store('categories-list'),
    initialize: function () {
        console.log('initializing...');
    },
    render: function() {
        return this;
    }
});

var categoryList = new collections.CategoryList([{category: 'Android'}, {category: 'iOS'}, {category: 'Web'}, {category: 'Cloud'}]);
console.log(categoryList.toJSON());