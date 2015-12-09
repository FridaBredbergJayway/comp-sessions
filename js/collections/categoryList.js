/**
 * Created by frida on 11/27/15.
 */
var collections = {};

collections.CategoryList = Backbone.Collection.extend({
    url: '#',
    model: models.Category,
    localStorage: new Backbone.LocalStorage('CategoryList'),
    initialize: function () {
        console.log('initializing...');
    },
    render: function() {
        return this;
    }
});

var categoryList = new collections.CategoryList([{category: 'Android'}, {category: 'iOS'}, {category: 'Web'}, {category: 'Cloud'}]);
console.log(categoryList);
console.log(this.localStorage);