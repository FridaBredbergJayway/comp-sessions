var views = {};

views.CategoryInputView = Backbone.View.extend({
    el: '#add-category',
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
        categoryList.add({category: category});
        console.log(categoryList);
        this.clear();
    },
    clear: function () {
        $('.add-category-input').find('input[type=text]').val('');
    }
});
categoryInputView = new views.CategoryInputView({model: categoryList});

