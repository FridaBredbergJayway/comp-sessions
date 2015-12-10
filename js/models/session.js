/**
 * Created by frida on 11/27/15.
 */

models.Session = Backbone.Model.extend({
    urlRoot: '#',
    defaults: {
        title: '',
        category: '',
        organizer: '',
        selected: false
    }
});

var session1 = new models.Session({title: '1', category: 'Web', organizer: 'GNK'});
var session2 = new models.Session({title: '2', category: 'iOS', organizer: 'GNK'});
var session3 = new models.Session({title: '3', category: 'Android', organizer: 'GNK'});
var session4 = new models.Session({title: '4', category: 'Cloud', organizer: 'GNK'});

session1.save();