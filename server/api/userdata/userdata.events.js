/**
 * Userdata model events
 */

'use strict';

import {EventEmitter} from 'events';
var UserdataEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
UserdataEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(Userdata) {
  for(var e in events) {
    let event = events[e];
    Userdata.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc) {
    UserdataEvents.emit(event + ':' + doc._id, doc);
    UserdataEvents.emit(event, doc);
  };
}

export {registerEvents};
export default UserdataEvents;
