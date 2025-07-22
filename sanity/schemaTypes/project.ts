import {defineField, defineType} from "sanity";

export const project = defineType ({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title'
      }
    }),
    defineField({
      name: 'user',
      type: 'reference',
      to: { type: 'user' }
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
      name: 'category',
      type: 'string',
      validation: (Rule) => Rule.min(1).max(20).required().error("Please enter a category")
    }),
    defineField({
      name: 'copy',
      type: 'text',
    }),
    defineField({
      name: 'image',
      type: 'url',
    }),
    defineField({
      name: 'button2',
      type: 'string'
    }),
    defineField({
      name: 'button2Link',
      type: 'url'
    }),
  ],
})