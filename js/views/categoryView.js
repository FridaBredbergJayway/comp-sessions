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
        'click strong' : 'mark'
    },
    mark: function() {
        var cat = this.model.get('category');
        categoryList.set({category: cat, marked: !this.model.get('marked')});
    }
});
var categoryView = new views.CategoryView();
