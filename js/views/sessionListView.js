views.SessionListView = Backbone.View.extend({
    collection: null,
    el: '#list',
    initialize: function () {
        var self = this;
        this.collection.on('add', this.render, this);
        this.collection.on('change', this.filter, this)
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
        this.collection.each(function(model){
            var view = new views.SessionView({model: model});
            self.$el.append(view.render().el);
        });
        return this;
    },

    filter: function() {
       console.log('filter');
    }


});

var sessionListView = new views.SessionListView({collection: sessionList});
Backbone.history.start();
