var views = {};

views.CategoryInputView = Backbone.View.extend({
    el: '#add-category',
    model: models.Category,

    initialize: function() {
        this.render();
    },
    render: function () {
        var template = _.template($('#add-category-template').html(), {});
        this.$el.html(template);
    },

    events: {
        'submit': 'submit'
    },

    submit: function (e) {
        e.preventDefault();
        var category = $('.add-category-input').find('input[type=text]').val();
        //var newCategory = new Category({category: category});
        collections.categoryList.add({category: category});
        console.log(categoryList);
        views.categoryListView.render();
        this.clear();
    },

    clear: function () {
        $('.add-category-input').find('input[type=text]').val('');
    }
});

categoryInputView = new views.CategoryInputView();

