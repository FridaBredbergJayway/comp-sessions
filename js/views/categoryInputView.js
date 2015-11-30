var CategoryInputView = Backbone.View.extend({
    el: '#add-category',
    model: Category,

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
        var newCategory = new Category({category: category});
        categoryList.add(newCategory.toJSON(), {});
        categoryListView.render();
        this.clear();
    },

    clear: function () {
        $('.add-category-input').find('input[type=text]').val('');
    }
});

categoryInputView = new CategoryInputView();

