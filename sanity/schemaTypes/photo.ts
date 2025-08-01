// schemas/photo.ts
import { defineField, defineType } from 'sanity';
import { ImageIcon } from '@sanity/icons';

export const photo = defineType({
  name: 'photo',
  title: 'Photo',
  type: 'document',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // Enables cropping and hotspot selection in Sanity Studio
        metadata: ['blurhash', 'lqip', 'palette'], // Fetches image metadata
      },
      readOnly: false,
      validation: (Rule) => Rule.required(), // Makes the image field required
    }),
    defineField({
      name: 'altText',
      title: 'Alt Text',
      type: 'string',
      description: 'Important for accessibility and SEO',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
    }),
    defineField({
      name: 'photographer',
      title: 'Photographer',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'altText',
      media: 'image',
    },
  },
});