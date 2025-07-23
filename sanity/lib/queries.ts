import { defineQuery } from "next-sanity";

export const PROJECTS_QUERY = defineQuery(`*[_type == "project" && defined(slug.current)] | order(_createdAt desc)[0...3] {
  _id, 
  _type,
  _updatedAt,
  _rev,
  title, 
  slug, 
  _createdAt, 
  user, 
  description, 
  category, 
  copy,
  image,
  button2,
  button2Link
}`);

export const PROJECTS_PAGE_QUERY = defineQuery(`*[_type == "project" && defined(slug.current)] | order(_createdAt desc) {
  _id, 
  _type,
  _updatedAt,
  _rev,
  title, 
  slug, 
  _createdAt, 
  user, 
  description, 
  category, 
  copy,
  image,
  button2,
  button2Link
}`);

export const PROJECT_BY_ID_QUERY = defineQuery(`*[_type == "project" && _id == $id][0] {
  _id, 
  title, 
  slug, 
  _createdAt, 
  user, 
  description, 
  category, 
  image,
  copy,
  button2, 
  button2Link
}`)

export const PLAYLIST_BY_SLUG_QUERY =
  defineQuery(`*[_type == "playlist" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  select[]->{
    _id,
    _createdAt,
    title,
    slug,
    user->{
      _id,
      name,
      slug,
      image,
      bio
    },
    views,
    description,
    category,
    image,
    button2, 
    button2Link
  }
}`);

export const CATEGORIES_QUERY = defineQuery(`*[_type == "project" && (!$category || $category in category)] | order(_createdAt desc) {
  _id, 
  title, 
  slug, 
  _createdAt, 
  user, 
  description, 
  category, 
  image
}`);

export const CATEGORY_LIST_QUERY = defineQuery(`
  *[_type == "project" && defined(category)].category
`);