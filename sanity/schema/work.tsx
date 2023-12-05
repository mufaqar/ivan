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
              name: 'caption_info',
              type: 'string',
              title: 'Caption Info',
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
                      },
                      fields: [
                        {
                          name: 'caption_info',
                          type: 'string',
                          title: 'Caption Info',
                        },
                        {
                          name: 'projectyear',
                          type: 'string',
                          title: 'Project Year',
                        },
                        {
                          name: 'dimensions',
                          type: 'string',
                          title: 'Dimensions',
                        },
                        {
                          name: 'media',
                          type: 'string',
                          title: 'Media',
                        },
                        {
                          name: 'note',
                          type: 'string',
                          title: 'Note',
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