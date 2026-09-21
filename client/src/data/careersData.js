export const careersData = {
  headline: "Join the Frontline of Autonomous Cyber Defense",
  subtitle: "Work alongside cybersecurity researchers, AI engineers, and threat hunters engineering resilient autonomous immune architectures.",
  culture: [
    {
      title: "Meritocratic & High-Velocity",
      desc: "Meritocratic, flat hierarchy where innovation is celebrated, ideas win, and individual impact is recognized."
    },
    {
      title: "Competitive Rewards & Benefits",
      desc: "Market-leading compensation packages, performance bonuses, and comprehensive family health perks."
    },
    {
      title: "Continuous Learning & Lab Access",
      desc: "100% company-sponsored global cybersecurity certifications, specialized offensive lab ranges, and AI research budgets."
    }
  ],
  benefits: [
    "Comprehensive Family Medical & Health Coverage",
    "100% Company-Sponsored Certifications (OSCP, CISSP, CEH, AWS Security)",
    "Flexible Work Culture & Hybrid Office Schedules",
    "Cutting-Edge AI Compute & Hardware Infrastructure",
    "Performance Bonuses & Recognition Awards",
    "Team War Games, CTF Challenges & Cyber Research Retreats"
  ],
  openings: [
    {
      id: "soc-analyst-l2-l3",
      title: "Senior SOC Analyst (L2/L3)",
      department: "Cybersecurity",
      location: "Delhi NCR (Hybrid)",
      workType: "Hybrid",
      experience: "3 - 6 Years",
      type: "Full-Time",
      salary: "₹14L - ₹24L LPA",
      skills: ["SIEM", "SOAR", "Splunk", "Threat Hunting", "Incident Response"],
      overview: "Lead 24/7 Security Operations Centre incident triage, deep-dive forensic analysis, and automated playbook creation across enterprise feeds.",
      requirements: [
        "Strong hands-on experience with SIEM & SOAR platforms and log correlation rule authoring",
        "Deep understanding of MITRE ATT&CK adversary mapping, packet dissection, and process memory triage",
        "Proven incident response capabilities with sub-15 minute containment SLA adherence",
        "Cybersecurity certifications (CEH, CySA+, GCIH, or equivalent) preferred"
      ]
    },
    {
      id: "lead-penetration-tester",
      title: "Lead Penetration Tester / Red Teamer",
      department: "Offensive Security",
      location: "Remote / Hybrid",
      workType: "Remote",
      experience: "4 - 8 Years",
      type: "Full-Time",
      salary: "₹18L - ₹30L LPA",
      skills: ["OSCP", "Burp Suite", "Red Teaming", "Web & API VAPT", "Active Directory"],
      overview: "Conduct high-impact offensive security assessments, cloud penetration tests, and custom exploit development for international clients.",
      requirements: [
        "Expertise in discovering complex vulnerabilities across web, mobile, API, and cloud infrastructure",
        "Demonstrated experience executing Active Directory compromise chains and privilege escalation",
        "Proficiency with Burp Suite Pro, Metasploit, Cobalt Strike/Sliver, and custom exploit scripting",
        "OSCP, OSCE, eCPPT, or equivalent practical offensive security certification"
      ]
    },
    {
      id: "cloud-security-architect",
      title: "Enterprise Cloud Security Architect",
      department: "Cloud & Infrastructure",
      location: "Delhi NCR (Hybrid)",
      workType: "Hybrid",
      experience: "5 - 10 Years",
      type: "Full-Time",
      salary: "₹25L - ₹42L LPA",
      skills: ["AWS", "Azure Security", "Terraform", "Kubernetes", "DevSecOps"],
      overview: "Design multi-cloud zero-trust architectures, automated compliance blueprints, and ongoing CloudOps hardening across AWS/Azure.",
      requirements: [
        "Extensive experience architecting enterprise security controls across AWS, Azure, and Google Cloud",
        "Hands-on expertise with Infrastructure-as-Code (Terraform), CSPM, and Kubernetes runtime protection",
        "Familiarity with compliance automation frameworks (ISO 27001, SOC 2, NIST CSF)",
        "AWS Certified Security Specialty or Azure Security Engineer Associate"
      ]
    },
    {
      id: "ai-ml-engineer-acis",
      title: "AI / ML Engineer (ACIS Platform)",
      department: "AI & Data",
      location: "Delhi NCR (On-site)",
      workType: "On-site",
      experience: "2 - 5 Years",
      type: "Full-Time",
      salary: "₹16L - ₹28L LPA",
      skills: ["Python", "PyTorch", "LLM Fine-tuning", "Vector DBs", "Anomaly Detection"],
      overview: "Develop cutting-edge machine learning models, UEBA telemetry processors, and autonomous threat correlation algorithms for ACIS.",
      requirements: [
        "Strong software engineering skills in Python with PyTorch, Scikit-learn, and high-throughput data streams",
        "Experience designing anomaly detection models, UEBA behavioral baselines, or LLM security guardrails",
        "Familiarity with cybersecurity data formats (Syslog, PCAP, JSON logs, STIX/TAXII)",
        "Passion for applying agentic AI to real-time defense automation"
      ]
    }
  ]
};

// Verified Client Testimonials from live site
export const testimonialsData = [
  {
    company: "OOURAA",
    industry: "Healthcare Technology",
    quote: "Netcradus helped us strengthen our cybersecurity posture with 24×7 SOC monitoring, proactive threat detection, and continuous vulnerability assessments. Their team delivered enterprise-grade security with exceptional responsiveness and technical expertise.",
    result: "Continuous 24/7 SOC Protection"
  },
  {
    company: "Online Pantry",
    industry: "E-Commerce & Retail",
    quote: "Partnering with Netcradus significantly improved our security operations. Their SIEM monitoring, cloud security solutions, and rapid incident response helped us protect customer data and maintain uninterrupted business operations.",
    result: "Sub-15m Rapid Incident Response"
  },
  {
    company: "Vastraalane",
    industry: "Technology & Digital Solutions",
    quote: "Netcradus has been a reliable cybersecurity partner, helping us improve threat visibility, security monitoring, and infrastructure protection.",
    result: "100% Threat Visibility Across Nodes"
  },
  {
    company: "CyberHaxs",
    industry: "Cybersecurity & Risk Management",
    quote: "Working with Netcradus enhanced our security operations through AI-powered monitoring, rapid incident response, and strategic cybersecurity guidance.",
    result: "AI-Powered Threat Correlation"
  }
];

// Verified Case Studies & Industry Solutions from live site
export const industryCaseStudies = [
  {
    title: "Healthcare",
    subtitle: "Phishing Credential Theft Mitigation",
    problem: "A healthcare client faced repeated phishing-based credential theft affecting staff accounts.",
    solution: "Deployed 24/7 SOC monitoring with AI-driven phishing detection and staff security training protocols.",
    result: "Reduced phishing attack incidents by 72% within 90 days."
  },
  {
    title: "E-commerce",
    subtitle: "Ransomware Defense & Recovery",
    problem: "Ransomware encrypted order database during high-traffic operations.",
    solution: "EDR deployment + isolated infected systems + automated backup/recovery.",
    result: "Zero data loss, full restoration in 4 hours, no ransom paid."
  },
  {
    title: "Fintech",
    subtitle: "Insider Threat Mitigation",
    problem: "Unusual data access patterns suggesting insider threat risks.",
    solution: "User behavior analytics (UEBA) + role-based access controls + real-time alerts.",
    result: "Threat contained in 48 hours, zero data exfiltration."
  },
  {
    title: "Manufacturing",
    subtitle: "OT Security Hardening",
    problem: "Exposed OT network due to legacy systems and outdated segmentation.",
    solution: "IT/OT segmentation redesign + continuous vulnerability scanning + legacy hardening.",
    result: "Eliminated critical vulnerabilities with 99.9% operational uptime."
  },
  {
    title: "SaaS & Cloud Enterprises",
    subtitle: "Cloud Security & Compliance",
    problem: "Rapidly expanding multi-cloud infrastructure requiring strict audit compliance.",
    solution: "Full cloud security audit + least-privilege IAM + automated drift detection.",
    result: "100% exposed assets secured in 72 hours, passed SOC 2 audit with zero findings."
  }
];
