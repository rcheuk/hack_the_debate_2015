/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /Candidates              ->  index
 * POST    /Candidates              ->  create
 * GET     /Candidates/:id          ->  show
 * PUT     /Candidates/:id          ->  update
 * DELETE  /Candidates/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Candidate = require('./candidate.model');

// Get list of Candidates
exports.index = function(req, res) {
  Candidate.find(function (err, Candidates) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(Candidates);
  });
};

// Get a single Candidate
exports.show = function(req, res) {
  Candidate.findById(req.params.id, function (err, Candidate) {
    if(err) { return handleError(res, err); }
    if(!Candidate) { return res.status(404).send('Not Found'); }
    return res.json(Candidate);
  });
};

// Creates a new Candidate in the DB.
exports.create = function(req, res) {
  Candidate.create(req.body, function(err, Candidate) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(Candidate);
  });
};

// Updates an existing Candidate in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Candidate.findById(req.params.id, function (err, Candidate) {
    if (err) { return handleError(res, err); }
    if(!Candidate) { return res.status(404).send('Not Found'); }
    var updated = _.merge(Candidate, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(Candidate);
    });
  });
};

// Deletes a Candidate from the DB.
exports.destroy = function(req, res) {
  Candidate.findById(req.params.id, function (err, Candidate) {
    if(err) { return handleError(res, err); }
    if(!Candidate) { return res.status(404).send('Not Found'); }
    Candidate.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
