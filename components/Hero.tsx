"use client";

const Hero = () => {

  return (
    <section id="hero">
      <div className="text-center">
        <div className="mx-auto w-[calc(100%_+_2rem)] max-w-xs md:max-w-xl mt-20 border-[1px] bg-white" />
        <h1 className="px-10 my-10 uppercase max-w-2xl mx-auto font-bold">Hi, I&#39;m Stephanie</h1>
        <h3 className="mb-10 md:w-full uppercase">Full Stack Developer</h3>
        <div className="mx-auto w-[calc(100%_+_2rem)] max-w-xs md:max-w-xl border-[1px] bg-white" />

        <p className="text-xl md:text-2xl flex-wrap flex-shrink px-10 py-20 lg:w-[calc(40%_+_2rem)] m-auto">
          Building intuitive web experiences with over a decade of expertise.
        </p>

      </div>
    </section>
  )
}

export default Hero