/**
 * Created by frida on 11/27/15.
 */
var CategoryListView = Backbone.View.extend({
    el: '#category-list',
    model: Category,

    initialize: function () {
        this.render();
    },

    render: function () {
        var template = _.template($('#category-template').html());
        this.$el.html(template({categories: categoryList}));
        console.log(template);
        console.log('render: ' + JSON.stringify(categoryList));
    },

    events: {
        'click .cat-item': 'mark'
    },

    mark: function (e) {
        if ($(e.target).children('.glyphicon').hasClass('hide')) {
            $(e.target).children('.glyphicon').removeClass('hide');
            var cat = $(e.target).text().trim();
            mCat = categoryList.where({category: cat});
            mCat[0].set('marked', true);
            selItemsList = categoryList.where({marked: true}); //new category collection with only marked: true models
            sessionListView.render();

        } else {
            $(e.target).children('.glyphicon').addClass('hide');
            var cat = $(e.target).text().trim();
            mCat = categoryList.where({category: cat});
            mCat[0].set('marked', false);
            selItemsList = categoryList.where({marked: true});
            sessionListView.render();
        }
    }
});

categoryListView = new CategoryListView();