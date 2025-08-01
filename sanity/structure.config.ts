import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('user').title('Users'),
      S.documentTypeListItem('project').title('Projects'),
      S.documentTypeListItem('playlist').title('Playlists'),
      S.documentTypeListItem('photo').title('Photos'),
      S.documentTypeListItem('gallery').title('Photo Gallery')
    ])
