
views.InputView = Backbone.View.extend({
    el: '#input',
    model: models.Session,
    initialize: function() {
        this.render();
    },
    render: function () {
        var template = _.template($('#input-template').html(), {});
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
        var map = {};
        $(".input").each(function() {
            map[$(this).attr("name")] = $(this).val();
        });
        console.log(map);
        sessionList.create({title: map.inputTitle, category: map.inputCategory, organizer: map.inputOrganizer});
        console.log(sessionList);
        this.clear();
    }
});

inputView = new views.InputView();

