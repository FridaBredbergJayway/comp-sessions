/**
 * Created by frida on 11/27/15.
 */

views.CategoryView = Backbone.View.extend({
    model: models.Category,
    el: '.cat-item',
    template: _.template($('#category-template').html()),
    initialize: function () {
        this.model.bind('change', this.render, this); //re-render on change
    },
    render: function () {
        console.log(this.model);
        this.$el.html(this.template({categories: categoryList}));
        return this;
    }
});

var categoryView = new views.CategoryView();
