export default {
     name: 'cv',
     title: 'CV',
     type: 'document',
     fields: [
       
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'info',
          title: 'Info',
          type: 'string',
        },
        {
          name: 'cvbio',
          title: 'CV Bio',
          type: 'string',
        },
        {
          name: 'cv',
          title: 'CV',
          type: 'file',
        },
        {
          title: 'Education',
          name: 'education',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
               {
                    name: 'education_info',
                    title: 'Education Info',
                    description : "write complete detail about Education",
                    type: 'string',
               },
              ]
            }
          ]
        },
        {
          title: 'Features',
          name: 'Features',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  type: 'string',
                  title: 'Title',
                },
                {
                  title: 'List',
                  name: 'list',
                  type: 'array',
                  of: [
                    {
                      type: 'object',
                      fields: [
                         {
                              name: 'featuretitle',
                              type: 'string',
                              title: 'Feature Title',
                         },
                         {
                              title: 'Feature',
                              name: 'feature',
                              type: 'array',
                              of: [
                                {
                                  type: 'object',
                                  fields: [
                                        {
                                             name: 'feature_name',
                                             type: 'string',
                                             title: 'Feature Name',
                                        },
                                  ]
                                }
                              ]
                         }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
     ]
   }