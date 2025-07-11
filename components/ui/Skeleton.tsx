import React from 'react'

const Skeleton = () => {
  return (
    <>
      <div className="flex items-center gap-4">
        <div className="skeleton circle h-20 w-20"></div>
          <div className="flex flex-col gap-3 flex-1">
            <div className="skeleton h-4 w-5/6"></div>
            <div className="skeleton h-4 w-3/4"></div>
          </div>
      </div>
    </>
  )
}

export default Skeleton