

const MyWorkHeading = () => {

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
          </div>

        </div>
      </div>
    </div>
  );
}

export default MyWorkHeading;
