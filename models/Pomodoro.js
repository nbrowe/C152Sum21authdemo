'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

var pomodoroSchema = Schema( {
  startedAt: String,
  completedAt: String,
  goal: String,
  result: String,
  userId: ObjectId,
} );

module.exports = mongoose.model( 'Pomodoro', pomodoroSchema );
