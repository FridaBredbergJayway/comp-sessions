/**
 * Created by frida on 11/27/15.
 */
views.CategoryListView = Backbone.View.extend({
    collection: null,
    el: '#category-list',
    initialize: function () {
        var self = this;
        this.collection.on('add', this.render, this);
        this.collection.on('change:marked', this.select, this);
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
        var uniqueCategories = _.uniq(this.collection.pluck('category'));
        _.each(uniqueCategories, function(element) {
            var item = self.collection.findWhere({category: element});
            sessionListFiltered.add(item);
        });
        console.log(sessionListFiltered);
        sessionListFiltered.forEach(function (model) {
            var view = new views.CategoryView({model: model});
            self.$el.append(view.render().el);
        });
        return this;
    },
    select: function () {
        console.log(this.model);

    }
});


