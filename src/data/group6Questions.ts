import { QuizQuestion } from '../types';

const createQuestion = (id: string, text: string, options: string[], correctAnswerIndex: number, explanation: string): QuizQuestion => ({
  id, text, options, correctAnswerIndex, explanation
});

// ========================================================
// QUIZ 1: ENDPOINT HARDENING & MAC/NAC PROTOCOLS (20 Qs)
// ========================================================
export const endpointHardeningQuestions: QuizQuestion[] = [
  createQuestion(
    'qn-eh-1',
    'Which technology allows an administrator to audit the patch level, antivirus status, and Registry configuration of an endpoint computer before allowing it to fully connect to the company LAN?',
    ['Media Access Control (MAC) Filtering', 'Network Access Control (NAC)', 'Host Intrusion Prevention System (HIPS)', 'Domain Name System Security Extensions (DNSSEC)'],
    1,
    'Network Access Control (NAC) acts as the posture watchdog, analyzing client machine health profiles and applying security standards before authorizing full physical network communication.'
  ),
  createQuestion(
    'qn-eh-2',
    'An enterprise wants to enforce a policy that prevents corporate Windows computers from mounting external USB flash drives. Which mechanisms should be deployed globally?',
    ['Group Policy Objects (GPOs)', 'Host Intrusion Detection Systems (HIDS)', 'Jump Server configurations', 'Extensible Authentication Protocol (EAP)'],
    0,
    'Group Policy Objects (GPOs) allow Windows administrators to configure and enforce administrative rules and hardware controls globally across Active Directory environments.'
  ),
  createQuestion(
    'qn-eh-3',
    'A network engineer decides to configure a localized computer that contains zero direct administrative access pathways to the public internet, acting as an isolated checkpoint from which administrators must connect to secure zones. What is this?',
    ['Active Directory domain controller', 'Jump Server / Bastion Host', 'Traffic sinkhole', 'Local area firewall gateway'],
    1,
    'Jump servers act as hardened intermediate gatekeepers, requiring multi-factor authentication, secure connections, and auditing logs for administrators to jump to secure backend segments.'
  ),
  createQuestion(
    'qn-eh-4',
    'To prevent external attackers from laterally scanning internal networks, a security team blocks unrequired services. Which TCP ports are the primary targets for blocking SMB and RDP access on guest VLANs?',
    ['TCP Port 80 and TCP Port 443', 'TCP Port 22 and TCP Port 23', 'TCP Port 445 (SMB) and TCP Port 3389 (RDP)', 'TCP Port 389 and TCP Port 636'],
    2,
    'SMB (Server Message Block) operates over TCP Port 445, and RDP (Remote Desktop Protocol) uses TCP Port 3389. Blocking these services stops lateral movement vectors on non-administrative networks.'
  ),
  createQuestion(
    'qn-eh-5',
    'How does Endpoint Detection and Response (EDR) differ from traditional signature-based Antivirus software?',
    ['EDR focuses strictly on static file system scans.', 'EDR is entirely host-independent, residing inside cloud-native hypervisors.', 'EDR uses signature-less behavioral analytics, API tracking, process monitoring, and RAM inspection to locate dynamic threat actions.', 'EDR relies primarily on local hard drive caching rules.'],
    2,
    'Traditional AV checks files against database signatures, while EDR inspects runtime behavior, process workflows, memory operations, and network connections.'
  ),
  createQuestion(
    'qn-eh-6',
    'Which technology is designed to detect and block unauthorized outflows of sensitive corporate records (such as social security or credit card numbers) from a host machine or file gateway?',
    ['Data Loss Prevention (DLP)', 'Host Intrusion Detection Systems (HIDS)', 'Network Access Control (NAC)', 'Group Policy Objects (GPO)'],
    0,
    'Data Loss Prevention (DLP) systems scan files in motion, in use, and at rest for specific patterns, blocking unauthorized copies or uploads.'
  ),
  createQuestion(
    'qn-eh-7',
    'What wireless security architecture allows enterprise users to log into corporate Wi-Fi safely using their personal Active Directory user credentials instead of a shared static WPA2 password?',
    ['WPA2-Personal (PSK)', '802.1X with EAP-TLS or PEAP', 'MAC Address Filtering table authentication', 'Wireless Static Address Assignment'],
    1,
    '802.1X utilizes EAP (Extensible Authentication Protocol) or PEAP (Protected EAP) to tunnel authentication requests back to a central RADIUS server connected to Active Directory.'
  ),
  createQuestion(
    'qn-eh-8',
    'A security analyst is comparing Host-based IPS (HIPS) and Network-based IPS (NIPS). Which operational statement is correct?',
    ['NIPS sits on individual endpoints; HIPS sits on backbone network routers.', 'HIPS sits directly on an endpoint, monitoring local files and system memory; NIPS is deployed inline on network trunks to inspect raw packet traffic.', 'HIPS is purely passive, while NIPS is actively blocking.', 'NIPS can inspect encrypted internal local computer RAM.'],
    1,
    'HIPS protects endpoints directly by intercepting local operating system actions, whereas NIPS monitors raw transit data flows dynamically over network connections.'
  ),
  createQuestion(
    'qn-eh-9',
    'What strategy involves configuring a specialized internal DNS server or gateway router to return a non-routable IP address when a device queries a known malicious command-and-control server?',
    ['DNS Hijacking attack', 'DNS Sinkholing', 'DNSSEC signing', 'Local area proxy routing'],
    1,
    'DNS Sinkholing routes lookup requests for malicious sites to a safe internal diagnostic IP address, disrupting threat agent operations and identifying compromised assets.'
  ),
  createQuestion(
    'qn-eh-10',
    'An industrial enterprise wants to ensure that legacy workstation endpoints that cannot receive software patches are shielded from network-based exploits. What is the most practical compensating control?',
    ['Deploy global operating system upgrades immediately', 'Isolate the systems inside a secure VLAN behind a network-level firewall or micro-segmentation boundary', 'Install traditional signature antivirus tools', 'Enable MAC Address Filtering globally across all branch controllers'],
    1,
    'VLAN isolation and micro-segmentation insulate unpatchable systems, preventing external exploit attempts from reaching weak hosts.'
  ),
  createQuestion(
    'qn-eh-11',
    'What vulnerability is created when an administrator configures LAN devices to allow and use pre-shared, static passwords for wireless connections across 10,000 corporate staff devices?',
    ['It results in multi-tenant VM isolation compromises.', 'High credential compromise risk, since any employee who learns the key can decrypt public broadcast packets or access the local segment.', 'It disables the local host DLP controls.', 'It raises cold start virtualization latency.'],
    1,
    'Shared pre-shared keys (PSKs) offer poor accountability; compromising the single static credential compromises the entire network segment.'
  ),
  createQuestion(
    'qn-eh-12',
    'Which mechanism can be used to limit network level connectivity strictly to verified hardware cards by mapping hardware MAC addresses to specific switch ports?',
    ['Port Security with MAC Filtering', 'NIST CSF Framework implementation', 'WPA3 Personal handshake', 'SOAR playbook script'],
    0,
    'MAC-based Port Security limits connection privileges on switch physical ports to authorized hardware address tags.'
  ),
  createQuestion(
    'qn-eh-13',
    'What form of Group Policy Object configuration ensures that endpoint local administrator accounts do not share the exact same default password across an enterprise network?',
    ['Microsoft Local Administrator Password Solution (LAPS)', 'Traditional static GPO registry tweaks', 'Network Access Control profiles', 'DLP content filter rules'],
    0,
    'LAPS automatically maintains, randomizes, and backs up distinct passwords for local administrative accounts into Active Directory, eliminating identical login credentials.'
  ),
  createQuestion(
    'qn-eh-14',
    'Which specialized client-side software utility helps defend endpoints from zero-day exploit execution, monitoring code behaviors specifically within browser processes and document viewers?',
    ['Host-based Firewalls', 'Anti-Exploit / Exploit Mitigation utilities (e.g., DEP, ASLR, or EMET)', 'Static signature-based antivirus', 'Network Access Control posture rules'],
    1,
    'Exploit mitigation utilities enforce memory protections (like Data Execution Prevention and Address Space Layout Randomization) to prevent attackers from using standard shellcodes.'
  ),
  createQuestion(
    'qn-eh-15',
    'A security architect wants to prevent unauthorized wireless client endpoints from spoofing a legitimate network router. What standard is designed to secure management frames over Wi-Fi connections?',
    ['802.11w (Protected Management Frames)', '802.1Q (VLAN Tagging)', '802.3ad (Link Aggregation)', 'WPA2-PSK'],
    0,
    'The 802.11w standard encrypts management frames, protecting networks from wireless association disconnections and network spoof attacks.'
  ),
  createQuestion(
    'qn-eh-16',
    'What security control ensures that only pre-approved, digitally-signed application binaries are allowed to execute on enterprise endpoint systems, blocking arbitrary user scripts?',
    ['Static Antivirus', 'Application Whitelisting / AppLocker', 'Group Policy baseline audits', 'DLP network analyzers'],
    1,
    'Application Whitelisting restricts program executions strictly to systems defined by signature, path, or hash boundaries, blocking unauthorized code execution.'
  ),
  createQuestion(
    'qn-eh-17',
    'Why is disabling legacy, clear-text protocols like Link-Local Multicast Name Resolution (LLMNR) and NetBIOS-over-TCP recommended on Windows corporate networks?',
    ['It prevents attackers on local networks from capturing user credentials using responder interception or poison scans.', 'It increases physical network port line speeds.', 'It automatically enforces TLS 1.3 across all ports.', 'It enables native Group Policy updates.'],
    0,
    'LLMNR and NetBIOS transmit lookups in plain text, rendering them susceptible to spoofing and credentials collection (e.g., Responder attacks).'
  ),
  createQuestion(
    'qn-eh-18',
    'Which posture validation setting is a security administrator most likely to configure within a NAC console to manage remote contractor laptop check-ins?',
    ['Enforced baseline database schemas', 'Mandatory multi-tenant container allocations', 'Verification of active firewall, updated antivirus footprints, and OS patch levels', 'Hardware VM escaping prevention keys'],
    2,
    'Posture validation evaluates contractor device states before granting access, isolating non-compliant systems inside quarantine VLANs.'
  ),
  createQuestion(
    'qn-eh-19',
    'An enterprise wants to implement data protection on workstations such that if a physically stored laptop is stolen, its local storage drives cannot be read by third parties. What technology must be enabled?',
    ['Data Loss Prevention (DLP)', 'Full Disk Encryption (FDE), such as BitLocker', 'Network Access Control (NAC)', 'Group Policy file audits'],
    1,
    'Full Disk Encryption (FDE) uses robust cryptography to secure disk sectors, preventing unauthorized access if systems are physically compromised.'
  ),
  createQuestion(
    'qn-eh-20',
    'In Zero Trust Network Architecture, why is the concept of Micro-segmentation highly emphasized over traditional perimeter network firewalls?',
    ['It completely replaces the need for endpoint antivirus utilities.', 'It splits network segments into micro-segments, constraining attacker lateral traversal even if they gain credentials to a workstation.', 'It relies purely on public cloud CapEx structures.', 'It prevents the compiler from generating memory leaks.'],
    1,
    'Micro-segmentation restricts access to specific micro-zones, reducing the impact of local network breaches.'
  )
];

// ========================================================
// QUIZ 2: SOC OPERATIONS & SECURE PROTOCOLS (20 Qs)
// ========================================================
export const socOperationsQuestions: QuizQuestion[] = [
  createQuestion(
    'qn-so-1',
    'A Security Operations Center (SOC) analyst is troubleshooting an application pipeline. They need to monitor complete network packet byte payloads for a forensic investigation. What file type is required?',
    ['Syslog diagnostic files', 'PCAP (Packet Capture) records', 'Netflow flow statistics', 'Windows Event CSV files'],
    1,
    'PCAP (Packet Capture) files store raw network packet flows, preserving payloads and transaction headers for detailed packet-level forensics.'
  ),
  createQuestion(
    'qn-so-2',
    'How do Netflow logs differ from PCAP files when analyzing network transactions?',
    ['Netflow logs record the exact byte payloads of all conversations.', 'PCAP files are text-only; Netflow records are binary packages.', 'Netflow provides conversational metadata (source/destination IP, port, byte volume, timestamps) without storing raw packet payloads, reducing storage requirements.', 'Netflow records only administrative logins.'],
    2,
    'Netflow records metadata about communication sessions, protecting storage and privacy while offering broad network visibility.'
  ),
  createQuestion(
    'qn-so-3',
    'Which operational engine acts beyond basic SIEM by leveraging programmatic workflows (playbooks) to automate immediate containment responses (such as isolating an IP or account)?',
    ['Local syslogs', 'Security Orchestration, Automation, and Response (SOAR)', 'Unified Threat Management (UTM)', 'Standard Intrusion Detection Systems (IDS)'],
    1,
    'SOAR platforms coordinate machine-to-machine APIs via playbooks, deploying immediate automated defenses to containerize security incidents.'
  ),
  createQuestion(
    'qn-so-4',
    'A cybersecurity engineer wants to encrypt legacy file transfers over the internet. Which protocol transition represents the most secure replacement for clear-text FTP?',
    ['HTTP over TCP Port 80', 'Telnet over TCP Port 23', 'SFTP (SSH File Transfer Protocol) over TCP Port 22', 'LDAP over TCP Port 389'],
    2,
    'FTP transmits credentials and files in clear-text, whereas SFTP uses SSH tunnels over TCP Port 22 to encrypt authentication and transfers.'
  ),
  createQuestion(
    'qn-so-5',
    'Which port and encryption protocol is correct when migrating clear-text directory queries (LDAP) to their secure counterpart?',
    ['LDAPS over TCP Port 636 encrypted with TLS/SSL', 'LDAPS over TCP Port 445 encrypted with SSH', 'SFTP over TCP Port 21 encrypted with Blowfish', 'Telnet over TCP Port 22 encrypted with Blowfish'],
    0,
    'LDAPS (LDAP Secure) uses TLS to protect directory communications, running on default TCP Port 636.'
  ),
  createQuestion(
    'qn-so-6',
    'Which secure protocol is designed to provide cryptographic security at the Network Layer (Layer 3) of the OSI model, making it ideal for Site-to-Site VPN networks?',
    ['SRTP (Secure Real-Time Transport Protocol)', 'IPsec (Internet Protocol Security)', 'S/MIME', 'DNSSEC'],
    1,
    'IPsec operates at Layer 3 to encrypt all data payloads between network hosts and network gateways.'
  ),
  createQuestion(
    'qn-so-7',
    'What security enhancement does DNSSEC yield compared to traditional DNS operations?',
    ['It encrypts all DNS lookups into symmetric block formats.', 'It applies cryptographic digital signatures to DNS records, preventing DNS spoofing and cache poisoning exploits.', 'It disables administrative configuration changes.', 'It routes web browsers through a Jump Server.'],
    1,
    'DNSSEC adds cryptographic signatures to DNS records, validating name authority and ensuring DNS responses have not been manipulated.'
  ),
  createQuestion(
    'qn-so-8',
    'A network administrator must configure a secure browser connection pipeline. Which standard provides the correct cryptographic wrapper for standard HTTP, utilizing TCP Port 443?',
    ['FTP (TCP 21)', 'HTTPS (TCP 443) using TLS 1.2 or 1.3', 'Telnet (TCP 22)', 'LDAPS (TCP 389)'],
    1,
    'HTTPS uses TLS (Transport Layer Security) to encrypt web server communications over TCP Port 443.'
  ),
  createQuestion(
    'qn-so-9',
    'How does a centralized SIEM system locate complex attacks that involve multi-stage alerts across distinct network firewalls and endpoints?',
    ['By running real-time correlation rules across normalized logs ingested from multiple distinct system sources.', 'By deleting old Unix syslogs to clean database storage space.', 'By converting all C++ program variables into local python objects.', 'By maintaining separate, disconnected databases.'],
    0,
    'SIEM platforms ingest, normalize, and correlate diverse logs to identify sophisticated, multi-vector attacks.'
  ),
  createQuestion(
    'qn-so-10',
    'A forensic analyst reviews a firewall log file. What essential headers are expected in each log entry to diagnose packet-blocking actions?',
    ['The computer hardware serial numbers', 'Source IP, Destination IP, Source Port, Destination Port, Protocol, and Action (Allow/Drop)', 'The local RAM usage logs', 'User active password hashes'],
    1,
    'Standard firewall logs record connection parameters (source/destination IPs and ports, protocols, actions, and time stamps).'
  ),
  createQuestion(
    'qn-so-11',
    'Which security mechanism guarantees the encryption and digital signature verification of individual email messages directly at the user agent container, maintaining security even if mail servers are compromised?',
    ['Secure Real-Time Transport Protocol (SRTP)', 'S/MIME (Secure/Multipurpose Internet Mail Extensions)', 'IPsec Layer 3 configuration', 'SFTP server parameters'],
    1,
    'S/MIME provides end-to-end encryption and digital signatures for email, protecting messages at rest and in transit.'
  ),
  createQuestion(
    'qn-so-12',
    'An engineer wants to secure real-time voice and video (VoIP) sessions across an enterprise. What protocol should they implement?',
    ['S/MIME', 'SRTP (Secure Real-Time Transport Protocol)', 'LDAPS (TCP 636)', 'DNSSEC'],
    1,
    'SRTP encrypts and authenticates voice and video data streams, protecting multimedia communications from interception.'
  ),
  createQuestion(
    'qn-so-13',
    'Why must secure protocol transition plans replace SSL with TLS rather than configuring older SSL versions with better passwords?',
    ['SSL lacks support for standard Windows networks.', 'Historically public vulnerabilities (such as POODLE and BEAST) have rendered SSL inherently broken, establishing TLS as the only secure standard.', 'SSL requires expensive hardware security modules.', 'TLS automatically disables Network Access Control (NAC) systems.'],
    1,
    'SSL is deprecated due to structural encryption vulnerabilities; TLS has evolved to replace it as the industry standard.'
  ),
  createQuestion(
    'qn-so-14',
    'A SOC analyst notices a sudden surge in outbound traffic over destination port UDP 53 from local client endpoints. What attack vectors could this indicate?',
    ['An HTTP unauthorized file login attempt', 'DNS Tunneling, used by malware to exfiltrate database records or establish command-and-control communication pipelines', 'LDAP database directory updates', 'Symmetric decryption operations'],
    1,
    'DNS Tunneling routes malicious traffic within standard Port 53 queries to bypass firewalls and exfiltrate data.'
  ),
  createQuestion(
    'qn-so-15',
    'Which administrative command line terminal protocol must be avoided entirely due to transmitting authentication credentials in unencrypted clear-text?',
    ['SSH', 'Telnet', 'SFTP', 'HTTPS'],
    1,
    'Telnet (Port 23) transmits all session data—including passwords—in plain text, exposing credentials to local sniffing attacks.'
  ),
  createQuestion(
    'qn-so-16',
    'What describes the process of "Log Normalization" within an enterprise SIEM architecture?',
    ['Deleting historical database tables to optimize performance.', 'Converting disjointed log data from diverse devices into a standard structure with consistent, searchable field tags.', 'Rebuilding the local host operating systems.', 'Running raw CPU scans on background daemons.'],
    1,
    'Log normalization translates diverse log formats into structured, searchable schemas, enabling seamless SIEM correlation.'
  ),
  createQuestion(
    'qn-so-17',
    'In active directory domain controllers, what protocol is used to query and manage directory information across user endpoints?',
    ['Telnet', 'LDAP / LDAPS', 'DNSSEC', 'SRTP'],
    1,
    'LDAP is used to query directory databases; secure deployments mandate LDAPS (Port 636) to prevent sniffing.'
  ),
  createQuestion(
    'qn-so-18',
    'An analyst wants to examine the exact application layer payloads of a series of SQL injections from a network trace. Which tool should they use?',
    ['Netflow collector dashboard', 'Wireshark or tcpdump to read PCAP files', 'Windows Event Viewer logs console', 'Group Policy configuration audit'],
    1,
    'Wireshark and tcpdump parse raw PCAP captures, exposing application layer payloads (like SQL strings) for deep forensic analysis.'
  ),
  createQuestion(
    'qn-so-19',
    'Which operational protocol operates on UDP Port 514 to receive event, system, debug, and warning logs from Unix and networking nodes?',
    ['LDAP', 'Syslog', 'SFTP', 'IPsec'],
    1,
    'Syslog is the standard log transport protocol, receiving system logs on default UDP or TCP Port 514.'
  ),
  createQuestion(
    'qn-so-20',
    'What is a primary SOC metric defined as the average time it takes for an analyst team to respond after a high-severity alert is triggered?',
    ['Mean Time to Detection (MTTD)', 'Mean Time to Response (MTTR)', 'Mean Time Between Failures (MTBF)', 'Cold Start Recovery latency'],
    1,
    'MTTR tracks response times, which is a key performance metric for Security Operations Centers.'
  )
];

// ========================================================
// QUIZ 3: INCIDENT RESPONSE & THE SIX-STEP LIFECYCLE (20 Qs)
// ========================================================
export const incidentResponseQuestions: QuizQuestion[] = [
  createQuestion(
    'qn-ir-1',
    'What is the correct 6-step incident response sequence defined by SANS and NIST frameworks?',
    ['Identification, Contamination, Isolation, Patching, Restoring, Documentation', 'Preparation, Identification, Containment, Eradication, Recovery, Lessons Learned', 'Preparation, Containment, Eradication, Detection, Recovery, Documentation', 'Detection, Quarantine, Patching, Restoring, Audit, Legal review'],
    1,
    'The standard six-stage lifecycle is: (1) Prep, (2) Identification, (3) Containment, (4) Eradication, (5) Recovery, and (6) Lessons Learned.'
  ),
  createQuestion(
    'qn-ir-2',
    'During which phase of the incident response process does a security team build containment playbooks, configure jump servers, and perform mock incident simulations?',
    ['Identification', 'Preparation', 'Eradication', 'Recovery'],
    1,
    'The Preparation stage involves establishing defenses, teams, tools, and response plans before an incident occurs.'
  ),
  createQuestion(
    'qn-ir-3',
    'A security analyst isolates an infected server from the local corporate network and disables compromised user credentials. Which incident response phase are they in?',
    ['Eradication', 'Containment', 'Identification', 'Lessons Learned'],
    1,
    'The Containment phase isolates threats and restricts access to stop the spread of malicious activity.'
  ),
  createQuestion(
    'qn-ir-4',
    'What describes the main objective of the "Eradication" phase in the incident response lifecycle?',
    ['Restoring the corporate databases online from daily backups.', 'Removing remaining malware files, closing exploited vulnerabilities, and deleting malicious scripts or backdoor accounts.', 'Issuing public relations statements to the press.', 'Collecting RAM configurations for forensic storage.'],
    1,
    'Eradication focuses on removing internal threat trace elements, resolving root vulnerabilities, and hardening systems.'
  ),
  createQuestion(
    'qn-ir-5',
    'Following a severe business system breach, an incident manager schedules a diagnostic retrospective to document actions taken and improve future defenses. What phase is this?',
    ['Preparation', 'Lessons Learned / Postmortem', 'Recovery', 'Identification'],
    1,
    'The Lessons Learned phase analyzes the incident timeline to improve playbooks, configurations, and response times.'
  ),
  createQuestion(
    'qn-ir-6',
    'Which asset represents the highest volatility state according to forensic guidelines, requiring priority extraction before power-cycling a machine?',
    ['Solid State Disk (SSD)', 'System Random Access Memory (RAM)', 'System Registry tables', 'Optical storage mediums'],
    1,
    'RAM is highly volatile; it holds active process memory, cryptokeys, and connection records that vanish when power is lost.'
  ),
  createQuestion(
    'qn-ir-7',
    'What is the primary function of a continuous "Chain of Custody" ledger in digital forensics?',
    ['To document how many database scans run per day.', 'To log the chronological control, transfer, and analysis of physical or digital evidence, ensuring integrity and standard admissibility in a court of law.', 'To organize public messaging pipelines.', 'To audit NIST compliance certifications.'],
    2,
    'A Chain of Custody record documents the lifecycle of evidence, preventing contamination and ensuring legal validity.'
  ),
  createQuestion(
    'qn-ir-8',
    'An active adversary group leverages a previously undocumented software vulnerability for which no security patch exists. What term defines this threat?',
    ['Advanced Ransomware', 'Zero-Day Exploit', 'Known signature exploit', 'Denial of Service attack'],
    1,
    'Zero-day exploits target vulnerabilities that are unknown to the vendor, meaning no patches yet exist to block them.'
  ),
  createQuestion(
    'qn-ir-9',
    'An organization experiences an active, long-term security breach orchestrated by a highly-funded, organized, and stealthy group of nation-state actors. What threat class is this?',
    ['Traditional Trojan malware', 'Advanced Persistent Threat (APT)', 'Script Kiddie attack tool', 'Symmetric brute force'],
    1,
    'APTs are highly-funded, state-sponsored entities targeting prolonged, stealthy access to steal intellectual secrets.'
  ),
  createQuestion(
    'qn-ir-10',
    'Who is the corporate business leader or team responsible for analyzing breach disclosure windows and legal liabilities during an active security incident?',
    ['Lead Security Analyst', 'Legal Counsel and Compliance Team', 'Public Relations Director', 'Senior Database Admin'],
    1,
    'Legal and Compliance teams evaluate legal positions, regulatory requirements, and reporting windows.'
  ),
  createQuestion(
    'qn-ir-11',
    'What is an "Indicator of Compromise" (IoC) within threat intelligence operations?',
    ['An API key configured inside S3 storage buckets.', 'A technical piece of evidence (like a file hash, known bad IP, or domain) indicating a system has likely been compromised by malware.', 'A standard password policy parameter.', 'A framework defined under NIST CSF.'],
    1,
    'IoCs are forensic traces left by attackers, such as file hashes or malicious IP addresses, used to locate active threats.'
  ),
  createQuestion(
    'qn-ir-12',
    'A malware analyst wants to capture malicious packets while testing software in an isolated virtual box. What describes this diagnostic environment?',
    ['A Production Jump Server', 'A Sandbox / Isolated Lab', 'A Public Elastic Cloud VM', 'A Multi-tenant hypervisor database'],
    1,
    'Sandboxes are secure, isolated development layers used to detonate and evaluate threat programs without risking the production network.'
  ),
  createQuestion(
    'qn-ir-13',
    'What forensics step is required to verify that a duplicate disk image is an exact bit-for-bit match of the parent drive?',
    ['Check the physical hardware size metrics.', 'Generate and compare cryptographic hashes (such as SHA-256) of both the original drive and the forensic copy.', 'Deploy the drive inside a bare-metal hypervisor.', 'Verify database row permissions.'],
    1,
    'Comparing cryptographic signatures (e.g., hash values) verifies the forensic image is an identical, unaltered clone of the source drive.'
  ),
  createQuestion(
    'qn-ir-14',
    'During active incidents, who should translate technical details into clear, professional messages for external stakeholders and media outlets?',
    ['Lead incident engineer', 'Public Relations (PR) / Corporate Communications', 'Director of Human Resources', 'Database operations team'],
    1,
    'PR and communications teams handle external updates, protecting customer trust and corporate reputation during a breach.'
  ),
  createQuestion(
    'qn-ir-15',
    'What is a "reverse engineering" operation in the context of advanced threat analyses?',
    ['Formatting infected drives to restore operations.', 'Decompiling or disassembling binary software to understand its inner workings and security behaviors.', 'Updating the network router tables.', 'Running automated Nessus vulnerability scans.'],
    1,
    'Reverse engineering decodes binary files back into readable code to discover a threat\'s capabilities, targets, and methods.'
  ),
  createQuestion(
    'qn-ir-16',
    'Which system event log entry on a Windows core node is most likely to indicate potential lateral movement or compromise of administrative credentials?',
    ['A high browser cache usage warning.', 'An unusual surge of Event ID 4624 (Logon) events, specifically Typ 3 (Network) logins to non-developer hosts.', 'A database table deletion log.', 'A standard printer queuing notice.'],
    1,
    'Event ID 4624 (Logon success) with Type 3 (Network Logon) can indicate lateral movement or unauthorized network logins.'
  ),
  createQuestion(
    'qn-ir-17',
    'Why is it critical to use write-blocker hardware when seizing and analyzing storage drives for digital forensics?',
    ['It increases file extraction speeds.', 'It physically prevents the forensic workstation OS from modifying, writing to, or corrupting evidence files on the target drive.', 'It automatically encrypts the drive with AES-256.', 'It maps database schemas to local memory tables.'],
    1,
    'Write-blockers disable write commands to preserve input drive files, ensuring evidence remains unaltered.'
  ),
  createQuestion(
    'qn-ir-18',
    'Under regulatory frameworks like HIPAA or GDPR, what is "Personal Data / Protected Information" (PII/PHI), and why is its loss categorized as high severity?',
    ['Internal network layout router IP maps.', 'Unencrypted clear-text files, health records, names, physical addresses, or financial records that can identify private citizens, resulting in heavy fines or data theft.', 'Shared server VM templates.', 'Public DNS host tables.'],
    1,
    'PII/PHI belongs to private citizens. Data breaches involving PII/PHI trigger stringent reporting requirements, compliance audits, and heavy fines.'
  ),
  createQuestion(
    'qn-ir-19',
    'Which indicator represents a "Known-signature" security threat?',
    ['A software vulnerability completely unknown to software creators.', 'A known file hash (e.g., MD5/SHA-256) or domain name associated with established malware families.', 'A dynamic user interface configuration.', 'A type-1 hypervisor configuration file.'],
    1,
    'Known-signature threats match established databases, allowing security systems to quickly identify and block them.'
  ),
  createQuestion(
    'qn-ir-20',
    'An incident team recovers client database applications from daily secure offline storage after ransomware encrypts the active databases. What storage type is this?',
    ['Virtual block storage disks', 'Air-gapped / Offline Backups', 'S3 storage buckets with public read', 'Local cache RAM registers'],
    1,
    'Air-gapped (offline) backups are physically isolated from networks, protecting backup assets from active ransomware malware propagation.'
  )
];

// ========================================================
// QUIZ 4: COMPLIANCE, RISK MANAGEMENT & SCHEMAS (20 Qs)
// ========================================================
export const complianceFrameworksQuestions: QuizQuestion[] = [
  createQuestion(
    'qn-cf-1',
    'Which international standard establishes requirements for designing, Auditing, certifying, and maintaining an Information Security Management System (ISMS)?',
    ['ISO/IEC 27001', 'NIST SP 800-37', 'CIS Controls 18', 'PCI DSS 4.0'],
    0,
    'ISO/IEC 27001 is the leading international standard dictating rigorous requirements for operational ISMS audits and business certifications.'
  ),
  createQuestion(
    'qn-cf-2',
    'The NIST Cybersecurity Framework (CSF) is structured around core functions. What is the correct list of these primary functions?',
    ['Prepare, Scan, Attack, Remediate, Conclude', 'Identify, Protect, Detect, Respond, Recover, and Govern', 'Audit, Authenticate, Authorize, Account, Cryptography', 'Identify, Block, Patch, Rebuild, Report'],
    1,
    'NIST CSF divides cybersecurity workflows into critical functions: Identify, Protect, Detect, Respond, Recover, and Govern.'
  ),
  createQuestion(
    'qn-cf-3',
    'Which specialized NIST publication dictates the Risk Management Framework (RMF) 7-step lifecycle process used by federal organizations?',
    ['NIST SP 800-53', 'NIST SP 800-37', 'NIST SP 800-30', 'NIST SP 800-115'],
    1,
    'NIST SP 800-37 explicitly outlines the official security lifecycle steps of the Risk Management Framework (RMF).'
  ),
  createQuestion(
    'qn-cf-4',
    'An enterprise needs to comply with a highly rigorous security standard designed specifically to guard cardholder payment transactions. What is this standard?',
    ['HIPAA', 'PCI DSS (Payment Card Industry Data Security Standard)', 'NIST RMF SP 800-37', 'ISO 27001'],
    1,
    'PCI DSS is a dedicated standard protecting transaction cardholder data, requiring strict technical and physical control audits.'
  ),
  createQuestion(
    'qn-cf-5',
    'What is the structure of the "CIS Critical Security Controls"?',
    ['An absolute corporate standard enforcing expensive hardware replacements.', 'A prioritized, actionable list of 18 critical controls targeted at neutralizing the most prevalent real-world cyber threats.', 'A theoretical risk assessment checklist.', 'A legal standard regulating cloud container systems.'],
    1,
    'The Center for Internet Security (CIS) Controls provide a prioritized path to defend organizations from common cyber threats.'
  ),
  createQuestion(
    'qn-cf-6',
    'What is the common scale used by the Common Vulnerability Scoring System (CVSS) to categorize vulnerability severity levels?',
    ['0.0 to 10.0 (where 9.0 to 10.0 represents Critical vulnerabilities)', 'Low, Medium, High, Extreme', 'A to F grades', '1 to 100 percentages'],
    0,
    'CVSS outputs scores from 0.0 to 10.0, allowing organizations to prioritize remediation based on threat severity.'
  ),
  createQuestion(
    'qn-cf-7',
    'A compliance manager prepares an authoritative catalog of security and privacy controls to maintain NIST compliance. Which publication contains this controls catalog?',
    ['NIST SP 800-37', 'NIST SP 800-53', 'NIST SP 800-30', 'ISO 27001 ISMS'],
    1,
    'NIST SP 800-53 organizes the actual operational and technical controls (e.g., access, audit, training, physical controls) used by organizations.'
  ),
  createQuestion(
    'qn-cf-8',
    'What describes a "Vulnerability Assessment" within an enterprise operational lifecycle?',
    ['Deploying active exploit payloads to verify database vulnerabilities.', 'The systematic, automated process of identifying, classifying, and mapping security loopholes without actively exploiting them.', 'Rebuilding network core router segment tables.', 'Auditing the business expense receipts.'],
    1,
    'Vulnerability assessments identify and categorize system flaws, enabling risk managers to prioritize repairs.'
  ),
  createQuestion(
    'qn-cf-9',
    'How does a Penetration Test differ from a Vulnerability Scan?',
    ['Vulnerability scans actively exploit system flaws.', 'Vulnerability scans are always manual processes.', 'A Penetration Test goes beyond scanning to actively exploit vulnerabilities, confirming exploit potential and evaluating remediation efficacy.', 'Penetration tests are purely cloud-native.'],
    2,
    'A penetration test simulates human-driven attacks to validate susceptibility and measure defensive resilience.'
  ),
  createQuestion(
    'qn-cf-10',
    'A health organization must align its data access policies and encryption with federal rules governing the confidentiality of Protected Health Information (PHI). What standard applies?',
    ['PCI DSS', 'HIPAA (Health Insurance Portability and Accountability Act)', 'ISO 27001', 'NIST SP 800-37'],
    1,
    'HIPAA governs the protection of patient PHI, requiring specific administrative and technical privacy controls.'
  ),
  createQuestion(
    'qn-cf-11',
    'Under the NIST RMF, what occurs during the "Select" step of the Risk Management cycle?',
    ['Developers choose which programming language to write services in.', 'Administrators select and document the specific security controls needed to protect organizations based on risk categorization and system architecture.', 'Auditors decide whether to fine the company.', 'Administrators choose which staff members to hire.'],
    1,
    'The Select phase chooses security controls to mitigate risk, tailoring them to organizational security requirements.'
  ),
  createQuestion(
    'qn-cf-12',
    'What does a "CVE" (Common Vulnerabilities and Exposures) entry represent in vulnerability management systems?',
    ['A list of active domain controller users.', 'A standardized, unique dictionary identifier tag for a publicly disclosed software vulnerability.', 'A cryptographic secure email verification standard.', 'A cloud multi-tenant hypervisor profile.'],
    1,
    'CVE entries provide unique tracking tags for disclosed vulnerabilities, allowing cross-system tracking (e.g., CVE-2023-38646).'
  ),
  createQuestion(
    'qn-cf-13',
    'Which regulatory compliance framework, passed by the European Union (EU) in 2018, mandates privacy protections and cookie consent rules for any global system storing data of EU subjects?',
    ['PCI DSS', 'GDPR (General Data Protection Regulation)', 'ISO 27001', 'NIST SP 800-53'],
    1,
    'GDPR enforces strict data privacy, storage limitations, and cookie consent rules for systems handling EU citizen data.'
  ),
  createQuestion(
    'qn-cf-14',
    'What is the role of an "Information System Authorizing Official" (AO) in government high-compliance frameworks?',
    ['The programmer writing database query lines.', 'The senior business leader who formally accepts remaining system risk and authorizes the system to run.', 'The database auditing logging tool.', 'The compliance training manager.'],
    1,
    'The Authorizing Official (AO) signs off on risk levels and officially authorizes systems to operate.'
  ),
  createQuestion(
    'qn-cf-15',
    'What describes a "Risk Assessment" inside standard enterprise governance architectures?',
    ['Deploying malware binaries directly onto local workstations.', 'The systemic process of identifying risk events, analyzing likelihood and impact parameters, and choosing risk responses.', 'A list of corporate financial costs.', 'A cloud server restart pipeline.'],
    1,
    'Risk assessments analyze the likelihood and impact of potential security failures, assisting prioritization.'
  ),
  createQuestion(
    'qn-cf-16',
    'What is "Inherent Risk" within cybersecurity risk management terminology?',
    ['The remaining risk level after applying security patches and firewalls.', 'The natural, untreated security risk profile of a system before any security controls are applied.', 'A risk caused strictly by public cloud platforms.', 'An administrative error during incident containment.'],
    1,
    'Inherent Risk is the baseline vulnerability level of an untreated asset before applying controls.'
  ),
  createQuestion(
    'qn-cf-17',
    'What is "Residual Risk" within corporate compliance processes?',
    ['The total risk profile before applying security controls.', 'The remaining security risk level after all active controls, patches, and firewalls are implemented.', 'A risk associated with obsolete backup tape drives.', 'An unexpected loss of public cloud connectivity.'],
    1,
    'Residual risk remains after implementing controls; if it meets acceptable levels, executive management can authorize operations.'
  ),
  createQuestion(
    'qn-cf-18',
    'If an enterprise determines that the cost of defending against a low-probability risk exceeds the potential loss of the asset itself, and decides to document the state and take no action, what risk strategy is deployed?',
    ['Risk Mitigation', 'Risk Acceptance', 'Risk Avoidance', 'Risk Transference'],
    1,
    'Risk Acceptance acknowledges and accepts risk when mitigation costs outweigh potential impacts.'
  ),
  createQuestion(
    'qn-cf-19',
    'An enterprise purchases cyber insurance to hedge liability against data breaches. What risk response strategy does this represent?',
    ['Risk Mitigation', 'Risk Transference', 'Risk Avoidance', 'Risk Acceptance'],
    1,
    'Risk Transference shifts financial liability to a third party (such as an insurance provider).'
  ),
  createQuestion(
    'qn-cf-20',
    'What is "Risk Avoidance"?',
    ['Purchasing insurance policies to pay for potential breaches.', 'Deciding to terminate an activity or disable a system because the associated risk is unacceptably high and cannot be easily mitigated.', 'Reconfiguring local firewall rules.', 'Performing daily antivirus database scans.'],
    1,
    'Risk Avoidance eliminates risk by choosing and enforcing policies that terminate the risky activity entirely.'
  )
];

// ========================================================
// EXAM: DEFENSIVE ENGINEERING & GOVERNANCE MASTER EXAM (100 Qs)
// ========================================================
export const group6MasterExamQuestions: QuizQuestion[] = [
  createQuestion(
    'em6-1',
    'A security operations center analyst notices active communication tunnels routing system files over UDP Port 53 to an external IP. Which attack vector should they investigate first?',
    ['SQL Injection on administrative forms', 'DNS Tunneling / Data Exfiltration', 'An unencrypted FTP transaction session', 'A local host buffer overflow exploit'],
    1,
    'Malicious DNS tunneling uses Port 53 queries to circumvent firewalls and exfiltrate database information.'
  ),
  createQuestion(
    'em6-2',
    'Under the AWS/GCP Multi-tenant Shared Responsibility Model, which component is the direct security responsibility of the tenant customer?',
    ['Physical data center perimeter locks', 'Security configuration of the guest operating system, container applications, and security group firewall policies', 'Hypervisor infrastructure network boundaries', 'Replacing hard drive server arrays'],
    1,
    'Customers under the Shared Responsibility Model manage their guest operating systems, access configurations, and network security controls.'
  ),
  createQuestion(
    'em6-3',
    'Which technology evaluates hardware patch levels and active antivirus configurations of endpoint devices before authorizing local LAN connections?',
    ['Media Access Control (MAC) Filtering', 'Network Access Control (NAC)', 'Host Intrusion Detection Systems (HIDS)', 'Windows Event Logging systems'],
    1,
    'NAC enforces host health checks before permitting local network access, isolating non-compliant systems.'
  ),
  createQuestion(
    'em6-4',
    'An enterprise administrator needs to disable vulnerable network communications by blocking cleartext web protocols across all enterprise hosts. What port should they disable?',
    ['TCP Port 443', 'TCP Port 22', 'TCP Port 80', 'TCP Port 445'],
    2,
    'HTTP operates on TCP Port 80; enforcing HTTPS over Port 443 secures web communications.'
  ),
  createQuestion(
    'em6-5',
    'Which SANS/NIST incident response phase involves cleaning malware components, removing backdoors, and closing compromised user credentials?',
    ['Containment', 'Eradication', 'Recovery', 'Lessons Learned'],
    1,
    'Eradication focuses on removing threat traces and addressing exploited loopholes within the environment.'
  ),
  createQuestion(
    'em6-6',
    'Which digital asset represents the highest volatility, requiring immediate forensic capture before power operations?',
    ['Solid State Disk (SSD) drives', 'System Random Access Memory (RAM)', 'Operating System Registry hives', 'Optical media logs'],
    1,
    'RAM stores dynamic states, cryptokeys, and process logs that vanish when power is disconnected.'
  ),
  createQuestion(
    'em6-7',
    'Which standard provides the international requirements and metrics for certifying an Institutional Information Security Management System (ISMS)?',
    ['NIST SP 800-53', 'ISO/IEC 27001', 'PCI DSS 4.0', 'NIST SP 800-37'],
    1,
    'ISO/IEC 27001 is the certifiable global standard for administrative information security management systems.'
  ),
  createQuestion(
    'em6-8',
    'What is the security hazard of executing administrative scripts using administrative credentials in an unencrypted cleartext terminal session?',
    ['It alters local RAM storage configurations.', 'Credential capture, since cleartext protocols like Telnet allow local network eavesdroppers to sniff active administrator credentials.', 'It blocks external Nessus scans.', 'It forces serverless platforms to cold start.'],
    1,
    'Cleartext commands expose credentials and system parameters to packet sniffers.'
  ),
  createQuestion(
    'em6-9',
    'A SOC analyst needs to review complete, packet-level TCP payloads to confirm malicious queries on database servers. What log file format is required?',
    ['Syslog warning text', 'PCAP (Packet Capture) records', 'Netflow traffic logs', 'AD Event log arrays'],
    1,
    'PCAPs store raw packet-level communications, allowing complete payload inspections during forensic reviews.'
  ),
  createQuestion(
    'em6-10',
    'Which system governance mechanism provides the most structured and prioritized list of 18 critical controls targeted at mitigating current threats?',
    ['NIST SP 800-53 Catalog', 'CIS Critical Security Controls', 'ISO 27001 ISMS Blueprint', 'PCI DSS certification rules'],
    1,
    'CIS Controls offer a prioritized operational path to help defend systems from common cyber attacks.'
  ),
  createQuestion(
    'em6-11',
    'An enterprise administrator needs to configure Active Directory to secure 10,000 corporate devices globally. What tool should they use?',
    ['Host Firewalls', 'Group Policy Objects (GPOs)', 'Network Access Control (NAC)', 'DLP endpoint configurations'],
    1,
    'GPOs enable Windows domain administrators to systematically distribute configuration changes to domain hosts.'
  ),
  createQuestion(
    'em6-12',
    'What security control intercepts, monitors, and blocks unauthorized transfers of sensitive files containing credit card records?',
    ['DLP (Data Loss Prevention)', 'HIDS (Host Intrusion Detection)', 'GPO USB limits', 'Port Security tables'],
    0,
    'DLP monitors data patterns in transit and at rest, blocking unauthorized sensitive file outflows.'
  ),
  createQuestion(
    'em6-13',
    'Which secure protocol replaces cleartext LDAP directory queries, executing safely over secure TLS tunnels?',
    ['SFTP (Port 22)', 'LDAPS (Port 636)', 'HTTPS (Port 443)', 'SRTP (Port 5061)'],
    1,
    'LDAPS uses TLS tunnels over default TCP Port 636 to secure administrative queries.'
  ),
  createQuestion(
    'em6-14',
    'An enterprise configures local area firewalls and isolates unpatchable target workstations inside dedicated networks. What security pattern is this?',
    ['DNS Sinkholing configuration', 'VLAN Isolation / Network Segregation', 'Jump Server baseline audits', 'SaaS application synchronization'],
    1,
    'VLAN separation isolates obsolete or weak hosts, containing threats to local segments.'
  ),
  createQuestion(
    'em6-15',
    'What is the security benefit of utilizing a secure Jump Server / Bastion Host for managing servers inside secure backend subnet locations?',
    ['It converts database files to PDF formats.', 'It provides a hardened, single monitored entry point requiring secure credentials and capturing logs for administrative activities.', 'It eliminates the need for host endpoint antivirus apps.', 'It forces all local network switch ports to use MAC filtering.'],
    1,
    'Bastion hosts/jump servers restrict access paths, providing centralized logging of administrative operations.'
  ),
  createQuestion(
    'em6-16',
    'A security analyst is comparing SIEM and SOAR operations. Which statement is correct?',
    ['SIEM compiles programs; SOAR coordinates host system RAM.', 'SIEM centralizes and correlates diverse log records; SOAR leverages API-driven playbooks to automate responses, containing incidents programmatically.', 'SOAR is strictly passive; SIEM is actively blocking attacks.', 'SIEM can only manage Windows Event Logs.'],
    1,
    'SIEM aggregates logs for alerting and diagnostics, while SOAR streamlines incident response via automated playbooks.'
  ),
  createQuestion(
    'em6-17',
    'Which SANS/NIST incident response phase returns clean operations safely to production and verifies that restored systems are functioning correctly?',
    ['Containment', 'Recovery', 'Lessons Learned', 'Eradication'],
    1,
    'Recovery restores systems from clean backups, applies patches, and routes production client traffic back online.'
  ),
  createQuestion(
    'em6-18',
    'A forensic coordinator documents all evidence collections, transfers, and exams to maintain a continuous, legally binding log. What is this documentation?',
    ['Chain of Custody record', 'NIST SP 800-53 Control log', 'Vulnerability management matrix', 'SOAR playbook script'],
    0,
    'The Chain of Custody proves evidence has not been modified or mishandled since capture, ensuring its legal validity.'
  ),
  createQuestion(
    'em6-19',
    'Which regular expression operator anchors matching operations precisely to evaluate strings only from the beginning of a line?',
    ['Dollar ($)', 'Caret (^)', 'Dot (.)', 'Asterisk (*)'],
    1,
    'The caret "^" character anchors a regular expression search to the beginning of the evaluated line.'
  ),
  createQuestion(
    'em6-20',
    'An enterprise allocates operational funding dynamically to run elastic virtual servers in a public cloud. What spending category is this?',
    ['Capital Expenditure (CapEx)', 'Operational Expenditure (OpEx)', 'Archived Backup licensing', 'Symmetric host support fees'],
    1,
    'On-demand cloud billing transitions hardware asset acquisition costs from CapEx to OpEx.'
  ),
  createQuestion(
    'em6-21',
    'Which secure protocol encrypts transit multimedia voice and video (VoIP) sessions across local client endpoints?',
    ['S/MIME', 'SRTP (Secure Real-Time Transport Protocol)', 'HTTPS TLS', 'DNSSEC signatures'],
    1,
    'SRTP encrypts audio and video channels, protecting communications from unauthorized eavesdropping.'
  ),
  createQuestion(
    'em6-22',
    'Which secure protocol provides encryption at the Network Layer (Layer 3) of the OSI model, making it ideal for VPN connections?',
    ['SFTP', 'IPsec (Internet Protocol Security)', 'SRTP', 'LDAPS'],
    1,
    'IPsec operates at Layer 3 to secure all communications between network nodes and gateways.'
  ),
  createQuestion(
    'em6-23',
    'Which secure protocol replaces cleartext FTP file transfers, encapsulating transmissions within SSH channels over TCP Port 22?',
    ['FTPS', 'SFTP (SSH File Transfer Protocol)', 'HTTPS', 'LDAPS'],
    1,
    'SFTP runs over SSH on default TCP Port 22, safeguarding file transfers and authentication.'
  ),
  createQuestion(
    'em6-24',
    'Which specialized NIST publication dictates the Risk Management Framework (RMF) 7-step security lifecycle process?',
    ['NIST SP 800-53', 'NIST SP 800-37', 'NIST SP 800-115', 'NIST SP 800-30'],
    1,
    'NIST SP 800-37 details the steps of the Risk Management Framework (RMF) used by government systems.'
  ),
  createQuestion(
    'em6-25',
    'Which NIST SP publication compiles the extensive directory catalog of actual security and privacy controls (e.g. Audit, Training, Access Controls)?',
    ['NIST SP 800-37', 'NIST SP 800-53', 'NIST SP 800-30', 'NIST SP 800-115'],
    1,
    'NIST SP 800-53 provides the standard catalog of physical, technical, and operational security controls.'
  ),
  createQuestion(
    'em6-26',
    'Which cybersecurity team or organizational role is responsible for analyzing regulatory breach reporting windows and administrative liabilities during an incident response?',
    ['Chief Public Relations manager', 'Legal Counsel and Compliance Officer', 'Host security operations analysts', 'Independent database developers'],
    1,
    'Legal and compliance teams evaluate organizational liabilities, contractual obligations, and notification windows.'
  ),
  createQuestion(
    'em6-27',
    'Contrast the stateful behavior of Security Groups with the stateless behavior of Network ACLs in a Cloud VPC network.',
    ['Network ACLs track connection states automatically; Security Groups do not.', 'Security Groups act statefully at the VM interface boundary; Network ACLs are stateless, evaluating traffic at the subnet boundary level based on explicit rules.', 'Security Groups are restricted to public connections only.', 'Network ACLs require hardware HSM hardware engines.'],
    1,
    'Security Groups track sessions statefully, but Network ACLs evaluate subnet boundaries statelessly using explicit ingress/egress rules.'
  ),
  createQuestion(
    'em6-28',
    'Which digital security standard requires rigorous technical and organizational compliance controls specifically for protecting transaction cardholder accounts?',
    ['HIPAA', 'PCI DSS (Payment Card Industry Data Security Standard)', 'GDPR', 'ISO 27001 ISMS'],
    1,
    'PCI DSS mandates security requirements to safeguard credit card transactions and cardholder data.'
  ),
  createQuestion(
    'em6-29',
    'An active adversary group executes an attack that targets an operating system vulnerability that is completely unknown to the vendor. What is this?',
    ['Phishing campaign', 'Zero-Day exploit', 'Brute force bypass', 'SQL Injection'],
    1,
    'Zero-day exploits target vulnerabilities that are unknown to vendors, meaning no patches exist yet.'
  ),
  createQuestion(
    'em6-30',
    'A compliance manager wants to review an administrative checklist prioritizing actionable control targets to suppress common real-world threats. What should they consult?',
    ['NIST Risk Management Framework', 'CIS Critical Security Controls', 'ISO 27001 standard blueprints', 'PCI DSS logs catalog'],
    1,
    'CIS Controls provide an actionable list of prioritized security recommendations to defend against prevalent threats.'
  ),
  createQuestion(
    'em6-31',
    'What describes the process of reconstructing a duplicate drive sector image in a bit-for-bit, exact match copy for forensics assessments?',
    ['Active file restoration', 'Forensic Drive Imaging / Bit-stream imaging', 'Nessus vulnerability assessment scanning', 'Symmetric database schema configuration'],
    1,
    'Bit-stream clones create uncorrupted duplicates of storage media, preserving empty space and deleted files.'
  ),
  createQuestion(
    'em6-32',
    'Which security mechanism provides end-to-end cryptographic encryption and digital signature parsing directly on user email clients?',
    ['SRTP protocol parameters', 'S/MIME (Secure/Multipurpose Internet Mail Extensions)', 'IPsec secure channels', 'SFTP backend systems'],
    1,
    'S/MIME provides message encryption and digital signatures, securing email communications.'
  ),
  createQuestion(
    'em6-33',
    'What is a primary defensive step when decommissioning old servers to ensure sensitive database records cannot be recovered?',
    ['Standard sector disk formatting', 'Data Sanitization, degaussing, or physical disk destruction', 'Modifying local area GPO limits', 'Switching all hosts to Linux syslogs'],
    1,
    'Sanitization, degaussing, or physical destruction ensures data is unrecoverable, preventing data leaks.'
  ),
  createQuestion(
    'em6-34',
    'Which operational component helps incident responders evaluate disk file systems and registry activity on an compromised host?',
    ['Network flow collector diagrams', 'Host Intrusion Detection Systems (HIDS) or Endpoint EDR agents', 'Physical firewalls sit inline', 'GPO directory rules catalog'],
    1,
    'EDR and HIDS monitor endpoint behavior, capturing file modifications and registry changes for analysis.'
  ),
  createQuestion(
    'em6-35',
    'An enterprise wants to secure their local Wi-Fi connections using individual credentials authenticated against Active Directory. What mechanism is required?',
    ['WPA2 Personal static PSK keys', 'WPA3 Enterprise / 802.1X with PEAP/EAP-TLS', 'MAC Filtering lists', 'Static host configurations'],
    1,
    'WPA3/WPA2 Enterprise with 802.1X routes logins to RADIUS servers, validating users against directories.'
  ),
  createQuestion(
    'em6-36',
    'A security analyst is reviewing a vulnerability log. Which CVSS metric score signifies high or critical vulnerabilities that must be patched first?',
    ['CVSS scores from 3.0 to 5.0', 'CVSS scores from 7.0 to 10.0 (with 9.0 to 10.0 denoting Critical threats)', 'Scores based on letter grades', 'CVSS scores from 0.0 to 2.0'],
    1,
    'CVSS scores 7.0+ represent high/critical vulnerabilities, helping security teams prioritize patching.'
  ),
  createQuestion(
    'em6-37',
    'An enterprise purchases a specialized backup utility that physically isolates backup servers from network communication channels. What is this concept?',
    ['Virtual block storage clusters', 'Air-gapped / Offline backups', 'Public cloud S3 storage buckets', 'Local host RAM buffers'],
    1,
    'Air-gapping isolates backup appliances, protecting backups from propagating ransomware.'
  ),
  createQuestion(
    'em6-38',
    'Which threat intelligence indicator represents an active, highly specialized nation-state adversary executing stealthy attacks over years?',
    ['Script kiddie automated scripts', 'Advanced Persistent Threat (APT)', 'Known signature Trojans', 'Unauthorized SQL operations'],
    1,
    'APTs are highly funded, nation-state actors executing targeted, long-term cyber espionage campaigns.'
  ),
  createQuestion(
    'em6-39',
    'What step is critical to verify that a seized hard drive sample has not been altered during transportation or forensic imaging?',
    ['Perform standard Windows diagnostic scans.', 'Generate an initial SHA-256 hash of the drive on-site and verify it matches the hash of the target image after transport.', 'Decompile system binaries inside sandboxes.', 'Check disk storage space profiles.'],
    1,
    'A hash comparison verifies signature alignment, validating that forensic data remains unchanged.'
  ),
  createQuestion(
    'em6-40',
    'Which compliance mandate, passed by EU authorities in 2018, restricts how personal records, names, and contact parameters of EU subjects must be processed?',
    ['NIST CSF', 'GDPR (General Data Protection Regulation)', 'PCI DSS', 'ISO 27001 ISMS'],
    1,
    'GDPR dictates data processing limits, privacy protections, and user access rights for EU citizens.'
  ),
  createQuestion(
    'em6-41',
    'What represents the direct goal of implementing DNSSEC in network infrastructure configuration settings?',
    ['To encrypt standard HTTP browser traffic over Port 443.', 'To prevent DNS spoofing and cache poisoning by adding cryptographic digital signatures to DNS records.', 'To block local GPO registry updates.', 'To route external requests through Jump logs.'],
    1,
    'DNSSEC signs DNS records, validating name resolution sources and preventing redirection attacks.'
  ),
  createQuestion(
    'em6-42',
    'Which risk management strategy is deployed when a company decides to purchase cyber-liability insurance policies?',
    ['Risk Mitigation', 'Risk Transference', 'Risk Avoidance', 'Risk Acceptance'],
    1,
    'Purchasing cyber insurance represents risk transference, shifting financial liabilities to insurance providers.'
  ),
  createQuestion(
    'em6-43',
    'An executive team terminates a high-probability financial cloud development program because the database risk levels are unacceptably high. What risk strategy is this?',
    ['Risk Mitigation', 'Risk Avoidance', 'Risk Transference', 'Risk Acceptance'],
    1,
    'Risk avoidance terminates activities or systems to eliminate associated security threats.'
  ),
  createQuestion(
    'em6-44',
    'What describes "Inherent Risk" within enterprise auditing operations?',
    ['The remaining risk profile after applying security controls and patches.', 'The natural, untreated security risk profile of a system before any controls are applied.', 'A risk caused specifically by public cloud storage settings.', 'A human error during security incident responses.'],
    1,
    'Inherent risk is the untreated threat baseline of an asset before implementing security precautions.'
  ),
  createQuestion(
    'em6-45',
    'What describes "Residual Risk" under risk management standards?',
    ['The baseline risk level before implementing controls.', 'The remaining security risk level after all active controls, patches, and firewalls are implemented.', 'A risk associated with outdated physical backup media.', 'The cost to repair infected client systems.'],
    1,
    'Residual risk remains after implementing controls; if within acceptable levels, operations can proceed.'
  ),
  createQuestion(
    'em6-46',
    'Which framework function under the NIST CSF represents auditing indicators of compromise and identifying system alerts in real-time?',
    ['Identify', 'Detect', 'Protect', 'Respond'],
    1,
    'The Detect function maps and highlights security incidents in progress through real-time log analysis and alerts.'
  ),
  createQuestion(
    'em6-47',
    'An enterprise conducts automated security assessments that match host configurations with known software vulnerabilities without deploying active exploit payloads. What is this process?',
    ['Active penetration testing operations', 'Vulnerability Scanning / Assessment', 'Deploying SOAR automation scripts', 'Configuring Local area NAC profiles'],
    1,
    'Vulnerability scans find and report security gaps without executing active exploits.'
  ),
  createQuestion(
    'em6-48',
    'Contrast a static Vulnerability Scan with a human-driven Penetration Test.',
    ['Vulnerability scans are always manual processes.', 'Vulnerability scans check for known vulnerabilities; a Penetration Test simulates active adversaries to exploit flaws and validate real-world security positions.', 'Penetration tests are completed by standard server software.', 'Vulnerability scans automatically apply system patches.'],
    1,
    'Vulnerability scans identify weaknesses, while penetration testing actively exploits flaws to evaluate defenses.'
  ),
  createQuestion(
    'em6-49',
    'Under the HIPAA compliance standard, what category of assets must be physically and digitally encrypted to prevent leak liabilities?',
    ['Public DNS mapping tables', 'Protected Health Information (PHI) of clients and private patient records', 'Cloud server VM base templates', 'Local area switch port maps'],
    1,
    'HIPAA mandates strict privacy and security protections for client medical files and health records (PHI).'
  ),
  createQuestion(
    'em6-50',
    'What is the standard port and transport mapping used by default Syslog infrastructure nodes?',
    ['TCP Port 22', 'UDP Port 514', 'TCP Port 443', 'UDP Port 53'],
    1,
    'Standard Syslog receivers listen on UDP Port 514 to collect event notifications from network hosts.'
  ),
  createQuestion(
    'em6-51',
    'What type of security control is active when an EDR agent blocks a process that exhibits ransomware behavior?',
    ['Administrative Control', 'Technical / Logical Corrective Control', 'Physical / Facility Control', 'Governance Framework Policy'],
    1,
    'EDR behavioral blocks are technical corrective controls that intervene dynamically to stop malicious actions.'
  ),
  createQuestion(
    'em6-52',
    'Which technology is designed to detect and block abnormal operational behavior on a corporate system without relying on signature files?',
    ['Static Antivirus file scanners', 'Behavioral Anomaly Detection / EDR heuristic analysis', 'Standard system firewall rules', 'GPO directory scripts'],
    1,
    'Heuristics and behavioral tracking analyze action trends in real-time to find new or modified threat patterns.'
  ),
  createQuestion(
    'em6-53',
    'Which operational security control checks Wi-Fi connection attempts and verifies that endpoint operating systems are fully updated before authorizing access?',
    ['Endpoint DLP controllers', 'Post-admission Network Access Control (NAC)', 'Host firewalls', 'PEAP credential lists'],
    1,
    'NAC checks baseline configurations before authorizing connections, quarantining old or insecure hosts.'
  ),
  createQuestion(
    'em6-54',
    'What is the purpose of managing Windows environments with Local Administrator Password Solution (LAPS)?',
    ['To standardize single administrative passwords across hosts.', 'To automatically rotate, randomize, and back up unique local administrator credentials into Active Directory.', 'To encrypt local RAM memory buffers.', 'To disable NAC firewall blocks.'],
    1,
    'LAPS randomizes administrative passwords, eliminating duplicate credentials across the network.'
  ),
  createQuestion(
    'em6-55',
    'Which wireless standard requires Management Frame Protection (MFP) to defend clients from disconnected Wi-Fi deauthentication attacks?',
    ['802.1Q tagging', '802.11w (PMF)', '802.3ad trunking', 'WPA WEP encryption'],
    1,
    'The 802.11w standard secures management frames, neutralizing deauthentication and disassociation exploits.'
  ),
  createQuestion(
    'em6-56',
    'An administrative security officer configures host systems to only execute programs that match a verified cryptographic hash list. What is this policy?',
    ['Application Whitelisting / Application Control', 'Antivirus database scan schedules', 'DLP content matching', 'Syslog alert normalization'],
    0,
    'Application whitelisting permits only authorized executables to run, blocking unknown software.'
  ),
  createQuestion(
    'em6-57',
    'Why should Windows administrators disable obsolete protocols like LLMNR and NetBIOS?',
    ['To speed up physical network connections.', 'To prevent local network attackers from harvesting credentials via responder spoofing attacks.', 'To enforce TLS 1.3 across local systems.', 'To automate Active Directory replication loops.'],
    1,
    'Disabling cleartext identity services (like LLMNR/NetBIOS) prevents credential interception and spoofing.'
  ),
  createQuestion(
    'em6-58',
    'What describes a "Zero-Day Exploit"?',
    ['An attack executing on a system exactly zero times.', 'An exploit targeting a software vulnerability unknown to the developer, meaning no patch exists to mitigate it.', 'A vulnerability discovered in legacy backups.', 'A network scan executed by Nessus.'],
    1,
    'Zero-day exploits target unpatched, newly found vulnerabilities, bypassing traditional signature defenses.'
  ),
  createQuestion(
    'em6-59',
    'An incident responder needs to capture volatile system parameters like connection tables and runtimes from an active host. What should they collect?',
    ['The storage disk sector files', 'A dump of system RAM (Random Access Memory)', 'The physical host serial identifiers', 'Local GPO directories'],
    1,
    'Dynamic RAM stores active runtime configurations, active network connections, and cryptographic keys.'
  ),
  createQuestion(
    'em6-60',
    'An organization decides to accept a identified system risk because implementing mitigation controls costs more than the asset value. What is this strategy?',
    ['Risk Transference', 'Risk Acceptance', 'Risk Avoidance', 'Risk Mitigation'],
    1,
    'Risk acceptance involves identifying, logging, and accepting a risk residual margin without implementing mitigation.'
  ),
  createQuestion(
    'em6-61',
    'Which security standard restricts data processing for subjects within the European Union (EU) and imposes significant penalties for non-compliance?',
    ['PCI DSS', 'GDPR (General Data Protection Regulation)', 'ISO 27001 ISMS', 'NIST SP 800-53'],
    1,
    'GDPR enforces data privacy rights, consent, and storage boundaries for EU citizen records.'
  ),
  createQuestion(
    'em6-62',
    'What transport port is used by default when configuring secure LDAP queries?',
    ['TCP Port 389', 'TCP Port 636', 'TCP Port 443', 'TCP Port 22'],
    1,
    'LDAPS uses TLS tunnels to secure directory lookups over TCP Port 636.'
  ),
  createQuestion(
    'em6-63',
    'Which wireless authentication framework establishes a secure TLS tunnel to authenticate individual users against enterprise directories?',
    ['WPA2 Personal PSK', '802.1X with PEAP or EAP-TLS', 'MAC filtering registries', 'Static router configurations'],
    1,
    '802.1X uses RADIUS and EAP/PEAP to authenticate clients securely against corporate directories.'
  ),
  createQuestion(
    'em6-64',
    'What is the primary function of maintaining a chronological Chain of Custody ledger during digital forensics?',
    ['To record standard business expenses.', 'To track the control, transfer, and analysis of physical or digital evidence, ensuring integrity and court admissibility.', 'To monitor backup operations schedules.', 'To verify NIST CSF compliance.'],
    1,
    'A continuous chain of custody ledger validates evidence, proving data has not been modified since collection.'
  ),
  createQuestion(
    'em6-65',
    'An incident team recovers client files from isolated storage appliances that are disconnected from all external networks. What storage type is this?',
    ['Elastic cloud storage buckets', 'Air-gapped / Offline backups', 'Local area RAM storage', 'Host cache tables'],
    1,
    'Air-gapped offline backup appliances are isolated from network threats, preventing ransomware propagation.'
  ),
  createQuestion(
    'em6-66',
    'A SOC analyst needs to normalize log telemetry streams sourced from diverse firewalls and system hosts. What is the benefit within SIEM?',
    ['Normalizing logs allows centralized correlation rules to evaluate different systems consistently.', 'It reduces disk storage requirements by deleting older files', 'It recompiles local system C++ objects.', 'It disables the need for NAC firewalls.'],
    0,
    'Log normalization translates diverse logs into a consistent format, enabling SIEM analysis and alerts.'
  ),
  createQuestion(
    'em6-67',
    'Which regular expression quantifer matches the preceding token exactly zero or one times, representing the search pattern as optional?',
    ['Caret (^)', 'Question Mark (?)', 'Asterisk (*)', 'Plus (+)'],
    1,
    'In regular expressions, the question mark "?" dictates that the preceding token matches zero or one time.'
  ),
  createQuestion(
    'em6-68',
    'Which standard contains the operational and administrative controls catalog mandated for federal system security under NIST SP 800-53?',
    ['NIST SP 800-37 (RMF)', 'NIST SP 800-53 Catalog of Controls', 'ISO 27001 Blueprint', 'CIS Critical Controls list'],
    1,
    'NIST SP 800-53 contains the catalog of security and privacy controls for federal systems.'
  ),
  createQuestion(
    'em6-69',
    'Who is the senior government or enterprise business leader authorized to formally sign off on system risk and approve operation pipelines?',
    ['System database developer', 'Authorizing Official (AO)', 'Active Directory coordinator', 'Lead SOC manager'],
    1,
    'The Authorizing Official (AO) evaluates system risk posturing and issues formal authority to operate.'
  ),
  createQuestion(
    'em6-70',
    'What describes "Inherent Risk" inside corporate risk management frameworks?',
    ['Risk margins remaining after applying defenses.', 'The baseline risk level before applying any security mitigations or controls.', 'Risks related only to public cloud hosting platforms.', 'Errors occurring during incident responses.'],
    1,
    'Inherent risk is the raw security risk of an asset before implementing any controls.'
  ),
  createQuestion(
    'em6-71',
    'What represents "Residual Risk" under risk assessment standards?',
    ['The baseline asset risk before applying defenses.', 'The remaining risk profile after all controls and mitigations are implemented.', 'Risks related to magnetic storage devices.', 'The cost of business ransomware remediations.'],
    1,
    'Residual risk is the remaining exposure after implementing security controls.'
  ),
  createQuestion(
    'em6-72',
    'Which secure protocol replaces cleartext Telnet commands over TCP Port 23, securing terminal connections with encryption?',
    ['SFTP', 'SSH (Secure Shell) over TCP Port 22', 'HTTPS', 'LDAPS'],
    1,
    'SSH replaces Telnet, encrypting terminal command sessions over port 22.'
  ),
  createQuestion(
    'em6-73',
    'An analyst wants to examine metadata statistics of connection flows across network segments without storing heavy packet payloads. What log do they need?',
    ['Full PCAP trace captures', 'Netflow flow records', 'Syslog warning records', 'AD Event lists'],
    1,
    'Netflow captures conversational metadata rather than payloads, optimizing storage requirements.'
  ),
  createQuestion(
    'em6-74',
    'Which security approach is central to the Zero Trust model of restricting lateral expansion from a compromised system?',
    ['Standard sector disk formats', 'VPC Micro-segmentation / Subnet Isolation', 'Installing standard endpoint AVs', 'Enforced PEAP authenticator profiles'],
    1,
    'Micro-segmentation isolates subnets from each other, restricting lateral threat expansion.'
  ),
  createQuestion(
    'em6-75',
    'Which secure protocol digitally signs and encrypts emails end-to-end to prevent tampering?',
    ['SRTP', 'S/MIME (Secure/Multipurpose Internet Mail Extensions)', 'IPsec Layer 3', 'SFTP servers'],
    1,
    'S/MIME provides secure signatures and message encryption, protecting emails from interception and modification.'
  ),
  createQuestion(
    'em6-76',
    'What is the security risk of failing to enforce multi-factor authentication (MFA) on corporate administrative accounts?',
    ['It increases serverless cold start recovery delays.', 'Adversaries can compromise accounts via simple credential theft or credential stuffing, gaining full control over administrative portals.', 'It renders files incompatible with PDF formats.', 'It automatically disables network ACL filters.'],
    1,
    'Unprotected admin accounts risk credential compromise, which can give attackers control over the environment.'
  ),
  createQuestion(
    'em6-77',
    'Which type of hypervisor operates directly on raw, bare-metal server hardware without requiring an underlying host operating system?',
    ['Type-2 Hosted Hypervisor', 'Type-1 Bare-Metal Hypervisor', 'Shared Docker engine container', 'User-mode emulator'],
    1,
    'Type-1 hypervisors install directly on hardware, reducing latency and vulnerability surface areas.'
  ),
  createQuestion(
    'em6-78',
    'Which automated scanning tool is used to inventory system operating systems and locate open network ports and vulnerabilities?',
    ['A Netflow statistical collector', 'Vulnerability Scanners (such as Nessus)', 'SOAR playbook scripts', 'Jump logs analyzers'],
    1,
    'Vulnerability scanners scan ports and identify known software vulnerabilities.'
  ),
  createQuestion(
    'em6-79',
    'Which NIST SP 800-37 RMF step involves selecting and tailoring security controls for individual information systems?',
    ['Categorize Step', 'Select Step', 'Implement Step', 'Assess Step'],
    1,
    'The Select step selects and tailors the security controls needed to protect the system.'
  ),
  createQuestion(
    'em6-80',
    'What does the "shebang" line (e.g., "#!/bin/bash") identify to the system loader in a UNIX environment?',
    ['A malware code signature.', 'The path of the interpreter to run to process and execute the file\'s instructions.', 'A C++ static binary compiler compile.', 'A local network connection handshake.'],
    1,
    'The shebang instructs the system loader which command interpreter to use when spawning the script.'
  ),
  createQuestion(
    'em6-81',
    'Which Unix-like text processing utility is optimized for parsing delimited data columns?',
    ['grep utility', 'awk data processor', 'sed translation tool', 'standard nano utility'],
    1,
    'Awk is an extremely powerful language for parsing delimited files, structured logs, and text columns.'
  ),
  createQuestion(
    'em6-82',
    'What is "Infrastructure as Code" (IaC) drift within cloud environments?',
    ['Changing servers between separate physical cloud locations.', 'Discrepancies that arise when manual modifications are made directly to cloud resources, falling out of sync with IaC configuration files.', 'Using multiple codes inside the same container.', 'Transitioning resources from public back to private networks.'],
    1,
    'IaC drift occurs when manual updates bypass version control, leading to security and compliance gaps.'
  ),
  createQuestion(
    'em6-83',
    'Which regulatory compliance standard protects confidential medical files and patient records?',
    ['PCI DSS', 'HIPAA (Health Insurance Portability and Accountability Act)', 'GDPR', 'ISO 27001 ISMS'],
    1,
    'HIPAA governs patient PHI, requiring specific privacy and security controls.'
  ),
  createQuestion(
    'em6-84',
    'Which physical security control regulates computer room environmental settings to protect hardware from moisture damage?',
    ['CCTV security logs', 'HVAC environmental controls and humidity limits', 'Port Security tables', 'Jump Server baselines'],
    1,
    'HVAC systems control temperature and relative humidity levels to protect hardware assets.'
  ),
  createQuestion(
    'em6-85',
    'What occurs if a hacker exploits an unvalidated system buffer allocation inside a C++ application?',
    ['Insecure direct deserialization', 'Buffer Overflow exploit, potentially corrupting memory or executing arbitrary shellcode', 'Cross-site scripting (XSS)', 'Symmetric database schema configuration mismatch'],
    1,
    'Unchecked buffers can lead to buffer overflows, allowing attackers to corrupt memory or run shellcode.'
  ),
  createQuestion(
    'em6-86',
    'An enterprise installs physical security grates and CCTV monitors outside physical storage cages. What security category is this?',
    ['Logical Security Control', 'Physical Security Control', 'Administrative Audit Policy', 'Standard Software Mitigation'],
    1,
    'Physical gates, grates, locks, and CCTV surveillance are physical security controls.'
  ),
  createQuestion(
    'em6-87',
    'Which threat intelligence indicator represents malware files using cryptographic hashes?',
    ['File SHA-256 or MD5 signatures', 'Domain controller user listings', 'Unified database roles', 'NIST CSF definitions'],
    0,
    'Malware signatures use MD5, SHA-1, or SHA-256 hashes to identify known threat programs.'
  ),
  createQuestion(
    'em6-88',
    'How does Node.js handle heavy concurrent requests without multi-threading thread-per-connection overhead?',
    ['By running virtual threads inside the OS kernel.', 'With its asynchronous, event-driven, non-blocking I/O Event Loop model.', 'By spawning new processes for each connection.', 'By compiling JavaScript directly to machine code on execution.'],
    1,
    'Node.js leverages its event loop to handle concurrent connections efficiently.'
  ),
  createQuestion(
    'em6-89',
    'An incident team recovers database systems after ransomware encrypts corporate workstations. What incident response phase are they in?',
    ['Eradication', 'Recovery', 'Containment', 'Preparation'],
    1,
    'The Recovery phase restores systems from secure backups, verifying operations and returning to production.'
  ),
  createQuestion(
    'em6-90',
    'Why should administrators configure rate limits on network login portals?',
    ['To speed up administrative logon routines.', 'To prevent brute-force attacks from guessing login passwords.', 'To automate active directory sync loops.', 'To satisfy NIST CSF identify functions.'],
    1,
    'Rate limiting slows down and blocks automated password guesses, neutralizing brute force attempts.'
  ),
  createQuestion(
    'em6-91',
    'Which regular expression quantifier searches the preceding token zero or more times?',
    ['Plus (+)', 'Asterisk (*)', 'Question Mark (?)', 'Brackets ({})'],
    1,
    'The asterisk "*" quantifier matches the preceding character or group zero or more times.'
  ),
  createQuestion(
    'em6-92',
    'What describes a "Traffic Sinkhole" network control?',
    ['Deploying manual network configuration changes.', 'Configuring gateways to intercept requests for known malicious domains and route them to safe diagnostic loopback targets.', 'Replacing host antivirus scanner tools.', 'Forcing all switch ports to use port security.'],
    1,
    'Traffic sinkholes route malicious coordinates to safe diagnostic IPs, disrupting connections to command-and-control servers.'
  ),
  createQuestion(
    'em6-93',
    'What represents "Risk mitigation"?',
    ['Transgressing financial liabilities to third-party insurance.', 'Taking action, applying patches, and configuring firewalls to reduce security risk levels.', 'Terminating activities associated with risk.', 'Taking no defensive actions.'],
    1,
    'Risk mitigation implements technical, physical, or administrative controls to reduce risk exposure.'
  ),
  createQuestion(
    'em6-94',
    'Which SANS/NIST incident response phase analyzes chronological actions post-incident to improve future playbooks?',
    ['Preparation', 'Lessons Learned / Postmortem', 'Eradication', 'Recovery'],
    1,
    'Lessons Learned analyzes breach sequences to update playbooks and improve containment capabilities.'
  ),
  createQuestion(
    'em6-95',
    'What is the security hazard of hardcoding API access keys directly inside software source code repositories?',
    ['It increases serverless cold start latency.', 'Leaked or public repository visibility exposes security keys, allowing unauthorized access to resources.', 'It forces Type-1 hypervisor security controls.', 'It converts C++ pointer operations to Python.'],
    1,
    'Source code secrets can easily leak, exposing API gateways and cloud resources to attackers.'
  ),
  createQuestion(
    'em6-96',
    'What describes the "Identify" function within the NIST CSF?',
    ['Applying firewalls to protect system segments.', 'Auditing and identifying assets, systems, data, and organizational risks to build cybersecurity capability maps.', 'Responding dynamically to active hacker activities.', 'Repairing compromised hosts.'],
    1,
    'The Identify function catalogs enterprise assets, boundaries, data, and risks to inform security planning.'
  ),
  createQuestion(
    'em6-97',
    'Which term represents the untreated baseline risk of an asset before applying any security precautions?',
    ['Residual Risk', 'Inherent Risk', 'Mitigated Risk', 'Transferred Risk'],
    1,
    'Inherent risk is the raw risk level of a system before implementing mitigations.'
  ),
  createQuestion(
    'em6-98',
    'Which term denotes the remaining risk level after applying security controls, patches, and firewalls?',
    ['Inherent Risk', 'Residual Risk', 'Tolerant Risk', 'Untreated Risk'],
    1,
    'Residual risk is the exposure remaining after all controls and mitigations are implemented.'
  ),
  createQuestion(
    'em6-99',
    'A security engineer is analyzing a Nessus vulnerability scan report. What score framework lists vulnerability rankings out of 10.0?',
    ['CVE index logs', 'CVSS (Common Vulnerability Scoring System)', 'CWE metrics register', 'NIST CSF ranking matrices'],
    1,
    'CVSS evaluates vulnerability characteristics, producing a severity score from 0.0 to 10.0.'
  ),
  createQuestion(
    'em6-100',
    'A cybersecurity team must secure their internet connections using TLS 1.3 rather than SSL. Why is SSL avoided?',
    ['SSL lacks support for standard Windows networks.', 'Historical vulnerabilities (like POODLE and BEAST) have rendered SSL insecure, establishing TLS as the cryptographically secure standard.', 'SSL requires hardware security modules.', 'TLS automatically disables Network Access Control (NAC) systems.'],
    1,
    'SSL has structural cryptographic design flaws; TLS is required to protect network transmissions.'
  )
];
