import React from 'react'
import ServicesPage from './_components/services/ServicesPage'
import EngagementSection from './_components/EngagementSection/EngagementSection'
import ServiceCTASection from './_components/CTASection/CTASection'
import FAQSection from './_components/faq-section/faqSection'
import MarketProblem from './_components/market-prlm/MarketProblem'
import AventraSolution from './_components/AventraSolution/AventraSolution'

const page = () => {
  return (
    <div>
      <ServicesPage />
      
      <MarketProblem />
      <EngagementSection />

      <AventraSolution />
      <FAQSection />
      <ServiceCTASection />
    </div>
  )
}

export default page
