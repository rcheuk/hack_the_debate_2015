/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Candidate = require('../api/candidate/candidate.model');

Candidate.find({}).remove(function() {
  Candidate.create({
    name : 'Trump',
    info : 'trump',
    count: 12
  }, {
    name : 'Carson',
    info : 'carson',
    count: 5
  }, {
    name : 'Rubio',
    info : 'rubio',
    count: 43
  },  {
    name : 'Bush',
    info : 'bush',
    count: 2
  },  {
    name : 'Fiorina',
    info : 'fiorina',
    count: 8
  },{
    name : 'Cruz',
    info : 'cruz',
    count: 15
  },{
    name : 'Kasich',
    info : 'kasich',
    count: 23
  },{
    name : 'Paul',
    info : '',
    count: 55
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});
