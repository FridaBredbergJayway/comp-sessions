/**
 * Created by frida on 11/27/15.
 */

views.CategoryView = Backbone.View.extend({
    template: _.template($('#category-template').html()),
    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },

    events: {
        'click .cat-item' : 'filter'
    },

    filter: function() {
        alert('you clicked me');
    }
});
var categoryView = new views.CategoryView();
