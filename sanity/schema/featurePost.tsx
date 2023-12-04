export default {
     name: 'featurepost',
     title: 'Feature Post',
     type: 'document',
     fields: [
      {
        title: 'Top Works',
        name: 'top_works',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [
              { type: 'works' },
            ]
          }
        ]
      },
      {
        title: 'Bottom Works',
        name: 'bottom_works',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [
              { type: 'works' },
            ]
          }
        ]
      },
     ]
   }