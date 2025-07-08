"use client";

import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import CustomButton from "./CustomButton";
import { Project, User } from "../sanity.types"

export type MyWorkType = Omit<Project, "user"> & { user?: User };

const MyWork = ({ projectPost }: { projectPost: MyWorkType}) => {

const { _id, description, image, title } = projectPost;

  return (
    <div className="flex flex-col mx-auto max-w-3/4 sm:max-w-3/4 md:max-w-3/4 lg:max-w-2/3">
      <div className="shrink-0 self-end max-w-full h-0 border-white border-solid border-[1px] w-full sm:px" />
      <div className="flex flex-nowrap gap-5 justify-between w-full max-md:max-w-full">
        <div className="flex flex-col max-md:max-w-full">
          <div className="flex gap-5 justify-between max-w-full w-[80px] md:w-[100px]">
            <div className="shrink-0 border-white bg-white border-solid border-[1px] h-[100px] md:h-[130px] w-[1px]" />
            <div className="shrink-0 border-white bg-white border-solid border-[1px] h-[100px] md:h-[130px] w-[1px]" />
          </div>
          <div className="flex flex-col self-end w-full max-w-[1325px] max-md:max-w-full">
            <div className="titles self-start text-4xl font-bold text-white md:max-w-full md:text-6xl mt-10 uppercase">
              My Work
            </div>
            <div className="self-start mt-3 text-2xl text-white md:max-w-full md:text-3xl">
              Selected projects showcasing responsive design, clean code, and impactful results.
            </div>
            <div className="mt-28 max-md:mt-10 max-md:mr-1.5 max-md:max-w-full">
              <div className="flex gap-5 items-start max-md:flex-col">
                
                <div className="w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col flex-grow justify-center items-start px-10 py-8 w-full bg-accent max-md:px-5 max-md:mt-5 max-md:max-w-full">
                    <img src={image} alt={title} className="object-contain w-full h-auto aspect-[2.1]" />
                  </div>
                </div>
                
                <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col text-4xl text-white mt-10 md:mt-0 max-md:max-w-full">
                    <div className="self-start text-center titles font-bold uppercase">
                      {title}
                    </div>
                    <p className="mt-4 md:max-w-full text-xl">
                      {description}
                    </p>
                    <Link href={`/project/${_id}`}>
                      <CustomButton
                        title="Details"
                        btnType="button"
                        containerStyles="text-white text-sm rounded-sm bg-neutral-500 min-w-[80px]"
                      />
                    </Link>
                  </div>
                </div>
                
              </div>
            </div>

            <div className="flex self-end mt-20 mb-20 text-white whitespace-nowrap max-md:mt-10">
              <CustomButton
                title="MORE"
                btnType="button"
                containerStyles="px-5 text-lg text-white-600 block"
              />
              <div className="mt-2">
              <HiArrowNarrowRight/>
              </div>
            </div>
          </div>
        
      </div>
      </div>
    </div>
  );
}

export default MyWork;
