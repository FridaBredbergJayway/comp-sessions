views.SessionListView = Backbone.View.extend({
    collection: null,
    el: '#list',
    initialize: function () {
        this.collection.on("change update add", this.render, this);
        this.collection.fetch({
            success: function() {
                console.log('fetch done ', self.collection);
            }
        });
    },
    render: function () {
        var self = this;
        this.$el.empty();
        console.log(this.collection);
        console.log('sessionlistview: ', this.collection);
        this.collection.each(function(model){
            console.log(model);
            var view = new views.SessionView();
            self.$el.append(view.render().el);
        });
            return this;
    }
});

var sessionListView = new views.SessionListView({collection: sessionList});
Backbone.history.start();
