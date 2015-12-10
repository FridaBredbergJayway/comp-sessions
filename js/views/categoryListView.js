/**
 * Created by frida on 11/27/15.
 */
views.CategoryListView = Backbone.View.extend({
    collection: null,
    el: '#category-list',
    initialize: function () {
        var self = this;
        this.collection.on('add', this.render, this);
        this.collection.on('change:marked', this.filter, this);
        /*this.collection.fetch({
         success: function() {
         console.log('fetch done ', self.collection);
         }
         });*/
        this.render();
    },
    render: function () {
        var self = this;
        this.$el.empty();
        this.collection.each(function (model) {
            var view = new views.CategoryView({model: model});
            self.$el.append(view.render().el);
        });
        return this;
    },
    filter: function () {
        console.log('changed mark');
        var markedCategories = this.collection.where({marked: true});
        if (markedCategories.length === 0) {
            this.render();
        } else this.showFiltered(markedCategories);
    },
    showFiltered: function (array) {
        for (var i = 0; i < array.length; i += 1) {
            var category = array[i].get('category');
            var sessions = sessionList.where({category: category});
            for (var j = 0; j < sessions.length; j += 1) {
                var model = sessions[j];
                console.log(model);
                model.set('selected', true);
            }
        }
    }
});

var categoryListView = new views.CategoryListView({collection: categoryList});

