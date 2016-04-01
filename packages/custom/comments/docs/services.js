'use strict';

exports.load = function(swagger, parms) {

  var searchParms = parms.searchableOptions;

  var list = {
    'spec': {
      description: 'Article operations',
      path: '/comments',
      method: 'GET',
      summary: 'Get all Comments',
      notes: '',
      type: 'Comments',
      nickname: 'getComments',
      produces: ['application/json'],
      params: searchParms
    }
  };

  swagger.addGet(list);

};
