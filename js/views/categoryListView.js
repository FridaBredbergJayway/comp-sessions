/**
 * Created by frida on 11/27/15.
 */
views.CategoryListView = Backbone.View.extend({
    collection: null,
    el: '#category-list',
    initialize: function() {
        var self = this;
        this.collection.on("change update", this.render, this);
        this.collection.fetch().done(function() {
            self.render();
        });
    },
    render: function () {
        var self = this;
        this.$el.append(view.render().el);
        console.log(this.collection);
        this.collection.each(function(model){
            console.log(model);
            var view = new views.CategoryView();
            self.$el.append(view.render().el);
        });
        return this;
    }
});

var categoryListView = new views.CategoryListView({collection: categoryList});

