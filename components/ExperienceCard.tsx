import React from 'react'
import { ExperienceProps } from "@/types"

interface ExperienceCardProps {
  events: ExperienceProps;
}

const ExperienceCard = ({events}: ExperienceCardProps) => {
  const {heading, subHeading, dates, description} = events;

  return (
    <div className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl flex-1 pb-4 rounded-xl bg-zinc-800">
      <div className="px-16 py-4 text-2xl font-bold bg-accent rounded-xl max-md:px-5 text-center">{heading}</div>
      <div className="text-md font-bold text-gray-200 mt-4 text-center my-2">{subHeading}</div>
      <div className="text-center text-sm font-extralight my-2">{dates}</div>
      <p className="text-center text-sm my-2 px-4">{description}</p>
    </div>
  )
}

export default ExperienceCard