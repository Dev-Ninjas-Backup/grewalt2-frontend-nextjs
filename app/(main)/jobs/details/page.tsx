import React, { Suspense } from 'react'
import JobDetails from './_components/JobDetails'

const page = () => {
  return (
    <div className="-16">
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="animate-pulse text-[#2F8BDD] font-bold">
              Loading Jobs...
            </div>
          </div>
        }
      >
        <JobDetails />
      </Suspense>
    </div>
  );
}

export default page
