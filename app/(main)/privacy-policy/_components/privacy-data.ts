import { footer } from "framer-motion/client";

export const PRIVACY_CONTENT = {
  title: "Privacy Policy",
  effectiveDate: "1st March 2026",
  intro:
    "This Privacy Policy explains how MKTG INTELLECT GROUP UK LIMITED (trading as Aventra3) collects, uses, and protects personal data.",
  companyDetails: {
    number: "16066406",
    office:
      "Studio 9, 50-54 St. Pauls Square, Birmingham, United Kingdom, B3 1QS",
    website: "www.aventra3.com",
    email: "info@aventra3.com",
  },
  sections: [
    {
      id: 1,
      title: "Who We Are",
      content:
        "MKTG INTELLECT GROUP UK LIMITED operates Aventra3, a specialist talent, workforce, and advisory firm serving organisations in AI, Blockchain, Crypto, Web3 and emerging technology sectors globally. For the purposes of data protection law, we act as a Data Controller in relation to personal data collected through our website and recruitment activities.",
    },
    {
      id: 2,
      title: "Data Protection Framework",
      content: "We process personal data in accordance with:",
      list: [
        "The UK General Data Protection Regulation (UK GDPR)",
        "The Data Protection Act 2018",
        "Where applicable, the EU General Data Protection Regulation (EU GDPR)",
      ],
      footer:
        "Where we process personal data relating to individuals located within the European Economic Area (EEA), we comply with applicable EU data protection requirements.",
    },
    {
      id: 3,
      title: "Categories of Personal Data We Collect",
      subsections: [
        {
          title: "A. Candidate Data",
          intro: "We may process:",
          list: [
            "Full name",
            "Contact details (email, phone, location)",
            "Curriculum vitae and employment history",
            "Education and professional qualifications",
            "Compensation expectations",
            "References (where provided)",
            "Publicly available professional profile information",
          ],
          footer:
            "We do not intentionally collect special category data unless voluntarily provided and necessary for legitimate recruitment purposes.",
        },
        {
          title: "B. Client & Business Contact Data",
          list: [
            "Name",
            "Job title",
            "Company details",
            "Business contact information",
            "Correspondence records",
          ],
        },
        {
          title: "C. Website & Technical Data",
          list: [
            "IP address",
            "Browser type and version",
            "Device type",
            "Usage data",
            "Cookie identifiers",
          ],
        },
      ],
    },
    {
      id: 4,
      title: "How We Collect Personal Data",
      content: "We collect personal data when:",
      list: [
        "You submit information via www.aventra3.com",
        "You contact us directly via email or telephone",
        "We identify professional profiles from publicly available sources",
        "A client provides relevant candidate information",
        "You interact with our website or digital platforms",
      ],
      footer:
        "Where we process personal data relating to individuals located within the European Economic Area (EEA), we comply with applicable EU data protection requirements.",
    },

    {
      id: 5,
      title: "Lawful Bases for Processing",
      content:
        "Under UK GDPR and, where applicable, EU GDPR, we rely on the following lawful bases:",
      subsections: [
        {
          title: "Legitimate Interests",
          intro:
            "To provide recruitment and advisory services, build professional networks, and grow our business responsibly.",
        },
        {
          title: "Contractual Necessity",
          intro:
            "Where processing is necessary to fulfil a service agreement or engagement.",
        },
        {
          title: "Consent",
          intro: "Where required, including for marketing communications.",
        },
        {
          title: "Legal Obligation",
          intro:
            "Where we must comply with applicable laws or regulatory requirements.",
          footer:
            "We conduct legitimate interest assessments where appropriate to ensure balanced and lawful processing.",
        },
      ],
    },

    {
      id: 6,
      title: "How We Use Personal Data",
      content: "We use personal data to:",
      list: [
        "Identify, assess and present candidates for roles",
        "Provide talent strategy and workforce advisory services",
        "Communicate with candidates and clients",
        "Maintain professional records",
        "Improve our website and services",
        "Comply with regulatory and legal obligations",
      ],
      footer: "We do not sell personal data.",
    },

    {
      id: 7,
      title: "AI & Automated Processing",
      content: "Aventra3 may utilise AI-assisted technologies to support:",
      list: [
        "Talent sourcing",
        "CV screening",
        "Market research and workforce analysis",
      ],
      subsections: [
        {
          //   title: "",
          intro: "However:",
          list: [
            "No solely automated decision-making determines employment outcomes.",
            "All placement decisions involve meaningful human oversight.",
            "We do not engage in automated decision-making that produces legal or similarly significant effects under Article 22 UK GDPR.",
          ],
          footer:
            "We do not intentionally collect special category data unless voluntarily provided and necessary for legitimate recruitment purposes.",
        },
      ],
    },

    {
      id: 8,
      title: "Data Sharing",
      content: "We may share personal data with:",
      list: [
        "Clients seeking talent (relevant candidate data only)",
        "Professional advisers (legal, compliance, accounting)",
        "Secure IT and cloud service providers",
        "Regulatory or law enforcement authorities where legally required",
      ],
      footer:
        "All third parties are required to process personal data securely and lawfully.We do not transfer personal data to sanctioned jurisdictions.",
    },
    {
      id: 9,
      title: "International Transfers",
      content:
        "As we operate internationally, personal data may be transferred outside the United Kingdom.",
      list: [
        "UK International Data Transfer Agreements (IDTAs))",
        "UK Addendum to EU Standard Contractual Clauses",
        "Transfers to jurisdictions recognised as providing adequate protection",
      ],
    },

    {
      id: 10,
      title: "Data Retention",
      content:
        "We retain personal data only for as long as necessary to fulfil the purposes for which it was collected.",
      list: [
        "Candidate data may be retained for up to 24 months for recruitment purposes unless deletion is requested earlier.",
        "Client data may be retained for the duration of the business relationship and any applicable statutory retention periods.",
      ],
      footer:
        "We periodically review stored data to ensure it remains relevant and proportionate.",
    },

    {
      id: 11,
      title: "Data Security",
      content:
        "We implement appropriate technical and organisational measures to protect personal data against:",
      list: [
        "Unauthorised access",
        "Accidental loss",
        "Misuse or alteration",
        "Unlawful disclosure",
      ],
      footer:
        "Access to personal data is restricted to authorised personnel and service providers on a need-to-know basis.",
    },
    {
      id: 12,
      title: "Your Data Protection Rights",
      content:
        "Under UK GDPR (and EU GDPR where applicable), you have the right to:",
      list: [
        "Access your personal data",
        "Request rectification of inaccurate data",
        "Request erasure (right to be forgotten)",
        "Restrict processing",
        "Object to processing",
        "Request data portability",
        "Withdraw consent where processing is based on consent",
      ],
      footer:
        "You also have the right to lodge a complaint with the Information Commissioner’s Office (ICO).",
    },
    {
      id: 13,
      title: "Cookies",
      content:
        "Our website may use cookies and analytics tools to enhance user experience and improve performance.",
      subsections: [
        {
          intro:
            "You may manage cookie preferences through your browser settings.",
        },
      ],
      footer: "A separate Cookie Policy may be provided where required.",
    },
    {
      id: 15,
      title: "Changes to This Privacy Policy",
      content:
        "We may update this Privacy Policy periodically to reflect regulatory or operational changes.",
      subsections: [
        {
          intro:
            "Updated versions will be published on www.aventra3.com with a revised effective date.",
        },
      ],
      footer:
        "Continued use of our website constitutes acceptance of the updated policy.",
    },
  ],
};
