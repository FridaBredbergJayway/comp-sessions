var SessionListView = Backbone.View.extend({
    el: '#main',
    model: Session,

    initialize: function () {
        this.render();
    },

    render: function () {
        var template = _.template($('#item-template').html());
        console.log('selItemsList: ' + JSON.stringify(selItemsList));
        if (selItemsList && selItemsList.length !== 0) {
            var selCats = selItemsList.map(function(category) {
                return category.get('category');
            });
            var selSess = sessionList.filter(function(session) {
                var cat = session.get('category');
                if(selCats.indexOf(cat) !== -1) {
                    return true;
                } else return false;
            });
            console.log(JSON.stringify(selSess));
            this.$el.html(template({sessions: selSess}));
        } else {
            this.$el.html(template({sessions: sessionList}));
        }
    }
});

sessionListView = new SessionListView();
