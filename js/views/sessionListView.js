views.SessionListView = Backbone.View.extend({
    collection: null,
    el: '#list',
    initialize: function () {
        var self = this;
        self.collection.on('change', this.render, this); //re-render on change
        self.collection.fetch().done(function() {
            self.render();
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
            return this;
        });
    }
});

var sessionListView = new views.SessionListView({collection: sessionList});
