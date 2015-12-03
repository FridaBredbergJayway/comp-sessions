/**
 * Created by frida on 11/27/15.
 */
var SessionView = Backbone.View.extend({
    model: Session,
    el: '#list',
    template:  _.template($('#session-template').html()),
    initialize: function () {
        this.model.bind('change', this.render, this); //re-render on change
        this.render();
    },
    render: function () {
        this.$el.html(this.template({sessions: sessionList}));
        return this;
    }
});
var sessionView = new SessionView();


