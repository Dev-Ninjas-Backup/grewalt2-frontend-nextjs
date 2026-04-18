// import React from 'react'
import ClientsSection from './_components/ClientsSection/ClientsSection'
import ClientCTASection from './_components/CTASection/CTASection'
import EngagementModel from './_components/Engagement/EngagementModel'
import PartnerSection from './_components/PartnerSection/PartnerSection'
// import SupportSection from './_components/SupportSection/SupportSection'

const page = () => {
  return (
    <div>
      <ClientsSection />
      {/* <SupportSection /> */}
      <EngagementModel />
      <PartnerSection />
      <ClientCTASection />
    </div>
  )
}

export default page
