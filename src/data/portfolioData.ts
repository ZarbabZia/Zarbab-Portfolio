import {
  PersonalInfo,
  ExpertiseItem,
  ExperienceItem,
  UpworkProfile,
  AchievementItem,
  DigitalServiceItem,
  IndustryItem,
  ToolGroup,
  EducationItem,
  ApproachStep,
} from '../types';

/**
 * =========================================================================
 * ZARBAB ZIA — PORTFOLIO CONFIGURATION DATA
 * 
 * To customize this portfolio with your real assets:
 * 1. Replace `personalInfo.heroPortrait.src` with the path to your photo
 *    (e.g., '/assets/zarbab-zia-photo.jpg' or an uploaded image path).
 * 2. In `upworkProfiles`, replace each `screenshot` property with your uploaded
 *    main profile screenshot path (e.g., '/assets/upwork/video-editing.png').
 * 3. Update contact links (LinkedIn URL, resume download) when ready.
 * =========================================================================
 */

export const personalInfo: PersonalInfo = {
  fullName: "Zarbab Zia",
  professionalTitle: "Business Development Manager",
  positioning: "Business Development Manager | Upwork Specialist | B2B Client Acquisition",
  location: "Lahore, Pakistan",
  headline: "Turning Opportunities Into Business Growth.",
  leadDescription:
    "I specialize in helping digital marketing agencies and technology-driven businesses identify opportunities, connect with international clients, and build stronger acquisition pipelines through strategic prospecting, personalized outreach, and effective business development.",
  heroPortrait: {
    src: "./zarbab-zia-portrait.png",
    alt: "Zarbab Zia — Business Development Manager & Upwork Specialist",
    isPlaceholder: false,
    note: "Professional portrait photo uploaded",
  },
  contactLinks: {
    email: "zarbabzia23@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/zarbab-zia-98345a2ba/",
    whatsappNumber: "+923234617754",
    whatsappUrl: "https://wa.me/923234617754",
    resumeUrl: "",   // Add your PDF resume URL or asset path when ready
  },
};

export const aboutContent = {
  sectionLabel: "ABOUT ME",
  heading: "Building Connections That Create Opportunities.",
  paragraphs: [
    "I'm a Business Development Manager with a professional background in international B2B client acquisition, freelance-platform business development, lead generation, and sales pipeline development.",
    "My experience spans digital marketing agencies, AI automation solutions, software development, IT services, video editing, and graphic design businesses.",
    "I focus on understanding client requirements, identifying relevant business opportunities, creating personalized proposals, and building professional relationships that support long-term growth.",
    "Digital marketing is my primary area of specialization, particularly acquiring clients for SEO, Meta Ads, Google Ads, and social media marketing services.",
    "Alongside agency business development, I've worked with technology-focused businesses offering AI-powered solutions and software services.",
    "My approach prioritizes research, communication, relationship building, and identifying opportunities with genuine business potential.",
  ],
  keyPillars: [
    { title: "Specialized Focus", desc: "Digital Marketing Agency Growth & Client Acquisition" },
    { title: "Marketplace Mastery", desc: "Upwork, Freelancer.com & Inbound Opportunity Conversion" },
    { title: "Outbound Precision", desc: "LinkedIn Sales Navigator & Targeted Cold Email Pipelines" },
    { title: "Emerging Tech", desc: "AI Automation, Voice Agents & Custom Software Outreach" },
  ],
};

export const coreExpertise: ExpertiseItem[] = [
  {
    id: "exp-1",
    number: "01",
    title: "Upwork Business Development",
    description:
      "Project identification, bid qualification, profile management, personalized proposals, client communication, follow-ups, and client acquisition.",
    iconName: "Briefcase",
  },
  {
    id: "exp-2",
    number: "02",
    title: "International B2B Lead Generation",
    description:
      "Targeted prospect research, business identification, decision-maker outreach, qualification, and opportunity development.",
    iconName: "Globe",
  },
  {
    id: "exp-3",
    number: "03",
    title: "Digital Marketing Client Acquisition",
    description:
      "Business development for agencies offering Meta Ads, Google Ads, SEO, and social media marketing services.",
    iconName: "Megaphone",
  },
  {
    id: "exp-4",
    number: "04",
    title: "LinkedIn & Cold Email Outreach",
    description:
      "LinkedIn Sales Navigator prospecting, cold email campaigns, outreach personalization, and targeted lead generation.",
    iconName: "MailCheck",
  },
  {
    id: "exp-5",
    number: "05",
    title: "Client Relationship Management",
    description:
      "Communication with prospects, requirements gathering, follow-up management, negotiation, and pipeline development.",
    iconName: "Users",
  },
  {
    id: "exp-6",
    number: "06",
    title: "AI & Technology Services Business Development",
    description:
      "Client acquisition for AI automation, AI voice agents, software development, web development, and IT services.",
    iconName: "Cpu",
  },
];

export const professionalExperience: ExperienceItem[] = [
  {
    id: "pos-1",
    company: "Aquila360",
    role: "Business Development Manager",
    period: "August 2025 – Present",
    statusNote: "Dates subject to final confirmation",
    specialization: "AI Automation, AI Voice Agents, Software Solutions, and IT Services",
    responsibilities: [
      "Developed B2B outreach strategies",
      "Used LinkedIn Sales Navigator for prospecting",
      "Identified and contacted international decision-makers",
      "Managed inbound freelance-platform opportunities",
      "Supported acquisition for AI-powered automation services",
      "Coordinated with technical teams on client requirements",
    ],
  },
  {
    id: "pos-2",
    company: "Artevus",
    role: "Business Development Consultant",
    period: "February 2026 – June 2026",
    specialization: "Construction, Legal Services, Hospitality, and Technology",
    responsibilities: [
      "Targeted cold email campaigns",
      "Prospect research using Apollo, Snov.io, and Hunter.io",
      "B2B lead generation",
      "Client opportunity identification",
      "Market and competitor research",
      "Client communication and negotiation",
    ],
    documentedResult: "70% growth in qualified leads within three months",
  },
  {
    id: "pos-3",
    company: "E1SOL",
    role: "Business Development Manager",
    period: "July 2024 – June 2025",
    specialization: "Freelance Platform Client Acquisition and Digital/IT Services",
    responsibilities: [
      "Freelancer.com bidding",
      "Business opportunity research",
      "Client communication",
      "Proposal development",
      "Cold email campaigns",
      "Customer relationship development",
    ],
  },
  {
    id: "pos-4",
    company: "Vital Steer LLC",
    role: "Business Development Manager",
    period: "October 2023 – June 2024",
    specialization: "B2B Lead Generation, Legal Services, and Restaurants",
    responsibilities: [
      "Qualified lead generation",
      "Cold email outreach",
      "Prospect identification",
      "Market research",
      "Competitor analysis",
      "Sales pipeline development",
    ],
    documentedResult: "70% lead pipeline growth over eight months",
  },
  {
    id: "pos-5",
    company: "Ecomatives",
    role: "Business Development & Client Acquisition",
    period: "Freelance Contract",
    isFreelance: true,
    specialization: "Meta Ads Services for E-commerce Businesses",
    responsibilities: [
      "Managed Upwork business development activity",
      "Identified relevant e-commerce opportunities",
      "Developed client-focused proposals",
      "Conducted LinkedIn outreach",
      "Communicated with prospective clients",
      "Supported conversion of opportunities into paying clients",
    ],
    documentedResult: "Acquired five clients within four months",
  },
];

export const upworkProfiles: UpworkProfile[] = [
  {
    id: "upwork-video-editing",
    title: "Video Editing Upwork Profile",
    category: "Video Editing",
    reportedStatus: "Top Rated",
    description:
      "Upwork business development support for video editing services, including relevant project research, proposal writing, client communication, follow-ups, and opportunity management.",
    profileUrl: "https://www.upwork.com/freelancers/hassanabid?mp_source=share",
    screenshot: "./upwork-video-editing.png",
    placeholderAlt: "Upwork profile screenshot for Video Editing services (Hassan A. - Top Rated)",
  },
  {
    id: "upwork-ai-ml",
    title: "AI/ML Upwork Profile",
    category: "Artificial Intelligence & Machine Learning",
    reportedStatus: "Top Rated",
    description:
      "Upwork profile management and business development representation for AI/ML-related services, focused on opportunity discovery, relevant proposal development, and prospective client engagement.",
    profileUrl: "https://www.upwork.com/freelancers/~01e2bec7441c3c8eb2?mp_source=share",
    screenshot: "./upwork-ai-ml.png",
    placeholderAlt: "Upwork profile screenshot for AI/ML services (Omar A. - Top Rated)",
  },
  {
    id: "upwork-social-media-01",
    title: "Social Media Marketing Profile 01",
    category: "Social Media Marketing",
    reportedStatus: "Rising Talent",
    description:
      "A social media marketing Upwork profile included in my managed-profile portfolio, representing my experience in identifying opportunities and supporting business development for marketing services.",
    profileUrl: "https://www.upwork.com/freelancers/~010dbcc1df6b230139?mp_source=share",
    screenshot: "./upwork-social-media-01.png",
    placeholderAlt: "Upwork profile screenshot for Social Media Marketing (Muhammad F. - Rising Talent)",
  },
 {
    id: "upwork-social-media-02",
    title: "Social Media Marketing Profile 02",
    category: "Social Media Marketing",
    reportedStatus: "Rising Talent",
    description:
      "A second social media marketing profile within my Upwork management portfolio, reflecting work focused on prospect opportunities, proposal preparation, and client acquisition support.",
    profileUrl: "https://www.upwork.com/freelancers/~015be36e2eab7271a9",
    screenshot: "./upwork-social-media-02.png",
    placeholderAlt: "Upwork profile screenshot for Social Media Marketing Profile 02",
  },
  {
    id: "upwork-graphic-design-01",
    title: "Graphic Design Profile 01",
    category: "Graphic Design",
    reportedStatus: "Rising Talent",
    description:
      "Business development involvement for a graphic design Upwork profile, including project identification, personalized bidding, and prospective client communication.",
    profileUrl: "https://www.upwork.com/freelancers/~0168078063c9cf82d8?mp_source=share",
    screenshot: "./upwork-graphic-design-01.png",
    placeholderAlt: "Upwork profile screenshot for Graphic Design Profile 01 (Daniyal N. - Rising Talent)",
  },
  {
    id: "upwork-graphic-design-02",
    title: "Graphic Design Profile 02",
    category: "Graphic Design",
    reportedStatus: "Verified Talent",
    description:
      "A second graphic design Upwork profile showcasing my involvement in freelance opportunity research, proposal preparation, and client follow-up activities.",
    profileUrl: "https://www.upwork.com/freelancers/~019fd2826a94efc7f6?mp_source=share",
    screenshot: "./upwork-graphic-design-02.png",
    placeholderAlt: "Upwork profile screenshot for Graphic Design Profile 02 (Komal A.)",
  },
];

export const achievements: AchievementItem[] = [
  {
    id: "ach-1",
    value: 5,
    suffix: " Clients",
    metricLabel: "Acquired in four months",
    timeframe: "4 Months",
    company: "Ecomatives",
    context: "Meta Ads client acquisition for e-commerce brands",
  },
  {
    id: "ach-2",
    value: 70,
    suffix: "%",
    metricLabel: "Growth in qualified leads",
    timeframe: "3 Months",
    company: "Artevus",
    context: "Targeted B2B outreach across legal, hospitality, and construction sectors",
  },
  {
    id: "ach-3",
    value: 70,
    suffix: "%",
    metricLabel: "Lead pipeline growth",
    timeframe: "8 Months",
    company: "Vital Steer LLC",
    context: "Multi-channel prospect identification and qualification framework",
  },
  {
    id: "ach-4",
    value: 75,
    suffix: "%",
    metricLabel: "Increase in new project inquiries",
    timeframe: "Strategic Period",
    company: "Gig Economy Growth Strategy",
    context: "Refined platform positioning and personalized proposal frameworks",
  },
  {
    id: "ach-5",
    value: 50,
    suffix: "%",
    metricLabel: "Increase in freelance profile views",
    timeframe: "Optimization Cycle",
    company: "Freelance Platform Optimization",
    context: "Profile keyword positioning, project catalog refinement, and discovery visibility",
  },
  {
    id: "ach-6",
    value: 25,
    suffix: "%",
    metricLabel: "Increase in project volume",
    timeframe: "Optimization Cycle",
    company: "Freelance Platform Optimization",
    context: "Systematic bidding cadence, response acceleration, and follow-up sequences",
  },
];

export const digitalServices: DigitalServiceItem[] = [
  { name: "Digital Marketing", category: "Core Agency", focus: "Comprehensive agency growth and outreach" },
  { name: "Meta Ads", category: "Paid Acquisition", focus: "E-commerce & direct-to-consumer client acquisition" },
  { name: "Google Ads", category: "Search & Intent", focus: "High-intent search campaign opportunity sourcing" },
  { name: "Search Engine Optimization", category: "Organic Growth", focus: "Long-term retainer client development" },
  { name: "Social Media Marketing", category: "Brand & Engagement", focus: "Content strategy & community agency representation" },
  { name: "AI Automation", category: "Technology", focus: "Workflow automation and business process tooling" },
  { name: "AI Voice Agents", category: "Next-Gen Tech", focus: "Automated calling and customer service tech acquisition" },
  { name: "Software Development", category: "Engineering", focus: "Custom web applications and full-stack software" },
  { name: "Web Development", category: "Digital Solutions", focus: "Modern responsive web applications and portals" },
  { name: "Graphic Design", category: "Creative Services", focus: "Brand identity, marketing collateral, and digital design" },
  { name: "Video Editing", category: "Media Production", focus: "Short-form, YouTube, and commercial video post-production" },
  { name: "UI/UX Services", category: "Product Design", focus: "SaaS interface and digital experience project acquisition" },
  { name: "IT Solutions", category: "Infrastructure", focus: "Enterprise IT consulting and technical support services" },
];

export const targetedIndustries: IndustryItem[] = [
  { name: "E-commerce", description: "Online stores, direct-to-consumer brands, and Shopify/Amazon merchants" },
  { name: "Digital Marketing Agencies", description: "Boutique and scale-up agencies seeking client pipeline expansion" },
  { name: "Technology Businesses", description: "SaaS providers, AI product ventures, and software engineering firms" },
  { name: "Legal Services", description: "Law firms, legal counsel, and specialized practice groups" },
  { name: "Hospitality", description: "Hotels, resorts, experiential travel, and event venues" },
  { name: "Restaurants", description: "Food & beverage brands, dining groups, and hospitality concepts" },
  { name: "Construction", description: "Contractors, engineering firms, building material distributors" },
];

export const toolGroups: ToolGroup[] = [
  {
    groupName: "Freelance Platforms",
    tools: [
      { name: "Upwork", purpose: "Primary marketplace client acquisition, proposal writing, and profile management" },
      { name: "Fiverr", purpose: "Gig packaging, inbound opportunity handling, and buyer inquiry conversion" },
      { name: "Freelancer.com", purpose: "Project bidding, client relationship development, and contest outreach" },
    ],
  },
  {
    groupName: "Prospecting & Network",
    tools: [
      { name: "LinkedIn Sales Navigator", purpose: "Advanced search filters, decision-maker mapping, and lead list building" },
    ],
  },
  {
    groupName: "Cold Email & Outreach",
    tools: [
      { name: "Apollo.io", purpose: "B2B database extraction, verified emails, and sequence staging" },
      { name: "Snov.io", purpose: "Email verification, drip campaigns, and prospect tracking" },
      { name: "Hunter.io", purpose: "Domain search, email discovery, and deliverability verification" },
    ],
  },
  {
    groupName: "Business & Market Research",
    tools: [
      { name: "Google Business Research", purpose: "Local market intelligence, business viability, and footprint audits" },
      { name: "Competitor Analysis", purpose: "Offer benchmarking, positioning evaluation, and market opportunity discovery" },
    ],
  },
  {
    groupName: "Analytics & Productivity",
    tools: [
      { name: "Google Analytics", purpose: "Traffic and conversion attribution analysis for marketing campaigns" },
      { name: "Microsoft Office", purpose: "Client presentations, documentation, and executive summaries" },
      { name: "Spreadsheet Reporting", purpose: "KPI tracking, lead logs, and pipeline conversion modeling" },
    ],
  },
  {
    groupName: "Sales Pipeline Management",
    tools: [
      { name: "CRM-Based Tracking", purpose: "Opportunity stage tracking, interaction logging, and follow-up cadences" },
    ],
  },
];

export const educationHistory: EducationItem[] = [
  {
    id: "edu-1",
    degree: "Bachelor of Science in Computer Science",
    institution: "Virtual University of Pakistan",
    period: "2020 – 2024",
    details:
      "Comprehensive technical foundation in computer science, software logic, system workflows, and analytical problem-solving, reinforcing tech-focused business development capability.",
  },
  {
    id: "edu-2",
    degree: "Intermediate in Computer Science",
    institution: "Islamia Railway College",
    details:
      "Early technical foundation in computational thinking, database concepts, and information technology fundamentals.",
  },
];

export const approachSteps: ApproachStep[] = [
  {
    stepNumber: "01",
    title: "Research",
    description: "Understand the business, its needs, its target audience, and relevant market opportunities.",
    details:
      "Before initiating any contact, I conduct in-depth analysis of the company's current footprint, competitive landscape, core offerings, and pain points to ensure alignment.",
  },
  {
    stepNumber: "02",
    title: "Identify",
    description: "Find qualified prospects and suitable projects through targeted research and platform analysis.",
    details:
      "Using precision filtering on Upwork, LinkedIn Sales Navigator, and B2B databases, I pinpoint decision-makers and high-probability project opportunities with genuine intent.",
  },
  {
    stepNumber: "03",
    title: "Personalize",
    description: "Develop relevant communication and proposals rather than sending generic pitches.",
    details:
      "Every proposal and outreach email is customized with specific references to client requirements, past work evidence, and immediate value additions rather than copy-paste templates.",
  },
  {
    stepNumber: "04",
    title: "Engage",
    description: "Build professional relationships through clear client communication, follow-ups, and requirement discovery.",
    details:
      "I prioritize rapid, articulate response times, thorough requirement elicitation, and respectful follow-up sequences that build mutual trust and move conversations to close.",
  },
  {
    stepNumber: "05",
    title: "Improve",
    description: "Evaluate outreach, pipeline activity, and opportunities for process optimization.",
    details:
      "Continuous review of response rates, conversion metrics, and proposal resonance ensures the acquisition strategy continually adapts and increases in efficiency.",
  },
];
