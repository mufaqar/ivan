import { type SchemaTypeDefinition } from 'sanity'
import tags from './schema/tags'
import work from './schema/work'
import cv from './schema/cv'
import featurePost from './schema/featurePost'
import siteSettings from './schema/siteSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [work, tags, cv, featurePost, siteSettings ],
}
