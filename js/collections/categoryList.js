/**
 * Created by frida on 11/27/15.
 */
var CategoryList = Backbone.Collection.extend({
    url: '#',
    model: Category,
    localStorage: new Store('categories-list'),
    initialize: function () {
        console.log('initializing...');
    }
});


var categoryList = new CategoryList([{category: 'Android'}, {category: 'iOS'}, {category: 'Web'}, {category: 'Cloud'}]);
console.log(categoryList.toJSON());