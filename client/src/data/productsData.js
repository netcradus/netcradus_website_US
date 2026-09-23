export const productsData = [
  {
    id: "acis",
    name: "ACIS",
    fullName: "Autonomous Cyber Immune System",
    badge: "Flagship Platform",
    tagline: "Single Agent • Single Console • Autonomous Cyber Defense",
    description: "Netcradus engineers the future of cyber defense. Through ACIS, we combine AI-driven threat detection, automated response, UEBA, SIEM, SOAR, and enterprise resilience to neutralize threats at machine speed — before they can disrupt operations.",
    features: [
      {
        title: "Autonomous Containment",
        desc: "Automated agentic playbook orchestration that isolates compromised hosts, revokes compromised tokens, and stops lateral movement in milliseconds."
      },
      {
        title: "Unified AI-SIEM & Telemetry",
        desc: "Sub-second event correlation across cloud, network, and endpoints with deep ML anomaly detection."
      },
      {
        title: "Adaptive Self-Healing Defense",
        desc: "Dynamic immune response adapting to novel zero-day vectors and evolving attacker tradecraft."
      },
      {
        title: "User & Entity Behavior Analytics (UEBA)",
        desc: "Baseline normal behavior to immediately flag credential theft, insider threats, and anomalous privilege spikes."
      }
    ],
    tiers: ["ACIS Lite", "ACIS Pro", "ACIS Enterprise"],
    stats: {
      detectionSpeed: "Sub-Second",
      correlationRate: "High-Throughput SIEM",
      containmentSLA: "Sub-15 Min SLA"
    }
  },
  {
    id: "netxdr",
    name: "Cyrix XDR / NetXDR",
    fullName: "Extended Detection & Response",
    badge: "Unified Endpoint & Network",
    tagline: "AI-Powered Unified Endpoint, Cloud & Network Protection",
    description: "Protect endpoints, servers, and multi-cloud workloads in real time. NetCradus Cyrix XDR unifies EDR, behavioral Next-Gen Antivirus (NGAV), network telemetry, and proactive threat hunting into one synchronized console.",
    features: [
      {
        title: "Behavioral NGAV & Anti-Ransomware",
        desc: "Memory protection, script control, and instantaneous ransomware rollback."
      },
      {
        title: "Proactive Threat Hunting",
        desc: "Continuous adversary emulation, IOC matching, and deep process tree analysis."
      },
      {
        title: "Cross-Layer Telemetry Fusion",
        desc: "Correlate endpoint process execution with network flows and cloud identity actions."
      }
    ],
    tiers: ["Standard XDR", "Advanced Enterprise XDR"],
    stats: {
      coverage: "Endpoint + Cloud + Network",
      huntingFeed: "Live Threat Feed",
      agentFootprint: "Lightweight Agent"
    }
  },
  {
    id: "netcrad",
    name: "NetCRAD",
    fullName: "AI-Powered Website Security & Vulnerability Scanner",
    badge: "Web Security Intelligence",
    tagline: "Automated Website Security Auditing & Compliance Intelligence",
    description: "An AI-powered website security auditing and vulnerability assessment platform that scans websites and web applications for security weaknesses, compliance issues, SSL misconfigurations, and performance risks with actionable remediation insights.",
    features: [
      {
        title: "Full-Stack Web Vulnerability Scan",
        desc: "Automated deep scan detecting OWASP Top 10 vulnerabilities, XSS, SQLi, and CORS flaws."
      },
      {
        title: "SSL / TLS & Header Compliance",
        desc: "Verify cryptographic hygiene, HSTS, CSP, and certificate expiration alerts."
      },
      {
        title: "Actionable Dev Remediation Guides",
        desc: "Developer-ready fix recommendations with exact code snippets and config templates."
      }
    ],
    tiers: ["Continuous Scanner", "Enterprise Audit"],
    stats: {
      scanDepth: "Full OWASP Top 10",
      reporting: "Actionable Dev Reports",
      frequency: "Continuous / On-Demand"
    }
  },
  {
    id: "crm",
    name: "Netcradus CRM",
    fullName: "Enterprise Relationship & Operations Platform",
    badge: "Enterprise Platform",
    tagline: "Secure, Scalable Enterprise Operations & Client Lifecycle Management",
    description: "Enterprise relationship and operations platform designed to streamline customer touchpoints, automate complex operational workflows, integrate disparate data nodes, and scale securely in hybrid cloud environments.",
    features: [
      {
        title: "Secure Enterprise Pipeline Management",
        desc: "End-to-end client lifecycle tracking with granular role-based encryption."
      },
      {
        title: "Workflow Automation & SLAs",
        desc: "Automate contract generation, ticket escalations, and compliance review approvals."
      },
      {
        title: "Integrated Cybersecurity Telemetry",
        desc: "Connect client accounts directly with security status monitoring and reporting portals."
      }
    ],
    tiers: ["Core CRM", "Enterprise Operations"],
    stats: {
      uptime: "99.9% Uptime",
      encryption: "AES-256 at Rest & In-Transit",
      integration: "REST APIs"
    }
  }
];

export const platformTiers = [
  {
    id: "xdr",
    title: "NetCradus XDR",
    subtitle: "Endpoint + Threat Hunting + Detection",
    description: "Protect endpoints, servers, and multi-cloud workloads in real time. Unified EPP, behavioral NGAV, kernel-level eBPF detection, and proactive threat hunting across distributed environments.",
    purpose: "Endpoint & Workload Protection",
    tech: "Kernel eBPF • Behavioral NGAV • Process Memory Guard",
    icon: "Shield",
    capabilities: [
      "Process Tree & Memory Thread Inspection",
      "Fileless Malware & Zero-Day Neutralization",
      "Automated Anti-Ransomware VSS Rollback",
      "USB, Network & Peripheral Access Control"
    ]
  },
  {
    id: "siem",
    title: "NetCradus SIEM",
    subtitle: "Log Management + Detection + Correlation",
    description: "Centralized high-throughput log aggregation (100k+ EPS), machine-learning event correlation, automated entity profiling, and real-time compliance posture reporting across hybrid clouds.",
    purpose: "Log Intelligence & Telemetry Correlation",
    tech: "100k+ EPS • ML Event Correlation • SPL Query Engine",
    icon: "Database",
    capabilities: [
      "Sub-Second Search via SPL-Compatible Query Explorer",
      "User & Entity Behavior Analytics (UEBA)",
      "Multi-Cloud & On-Premises Telemetry Fusion",
      "Automated MITRE ATT&CK TTP Alignment"
    ]
  },
  {
    id: "soar",
    title: "NetCradus SOAR",
    subtitle: "Automated Response + Playbooks",
    description: "Autonomous machine-speed incident orchestration that triggers automated containment playbooks, isolates compromised hosts, revokes compromised tokens, and stops lateral movement in under 14ms.",
    purpose: "Machine-Speed Autonomous Response",
    tech: "Agentic Playbooks • Sub-14ms Containment • REST Connectors",
    icon: "Zap",
    capabilities: [
      "Autonomous Device & Network Containment",
      "Dynamic Agentic Playbook Orchestrator",
      "Multi-Vendor Security Hub API Connectors",
      "Automated Incident Ticketing & ITSM Synchronization"
    ]
  },
  {
    id: "cti",
    title: "NetCradus CTI",
    subtitle: "Threat Intelligence",
    description: "Global cyber threat research, dark web monitoring, adversary TTP profiling, and continuous IOC feed enrichment synchronized dynamically with enterprise detection engines.",
    purpose: "Adversary Profiling & IOC Enrichment",
    tech: "Global Threat Feeds • MITRE Mapping • Dark Web Feeds",
    icon: "Globe",
    capabilities: [
      "Real-Time Global IOC Feeds & Hash Lookups",
      "Adversary Tradecraft & Campaign Attribution",
      "Automated Payload Reverse-Engineering",
      "Dark Web Data Leak & Exposure Tracking"
    ]
  },
  {
    id: "pam",
    title: "NetCradus PAM",
    subtitle: "Privileged Access Management",
    description: "Verify identity, enforce zero trust, and secure privileged credentials with encrypted vaults, Just-In-Time (JIT) access elevation, live terminal session recording, and credential rotation.",
    purpose: "Zero Trust Identity & Privilege Vaulting",
    tech: "AES-256 Vaults • JIT Access • Live Session Audit",
    icon: "Lock",
    capabilities: [
      "Encrypted Administrative Credential Vaults",
      "Just-In-Time (JIT) Ephemeral Privilege Elevation",
      "Real-Time Session Recording & Video Audit Trails",
      "Automated Kerberos & API Secret Key Rotation"
    ]
  },
  {
    id: "grc",
    title: "NetCradus GRC",
    subtitle: "Risk + Compliance",
    description: "Continuous attack surface management (ASM), vulnerability scanning, and automated compliance auditing mapped against ISO 27001, SOC 2, UK GDPR, NIST, and HIPAA standards.",
    purpose: "Continuous Audit & Risk Management",
    tech: "Continuous ASM • ISO 27001 • SOC 2 • UK GDPR",
    icon: "FileCheck",
    capabilities: [
      "Continuous Attack Surface Discovery & Mapping",
      "Automated Compliance Posture & Drift Alerts",
      "One-Click Executive Audit Evidence Exports",
      "Vendor & Third-Party Digital Risk Scoring"
    ]
  },
  {
    id: "ai-security",
    title: "NetCradus AI Security",
    subtitle: "AI/ML Security + AI Threat Detection",
    description: "Protect machine learning pipelines, enterprise generative AI applications, and autonomous agents against prompt injections, model extraction, data poisoning, and Shadow AI traffic.",
    purpose: "AI Pipeline & LLM Guardrails",
    tech: "Semantic Guardrails • Prompt Injection Defense • Shadow AI",
    icon: "Cpu",
    capabilities: [
      "Real-Time Prompt Injection & Jailbreak Defense",
      "Semantic Output Guardrails & PII Data Redaction",
      "Model Training Data Poisoning Prevention",
      "Shadow AI Discovery & Rogue Model Blocking"
    ]
  }
];

export const acisThreatLandscapeMetrics = [
  {
    val: "100%",
    title: "Operational Readiness Tracking",
    desc: "Real-time composite telemetry combining agent connectivity, integration status, and pipeline health.",
    color: "#10B981"
  },
  {
    val: "Real-Time",
    title: "Continuous Rule Correlation",
    desc: "Stream-evaluated detection rules and statistical anomaly matching across all ingested event sources.",
    color: "#F97316"
  },
  {
    val: "2-Person",
    title: "Approval-Gated Containment",
    desc: "Mandatory dual-authorization on all destructive actions (endpoint isolation, account disablement).",
    color: "#3B82F6"
  },
  {
    val: "Immutable",
    title: "Tamper-Evident Audit Trail",
    desc: "Complete, unalterable administrative record of every incident decision, approval, and remediation.",
    color: "#8B5CF6"
  }
];

export const acisDefenseLayers = [
  {
    num: "01",
    title: "AI-Powered SIEM & Log Explorer",
    tagline: "Elasticsearch Telemetry • SPL Syntax • Live Streaming",
    badge: "MODULE 01: SENSE & SEARCH",
    accent: "orange",
    description: "Centralized ingestion across endpoints, multi-cloud accounts (AWS GuardDuty, CloudTrail, Azure Sentinel, Azure AD), network syslog, and custom apps via Splunk HEC or JSON APIs. Features live event streaming, forensic search, and AI-assisted query translation.",
    features: [
      "High-throughput multi-source log ingestion (Syslog, HEC, JSON API, Cloud APIs)",
      "Pipe-delimited SPL query engine with field explorer and search saving",
      "Live stream real-time event monitor & deep forensic historical query modes",
      "AI Analyst plain-English question translation into executable log queries"
    ],
    metrics: "Elasticsearch Engine • SPL Queries"
  },
  {
    num: "02",
    title: "Correlation Rules & Threat Intelligence",
    tagline: "Stream Rules • Risk Scoring 1-100 • Live IOC Enrichment",
    badge: "MODULE 02: ANALYZE & CORRELATE",
    accent: "purple",
    description: "Evaluates continuous streaming and scheduled rules against raw telemetry to raise high-fidelity alerts. Enriches IPs, domains, and file hashes via live VirusTotal and AbuseIPDB threat intelligence, tagging alerts with MITRE ATT&CK techniques.",
    features: [
      "Real-time stream and cron-scheduled correlation rule evaluation",
      "Dynamic risk scoring (1–100) and severity classification (Low to Critical)",
      "Live IOC threat enrichment against VirusTotal and AbuseIPDB databases",
      "Automated MITRE ATT&CK technique and tactic matrix tagging"
    ],
    metrics: "Risk Scoring 1-100 • VirusTotal / AbuseIPDB"
  },
  {
    num: "03",
    title: "SOAR Playbooks & Governed Response",
    tagline: "20+ Step Actions • Multi-Tool Response • Human-in-the-Loop",
    badge: "MODULE 03: AUTOMATE & CONTAIN",
    accent: "amber",
    description: "Multi-step automated and alert-triggered response workflows connecting SentinelOne, Palo Alto NGFW, Cloudflare, AWS IAM, Slack, Teams, and Jira. Enforces a mandatory two-person approval gate on all destructive containment actions.",
    features: [
      "20+ real action types (EDR isolate, block IP, disable account, cloud remediate)",
      "Mandatory dual-approver checkpoint on destructive actions (requester cannot approve)",
      "Alert-driven automatic triggers and manual workflow execution",
      "Pre-built integrations for Cloudflare, Palo Alto, SentinelOne, Slack, Teams, and Jira"
    ],
    metrics: "20+ Action Types • Mandatory Approval Gate"
  },
  {
    num: "04",
    title: "Red Team Attack Emulation",
    tagline: "MITRE ATT&CK Campaigns • Detection Validation • Negative Controls",
    badge: "MODULE 04: VALIDATE & TEST",
    accent: "blue",
    description: "Runs authorized attack-emulation campaigns against your own configured systems to validate detection coverage. Measures Mean Time to Detect (MTTD) per stage and includes negative control campaigns to verify false-positive suppression.",
    features: [
      "Authorized MITRE ATT&CK technique and tactic emulation campaigns",
      "Multi-stage detection validation (Undetected, Partially Detected, Fully Detected)",
      "Negative control simulations to verify suppression of benign activity",
      "Feeds real kill-chain replays into Dashboard Closed-Loop Attack Simulator"
    ],
    metrics: "MITRE ATT&CK Validation • Measured MTTD"
  },
  {
    num: "05",
    title: "File Scanning, Supply Chain & Self-Healing",
    tagline: "ClamAV Scanner • Mobile Static Analysis • OSV.dev Dependencies",
    badge: "MODULE 05: PREVENT & RECOVER",
    accent: "pink",
    description: "Proactive file malware scanning with deep iOS (.ipa) and Android (.apk) binary static analysis, open-source dependency vulnerability auditing via OSV.dev, committed secret detection, and endpoint rollback management.",
    features: [
      "Self-hosted ClamAV malware scanning with automatic quarantine for files up to 25MB",
      "Mobile app static security analysis for iOS and Android binaries",
      "Supply chain dependency scanning against OSV.dev vulnerability database",
      "Endpoint status restoration, containment rollback, and immutable compliance audit log"
    ],
    metrics: "ClamAV + OSV.dev • Tamper-Evident Audit"
  }
];

export const acisArchitectureStages = [
  {
    step: "01",
    title: "Detect",
    subtitle: "Raw Telemetry & Signal Collection",
    description: "Ingests raw event signals continuously across endpoint agent heartbeats, cloud account logs (AWS GuardDuty, CloudTrail, Azure Sentinel, Azure AD), network syslog streams, and application ingestion endpoints.",
    metrics: "Multi-Source Ingestion • Live Stream",
    highlights: ["Endpoint Agent Heartbeats", "AWS GuardDuty & CloudTrail", "Azure Sentinel & Azure AD Logs", "Syslog, CEF & Splunk HEC Ports"]
  },
  {
    step: "02",
    title: "Analyze",
    subtitle: "Correlation & Threat Intelligence",
    description: "The Correlation engine evaluates continuous stream and scheduled rules over ingested logs, calculates risk scores (1-100), detects statistical anomalies, and enriches indicators via VirusTotal and AbuseIPDB.",
    metrics: "SPL Rules Engine • Live Threat Intel",
    highlights: ["Real-Time SPL Correlation Rules", "Dynamic Risk Scoring (1-100)", "Live VirusTotal & AbuseIPDB Lookups", "MITRE ATT&CK Technique Mapping"]
  },
  {
    step: "03",
    title: "Decide",
    subtitle: "Alert Triage & AI Assistance",
    description: "SOC analysts triage high-fidelity alerts on the Alerts & Incidents console, review AI plain-language explanations, escalate incidents, and provide confirmed feedback that retrains the AI classification model.",
    metrics: "AI Explanations • Model Retraining",
    highlights: ["Explain Alert with AI", "IOC Match Prioritization", "Incident Escalation Workflow", "Analyst-Verified Model Retraining"]
  },
  {
    step: "04",
    title: "Prevent",
    subtitle: "Proactive File & Supply Chain Checks",
    description: "Prevents exposure before alerts occur through ClamAV file malware scanning, iOS/Android mobile binary static analysis, open-source dependency auditing via OSV.dev, and repository secret scans.",
    metrics: "ClamAV Scan • OSV.dev Database",
    highlights: ["File Malware & Quarantine Engine", "iOS & Android Static Binary Analysis", "OSV.dev Dependency Vulnerability Scan", "Hardcoded Secret Detection"]
  },
  {
    step: "05",
    title: "Contain",
    subtitle: "SOAR Playbooks with Approval Gates",
    description: "Executes automated response playbooks with 20+ action types. High-impact destructive steps (isolating endpoints, disabling accounts, blocking IPs) enforce a mandatory second-approver authorization gate.",
    metrics: "20+ Action Types • Dual Authorization",
    highlights: ["EDR Endpoint Network Isolation", "Identity Account & Session Revocation", "Palo Alto & Cloudflare IP Blocking", "Mandatory Two-Person Approval Gate"]
  },
  {
    step: "06",
    title: "Recover & Document",
    subtitle: "Self-Healing & Compliance Audit",
    description: "Rolls back reversible containment actions, clears degraded endpoint states, generates scheduled executive and compliance reports, and records every administrative event in an immutable audit trail.",
    metrics: "Action Rollback • Immutable Audit Log",
    highlights: ["Containment Action History Rollback", "Endpoint Status Recovery & Restore", "Weekly & Monthly Executive Reports", "Tamper-Evident Compliance Audit Trail"]
  }
];

export const acisSiemCapabilities = [
  {
    title: "Universal Telemetry Ingestion",
    desc: "Ingest logs across endpoints, network syslog/CEF, Splunk HEC, JSON APIs, AWS GuardDuty/CloudTrail, and Azure Sentinel into an Elasticsearch-backed data store.",
    icon: "Database",
    tag: "MULTI-SOURCE"
  },
  {
    title: "Real-Time SPL Correlation Rules",
    desc: "Build continuous stream and scheduled rules using pipe-delimited SPL syntax, custom evaluation windows, severity thresholds, and dynamic risk scoring (1-100).",
    icon: "Activity",
    tag: "RULES ENGINE"
  },
  {
    title: "AI Analyst Query Translation",
    desc: "Ask questions about your telemetry in plain English and automatically translate them into executable search queries against your real ingested log records.",
    icon: "Search",
    tag: "AI QUERY TRANSLATOR"
  },
  {
    title: "Live Threat Intel Enrichment",
    desc: "Automatically enrich IP addresses, file hashes, and domains against live VirusTotal and AbuseIPDB APIs to surface confirmed IOC matches at the top of the alert table.",
    icon: "ShieldAlert",
    tag: "VIRUSTOTAL & ABUSEIPDB"
  },
  {
    title: "MITRE ATT&CK Alignment",
    desc: "Every alert, correlation rule, and red team simulation stage is mapped directly to MITRE ATT&CK tactics and techniques for complete threat context.",
    icon: "Target",
    tag: "MITRE ATT&CK"
  },
  {
    title: "AI Model Continuous Retraining",
    desc: "Alert classification AI model automatically evaluates and retrains using analyst-confirmed incident verdicts, deploying only when evaluated accuracy improves.",
    icon: "Sparkles",
    tag: "SUPERVISED RETRAINING"
  }
];

export const acisUseCases = [
  {
    id: "ransomware",
    category: "ENDPOINT & MALWARE DEFENSE",
    title: "Ransomware & Malware Containment",
    challenge: "Suspicious executables or lateral threat movement can rapidly compromise critical server assets before manual triage begins.",
    solution: "ACIS flags anomalous process activity via endpoint agent telemetry, triggers a SOAR containment playbook, and prompts for dual-approver EDR isolation.",
    outcome: "Verified threat isolation with complete rollback capability and tamper-evident audit documentation."
  },
  {
    id: "insider",
    category: "IDENTITY & CREDENTIAL GOVERNANCE",
    title: "Compromised Credentials & Account Takeover",
    challenge: "Stolen credentials and anomalous cloud sign-in patterns bypass perimeter controls and access confidential corporate services.",
    solution: "Correlates Azure AD sign-in logs and IAM anomalies, alerts the SOC with plain-language AI explanations, and executes account session revocation upon approval.",
    outcome: "Immediate invalidation of hijacked credentials with automated incident ticket generation."
  },
  {
    id: "multicloud",
    category: "CLOUD INFRASTRUCTURE",
    title: "Multi-Cloud Threat Detection (AWS & Azure)",
    challenge: "Siloed visibility across AWS CloudTrail, GuardDuty findings, and Azure Sentinel creates disjointed alert handling.",
    solution: "Centralizes cloud telemetry through automated polling and webhook connectors into a single correlation pipeline and alert dashboard.",
    outcome: "Unified multi-cloud threat visibility with automated Slack, Teams, and email notifications."
  },
  {
    id: "supply-chain",
    category: "APPLICATION & SUPPLY CHAIN",
    title: "Mobile App & Supply Chain Security",
    challenge: "Vulnerable third-party dependencies and accidentally committed credentials expose applications to zero-day supply chain exploitation.",
    solution: "File Scanning inspects iOS (.ipa) and Android (.apk) binaries for hardcoded secrets, while Supply Chain scans dependency manifests against OSV.dev.",
    outcome: "Continuous vulnerability discovery and secret detection before deployment."
  }
];

