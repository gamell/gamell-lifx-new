#!/usr/bin/env node

var LifxClient = require('node-lifx').Client;
var client = new LifxClient();

client.init();

client.on('light-new', function(light) {
  light.on();
});
