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