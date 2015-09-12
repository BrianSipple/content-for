module.exports = {
  name: 'soundcloud',

  isDevelopingAddon: function() {
    return true;
  },

  contentFor: function(type, config) {
    if (type === 'body') {
      return '<script src="//w.soundcloud.com/player/api.js"></script>';
    }
  }
};
