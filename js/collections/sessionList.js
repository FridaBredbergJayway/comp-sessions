collections.SessionList = Backbone.Collection.extend({
    url: '#',
    model: models.Session,
    tagName: 'li',
    localStorage: new Backbone.LocalStorage('SessionList'),
    initialize: function () {
        console.log('initializing...');
    },
    render: function() {
        return this;
    }
});

var sessionList = new collections.SessionList([session1, session2, session3, session4]);

