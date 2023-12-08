export const featurePosts = `*[ _type == "featurepost"]{
     _createdAt,
     _updatedAt,
     top_works[]->{
          title,
          slug,
          tags[]->{
               name,
               slug
          },
          image,
          video_url
     },
     bottom_works[]->{
          title,
          slug,
          tags[]->{
               name,
               slug
          },
          image,
          video_url
     },
     
}`;

export const work = `*[ _type == "works"]{
     _createdAt,
     _updatedAt,
     title,
     slug,
     tags[]->{
          name,
          slug
     },
     image,
     video_url,
     portfolio
}`;


export const CV = `*[ _type == "cv"]{
     Features,
     cv{
          asset->{
               url
          }
     },
     cvbio,
     education,
     cvsection,
     info,
     title
}`
export const Tags = `*[ _type == "tags"]`
export const singleWork = `*[ _type == "works" && slug.current == $slug][0]`