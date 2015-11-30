/**
 * Created by frida on 11/27/15.
 */
var CategoryView = new Backbone.View.extend({
    Model: Category,
    template: '#category-template',

    render: function (){
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },

    events: {
        'click td' : 'mark'
    },

    mark: function() {
        console.log(this.$el);
    }
});

