/**
 * Created by frida on 11/27/15.
 */

var CategoryView = Backbone.View.extend({
    Model: Category,
    el: '.cat-item',
    template: _.template($('#category-template').html()),
    initialize: function () {
        this.render();
    },
    render: function () {
        console.log('cat :');
        this.$el.html(this.template({categories: categoryList}));
        return this;
    }
});

var categoryView = new CategoryView();
