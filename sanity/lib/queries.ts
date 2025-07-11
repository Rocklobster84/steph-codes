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
  image
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
  copy
}`)