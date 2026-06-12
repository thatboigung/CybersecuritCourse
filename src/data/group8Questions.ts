import { QuizQuestion } from '../types';

const createQuestion = (id: string, text: string, options: string[], correctAnswerIndex: number, explanation: string): QuizQuestion => ({
  id, text, options, correctAnswerIndex, explanation
});

// ========================================================
// CAPSTONE PROJECTS INDIVIDUAL TOPIC QUIZZES (4 Qs Each)
// ========================================================

// Project 1: Multi-VLAN Router-on-a-Stick Network Design
export const project1Quiz: QuizQuestion[] = [
  createQuestion(
    'p1-q1',
    'When configuring a Router-on-a-Stick topology for inter-VLAN routing, what must be configured on the physical router interface?',
    ['A separate physical cable for each VLAN', '802.1Q encapsulation on logical subinterfaces', 'A dynamic routing protocol like OSPF on every port', 'Static MAC addresses mapping for all clients'],
    1,
    'Router-on-a-Stick splits a single physical trunk link into multiple logical subinterfaces, each configured with 802.1Q encapsulation matching its corresponding VLAN ID.'
  ),
  createQuestion(
    'p1-q2',
    'What is the primary security limitation of a basic Router-on-a-Stick VLAN layout if no access control measures are taken?',
    ['Physical layer loop creation', 'VLAN hopping is automatically enabled', 'Routing is active by default between all subinterfaces unless firewalls or ACLs block it', 'MAC flooding attacks bypass the router entirely'],
    2,
    'Since the router inherently routes packets between its active subinterfaces, inter-VLAN traffic will flow unimpeded unless Access Control Lists (ACLs) or stateful host firewall rules are explicitly configured.'
  ),
  createQuestion(
    'p1-q3',
    'Which command on a Cisco IOS switch designates a port to carry frames from multiple VLANs to the Router-on-a-Stick gateway interface?',
    ['switchport mode access', 'switchport mode trunk', 'switchport voice vlan', 'no switchport'],
    1,
    'Switch port trunk mode (switchport mode trunk) allows the port to bundle and transmit traffic tagged with different VLAN IDs over a single logical flow.'
  ),
  createQuestion(
    'p1-q4',
    'In a Router-on-a-Stick setup, what IP address serves as the default gateway for client workstations connected inside VLAN 20?',
    ['The IP address of the switch virtual interface (SVI)', 'The IP address configured on the routers physical interface slot', 'The IP address configured on the router subinterface assigned to VLAN 20', 'The loopback interface 127.0.0.1 IP address'],
    2,
    'Workstations inside a specific VLAN must route outbound traffic through their local default gateway, which is the IP assigned to the router subinterface configured for that VLAN.'
  )
];

// Project 2: Wazuh SIEM Pipeline Ingestion & Analytics
export const project2Quiz: QuizQuestion[] = [
  createQuestion(
    'p2-q1',
    'Which component of an ELK + Wazuh architecture is responsible for capturing local security logs and pushing them securely to the central manager?',
    ['Elasticsearch server', 'Kibana console dashboard', 'Wazuh Agent daemon', 'Logstash parsing engine'],
    2,
    'The Wazuh Agent is installed on end systems to continuously read local syslogs, monitor processes, verify file integrity, and stream them back to the manager.'
  ),
  createQuestion(
    'p2-q2',
    'Which format is standard for the indexed event data stored inside the Elasticsearch/OpenSearch database?',
    ['Raw untransformed Syslog text strings', 'Structured JSON documents', 'Encrypted binary BLOB dumps', 'Comma Separated Values (CSV) datasets'],
    1,
    'Log indices are normalized, parsed with grok/decoders, and stored in Elasticsearch as structured JSON documents for efficient searching and querying.'
  ),
  createQuestion(
    'p2-q3',
    'An analyst wants to auto-correlate active brute force login attempts to isolate a suspect source. What is the fundamental mechanism Wazuh uses to raise these alerts?',
    ['Dynamic AI simulation triggers', 'Heuristic manual kernel tracing', 'Decoders matching log fields paired with XML rule logic matches', 'Continuous TCP SYN port scans across hosts'],
    2,
    'Wazuh uses decoders to extract fields from logs and matches them against pre-configured XML rules expressing threshold logic (e.g., eight failed logins in 30 seconds).'
  ),
  createQuestion(
    'p2-q4',
    'How does a Wazuh Agent securely guarantee the confidentiality of log events transmitted over the network back to the master?',
    ['Cleartext standard Syslog on UDP 514', 'Encrypted TLS channels with mutual authentication (mTLS)', 'Local SSH remote port-forward tunnels', 'Unicast block hashing over IPSEC'],
    1,
    'Wazuh utilizes TLS-encrypted communications, enforcing mutual authentication (mTLS) with certificates to prevent unauthorized packet eavesdropping or tampering.'
  )
];

// Project 3: Enterprise SSO & Authentication Gateway
export const project3Quiz: QuizQuestion[] = [
  createQuestion(
    'p3-q1',
    'Which open standards-based token format is most commonly used to securely exchange identity assertions in Web SSO modern API protocols like OIDC?',
    ['Base64 raw user-agent strings', 'JSON Web Tokens (JWT)', 'SAML XML assertions', 'SHA-1 hash signatures'],
    1,
    'Modern OpenID Connect (OIDC) protocols use digitally signed JSON Web Tokens (JWT) containing cryptographically verified identity claims.'
  ),
  createQuestion(
    'p3-q2',
    'What role does OAuth 2.0 perform compared to standard OpenID Connect (OIDC)?',
    ['OIDC handles authorization, OAuth 2.0 handles authentication', 'OAuth 2.0 is an authorization delegation framework, while OIDC adds an identity layer for authentication on top of it', 'OAuth 2.0 validates cryptographic keys, OIDC manages certificates', 'OAuth 2.0 is exclusive to XML structures'],
    1,
    'OAuth 2.0 is designed purely for authorization (granting access tokens), while OIDC sits directly on top of it to introduce standardized identity parameters and ID Tokens.'
  ),
  createQuestion(
    'p3-q3',
    'How does a Single Sign-On Gateway securely verify that a JWT submitted by a client has not been tampered with or modified?',
    ['By querying the server database for every API call', 'By validating the JWT cryptographic signature matches the public key of the Identity Provider (IdP)', 'By enforcing a complex password input on every HTTP socket', 'By re-encrypting the whole file payload with AES-256 keys'],
    1,
    'Gateways decode the JWT header and verify its digital signature using the Identity Provider (IdP) public key (e.g., using JWKS), preventing unauthorized payload modifications.'
  ),
  createQuestion(
    'p3-q4',
    'Which OAuth 2.0 credential authorization grant parameter is safest for client-side single page applications (SPAs) to mitigate browser credential leakage?',
    ['Resource Owner Password Credentials Grant', 'Implicit Grant (without proofing)', 'Authorization Code Grant with PKCE (Proof Key for Code Exchange)', 'Client Credentials Grant on public terminals'],
    2,
    'Authorization Code Grant paired with PKCE (Proof Key for Code Exchange) eliminates the need to expose client secrets in client-side code, rendering interception vectors useless.'
  )
];

// Project 4: Enterprise CA & Automated Certificate Rotation
export const project4Quiz: QuizQuestion[] = [
  createQuestion(
    'p4-q1',
    'In a classic two-tier Public Key Infrastructure (PKI) design, where should the Root Certificate Authority (Root CA) private keys remain stored?',
    ['In a hot, load-balanced web server memory stack', 'On an offline system, physically isolated from any corporate networks, preferably inside a hardware HSM', 'Stored securely on the gateway edge DNS server cache', 'Distributed across active client workstation registry hives'],
    1,
    'The Root CA is the trust anchor of the organization. To prevent catastrophic compromise, its private key must reside strictly offline (air-gapped) and be accessible only for signing Subordinate CA certificates.'
  ),
  createQuestion(
    'p4-q2',
    'Which ACME protocol operation allows external servers to automatically request, verify, and receive signed TLS certificates from a CA?',
    ['Setting manual DNS TXT records every month', 'HTTP-01 or DNS-01 challenges validating control of the domain name', 'Pre-sharing SSH private keys with the certificate authority', 'Submitting cleartext admin login scripts to the registry'],
    1,
    'The Automated Certificate Management Environment (ACME) protocol validates target host ownership via automated challenges (like proofing a file on an HTTP route or setting an ephemeral DNS record).'
  ),
  createQuestion(
    'p4-q3',
    'Which standard is used to denote the structure and formatting of public key certificates online?',
    ['ISO-27001 models', 'X.509 v3 specification', 'RFC-1918 allocations', 'W3C XML schema'],
    1,
    'The X.509 standard defines the format and digital structure of public key certificates, listing variables like Serial Numbers, Issuers, Subjects, and Extensions.'
  ),
  createQuestion(
    'p4-q4',
    'Why is establishing a short lifespan (e.g., 90 days) for SSL/TLS certificates considered a superior security posture over legacy multi-year certificates?',
    ['It reduces internet traffic routing overhead', 'It limits the window of opportunity for exposed private keys and automates renewal pathways to prevent sudden expirations', 'It forces domain registrar transactions to happen faster', 'It enables stronger encryption modes that only work in the winter'],
    1,
    'Short certificate lifespans restrict the damage of key breaches or leaks, and mandate automated tools (like Certbot) which robustly standardizes certificate rotational hygiene.'
  )
];

// Project 5: Automated Scanner & Exploit Intelligence Dashboard
export const project5Quiz: QuizQuestion[] = [
  createQuestion(
    'p5-q1',
    'Which component of an automated vulnerability scanning module converts raw API scanner JSON outputs into security risk priorities?',
    ['Raw Port Scanners', 'Aggregation Parser mapping CVE records to CVSS metric ratings', 'Network Packet Sniffers', 'WAF Filter blocks'],
    1,
    'An aggregation parser ingests raw scanner files, extracts vulnerability indexes (CVEs), reads Common Vulnerability Scoring System (CVSS) scores, and maps out actual remediation priorities.'
  ),
  createQuestion(
    'p5-q2',
    'An exploit proof-of-concept payload targeting a CVE is launched. What is the standard directory structure used to search for known exploit assets?',
    ['GitHub issues', 'Exploit Database (Exploit-DB) / Metasplat indices', 'NIST National Vulnerability Database (NVD) registry archives', 'Microsoft Technet Blogs'],
    1,
    'Exploit databases and framework indexes catalog ready-to-detonate proof-of-concept exploits mapped directly to matching vulnerability indexes.'
  ),
  createQuestion(
    'p5-q3',
    'In dynamic vulnerability modeling, which CVSS v3 score range represents a "Critical" rated threat requiring immediate out-of-band resolution?',
    ['7.0 - 8.9', '4.0 - 6.9', '9.0 - 10.0', '1.0 - 3.9'],
    2,
    'CVSS v3 vulnerability severity rankings define scores from 9.0 to 10.0 as Critical threats, typically granting immediate remote code access to adversaries.'
  ),
  createQuestion(
    'p5-q4',
    'What is the danger of executing intrusive vulnerability auditing tools directly on real production databases during high-traffic company operational hours?',
    ['It drains database cloud storage space permanently', 'It risks system performance starvation, crash scenarios, or triggering alert loops that shadow real attackers', 'It instantly corrupts SSL cert public files', 'It invalidates the entire core DNS resolver setup'],
    1,
    'Heavy exploitation probes, buffer injection tests, or multi-threaded port scans can saturate active server sockets, degrade performance, or trigger system crashes.'
  )
];

// Project 6: DevSecOps CI/CD Security Pipeline
export const project6Quiz: QuizQuestion[] = [
  createQuestion(
    'p6-q1',
    'What is the architectural difference between SAST (Static Application Security Testing) and DAST (Dynamic Application Security Testing) within a CI/CD build framework?',
    ['SAST scans running cloud servers, DAST audits static local disks', 'SAST evaluates source code offline without executing it, while DAST scans the compiled, running application to simulate active attacks', 'SAST targets networking configurations, DAST targets database indexes', 'SAST is manual code analysis, DAST is fully automated'],
    1,
    'Static analysis (SAST) inspects raw lines of source code for security patterns or syntax holes before compilation, while Dynamic testing (DAST) interacts with a live running deployment to discover runtime issues.'
  ),
  createQuestion(
    'p6-q2',
    'Which testing methodology scans container base images (e.g., Dockerfiles) in the pipeline to flag outdated host libraries or vulnerable operating packages?',
    ['Static Code Linting', 'Software Composition Analysis (SCA) & Container Image Scanning', 'Cross-Site Scripting filtering modules', 'Static SAST code crawls'],
    1,
    'Software Composition Analysis (SCA) and container scanners (like Trivy or Anchore) inspect bundled third-party dependencies and operating system layers within container images for known vulnerabilities.'
  ),
  createQuestion(
    'p6-q3',
    'What should the pipeline build scripts do if a SAST scanner finds a newly-committed CVSS 10.0 Critical SQL Injection vulnerability in the pipeline code?',
    ['E-mail the database team and deploy the code base anyway', 'Automatically break (fail) the build pipeline, preventing compilation or deployment to staging/production environment', 'Ignore the trace and flag it on the monthly meeting', 'Run an online ping test to check the routing gateway'],
    1,
    'A robust DevSecOps pipeline enforces quality gates that break the build to prevent severe, exploitable security holes from advancing to live staging or production stages.'
  ),
  createQuestion(
    'p6-q4',
    'Which practice securely delivers application API secrets (such as DB passwords) to runtime containers without saving them in the git repository modules?',
    ['Hardcoding credentials in utility files and committing to index', 'Injecting secrets via secure platform environment parameters or specialized managers (HashiCorp Vault, AWS Secrets Manager)', 'Writing credentials inside a shared text document inside the public static folder', 'Encapsulating secret bytes inside custom docker files'],
    1,
    'Secrets must never be stored in plain text repositories. They should be dynamically injected as environment variables at run time using a hardware security module or container orchestration keys manager.'
  )
];

// Project 7: Sandbox Malware Detonation & Volatility Memory Forge
export const project7Quiz: QuizQuestion[] = [
  createQuestion(
    'p7-q1',
    'Which software design is used by malware sandboxes (like any.run) to isolate malicious runtime routines from infecting physical server workstations?',
    ['Using Virtual Private Networks with OSPF', 'Deploying isolated virtualization machines protected by secure hypervisors with host filesystem separation', 'Applying complex BIOS permissions overrides', 'Running files using normal local command prompts'],
    1,
    'Sandboxes run unsafe code inside ephemeral virtual instances, separating execution and trapping network/reconstructive events on safe, throwaway nodes.'
  ),
  createQuestion(
    'p7-q2',
    'An analyst captures a raw `.raw` file image of memory RAM. Which suite is specifically designed to parse memory indicators like active processes or socket files directly from RAM?',
    ['Wireshark Analyzer', 'Volatility memory forensics framework', 'FTK Imager default backup tool', 'Autopsy file metadata carver'],
    1,
    'Volatility is the preeminent open-source memory analysis tool used to extract active execution processes (£pslist), open connections (£netscan), and memory DLL states.'
  ),
  createQuestion(
    'p7-q3',
    'Why is analyzing volatile RAM memory dumps crucial when tracing stealthy fileless malware binaries?',
    ['RAM dumps are lighter than local storage folders to store', 'Fileless malware hides in active memory and leaves no executable footprints on the physical hard disk drives', 'RAM processes are easily read using direct Windows text files', 'Memory images contain static network routing tables'],
    1,
    'Stealthy malware executes directly in memory (via process injection or living-off-the-land techniques), meaning physical storage scans will often find zero files to flag.'
  ),
  createQuestion(
    'p7-q4',
    'When a malware sample is detonated, what network mechanism is commonly deployed in virtual test labs to prevent command-and-control payloads from escaping to the real world?',
    ['Direct routing bridges to local corporate gateways', 'Simulated, isolated mock networks (e.g., INetSim) to spoof DNS replies and loop physical web calls locally', 'A standard NAT connection with DNS fallback to Google public DNS', 'Dynamic dynamic host allocation via DHCP'],
    1,
    'Lab engineers use local offline network simulation systems (like INetSim) to mimic DNS, ICMP, and HTTP servers, trapping hostile malware traffic inside the sandbox network frame.'
  )
];

// Project 8: Secure API Gateway with OWASP Defenses
export const project8Quiz: QuizQuestion[] = [
  createQuestion(
    'p8-q1',
    'In Web application security, which mechanism restricts browser web pages from executing unauthorized scripts on your API unless explicitly allowed?',
    ['Cross-Origin Resource Sharing (CORS) policy structures', 'Structured Query Language (SQL) input parsing', 'Rate Limiting socket thresholds', 'JSON Web Signatures (JWT) signatures'],
    0,
    'CORS header parameters (such as Access-Control-Allow-Origin) control which external domains are permitted to initiate downstream browser-based API calls.'
  ),
  createQuestion(
    'p8-q2',
    'How do parameterized queries (Prepared Statements) prevent catastrophic SQL Injection vulnerabilities on user input fields?',
    ['By compiling input vectors to local CSS formatting frameworks', 'By treating user inputs strictly as parameters (text data) rather than executing them as runnable SQL queries', 'By wrapping the query inside public JWT keys', 'By blocking any input strings that are longer than 15 characters'],
    1,
    'Prepared statements pre-compile the SQL template on the database server. This treats client entries purely as non-executable variables, neutralising command Injection attempts.'
  ),
  createQuestion(
    'p8-q3',
    'Which defense mechanism protects APIs from Denial of Service (DoS) socket starvation and automated brute-force scripts?',
    ['Using SHA-256 password hashes', 'Applying sliding-window Token Bucket rate limiters to track and restrict client IP API limits', 'Setting up multiple subinterfaces on routers', 'Rotating TLS certificates via ACME tools'],
    1,
    'Dynamic rate limiters monitor client IP limits or authentication scopes, throttling excessive request rates (e.g., returning HTTP 429 Too Many Requests) to keep endpoints stable.'
  ),
  createQuestion(
    'p8-q4',
    'Which OWASP core payload defense prevents attackers from injecting malicious scripting files into input forms that execute inside other visiting users browsers?',
    ['Input validation paired with strict HTML output encoding', 'Writing database indexes in cleartext', 'Binding standard static subinterfaces on local networks', 'Adding verbose console system logs'],
    0,
    'Enforcing strict output encoding (escaping special characters like `<` and `>`) prevents malicious scripts from executing, neutralizing Cross-Site Scripting (XSS) threats.'
  )
];

// Project 9: Secure Site-to-Site WireGuard/IPsec Gateway
export const project9Quiz: QuizQuestion[] = [
  createQuestion(
    'p9-q1',
    'What are the two core operation protocols utilized in standard IPsec configurations to manage security headers and coordinate payload encryption?',
    ['TCP Port 80 and HTTP redirect headers', 'Authentication Header (AH) and Encapsulating Security Payload (ESP)', 'Routing Information Protocol (RIP) and OSPF rules', 'L2TP and Point-to-Point Tunneling protocol'],
    1,
    'Authentication Header (AH) provides data integrity and endpoint authentication, while Encapsulating Security Payload (ESP) handles symmetric encryption of IP datagrams.'
  ),
  createQuestion(
    'p9-q2',
    'Which cryptographic framework is preferred by WireGuard for fast, modern symmetric key encryption performance compared to legacy complex algorithms?',
    ['Triple DES (3DES)', 'ChaCha20-Poly1305 authenticated encryption', 'Base64 rotational key streams', 'MD5 checksum mapping'],
    1,
    'WireGuard utilizes modern, performant crytographic primitives like ChaCha20 for symmetric encryption and Poly1305 for data integrity authentication, bypassing the heavy overhead of IPsec.'
  ),
  createQuestion(
    'p9-q3',
    'In a Site-to-Site VPN tunnel topology, how do local clients on separate subnets route traffic over the secure encrypting tunnel?',
    ['By executing manual browser login procedures', 'Using route entries that point target remote subnet segments straight to the gateway security appliance interface', 'By establishing remote terminal loops internally', 'By deleting local routing rules to gateway portals'],
    1,
    'The local routing configurations must list the target corporate branch network block (e.g. 10.100.0.0/16) and set the local VPN gateway appliance interface as the logical route next hop.'
  ),
  createQuestion(
    'p9-q4',
    'What role does the Internet Key Exchange (IKE) protocol perform during the initial phase of configuring a secure IPsec tunnel?',
    ['It checks MAC address hardware lists', 'It handles secure peer-to-peer authentication, negotiates cryptographic keys, and establishes the Security Association (SA)', 'It converts web layouts to structured JSON outputs', 'It applies OSPF dynamic network maps to active servers'],
    1,
    'IKE (Phases 1 & 2) authenticates both tunnel endpoints, generates shared keys over Diffie-Hellman matrices, and configures the parameters for ESP packets.'
  )
];

// Project 10: Honeynet & Cyber Threat Intelligence Feeds
export const project10Quiz: QuizQuestion[] = [
  createQuestion(
    'p10-q1',
    'What is the fundamental objective of setting up active low-interaction honeypot nodes inside defensive corporate DMZs?',
    ['Exposing customer databases to public search indexes', 'Deploying decoy systems to lure and study attacker techniques while generating custom Indicators of Compromise (IoCs)', 'Running high-performance cloud backups to store logs', 'Mapping internal routers using traceroute ICMP rules'],
    1,
    'Honeypots imitate real, vulnerable network targets to capture attacker scripts, credentials, and traffic paths, feeding useful threat intelligence to defense systems.'
  ),
  createQuestion(
    'p10-q2',
    'Which structural classification defines a honeypot that runs a real operating system and physical database with complete client interaction levels?',
    ['Medium-Interaction Honeypot systems', 'High-Interaction Honeypot platforms', 'Virtual Loopback interfaces', 'Decoupled static text files'],
    1,
    'High-interaction honeypots run complete, real operating environments (such as a full Windows 10 VM) to analyze deep lateral movements, rootkit installations, and zero-day exploits.'
  ),
  createQuestion(
    'p10-q3',
    'When collecting attack logs from network honeypots, what formatting schema is universally used to structure Threat Intelligence feeds (CTIs) for automated consumption?',
    ['NIST SP 800-53 controls tables', 'STIX (Structured Threat Information eXpression) mapped over TAXII server transports', 'SQL database dumps transmitted via plain emails', 'CSV lists stored on local desks'],
    1,
    'The Structured Threat Information eXpression (STIX) is the preeminent XML/JSON framework used to document indicators, attack patterns, and malware hashes, delivered over trust server pipelines (TAXII).'
  ),
  createQuestion(
    'p10-q4',
    'What is the host routing risk of a poorly-monitored high-interaction honeypot connected directly to internal workstation interfaces?',
    ['Attackers can compromise the high-interaction node and pivot (laterally leap) out of the honeypot to attack real corporate network assets', 'It limits the router subinterfaces routing speeds', 'It invalidates the Root Certificate Authority keys', 'It forces all client servers to go offline permanently'],
    0,
    'A high-interaction honeypot is a fully functional host. If an attacker gains administrator rights, they can use it as an internal launchpad unless strict network segregation limits egress pathways.'
  )
];


// ========================================================
// COMPREHENSIVE MASTER CAPSTONE / DISSERTATION DEFENSE EXAM (30 Qs)
// ========================================================
export const group8MasterExamQuestions: QuizQuestion[] = [
  createQuestion(
    'g8-ex-1',
    'In designing an enterprise network, you plan to implement inter-VLAN routing using a Layer 3 Switch instead of a Router-on-a-Stick gateway. What logical interface is configured on the switch to route traffic for specific VLAN subnets?',
    ['Router subinterface slot', 'VLAN Trunk Port binding', 'Switch Virtual Interface (SVI)', 'Physical interface mapped to access mode'],
    2,
    'Layer 3 switches route inter-VLAN traffic through logical interfaces called Switch Virtual Interfaces (SVIs), which correspond to specific VLAN configurations.'
  ),
  createQuestion(
    'g8-ex-2',
    'To secure a multi-VLAN trunk connection between a Layer 2 switch and an edge router, which VLAN-based security practice is most critical to prevent double-tagging VLAN hopping attacks?',
    ['Re-enable dynamic trunking protocol (DTP) globally', 'Force active trunk interfaces to use the Default VLAN (VLAN 1) as the native VLAN', 'Change the Native VLAN to an unused, dedicated non-default VLAN ID and block VLAN 1 traffic', 'Apply OSPF encryption keys to the subinterfaces'],
    2,
    'Double-tagging attacks exploit switch trunk configurations where VLAN 1 is left as the Native VLAN. Retuning the Native VLAN to a dedicated, unused ID stops trunk switches from stripping tags incorrectly.'
  ),
  createQuestion(
    'g8-ex-3',
    'What are the security and performance effects of routing inter-VLAN traffic across a single physical trunk link using a Router-on-a-Stick setup compared to a core Layer 3 Switch cluster?',
    ['Router-on-a-Stick provides hardware-level routing speeds that exceed Layer 3 switches', 'Router-on-a-Stick creates a single physical bandwidth bottleneck and a single point of failure (SPOF) on the interface link', 'Router-on-a-Stick requires OSPF path allocations to bind Layer 2 keys', 'Router-on-a-Stick bypasses all MAC layer flood security parameters'],
    1,
    'Because a Router-on-a-Stick setup forces all VLAN traffic over a single physical link to the router, it represents a performance bottleneck and a critical single point of failure.'
  ),
  createQuestion(
    'g8-ex-4',
    'You are configuring a SIEM daemon rule to detect Brute Force login attempts. What metric should be modeled in the rule triggers to prevent false alarms on high-user enterprise directories?',
    ['Total login volume per hour across the active network', 'Tracking failed attempts per singular source IP address or user account within a specific time window', 'Logging database transactions that execute within 5 seconds', 'Matching SSH hostnames against public lists'],
    1,
    'A robust SIEM alert rule isolates brute-force activity by tracking failed login events matched to a single IP address or client account within a short, defined window.'
  ),
  createQuestion(
    'g8-ex-5',
    'In a Wazuh/ELK SIEM deployment, you observe that logs from several remote offices have stopped arriving. Which verification step is most critical to diagnose network connectivity to the Wazuh Manager?',
    ['Flushing local DNS cache on active workstation terminals', 'Checking firewall rulesets for UDP Port 514 (Syslog) and TCP Port 1514 (Wazuh Agent communication)', 'Rebuilding Elasticsearch database JSON index layouts', 'Revoking the root SSL certificate of the authority'],
    1,
    'The Wazuh agent communicates with the manager over TCP port 1514, and legacy logs typically use syslog output over port 514. Unblocking these firewall ports is critical.'
  ),
  createQuestion(
    'g8-ex-6',
    'To guarantee the integrity of logs stored inside Elasticsearch, preventing malicious rogue elements from deleting evidence, which database and security configuration is best?',
    ['Host the entire cluster on the workstation local C: folders', 'Enforce robust Index Lifecycle Management (ILM) and read-only indexes, and forward logs to a write-once, read-many (WORM) storage node', 'Grant all local servers database root administration credentials', 'Store all transaction logs in simple unencrypted CSV logs'],
    1,
    'Securing forensics repositories demands limiting database write rights, configuring write-once (WORM) storage paradigms, and ensuring read-only permissions for analyst query accounts.'
  ),
  createQuestion(
    'g8-ex-7',
    'When implementing OAuth 2.0 Client credentials flow to authorize an internal server-to-server API daemon, what token is directly retrieved from the Identity Provider?',
    ['SAML Assertions string', 'Identity ID Token', 'Access Token (JWT)', 'Authorization Code credentials'],
    2,
    'The Client Credentials grant is used for server-to-server daemons, bypassing the user-delegated authorization code step to obtain an Access Token (JWT) directly.'
  ),
  createQuestion(
    'g8-ex-8',
    'A developer wants to implement single-point Single Sign-On (SSO) authentication across several legacy apps running inside isolated networks. Which federated protocol relies on XML metadata exchanges between a Service Provider and Identity Provider?',
    ['OpenID Connect (OIDC)', 'OAuth 2.0 Code Flow', 'SAML 2.0 (Security Assertion Markup Language)', 'JSON Web Encryption (JWE) standards'],
    2,
    'SAML 2.0 exchanges XML assertions containing identity and authorization claims between the Identity Provider (IdP) and Service Provider (SP), a standard in legacy enterprise networks.'
  ),
  createQuestion(
    'g8-ex-9',
    'What vulnerability is created if an OAuth 2.0 redirection URI whitelist is configured loosely, such as allowing wildcard redirects `https://*.example.com/callback`?',
    ['Denial of Service on the identity endpoints', 'An attacker can intercept the authorization code by redirecting clients to a malicious subdomain they control', 'It leads to hardware MAC address theft', 'It corrupts the active directories database tables'],
    1,
    'A loose redirect URI whitelist allows attackers to register or hijack subdomains under the wildcard pattern, intercepting OAuth authorization codes to compromise accounts.'
  ),
  createQuestion(
    'g8-ex-10',
    'In a Public Key Infrastructure (PKI) deployment, why is a subordinate Intermediate CA designed to handle certificate signing requests instead of using the Root CA?',
    ['Intermediate CAs generate smaller file key sizes', 'To protect the Root CA private key from network-based exploits and simplify revocations if the intermediate keys are leaked', 'Because Root CAs cannot sign modern X.509 v3 certificates', 'To reduce client browser validation times'],
    1,
    'An Intermediate CA acts as an operational buffer. Holding the Root CA offline prevents total compromise of the organization\'s trust anchor if an online subordinate CA is compromised.'
  ),
  createQuestion(
    'g8-ex-11',
    'When deploying an automated ACME cert pipeline (such as Let\'s Encrypt) for an internal application server, which challenge requires you to configure custom DNS records to prove domain ownership?',
    ['HTTP-01 Challenge', 'DNS-01 Challenge', 'TLS-ALPN-01 Challenge', 'REST API Challenge'],
    1,
    'The DNS-01 challenge proves domain ownership by requiring the ACME client to write a specific TXT record containing a token under the target domain\'s DNS zone.'
  ),
  createQuestion(
    'g8-ex-12',
    'You are configuring a Certificate Revocation List (CRL) for an enterprise. Which mechanism is a superior, real-time alternative that queries online certificate state endpoints directly without downloading massive CRL files?',
    ['Online Certificate Status Protocol (OCSP) Stapling', 'ACME Automated Certificate Manager', 'Using larger public keys on Root CAs', 'Standard local host DNS lookups'],
    0,
    'OCSP allows clients to query real-time certificate status, and OCSP Stapling allows the web server to fetch and "staple" this signed status assertion directly in the TLS handshake.'
  ),
  createQuestion(
    'g8-ex-13',
    'You are writing an automated tool that flags vulnerability severity using CVSS v3 vectors. How does CVSS differentiate the "Exploitability" metric from the "Impact" metric?',
    ['Exploitability measures physical weight, Impact measures logical speed', 'Exploitability evaluates technical difficulty, vectors, and authentication requirements; Impact measures the consequences to Confidentiality, Integrity, and Availability', 'Exploitability targets external networks; Impact evaluates internal server configurations', 'Exploitability is calculated by software; Impact is determined by human analysts'],
    1,
    'Exploitability assesses how easily a vulnerability can be targets (Attack Vector, Complexity, Privileges). Impact measures the damage to the CIA triad if the exploit succeeds.'
  ),
  createQuestion(
    'g8-ex-14',
    'During manual exploit research, you discover a memory buffer disclosure inside an API endpoint. Which CVSS metric captures the risk of an attacker accessing RAM memory containing external database passwords?',
    ['Incomplete Integrity Impact', 'High Confidentiality Impact', 'Base Availability Impact', 'User Privilege Escalation'],
    1,
    'Disclosing sensitive secrets from RAM represents a direct compromise of data privacy, mapped to a High Confidentiality Impact rating in the CVSS system.'
  ),
  createQuestion(
    'g8-ex-15',
    'Why is prioritizing vulnerabilities based purely on a "CVSS score higher than 7.0" rule considered inefficient for modern operations security teams?',
    ['Vulnerabilities under 7.0 cannot be exploited', 'It ignores actual exploit availability in the wild and the real context of your internal assets and configurations (EPSS scoring is ignored)', 'It requires high-performance servers to calculate scores', 'It corrupts standard local network routing maps'],
    1,
    'A CVSS score measures severity, not active threat exploitation risk. Combining CVSS with EPSS (Exploit Prediction Scoring System), asset value, and wild exploits yields efficient remediation paths.'
  ),
  createQuestion(
    'g8-ex-16',
    'In a modern DevSecOps deployment pipeline, where is the most efficient stage to execute SAST (Static Application Security Testing) tools to minimize patching costs?',
    ['Directly in production using active database scans', 'At the commit stage (pre-receive hook or immediate pull request pipeline build) as code is written', 'Immediately before the annual compliance audit window', 'During live penetration testing sessions inside local staging environments'],
    1,
    'Running SAST early in the developer workflow (the commit/PR phase) catches security holes immediately, reducing patching complexity compared to fixing production code.'
  ),
  createQuestion(
    'g8-ex-17',
    'How does Software Composition Analysis (SCA) protect cloud app nodes from supply chain attacks?',
    ['It audits local physical firewalls', 'It scans and inventories nested open-source third-party dependencies for known vulnerabilities (CVEs) and licensing risks', 'It tracks active memory RAM states dynamically', 'It locks down client-side browser files with CORS headers'],
    1,
    'SCA tools inspect bundled libraries (e.g., node_modules or pip bundles) against threat databases to ensure developers are not importing code containing severe known vulnerabilities.'
  ),
  createQuestion(
    'g8-ex-18',
    'What is the security advantage of using ephemeral container runners inside isolated build networks to compile CI/CD application code?',
    ['It limits compiling memory requirements', 'It isolates the build process, preventing compromised dependencies from persisting or accessing other corporate pipelines and secrets', 'It disables OSPFs inter-subnet routing links', 'It automatically signs all public SSL certs'],
    1,
    'Ephemeral build environments spin up clean, throw away resources for each run, ensuring that compromised third-party packages cannot plant persistent backdoors on the build server.'
  ),
  createQuestion(
    'g8-ex-19',
    'A DFIR engineer is analyzing a server memory dump in Volatility. Which plugin isolates active TCP listeners and established socket connections within the target host RAM?',
    ['connections-list', 'netscan', 'pslist', 'dlllist'],
    1,
    'The "netscan" plugin in Volatility scans raw memory blocks to reconstruct active and historical TCP/UDP sockets, client interfaces, and originating process PIDs.'
  ),
  createQuestion(
    'g8-ex-20',
    'During malware analysis, you discover a registry key writing `HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run` referencing an unknown DLL file. What capability does this trace indicate?',
    ['Volatile memory capture', 'System Persistence (causing the payload to execute automatically upon system boot-up)', 'ACME automated certificate lookup', 'Host level Rate Limiting configuration'],
    1,
    'The Windows `Run` registry hive is a standard target for system persistence. Programs listed here automatically launch on system boot-up.'
  ),
  createQuestion(
    'g8-ex-21',
    'Why must malware detonation operations occur on host virtual systems configured with host-only non-recursive host-only network designs?',
    ['To speed up the virtual machine execution speeds', 'To prevent wormable or automated ransomware payloads from scanning and infecting real internal enterprise subnet systems', 'To avoid local disk drive wear leveling problems', 'To facilitate faster public DNS resolution times'],
    1,
    'Stealthy malware can scan internal networks and launch wormable attacks. Restricting virtual environments to isolated, host-only configurations keeps the real subnet safe.'
  ),
  createQuestion(
    'g8-ex-22',
    'How does an API gateway configured with a Token Bucket rate limiter mitigate distributed denial of service (DDoS) credential stuffing attempts?',
    ['By executing SSH key validations dynamically', 'By limiting the rate of API calls from a single IP or access token, returning HTTP 429 once token buckets empty', 'By changing default VLAN gateways', 'By writing text records to external DNS zones'],
    1,
    'Token bucket algorithms allocate a pool of request tokens per client. Once exhausted, additional bursts are rejected with an HTTP 429 (Too Many Requests) until the tokens regenerate.'
  ),
  createQuestion(
    'g8-ex-23',
    'What security measure should be taken to prevent Cross-Site Scripting (XSS) attacks on API gateways that render user-submitted comments?',
    ['Encrypting client-side databases with AES-256', 'Strictly enforcing output encoding and applying Content Security Policy (CSP) headers to control script sources', 'Applying IPsec ESP encapsulation headers', 'Disabling dynamic host allocation on routing switches'],
    1,
    'Output encoding converts characters like `<` and `>` into HTML entities. Paired with a Content Security Policy (CSP), it stops the browser from executing untrusted scripts.'
  ),
  createQuestion(
    'g8-ex-24',
    'An attacker attempts to retrieve arbitrary server configurations via an API endpoint input query `file=../../../etc/passwd`. What category of attack is this?',
    ['Cross-Site Request Forgery (CSRF)', 'Directory Traversal (or Local File Inclusion)', 'SQL Injection (SQLi)', 'Symmetric Key depletion'],
    1,
    'Directory traversal exploits input parameters to navigate relative paths, accessing unauthorized system storage structures outside the web root folder.'
  ),
  createQuestion(
    'g8-ex-25',
    'In configuring a site-to-site IPsec routing gateway, you choose ESP over AH. What security loss occurs if ESP is deployed *without* encryption enabled (ESP NULL)?',
    ['Loss of data origin authentication', 'Loss of payload confidentiality', 'Loss of packet integrity verification', 'Loss of IP routing compatibility'],
    1,
    'ESP NULL provides data origin authentication and packet integrity protection but provides zero encryption, exposing the raw packets to eavesdroppers.'
  ),
  createQuestion(
    'g8-ex-26',
    'Which protocol is used by modern WireGuard VPN nodes to dynamically establish high-speed, secure symmetric session keys between peers?',
    ['Internet Key Exchange (IKEv2) handshake rules', 'Noise Protocol Framework key exchange', 'Base64 symmetric rotation indexes', 'Diffie Hellman over standard SAML files'],
    1,
    'WireGuard relies on the Noise Protocol Framework for key exchanges, delivering fast, simple handshakes that bypass the complexity of IKEv2.'
  ),
  createQuestion(
    'g8-ex-27',
    'Why is configuring "Perfect Forward Secrecy" (PFS) in secure VPN tunnel architectures considered a critical engineering standard?',
    ['PFS increases physical cable transmission speeds', 'It guarantees that a compromise of the long-term private key will not compromise past session keys or expose historical recordings', 'PFS automates local IP allocations via DHCP rules', 'PFS enforces mandatory WAF filters across core cloud systems'],
    1,
    'PFS derives unique keys for each session. If the server\'s main private key is breached later, previous sessions remain securely encrypted and unreadable.'
  ),
  createQuestion(
    'g8-ex-28',
    'You are creating a secure network segment honeynet. What is the difference in operational risks between low-interaction honeypots and high-interaction honeypots?',
    ['Low-interaction systems carry higher exploit risks because they execute real kernel processes', 'High-interaction nodes run complete, real operating environments that can be fully compromised and used to attack nearby systems if escape routes are unblocked', 'Low-interaction packages require dedicated hardware HSMs to start', 'High-interaction honeypots are static and do not generate telemetry logs'],
    1,
    'High-interaction honeypots present higher risk because they run full systems. Low-interaction honeypots only simulate service scripts, preventing malware from executing local host routines.'
  ),
  createQuestion(
    'g8-ex-29',
    'How does structured cyber threat intelligence mapping (like STIX structures) help an enterprise defensive team protect their networks?',
    ['By automating the generation of hardware MAC addresses', 'By standardizing the classification of threat actors, indicators (IoCs), and attack vectors for automated block ingestion in defensive firewalls', 'By providing offline virtual machines to students', 'By running traceroute diagnostics to WAN gateways'],
    1,
    'STIX/TAXII integrations allow machines to instantly share, understand, and defensive-block malicious IPs, domains, and malware hashes without human parsing lag.'
  ),
  createQuestion(
    'g8-ex-30',
    'With reference to final defense criteria, you deploy a multi-node honeynet. Which security architecture controls outgoing honeynet traffic to ensure malicious probes do not attack external targets?',
    ['Adding generic OSPF routing pathways', 'Implementing Honeywalls (strict firewall egress rulesets and rate-limiters on outgoing sockets)', 'Creating dynamic subinterfaces on switches', 'Switching the native VLAN back to VLAN 1'],
    1,
    'A Honeywall acts as a specialized egress security filter, monitoring and limiting outgoing traffic to prevent compromised honeypot instances from attacking external internet nodes.'
  )
];
