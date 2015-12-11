collections.SessionList = Backbone.Collection.extend({
    url: '#',
    model: models.Session,
    tagName: 'li',
    localStorage: new Backbone.LocalStorage('SessionList'),
    render: function() {
        return this;
    }
});

