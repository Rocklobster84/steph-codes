"use client";

import Link from "next/link";
import CustomButton from "./CustomButton";
import { Project, User } from "../sanity.types";
import Markdown from 'react-markdown';

export type MyWorkType = Omit<Project, "user"> & { user?: User };

const MyWork = ({ projectPost }: { projectPost: MyWorkType}) => {

const { _id, description, image, title, copy } = projectPost;

  return (
    <>       
      <div className="flex flex-col mx-auto max-w-3/4 sm:max-w-3/4 md:max-w-3/4 lg:max-w-2/3">
        <div className="flex flex-nowrap gap-5 justify-between w-full max-md:max-w-full">
          <div className="flex flex-col max-md:max-w-full">
            <div className="mt-28 max-md:mt-10 max-md:mr-1.5 max-md:max-w-full">
              <div className="flex gap-5 items-start max-md:flex-col">

                <div className="w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col flex-grow justify-center items-start px-10 py-8 w-full bg-accent max-md:px-5 max-md:mt-5 max-md:max-w-full">
                    <img src={image} alt={title} className="object-contain w-full h-auto aspect-[2.1]" />
                  </div>
                </div>
      
                <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col text-3xl text-white mt-10 md:mt-0 max-md:max-w-full">
                    <div className="self-start titles font-bold uppercase">
                      {title}
                    </div>

                    <h5 className="mt-4">{description}</h5>

                    <p className="mt-4 md:max-w-full text-xl">
                      <Markdown>
                        {copy}
                      </Markdown>
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
          </div>
        </div>
      </div>
    </>     

  );
}

export default MyWork;
