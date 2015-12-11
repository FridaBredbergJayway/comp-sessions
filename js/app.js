/**
 * Created by frida on 12/11/15.
 */
var session1 = new models.Session({title: '1', category: 'Web', organizer: 'GNK'});
var session2 = new models.Session({title: '2', category: 'iOS', organizer: 'GNK'});
var session3 = new models.Session({title: '3', category: 'Android', organizer: 'GNK'});
var session4 = new models.Session({title: '4', category: 'Cloud', organizer: 'GNK'});
var session5 = new models.Session({title: '5', category: 'Cloud', organizer: 'GNK'});

var sessionList = new collections.SessionList([session1, session2, session3, session4, session5]);
var sessionListFiltered = new collections.SessionList();
var categoryList = new collections.CategoryList([{category: 'Android'}, {category: 'iOS'}, {category: 'Web'}, {category: 'Cloud'}]);
var categoryInputView = new views.CategoryInputView({model: categoryList});
var categoryView = new views.CategoryView();
var categoryListView = new views.CategoryListView({collection: sessionList});
var inputView = new views.InputView();
var sessionView = new views.SessionView();
var sessionListView = new views.SessionListView({collection: sessionList});

Backbone.history.start();
