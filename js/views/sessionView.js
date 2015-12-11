/**
 * Created by frida on 11/27/15.
 */
views.SessionView = Backbone.View.extend({
    tagName: 'tr',
    template: _.template($('#session-template').html()),
    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});
