'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
   
    static associate(models) {
     
    }
  }
  Event.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    dateTime: DataTypes.DATE,
    location: DataTypes.STRING,
    totalSeats: DataTypes.INTEGER,
    availableSeats: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};