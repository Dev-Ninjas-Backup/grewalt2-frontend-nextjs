import React from 'react'
import ServicesPage from './_components/services/ServicesPage'
import EngagementSection from './_components/EngagementSection/EngagementSection'
import ServiceCTASection from './_components/CTASection/CTASection'
import FAQSection from './_components/faq-section/faqSection'

const page = () => {
  return (
    <div>
      <ServicesPage />
      
      <EngagementSection />
      <FAQSection />
      <ServiceCTASection />
    </div>
  )
}

export default page
