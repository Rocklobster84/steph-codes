import React, { useState } from 'react'
import Image from 'next/image'
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

const Intro = () => {

  const [index, setIndex] = useState(-1)

  const slides = [
    { src: "/8240.jpg", title: "One of the first photos I took." },
    { src: "/8235.jpg", title: "First photo I remember taking." },
    { src: "/8240-2.jpg", title: "I was always taking photos." },
    { src: "/Photo_2024-07-31_170352-2.jpg", title: "Johnson Station Cemetery" },
    { src: "/Photo_2024-07-31_170000-2.jpg", title: "Photograph of a jungle display " },
    { src: "/Photo_2024-07-31_170233-2.jpg", title: "Large Cat" },
    { src: "/Photo_2024-07-31_165624-2.jpg", title: "Jungle display James Bowie High School" },
    { src: "/negatives.jpg", title: "Film Negatives" },
  ]

  return (
    <>
      <section className="bg-accent-light !min-h-[230px] w-full py-10">
        <p className="tag text-center mx-auto w-40">Photography</p>
          <div className="flex justify-center">
            <h1 className="heading mx-auto">Sometimes I take photos</h1>
          </div>
        <p className="sub-heading text-center mx-auto !max-w-5xl">Photography’s been a passion of mine forever. Besides shooting events and portraits, I love getting out in nature to see what I can capture. I’m also really into photographing old cemeteries—there’s so much history behind each monument, and I want to document as many hidden gems as I can.</p>
      </section>

      <div className="max-w-3/4 sm:max-w-3/4 md:max-w-3/4 lg:max-w-2/3 mx-auto pt-10 pb-10">
        <p>According to my mom, I started asking to take photos when I was either 3 or 4. <i>My</i> earliest memory was of my mom trusting me with her Polaroid OneStep. I was 5 years old and managed to prove that I was capable on keeping my subject in frame. From that day forward I became the friend that could be relied on to take pictures of every event.</p>

        <div className="grid grid-cols-3 gap-4 pt-4">
          <figure onClick={() => setIndex(0)} className="cursor-pointer">
            <Image 
              src="/8240.jpg"
              alt="One of the first photos I took of my mom and dad."
              width={160}
              height={80}
              layout="responsive"
            />
            <figcaption className="text-xs">One of the first photos I took. According to my mom, I was 4 years old.</figcaption>
          </figure>

          <figure onClick={() => setIndex(1)} className="cursor-pointer">
            <Image 
              src="/8235.jpg"
              alt="The first photo I remember taking with a Polaroid OneStep."
              width={160}
              height={80}
              layout="responsive"
            />
            <figcaption className="text-xs">This is the first photo I <i>remember</i> taking. I would have been 5 at this time.</figcaption>
          </figure>

          <figure onClick={() => setIndex(2)} className="cursor-pointer">
            <Image 
              src="/8240-2.jpg"
              alt="Likely the first photo I ever took. My mom and dad in front of his boat."
              width={160}
              height={80}
              layout="responsive"
            />
            <figcaption className="text-xs">I was allegedly always asking to take photos. I was either 3 or 4 when I took this one.</figcaption>
          </figure>
        </div>

        <div className="pt-4">
         <p>During my high school years I had the opportunity to take a photography class through school. There I learned how to develop film and make my own prints, learned to use a camera that wasn't a point-and-shoot (even if it had been through the hands of hundreds of other kids), and experimented with infrared film. My interest in photographing old cemeteries started here.</p>
         </div>

         <div className="grid grid-cols-3 gap-4 pt-4">
          <figure onClick={() => setIndex(3)} className="cursor-pointer">
            <Image 
              src="/Photo_2024-07-31_170352-2.jpg"
              alt="Photo of a headstone from Johnson Station Cemetery in Arlington, Texas. Reads Lee & Kate McFadin. Born & Died Dec 15, 1912."
              width={160}
              height={80}
              layout="responsive"
            />
            <figcaption className="text-xs">I find old cemeteries fascinating for some reason. This headstone was for twins who died at birth in Johnson Station Cemetery in Arlington, Texas. Shot in late 2000.</figcaption>
          </figure>

          <figure onClick={() => setIndex(4)} className="cursor-pointer">
            <Image 
              src="/Photo_2024-07-31_170000-2.jpg"
              alt="Photograph of a jungle display from James Bowie High School in Arlington, Texas. Taken in late 2000."
              width={160}
              height={80}
              layout="responsive"
            />
            <figcaption className="text-xs">I wish I could remember what this display was about. James Bowie High School, Arlington, TX. Late 2000.</figcaption>
          </figure>

          <figure onClick={() => setIndex(5)} className="cursor-pointer">
            <Image 
              src="/Photo_2024-07-31_170233-2.jpg"
              alt="A photo of a large grey and white cat taken in late 2000."
              width={160}
              height={80}
              layout="responsive"
            />
            <figcaption className="text-xs">This beast of a cat lived in our backyard and didn't mind the clicking of the camera. Late 2000.</figcaption>
          </figure>
        </div>

        <div className="grid grid-cols-4 gap-8 pt-4">
          <div className="col-start-2">
          <figure onClick={() => setIndex(6)} className="cursor-pointer">
            <Image 
              src="/Photo_2024-07-31_165624-2.jpg"
              alt="Papier-mâché monkey photographed at James Bowie High School. Arlington, Texas late 2000."
              width={160}
              height={80}
              layout="responsive"
            />
            <figcaption className="text-xs">Another member of a forgotten display at James Bowie Hight School. Late 2000.</figcaption>
          </figure>
          </div>
          <div className="col-start-3">
          <figure onClick={() => setIndex(7)} className="cursor-pointer">
            <Image 
              src="/negatives.jpg"
              alt="Film negatives I still have some on infrared film."
              width={160}
              height={80}
              layout="responsive"
            />
            <figcaption className="text-xs">I still have some of my negatives. Many of these were infrared film. Late 2000 to early 2001.</figcaption>
          </figure>
          </div>
        </div>

        <div className="pt-4">
         <p>My first DSLR was a Canon Rebel T3; I shot a wedding on that small but mighty thing. The next, a Nikon D3500. A couple of years back I took a Sony RX100 Mark IV to Costa Rica and was very impressed with the quality. I've even used a Hasselblad True Zoom with a Motorola that produced some impressive shots. Nowadays you can find me toting around a Nikon D850 with all the fixings. I love exploring new places and looking for the art around me. Sometimes it's in nature, others right in my backyard. Currently, I am working on learning astrophotography so stay tuned for that.</p>
         </div>
      </div>
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={slides}
      />
    </>
  )
}

export default Intro