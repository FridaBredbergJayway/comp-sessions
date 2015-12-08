/**
 * Created by frida on 11/27/15.
 */
var CategoryListView = Backbone.View.extend({
    el: '#category-list',
    model: categoryList,
    initialize: function() {
        categoryList.bind('add', this.add, this);
        categoryList.fetch(); // Loads list from local storage
        var view = new views.CategoryView({model: models.Category});
        $('#list').append(view.render().el);
    },
    render: function () {
    return this;
    }
});

var categoryListView = new CategoryListView();

