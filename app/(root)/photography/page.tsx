"use client"
import { useEffect, useState } from 'react'
import { client } from '@/sanity/lib/client'
import { GALLERY_QUERY } from '@/sanity/lib/queries'
import Image from 'next/image'
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import { shuffleArray } from '@/utils'
import Masonry from 'react-masonry-css'

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
  const [gallery, setGallery] = useState<Gallery | null>(null)
  const [index, setIndex] = useState(-1)

useEffect(() => {
  async function fetchGallery() {
    const data = await client.fetch(GALLERY_QUERY)
    if (data?.images) {
      data.images = shuffleArray(data.images) // 👈 randomize once
    }
    setGallery(data)
  }
  fetchGallery()
}, [])


if (!gallery || !gallery.images || !Array.isArray(gallery.images)) {
  return <div className="text-center text-gray-400">Loading gallery...</div>
}

if (gallery.images.length === 0) {
  return <div className="text-center text-gray-400">No images found in this gallery.</div>
}

const breakpointColumnsObj = {
  default: 3,
  768: 2,
  640: 1,
}
  const slides = gallery.images.map((img) => ({
    src: img.asset.url,
    alt: img.alt,
  }))

  return (
    <>
<Masonry
  breakpointCols={breakpointColumnsObj}
  className="flex w-auto gap-4"
  columnClassName="space-y-4"
>
  {gallery.images.map((image, i) => (
    <div key={i} className="cursor-pointer" onClick={() => setIndex(i)}>
      <Image
        src={image.asset.url}
        alt={image.alt ?? `Image ${i + 1}`}
        width={image.asset.metadata.dimensions.width}
        height={image.asset.metadata.dimensions.height}
        className="rounded-lg shadow-md"
        placeholder="blur"
        blurDataURL={image.asset.metadata.lqip}
        sizes="(max-width: 768px) 100vw, 33vw"
      />

    </div>
  ))}
</Masonry>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={slides}
      />
    </>
  )
}

