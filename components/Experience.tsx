"use client";
import { Fragment } from 'react';
import Circle from "./Circle";
import Pillar from "./Pillar";
import ExperienceCard from "./ExperienceCard";
import { events } from "@/constants";

const Experience = () => {

  return (
    <>
    <div className="flex flex-col mx-auto max-w-3/4 sm:max-w-3/4 md:max-w-3/4 lg:max-w-2/3 mb-20 mt-16">
      <div className="shrink-0 self-end max-w-full h-0 border-white border-solid border-[1px] w-full sm:px" />
      <div className="flex flex-nowrap gap-5 justify-between w-full max-md:max-w-full">
        <div className="flex flex-col max-md:max-w-full">
          <div className="flex gap-5 justify-between max-w-full w-[80px] md:w-[100px]">
            <div className="shrink-0 border-white bg-white border-solid border-[1px] h-[100px] md:h-[130px] w-[1px]" />
            <div className="shrink-0 border-white bg-white border-solid border-[1px] h-[100px] md:h-[130px] w-[1px]" />
          </div>
          <div className="flex flex-col self-end w-full max-w-[1325px] max-md:max-w-full">
            <div className="titles self-start text-4xl font-bold text-white md:max-w-full md:text-6xl mt-10 uppercase">
              Experience
            </div>
            <div className="self-start mt-3 text-2xl text-white md:max-w-full md:text-3xl">
              Career milestones and collaborations that shaped my growth.
            </div>
          </div>
        </div>
      </div>
    </div>
    


    <div className="flex flex-col gap-y-3 w-full my-4 mb-16">
      <Circle />

        {events.map((event, key) => {
            if (!event) return null;

          return <Fragment key={key}>
            <div className="grid grid-cols-[1fr_auto_1fr] gap-x-2 items-centered mx-auto">
              {event.direction === 'left' ? (
                <ExperienceCard events={event} />
              ) : (
                <div></div>
              )}

              <Pillar />

              {event.direction === 'right' ? (
                <ExperienceCard events={event} />
              ) : (
                <div></div>
              )}
            </div>
            {key < (events.length -1) && <Circle /> }
          </Fragment>
        })}

      <Circle />
    </div>
</>
  );
}

export default Experience;
