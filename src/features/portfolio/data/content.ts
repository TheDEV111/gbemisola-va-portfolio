import {
  Mail,
  CalendarDays,
  Headphones,
  Plane,
  Database,
  LayoutGrid,
  Search,
  ClipboardList,
  GitBranch,
  CheckCircle,
  MessageSquare,
  Zap,
  Shield,
  Monitor,
  Clock,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Owner                                                                */
/* ------------------------------------------------------------------ */
export const OWNER = {
  name: "Oluwagbemisola Oginni",
  displayName: "Gbemisola Oginni",
  firstName: "Gbemisola",
  title: "Virtual Assistant",
  subtitle: "Administrative Expert · Health & Operations Specialist",
  tagline: "Where precision meets possibility.",
  email: "gbemisola299@gmail.com",
  location: "Lagos, Nigeria",
  linkedin: "https://linkedin.com/in/oluwagbemisola-oginni",
  resumeUrl: "/VA Oluwagbemisola Oginni CV.pdf",
} as const;

/* ------------------------------------------------------------------ */
/* About                                                                */
/* ------------------------------------------------------------------ */
export const ABOUT = {
  headline: "More than a VA — a systems-thinker in your corner.",
  paragraphs: [
    "Before pivoting to virtual assistance, I spent years as a licensed pharmacist managing medication supply chains for an entire state, coordinating logistics between government ministries, hospitals, and field teams — and ensuring compliance in environments where errors simply weren't an option.",
    "That background shaped how I work. I bring clinical-grade precision to inbox management, the supply-chain discipline of a logistics officer to project tracking, and the stakeholder fluency of someone who's liaised across government agencies under real operational pressure.",
    "When you bring me onto your team, you're not just outsourcing tasks — you're adding someone who anticipates bottlenecks before they happen, communicates with clarity, and protects your time like it's the most valuable asset in the room. Because it is.",
  ],
  stats: [
    { value: "5+", label: "Years of Experience" },
    { value: "6", label: "Professional Roles" },
    { value: "3", label: "Certifications" },
    { value: "100%", label: "Client Confidentiality" },
  ],
} as const;

/* ------------------------------------------------------------------ */
/* Services                                                             */
/* ------------------------------------------------------------------ */
export const SERVICES = [
  {
    icon: Mail,
    title: "Email Management",
    description:
      "Inbox zero isn't a myth. I triage, respond, flag, and organize your correspondence so nothing urgent ever slips through.",
  },
  {
    icon: CalendarDays,
    title: "Calendar Management",
    description:
      "Your schedule, defended. I coordinate meetings, block focus time, and ensure you're always where you need to be — without the back-and-forth.",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description:
      "Professional, empathetic responses that reflect well on your brand. I handle inquiries, resolve issues, and escalate when needed.",
  },
  {
    icon: Plane,
    title: "Travel Coordination",
    description:
      "Flights, hotels, itineraries, and contingencies — all researched and booked with your preferences and budget at the forefront.",
  },
  {
    icon: Database,
    title: "Data Entry & Records",
    description:
      "Accurate, consistent, and organized. From spreadsheets to CRMs, I maintain your records with the precision of a healthcare professional.",
  },
  {
    icon: LayoutGrid,
    title: "Social Media Assistance",
    description:
      "Content scheduling, comment moderation, and basic graphic coordination to keep your digital presence active and consistent.",
  },
  {
    icon: Search,
    title: "Research & Analysis",
    description:
      "Deep-dives into competitors, markets, suppliers, or topics — delivered as clean summaries you can actually act on.",
  },
  {
    icon: ClipboardList,
    title: "Administrative Support",
    description:
      "Document preparation, report writing, filing, and record-keeping handled quietly and competently in the background.",
  },
  {
    icon: GitBranch,
    title: "Project Coordination",
    description:
      "Tracking deliverables, chasing updates, organizing task lists, and keeping multi-party projects moving without micromanaging anyone.",
  },
] as const;

/* ------------------------------------------------------------------ */
/* Skills                                                               */
/* ------------------------------------------------------------------ */
export const SKILLS = [
  {
    category: "Productivity & Communication",
    tools: [
      "Google Workspace",
      "Gmail",
      "Google Drive",
      "Google Docs",
      "Google Sheets",
      "Google Slides",
      "Google Calendar",
      "Microsoft Outlook",
      "Microsoft Word",
      "Microsoft Excel",
      "Microsoft PowerPoint",
    ],
  },
  {
    category: "Operations & Data",
    tools: [
      "Electronic Medical Records (EMR)",
      "Inventory Management Software",
      "Point-of-Sale (POS) Systems",
      "Digital Dashboards",
      "Supply Chain Documentation",
      "Cold Chain Compliance",
    ],
  },
  {
    category: "AI & Emerging Tools",
    tools: [
      "AI Productivity Tools",
      "Prompt Engineering",
      "AI-assisted Research",
      "Workflow Automation",
    ],
  },
  {
    category: "Soft Skills",
    tools: [
      "Stakeholder Communication",
      "Report Writing",
      "Minute-taking",
      "Agenda Preparation",
      "Cross-functional Coordination",
      "Problem-solving",
      "Discretion & Confidentiality",
    ],
  },
] as const;

/* ------------------------------------------------------------------ */
/* Experience                                                           */
/* ------------------------------------------------------------------ */
export const EXPERIENCE = [
  {
    role: "Pharmacist — Administrative",
    company: "Lagos State Ministry of Health",
    type: "NYSC",
    period: "Mar 2026 – Present",
    highlights: [
      "Coordinate pharmaceutical services across multiple health facilities statewide, maintaining precise records and compliance documentation.",
      "Manage all correspondence and documentation relating to drug availability, supply chain updates, and policy rollouts.",
      "Serve as liaison between state health agencies, hospital facilities, and regulatory bodies — ensuring nothing falls through the cracks.",
      "Provide direct administrative support to senior management including scheduling, data collation, and briefing preparation.",
    ],
  },
  {
    role: "Store Pharmacist",
    company: "Lagos State Medical Stores, Oshodi",
    type: "NYSC",
    period: "Dec 2025 – Feb 2026",
    highlights: [
      "Managed inventory records for essential health commodities using digital tools, achieving near-zero stockout rates.",
      "Maintained cold chain compliance documentation and warehouse logs across multiple product categories.",
      "Processed procurement orders and reconciled stock reports for internal teams and external health facility partners.",
    ],
  },
  {
    role: "Logistics Officer",
    company: "LMCU · Lagos State Ministry of Health",
    type: "NYSC",
    period: "Jun 2025 – Nov 2025",
    highlights: [
      "Coordinated Last Mile Distribution (LMD) of medical supplies across Lagos State using digital tracking dashboards.",
      "Functioned as the primary communication bridge between the Ministry, health facilities, and logistics partners — drafting reports and escalation memos for senior leadership.",
      "Optimised inventory workflows through data-driven analysis, improving distribution efficiency and reducing delivery delays.",
    ],
  },
  {
    role: "Locum Pharmacist",
    company: "Andrea Pharmacy & Ori Pharmacy",
    type: "",
    period: "Dec 2025 – Feb 2026  /  Mar 2023 – Nov 2024",
    highlights: [
      "Delivered pharmaceutical care to walk-in clients while managing daily inventory using POS and dispensary systems.",
      "Maintained patient records and prescription documentation in compliance with regulatory standards.",
      "Handled full administrative duties for pharmacy operations including reporting, stock reconciliation, and filing.",
    ],
  },
  {
    role: "Intern Pharmacist",
    company: "Federal Neuro-Psychiatric Hospital",
    type: "",
    period: "Feb 2024 – Jan 2025",
    highlights: [
      "Participated in hospital-wide operations, clinical documentation, and multi-department patient communication.",
      "Co-organized outreach events and mental health awareness campaigns under the 30 Beautiful Minds initiative.",
    ],
  },
  {
    role: "Pharmacy Student",
    company: "Havana Specialist Hospital",
    type: "",
    period: "Sep 2021 – Nov 2021",
    highlights: [
      "Vetted and interpreted prescriptions on EMR systems; collaborated directly with physicians to flag potential drug interactions.",
      "Supported administrative and operational processes within the pharmacy and broader healthcare team.",
    ],
  },
] as const;

/* ------------------------------------------------------------------ */
/* Testimonials                                                         */
/* ------------------------------------------------------------------ */
export const TESTIMONIALS = [
  {
    quote:
      "Gbemisola brought a level of thoroughness I genuinely wasn't expecting. She restructured how my entire inbox and calendar worked within the first two weeks — no prompting, just initiative. My mornings are actually calm now.",
    name: "Adaeze Nwachukwu",
    title: "Founder, Nwachukwu Consulting",
    initials: "AN",
  },
  {
    quote:
      "Her background in healthcare operations is a genuine differentiator. She understands compliance, discretion, and documentation at a level that most VAs simply don't. Highly professional, always on time, always accurate.",
    name: "Dr. Emeka Obi",
    title: "Medical Director, Lagos",
    initials: "EO",
  },
  {
    quote:
      "What I appreciate most is that she doesn't wait to be told — she's two steps ahead. Whether it's flagging a scheduling conflict, preparing a report I didn't know I needed, or managing a difficult client email with grace, she just handles it.",
    name: "Temi Adeyemi",
    title: "CEO, Meridian Digital Agency",
    initials: "TA",
  },
] as const;

/* ------------------------------------------------------------------ */
/* Why Hire                                                             */
/* ------------------------------------------------------------------ */
export const WHY_HIRE = [
  {
    icon: CheckCircle,
    title: "Clinically Precise",
    description:
      "Five years in pharmaceutical operations trained me to treat errors as unacceptable. That mindset doesn't switch off when I open a spreadsheet or manage your inbox.",
  },
  {
    icon: MessageSquare,
    title: "Proactively Communicative",
    description:
      "I've coordinated between government ministries, hospitals, and logistics partners. Clear, timely communication isn't a soft skill for me — it's survival.",
  },
  {
    icon: Zap,
    title: "Operationally Sharp",
    description:
      "Supply chain logistics and last-mile distribution taught me to think in systems. I spot bottlenecks, optimize workflows, and build habits that compound over time.",
  },
  {
    icon: Shield,
    title: "Absolutely Discreet",
    description:
      "Healthcare confidentiality is among the strictest standards in any profession. Your business information is safe — not as a policy, but as a deeply ingrained professional reflex.",
  },
  {
    icon: Monitor,
    title: "Digitally Fluent",
    description:
      "From EMR systems and POS software to Google Workspace and AI productivity tools, I move comfortably across platforms and adapt to new tools quickly.",
  },
  {
    icon: Clock,
    title: "Reliably Available",
    description:
      "I understand what it means to support operations that can't afford downtime. When I commit to a timeline or deliverable, I meet it — consistently.",
  },
] as const;
