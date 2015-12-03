var SessionListView = Backbone.View.extend({
    el: '#list',
    model: sessionList,
    initialize: function () {
        sessionList.bind('add', this.addAll, this);
        sessionList.bind('reset', this.addAll, this);
        sessionList.fetch();
    }
});

var sessionListView = new SessionListView();
