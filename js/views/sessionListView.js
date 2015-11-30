var SessionListView = Backbone.View.extend({
    el: '#main',
    model: Session,

    initialize: function () {
        this.render();
    },

    render: function () {
    }
});

sessionListView = new SessionListView();
