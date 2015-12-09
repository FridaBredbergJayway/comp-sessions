/**
 * Created by frida on 11/27/15.
 */
views.SessionView = Backbone.View.extend({
    initialize: function () {
        //this.model.bind('change', this.render);
        this.render();
    },
    render: function () {
        var template = _.template($('#session-template').html());
        console.log(template);
        console.log('sessionView ', JSON.stringify(this.model));
        this.$el.html(template(this.model.toJSON()));
        return this;
    }
});
var sessionView = new views.SessionView();