/**
 * Created by frida on 11/27/15.
 */
'use strict';

views.CategoryListView = Backbone.View.extend({
    collection: null,
    el: '#category-list',
    initialize: function() {
        var self = this;
        this.collection.on('add', this.render, this);
        this.collection.fetch({
            success: function() {
                console.log('fetch done ', self.collection);
            }
        });
        this.render();
    },
    render: function () {
        var self = this;
        this.$el.empty();
        this.collection.each(function(model){
            var view = new views.CategoryView({model: model});
            self.$el.append(view.render().el);
        });
        return this;
    }
});

var categoryListView = new views.CategoryListView({collection: categoryList});

