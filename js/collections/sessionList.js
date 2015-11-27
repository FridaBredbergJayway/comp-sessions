var SessionList = Backbone.Collection.extend({
    url: '#',
    model: Session,
    tagName: 'li',
    localStorage: new Store("session-list-store"),
    initialize: function () {
        console.log('initializing...');
    }
});

var sessionList = new SessionList([session1, session2, session3, session4]);
console.log(sessionList.toJSON());

