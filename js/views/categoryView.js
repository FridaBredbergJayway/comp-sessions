/**
 * Created by frida on 11/27/15.
 */

views.CategoryView = Backbone.View.extend({
    el: '.cat-item',
    template: _.template($('#category-template').html()),
    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});
var categoryView = new views.CategoryView();
