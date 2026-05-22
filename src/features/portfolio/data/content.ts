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
  subtitle: "Property & Guest Operations Specialist",
  tagline: "Where precision meets possibility.",
  email: "gbemisola299@gmail.com",
  location: "Lagos, Nigeria (GMT +1)",
  linkedin: "https://linkedin.com/in/oluwagbemisola-oginni",
  resumeUrl: "/Oginni_CV_VA.pdf",
} as const;

/* ------------------------------------------------------------------ */
/* About                                                                */
/* ------------------------------------------------------------------ */
export const ABOUT = {
  headline: "More than a VA. A systems-thinker in your corner.",
  paragraphs: [
    "Before pivoting to virtual assistance, I spent years as a licensed pharmacist managing medication supply chains for an entire state, coordinating logistics between government ministries, hospitals, and field teams while ensuring compliance in environments where errors simply weren't an option.",
    "That background shaped how I work. I bring clinical-grade precision to inbox management, the supply-chain discipline of a logistics officer to project tracking, and the stakeholder fluency of someone who's liaised across government agencies under real operational pressure.",
    "When you bring me onto your team, you're adding someone who anticipates bottlenecks before they happen, communicates with clarity, and protects your time like it's the most valuable asset in the room. Because it is.",
  ],
  stats: [
    { value: "5+", label: "Years of Experience" },
    { value: "4", label: "Professional Roles" },
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
      "Your schedule, defended. I coordinate meetings, block focus time, and ensure you're always where you need to be, without the scheduling back-and-forth.",
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
    category: "Property & Guest Operations",
    tools: [
      "Bookings & Reservations Management",
      "Guest Communication & Query Resolution",
      "Service Provider & Vendor Coordination",
      "Calendar Management & Availability Tracking",
      "Property Owner Liaison",
      "Scheduling & Logistics Coordination",
    ],
  },
  {
    category: "Administrative Support",
    tools: [
      "Document Preparation & Data Entry",
      "Filing & Record-keeping",
      "Meeting Coordination",
      "Agenda Preparation & Minute-taking",
      "Report Writing",
      "Correspondence Management",
      "Process Documentation",
    ],
  },
  {
    category: "Technology & Tools",
    tools: [
      "Google Workspace (Docs, Sheets, Slides, Calendar, Gmail, Drive)",
      "Microsoft Office Suite (Word, Excel, PowerPoint, Outlook)",
      "QuickBooks",
      "ClickUp",
      "POS Systems",
      "EMR Platforms",
      "AI Productivity Tools",
    ],
  },
  {
    category: "Soft Skills",
    tools: [
      "Multi-stakeholder Coordination",
      "Proactive Problem-solving",
      "Cross-functional Communication",
      "Discretion & Confidentiality",
      "Attention to Detail",
      "Fast-paced Environment Adaptability",
    ],
  },
] as const;

/* ------------------------------------------------------------------ */
/* Experience                                                           */
/* ------------------------------------------------------------------ */
export const EXPERIENCE = [
  {
    role: "Administrative Assistant",
    company: "Lagos State Ministry of Health (National Service)",
    type: "NYSC",
    period: "Mar 2026 – May 2026",
    highlights: [
      "Coordinated services across multiple facilities, maintaining accurate records, documentation, and reporting workflows.",
      "Managed correspondence and communication between state agencies, health facilities, and regulatory bodies.",
      "Supported senior management with scheduling, data collation, and administrative task management.",
    ],
  },
  {
    role: "Logistics & Operations Officer",
    company: "Lagos State Ministry of Health (National Service)",
    type: "NYSC",
    period: "Jun 2025 – Feb 2026",
    highlights: [
      "Coordinated last-mile distribution of supplies across multiple locations, tracking deliveries via digital dashboards.",
      "Served as communication bridge between management, service facilities, and logistics partners, drafting reports and escalation memos.",
      "Optimised inventory and operational workflows using data-driven insights, improving distribution efficiency and reducing delays.",
      "Maintained detailed records and provided comprehensive administrative support to unit management.",
    ],
  },
  {
    role: "Locum Pharmacist & Operations Support",
    company: "Andrea Pharmacy & Ori Pharmacy, Lagos",
    type: "",
    period: "Mar 2023 – Feb 2026",
    highlights: [
      "Managed client-facing service for walk-in customers while handling inventory management via POS and dispensary software.",
      "Maintained accurate patient records, documentation, and daily administrative duties across busy operational environments.",
    ],
  },
  {
    role: "Intern Pharmacist & Administrative Support",
    company: "Federal Neuro-Psychiatric Hospital, Lagos",
    type: "",
    period: "Feb 2024 – Jan 2025",
    highlights: [
      "Participated in hospital operations, clinical documentation, and multi-departmental patient communication.",
      "Co-organised outreach events and awareness campaigns, coordinating across stakeholders and teams.",
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
      "I've coordinated between government ministries, hospitals, and logistics partners. Clear, timely communication isn't a soft skill for me. It's a professional standard I've operated under for years.",
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
