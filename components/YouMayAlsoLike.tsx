"use client";

import Link from "next/link";
import { Project, User } from "../sanity.types"
import { MyWorkType } from "./MyWork";

const YouMayAlsoLike = ({ projectPost }: { projectPost: MyWorkType }) => {

  const { _id, description, image, title, copy } = projectPost;

  return (
    <>
      <li className="project-card group text-center text-wrap">
        <div className="flex-between gap-5">
          <div className="flex-1">

            <div className="self-start titles font-bold uppercase line-clamp-1 text-center">
              {title}
            </div>

            <h5 className="mt-4 project-card_desc text-wrap">{description}</h5>

            <img src={image} alt={title} className="object-contain w-full h-auto aspect-[2.1]" />
          <div className="flex mt-4 space-x-3 md:mt-6">
            <a href={`/project/${_id}`}
                       className="inline-flex items-center py-2 px-4 
                              text-sm font-medium text-center 
                              text-black bg-accent-hover rounded-lg 
                              hover:bg-accent-dark focus:ring-4 
                              focus:outline-none focus:ring-blue-300">
                        Details
                    </a>
                    <a href="#" 
                       className="inline-flex items-center py-2 px-4 
                              text-sm font-medium text-center 
                              text-gray-900 bg-white rounded-lg 
                              border border-gray-300 hover:bg-gray-100 
                              focus:ring-4 focus:outline-none 
                              focus:ring-gray-200 dark:bg-gray-800 
                              dark:text-white dark:border-gray-600 
                              dark:hover:bg-gray-700 
                              dark:hover:border-gray-700 
                              dark:focus:ring-gray-700">
                        View on GitHub
                    </a>
                    </div>
          </div>
        </div>
      </li>
    </>
  )
}

export default YouMayAlsoLike