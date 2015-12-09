/**
 * Created by frida on 11/27/15.
 */

views.CategoryView = Backbone.View.extend({
    el: '.cat-item',
    template: _.template($('#category-template').html()),
    initialize: function () {
        this.collection.on("change update", this.render, this);
    },
    render: function () {
        console.log(this.model);
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});

var categoryView = new views.CategoryView();
