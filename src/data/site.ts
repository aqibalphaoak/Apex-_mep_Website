/**
 * Central source of truth for all site content.
 * Every value here is taken from official documents:
 *  - Ontario Certificate of Incorporation (Sept 18, 2026)
 *  - The company Business Plan (Muhammad Azeem Ashraf)
 *  - Registered address provided for incorporation.
 *
 * Values marked `TODO` are placeholders; replace them with real details
 * before going live.
 */

export const company = {
  legalName: 'APEX MEP CONTRACT SOLUTIONS INC.',
  name: 'Apex MEP Contract Solutions Inc.',
  shortName: 'Apex MEP',
  tagline: 'MEP Contract Management, Construction Procurement & Project Support Services',
  // Official, from the Certificate of Incorporation
  corpNumber: '1001747324',
  incorporated: 'September 18, 2026',
  jurisdiction: 'Ontario, Canada',
  act: 'Business Corporations Act (Ontario)',

  // Registered address (provided for incorporation)
  address: {
    street: '21 King Street West',
    city: 'Hamilton',
    region: 'ON',
    regionName: 'Ontario',
    postalCode: 'L8P 4W7',
    country: 'Canada',
  },

  // TODO: replace these placeholders with the real business contact details.
  email: 'info@apexmepsolutions.ca',
  phone: '', // e.g. '+1 (905) 000-0000'. Leave empty to hide phone on the site
  linkedin: '', // e.g. 'https://www.linkedin.com/company/apex-mep-contract-solutions'

  serviceArea: 'Ontario, Canada',
  investment: 'CAD $50,000',
} as const;

export const founder = {
  name: 'Muhammad Azeem Ashraf',
  title: 'Founder & Chief Executive Officer',
  ownership: '100% Owner',
  summary:
    'Electrical Engineer and Contracts Manager with more than ten years of professional experience in the UAE construction and MEP sector.',
  education:
    'Bachelor of Science in Electrical Engineering, University of Management and Technology, Lahore, Pakistan (2014)',
  training: ['AutoCAD training', 'Programmable Logic Controllers (PLC) training'],
  software: ['AutoCAD', 'MS Project', 'MS Excel', 'MS Word', 'MS PowerPoint'],
  expertise: [
    'FIDIC contracts & contract administration',
    'Claims, variation & Extension of Time (EOT) claims',
    'Construction procurement & subcontractor coordination',
    'Commercial risk assessment',
    'Project management & coordination',
    'Electrical engineering & MEP systems',
    'Budgeting, cost control & progress billing',
  ],
  career: [
    {
      role: 'Contracts Manager',
      focus:
        'End-to-end contract administration, procurement strategy and commercial operations for MEP and trading supply contracts, including drafting and negotiating contracts and subcontracts, identifying commercial risks, administering variations and progress-payment applications, and managing contractual notices.',
    },
    {
      role: 'Project Manager',
      focus:
        'Managed project teams and MEP technical-services projects: site operations, resource allocation, schedules, client/consultant/subcontractor coordination, budget monitoring, progress billing and scope management.',
    },
    {
      role: 'Senior Electrical Engineer',
      focus:
        'Supervised electrical engineering operations, installation and design compliance, reviewed technical submissions and shop drawings, monitored subcontractors and supported commercial evaluation of variation requests.',
    },
    {
      role: 'General Electrical Engineer',
      focus:
        'Electrical installation, testing and commissioning, engineering drawings, technical material submittals, subcontractor coordination and progress measurement.',
    },
  ],
} as const;

export type Service = {
  slug: string;
  icon: string;
  title: string;
  summary: string;
  points: string[];
};

export const services: Service[] = [
  {
    slug: 'mep-contract-administration',
    icon: 'contract',
    title: 'MEP Contract Administration',
    summary:
      'Structured administration of your MEP contracts and subcontracts, so obligations, notices and correspondence are always under control.',
    points: [
      'Contract review & scope analysis',
      'Contract documentation & correspondence',
      'Notice preparation',
      'Compliance & obligation tracking',
      'Subcontract administration',
    ],
  },
  {
    slug: 'construction-procurement',
    icon: 'procurement',
    title: 'Construction Procurement',
    summary:
      'End-to-end procurement support that helps you source the right suppliers and subcontractors at the right price.',
    points: [
      'Supplier & subcontractor sourcing',
      'Vendor quotation collection',
      'Comparative quotation analysis',
      'Procurement planning & tracking',
      'Purchase documentation & delivery coordination',
    ],
  },
  {
    slug: 'claims-variation-support',
    icon: 'claims',
    title: 'Claims & Variation Support',
    summary:
      'Commercial and documentation support for variations, change orders and Extension-of-Time claims, properly recorded and substantiated.',
    points: [
      'Variations & change orders',
      'Extension-of-Time (EOT) documentation',
      'Cost impacts & delay records',
      'Scope-change documentation',
      'Supporting contract correspondence',
    ],
  },
  {
    slug: 'cost-control',
    icon: 'cost',
    title: 'Cost Control',
    summary:
      'Keep projects on budget with clear cost tracking, progress measurement and commercial reporting.',
    points: [
      'Budget monitoring & cost tracking',
      'Progress measurement',
      'Variation cost tracking',
      'Procurement cost comparisons',
      'Invoice & progress-payment support',
    ],
  },
  {
    slug: 'project-coordination',
    icon: 'coordination',
    title: 'Project Coordination',
    summary:
      'Reliable coordination between technical work, schedules and stakeholders to keep projects moving.',
    points: [
      'Project scheduling & milestone tracking',
      'Client, contractor & subcontractor coordination',
      'Project documentation',
      'Meeting coordination',
      'Progress reporting',
    ],
  },
  {
    slug: 'tender-bid-support',
    icon: 'tender',
    title: 'Tender & Bid Support',
    summary:
      'Practical support to help contractors prepare stronger, better-organised and more competitive bids.',
    points: [
      'Scope review & tender document organisation',
      'Supplier quotation requests',
      'Subcontractor pricing & cost comparison',
      'Commercial risk identification',
      'Tender clarifications & bid documentation',
    ],
  },
];

export const industries = [
  {
    icon: 'building',
    title: 'General Contractors',
    text: 'Companies requiring additional contract and procurement support to run projects smoothly.',
  },
  {
    icon: 'mep',
    title: 'MEP Contractors',
    text: 'Mechanical, electrical and plumbing contractors requiring commercial and project-management assistance.',
  },
  {
    icon: 'electrical',
    title: 'Electrical Contractors',
    text: 'Businesses that need contract, procurement and project-coordination support.',
  },
  {
    icon: 'subcontractor',
    title: 'Construction Subcontractors',
    text: 'Small and medium subcontractors that lack dedicated contract-management personnel.',
  },
  {
    icon: 'developer',
    title: 'Property Developers',
    text: 'Developers requiring project documentation and contractor coordination.',
  },
  {
    icon: 'facility',
    title: 'Property & Facility Companies',
    text: 'Companies managing technical maintenance and construction projects.',
  },
  {
    icon: 'firm',
    title: 'Engineering & PM Firms',
    text: 'Firms that may require additional project coordination and commercial support.',
  },
];

export const values = [
  {
    title: 'Professionalism',
    text: 'Providing reliable and structured professional services.',
  },
  {
    title: 'Integrity',
    text: 'Maintaining transparent communication and ethical business practices.',
  },
  {
    title: 'Accountability',
    text: 'Taking responsibility for project documentation, commercial processes and client commitments.',
  },
  {
    title: 'Efficiency',
    text: 'Helping clients reduce unnecessary delays and administrative inefficiencies.',
  },
  {
    title: 'Technical Understanding',
    text: 'Using engineering knowledge to understand MEP project requirements.',
  },
  {
    title: 'Client Focus',
    text: 'Developing long-term relationships rather than relying on one-time assignments.',
  },
];

export const advantages = [
  {
    title: 'Engineering + Commercial in one place',
    text: 'Many consultants have either engineering knowledge or contract-management knowledge. Apex brings both, so we understand what needs to be built and how the project should be commercially managed.',
  },
  {
    title: '10+ years of relevant experience',
    text: 'A decade of hands-on MEP, project-management and contracts experience across the construction sector.',
  },
  {
    title: 'FIDIC & claims expertise',
    text: 'Practical experience with FIDIC contracts, variations, Extension-of-Time claims and commercial risk.',
  },
  {
    title: 'MEP specialisation',
    text: 'A focused understanding of mechanical, electrical and plumbing project requirements.',
  },
  {
    title: 'Structured digital systems',
    text: 'Contract registers, procurement trackers, variation and EOT logs, and cost-control dashboards give smaller contractors big-department capability without the overhead.',
  },
];

export const process = [
  { step: '01', title: 'Initial Consultation', text: 'We discuss your project, challenges and objectives.' },
  { step: '02', title: 'Project Assessment', text: 'We review scope, contracts and commercial requirements.' },
  { step: '03', title: 'Proposal', text: 'A clear proposal with scope, approach and fees.' },
  { step: '04', title: 'Agreement', text: 'We confirm terms and get to work.' },
  { step: '05', title: 'Service Delivery', text: 'Structured, documented delivery of the agreed support.' },
  { step: '06', title: 'Follow-up', text: 'Ongoing review that builds a foundation for a long-term relationship.' },
];

export const mission =
  'To provide reliable, technically informed and commercially focused contract, procurement and project-support services that help Ontario construction companies deliver projects efficiently, control costs and manage contractual obligations.';

export const vision =
  'To become a recognised Ontario-based specialist in MEP commercial and project-support services, serving small and medium-sized construction companies and gradually expanding into larger construction and infrastructure projects.';

/** Ways clients can engage Apex (business model). */
export const engagements = [
  { title: 'Hourly Consulting', text: 'Purchase specialised professional time as you need it.' },
  { title: 'Fixed-Fee Assignments', text: 'Defined pieces of work such as contract reviews, procurement packages and claims documentation, at a set fee.' },
  { title: 'Monthly Retainers', text: 'Ongoing commercial and project-support services on a predictable monthly basis.' },
  { title: 'Project-Based Support', text: 'Dedicated support for larger construction projects under a project-specific agreement.' },
];

/**
 * Ontario / Canada market context (from the business plan, with sources).
 * These are published figures used for market context, so keep the source labels.
 */
export const marketStats = [
  {
    value: '$84.8B',
    label: 'Ontario non-residential construction capital spending intentions for 2026',
    sub: '+12.2% year over year',
    source: 'Ontario Construction Secretariat',
  },
  {
    value: '578,900',
    label: 'People employed in Ontario’s construction industry (2024)',
    sub: '≈7.1% of Ontario’s workforce',
    source: 'Job Bank',
  },
  {
    value: '$46.8B',
    label: 'Canada engineering-services operating revenue (2024)',
    sub: '+6.5% year over year',
    source: 'Statistics Canada',
  },
  {
    value: 'to 2035',
    label: 'Sustained construction activity projected across Ontario',
    sub: 'Institutional, commercial, industrial & civil',
    source: 'BuildForce Canada',
  },
];

export const faqs = [
  {
    q: 'Are you a construction contractor?',
    a: 'No. Apex is a professional-services company. We do not build or carry heavy equipment. Instead, we provide the commercial, contract, procurement and project-management support that helps contractors deliver their own projects more effectively.',
  },
  {
    q: 'Do you provide professional-engineering or legal services?',
    a: 'We provide commercial, documentation and project-support services. Any work that requires professional-engineering authorisation is undertaken only in accordance with Ontario requirements, and legal matters are referred to appropriately licensed professionals.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We are based in Hamilton and serve construction businesses across Ontario, Canada. Much of our work is delivered digitally, so we can support projects province-wide.',
  },
  {
    q: 'How do you charge for your services?',
    a: 'Flexibly, through hourly consulting, fixed-fee assignments, monthly retainers, or project-based support. We recommend the arrangement that best fits your project and budget after an initial consultation.',
  },
  {
    q: 'Can you help a small contractor without a commercial department?',
    a: 'Absolutely. That is exactly who we serve best. You get senior contract, procurement and cost-control expertise on demand, without the cost of a permanent in-house team.',
  },
  {
    q: 'How do we get started?',
    a: 'Contact us for a consultation. We’ll discuss your project and challenges, assess what’s needed, and send a clear proposal with scope and fees.',
  },
];

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/services/', label: 'Services' },
  { href: '/industries/', label: 'Industries' },
  { href: '/why-choose-us/', label: 'Why Choose Us' },
  { href: '/contact/', label: 'Contact' },
];
