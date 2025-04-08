import React from "react"

const Loading = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      {/* Skeleton for the page title */}
      <div className="h-8 w-[300px] mb-4  rounded-sm animate-pulse bg-primary/10" />

      {/* Skeleton for the quiz content */}
      <div className="flex flex-col gap-5 w-full max-w-3xl">
        {/* Skeleton for each question */}
        {[...Array(3)].map((_, index) => (
          <div key={index} className="flex flex-col gap-3">
            {/* Skeleton for question text */}
            <div className="h-6 w-full  rounded-sm animate-pulse bg-primary/10" />
            {/* Skeleton for answers */}
            <div className="flex flex-col gap-2">
              <div className="h-4 w-[80%]  rounded-sm animate-pulse bg-primary/10" />
              <div className="h-4 w-[70%]  rounded-sm animate-pulse bg-primary/10" />
              <div className="h-4 w-[90%]  rounded-sm animate-pulse bg-primary/10" />
              <div className="h-4 w-[60%]  rounded-sm animate-pulse bg-primary/10" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
