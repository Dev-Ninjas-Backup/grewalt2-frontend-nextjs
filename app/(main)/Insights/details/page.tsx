import  { Suspense } from 'react'
import InsightsDetails from './_components/InsightsDetails'
// import InsightDetailsContent from './_components/InsightDetailsContent'


const page = () => {
  return (
    <div>
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            Loading...
          </div>
        }
      >
        <InsightsDetails />
      </Suspense>
      {/* <InsightDetailsContent /> */}
    </div>
  );
}

export default page
