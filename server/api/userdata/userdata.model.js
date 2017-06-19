'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './userdata.events';

var UserdataSchema = new mongoose.Schema({
  name: {type: String, required: true},
  age: {type: Number, required: true},
  sex: {type: String, enum: ['Male', 'Female'], required: true},
  country: {type: String, required: true},
  dateCreated: {type: Date, default: Date.now() }
});

registerEvents(UserdataSchema);
export default mongoose.model('Userdata', UserdataSchema);
