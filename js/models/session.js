/**
 * Created by frida on 11/27/15.
 */

models.Session = Backbone.Model.extend({
    urlRoot: '#',
    defaults: {
        title: '',
        category: '',
        organizer: '',
        selected: false
    }
});
