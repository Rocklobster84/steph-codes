"use client";

import { MyWorkType } from "./MyWork";

const YouMayAlsoLike = ({ projectPost }: { projectPost: MyWorkType }) => {

  const { _id, description, image, title, button2, button2Link } = projectPost;

  return (
    <>
    
    <div className="py-4 flex justify-center">
      <div className="w-full max-w-sm bg-accent rounded-lg border border-gray-200 shadow-md">
        <div className="flex flex-col items-center pt-4 pb-10">
          <img src={image} alt={title} className="object-contain w-full h-auto aspect-[2.1]" />
            <h5 className="mb-1 text-xl font-medium text-black">
              {title}
            </h5>
            <span className="text-sm text-accent-dark text-center">
              {description}
            </span>
            <div className="flex mt-4 space-x-3 md:mt-6">
              <a href={`/project/${_id}`} className="inline-flex items-center py-2 px-4 text-sm md:text-xs font-medium text-center bg-accent-hover rounded-lg hover:bg-accent-dark focus:ring-4 focus:outline-none focus:ring-blue-300">
                Details
              </a>
              <a href={button2Link} target="_blank" className="inline-flex items-center py-2 px-4 text-sm md:text-xs font-medium text-center bg-white rounded-lg border border-gray-300 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-200">
                {button2}
              </a>
            </div>
        </div>
      </div>
    </div>  
   
    </>
  )
}

export default YouMayAlsoLike