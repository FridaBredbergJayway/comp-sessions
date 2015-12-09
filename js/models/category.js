var models = {};

models.Category = Backbone.Model.extend({
    urlRoot: '#',
    defaults: {
        category: '',
        marked: false
    }
});

