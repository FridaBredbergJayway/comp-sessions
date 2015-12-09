
views.InputView = Backbone.View.extend({
    el: '#input',
    model: models.Session,
    initialize: function() {
        this.render();
    },
    render: function () {
        var template = _.template($('#input-template').html(), {});
        console.log('template ', template);
        this.$el.html(template);
    },
    events: {
        'submit': 'submit'
    },
    clear: function () {
        $('.add-form').find('input[type=text]').val('');
    },
    submit: function (e) {
        e.preventDefault();
        var title = $('.add-form').find('input[name=input-title]').val();
        var category = $('.add-form').find('input[name=input-category]').val();
        var organizer = $('.add-form').find('input[name=input-organizer]').val();
        var addedSession = new models.Session({title: title, category: category, organizer: organizer});
        sessionList.add(addedSession);
        console.log(sessionList);
        this.clear();
    }
});

inputView = new views.InputView();

