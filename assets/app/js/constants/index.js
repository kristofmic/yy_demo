var
  mirror = require('react/lib/keyMirror');

module.exports = mirror({
  VIEW_SOURCE: null,
  SERVER_SOURCE: null,

  FETCH_YAKS: null,
  FETCH_YAKS_ERROR: null,

  LOAD_NEW_YAKS: null,

  INIT_FETCH_YAK_COMMENTS: null,
  FETCH_YAK_COMMENTS: null,
  FETCH_YAK_COMMENTS_ERROR: null
});