import { QuizQuestion } from '../types';

const createQuestion = (id: string, text: string, options: string[], correctAnswerIndex: number, explanation: string): QuizQuestion => ({
  id, text, options, correctAnswerIndex, explanation
});

// ========================================================
// QUIZ 1: CIA TRIAD & CORE ACCESS VERIFICATION (20 Qs)
// ========================================================
export const ciaTriadQuestions: QuizQuestion[] = [
  createQuestion(
    'qn-cia-1',
    'An enterprise administrator runs daily cryptographic hashing tasks to check if local server system binaries still match their original deployment values. Which cornerstone of the CIA Triad is being validated?',
    ['Confidentiality', 'Integrity', 'Availability', 'Non-repudiation'],
    1,
    'Integrity ensures that data has not been altered, modified, or corrupted. Cryptographic hashing checks (like SHA-256) are used to detect unauthorized changes to files.'
  ),
  createQuestion(
    'qn-cia-2',
    'A user initiates a terminal session by entering an alphanumeric password and then scanning their fingerprint on a built-in peripheral reader. Which Multi-Factor Authentication (MFA) combination is in use?',
    ['Something You Have and Something You Are', 'Something You Know and Something You Are', 'Something You Know and Something You Have', 'Something You Do and Somewhere You Are'],
    1,
    'A password is a knowledge factor (Something You Know), whereas a fingerprint is a biometric biometric indicator falling under the inherence factor (Something You Are).'
  ),
  createQuestion(
    'qn-cia-3',
    'Which security mechanism is designed primarily to guarantee Confidentiality for intellectual property documents stored on a shared network drive?',
    ['SHA-512 cryptographic hashing', 'Advanced Encryption Standard (AES-256)', 'File-level change-auditing logs', 'Role-Based Access Control list backups'],
    1,
    'AES-256 is a symmetric encryption standard which transforms readable information into unreadable ciphertext, preserving confidentiality.'
  ),
  createQuestion(
    'qn-cia-4',
    'An engineering firm implements redundant power distribution arrays, dual network cards, and a RAID 5 disk array on their main CAD database server. Which CIA Triad component do these steps target?',
    ['Confidentiality', 'Integrity', 'Availability', 'Authentication'],
    2,
    'Availability is focused on ensuring systems and information are accessible to authorized entities whenever needed. Redundant hardware, power, and disk configurations guarantee operational uptime.'
  ),
  createQuestion(
    'qn-cia-5',
    'How do security systems differentiate between Authentication and Authorization?',
    [
      'Authentication measures user keystroke dynamics; Authorization records administrative network logs.',
      'Authentication confirms a user\'s identity claim; Authorization determines which files or actions the verified identity can execute.',
      'Authentication assigns logical IP address leases; Authorization establishes secure SSL/TLS channels.',
      'Authentication maps hardware MAC addresses; Authorization encrypts regional WAN trunks.'
    ],
    1,
    'Authentication verifies who you are (e.g., via passwords/tokens). Authorization determines what you are allowed to do (e.g., read, write, or delete files) after you are authenticated.'
  ),
  createQuestion(
    'qn-cia-6',
    'Which concept ensures that an executive cannot falsely deny sending a legally binding, digitally signed order to buy physical corporate shares?',
    ['Availability clusters', 'Symmetric decryption scaling', 'Non-repudiation', 'Mutual multi-server authentication'],
    2,
    'Non-repudiation prevents a sender from denying they sent a message because the message is signed using the sender\'s unique, unshared private key.'
  ),
  createQuestion(
    'qn-cia-7',
    'A bank branch installs an iris-scanning module to restrict entry to its secure cash reserves. Under which category of authentication factors does this fallback?',
    ['Something You Have', 'Something You Are', 'Something You Know', 'Something You Do'],
    1,
    'Retina or iris scanning utilizes unique human biological traits, which fall under the inherence factor (Something You Are).'
  ),
  createQuestion(
    'qn-cia-8',
    'An application restricts access to high-value administrative features by checking that a user\'s incoming IP address originates from inside safe geographic coordinate bounds. Which authentication factor is being checked?',
    ['Somewhere You Are', 'Something You Do', 'Something You Have', 'Something You Are'],
    0,
    'Geographic locations, IP addresses, and physical coordinates correspond to the situational location factor (Somewhere You Are).'
  ),
  createQuestion(
    'qn-cia-9',
    'A security researcher wants to deploy behavioral biometrics to monitor terminal sessions dynamically. Which indicator should they select?',
    ['Fingerprint ridge matches', 'Keystroke dynamics and typing speed', 'Facial structure mapping', 'SMS transit response patterns'],
    1,
    'Behavioral biometrics measure patterns in human activities, such as typing speed, mouse movement, and walking gait (Something You Do).'
  ),
  createQuestion(
    'qn-cia-10',
    'An enterprise deploys multiple large-scale Uninterruptible Power Supply (UPS) batteries in its primary data centers. What is the primary security goal of this deployment?',
    ['To prevent administrative database tampering', 'To maintain high system Availability during sudden line power failure', 'To encrypt server payloads during power spikes', 'To verify compliance certificates silently'],
    1,
    'UPS systems provide emergency power to systems during failures, protecting the system from dropping offline to keep services available.'
  ),
  createQuestion(
    'qn-cia-11',
    'Which mechanism utilizes active-passive and active-active nodes behind a central gateway to ensure incoming client traffic is balanced, eliminating single-points-of-failure?',
    ['Secure Socket Layer encryption', 'Active server clustering and load balancers', 'Asymmetric PKI validation chains', 'Intrusion Detection honeypots'],
    1,
    'Clustering and load balancing distribute incoming connections across multiple redundant operational nodes, ensuring continuous availability.'
  ),
  createQuestion(
    'qn-cia-12',
    'An attacker gains read-only access to a backup volume and downloads a database of user hashes. Which of the following describes the resulting compromise?',
    ['Loss of database Integrity', 'Loss of system Availability', 'Loss of database Confidentiality', 'Loss of administrative Authorization'],
    2,
    'By pulling a copy of sensitive data without permission, the attacker has broken the Confidentiality boundary, while the database remains running (Availability) and unmodified (Integrity).'
  ),
  createQuestion(
    'qn-cia-13',
    'A file server checks an incoming authenticated user\'s SID against its security table to determine whether to grant write permissions. Which boundary does this operate in?',
    ['Identification', 'Authentication', 'Authorization', 'Non-repudiation'],
    2,
    'Once identity is proven, the system queries permission sets (such as access control lists or directory groups) to handle user Authorization.'
  ),
  createQuestion(
    'qn-cia-14',
    'An attacker intercepts web traffic along an unencrypted local ethernet line using a packet analyzer. Which pillar of the CIA Triad is directly broken?',
    ['Confidentiality', 'Integrity', 'Availability', 'Non-repudiation'],
    0,
    'Eavesdropping or sniffing unencrypted payloads exposes private information to unauthorized eyes, violating Confidentiality.'
  ),
  createQuestion(
    'qn-cia-15',
    'An administratorconfigures an identity check requiring two items: a hardware smartcard and a hardware USB key. Does this setup satisfy Multi-Factor Authentication (MFA) standards?',
    [
      'Yes, because it requires two distinct physical security hardware devices.',
      'No, because both authentication indicators pull from the same "Something You Have" factor category.',
      'No, because a physical token can never be combined with another physical token under any security framework.',
      'Yes, because it requires a user to perform two physical gestures.'
    ],
    1,
    'To achieve true MFA, mechanisms must combine elements from at least two *different* factor categories (e.g., Possession + Knowledge). Combining two items of the same factor class (Possession + Possession) is not MFA.'
  ),
  createQuestion(
    'qn-cia-16',
    'Which security rule dictates that a staff accounts should only be granted the minimum access rights necessary to perform their specific job responsibilities?',
    ['Principle of Least Privilege', 'Separation of Duties', 'Defense in Depth', 'Implicit Deny'],
    0,
    'The Principle of Least Privilege (PoLP) ensures that user and process authorizations are restricted to only what is necessary to perform their roles.'
  ),
  createQuestion(
    'qn-cia-17',
    'An attacker intercepts a user\'s web session token and uses it to impersonate the client without authenticating. What is the fundamental impact of this session hijacking?',
    ['The attacker bypassed Authentication by cloning a valid active session state.', 'The attacker exploited local non-repudiation configurations.', 'The attacker degraded the availability of local load-balancer resources.', 'The attacker bypassed administrative file integrity audits.'],
    0,
    'Session hijacking steals authenticated tokens, allowing an attacker to impersonate an identity, bypassing authentication checks completely.'
  ),
  createQuestion(
    'qn-cia-18',
    'A wireless network forces users connecting in public lobbies to accept terms on an embedded web interface before checking their credentials. What is this security interface called?',
    ['Security Information Portal', 'Access Control Hub', 'Captive Portal', 'Intermediate Proxy Gateway'],
    2,
    'A Captive Portal is a web page presented to newly connected wireless clients requiring authentication, consent, or payment before network access is opened.'
  ),
  createQuestion(
    'qn-cia-19',
    'Which of the following is considered the greatest security risk associated with relying solely on single-factor knowledge authentication (passwords)?',
    ['FIDO2 keys are vulnerable to magnetic degaussing.', 'Alphanumeric passwords are easily stolen via phishing, sniffing, keylogging, or brute-forcing.', 'Passwords degrade local server CPU speeds exponentially during high-concurrency requests.', 'They require complex certificate authority trust chains to function.'],
    1,
    'Single-factor passwords lack secondary safeguards, meaning compromises via phishing, social engineering, keyloggers, or brute-forcing grant complete access.'
  ),
  createQuestion(
    'qn-cia-20',
    'An organization mandates that all laptops must encrypt their local solid-state drives using BitLocker with AES-256. What security dimension does this address?',
    ['Data integrity during runtime processing', 'Data confidentiality at rest', 'Continuous application availability', 'Asymmetric non-repudiation checking'],
    1,
    'Drive encryption protects the confidentiality of data on physical medium if the device is lost or stolen, categorizing as protecting Data at Rest.'
  )
];

// ========================================================
// QUIZ 2: ENTERPRISE KEY AAA, DIRECTORIES & SSO (20 Qs)
// ========================================================
export const authMethodologiesQuestions: QuizQuestion[] = [
  createQuestion(
    'qn-auth-1',
    'In a Microsoft Active Directory network running Kerberos authentication, what specific role is played by the Authentication Service (AS) within the Key Distribution Center (KDC)?',
    [
      'It creates temporary asymmetric session keys for file-level sharing.',
      'It validates the user\'s local identity credentials and returns a Ticket Granting Ticket (TGT).',
      'It issues individual Service Tickets (ST) in exchange for TGTs.',
      'It maps LDAP namespaces to Active Directory security groups.'
    ],
    1,
    'The KDC\'s Authentication Service (AS) authenticates the user upon initial login and issues a Ticket Granting Ticket (TGT), which is then used to request service tickets.'
  ),
  createQuestion(
    'qn-auth-2',
    'To request access to an internal Microsoft SQL Database, a client workstation presents a Ticket Granting Ticket (TGT) to the Ticket Granting Service (TGS). What does the TGS return to the client?',
    ['A localized public certificate', 'A temporary Service Ticket (ST)', 'A centralized Kerberos Master Token', 'An XML SAML Assertion'],
    1,
    'In Kerberos, the TGS accepts a valid TGT and returns a Service Ticket (ST) designed for the specific resource (e.g., SQL server, file share) the client wishes to access.'
  ),
  createQuestion(
    'qn-auth-3',
    'Which centralized database structure is commonly queried via LDAP to manage and directory object structures, groups, and users inside an enterprise?',
    ['Relational SQL database cluster', 'Microsoft Active Directory', 'TACACS+ Accounting database', 'RADIUS Shared Secret registry'],
    1,
    'Active Directory is Microsoft\'s directory service built on the LDAP standard to organize, manage, and query users, computers, and assets.'
  ),
  createQuestion(
    'qn-auth-4',
    'Over which standard default network TCP port should an unsecure Lightweight Directory Access Protocol (LDAP) query be executed?',
    ['Port 88', 'Port 389', 'Port 636', 'Port 1812'],
    1,
    'Plaintext (unsecure) LDAP requests communicate over TCP/UDP Port 389, whereas secure LDAP (LDAPS) runs over Port 636.'
  ),
  createQuestion(
    'qn-auth-5',
    'An engineer needs to secure directory queries by deploying LDAP with TLS encryption (LDAPS). Which destination TCP port must be opened on the Domain Controller firewall?',
    ['Port 389', 'Port 636', 'Port 49', 'Port 1813'],
    1,
    'LDAP over SSL/TLS (LDAPS) operates over secure TCP port 636.'
  ),
  createQuestion(
    'qn-auth-6',
    'Which operational ports are utilized by a centralized Remote Authentication Dial-In User Service (RADIUS) server to handle remote VPN client authentication and accounting, respectively?',
    ['UDP Port 88 and UDP Port 49', 'UDP Port 1812 and UDP Port 1813', 'TCP Port 389 and TCP Port 636', 'TCP Port 443 and TCP Port 80'],
    1,
    'RADIUS uses UDP port 1812 for authentication/authorization and UDP port 1813 for accounting under industry specifications.'
  ),
  createQuestion(
    'qn-auth-7',
    'An administrator is configuring remote login controls for core network switches. Why would they select TACACS+ over RADIUS?',
    [
      'TACACS+ uses UDP to ensure high-performance transmissions.',
      'TACACS+ encrypts the entire administrative transmission payload and completely separates AAA functions.',
      'TACACS+ is an open-source standard with zero license vendor ties.',
      'TACACS+ relies on XML formatted files, making browser parsing easier.'
    ],
    1,
    'TACACS+ operates over TCP Port 49, separates Authentication, Authorization, and Accounting as distinct functions, and encrypts the entire payload (unlike RADIUS, which only encrypts user passwords).'
  ),
  createQuestion(
    'qn-auth-8',
    'Which open standard utilizes XML-formatted security assertions to pass identity authentication messages securely between an Identity Provider (IdP) and an external Service Provider (SP) for Single Sign-On (SSO)?',
    ['SAML 2.0', 'OIDC (OpenID Connect)', 'OAuth 2.0', 'Kerberos AS'],
    0,
    'SAML 2.0 (Security Assertion Markup Language) is an XML-based framework used for exchanging authentication and authorization data across security domains (SSO).'
  ),
  createQuestion(
    'qn-auth-9',
    'A development team is building a modern mobile app with Single Sign-On (SSO). They select OpenID Connect (OIDC) to verify identities. What core technology is OIDC built on?',
    ['XML Schema 1.0', 'OAuth 2.0 framework with JSON Web Tokens (JWT)', 'Active Directory LDAP directories', 'Kerberos Ticket distribution'],
    1,
    'OpenID Connect (OIDC) is an identity layer built on top of the OAuth 2.0 framework, leveraging JSON Web Tokens (JWT) to transmit identity assertions.'
  ),
  createQuestion(
    'qn-auth-10',
    'What is the primary role of a Federated Identity Management system?',
    [
      'To enforce localized smartcard requirements inside private LANs.',
      'To allow users to access resources across completely separate organizations and security domains with a single identity credential.',
      'To back up all local SQL databases onto public cloud environments.',
      'To monitor and log administrative terminal sessions over serial ports.'
    ],
    1,
    'Federation links identity databases across different organizations or administrative boundaries, enabling secure single sign-on across corporate borders.'
  ),
  createQuestion(
    'qn-auth-11',
    'Kerberos relies heavily on synchronized clocks across all domain controllers, servers, and clients. What protocol maintains this sync, and why is it critical?',
    [
      'SMTP; It emails logs of local clock drift to the domain administrator.',
      'NTP (Network Time Protocol); It ensures time-stamped Kerberos tickets fall within acceptable drift bounds (typically 5 minutes) to defeat replay attacks.',
      'ICMP; It pings KDC entities to measure network latency.',
      'DNS; It translates names to absolute timestamp integers.'
    ],
    1,
    'NTP keeps server and client clocks aligned. Since Kerberos tickets utilize timestamps to verify validity and prevent replay attacks, clocks must remain in sync (usually within 5 minutes).'
  ),
  createQuestion(
    'qn-auth-12',
    'An enterprise deploys 802.1X port-based security across all physical ethernet jacks and wireless access points. When an employee connects, which infrastructure handles validation?',
    ['SAML Metadata directory', 'A central RADIUS Server connected to Active Directory', 'A localized peer-to-peer web browser', 'The local router\'s loopback interface'],
    1,
    '802.1X leverages EAP (Extensible Authentication Protocol) to forward physical and wireless client security requests directly to a central AAA server (such as RADIUS) for verification against a central directory.'
  ),
  createQuestion(
    'qn-auth-13',
    'A financial application requires Mutual Authentication (mTLS) for all incoming API calls from business partners. What does this require at the network layer?',
    [
      'The server must verify its private key against the partner\'s public key.',
      'Both the client and the server must present and validate each other\'s digital certificates during the handshake.',
      'Both organizations must share the same Kerberos ticket server.',
      'The client must answer dual biometric challenges from an authentication vault.'
    ],
    1,
    'Mutual TLS (mTLS) requires that both the client and the server prove their identities by exchanging and validating digital certificates during the handshake process.'
  ),
  createQuestion(
    'qn-auth-14',
    'Which component is accessed by a browser or server to manually verify whether a security certificate has been invalidated by a Certificate Authority prior to its nominal expiration date?',
    ['LDAP bind request schema', 'Certificate Revocation List (CRL) or Online Certificate Status Protocol (OCSP)', 'Active Directory Domain Catalog', 'RADIUS Accounting log registry'],
    1,
    'CRLs and OCSP queries provide real-time status updates on whether a certificate has been revoked (e.g. key leakage, termination of employment) before its expiration.'
  ),
  createQuestion(
    'qn-auth-15',
    'How does OCSP Stapling improve performance and privacy compared to standard OCSP queries?',
    [
      'It uploads the user\'s browsing history to local enterprise directories.',
      'The web server periodically queries the CA and "staples" a time-stamped, cryptographically signed status response directly to the handshake payload, keeping clients from querying CA servers directly.',
      'It replaces symmetric cipher blocks with elliptic curves.',
      'It allows web browsers to self-sign public certificates locally.'
    ],
    1,
    'OCSP Stapling delegates the duty of checking certificate status to the hosting web server, which fetches, caches, and appends (staples) the signed OCSP response during the TLS handshake, reducing client latency and protecting client privacy.'
  ),
  createQuestion(
    'qn-auth-16',
    'In a federated SAML Single Sign-On flow, which role describes the system hosting the user records and translating credentials to signed security tokens?',
    ['The Service Provider (SP)', 'The Identity Provider (IdP)', 'The Key Distribution Center (KDC)', 'The Access Control Gateway (ACG)'],
    1,
    'The Identity Provider (IdP) acts as the central credential manager, authenticating users and minting signed SAML tokens containing user assertions.'
  ),
  createQuestion(
    'qn-auth-17',
    'During an audit, security consultants identify that domain users can dump Active Directory hashes by exploiting Kerberos ticket configurations. What attack vector implements this dynamic?',
    ['DNS Cache Poisoning', 'Pass-the-Ticket (PtT) or Kerberoasting attacks', 'UDP Flood denial-of-service', 'MAC Address Flooding'],
    1,
    'Kerberoasting is an attack technique targeting Active Directory service accounts, where attackers extract service tickets (Kerberos ST) and crack their cryptographic service signatures offline to recover plaintext service passwords.'
  ),
  createQuestion(
    'qn-auth-18',
    'An administrator binds Microsoft Active Directory to a local Linux cluster. What underlying protocol is used to query AD object schemas from Linux nodes?',
    ['Kerberos Ticket Exchange', 'Lightweight Directory Access Protocol (LDAP)', 'Security Assertion Markup Language', 'Terminal Access Control Protocol'],
    1,
    'LDAP is the core open standard database querying language used to search Active Directory objects from any platform, including Linux.'
  ),
  createQuestion(
    'qn-auth-19',
    'Which algorithm is considered a robust, slow, CPU-intensive password hashing standard specifically engineered to prevent GPU offline brute-forcing?',
    ['MD5', 'bcrypt or PBKDF2', 'SHA-1', 'AES-GCM'],
    1,
    'Bcrypt, Argon2, and PBKDF2 are key stretching algorithms that run millions of internal hashing loops, purposely slowing down computation to defend against high-speed offline brute-forcing.'
  ),
  createQuestion(
    'qn-auth-20',
    'An auditor notes that RADIUS packets can be captured in transit along switches. Why is this a security concern compared to TACACS+?',
    [
      'RADIUS transmits the user\'s login password in unhashing clear-text.',
      'RADIUS only encrypts the password field within the packet, leaving the username, attributes, and administrative instructions fully visible in clear-text.',
      'RADIUS utilizes asymmetric PKI hashes that degrade router hardware performance.',
      'RADIUS lacks support for directory services.'
    ],
    1,
    'Under the RADIUS protocol specification, only the password field of UDP traffic payload is obfuscated via a shared secret. The rest of the authentication details, including username and authorization fields, travel in plaintext.'
  )
];

// ========================================================
// QUIZ 3: TEAMS, METRICS & SECURITY STRUCTURES (20 Qs)
// ========================================================
export const operationsMetricsQuestions: QuizQuestion[] = [
  createQuestion(
    'qn-op-1',
    'Which cybersecurity division focus primarily on conducting active adversary emulation, simulating real-world hacking tactics (TTPs) to break past organizational perimeters?',
    ['Blue Team', 'Red Team', 'White Team', 'Compliance Auditing Team'],
    1,
    'The Red Team is composed of offensive security personnel tasked with simulating realistic threat actors to discover and exploit weaknesses.'
  ),
  createQuestion(
    'qn-op-2',
    'A Security Operations Center (SOC) analyst actively monitors incoming SIEM alerts, writes defensive firewall rules, and coordinates local incident response playbooks. Which security team division do they belong to?',
    ['Red Team', 'Blue Team', 'Purple Team', 'Asset Inventory Team'],
    1,
    'The Blue Team comprises defensive security operators who focus on continuous monitoring, incident detection, host protection, and technical validation.'
  ),
  createQuestion(
    'qn-op-3',
    'What describes a purple team security exercise?',
    [
      'Deploying an automated script to spray passwords across cloud servers.',
      'A collaborative testing session where offensive (Red) and defensive (Blue) specialists actively share findings to calibrate detection tools.',
      'Running third-party compliance questionnaires across human resource teams.',
      'Encrypting data across separate corporate local networks.'
    ],
    1,
    'Purple Teaming is a cooperative approach where Red and Blue teams work closely together, sharing active techniques to tune systems and improve defensive monitoring.'
  ),
  createQuestion(
    'qn-op-4',
    'A localized security alarm sounds when a verified employee logs in from their authorized device during normal business hours. How should this event be categorized?',
    ['True Positive', 'True Negative', 'False Positive', 'False Negative'],
    2,
    'A False Positive is an alert triggered by completely normal, safe, or authorized system activity.'
  ),
  createQuestion(
    'qn-op-5',
    'A stealthy intruder exploits a zero-day web vulnerability, steals critical financial tables, and leaves the system without triggering any alarms or alerts. How should this failure be classified?',
    ['True Positive', 'True Negative', 'False Positive', 'False Negative'],
    3,
    'A False Negative is the highly dangerous state when an actual security breach executes successfully, but the monitoring tools fail to log, alert, or detect it.'
  ),
  createQuestion(
    'qn-op-6',
    'An intrusion alert is generated when a remote user attempts to execute SQL commands in a web login form. Analysts verify that this was a legitimate attack attempt. What category does this alert represent?',
    ['True Positive', 'True Negative', 'False Positive', 'False Negative'],
    0,
    'A True Positive correctly flags an actual security threat or unauthorized attempt.'
  ),
  createQuestion(
    'qn-op-7',
    'A security tool remains quiet as daily, safe, routine internal system tasks run on database volumes. What state is being experienced?',
    ['True Positive', 'True Negative', 'False Positive', 'False Negative'],
    1,
    'A True Negative occurs when normal systems proceed cleanly and the defensive monitors remain quiet, registering no alert.'
  ),
  createQuestion(
    'qn-op-8',
    'What is the core behavioral directive of a Zero Trust Architecture?',
    [
      'Assume devices plugged direct into physical LAN switch boards are safe by default.',
      'Trust no user, device, or system by default, forcing continuous authentication, active verification, and granular microsegmentation at every layer.',
      'Protect system resources by ensuring all admin passwords are changed every week.',
      'Utilize only symmetric block ciphers inside local backup arrays.'
    ],
    1,
    'The primary tenet of Zero Trust is "Never trust, always verify." It assumes threats are present on both external and internal networks, eliminating standard concept of an internal trusted path.'
  ),
  createQuestion(
    'qn-op-9',
    'Which design strategy focuses on building overlapping concentric rings of security controls (such as physical checks, firewalls, and file permissions) so that if one fails, others are there to protect assets?',
    ['Perimeter fortress model', 'Defense in Depth', 'SAML assertion chaining', 'Zero Trust perimeter fencing'],
    1,
    'Defense in Depth establishes multiple, redundant protective layers to protect core assets, ensuring that a physical or logical failure in one boundary does not result in a total compromise.'
  ),
  createQuestion(
    'qn-op-10',
    'Under Zero Trust guidelines, how is Microsegmentation applied to a target datacenter network?',
    [
      'By placing all local network traffic on a single local subnet.',
      'By dividing the logical network into distinct, isolated security zones governed by strict access controls, preventing attackers from moving laterally.',
      'By routing all virtual machines to a dedicated physical backup drive.',
      'By utilizing custom AES hashes across outbound email flows.'
    ],
    1,
    'Microsegmentation breaks networks into granular, isolated zones, controlling lateral traffic flow at each logical boundary to contain breaches.'
  ),
  createQuestion(
    'qn-op-11',
    'Where is the most appropriate location to place public-facing web servers in an enterprise network structure?',
    ['Inside the high-security core Active Directory LAN', 'Directly in the loopback subnet domain', 'Inside a Demilitarized Zone (DMZ)', 'On the database backup cluster trunk line'],
    2,
    'A DMZ (Demilitarized Zone) is a buffered subnetwork separating public-facing assets from internal resources, protecting high-security database networks from external threats.'
  ),
  createQuestion(
    'qn-op-12',
    'Which device acts as a secure external gateway, or jump box, designed to validate administrators connecting remotely before allowing they SSH to internal datacenter systems?',
    ['Active directory domain controller', 'Bastion Host', 'Central SIEM log collector', 'Proxy Cache Appliance'],
    1,
    'A Bastion Host (or jump box) is a hardened, monitored gateway server that acts as a single access entry path for administrative control of internal systems.'
  ),
  createQuestion(
    'qn-op-13',
    'Which physical security control involves completely separating a critical control network (such as the SCADA control nodes on a nuclear reactor power grid) from physical connection to the Internet or any other network?',
    ['Logical VLAN segmentation', 'Air-Gapping', 'Installing an inline UTM appliance', 'Deploying a central jump box gateway'],
    1,
    'Air-gapping is an absolute physical security measure where a system or network is completely isolated from all untrusted networks.'
  ),
  createQuestion(
    'qn-op-14',
    'What is the goal of cooperative Threat Hunting programs conducted by a SOC?',
    [
      'To build automated systems that restore backup files automatically.',
      'Proactively investigating networks and system logs to search for hidden, undetected threat indicators that bypass traditional security tools.',
      'To run password brute-force sweeps against standard user accounts.',
      'To draft regulatory compliance checklists for payroll records.'
    ],
    1,
    'Threat Hunting is a proactive, analyst-driven security technique that searches for stealth threats or indicators of compromise (IoCs) that slipped past traditional defenses.'
  ),
  createQuestion(
    'qn-op-15',
    'A Security Operations Center (SOC) struggles with huge daily volumes of low-priority alerts, leading to analysts ignoring or missing high-severity indicators. What phenomenon is being described?',
    ['Alert Fatigue', 'False Positive drift', 'Zero Trust exhaustion', 'Runbook latency'],
    0,
    'Alert Fatigue occurs when system alarms fire too frequently, desensitizing analysts and causing genuine, dangerous alerts to go unnoticed.'
  ),
  createQuestion(
    'qn-op-16',
    'How does an Intrusion Prevention System (IPS) differ from an Intrusion Detection System (IDS)?',
    [
      'An IDS resides on client host registries; an IPS functions inside centralized backup networks.',
      'An IDS passively monitors network traffic and alerts on threats; an IPS sits inline and actively blocks or drops malicious packets automatically.',
      'An IDS only decodes asymmetric key signatures; an IPS encrypts local web directories.',
      'An IDS performs accounting logs; an IPS manages Kerberos ticket grants.'
    ],
    1,
    'While both identify hostile traffic, an IDS is a passive sensor that logs and alerts. An IPS is deployed inline, allowing it to drop packets and block traffic to instantly stop attacks.'
  ),
  createQuestion(
    'qn-op-17',
    'Which software solution correlates security logs, telemetry, and security events from thousands of network devices, databases, and firewalls down to a single dashboard?',
    ['SAML directory engine', 'Security Information and Event Management (SIEM)', 'Extensible Authentication gateway', 'Unified Threat Sandbox'],
    1,
    'A SIEM (Security Information and Event Management) system central correlates log data across an enterprise to identify anomalies and ease monitoring.'
  ),
  createQuestion(
    'qn-op-18',
    'A security engineer builds a dummy database server designed specifically with soft defenses to attract, log, and study the actions of real attackers. What is this security decoy called?',
    ['Bastion Host', 'Proxy server', 'Honeypot', 'DMZ buffer zone'],
    2,
    'A Honeypot is a decoy server deployed within a monitored network segment to lure in threat actors, allowing analysts to harvest threat intelligence safely.'
  ),
  createQuestion(
    'qn-op-19',
    'Why do enterprises install Endpoint Detection and Response (EDR) software on corporate laptops instead of traditional signature-based antiviruses?',
    [
      'EDR agents consume significantly less memory during database bulk runs.',
      'EDR tools utilize behavioral-based monitoring and heuristics to stop advanced, memory-resident malware and zero-day exploits.',
      'EDR software automatically replaces symmetric encryptions with public keys.',
      'EDR platforms serve files using local SAML standards.'
    ],
    1,
    'EDR tools continuously monitor host events and analyze file behaviors in real time, detecting memory exploits, process injections, and zero-day attacks that traditional signature-based antivirus definitions miss.'
  ),
  createQuestion(
    'qn-op-20',
    'A network administrator writes rules separating "Ingress" packet flows from "Egress" flows on the main edge router. How are these flows defined?',
    [
      'Ingress packages are encrypted using AES; Egress packages use RSA.',
      'Ingress traffic describes incoming packets entering the network from external sources; Egress traffic describes outgoing packets leaving the local network.',
      'Ingress corresponds to administrative users; Egress binds standard guest users.',
      'Ingress runs on physical copper wire; Egress is restricted to wireless systems.'
    ],
    1,
    'Ingress refers to traffic entering a network border from the outside, while Egress refers to internal traffic exiting toward external networks.'
  )
];

// ========================================================
// QUIZ 4: ANALYTICAL THREAT MODELS & GOVERNANCE (20 Qs)
// ========================================================
export const analyticalFrameworksQuestions: QuizQuestion[] = [
  createQuestion(
    'qn-fr-1',
    'According to the Lockheed Martin Cyber Kill Chain model, which phase occurs immediately after an attacker harvests email lists and before they deliver malware to a victim?',
    ['Actions on Objectives', 'Weaponization', 'Exploitation', 'Command & Control'],
    1,
    'The 7 phases of the Cyber Kill Chain are: 1. Recon, 2. Weaponization, 3. Delivery, 4. Exploitation, 5. Installation, 6. Command & Control, and 7. Actions on Objectives. Weaponization precedes delivery.'
  ),
  createQuestion(
    'qn-fr-2',
    'An attacker creates a malicious macro script inside a legitimate-looking PDF invoice. In the context of the Cyber Kill Chain, which phase is represented by this step?',
    ['Reconnaissance', 'Weaponization', 'Delivery', 'Exploitation'],
    1,
    'Weaponization is the phase where an exploit payload is wrapped inside a seemingly benign file (like an office document or PDF) to prepare for execution.'
  ),
  createQuestion(
    'qn-fr-3',
    'A phishing email containing an infected link bypassing spam filters and arriving in an employee\'s mailbox. What phase of the Cyber Kill Chain does this represent?',
    ['Reconnaissance', 'Weaponization', 'Delivery', 'Installation'],
    2,
    'Delivery represents the step where the malicious payload is transmitted to the target user or system via email, web links, USB, or physical medium.'
  ),
  createQuestion(
    'qn-fr-4',
    'A user clicks on a malicious link, triggering a browser exploit that executes shellcode in the client\'s system RAM. What phase of the Cyber Kill Chain is this?',
    ['Weaponization', 'Delivery', 'Exploitation', 'Installation'],
    2,
    'Exploitation occurs when the payload\'s code runs, taking advantage of a system vulnerability on the target device.'
  ),
  createQuestion(
    'qn-fr-5',
    'An attacker configures a service to automatically start a remote backdoor program every time a compromised server reboots. What phase of the Cyber Kill Chain does this target?',
    ['Delivery', 'Exploitation', 'Installation', 'Command & Control (C2)'],
    2,
    'Installation is marked by securing persistence (such as adding registry keys or trojan services) to remain on the system through restarts.'
  ),
  createQuestion(
    'qn-fr-6',
    'A backdoored server broadcasts small encrypted heartbeats to an external IP address, awaiting dynamic administrative commands from the attacker. What phase of the Cyber Kill Chain is active?',
    ['Exploitation', 'Installation', 'Command & Control (C2)', 'Actions on Objectives'],
    2,
    'Command & Control (C2) is the phase where compromised systems open interactive communication links back to the attacker\'s command infrastructure.'
  ),
  createQuestion(
    'qn-fr-7',
    'An attacker locates confidential corporate financial reports, compresses them into an archive, and exfiltrates the archive over an encrypted socket. What phase of the Cyber Kill Chain does this achieve?',
    ['Installation', 'Command & Control (C2)', 'Actions on Objectives', 'Weaponization'],
    2,
    'Actions on Objectives is the final phase of the Kill Chain where the attacker achieves their goal, such as data exfiltration, system damage, or ransomware encryption.'
  ),
  createQuestion(
    'qn-fr-8',
    'Which analytical threat model organizes cybersecurity events into a structural diagram linking four core points: Adversary, Capability, Infrastructure, and Victim?',
    ['Lockheed Martin Cyber Kill Chain', 'The Diamond Model of Intrusion Analysis', 'MITRE ATT&CK Matrix', 'Defense in Depth Model'],
    1,
    'The Diamond Model maps intrusions by representing the relationships between its four core vertices: adversary, capability, infrastructure, and victim.'
  ),
  createQuestion(
    'qn-fr-9',
    'What is the primary contribution of the MITRE ATT&CK Matrix to enterprise security defense?',
    [
      'It provides a linear 7-stage chain for analyzing physical intrusions.',
      'It acts as a comprehensive, globally-accessible encyclopedia containing cataloged tactical and technical details on real-world adversary behaviors and mitigations.',
      'It defines private IP address ranges under standard RFC regulations.',
      'It serves as a system for calculating secure password hashing loops.'
    ],
    1,
    'The MITRE ATT&CK Matrix is an encyclopedia mapping specific real-world adversary tactics, techniques, and procedures (TTPs) directly to practical mitigations and detection tips.'
  ),
  createQuestion(
    'qn-fr-10',
    'A security executive calculates risk based on a standard equation. What are the three absolute elements that intersect to create Risk?',
    ['Threat, Vulnerability, and Asset Value', 'Confidentiality, Integrity, and Non-repudiation', 'Red Teaming, Blue Teaming, and Purple Teaming', 'Authentication, Authorization, and Accounting'],
    0,
    'Risk is mathematically modeled as the intersection of Threats (the actors/hazards), Vulnerabilities (the weaknesses to exploit), and Asset Value (the cost/impact of loss).'
  ),
  createQuestion(
    'qn-fr-11',
    'An organization decides to purchase a comprehensive cyber liability insurance policy to cover costs related to future data leaks. What risk response option was used?',
    ['Risk Mitigation', 'Risk Transference', 'Risk Avoidance', 'Risk Acceptance'],
    1,
    'Risk Transference shifts the financial, legal, or operational burden of a risk to an external third-party partner, such as an insurance carrier.'
  ),
  createQuestion(
    'qn-fr-12',
    'An administrator applies vendor security patches and mandates multi-factor authentication across all network user accounts. Which risk strategy is being applied?',
    ['Risk Mitigation', 'Risk Transference', 'Risk Avoidance', 'Risk Acceptance'],
    0,
    'Risk Mitigation involves applying controls, tools, policies, or procedures to reduce the likelihood or impact of a potential threat.'
  ),
  createQuestion(
    'qn-fr-13',
    'A pharmaceutical company disables its legacy server because a critical zero-day exploit cannot be patched, choosing to retire the associated product line. What risk response was chosen?',
    ['Risk Mitigation', 'Risk Transference', 'Risk Avoidance', 'Risk Acceptance'],
    2,
    'Risk Avoidance involves changing plans or stopping activities altogether to eliminate the risk.'
  ),
  createQuestion(
    'qn-fr-14',
    'A business logs a low-severity vulnerability present on an isolated testing system and decides not to take any action because the patching cost outweighs the asset value. What risk response is this?',
    ['Risk Mitigation', 'Risk Transference', 'Risk Avoidance', 'Risk Acceptance'],
    3,
    'Risk Acceptance is a deliberate choice to document and live with a risk because the remediation cost or effort is not justified.'
  ),
  createQuestion(
    'qn-fr-15',
    'How do tactical Incident Runbooks help a SOC team?',
    [
      'Runbooks outline legal definitions of corporate compliance standards.',
      'Runbooks provide highly technical, step-by-step procedures instructing security analysts exactly how to contain, analyze, and recover from specific incidents (like a ransomware outbreak or malware alert).',
      'Runbooks analyze the financial value of hardware inventory.',
      'Runbooks map external public-key directories.'
    ],
    1,
    'Incident Runbooks (or playbooks) are tactical, highly technical manuals containing step-by-step actions for analysts responding to specific incidents.'
  ),
  createQuestion(
    'qn-fr-16',
    'What represents the core difference between Business Continuity (BC) and Disaster Recovery (DR)?',
    [
      'BC focuses on symmetric file backends; DR is limited to asymmetric public keys.',
      'BC focuses on maintaining continuous, vital business operations during a disruption; DR focuses on restoring IT infrastructure and data systems after a disaster occurs.',
      'BC manages administrative directory queries; DR manages edge router firewalls.',
      'BC is purely physical; DR operates exclusively on cloud virtual machines.'
    ],
    1,
    'Business Continuity consists of plan-keeping to ensure operations proceed despite an ongoing outage. Disaster Recovery is the subset of procedures focused on the technical restoration of systems.'
  ),
  createQuestion(
    'qn-fr-17',
    'A database has a calculated Single Loss Expectancy (SLE) of $50,000. It is estimated that a serious database corruption event will occur once every two years (ARO = 0.5). What is the Annualized Loss Expectancy (ALE)?',
    ['$100,000', '$25,000', '$50,000', '$10,000'],
    1,
    'The mathematical formula is Annualized Loss Expectancy = Single Loss Expectancy * Annualized Rate of Occurrence (ALE = SLE * ARO). In this scenario, $50,000 * 0.5 = $25,000.'
  ),
  createQuestion(
    'qn-fr-18',
    'An auditor verifies that a retail website maintains secure encryption across all transactions and keeps credit card records isolated. Which regulatory compliance standard is being audited?',
    ['HIPAA', 'PCI-DSS', 'GDPR', 'ISO 27001'],
    1,
    'PCI-DSS (Payment Card Industry Data Security Standard) mandates configurations and security controls for all entities storing, processing, or transmitting credit card data.'
  ),
  createQuestion(
    'qn-fr-19',
    'What describes a "Hot Site" backup location for disaster recovery?',
    [
      'An empty physical building with power and cooling, but no hardware or data drives.',
      'A fully operational redundant facility equipped with real-time cloned data replication, power, systems, and personnel, enabling near-instantaneous business failover.',
      'A server room where the physical thermal environment is monitored.',
      'An offsite cloud drive containing offline tape backups.'
    ],
    1,
    'A Hot Site is a fully mirrored, live-action recovery facility that enables near-zero transition delay during outages because physical systems, software, and current data replicas are already in place.'
  ),
  createQuestion(
    'qn-fr-20',
    'Analysts discover active malicious beacons sending server metrics to a known hostile command-and-control server. How are these items classified in incident analysis?',
    ['Vulnerability vectors', 'Indicators of Compromise (IoCs)', 'Risk Acceptance parameters', 'SAML SSO signatures'],
    1,
    'Indicators of Compromise (IoCs) are forensic pieces of evidence (such as unique IP addresses, file hashes, or registry entries) indicating a security breach has occurred.'
  )
];

// ========================================================
// EXAM: SECURITY & RISK MASTER EXAM (100 QUESTIONS)
// ========================================================
export const group3MasterExamQuestions: QuizQuestion[] = [
  createQuestion(
    'em3-1',
    'An enterprise administrator deploys a system to verify file hashes. They want to prevent attackers from precomputing common hashes. Which control should they implement?',
    ['FIDO2 keys', 'Cryptographic Salting', 'SAML assertions', 'Active clustering'],
    1,
    'Hashing passwords with a random salt completely neutralizes Rainbow Table attacks since a precomputed hash library cannot account for unique, random salt strings appended to each item.'
  ),
  createQuestion(
    'em3-2',
    'Which centralized AAA service operates over UDP and encrypts only the password within the packet payload, leaving other elements visible?',
    ['TACACS+', 'RADIUS', 'LDAP', 'Kerberos'],
    1,
    'RADIUS operates over UDP port 1812/1813 and encrypts only the user password in its payloads, while TACACS+ uses TCP and encrypts the entire packet payload.'
  ),
  createQuestion(
    'em3-3',
    'What is the standard port allocation utilized by TACACS+ for central device administration, and what transport protocol does it leverage?',
    ['TCP Port 49', 'UDP Port 49', 'UDP Port 1812', 'TCP Port 389'],
    0,
    'TACACS+ is a CISCO standard operating over secure TCP port 49, separating authentication, authorization, and accounting.'
  ),
  createQuestion(
    'em3-4',
    'An attacker establishes a direct interactive terminal loop back to their external management server. At which Cyber Kill Chain stage is this system operating?',
    ['Exploitation', 'Installation', 'Command and Control (C2)', 'Actions on Objectives'],
    2,
    'Beaconing back to an external malicious server to wait for remote hacker control commands represents the Command and Control (C2) phase.'
  ),
  createQuestion(
    'em3-5',
    'A secure certificate contains the owner\'s public key and is digital signed by a third party. What is this trustworthy registry entity called?',
    ['Identity Broker', 'Ticket Granting Service', 'Certificate Authority (CA)', 'Public Key Directory'],
    2,
    'A trusted third-party Certificate Authority verifies domain or user ownership and signs the certificate to establish cryptographic trust.'
  ),
  createQuestion(
    'em3-6',
    'Which operational security division specializes in writing threat detection filters and resolving logs inside the SIEM?',
    ['Blue Team', 'Red Team', 'Compliance Team', 'Purple Team'],
    0,
    'The Blue Team manages defense operations, SIEM rules, endpoint agents, firewall rules, and incident remediation.'
  ),
  createQuestion(
    'em3-7',
    'Which risk response describes a company terminating a legacy web portal that contains unpatchable SQL injection vulnerabilities?',
    ['Risk Acceptance', 'Risk Avoidance', 'Risk Transference', 'Risk Mitigation'],
    1,
    'By disabling the system entirely and retiring the associated business process, the organizational chooses to avoid the risk (Risk Avoidance).'
  ),
  createQuestion(
    'em3-8',
    'Which single sign-on standard operates using XML-formatted assertions passed between an IdP and a Service Provider?',
    ['OIDC', 'SAML 2.0', 'OAuth 2.0', 'Kerberos'],
    1,
    'SAML 2.0 is the XML token standard used to exchange authentication and authorization data across enterprise boundaries.'
  ),
  createQuestion(
    'em3-9',
    'A server checks an incoming file block digest against a baseline SHA-256 code index. Which CIA Triad component is verified?',
    ['Confidentiality', 'Integrity', 'Availability', 'Non-repudiation'],
    1,
    'Verifying that a file has not been altered or loaded with bad sectors validates its Integrity.'
  ),
  createQuestion(
    'em3-10',
    'Which biometric verification type belongs under the inherence factor "Something You Are"?',
    ['Writing signature strokes', 'Keystroke timing', 'Retina or Fingerprint iris matches', 'Mobile token swipes'],
    2,
    'Biological measurements of physical body markers (like retina patterns, fingerprint ridges, or facial geometry) are inherence factors.'
  ),
  createQuestion(
    'em3-11',
    'What is the purpose of OCSP Stapling?',
    [
      'To allow entities to self-sign certificates locally.',
      'To verify client identities using Kerberos KDC tickets during a web session.',
      'To delegate the task of checking certificate revocation status to the web server itself, saving client latency and keeping queries private from CAs.',
      'To backup public-key pairs onto remote cloud databases automatically.'
    ],
    2,
    'OCSP Stapling saves the client from querying external CA servers. The host server periodically queries the status and staples the signed response directly into the TLS handshake.'
  ),
  createQuestion(
    'em3-12',
    'A security engineer deploys host-based firewalls, local antivirus scanners, network ACLs, and physical security card readers. What security principle is implemented?',
    ['Microsegmentation', 'Zero Trust Architecture', 'Defense in Depth', 'Symmetric scaling'],
    2,
    'Deploying layered concentric security barriers across different layers of space and system structures is the model of Defense in Depth.'
  ),
  createQuestion(
    'em3-13',
    'After checking an enterprise password, a user must approve a prompt on their pre-registered corporate smartphone. What authentication components were used?',
    ['Something You Know and Something You Have', 'Something You Know and Something You Are', 'Something You Have and Somewhere You Are', 'Something You Do and Something You Have'],
    0,
    'The password is knowledge (Something You Know), whereas the registered smartphone is a possession factor (Something You Have).'
  ),
  createQuestion(
    'qn-em3-14',
    'What describes a corporate Single Sign-On (SSO) system?',
    [
      'A system that maps hardware MAC addresses to standard subnet groups.',
      'A centralized authentication service that allows users to authenticate once and access multiple independent local and cloud resources without re-entering credentials.',
      'An automated tool that updates virus definitions on corporate devices.',
      'A relational database engine that processes file hashes.'
    ],
    1,
    'Single Sign-On (SSO) enables a user to log in once at an Identity Provider and securely access multiple applications without separate logins.'
  ),
  createQuestion(
    'qn-em3-15',
    'Which Kerberos component distributes Ticket Granting Tickets (TGT) to authenticated clients?',
    ['Ticket Granting Service (TGS)', 'Authentication Service (AS)', 'Active Directory LDAP parser', 'RADIUS Accounting proxy'],
    1,
    'The Kerberos Authentication Service (AS) verifies the user\'s initial credentials and issues their Ticket Granting Ticket (TGT).'
  ),
  createQuestion(
    'qn-em3-16',
    'If a domain workstations clock drifts 10 minutes out of sync with the Domain Controller running Kerberos, what is the functional outcome?',
    [
      'Users can log in but cannot access file directories.',
      'The KDC rejects authentication requests, blocking domain login due to time skew thresholds designed to prevent replay attacks.',
      'The client workstation is automatically air-gapped.',
      'The domain controller issues dynamic certificates automatically.'
    ],
    1,
    'Kerberos relies on NTP synchronization. If device clocks drift past the maximum threshold (usually 5 minutes), the KDC rejects tickets to prevent replay attacks.'
  ),
  createQuestion(
    'qn-em3-17',
    'Which open standard framework is designed primarily for Authorization API sharing rather than direct Identity Verification?',
    ['SAML 1.1', 'OpenID Connect (OIDC)', 'OAuth 2.0', 'Kerberos Core'],
    2,
    'OAuth 2.0 is an authorization protocol designed to grant client applications secure, delegated access to API resources on behalf of a user. OIDC is the identity layer built on top of it.'
  ),
  createQuestion(
    'qn-em3-18',
    'A technician isolates legacy control systems in a separate network zone. There is absolutely no physical connection, wireless route, or wire running from this zone to the Internet. What is this physical defense called?',
    ['Logical DMZ zoning', 'Virtual Local Area Network division', 'Air-Gapping', 'Bastion transit fencing'],
    2,
    'Air-gapping is a complete physical segmentation strategy that leaves high-security systems unconnected to any shared networks, including the Internet.'
  ),
  createQuestion(
    'qn-em3-19',
    'An intrusion detection tool sounds an alarm because an engineer is compiling authorized source code. No actual threat is present. How is this event classified?',
    ['True Positive', 'True Negative', 'False Positive', 'False Negative'],
    2,
    'An alert triggered by normal, safe, or authorized system actions is a False Positive.'
  ),
  createQuestion(
    'qn-em3-20',
    'An attacker bypasses security scanners using a stealth exploit payload and remains embedded on a server. Security dashboards show green and register no warning. How is this classified?',
    ['True Positive', 'True Negative', 'False Positive', 'False Negative'],
    3,
    'A False Negative occurs when an active exploit executes undetected by security auditing tools.'
  ),
  createQuestion(
    'qn-em3-21',
    'In the context of Risk Management, how is the severity of a Risk calculated?',
    [
      'As the sum of all local server and hardware capital inventory costs.',
      'By evaluating the intersection of Threat (actors), Vulnerability (flaws), and Asset Value (impact of compromise).',
      'By multiplying the number of administrative users by the length of their passwords.',
      'By adding active IDS zones to public IP pools.'
    ],
    1,
    'Risk combines Threats (adversaries or events), Vulnerabilities (weaknesses), and the impact/Asset Value of a potential breach.'
  ),
  createQuestion(
    'qn-em3-22',
    'An organization decides to transition its public-facing servers to a certified third-party cloud hosting provider to share runtime security liability. What is this risk strategy?',
    ['Risk Avoidance', 'Risk Transference', 'Risk Acceptance', 'Risk Mitigation'],
    1,
    'Delegating security operations or financial liability of an asset to an external third-party provider is an example of Risk Transference.'
  ),
  createQuestion(
    'qn-em3-23',
    'A system administrator schedules offsite backups and updates local network ACLs on data systems weekly. What risk strategy is being applied?',
    ['Risk Mitigation', 'Risk Transference', 'Risk Avoidance', 'Risk Acceptance'],
    0,
    'Applying security configurations, system backups, and technical safeguards to reduce threat occurrence or impact is Risk Mitigation.'
  ),
  createQuestion(
    'qn-em3-24',
    'How do tactical Incident Runbooks help a SOC team?',
    [
      'They summarize the company\'s financial stock positions.',
      'They provide clear, step-by-step technical procedures to guide incident responders through containing, analyzing, and cleaning specific security alerts.',
      'They allow the automated generation of client SSL/TLS certificates.',
      'They measure office physical heat metrics.'
    ],
    1,
    'Incident Runbooks (or playbooks) are document sets containing tactical, sequential technical instructions for containing and cleaning specific security compromises.'
  ),
  createQuestion(
    'qn-em3-25',
    'What security framework relies on granular microsegmentation, continuous identity evaluations, and device health checks, operating on the principle "Never trust, always verify"?',
    ['Defense in Depth security structure', 'Zero Trust Architecture', 'Administrative Perimeter defense', 'SAML Federal single sign-on'],
    1,
    'Zero Trust Architecture eliminates traditional perimeter trust assumptions, validating every access request based on identity, device health, and context.'
  ),
  createQuestion(
    'qn-em3-26',
    'A user signs sensitive transactional logs using their unique private key. What does this process guarantee?',
    ['Availability', 'Non-repudiation and Integrity', 'Confidentiality', 'Network bandwidth latency reduction'],
    1,
    'Using an individual private key to sign files creates a cryptographic footprint that guarantees integrity and non-repudiation.'
  ),
  createQuestion(
    'qn-em3-27',
    'Which administrative control handles determining which folders, database records, or settings a logged-in identity can open or modify?',
    ['Identification verification', 'Authentication protocols', 'Authorization lists', 'Log auditing'],
    2,
    'Authorization validates permissions, defining what actions an authenticated identity has rights to execute on a system.'
  ),
  createQuestion(
    'qn-em3-28',
    'A retail application stores password records. To defend against automated GPU list cracking, what cryptographic mitigation should they use?',
    ['MD5 hash algorithms', 'Unique salt generation with bcrypt stretching', 'Reversible regional AES encryption keys', 'Central DNS security entries'],
    1,
    'Stretching passwords with bcrypt and generating unique random salts neutralizes high-speed offline GPU brute-forcing and Rainbow Table attacks.'
  ),
  createQuestion(
    'qn-em3-29',
    'An auditor notes that LDAP data travels across the LAN in cleartext. What risk does this present?',
    ['Eavesdropping and credential sniffing of sensitive user parameters', 'Denial-of-Service performance blocks on switches', 'Failure of the server\'s physical UPS', 'VLAN tag injection on hardware routing ports'],
    0,
    'Unencrypted LDAP queries (Port 389) transmit user credentials and directory details in simple text, leaving them vulnerable to packet sniffing.'
  ),
  createQuestion(
    'qn-em3-30',
    'A technical team builds a redundant facility equipped with real-time database replication, matching workstations, and live circuits. What recovery level is this called?',
    ['Cold Site recovery hub', 'Warm Site system buffer', 'Hot Site mirrored facility', 'Mobile cloud data backup'],
    2,
    'A disaster recovery Hot Site has fully active hardware, networks, power, and synchronized data, enabling near-instant failover during outages.'
  ),
  createQuestion(
    'qn-em3-31',
    'How does a centralized LDAP directory group nodes and user listings?',
    [
      'Inside simple flat-file text documents based on date entries.',
      'Within a hierarchical tree structure of organization units (OUs), domains, and security categories.',
      'As unstructured database blocks accessible via the web.',
      'As relational SQL primary records.'
    ],
    1,
    'LDAP structures identity and system object records within a hierarchical directory tree mapping domains, departments, and units.'
  ),
  createQuestion(
    'qn-em3-32',
    'An organization installs dual active firewalls and several redundant cooling units on data server rooms. What CIA Triad element is addressed?',
    ['Confidentiality', 'Integrity', 'Availability', 'Non-repudiation'],
    2,
    'Redundant infrastructure components (cooling, power, firewalls) keep servers continuously available, directly targeting the Availability pillar.'
  ),
  createQuestion(
    'qn-em3-33',
    'Which analytical model is used inside security centers to map any attack sequence based on Adversary, Capability, Infrastructure, and Victim vertices?',
    ['The Lockheed Martin Cyber Kill Chain', 'The Diamond Model of Intrusion Analysis', 'MITRE ATT&CK encyclopedia matrix', 'Defense-in-Depth hierarchy model'],
    1,
    'The Diamond Model structure maps an intrusion event by establishing relationships between its adversary, capability, infrastructure, and victim.'
  ),
  createQuestion(
    'qn-em3-34',
    'Which phase of the linear 7-stage Cyber Kill Chain focuses on generating an exploit paired with a malicious backdoor payload inside an executable package?',
    ['Reconnaissance', 'Weaponization', 'Delivery', 'Installation'],
    1,
    'Weaponization is the phase where an exploit and payload are coupled to create an infection package, prior to delivery.'
  ),
  createQuestion(
    'qn-em3-35',
    'An attacker gathers email addresses, company charts, and scans public IP blocks. Under the Cyber Kill Chain, what stage is active?',
    ['Reconnaissance', 'Weaponization', 'Delivery', 'Exploitation'],
    0,
    'Passive and active target research, email harvesting, and network scanning fall under the Reconnaissance phase.'
  ),
  createQuestion(
    'qn-em3-36',
    'Which device resides inline on network boundaries, intercepts traffic, and automatically drops hostile connection attempts?',
    ['Intrusion Detection System (IDS)', 'Intrusion Prevention System (IPS)', 'SIEM log compiler', 'Proxy caching server'],
    1,
    'An IPS is deployed inline, allowing it to actively drop packets, block traffic, and prevent compromises dynamically.'
  ),
  createQuestion(
    'qn-em3-37',
    'What describes a "Warm Site" recovery option under corporate disaster recovery guidelines?',
    [
      'An empty room with raised floors, electricity, and water pipes, but no installed IT equipment.',
      'A facility with power, desks, and preconfigured hardware, but requiring restoring backups and software configurations before going live.',
      'A mirrored server room running real-time duplicated cloud nodes.',
      'An encrypted hard drive container stored inside a safe.'
    ],
    1,
    'A Warm Site has operational hardware in place but lacks real-time data replication, requiring restoration of recent backups before going run-ready.'
  ),
  createQuestion(
    'qn-em3-38',
    'Under regulatory guidelines, what operational scope does HIPAA audit?',
    [
      'Standard online digital credit card payment systems.',
      'Consumer privacy regulations across European Union entities.',
      'The protection, storage, and transaction confidentiality of patient Health Information (PHI).',
      'The hashing loop metrics of user authorization blocks.'
    ],
    2,
    'HIPAA dictates strict security and confidentiality safeguards for Protected Health Information (PHI) in healthcare.'
  ),
  createQuestion(
    'qn-em3-39',
    'An enterprise wants to enforce multi-factor authentication. Which combination represents a valid MFA configuration?',
    [
      'An alphanumeric password alongside a four-digit numeric PIN.',
      'A physical hardware smartcard (Something You Have) alongside a biometric fingerprint scan (Something You Are).',
      'An asymmetric public key alongside a PKI digital certificate.',
      'A facial recognition template alongside an iris retina register.'
    ],
    1,
    'A smartcard (possession) combined with a fingerprint (inherence) draws from two distinct factor categories, qualifying as MFA.'
  ),
  createQuestion(
    'qn-em3-40',
    'What security goal does a Separation of Duties policy achieve?',
    [
      'It enforces AES-256 data-at-rest encryption standard rules.',
      'It divides a high-value critical administrative process among multiple independent personnel so that no single user has complete control.',
      'It routes client requests across different global regions to segment traffic.',
      'It backs up SQL database systems onto multiple storage locations.'
    ],
    1,
    'Separation of Duties divides core operations (such as approving finance or code changes) across distinct people to prevent fraud or major mistakes.'
  ),
  createQuestion(
    'qn-em3-41',
    'What security framework maps out real-world adversary behaviors, classifying them into technical tactics, techniques, and procedures (TTPs) for security tuning?',
    ['The Lockheed Martin Cyber Kill Chain', 'The MITRE ATT&CK Matrix', 'Security Information Event logs (SIEM)', 'The Diamond Model structure'],
    1,
    'The MITRE ATT&CK Matrix catalogs real-world threat actor tactics and techniques, providing mitigation strategies for each entry.'
  ),
  createQuestion(
    'qn-em3-42',
    'A central SIEM engine reads alerts from network nodes, databases, and endpoint antiviruses. What primary task does it carry out to flag complex attacks?',
    ['Asymmetric PKI digital validation', 'Event correlation and normalization', 'Dynamic ticket distribution', 'Physical UPS load balance calculation'],
    1,
    'A SIEM correlates events and normalizes log entries across different platforms, connecting seemingly isolated logs into a visible attack path.'
  ),
  createQuestion(
    'qn-em3-43',
    'An executive wants to calculate single transactional loss thresholds on an e-commerce platform. What metrics intersect to resolve Single Loss Expectancy (SLE)?',
    [
      'Asset Value (AV) and Exposure Factor (EF).',
      'Asset Value (AV) and Annualized Rate of Occurrence (ARO).',
      'Exposure Factor (EF) and Annual Loss Expectancy (ALE).',
      'Vulnerability density metrics and threat logs.'
    ],
    0,
    'Single Loss Expectancy (SLE) is calculated by multiplying the Asset Value (AV) by the Exposure Factor (EF) representing the percentage of asset lost (SLE = AV * EF).'
  ),
  createQuestion(
    'qn-em3-44',
    'An industrial control platform utilizes a physical mesh fence, local badges, locked racks, and security cameras. What category of security controls are these?',
    ['Administrative controls', 'Logical controls', 'Physical controls', 'Compliance frameworks'],
    2,
    'Physical controls restrict tangible access to facilities, equipment, and resources via barriers like locks, fences, badges, and guards.'
  ),
  createQuestion(
    'qn-em3-45',
    'What standard administrative control implements security policies, acceptable use guidelines, and regular security awareness training?',
    ['Technical controls', 'Administrative controls', 'Physical controls', 'Logical software policies'],
    1,
    'Administrative controls consist of managerial guidelines, standard policies, hiring practices, and training programs.'
  ),
  createQuestion(
    'qn-em3-46',
    'Which secure protocol encrypts all LDAP queries, ensuring identity records and binding credentials do not travel in cleartext?',
    ['Tomcat root link', 'LDAPS (LDAP over SSL/TLS)', 'RADIUS Accounting', 'TACACS+ core'],
    1,
    'LDAPS uses SSL/TLS to encrypt directory lookup traffic over TCP port 636.'
  ),
  createQuestion(
    'qn-em3-47',
    'What describes an "Implicit Deny" firewall behavior?',
    [
      'Incoming connections are accepted unless a custom rule explicitly blocks them.',
      'Any connection request that is not explicitly permitted by a defined rule is blocked, dropped, or denied by default.',
      'The firewall resolves DNS caches internally.',
      'Symmetric keys are generated on routing gateways.'
    ],
    1,
    'Implicit Deny blocks all traffic by default, only allowing explicitly defined exceptions to pass.'
  ),
  createQuestion(
    'qn-em3-48',
    'Which OAuth 2.0 role hosts the user profile accounts, and authenticates the user\'s credentials to return approval codes during integration?',
    ['The Client App', 'The Resource Owner', 'The Authorization Server', 'The Service Provider'],
    2,
    'The Authorization Server (in modern systems combined as IdP) authenticates the client user and issues authorization and access tokens.'
  ),
  createQuestion(
    'qn-em3-49',
    'A central directory database of Active Directory organizes objects, domains, and properties hierarchically. What protocol is standard for querying AD assets?',
    ['TACACS+ Port 49', 'SAML XML assertions', 'Lightweight Directory Access Protocol (LDAP)', 'RADIUS UDP streams'],
    2,
    'LDAP is the core industry standard querying protocol used to query information from Active Directory databases.'
  ),
  createQuestion(
    'qn-em3-50',
    'What primary security hazard does a "False Negative" present to an enterprise?',
    [
      'It causes excessive developer alert fatigue, forcing analysts to ignore real alarms.',
      'Stealth malware or hackers actively operate inside systems without triggering any log alarms, leaving breaches completely uncontained.',
      'It drops database availability rates below compliance levels.',
      'It causes the failure of server UPS backup systems.'
    ],
    1,
    'A False Negative is the most critical failure mode because a system breach occurs while security defense tools report a normal status, resulting in no active containment.'
  ),
  createQuestion(
    'qn-em3-51',
    'To guarantee integrity of financial databases containing accounting ledger records, which cryptographic primitive is most appropriate?',
    ['Symmetric block ciphers', 'Cryptographic hashing algorithms', 'PKI revocation lookups', 'Centralized jump boxes'],
    1,
    'Hashing algorithms map file blocks deterministically and irreversibly. If a single ledger entry is altered, the resulting hash digest changes, proving a compromise of integrity.'
  ),
  createQuestion(
    'qn-em3-52',
    'An engineer needs to deploy centralized authentication for network devices using TACACS+. What transport layer characteristics define TACACS+?',
    ['Reliable TCP on port 49', 'Fast UDP on port 49', 'Unreliable UDP on ports 1812 and 1813', 'Secure TCP on port 636'],
    0,
    'TACACS+ uses the reliable TCP protocol on port 49 under official standards.'
  ),
  createQuestion(
    'qn-em3-53',
    'A web application developer integrates JSON Web Tokens (JWT) for user sessions under OIDC. What information does a JWT carry?',
    [
      'A plain-text copy of the user\'s directory password.',
      'Base64-encoded JSON objects (claims) containing user identity details, digitally signed by the Identity Provider to ensure integrity.',
      'A temporary Kerberos ticket block.',
      'The client machine\'s physical MAC address.'
    ],
    1,
    'JWTs are self-contained tokens containing user claims, digitally signed using asymmetric keys by the authentication provider.'
  ),
  createQuestion(
    'qn-em3-54',
    'What is the fourth stage of the Lockheed Martin Cyber Kill Chain, following delivery and preceding installation?',
    ['Reconnaissance', 'Weaponization', 'Exploitation', 'Command & Control'],
    2,
    'The fourth stage is Exploitation, which triggers after delivery. This leverages a vulnerability on the host to execute attacker code.'
  ),
  createQuestion(
    'qn-em3-55',
    'Under Zero Trust guidelines, what assumption is made about the internal corporate network?',
    [
      'It is trusted by default due to strict physical access controls.',
      'It is assumed to be as hostile and untrusted as the public Internet, requiring continuous verification for every access request.',
      'It is segmented using symmetric encryption keys only.',
      'It operates using self-signed certificate authority rules.'
    ],
    1,
    'Zero Trust assumes the internal network is hostile and untrusted by default, requiring continuous verification and microsegmentation.'
  ),
  createQuestion(
    'qn-em3-56',
    'Which core security component is responsible for translating domain names, mapping logical IPs, and operating over UDP Port 53?',
    ['Domain Name System (DNS)', 'DHCP Server', 'Kerberos AS', 'TACACS+ central directory'],
    0,
    'DNS translates human-readable domain names into routable IP addresses, operating over UDP and TCP port 53.'
  ),
  createQuestion(
    'qn-em3-57',
    'An organization suffers from "Alert Fatigue." What is the best technical approach to mitigate this issue inside the SOC?',
    [
      'Disable security alert notifications during business hours.',
      'Tune SIEM aggregation rules and filter out known-safe false-positive events.',
      'Deploy redundant physical fence barriers.',
      'Enforce longer alphanumeric password policies.'
    ],
    1,
    'Tuning SIEM detection filters, suppressing duplicate entries, and filtering safe false positives reduces alert volume, allowing analysts to focus on real security events.'
  ),
  createQuestion(
    'qn-em3-58',
    'What security concept is demonstrated by an attacker compromising a development server but failing to access production assets due to strict internal firewalls and custom VLAN tables?',
    ['Zero Trust microsegmentation', 'Risk Transference procedures', 'Asymmetric digital signatures', 'Kerberos Ticket Granting parameters'],
    0,
    'Under Zero Trust guidelines, microsegmentation restricts flat lateral movement across the network, containing compromises within isolated boundaries.'
  ),
  createQuestion(
    'qn-em3-59',
    'A security analyst is conducting threat hunting. What are they proactively searching for?',
    [
      'Accounting anomalies under regulatory PCI guidelines.',
      'Hidden indicators of compromise (IoCs) and active threats that bypassed standard automated security defenses.',
      'Hardware asset tags on database cluster drives.',
      'The expiration date of domain name registrations.'
    ],
    1,
    'Threat hunting is a proactive defensive task where analysts search systems for silent compromises or residual attacker indicators.'
  ),
  createQuestion(
    'qn-em3-60',
    'What represents the role of a Service Provider (SP) in a federated SAML SSO transaction?',
    [
      'It acts as the primary host of credential accounts and user databases.',
      'It provides the web service, application, or resource the user is attempting to access, validating identity claims signed by the companion Identity Provider.',
      'It encrypts local files using AES symmetric blocks.',
      'It generates LDAP queries to map hardware addresses.'
    ],
    1,
    'The SP is the target application the user wants to access. It trusts the IdP to authenticate users and accept signed SAML assertions.'
  ),
  createQuestion(
    'qn-em3-61',
    'Which of the following describes the difference between symmetric and asymmetric cryptography?',
    [
      'Symmetric uses two keys for encryption and one for decryption; Asymmetric uses a single key.',
      'Symmetric encryption uses a single, shared key for both encryption and decryption; Asymmetric encryption uses a mathematically bound public/private key pair.',
      'Symmetric encryption is restricted to cloud storage; Asymmetric encryption runs on physical drives only.',
      'Symmetric encryption relies on XML schemas; Asymmetric encryption uses JSON Web Tokens.'
    ],
    1,
    'Symmetric encryption is faster and uses one shared secret key for encryption and decryption. Asymmetric encryption uses public/private key pairs for encryption and digital signatures.'
  ),
  createQuestion(
    'qn-em3-62',
    'What describes a "Cold Site" disaster recovery facility?',
    [
      'A facility with raised floors, power, cooling, and network jacks, but no installed IT systems, requiring long setup times to replicate operations.',
      'A fully operational redundant facility equipped with real-time cloned data replication, power, systems, and personnel, enabling near-instantaneous business failover.',
      'A facility with power, desks, and preconfigured hardware, but requiring restoring backups and software configurations before going live.',
      'An offsite cloud drive containing offline tape backups.'
    ],
    0,
    'A Cold Site provides the basic physical space, electricity, and cooling but lacks servers or operational systems, making it the slowest and cheapest recovery option.'
  ),
  createQuestion(
    'qn-em3-63',
    'A security auditor runs compliance checks to verify that accounting system logs comply with GDPR standards. What geographical market does GDPR regulate?',
    ['United States healthcare entities', 'European Union consumer privacy regulations', 'Global credit card payment systems', 'Corporate finance registers'],
    1,
    'GDPR enforces strict rules on data protection and privacy for individuals within the European Union (EU).'
  ),
  createQuestion(
    'qn-em3-64',
    'An enterprise team wants to perform Purple Team security engagements. What core activities does this involve?',
    [
      'Hiring external hackers to execute password sprays.',
      'Offensive and defensive experts actively collaborating to test, tune, and harden defensive SIEM monitoring rules and scripts.',
      'Writing disaster recovery backups on physical tape systems.',
      'Migrating local directory nodes to public cloud buckets.'
    ],
    1,
    'Purple Teaming is a cooperative approach where Red (offensive) and Blue (defensive) operators share active tools and configurations in real time to tune detections.'
  ),
  createQuestion(
    'qn-em3-65',
    'Which administrative control requires two separate executives to authorize any corporate check transfer exceeding $100,000?',
    ['Principle of Least Privilege', 'Separation of Duties', 'Defense in Depth', 'Dual-factor Identity Verification'],
    1,
    'Separation of Duties prevents fraud and major mistakes by dividing high-risk procedures across multiple personnel.'
  ),
  createQuestion(
    'qn-em3-66',
    'What is the primary function of the NIST Cybersecurity Framework (CSF) Core?',
    [
      'To provide a detailed command-line cheat sheet for Linux administrators.',
      'To outline a high-level set of security activities structured around Identify, Protect, Detect, Respond, and Recover pillars.',
      'To define IPv4 address subnets.',
      'To hash local database records.'
    ],
    1,
    'The NIST CSF Core provides a high-level framework of cybersecurity outcomes categorized into Identify, Protect, Detect, Respond, and Recover.'
  ),
  createQuestion(
    'qn-em3-67',
    'An administratorconfigures an edge firewall rule to block all inbound traffic originating from unroutable RFC 1918 private network pools. What attack type is this blocking?',
    ['Dynamic DNS Poisoning', 'IP Address Spoofing', 'ARP Poisoning on Layer 2', 'Kerberos ticket manipulation'],
    1,
    'Blocking unroutable private IP addresses from entering network ingress ports prevents IP address spoofing attacks by external actors'
  ),
  createQuestion(
    'qn-em3-68',
    'An analyst identifies that a local folder contains files where the file extensions have been appended with ".locked" or ".crypto". What threat type is active?',
    ['SQL Injection payload execution', 'Ransomware threat infection', 'DNS Cache Hijacking', 'Directory LDAP breach'],
    1,
    'Appending unique cryptographic file extensions is a signature indicator of Ransomware actively encrypting local files.'
  ),
  createQuestion(
    'qn-em3-69',
    'Which security threat targets the conversion of human-readable domain names into routable IP addresses, appending unauthorized entries into a local server directory?',
    ['ARP Cache Poisoning', 'DNS Cache Poisoning / Spoofing', 'Buffer Overflow execution', 'SAML token forgery'],
    1,
    'DNS cache poisoning introduces fraudulent IP mappings into a DNS resolver\'s cache, redirecting traffic to malicious servers.'
  ),
  createQuestion(
    'qn-em3-70',
    'What describes a "Mac Flood" attack?',
    [
      'Flooding the local edge gateway with massive TCP SYN packets to crash routing operations.',
      'Flooding a switch\'s CAM (Content Addressable Memory) table with false MAC addresses, forcing the switch to act like a hub, broadcasting all traffic to all ports (enabling packet sniffing).',
      'Brute-forcing admin accounts over secure SSH gates.',
      'Manipulating SAML assertion metadata using XML tags.'
    ],
    1,
    'MAC Flooding exhausts a switch\'s CAM table, forcing it to fail-open and broadcast all incoming frames to all ports, allowing observers to sniff local traffic.'
  ),
  createQuestion(
    'qn-em3-71',
    'An auditor notes that a corporate website stores user authentication sessions in a cookie segment without the "Secure" attribute enabled. What security risk does this highlight?',
    ['The cookie can travel in unencrypted HTTP connections, exposing the session to network eavesdropping.', 'The cookie is stored in plaintext on local cloud backups.', 'The cookie disables Kerberos ticket generation controls.', 'The cookie causes browser crashes.'],
    0,
    'Without the "Secure" attribute enabled, web browsers will transmit session cookies over unencrypted HTTP requests, exposing them to network sniffing.'
  ),
  createQuestion(
    'qn-em3-72',
    'What is the primary operational mission of a Computer Security Incident Response Team (CSIRT)?',
    [
      'To audit enterprise accounting entries under strict compliance standards.',
      'To receive, analyze, contain, and remediate technical system security incidents.',
      'To purchase physical hardware for new datacenter racks.',
      'To perform offensive social engineering tests against executives.'
    ],
    1,
    'A CSIRT is a dedicated responder team tasked with managing and resolving active technical security and software breaches.'
  ),
  createQuestion(
    'qn-em3-73',
    'An administratorconfigures a system to lock any account that experiences five failed login attempts in 15 minutes. What attack does this block?',
    ['SQL injection attacks', 'Online credential Brute-forcing and spray attempts', 'ARP poisoning actions on LAN trunks', 'LDAP binding query manipulation'],
    1,
    'Enforcing account lockout thresholds blocks automated brute-forcing attempts by locking out the target account after several failures.'
  ),
  createQuestion(
    'qn-em3-74',
    'Which specialized security policy regulates dynamic parameters such as geofencing locations, IP block lists, and device hardware profiles to automatically verify permissions during runtime?',
    ['Role-Based Access Control', 'Attribute-Based Access Control (ABAC)', 'Discretionary Access Control (DAC)', 'Mandatory Access Control (MAC)'],
    1,
    'ABAC (Attribute-Based Access Control) evaluates contextual attributes (device health, IP location, current time, user role) to authorize actions, fitting Zero Trust requirements.'
  ),
  createQuestion(
    'qn-em3-75',
    'Under HIPAA regulations, which of the following is categorized as Protected Health Information (PHI)?',
    ['The physical address of a local pharmacy building.', 'A patient\'s medical history records linked to identifiable biological names or IDs.', 'Corporate financial stocks listings.', 'Publicly available vaccination statistics.'],
    1,
    'PHI is any medical record, identity record, bio-marker, or treatment detail that can be linked to a specific person.'
  ),
  createQuestion(
    'qn-em3-76',
    'To secure outbound web requests and prevent internal corporate hosts from communicating directly with unverified external servers, which gateway control is used?',
    ['Active directory domain catalog server', 'Forward Proxy server', 'Reverse Proxy compiler', 'Central RADIUS gateway'],
    1,
    'A Forward Proxy intercepts internal outbound client requests, performing URL filtering, content caching, and threat inspections before reaching the Internet.'
  ),
  createQuestion(
    'qn-em3-77',
    'Which network architecture intercepts and balances incoming web connections across multiple redundant cloud nodes to optimize performance?',
    ['Forward Proxy Appliance', 'Reverse Proxy and Load Balancer', 'DNS Root Server', 'RADIUS Authorization proxy'],
    1,
    'A Reverse Proxy intercepts incoming public traffic, handling TLS termination, caching, and load balancing across internal servers.'
  ),
  createQuestion(
    'qn-em3-78',
    'Analysts discover a localized security event which maps to "Actions on Objectives" under the Cyber Kill Chain guidelines. What stage of the compromise is occurring?',
    ['The hacker is gathering email lists of corporate users.', 'The hacker is loading a backdoored macro into a Word file.', 'The hacker is achieving their target goal, such as copying data or executing ransomware.', 'The hacker is establishing an outbound interactive C2 channel.'],
    2,
    'Actions on Objectives is the final phase of the Cyber Kill Chain where the attacker carries out their intended goal (e.g. data theft).'
  ),
  createQuestion(
    'qn-em3-79',
    'A security manager drafts a Business Impact Analysis (BIA). What is the primary output of conducting a BIA?',
    [
      'A library of compiled antivirus signature database profiles.',
      'Identifying critical corporate files, calculating financial costs of outages, and defining recovery times (RTO/RPO) for core services.',
      'A dynamic listing of public CA-signed SSL certificates.',
      'Symmetric encryption calculations for backups.'
    ],
    1,
    'A BIA identifies critical corporate systems, measures the impact of outages, and establishes Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO).'
  ),
  createQuestion(
    'qn-em3-80',
    'Under the Diamond Model of Intrusion Analysis, which vertex represents the physical internet routes, proxy servers, and dynamic DNS names used by a threat actor?',
    ['The Adversary vertex', 'The Infrastructure vertex', 'The Capability vertex', 'The Victim vertex'],
    1,
    'The Infrastructure vertex represents the physical and logical communication routes, IP addresses, domains, and protocols used by the attacker.'
  ),
  createQuestion(
    'qn-em3-81',
    'An administratorconfigures network access controls using standard Discretionary Access Control (DAC) guidelines. What defines a DAC posture?',
    [
      'A central operating system decides the permissions of all user nodes.',
      'The data owner has the authority to grant or revoke access privileges to their files at their discretion.',
      'The firewall auto-assigns group access based on IP pools.',
      'Users are assigned security labels like "Secret" or "Top Secret".'
    ],
    1,
    'Discretionary Access Control (DAC) allows data owners to manage permissions for their own files, directories, and assets.'
  ),
  createQuestion(
    'qn-em3-82',
    'What describes a "Mandatory Access Control" (MAC) model?',
    [
      'Users grant read/write access to folders at local workstation boards.',
      'System administrators assign strict security clearance labels to users and classification labels to systems, letting the OS enforce access matches.',
      'Access maps to geographic geofencing coordinates dynamically.',
      'The firewall blocks connections based on port logs.'
    ],
    1,
    'Mandatory Access Control (MAC) is a strict, label-based permissions model where systems automatically match user clearance levels with file classification labels.'
  ),
  createQuestion(
    'qn-em3-83',
    'At which linear phase of the Lockheed Martin Cyber Kill Chain does an attacker launch a weaponized exploit to run code on target weaknesses?',
    ['Weaponization', 'Delivery', 'Exploitation', 'Installation'],
    2,
    'Exploitation is the phase where weaponized payloads run on the target host to execute attacker code.'
  ),
  createQuestion(
    'qn-em3-84',
    'What security benefit does "Defense in Depth" provide if a local network firewall rule is bypassed by a zero-day exploit?',
    [
      'It automatically restores system backups.',
      'Other defensive layers (like host antiviruses, segmented VLANs, and strong permissions) are in place to contain or stop the threat.',
      'It regenerates public-private keys on the domain controller.',
      'It reports the bug to compliance registries automatically.'
    ],
    1,
    'Defense in depth ensures that if one security barrier is compromised, subsequent layers contain or stop the breach.'
  ),
  createQuestion(
    'qn-em3-85',
    'Which forensic indicator describes cryptographic file hashes (MD5/SHA-256) of verified malware or known malicious IP addresses?',
    ['Vulnerability profiles', 'Indicators of Compromise (IoCs)', 'Secure session claims', 'Kerberos KDC tokens'],
    1,
    'Indicators of Compromise (IoCs) are system artifacts (hashes, bad domains, hostile IPs) that provide forensic evidence of a system breach.'
  ),
  createQuestion(
    'qn-em3-86',
    'An administratorconfigures SAML single sign-on for a corporate billing system. How are trust parameters shared among systems?',
    ['By publishing shared-secret passwords in unsecure directories.', 'By generating and importing cryptographic metadata XML files between the companion IdP and SP.', 'By linking local IP address pools.', 'By creating offline database backups.'],
    1,
    'SAML setups establish operational trust by exchanging metadata XML files containing public keys and service URLs between the IdP and SP.'
  ),
  createQuestion(
    'qn-em3-87',
    'An enterprise security policy requires changing all default administrative passwords on new routers before deploying them. What attack type does this address?',
    ['Online password spraying', 'Exploitation of default or hardcoded credential configurations', 'Buffer overflow execution', 'SAML assertion forgery'],
    1,
    'Default passwords are publicly documented, leaving new devices highly vulnerable to automated exploit sprays if unmodified.'
  ),
  createQuestion(
    'qn-em3-88',
    'Why is it highly valuable to perform vulnerability scans on enterprise networks periodically?',
    [
      'To verify and catalog outdated software patches and insecure system ports across network hosts, allowing proactive remediation.',
      'To backup active database entries onto physical safe hubs.',
      'To run password brute-forcing checks on standard databases.',
      'To automate the distribution of Kerberos session tickets.'
    ],
    0,
    'Vulnerability scanners identify missing patches, configuration issues, and insecure ports across devices, allowing administrators to secure systems before exploits occur.'
  ),
  createQuestion(
    'qn-em3-89',
    'To secure domain name lookups and prevent attackers from hijacking DNS queries, what extension should be deployed?',
    ['LDAPS secure queries', 'DNSSEC (Domain Name System Security Extensions)', 'SAML federated bindings', 'Active directory catalog bindings'],
    1,
    'DNSSEC adds cryptographic signatures to DNS records, allowing resolvers to verify the authenticity of lookup results.'
  ),
  createQuestion(
    'qn-em3-90',
    'Under regulatory PCI-DSS guidelines, which of the following is permitted?',
    ['Transmitting customer PIN details in plaintext over SMTP mail channels.', 'Storing encrypted credit card data while strictly isolating CVV numbers from persistent databases.', 'Sharing database passwords across common accounts.', 'Eliminating multi-factor authentication requirements for administrators.'],
    1,
    'PCI-DSS permits storing primary account numbers under strict encryption safeguards, but strictly prohibits storing raw CVV verification numbers after authorization.'
  ),
  createQuestion(
    'qn-em3-91',
    'In a corporate environment, how does Role-Based Access Control (RBAC) simplify permissions management?',
    [
      'By letting database owners self-assign file access privileges.',
      'By mapping access permissions to technical job roles, matching user accounts to functional security groups.',
      'By locking accounts after failed attempts.',
      'By routing connections based on geofencing tags.'
    ],
    1,
    'RBAC assigns user permissions based on logical job roles (such as Billing, Engineer, HR), rather than configuring permissions individually.'
  ),
  createQuestion(
    'qn-em3-92',
    'What is the primary role of a Security Information and Event Management (SIEM) log analyst?',
    [
      'To design physical racks for datacenter hosting.',
      'To monitor dashboards, examine cross-platform correlated alerts, and triage flagged security events.',
      'To write symmetric cryptographic hashing functions.',
      'To audit compliant financial records.'
    ],
    1,
    'SIEM analysts monitor central security feeds, triaging correlated warnings to identify and respond to breaches.'
  ),
  createQuestion(
    'qn-em3-93',
    'Which operational parameter defines the maximum acceptable age of restored data records following a disaster restoration event?',
    ['Recovery Time Objective (RTO)', 'Recovery Point Objective (RPO)', 'Maximum Tolerable Downtime (MTD)', 'Single Loss Expectancy (SLE)'],
    1,
    'Recovery Point Objective (RPO) defines the maximum acceptable data loss measured in time (e.g. up to 4 hours of lost transactions).'
  ),
  createQuestion(
    'qn-em3-94',
    'Which operational parameter defines the maximum acceptable duration of time allowed to restore systems and get business processes live after an outage?',
    ['Recovery Point Objective (RPO)', 'Recovery Time Objective (RTO)', 'Annualized Rate of Occurrence (ARO)', 'Exposure Factor (EF)'],
    1,
    'Recovery Time Objective (RTO) defines the maximum allowable time to restore systems and resume business operations after a disaster.'
  ),
  createQuestion(
    'qn-em3-95',
    'An attacker intercepts local network traffic by actively crafting and sending unauthenticated ARP responses to map target IP addresses to their own hardware MAC address. What attack is occurring?',
    ['ARP Cache Poisoning / Spoofing', 'DNS Cache Poisoning', 'SQL Injection execution', 'Kerberos TGT hijacking'],
    0,
    'ARP Spoofing floods local switches with unauthenticated, fraudulent ARP replies, mapping target IP gateways to the attacker\'s MAC address to intercept traffic.'
  ),
  createQuestion(
    'qn-em3-96',
    'To secure local administrative shell sessions on servers and prevent password eavesdropping over local networks, which protocol should administrators select?',
    ['Telnet Port 23', 'SSH Port 22', 'FTP Port 21', 'HTTP Port 80'],
    1,
    'SSH (Secure Shell) encrypts all shell traffic and credentials, securing administrative connections over TCP Port 22.'
  ),
  createQuestion(
    'qn-em3-97',
    'An analyst notices a local database server is experiencing high CPU load. They identify thousands of slow, incomplete TCP handshake requests targeted at the web server port. What attack does this represent?',
    ['Buffer Overflow exploit', 'TCP SYN Flood / DDoS', 'SQL Injection probe', 'DNS Cache poisoning attempt'],
    1,
    'A SYN Flood is a DDoS attack that exhausts server resources by leaving thousands of TCP half-open connections (SYN-ACK sent, awaiting final ACK) unresolved.'
  ),
  createQuestion(
    'qn-em3-98',
    'What describes the "Weaponization" stage under the standard 7-stage Cyber Kill Chain?',
    [
      'Passive research compiled over victim DNS records.',
      'Pairing an exploit mechanism with a malicious payload (like a backdoor Trojan) inside a seemingly benign file package.',
      'The action of transmitting a phishing email to target recipients.',
      'Installing registry persistence keys on compromised servers.'
    ],
    1,
    'Weaponization is the phase where an exploit and payload are coupled into a transportable file package (like a document macro or PDF).'
  ),
  createQuestion(
    'qn-em3-99',
    'What technical control prevents users from reusing old passwords under enterprise authentication guidelines?',
    ['Enforcing Password Complexity parameters', 'Enforcing Password History registries', 'Enforcing Account Lockout timers', 'Enforcing MFA biometric logs'],
    1,
    'Enforcing password history keeps a listing of previously used passwords, forcing the user to create completely unique passwords.'
  ),
  createQuestion(
    'qn-em3-100',
    'A security engineer conducts a vulnerability assessment on internal payroll databases. They locate a critical missing software update on SQL cluster nodes. How is this risk factor classified?',
    ['A threat vector', 'A system vulnerability', 'An asset value parameter', 'An incident indicator of compromise'],
    1,
    'A missing security patch or software flaw represents a system Vulnerability (a weakness that could potentially be exploited by a threat).'
  )
];
