/**
 * Created by frida on 11/27/15.
 */

models.Session = Backbone.Model.extend({
    defaults: {
        title: '',
        category: '',
        organizer: ''
    }
});

var session1 = new models.Session({title: '1', category: 'Web', organizer: 'GNK'});
var session2 = new models.Session({title: '1', category: 'Web', organizer: 'GNK'});
var session3 = new models.Session({title: '1', category: 'Web', organizer: 'GNK'});
var session4 = new models.Session({title: '1', category: 'Web', organizer: 'GNK'});