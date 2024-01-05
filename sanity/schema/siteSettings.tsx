export default {
     name: 'siteSettings',
     title: 'Site Settings',
     type: 'document',
     fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
        readOnly: ({currentUser}:any) => {
          return true
        },
        options: {
          default: 'Site Setting',
        },
      },
       {
        title: "Footer Nav Links",
        type: "array",
        name: "footer_nav",
        description: 'Add you footer nav links',
        of: [
          {
            type: "object",
            name: "inline",
            fields: [
              { type: "string", name: "name" },
              { type: "string", name: "link" }
            ]
          }
        ],
      },
      {
        title: "Footer Social Links",
        type: "array",
        name: "footer_social",
        description: 'Add you footer Social links eg. facebbok, instagram, etc...',
        of: [
          {
            type: "object",
            name: "inline",
            fields: [
              { type: "string", name: "name" },
              { type: "string", name: "link" }
            ]
          }
        ],
      },
      {
        name: 'infoheadTitle',
        title: 'Info Page Head Title',
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
     ]
   }