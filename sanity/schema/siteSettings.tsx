export default {
     name: 'siteSettings',
     title: 'Site Settings',
     type: 'document',
     fields: [
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
      }
     ]
   }