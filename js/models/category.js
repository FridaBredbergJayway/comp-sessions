var Category = Backbone.Model.extend({
    defaults: {
        category: '',
        marked: false
    }
});

var Session = Backbone.Model.extend({
    defaults: {
        title: '',
        category: '',
        organizer: ''
    }
});

var session1 = new Session({title: '1', category: 'Web', organizer: 'GNK'});
var session2 = new Session({title: '2', category: 'Android', organizer: 'Albin'});
var session3 = new Session({title: '3', category: 'Web', organizer: 'GNK'});
var session4 = new Session({title: '4', category: 'Android', organizer: 'Albin'});
