export default {
  name: 'works',
  title: 'Works',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input: any) => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 200)
      }
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'tags' },
          ]
        }
      ]
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true // <-- Defaults to false
      },
    },
    {
      name: 'video_url',
      title: 'Video Url',
      type: 'string',
      description: "add video url here!"
    },
    {
      title: 'Portfolio',
      name: 'portfolio',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'detail',
                title: 'Detail',
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
              title: 'Images List',
              name: 'imageslist',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      title: 'Image',
                      name: 'image',
                      type: 'image',
                      options: {
                        hotspot: true
                      }
                    },
                    {
                      name: 'info',
                        title: 'Info',
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
              ]
            }
          ]
        }
      ]
    },

  ]
}