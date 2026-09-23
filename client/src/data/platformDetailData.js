export const platformOverviewData = {
  title: "NetCradus Converged Cyber Defense Platform",
  subtitle: "Single Agent • Single Console • Autonomous Cyber Defense",
  description: "Seven converged security platforms working in unison to provide continuous visibility, behavioral threat intelligence, sub-second autonomous containment, and adaptive self-healing across enterprise endpoints, multi-cloud workloads, and network infrastructure.",
  stats: [
    { label: "Autonomous Containment", value: "< 14ms", detail: "Machine-speed execution" },
    { label: "SIEM Event Ingestion", value: "100k+ EPS", detail: "Sub-second event correlation" },
    { label: "MITRE ATT&CK Coverage", value: "200+", detail: "Tactics & techniques mapped" },
    { label: "Agent Overhead", value: "< 1% CPU", detail: "Kernel-level eBPF monitoring" }
  ],
  pillars: [
    {
      id: "xdr",
      path: "/products/xdr",
      name: "NetCradus XDR",
      tagline: "Endpoint + Threat Hunting + Detection",
      desc: "Protect endpoints, servers, and multi-cloud workloads with kernel-level eBPF detection, behavioral NGAV, and proactive threat hunting.",
      icon: "Shield"
    },
    {
      id: "siem",
      path: "/products/siem",
      name: "NetCradus SIEM",
      tagline: "Log Management + Detection + Correlation",
      desc: "Centralized high-throughput log aggregation (100k+ EPS), machine learning correlation, UEBA profiling, and automated compliance dashboards.",
      icon: "Database"
    },
    {
      id: "soar",
      path: "/products/soar",
      name: "NetCradus SOAR",
      tagline: "Automated Response + Playbooks",
      desc: "Autonomous incident response executing agentic containment playbooks, host isolation, and token revocation in under 14ms.",
      icon: "Zap"
    },
    {
      id: "cti",
      path: "/products/cti",
      name: "NetCradus CTI",
      tagline: "Threat Intelligence",
      desc: "Synchronized global cyber threat feeds, adversary TTP profiling, dark web exposure monitoring, and automated IOC enrichment.",
      icon: "Globe"
    },
    {
      id: "pam",
      path: "/products/pam",
      name: "NetCradus PAM",
      tagline: "Privileged Access Management",
      desc: "Enforce zero trust, eliminate standing privileges with Just-In-Time (JIT) access elevation, encrypted vaults, and live session audit trails.",
      icon: "Lock"
    },
    {
      id: "grc",
      path: "/products/grc",
      name: "NetCradus GRC",
      tagline: "Risk + Compliance",
      desc: "Continuous attack surface management, automated vulnerability scanning, and real-time compliance auditing for ISO 27001, SOC 2, and GDPR.",
      icon: "FileCheck"
    },
    {
      id: "ai-security",
      path: "/products/ai-security",
      name: "NetCradus AI Security",
      tagline: "AI/ML Security + AI Threat Detection",
      desc: "Protect enterprise machine learning pipelines, LLM prompt inputs, semantic guardrails, and block rogue Shadow AI traffic.",
      icon: "Cpu"
    }
  ],
  workflow: [
    {
      num: "01",
      title: "Universal Telemetry Ingestion",
      desc: "Single lightweight eBPF agent continuously ingests logs, process executions, network packets, and identity events across all operating systems and cloud environments."
    },
    {
      num: "02",
      title: "AI Behavioral Baselining",
      desc: "UEBA algorithms establish behavioral baselines for every user and asset, instantly identifying anomalous deviations, privilege spikes, and lateral movement."
    },
    {
      num: "03",
      title: "Threat Correlation & MITRE Mapping",
      desc: "Cross-platform telemetry is correlated against global threat intelligence and YARA-X/Sigma rules, automatically aligning events to MITRE ATT&CK techniques."
    },
    {
      num: "04",
      title: "Autonomous Machine-Speed Action",
      desc: "SOAR playbooks trigger in under 14ms to terminate malicious processes, isolate compromised hosts, and revoke Active Directory tokens without waiting for human intervention."
    },
    {
      num: "05",
      title: "Self-Healing & Swarm Hardening",
      desc: "Compromised file systems roll back to the last clean snapshot in <5 minutes, and new threat indicators propagate across the entire immune network."
    }
  ]
};

export const productsDetailMap = {
  "xdr": {
    id: "xdr",
    badge: "EXTENDED DETECTION & RESPONSE",
    name: "NetCradus XDR",
    fullName: "NetCradus Cyrix XDR — Autonomous Endpoint & Workload Protection",
    tagline: "AI-Powered Unified Endpoint, Cloud & Network Protection",
    lead: "Kernel eBPF • Behavioral NGAV • Proactive Threat Hunting • Ransomware Rollback",
    description: "NetCradus Cyrix XDR delivers comprehensive protection across workstations, physical servers, virtual machines, and cloud container workloads. By unifying behavioral Next-Gen Antivirus (NGAV), memory exploit guards, and cross-domain telemetry fusion, it detects and neutralizes stealthy zero-day attacks before damage occurs.",
    heroStats: [
      { label: "Containment Speed", value: "< 14ms" },
      { label: "Detection Engine", value: "Kernel eBPF" },
      { label: "Snapshot Recovery", value: "< 5 Mins" },
      { label: "CPU Footprint", value: "< 1%" }
    ],
    features: [
      {
        title: "Behavioral NGAV & Exploit Guard",
        desc: "Deep inspection of process execution trees, memory thread injections, and API hook tampering to block fileless and in-memory malware."
      },
      {
        title: "Anti-Ransomware Snapshot Rollback",
        desc: "Instant detection of unauthorized mass file encryption or VSS deletion, triggering automatic rollback to the last verified clean state."
      },
      {
        title: "Cross-Domain Telemetry Fusion",
        desc: "Fuses endpoint process telemetry with network flow logs, DNS queries, and cloud identity actions into unified investigative graphs."
      },
      {
        title: "Proactive Threat Hunting Engine",
        desc: "SQL-like telemetry query builder enabling security teams to hunt for indicators of compromise across billions of historical events."
      },
      {
        title: "Automated Device Isolation",
        desc: "Instantly severs external and internal network connectivity on compromised machines while preserving encrypted SOC telemetry access."
      },
      {
        title: "USB & Hardware Access Governance",
        desc: "Granular administrative control over external storage devices, network adapters, and peripheral bus connections to stop physical infiltration."
      }
    ],
    workflow: [
      { step: "1", title: "Continuous Signal Capture", desc: "eBPF agent collects kernel events, process launches, and network sockets." },
      { step: "2", title: "Behavioral Heuristic Evaluation", desc: "Machine learning compares live activity against established process baselines." },
      { step: "3", title: "Sub-Second Threat Neutralization", desc: "Host is isolated, malicious process killed, and forensic dump preserved in <100ms." },
      { step: "4", title: "Automated Remediation", desc: "Persistence mechanisms and rogue registry keys are automatically purged." }
    ],
    useCases: [
      {
        title: "Ransomware Attack Disruption",
        desc: "Detects rapid entropy changes and stops encryptor binaries immediately, restoring altered files without paying ransom."
      },
      {
        title: "Fileless & Living-off-the-Land (LOLBins)",
        desc: "Detects PowerShell, WMI, and MSBuild script abuse executing stealthily in system memory without creating disk files."
      },
      {
        title: "Remote Workstation Defense",
        desc: "Autonomous local enforcement on offline and off-network laptops ensuring 24/7 protection outside corporate boundaries."
      }
    ]
  },

  "siem": {
    id: "siem",
    badge: "NEXT-GEN AI SIEM",
    name: "NetCradus SIEM",
    fullName: "NetCradus AI-Powered SIEM — Telemetry Ingestion & Correlation Engine",
    tagline: "High-Throughput Log Management, Real-Time Correlation & Compliance Analytics",
    lead: "100k+ EPS Ingestion • UEBA Behavioral Baselining • YARA-X / Sigma • MITRE ATT&CK",
    description: "NetCradus SIEM is an AI-driven security information and event management platform engineered for massive telemetry scale. Ingesting over 100k+ events per second, it unifies logs from cloud providers (AWS CloudTrail, Azure Monitor, GCP Audit), Kubernetes clusters, firewalls, and SaaS applications with sub-second correlation.",
    heroStats: [
      { label: "Ingestion Throughput", value: "100k+ EPS" },
      { label: "Query Latency", value: "Sub-Second" },
      { label: "Noise Reduction", value: "95%+" },
      { label: "Compliance Packs", value: "ISO, SOC2, GDPR" }
    ],
    features: [
      {
        title: "Multi-Cloud & Hybrid Ingestion",
        desc: "Native out-of-the-box connectors for AWS CloudTrail, Azure Monitor, GCP Audit Logs, Kubernetes audit logs, Okta, and SaaS APIs."
      },
      {
        title: "User & Entity Behavior Analytics (UEBA)",
        desc: "Advanced ML models (Isolation Forest, DBSCAN) build baseline profiles for users and service accounts to detect anomalous credential abuse."
      },
      {
        title: "YARA-X & Sigma Rule Execution",
        desc: "Execute industry-standard Sigma rules and high-performance YARA-X pattern matching directly against real-time streaming telemetry."
      },
      {
        title: "Automated MITRE ATT&CK Mapping",
        desc: "Every alert and correlation chain is automatically mapped to MITRE tactics, techniques, and sub-techniques for full attack chain context."
      },
      {
        title: "Sub-Second SPL-Compatible Query Explorer",
        desc: "Search, filter, and aggregate petabytes of raw and structured log records instantaneously with familiar query syntax and visual dashboards."
      },
      {
        title: "Automated Compliance & Evidence Reporting",
        desc: "Continuous audit tracking and one-click evidence exports for ISO 27001, SOC 2, UK GDPR, HIPAA, and PCI-DSS compliance mandates."
      }
    ],
    workflow: [
      { step: "1", title: "Unified Log Ingestion", desc: "Streaming ingestion from cloud APIs, syslog, Windows Event Logs, and network flows." },
      { step: "2", title: "Normalization & Enrichment", desc: "Parsing into unified schemas with CTI intelligence, geo-IP, and asset criticality tags." },
      { step: "3", title: "ML Correlation & UEBA", desc: "Multi-stage event correlation detects anomalies and aggregates risk scores." },
      { step: "4", title: "Actionable Incident Trigger", desc: "High-fidelity incident packages are dispatched directly to SOAR playbooks." }
    ],
    useCases: [
      {
        title: "Cloud Infrastructure Breach Detection",
        desc: "Correlates anomalous AWS IAM role assumptions with unauthorized S3 data exfiltration and suspicious security group changes."
      },
      {
        title: "Compromised Administrative Accounts",
        desc: "Identifies impossible travel logins, after-hours privilege escalation, and bulk database queries by legitimate credentials."
      },
      {
        title: "Regulatory Compliance Automation",
        desc: "Maintains tamper-proof immutable audit logs with automated continuous posture checks for external auditors."
      }
    ]
  },

  "soar": {
    id: "soar",
    badge: "AUTONOMOUS ORCHESTRATION",
    name: "NetCradus SOAR",
    fullName: "NetCradus SOAR — Security Orchestration, Automation & Response",
    tagline: "Machine-Speed Incident Containment & Agentic Playbook Orchestration",
    lead: "Sub-14ms Response • Visual Playbook Builder • 50+ Security Connectors • Automated Rollback",
    description: "NetCradus SOAR transforms slow manual incident response into autonomous machine-speed containment. Operating in sub-14 milliseconds, it coordinates cross-vendor workflows across firewalls, endpoint agents, cloud IAM, and ticketing platforms to isolate threats before damage occurs.",
    heroStats: [
      { label: "Execution Speed", value: "< 14ms" },
      { label: "Pre-Built Connectors", value: "50+" },
      { label: "SLA Response", value: "< 15 Mins" },
      { label: "Containment Success", value: "100%" }
    ],
    features: [
      {
        title: "Sub-14ms Autonomous Containment",
        desc: "Instantaneous execution of remediation playbooks: isolate hosts, revoke Active Directory sessions, and block malicious external IPs."
      },
      {
        title: "Agentic Visual Playbook Builder",
        desc: "Intuitive drag-and-drop workflow designer allowing SOC engineers to construct complex multi-branch automation playbooks with zero coding."
      },
      {
        title: "Cross-Vendor API Ecosystem",
        desc: "Pre-configured bi-directional integrations with Palo Alto Networks, Fortinet, Microsoft 365, Okta, AWS Security Hub, and Jira/ServiceNow."
      },
      {
        title: "Automated Threat Enrichment",
        desc: "Queries CTI feeds, reverse-engineers file hashes, and pulls historical user risk scores before presenting consolidated incident cases."
      },
      {
        title: "Interactive Human-in-the-Loop Approval",
        desc: "Configurable escalation policies that require human authorization for high-impact enterprise containment actions while automating low-risk steps."
      },
      {
        title: "Complete Audit & Forensic Logging",
        desc: "Every automated decision, playbook step, and API execution is logged in immutable forensic timelines for post-incident reviews."
      }
    ],
    workflow: [
      { step: "1", title: "Trigger Received", desc: "High-severity alert ingested from SIEM or XDR detection engine." },
      { step: "2", title: "Automated Contextual Enrichment", desc: "Pulls affected user details, asset criticality, and global threat feed score." },
      { step: "3", title: "Playbook Execution", desc: "Terminates attack path: revokes Kerberos tokens, isolates host, updates firewall rules." },
      { step: "4", title: "ITSM Sync & Notification", desc: "Generates forensic summary ticket in ServiceNow and notifies security on-call." }
    ],
    useCases: [
      {
        title: "Phishing & Credential Theft Response",
        desc: "Automatically quarantines malicious inbox attachments, invalidates user sessions, and triggers password reset across the domain."
      },
      {
        title: "Outbound C2 Beacon Neutralization",
        desc: "Identifies command-and-control communication and pushes dynamic firewall block rules to perimeter gateways in under 2 seconds."
      },
      {
        title: "SOC Analyst Fatigue Reduction",
        desc: "Automates 85%+ of repetitive Tier-1 alert triage, freeing human analysts for proactive hunting and deep forensic investigations."
      }
    ]
  },

  "cti": {
    id: "cti",
    badge: "CYBER THREAT INTELLIGENCE",
    name: "NetCradus CTI",
    fullName: "NetCradus CTI — Global Cyber Threat Research & Intelligence Platform",
    tagline: "Adversary Tradecraft Profiling, Real-Time IOC Feeds & Dark Web Telemetry",
    lead: "Global Threat Feeds • Adversary Campaign Profiling • Dark Web Monitoring • IOC Enrichment",
    description: "NetCradus CTI provides actionable, contextual threat intelligence gathered from global honeypot networks, underground research, and dark web tracking. It enriches raw detection signals with adversary motives, campaign attributions, and tactical indicators.",
    heroStats: [
      { label: "Active IOC Feeds", value: "Real-Time" },
      { label: "MITRE ATT&CK", value: "Full Matrix" },
      { label: "Dark Web Coverage", value: "24/7/365" },
      { label: "Enrichment Latency", value: "< 200ms" }
    ],
    features: [
      {
        title: "Real-Time Global IOC Feeds",
        desc: "Continuous streaming feeds of verified malicious IPs, domain names, file hashes, and SSL certificates synchronized into detection engines."
      },
      {
        title: "Adversary TTP & Campaign Profiling",
        desc: "Deep dossiers on state-sponsored actors, ransomware syndicates, and initial access brokers, mapping their specific attack playbooks."
      },
      {
        title: "Dark Web & Breach Exposure Monitoring",
        desc: "Continuous scanning of underground forums, paste sites, and leak repositories for corporate credentials, leaked source code, and assets."
      },
      {
        title: "Automated Malware Reverse-Engineering",
        desc: "Dynamic sandbox analysis of suspicious binaries extracting command-and-control configurations, mutexes, and behavioral signatures."
      },
      {
        title: "Threat Landscape Heatmaps",
        desc: "Interactive visualizations aligning observed enterprise telemetry against global industry-specific threat trends and emerging CVE exploits."
      },
      {
        title: "Bi-Directional STIX/TAXII Integration",
        desc: "Standardized threat intelligence sharing protocols allowing automated ingestion and distribution across external ISACs and security tools."
      }
    ],
    workflow: [
      { step: "1", title: "Global Telemetry Collection", desc: "Sensors, honeypots, and dark web scrapers collect raw threat indicators." },
      { step: "2", title: "Analysis & Campaign Attribution", desc: "Threat researchers and ML models categorize indicators by threat actor and TTP." },
      { step: "3", title: "Automated Ingestion & Sync", desc: "High-confidence IOCs are streamed directly into XDR and SIEM detection rules." },
      { step: "4", title: "Proactive Hunting Inoculation", desc: "Enterprise endpoints are swept for historical presence of newly discovered indicators." }
    ],
    useCases: [
      {
        title: "Targeted Adversary Early Warning",
        desc: "Alerts security leadership when threat actors actively discuss or target your industry sector or technology stack."
      },
      {
        title: "Credential Stuffing Prevention",
        desc: "Discovers corporate employee credentials exposed in third-party breaches and forces proactive credential resets."
      },
      {
        title: "Zero-Day Exploit Defense",
        desc: "Delivers proactive mitigation rules and virtual patch recommendations hours before official vendor CVE patches are released."
      }
    ]
  },

  "pam": {
    id: "pam",
    badge: "PRIVILEGED ACCESS MANAGEMENT",
    name: "NetCradus PAM",
    fullName: "NetCradus PAM — Zero Trust Privileged Access & Credential Governance",
    tagline: "Just-In-Time Elevation, Encrypted Vaults & Live Session Auditing",
    lead: "AES-256 Vaulting • Just-In-Time Access • Session Video Recording • Automated Key Rotation",
    description: "NetCradus PAM eliminates standing privileges across enterprise servers, multi-cloud consoles, and critical databases. Enforcing continuous Zero Trust verification, it grants ephemeral Just-In-Time access and records administrative sessions with full audit trails.",
    heroStats: [
      { label: "Vault Encryption", value: "AES-256-GCM" },
      { label: "Access Model", value: "Zero Standing Privileges" },
      { label: "Session Audit", value: "Live Video & Keylogs" },
      { label: "MFA Enforcement", value: "FIDO2 / WebAuthn" }
    ],
    features: [
      {
        title: "Encrypted Credential Vault",
        desc: "Centralized, tamper-proof vault protecting root, administrator, SSH keys, API tokens, and service account secrets with AES-256-GCM encryption."
      },
      {
        title: "Just-In-Time (JIT) Ephemeral Access",
        desc: "Grants least-privilege administrative access strictly for approved time windows, automatically revoking credentials once tasks are completed."
      },
      {
        title: "Real-Time Session Recording & Keystroke Logs",
        desc: "Full video recording and indexed keystroke logging for RDP, SSH, and web console administrative sessions for forensic compliance."
      },
      {
        title: "Automated Credential & Key Rotation",
        desc: "Automatically changes complex administrative passwords and rotates SSH keys on schedules or immediately after each privileged session."
      },
      {
        title: "Privileged Session Threat Interception",
        desc: "AI monitors active privileged sessions for high-risk commands (e.g. rm -rf, dumpntds, unauthorized user creation) and terminates sessions instantly."
      },
      {
        title: "Zero Trust Identity Federation",
        desc: "Seamless integration with enterprise identity providers (Okta, Entra ID, Ping) requiring multi-factor authentication for every access request."
      }
    ],
    workflow: [
      { step: "1", title: "Access Request & Verification", desc: "User requests temporary elevated role with business justification and MFA." },
      { step: "2", title: "JIT Credential Delivery", desc: "Ephemeral credentials or proxied session connection established without exposing raw passwords." },
      { step: "3", title: "Real-Time Session Monitoring", desc: "Every keystroke and command is indexed, audited, and evaluated by anomaly models." },
      { step: "4", title: "Automatic Revocation & Rotation", desc: "Session concludes, privileges expire, and underlying credentials rotate immediately." }
    ],
    useCases: [
      {
        title: "Third-Party Vendor Remote Access",
        desc: "Enables external contractors to service internal systems without VPN access, credentials exposure, or lateral movement risks."
      },
      {
        title: "DevOps & Cloud Console Governance",
        desc: "Replaces permanent AWS/Azure root access with time-bound, audited CLI and web console elevation."
      },
      {
        title: "Ransomware Lateral Movement Prevention",
        desc: "Prevents attackers from harvesting cached Domain Admin credentials from endpoint memory to compromise domain controllers."
      }
    ]
  },

  "grc": {
    id: "grc",
    badge: "GOVERNANCE, RISK & COMPLIANCE",
    name: "NetCradus GRC",
    fullName: "NetCradus GRC — Continuous Attack Surface Management & Audit Automation",
    tagline: "Continuous Compliance Tracking, Asset Mapping & Risk Quantification",
    lead: "Continuous ASM • ISO 27001 • SOC 2 • UK GDPR • Automated Evidence Collection",
    description: "NetCradus GRC bridges technical security posture with regulatory compliance. It continuously discovers external and internal digital assets, evaluates software vulnerabilities, and maps enterprise controls against international compliance frameworks.",
    heroStats: [
      { label: "Compliance Frameworks", value: "15+ Global Standards" },
      { label: "Audit Readiness", value: "Continuous / Real-Time" },
      { label: "Asset Discovery", value: "100% Automated" },
      { label: "Report Generation", value: "One-Click PDF/CSV" }
    ],
    features: [
      {
        title: "Continuous Attack Surface Management (ASM)",
        desc: "Discovers shadow IT, exposed cloud buckets, forgotten subdomains, and open ports across your entire Internet-facing perimeter."
      },
      {
        title: "Automated Compliance Auditing & Mapping",
        desc: "Continuous evidence collection and automated compliance mapping for ISO/IEC 27001, SOC 2 Type II, UK GDPR, NIST CSF, and HIPAA."
      },
      {
        title: "Dynamic Cyber Risk Scoring",
        desc: "Quantifies business risk into actionable executive scores by combining vulnerability severity with asset criticality and threat telemetry."
      },
      {
        title: "Vendor & Third-Party Risk Assessment",
        desc: "Evaluates security postures of third-party vendors and supply chain partners with automated questionnaires and external telemetry checks."
      },
      {
        title: "Compliance Drift & Violation Alerts",
        desc: "Instant alerts when cloud misconfigurations, unencrypted databases, or policy exceptions violate compliance baselines."
      },
      {
        title: "One-Click Auditor Evidence Export",
        desc: "Generates comprehensive, auditor-ready compliance packages, control matrices, and technical proof documents in seconds."
      }
    ],
    workflow: [
      { step: "1", title: "Asset Discovery & Tagging", desc: "Automated scan discovers all IP ranges, cloud resources, and software dependencies." },
      { step: "2", title: "Continuous Risk Evaluation", desc: "Scans for CVEs, configuration drift, and regulatory framework control gaps." },
      { step: "3", title: "Prioritized Remediation Guidance", desc: "Generates prioritized fix tickets for engineering teams based on actual exploitability." },
      { step: "4", title: "Executive & Auditor Dashboards", desc: "Displays real-time compliance readiness scoreboards and historical progress curves." }
    ],
    useCases: [
      {
        title: "Fast-Track SOC 2 & ISO 27001 Certification",
        desc: "Reduces audit preparation time by 75% through automated telemetry-based evidence gathering."
      },
      {
        title: "Shadow IT & Cloud Sprawl Containment",
        desc: "Discovers unmonitored development cloud accounts, dangling DNS records, and publicly exposed storage containers."
      },
      {
        title: "Board-Level Cyber Risk Reporting",
        desc: "Translates complex technical vulnerabilities into clear financial and operational risk metrics for executive leadership."
      }
    ]
  },

  "ai-security": {
    id: "ai-security",
    badge: "AI & LLM PROTECTION",
    name: "NetCradus AI Security",
    fullName: "NetCradus AI Security — Enterprise AI/ML & LLM Pipeline Defense",
    tagline: "Prompt Injection Defense, Semantic Guardrails & Shadow AI Governance",
    lead: "Prompt Sanitization • Semantic Guardrails • PII Redaction • Model Poisoning Prevention",
    description: "NetCradus AI Security protects generative AI applications, large language models (LLMs), machine learning pipelines, and autonomous AI agents. It intercepts prompt injection attacks, prevents training data poisoning, redacts confidential PII, and blocks rogue Shadow AI usage.",
    heroStats: [
      { label: "Inspection Latency", value: "< 15ms" },
      { label: "Prompt Injection Defense", value: "99.8% Accuracy" },
      { label: "PII Detection", value: "Real-Time Redaction" },
      { label: "Model Architecture", value: "Framework Agnostic" }
    ],
    features: [
      {
        title: "Real-Time Prompt Injection & Jailbreak Defense",
        desc: "Deep neural inspection of user inputs to identify direct and indirect prompt injection attempts, jailbreaks, and adversarial system prompt overrides."
      },
      {
        title: "Semantic Output Guardrails & Toxic Content Filtering",
        desc: "Real-time validation of LLM outputs ensuring alignment with enterprise safety policies and blocking hallucinated or unauthorized actions."
      },
      {
        title: "PII & Confidential Data Redaction",
        desc: "Automatically masks credit card numbers, health records, API keys, and corporate secrets before prompts reach public or third-party LLM APIs."
      },
      {
        title: "Training Data Poisoning & Model Inversion Defense",
        desc: "Inspects fine-tuning datasets and embedding vector databases for malicious adversarial perturbations and backdoors."
      },
      {
        title: "Shadow AI & Rogue Model Discovery",
        desc: "Monitors enterprise network and cloud egress traffic to identify and govern unapproved employee use of consumer AI tools."
      },
      {
        title: "Autonomous AI Agent Sandboxing",
        desc: "Constrains autonomous AI agents and tool-calling models within strict execution boundaries to prevent unauthorized API actions."
      }
    ],
    workflow: [
      { step: "1", title: "Prompt Interception", desc: "User input is analyzed before reaching the AI model or LLM endpoint." },
      { step: "2", title: "Semantic & Injection Evaluation", desc: "Neural classifiers evaluate prompt for jailbreaks, prompt leaks, and malicious intent." },
      { step: "3", title: "PII Redaction & Sanitization", desc: "Sensitive data is tokenized and sanitized with zero disruption to prompt meaning." },
      { step: "4", title: "Output Verification", desc: "Generated response is checked against security guardrails before delivery to end user." }
    ],
    useCases: [
      {
        title: "Secure Customer-Facing AI Chatbots",
        desc: "Prevents adversaries from tricking customer service LLMs into revealing internal databases or granting unauthorized discounts."
      },
      {
        title: "Corporate Data Leak Prevention via AI",
        desc: "Blocks employees from pasting proprietary source code, financial spreadsheets, or customer data into external AI services."
      },
      {
        title: "Enterprise Autonomous Agent Safety",
        desc: "Ensures AI agents with database access cannot be manipulated into executing destructive SQL commands or unauthorized data transfers."
      }
    ]
  }
};
