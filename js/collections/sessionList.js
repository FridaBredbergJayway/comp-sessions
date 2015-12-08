collections.SessionList = Backbone.Collection.extend({
    url: '#',
    model: models.Session,
    tagName: 'li',
    localStorage: new Store("session-list-store"),
    initialize: function () {
        console.log('initializing...');
    }
});

var sessionList = new collections.SessionList([session1, session2, session3, session4]);
console.log(sessionList);
