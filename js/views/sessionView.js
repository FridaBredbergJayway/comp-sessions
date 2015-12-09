/**
 * Created by frida on 11/27/15.
 */
views.SessionView = Backbone.View.extend({
    template: _.template($('#session-template').html()),
    render: function () {
        console.log(this.template);
        console.log('sessionView ', JSON.stringify(this.model));
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});
var sessionView = new views.SessionView();