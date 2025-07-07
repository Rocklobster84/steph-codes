import { type SchemaTypeDefinition } from 'sanity';

import { user } from "@/sanity/schemaTypes/user";
import { project } from "@/sanity/schemaTypes/project";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [user, project],
}
