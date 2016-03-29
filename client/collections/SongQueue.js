// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  // initialize: function(){
  //   this.on('enqueue', this.enqueue, this);
  // },

  enqueue: function() {
    console.log('yes!')
    this.trigger('enqueue', this)
  }


});