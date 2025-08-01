import { type SchemaTypeDefinition } from 'sanity';

import { user } from "@/sanity/schemaTypes/user";
import { project } from "@/sanity/schemaTypes/project";
import { playlist } from "@/sanity/schemaTypes/playlist"
import { photo } from "@/sanity/schemaTypes/photo"
import { gallery } from "@/sanity/schemaTypes/gallery"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [user, project, playlist, photo, gallery],
}
