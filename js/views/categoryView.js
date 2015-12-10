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
        this.model.set({marked: !this.model.get('marked')});
        console.log(this.model);
    }
});
var categoryView = new views.CategoryView();
