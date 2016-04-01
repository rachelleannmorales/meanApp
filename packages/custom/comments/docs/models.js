exports.models = {

  Comment: {
    id: 'Comment',
    required: ['content'],
    properties: {
   
      content: {
        type: 'string',
        description: 'content of the article'
      }
    }
  }
};
