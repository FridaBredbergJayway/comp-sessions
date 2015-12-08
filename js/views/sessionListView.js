views.SessionListView = Backbone.View.extend({
    collection: null,
    el: '#list',
    initialize: function () {
        var self = this;
        this.collection.on('change', this.render, this); //re-render on change
        this.collection.fetch().done(function() {
            self.render();
        });
    },
    render: function () {
        this.$el.empty();
        console.log(this.collection);
        console.log('sessionlistview: ', this.collection);
        this.collection.each(function(model){
            console.log(model);
            var view = new views.SessionView();
            this.$el.append(view.render().el);
            return this;
        });
    }
});

var sessionListView = new views.SessionListView({collection: sessionList});
// will create n number of SessionView instances