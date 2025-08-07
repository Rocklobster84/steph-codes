"use client"

import Intro from '@/components/Photography/Intro'
import PhotoGallery from '@/components/Photography/PhotoGallery'


type Gallery = {
  _id: string
  title: string
  description?: string
  images: {
    asset: {
      _id: string
      url: string
      metadata: {
        lqip: string
      }
    }
    alt?: string
  }[]
}

export default function Gallery() {
  return (
  <>
    <Intro/>
    <PhotoGallery/>
  </>
  )
}

