/**
 * Created by frida on 11/27/15.
 */
var CategoryListView = Backbone.View.extend({
    el: '#category-list',
    model: categoryList,
    initialize: function() {
        categoryList.fetch(); // Loads list from local storage
    }
});

var categoryListView = new CategoryListView();

