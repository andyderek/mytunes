// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function(){
      this.model.dequeue();
      //appends to song queue view
    } // we wrote this method
  },

  render: function(){
    console.log(this.$el.html(this.template(this.model.attributes)));
    // return this.$el.html(this.template(this.model.attributes));
  }

});
