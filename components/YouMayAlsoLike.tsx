"use client";

import Link from "next/link";
import { Project, User } from "../sanity.types"
import { MyWorkType } from "./MyWork";

const YouMayAlsoLike = ({ projectPost }: { projectPost: MyWorkType }) => {

  const { _id, description, image, title, copy } = projectPost;

  return (
    <>
      <li className="project-card group">
        <div className="flex-between gap-5">
          <div className="flex-1">

            <div className="self-start titles font-bold uppercase line-clamp-1 text-center">
              {title}
            </div>

            <h5 className="mt-4 project-card_desc">{description}</h5>

            <img src={image} alt={title} className="object-contain w-full h-auto aspect-[2.1]" />

          </div>
        </div>
      </li>
    </>
  )
}

export default YouMayAlsoLike