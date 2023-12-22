export default {
     name: 'featurepost',
     title: 'HomePage',
     type: 'document',
     fields: [
      {
        name: 'headTitle',
        title: 'Head Title',
        type: 'array',
        of: [
          {
            type: 'block'
          },
          {
            type: 'image',
            fields: [
              {
                type: 'text',
                name: 'alt',
                title: 'Alternative text',
                description: `Some of your visitors cannot see images, 
                        be they blind, color-blind, low-sighted; 
                        alternative text is of great help for those 
                        people that can rely on it to have a good idea of 
                        what\'s on your page.`,
                options: {
                  isHighlighted: true
                }
              }
            ]
          },
        ]
      },
      {
        name: 'newsbox1',
        title: 'News Box1',
        type: 'array',
        of: [
          {
            type: 'block'
          },
          {
            type: 'image',
            fields: [
              {
                type: 'text',
                name: 'alt',
                title: 'Alternative text',
                description: `Some of your visitors cannot see images, 
                        be they blind, color-blind, low-sighted; 
                        alternative text is of great help for those 
                        people that can rely on it to have a good idea of 
                        what\'s on your page.`,
                options: {
                  isHighlighted: true
                }
              }
            ]
          },
        ]
      },
      {
        name: 'newsbox2',
        title: 'News Box2',
        type: 'array',
        of: [
          {
            type: 'block'
          },
          {
            type: 'image',
            fields: [
              {
                type: 'text',
                name: 'alt',
                title: 'Alternative text',
                description: `Some of your visitors cannot see images, 
                        be they blind, color-blind, low-sighted; 
                        alternative text is of great help for those 
                        people that can rely on it to have a good idea of 
                        what\'s on your page.`,
                options: {
                  isHighlighted: true
                }
              }
            ]
          },
        ]
      },
      {
        name: 'homebox',
        title: 'Page Center Box',
        type: 'array',
        of: [
          {
            type: 'block'
          },
          {
            type: 'image',
            fields: [
              {
                type: 'text',
                name: 'alt',
                title: 'Alternative text',
                description: `Some of your visitors cannot see images, 
                        be they blind, color-blind, low-sighted; 
                        alternative text is of great help for those 
                        people that can rely on it to have a good idea of 
                        what\'s on your page.`,
                options: {
                  isHighlighted: true
                }
              }
            ]
          },
        ]
      },
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