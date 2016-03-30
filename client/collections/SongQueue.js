// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', this.enqueue, this);
  },

  enqueue: function() {
    console.log('this is enqueue inside SonQueue:', 'yes!')
    if( this.length === 1) {
      this.playFirst();
    }
      // this.trigger('enqueue', this)
  }, 
  playFirst: function (){
    this.at(0).play();
  }
  




});