import { QuizQuestion } from '../types';

const createQuestion = (id: string, text: string, options: string[], correctAnswerIndex: number, explanation: string): QuizQuestion => ({
  id, text, options, correctAnswerIndex, explanation
});

// ========================================================
// QUIZ 1: CRYPTOGRAPHIC FOUNDATIONS (20 QUESTIONS)
// ========================================================
export const cryptographyBasicsQuestions: QuizQuestion[] = [
  createQuestion(
    'qn-cr-1',
    'Which mechanism directly addresses the issue of precomputed hash attacks such as Rainbow Tables by appending random values before hashing?',
    ['Symmetric Key Wrapping', 'Cryptographic Salting', 'Diffie-Hellman Key Exchange', 'ECC Digit Signatures'],
    1,
    'Cryptographic salting adds unique, randomized characters to cleartexts to ensure that identical passwords yield different, unpredictable hashes.'
  ),
  createQuestion(
    'qn-cr-2',
    'An administrator requires high-speed bulk encryption for database backup volumes at rest. Which standard is the most appropriate choice?',
    ['RSA-4096', 'AES-256', 'Diffie-Hellman', 'ECC'],
    1,
    'Symmetric block ciphers like AES-256 are computationally highly efficient and optimized for fast bulk data encryption.'
  ),
  createQuestion(
    'qn-cr-3',
    'Which cryptographic algorithm relies on the mathematical difficulty of factoring the product of two large prime numbers?',
    ['AES', 'ECC', 'RSA', 'Blowfish'],
    2,
    'RSA is an asymmetric algorithm whose security relies on the hardness of factoring huge semi-prime integers.'
  ),
  createQuestion(
    'qn-cr-4',
    'What describes the primary advantage of Elliptic Curve Cryptography (ECC) over traditional RSA algorithms?',
    ['ECC provides equivalent security with much smaller key sizes, reducing overhead.', 'ECC performs faster symmetric bulk stream processing.', 'ECC completely eliminates the requirement for digital certificates.', 'ECC is resistant to all future quantum computing attacks.'],
    0,
    'ECC offers high-strength cryptographic resilience with smaller key lengths, resulting in lower processing and bandwidth overhead.'
  ),
  createQuestion(
    'qn-cr-5',
    'In a Public Key Infrastructure (PKI), which entity is responsible for directly validating identity claims and issuing digital certificates?',
    ['Certificate Authority (CA)', 'Registration Authority (RA)', 'Key Escrow Agent', 'Vulnerability Scanner'],
    0,
    'The Certificate Authority (CA) serves as the trusted source that signs and issues digital certificates.'
  ),
  createQuestion(
    'qn-cr-6',
    'During a TLS handshake, how is the symmetric session key established securely between a web client and server?',
    ['Via unencrypted LDAP queries', 'Using the Diffie-Hellman key exchange or RSA public-key encryption', 'Through static pre-shared key registries', 'By broadcasting private keys across the gateway'],
    1,
    'Asymmetric mechanics (Diffie-Hellman or RSA-envelope) allow both endpoints to negotiate a shared symmetric session key without exposing it to eavesdroppers.'
  ),
  createQuestion(
    'qn-cr-7',
    'A developer scrambles their source code structure, changes variable names to random letters, and breaks execution paths without changing logical results. What is this called?',
    ['Cryptographic Hashing', 'Symmetric Encryption', 'Code Obfuscation', 'Asymmetric Key Wrapping'],
    2,
    'Code obfuscation deliberately scrambles program structures to hinder reverse-engineering while maintaining normal operational behavior.'
  ),
  createQuestion(
    'qn-cr-8',
    'Which digital certificate state indicates that a private key was compromised and the certificate must no longer be trusted prior to its scheduled expiration?',
    ['Expired', 'Revoked', 'Escrowed', 'Active'],
    1,
    'Revocation immediately invalidates a certificate\'s trust level before its original expiration timeline is reached.'
  ),
  createQuestion(
    'qn-cr-9',
    'Which client utility dynamically verifies certificate revocation status by sending real-time query requests to a responder maintained by the CA?',
    ['CRL File Sync', 'OCSP (Online Certificate Status Protocol)', 'Domain Name Parser', 'Symmetric GCM block'],
    1,
    'OCSP performs live, micro-queries to check certificate validity instantly, avoiding the need to parse large static CRL files.'
  ),
  createQuestion(
    'qn-cr-10',
    'Which algorithm is specifically designed to stretch user passwords slowly over thousands of iterations to prevent high-speed GPU cracking?',
    ['MD5', 'SHA-1', 'bcrypt', 'AES-GCM'],
    2,
    'Bcrypt (based on the Blowfish cipher) implements adaptive cost factors and key-stretching iterations to slow down offline brute-force attacks.'
  ),
  createQuestion(
    'qn-cr-11',
    'Which symmetric cipher mode of operation processes blocks individually and encrypts them using the product of the previous block, creating dependencies?',
    ['Electronic Codebook (ECB)', 'Cipher Block Chaining (CBC)', 'Galois/Counter Mode (GCM)', 'Stream-XOR Mode'],
    1,
    'CBC mode uses an Initialization Vector (IV) and chains each block\'s plaintext with the previous ciphertext, preventing identical patterns.'
  ),
  createQuestion(
    'qn-cr-12',
    'Why is Electronic Codebook (ECB) mode considered unsafe for encrypting complex graphic images?',
    ['It does not support AES-256 keys.', 'It encrypts identical blocks of plaintext into identical blocks of ciphertext, revealing structural patterns.', 'It requires massive computational resources to initialize.', 'It lacks support for single-bit streaming configurations.'],
    1,
    'ECB encrypts matching blocks of input into matching blocks of output, failing to mask underlying data patterns or shapes.'
  ),
  createQuestion(
    'qn-cr-13',
    'Which standard provides authenticated symmetric encryption, guaranteeing both confidentiality and data integrity simultaneously?',
    ['AES-ECB', 'AES-GCM', 'DES-CBC', 'RSA-2048'],
    1,
    'Galois/Counter Mode (GCM) is an AEAD (Authenticated Encryption with Associated Data) mode that provides both confidentiality and tag-based integrity validation.'
  ),
  createQuestion(
    'qn-cr-14',
    'An organization wishes to achieve non-repudiation on email orders. Which cryptographic operation must the sender execute?',
    ['Encrypt the payload with the receiver\'s public key', 'Sign the payload using the sender\'s private key', 'Hash the payload using salted SHA-512', 'Encrypt the payload using a symmetric shared key'],
    1,
    'Signing a file using a unique, private key ensures that only the keyholder could have authorized the transaction, enforcing non-repudiation.'
  ),
  createQuestion(
    'qn-cr-15',
    'Which vulnerability describes two completely different inputs yielding matching resulting cryptographic hash digests?',
    ['Replay Vulnerability', 'Hash Collision', 'Symmetric Overwrap', 'Salting Drift'],
    1,
    'A hash collision occurs when different inputs calculate to the exact same hash output, exposing weaknesses in the hashing algorithm.'
  ),
  createQuestion(
    'qn-cr-16',
    'When a user visits a HTTPS website, how do they verify that the server\'s digital certificate is trusted?',
    ['By validating it against a locally stored root certificate issued by a trusted CA', 'By querying a local RADIUS server', 'By contacting the local ISP gateway directly', 'By checking if the server uses symmetric SHA hashing'],
    0,
    'Browsers contain a trusted root store of public CA certificates which they use to verify the validity of server certificate signatures.'
  ),
  createQuestion(
    'qn-cr-17',
    'Which standard specifies the file schema and field layout of public-key digital certificates globally?',
    ['RFC 1918', 'X.509', 'IEEE 802.11', 'FIPS 140-2'],
    1,
    'The X.509 standard defines the format and attribute fields of public-key certificates used across TLS and PKI structures.'
  ),
  createQuestion(
    'qn-cr-18',
    'What is the primary vulnerability associated with utilizing the MD5 hashing algorithm in modern enterprise systems?',
    ['It is slow to compute.', 'It is highly vulnerable to collision attacks due to mathematical flaws.', 'It requires dedicated custom server chips.', 'It cannot accept alphanumeric inputs.'],
    1,
    'MD5 is mathematically broken because of high lookup rates for hash collisions, allowing different files to generate identical hashes.'
  ),
  createQuestion(
    'qn-cr-19',
    'Which technology utilizes secure cloud or physical HSM modules to back up and manage cryptographic keys on behalf of users?',
    ['Key Escrow', 'Salting Registry', 'Obfuscation Buffer', 'CRL Handshake Cache'],
    0,
    'Key Escrow is the practice of storing unique cryptographic keys with a trusted third-party agent to ensure recovery is possible if keys are lost.'
  ),
  createQuestion(
    'qn-cr-20',
    'What role does an Initialization Vector (IV) play in block-cipher symmetric encryption?',
    ['It defines the private key size.', 'It provides randomized seeding to ensure identical plaintexts encrypt to unique ciphertexts across operations.', 'It manages the PKI certificate revocation list.', 'It translates output streams to Web XML schemas.'],
    1,
    'An IV ensures that the first block of data is randomized, preventing recognizable output patterns when encrypting duplicate raw inputs.'
  )
];

// ========================================================
// QUIZ 2: VULNERABILITIES & EXPLOITS (20 QUESTIONS)
// ========================================================
export const vulnerabilitiesExploitsQuestions: QuizQuestion[] = [
  createQuestion(
    'qn-vu-1',
    'Which software bug occurs when inputs exceed buffer zones and overwrite the stack, allowing hackers to redirect the CPU instruction pointer?',
    ['Memory Leak', 'Buffer Overflow', 'DLL Hijacking', 'Zero-Day Collision'],
    1,
    'Buffer overflows allow inputs to exceed storage boundaries, overwriting stack registers (such as the EIP return pointer) to redirect execution flow.'
  ),
  createQuestion(
    'qn-vu-2',
    'What is the cumulative operational impact of a persistent memory leak in a critical backend daemon?',
    ['Instant database credential leakage', 'Gradual depletion of available system RAM resources, leading to performance degradation and daemon crashes', 'Automatic elevation of low-privilege accounts to administrator templates', 'Unencrypted broadcasts of secure directory records'],
    1,
    'A memory leak occurs when a program fails to free dynamically allocated RAM, slowly consuming resources until the host crashes or drops offline.'
  ),
  createQuestion(
    'qn-vu-3',
    'Which methodology describes an attacker capitalizing on built-in administrative tools (like PowerShell, certutil, or wmic) to execute payloads and avoid detection?',
    ['Buffer Overwriting', 'Living off the Land (LOLBAS)', 'Reverse DNS Tunneling', 'Directory Traversal'],
    1,
    'Living off the Land (LOLBAS) leverages trusted, pre-installed utilities rather than foreign malware files to hide from file-based AV detection.'
  ),
  createQuestion(
    'qn-vu-4',
    'An attacker elevates their privileges on a server by exploiting a local kernel flaw to gain root access from a standard guest account. What is this type of exploit called?',
    ['Horizontal Privilege Escalation', 'Vertical Privilege Escalation', 'Cross-Site Scripting escalation', 'Symmetric key drift'],
    1,
    'Vertical privilege escalation involves moving from a limited user context up to an administrative or root-level privilege context.'
  ),
  createQuestion(
    'qn-vu-5',
    'Which software utility compiles and distributes pre-written exploit modules, payloads, and post-exploitation hooks for penetration testing?',
    ['Nmap Map Portal', 'Metasploit Framework', 'Maltego Graph Suite', 'Wireshark Sniffer'],
    1,
    'Metasploit is an open-source framework used by testers and hackers to configure, deploy, and manage exploit execution.'
  ),
  createQuestion(
    'qn-vu-6',
    'A standalone malicious utility replicates itself automatically across internal networks by exploiting exposed software service ports. How is this classified?',
    ['Trojan Horse', 'Network Worm', 'Spyware Agent', 'Rootkit Module'],
    1,
    'Worms are self-propelling malware programs that spread across network segments automatically by exploiting software vulnerabilities without human intervention.'
  ),
  createQuestion(
    'qn-vu-7',
    'Which malware type modifies operating system files and intercepts kernel system calls to hide its files, folders, and processes from active antivirus scans?',
    ['Trojan', 'Rootkit', 'Ransomware', 'Keylogger'],
    1,
    'Rootkits embed deeply in system kernels, modifying standard OS system calls (APIs) to hide their processes and files from defensive monitoring logs.'
  ),
  createQuestion(
    'qn-vu-8',
    'Which security scanning utility acts as a network mapper, probing targeted host systems to identify open network ports and running services?',
    ['Nmap', 'Maltego', 'John the Ripper', 'Snort'],
    0,
    'Nmap is a powerful network discovery tool used to scan targets, map ports, draft topologies, and identify active service versions.'
  ),
  createQuestion(
    'qn-vu-9',
    'Which intelligence-gathering platform utilizes interactive link-analysis graphs to map out relationships across public records, domains, and corporate emails?',
    ['Nmap', 'Metasploit', 'Maltego', 'Nikto'],
    2,
    'Maltego is an open-source intelligence (OSINT) and graphical analysis tool used to trace connections across IP networks, domains, and individuals.'
  ),
  createQuestion(
    'qn-vu-10',
    'What core technique allows an attacker to perform a horizontal privilege escalation attack?',
    ['Exploiting a kernel patch to gain root rights', 'Interception of session cookies to hijack another standard employee account with identical privileges', 'Utilizing SQL injection to wipe database tables completely', 'Writing buffer inputs to corrupt general hardware RAM'],
    1,
    'Horizontal privilege escalation moves access sideways into accounts on the same structural layer, such as accessing a coworker\'s private files.'
  ),
  createQuestion(
    'qn-vu-11',
    'Which security control is designed to mitigate stack-based buffer overflows by checking a random cookie value placed before the return pointer?',
    ['Address Space Layout Randomization (ASLR)', 'Stack Canaries', 'Data Execution Prevention (DEP)', 'Host Firewalling rules'],
    1,
    'Stack canaries place a random integer directly before the stack return pointer. If this value is changed during input processing, a buffer overflow is detected and execution is aborted.'
  ),
  createQuestion(
    'qn-vu-12',
    'How does Address Space Layout Randomization (ASLR) prevent buffer overflow execution?',
    ['It encrypts files at rest automatically.', 'It randomizes the memory addresses of system programs and libraries in RAM, making it difficult for exploits to predict shellcode entry points.', 'It verifies remote certificates using mTLS.', 'It blocks unsecure network traffic on TCP Port 443.'],
    1,
    'ASLR randomizes code segment addresses in memory, preventing attackers from using hardcoded memory jump locations in their exploits.'
  ),
  createQuestion(
    'qn-vu-13',
    'Which defense mechanism marks specific memory segments (like the stack) as non-executable, preventing injected shellcode from running?',
    ['Stack Canaries', 'Data Execution Prevention (DEP / NX Bit)', 'Address Scrambling', 'Obfuscation matrices'],
    1,
    'DEP (or the No-Execute/NX bit) ensures that the CPU will not execute instructions residing within memory segments designated only for data storage.'
  ),
  createQuestion(
    'qn-vu-14',
    'An attacker bundles a malicious payload inside a legitimate pdf invoice. Once opened, it executes background malware. What category of malware is this?',
    ['Computer Worm', 'Trojan Horse', 'Rootkit kernel', 'Spyware tracker'],
    1,
    'Trojans masquerade as safe, desirable applications or files while concealing malicious, hidden operations.'
  ),
  createQuestion(
    'qn-vu-15',
    'Which malicious software disables system access, encrypts local user files, and displays a ransom page demanding cryptocurrency payment for restoration?',
    ['Rootkit', 'Ransomware', 'Worm', 'Keylogger'],
    1,
    'Ransomware uses cryptographic controls to lock local resources, forcing owners to pay a ransom in exchange for recovery.'
  ),
  createQuestion(
    'qn-vu-16',
    'Which utility secretly captures keystrokes, registers active browser clicks, and transmits them to remote command servers?',
    ['Adware popups', 'Keyloggers / Spyware', 'Network Worms', 'Trojan loaders'],
    1,
    'Keyloggers act as monitoring spyware, recording physical keystroke inputs to capture passwords and sensitive communication.'
  ),
  createQuestion(
    'qn-vu-17',
    'What form of threat describes an attacker exploiting a security flaw before any official software patch or update has been released by the vendor?',
    ['SQL injection exploit', 'Zero-Day Vulnerability', 'Cross-Site Scripting vulnerability', 'Replay transaction bypass'],
    1,
    'A Zero-Day vulnerability is an unpatched flaw for which no vendor fix or security update is yet available.'
  ),
  createQuestion(
    'qn-vu-18',
    'An enterprise database suddenly slows down and crashes. Investigation reveals that a running thread repeatedly allocates memory within a loop but never releases it. What occurred?',
    ['Buffer Overflow', 'Memory Leak', 'DLL Hijacking', 'Zero-Day Crash'],
    1,
    'Uncontrolled allocation of memory without proper de-allocation causes a memory leak, which eventually depletes system memory resources.'
  ),
  createQuestion(
    'qn-vu-19',
    'How does a logic bomb differ from other standard common malware types?',
    ['It spreads automatically over secure network connections.', 'It remains dormant until a specific trigger condition (such as a date or action) is met, then executes its payload.', 'It functions solely inside symmetric hardware processors.', 'It encrypts local files using public certificates instantly.'],
    1,
    'A logic bomb is a malicious code segment nested within applications that remains dormant until triggered by a specific event or condition.'
  ),
  createQuestion(
    'qn-vu-20',
    'Which security scanning concept describes of identifying a vulnerability that is actually present on a system?',
    ['False Positive', 'True Positive', 'False Negative', 'True Negative'],
    1,
    'A True Positive correctly identifies a real security vulnerability that is actively present on a scanned system.'
  )
];

// ========================================================
// QUIZ 3: OWASP TOP 10 (20 QUESTIONS)
// ========================================================
export const owaspWebSecurityQuestions: QuizQuestion[] = [
  createQuestion(
    'qn-ow-1',
    'Which web application vulnerability occurs when unvalidated user inputs are concatenated directly into backend database query strings?',
    ['Stored XSS', 'SQL Injection (SQLi)', 'Cross-Site Request Forgery (CSRF)', 'Directory Traversal'],
    1,
    'SQL Injection (SQLi) occurs when input isn\'t properly sanitized and is appended directly into SQL commands, allowing unauthorized database commands to execute.'
  ),
  createQuestion(
    'qn-ow-2',
    'What is the primary mitigation developers should implement to completely eliminate SQL Injection vulnerabilities?',
    ['Use Base-64 input obfuscation', 'Implement Parameterized Queries (Prepared Statements)', 'Apply client-side md5 hashing', 'Install local firewall plugins'],
    1,
    'Parameterized queries/Prepared Statements separate user inputs from the query logic entirely, treating input purely as data values.'
  ),
  createQuestion(
    'qn-ow-3',
    'An attacker permanently saves a malicious JavaScript file on a public forum. When other users view the post, the script runs in their browsers. What is this?',
    ['Reflected XSS', 'Stored (Persistent) XSS', 'DOM-Based XSS', 'Cross-Site Request Forgery'],
    1,
    'Stored XSS occurs when a payload is saved persistently to a backend database and later loaded into other users\' browsers.'
  ),
  createQuestion(
    'qn-ow-4',
    'Which browser security policy allows administrators to explicitly restrict where active scripts, styles, and frames can be loaded from?',
    ['Content Security Policy (CSP)', 'Same-Origin Policy (SOP)', 'mTLS authentication', 'Cross-Origin Resource Sharing (CORS)'],
    0,
    'A Content Security Policy (CSP) header tells the browser which domains are trusted for executing dynamic assets and scripts, helping to block XSS.'
  ),
  createQuestion(
    'qn-ow-5',
    'Which exploit tricks an authenticated user\'s browser into executing unauthorized state-changing actions (like altering account emails) on a trusted site?',
    ['SQL Injection', 'Cross-Site Request Forgery (CSRF)', 'Stored XSS', 'Directory Traversal'],
    1,
    'CSRF exploits the automatic inclusion of authentication cookies in browser requests to execute actions on behalf of an active, logged-in user.'
  ),
  createQuestion(
    'qn-ow-6',
    'What primary coding defense should be used to protect application endpoints from Cross-Site Request Forgery (CSRF)?',
    ['Parameterized SQL queries', 'Unique, randomized anti-CSRF request tokens', 'Output script tag sanitization', 'Double dots ../ file checks'],
    1,
    'Anti-CSRF tokens are unique, unpredictable values mapped to a user session that are verified on every state-changing request, blocking CSRF.'
  ),
  createQuestion(
    'qn-ow-7',
    'An attacker submits the input path string "../../etc/passwd" to view system files beyond the web root directory. What vulnerability are they exploiting?',
    ['SQL Injection', 'Directory Traversal', 'Stored XSS', 'Cross-Site Request Forgery'],
    1,
    'Directory Traversal allows attackers to bypass security boundaries by using parent directory markers ("../") to access arbitrary system files.'
  ),
  createQuestion(
    'qn-ow-8',
    'Which vulnerability occurs when an application parses unsafe XML inputs containing references to external files, letting attackers read local server files?',
    ['SQL Injection', 'XML External Entity (XXE)', 'Reflected XSS', 'Directory Traversal'],
    1,
    'XXE vulnerabilities occur when XML parsers process inputs containing references to external entities, exposing local files or triggering SSRF.'
  ),
  createQuestion(
    'qn-ow-9',
    'An attacker accesses a billing system and modifies the URL value from "index.php?id=101" to "index.php?id=102" to read another user\'s private invoice. What vulnerability is this?',
    ['Stored XSS', 'Broken Object Level Authorization (BOLA / IDOR)', 'Cross-Site Request Forgery (CSRF)', 'Directory Traversal'],
    1,
    'BOLA (or Insecure Direct Object Reference) occurs when an application exposes backend keys without verifying visitor access permissions first.'
  ),
  createQuestion(
    'qn-ow-10',
    'An attacker injects scripts into search parameters. The script is immediately echoed back in the search results page. What is this?',
    ['Stored XSS', 'Reflected XSS', 'DOM-based XSS', 'CSRF request hijacking'],
    1,
    'Reflected XSS occurs when a script payload is contained within an HTTP request and is echoed back in the immediate response page.'
  ),
  createQuestion(
    'qn-ow-11',
    'What header flag prevents client-side scripts (such as XSS payloads) from accessing sensitive session cookies?',
    ['Secure', 'HttpOnly', 'SameSite', 'Path'],
    1,
    'The HttpOnly flag blocks browser scripts from reading or manipulating a cookie, preventing attackers from skimming active session tokens via XSS.'
  ),
  createQuestion(
    'qn-ow-12',
    'What cookie attribute helps defend against Cross-Site Request Forgery (CSRF) by preventing cookies from being sent along with third-party requests?',
    ['HttpOnly', 'SameSite', 'Secure', 'Domain'],
    1,
    'The SameSite attribute (Lax or Strict) prevents browsers from attaching authentication cookies to cross-origin requests, blocking CSRF.'
  ),
  createQuestion(
    'qn-ow-13',
    'Which web security issue is caused by developers failing to disable default administrative accounts, leaving debugging pages active, or keeping unused ports open?',
    ['Broken Object Authorization', 'Security Misconfiguration', 'SQL Injection vulnerability', 'Incomplete input salting'],
    1,
    'Security Misconfigurations include using default administrative credentials, leaving unneeded features enabled, or exposing verbose debugging pages.'
  ),
  createQuestion(
    'qn-ow-14',
    'Which vulnerability describes a backend server being tricked into making unauthorized HTTP requests to internal networks on behalf of an attacker?',
    ['Cross-Site Scripting (XSS)', 'Server-Side Request Forgery (SSRF)', 'Cross-Site Request Forgery (CSRF)', 'XML External Entity (XXE)'],
    1,
    'SSRF occurs when a server fetches a user-supplied URL without validation, allowing attackers to access internal-only services or cloud metadata.'
  ),
  createQuestion(
    'qn-ow-15',
    'What is the primary risk associated with using components with known vulnerabilities in an active software application?',
    ['It slows server CPU speeds linearly.', 'It introduces third-party security flaws that attackers can exploit to compromise the host.', 'It breaks asymmetric certificate handshakes.', 'It invalidates database salting blocks.'],
    1,
    'Using legacy, unpatched third-party libraries or frameworks allows attackers to exploit cataloged CVE vulnerability profiles to gain access.'
  ),
  createQuestion(
    'qn-ow-16',
    'How does DOM-based XSS differ from Reflected or Stored XSS?',
    ['The payload is stored on local backup disks.', 'The threat resides purely in the client-side JavaScript, modifying the Document Object Model (DOM) without sending the payload to the server.', 'It requires administrative root password access.', 'It operates only across symmetric network trunks.'],
    1,
    'DOM-based XSS is executed entirely in the client browser, where local scripts parse and execute unsanitized URL inputs directly within the active DOM.'
  ),
  createQuestion(
    'qn-ow-17',
    'An application accepts unvalidated user input and uses it in a redirect URL. Attackers land victims onto a cloned site. What is this?',
    ['Directory Traversal', 'Unvalidated Redirect / Open Redirect', 'Cross-Site Scripting', 'SSRF attack'],
    1,
    'Open Redirect occurs when an application accepts target destination parameters blindly, letting attackers use the trusted domain to launch phishing redirects.'
  ),
  createQuestion(
    'qn-ow-18',
    'What security mechanism prevents browsers from sending session cookies over unencrypted HTTP pathways?',
    ['HttpOnly', 'Secure Attribute', 'SameSite=Strict', 'GCM Block mode'],
    1,
    'The Secure cookie attribute ensures that the browser will only transmit the cookie over encrypted (HTTPS) connections, preventing interception.'
  ),
  createQuestion(
    'qn-ow-19',
    'An application allows users to request files by submitting key index IDs without verifying authorization. This is an example of what OWASP risk?',
    ['Broken Object Level Authorization (IDOR)', 'Security Misconfiguration', 'Using Vulnerable Components', 'XML Entity Parsing'],
    0,
    'Broken Object Level Authorization (IDOR/BOLA) occurs when backend resources (invoices, files) are accessed using user-supplied IDs without validating permission.'
  ),
  createQuestion(
    'qn-ow-20',
    'Why is client-side input validation alone considered insufficient for securing modern web applications?',
    ['It consumes heavy client-side processing memory.', 'It can be bypassed by attackers sending requests directly to the API, making server-side validation mandatory.', 'It slows down TLS handshakes.', 'It does not support SHA-256 algorithm formatting.'],
    1,
    'Since client-side validation is executed in the user\'s browser, attackers can bypass it using intercepting proxies or terminal tools like curl.'
  )
];

// ========================================================
// QUIZ 4: SOCIAL ENGINEERING & NETWORKS (20 QUESTIONS)
// ========================================================
export const socialEngineeringQuestions: QuizQuestion[] = [
  createQuestion(
    'qn-so-1',
    'Which social engineering campaign targets high-ranking executives (like CEOs, CFOs, or Board members) using highly customized, tailored intelligence?',
    ['Smishing', 'Whaling', 'Phishing', 'Spim'],
    1,
    'Whaling is a highly targeted form of spear-phishing that specifically focuses on high-value executive targets.'
  ),
  createQuestion(
    'qn-so-2',
    'An attacker deploys a rogue Wi-Fi access point matching a legitimate corporate SSID to intercept wireless traffic. What is this attack called?',
    ['Deauthentication flood', 'Evil Twin', 'VLAN Hopping', 'Symmetric decryption hijack'],
    1,
    'An Evil Twin is a rogue wireless access point that mimics a legitimate SSID, tricking clients into connecting to intercept their traffic.'
  ),
  createQuestion(
    'qn-so-3',
    'What type of attack involves transmitting spoofed deauthentication frames to disconnect wireless clients from a valid access point?',
    ['VLAN Hopping', 'Deauthentication Attack', 'ARP Poisoning', 'SQL Injection'],
    1,
    'Deauthentication attacks send spoofed frames to force targets offline, often used to push them onto a co-located Evil Twin router.'
  ),
  createQuestion(
    'qn-so-4',
    'Which social engineering scheme leverages voice communication over telephone portals to capture verification credentials?',
    ['Phishing', 'Vishing', 'Smishing', 'Tailgating'],
    1,
    'Vishing (Voice Phishing) uses phone calls or voice systems to impersonate trusted entities and steal sensitive information.'
  ),
  createQuestion(
    'qn-so-5',
    'An attacker follows an employee through a physical secured door badge entry point without scanning their own credential. What is this called?',
    ['Shoulder Surfing', 'Tailgating / Piggybacking', 'Dumpster Diving', 'Phishing'],
    1,
    'Tailgating is the act of closely following authorized personnel through secure doors or physical perimeters.'
  ),
  createQuestion(
    'qn-so-6',
    'What network attack manipulates the mapping of IP addresses to hardware MAC addresses, letting attackers intercept internal LAN traffic?',
    ['DNS Poisoning', 'ARP Poisoning', 'SQL Injection', 'VLAN Hopping'],
    1,
    'ARP Poisoning sends spoofed ARP messages onto a LAN, associating the attacker\'s MAC address with a target gateway\'s IP to execute a MITM attack.'
  ),
  createQuestion(
    'qn-so-7',
    'An attacker poisons a local router\'s DNS records, mapping a bank domain over to a cloned phishing server. What is this category of attack?',
    ['SQL Injection', 'DNS Poisoning', 'VLAN Hopping', 'Replay Vulnerability'],
    1,
    'DNS Poisoning resolves valid domains to hostile, malicious destination IP locations, redirecting web traffic without user knowledge.'
  ),
  createQuestion(
    'qn-so-8',
    'Which method describes an attacker searching through physical waste bins to recover discarded passwords, charts, or sensitive documents?',
    ['Tailgating', 'Dumpster Diving', 'Shoulder Surfing', 'Phishing'],
    1,
    'Dumpster diving involves recovering discarded physical documents or components from waste containers to harvest intelligence.'
  ),
  createQuestion(
    'qn-so-9',
    'Which network routing attack allows a host to communicate across restricted, isolated virtual LAN structures by adding double 802.1Q tags to Ethernet frames?',
    ['MAC Flooding', 'VLAN Hopping (Double Tagging)', 'ARP Spoofing', 'DDoS Amplification'],
    1,
    'VLAN Hopping via double tagging exploits trunk line configurations to forward packets across separate, isolated virtual local networks.'
  ),
  createQuestion(
    'qn-so-10',
    'What describes the core security mechanism of a standard Replay Attack?',
    ['An attacker executes brute-force routines against hashes.', 'An attacker intercepts valid data transmissions (like authentication packets) and retransmits them later to gain unauthorized access.', 'An attacker modifies DNS mapping protocols.', 'An attacker overflows buffers with null inputs.'],
    1,
    'Replay attacks capture valid network communication payloads and replay them to exploit vulnerabilities or bypass authentication.'
  ),
  createQuestion(
    'qn-so-11',
    'What type of phishing uses SMS text messages containing malicious landing page links to target users?',
    ['Phishing', 'Smishing', 'Vishing', 'Spim'],
    1,
    'Smishing (SMS Phishing) leverage mobile text networks to trick recipients into downloading malware or entering login credentials.'
  ),
  createQuestion(
    'qn-so-12',
    'How does a Distributed Denial of Service (DDoS) attack differ from a Denial of Service (DoS) attack?',
    ['DDoS targets only client mobile browsers.', 'DDoS utilizes networks of compromised hosts (botnets) to flood a target with traffic from multiple sources simultaneously.', 'DDoS uses symmetric block ciphers exclusively.', 'DDoS operates only on physical copper wiring.'],
    1,
    'A DoS attack uses a single system to flood a target, while DDoS coordinates thousands of compromised devices (botnets) to saturate resources.'
  ),
  createQuestion(
    'qn-so-13',
    'An attacker stands near a cashier register and watches a customer type their PIN code into a terminal. What is this security threat?',
    ['Shoulder Surfing', 'Dumpster Diving', 'Vishing', 'Tailgating'],
    0,
    'Shoulder surfing is the direct physical observation of another user\'s inputs or screens to steal passwords or credentials.'
  ),
  createQuestion(
    'qn-so-14',
    'What wireless threat involves deploying an unauthorized physical wireless router on an enterprise network without administrative approval?',
    ['Rogue Access Point', 'Symmetric decryption link', 'Adware load', 'Captive DNS network'],
    0,
    'A Rogue Access Point is an unauthorized wireless router plugged into an organization\'s network, creating a security backdoor.'
  ),
  createQuestion(
    'qn-so-15',
    'Which type of network flood attack exploits the TCP handshake process by sending a flood of SYN packets without ever completing the connection?',
    ['UDP Flood', 'TCP SYN Flood', 'ICMP Echo storm', 'Smurf Attack'],
    1,
    'A SYN Flood exhausts server connection queues by initiating handshakes but never returning finishing ACK responses, filling system tables.'
  ),
  createQuestion(
    'qn-so-16',
    'Which attack tricks a local DNS resolver into storing false mapping records, redirecting all users to clone phishing servers?',
    ['DNS Cache Poisoning', 'ARP Poisoning', 'SQL Injection', 'VLAN Hopping'],
    0,
    'DNS Cache Poisoning replaces legitimate IP mapping records in recursive DNS servers with false IPs to hijack user traffic.'
  ),
  createQuestion(
    'qn-so-17',
    'Which vulnerability term refers to a software flaw that is actively exploited by threat actors before there is any patches or defense definitions?',
    ['SQL injection template', 'Zero-Day exploit', 'VLAN Hopping double tagging', 'Replay transaction bypass'],
    1,
    'A Zero-Day exploit targets a newly discovered vulnerability before the software developer has developed a patch or fix.'
  ),
  createQuestion(
    'qn-so-18',
    'What describes the primary operational security risk of unsolicited bulk messaging over Instant Messaging applications (Spim)?',
    ['Spim slows down computer processor clock rates.', 'Spim delivers malicious URLs or phishing payloads over chat rooms and immediate messaging lines.', 'Spim breaks symmetric AES encryption.', 'Spim invalidates local SSL/TLS certificates.'],
    1,
    'Spim targets instant messaging platforms (like chat applications or social networks) to deliver spam, phishing links, and malware.'
  ),
  createQuestion(
    'qn-so-19',
    'An attacker association MAC spoofing to bypass local network security. What is MAC spoofing?',
    ['Altering the CPU processing system registry completely', 'Altering the source hardware address listed in network packets to match a trusted host device\'s NIC', 'Upgrading local asymmetric key standards', 'Routing unencrypted XML files across router blocks'],
    1,
    'MAC spoofing alters a device\'s hardware MAC address to impersonate an authorized host and bypass MAC address blocklists.'
  ),
  createQuestion(
    'qn-so-20',
    'Which network attack sends spoofed ICMP packets to a network\'s broadcast address with the source IP set to the victim\'s address, causing a flood?',
    ['SYN Flood', 'Smurf Attack', 'SQL Injection', 'VLAN Hopping'],
    1,
    'A Smurf attack is a classic DDoS attack that pings broadcast networks using a spoofed source IP, prompting dozens of hosts to flood the victim with replies.'
  )
];

// ========================================================
// EXAM: CRYPTOGRAPHY & ATTACK MATRIX MASTER EXAM (100 Qs)
// ========================================================
export const group4MasterExamQuestions: QuizQuestion[] = [
  createQuestion(
    'em4-1',
    'Which cryptographic mechanic guarantees that calculating a matching hash digest from a given cleartext is mathematically impossible?',
    ['Reversible Keying', 'One-way Function', 'Symmetric decryption wrap', 'Asymmetric salting'],
    1,
    'Cryptographic hashing algorithms are designed to be mathematical one-way functions, preventing the computational reconstruction of plaintext.'
  ),
  createQuestion(
    'em4-2',
    'An administrator wants to secure critical database backups at rest. Why would they select AES-GCM over AES-ECB?',
    ['AES-GCM utilizes public certificates instead of private keys.', 'AES-GCM provides both bulk encryption and authenticated integrity checks, whereas AES-ECB fails to randomize identical blocks.', 'AES-GCM is an asymmetric algorithm built on RSA factoring structures.', 'AES-GCM is immune to future quantum decryption schemes.'],
    1,
    'AES-GCM is an AEAD mode, encrypting data while validating payload integrity. AES-ECB encrypts duplicate blocks into identical outputs, revealing data patterns.'
  ),
  createQuestion(
    'em4-3',
    'An attacker intercepting network traffic notices which ports are open. Which utility was most likely used?',
    ['John the Ripper', 'Nmap', 'Maltego', 'Metasploit'],
    1,
    'Nmap is a premier port scanner used to probe devices and catalog active services, open ports, and operating systems.'
  ),
  createQuestion(
    'em4-4',
    'Which software flaw allows a hacker to overwrite the stack Return Address Pointer, redirecting execution to injected shellcode?',
    ['Memory Leak', 'Buffer Overflow', 'BOLA exploit', 'ARP Poisoning'],
    1,
    'Buffer overflows allow inputs to exceed allocated memory, overwriting near registers (such as the EIP register) to run arbitrary shellcode.'
  ),
  createQuestion(
    'em4-5',
    'What security benefit does salt introduce during the password storage process?',
    ['It compresses hash sizes to speed search lookups.', 'It randomizes outputs so identical inputs generate different hashes, neutralizing Rainbow Tables.', 'It signs credentials using the private key of a CA.', 'It translates credentials to readable XML format.'],
    1,
    'Salting appends unique, random bits to password strings before hashing, ensuring that matching source passwords compile to different digests.'
  ),
  createQuestion(
    'em4-6',
    'An attacker sends a phishing template to the Chief Financial Officer (CFO) containing highly customized, spear-phishing instructions. What is this?',
    ['Smishing', 'Whaling', 'Vishing', 'Spim'],
    1,
    'Whaling is a highly targeted form of spear-phishing focused entirely on high-profile corporate executives.'
  ),
  createQuestion(
    'em4-7',
    'What standard describes the global schema layout of public-key identity certificates in TLS networks?',
    ['RFC 1918', 'X.509', 'IEEE 802.1X', 'FIPS 140-2'],
    1,
    'The X.509 standard governs the format and attributes of digital public key certificates across global security systems.'
  ),
  createQuestion(
    'em4-8',
    'An attacker tricks an active session cookie into sending unauthorized fund transfers from a legitimate user\'s bank. What attack is this?',
    ['Cross-Site Scripting (XSS)', 'Cross-Site Request Forgery (CSRF)', 'SQL Injection (SQLi)', 'Directory Traversal'],
    1,
    'CSRF exploits a web domain\'s automatic trust in browser session cookies, tricking signed-in users into executing state-changing tasks.'
  ),
  createQuestion(
    'em4-9',
    'Which protocol does a client use to verify if a digital certificate has been revoked in real time without downloading an entire list?',
    ['LDAP bind', 'OCSP (Online Certificate Status Protocol)', 'CRL File Sync', 'diffie-hellman exchange'],
    1,
    'OCSP performs rapid, live queries to a responder, returning a lightweight status response indicating whether a certificate is still valid.'
  ),
  createQuestion(
    'em4-10',
    'A user modifies their browser parameter string from "profile.php?user=24" to "profile.php?user=25" to read another customer\'s profile. What flaw is this?',
    ['Stored XSS', 'Insecure Direct Object Reference (IDOR/BOLA)', 'CSRF request hijacking', 'Directory Traversal'],
    1,
    'IDOR/BOLA occurs when applications expose references to internal objects without verifying that the requesting user is authorized to access them.'
  ),
  createQuestion(
    'em4-11',
    'An attacker uses search forms to inject javascript that permanent saves to a database and runs in other user browsers. What is this vulnerability?',
    ['Reflected XSS', 'Stored (Persistent) XSS', 'Cross-Site Request Forgery (CSRF)', 'SQL Injection'],
    1,
    'Stored XSS permanently saves malicious code to database volumes; when other clients visit the page, the payload executes in their browser.'
  ),
  createQuestion(
    'em4-12',
    'Which symmetric cryptographic mode of operation encrypts matching blocks of input data into matching blocks of output ciphertext?',
    ['Cipher Block Chaining (CBC)', 'Electronic Codebook (ECB)', 'Galois/Counter Mode (GCM)', 'Output Feedback (OFB)'],
    1,
    'ECB mode processes blocks independently without feedback, meaning identical inputs generate identical output patterns.'
  ),
  createQuestion(
    'em4-13',
    'Which attack installs a physical wireless router on internal networks without authorization, bypassing firewalls?',
    ['Evil Twin', 'Rogue Access Point', 'Deauthentication flood', 'VLAN Hopping'],
    1,
    'A Rogue AP is an unauthorized wireless device connected to an network port, exposing a backend backdoor into system networks.'
  ),
  createQuestion(
    'em4-14',
    'A program leaves dynamically allocated memory active after completing functions, slowly crashing system resources. What occurred?',
    ['Buffer Overflow', 'Memory Leak', 'DLL Hijacking', 'Zero-Day Attack'],
    1,
    'A memory leak fails to free unused RAM back to the operating system, slowly depleting available resources until the host crashes.'
  ),
  createQuestion(
    'em4-15',
    'An attacker exploits trunk line configurations to cross virtual network boundaries by adding two VLAN tags to physical Ethernet frames. What is this?',
    ['MAC Spoofing', 'VLAN Hopping (Double Tagging)', 'ARP Poisoning', 'SYN Flood'],
    1,
    'VLAN Hopping (specifically via double-tagging) allows a malicious client to route packets across separate virtual local subnets.'
  ),
  createQuestion(
    'em4-16',
    'Which hashing algorithm is specifically designed slow down GPU-based offline password cracking by running millions of stretched iterations?',
    ['MD5', 'SHA-1', 'bcrypt', 'AES-GCM'],
    2,
    'Bcrypt (and Argon2 or PBKDF2) applies cost factor variables to delay calculations, frustrating automated offline cracking.'
  ),
  createQuestion(
    'em4-17',
    'An attacker appends custom dot and slash strings (like "../../etc/passwd") to view files beyond the hosting root folder. What is this?',
    ['SQL Injection', 'Directory Traversal', 'Stored XSS', 'CSRF cookie hijack'],
    1,
    'Directory Traversal parses directory path operators (e.g. "../" or "..\\") to access system folders outside of the web root directory.'
  ),
  createQuestion(
    'em4-18',
    'What describes a Zero-Day vulnerability profile?',
    ['A flaw that is open on UDP Port 0.', 'A security weakness discovered and exploited before any vendor patches or security definitions have been developed.', 'An attack that executes in zero CPU processing micro-seconds.', 'A vulnerability occurring on symmetric network segments.'],
    1,
    'Zero-Day vulnerability profiles represent newly found faults that have no software patches or defensive signatures available.'
  ),
  createQuestion(
    'em4-19',
    'An attacker association MAC spoofing to bypass network filters. What is MAC spoofing?',
    ['Altering the CPU clock mapping structure', 'Altering the physical media access control address in network frames to mimic a trusted client machine', 'Encrypting local XML formats', 'Using root ticket exchanges to bypass LDAP'],
    1,
    'MAC Spoofing changes a device\'s physical hardware NIC address, masquerading as authorized hardware on the network.'
  ),
  createQuestion(
    'em4-20',
    'Which asymmetric key exchange algorithm allows two remote entities to establish a shared symmetric key safely over untrusted channels?',
    ['RSA-4096', 'Diffie-Hellman', 'AES-256', 'bcrypt'],
    1,
    'The Diffie-Hellman protocol is designed to calculate a matching symmetric session key securely without exposing the key in transit.'
  ),
  createQuestion(
    'em4-21',
    'What is the primary action of a Trojan Horse malware payload?',
    ['Spreads automatically across open ports.', 'Disguises itself as legitimate, harmless software to trick users into running it.', 'Modifies the OS kernel directly.', 'Encrypts file directories for ransom.'],
    1,
    'Trojans trick victims by appearing as benign files or utilities, while executing malicious background payloads once opened.'
  ),
  createQuestion(
    'em4-22',
    'Which physical security threat involves directly looking at an employee\'s screen or keyboard to steal passwords?',
    ['Tailgating', 'Shoulder Surfing', 'Dumpster Diving', 'Phishing'],
    1,
    'Shoulder surfing is directly observing inputs, screens, or keyboard movements to capture credentials.'
  ),
  createQuestion(
    'em4-23',
    'How does mTLS (Mutual TLS) improve web transmission security over standard TLS handshakes?',
    ['It increases key wrapping size.', 'It requires both the client and the server to present and validate digital certificates to authenticate both endpoints.', 'It is highly resistant to symmetric collisions.', 'It disables the need for CAs.'],
    1,
    'Mutual TLS forces client workstations to verify their identity via certificates, establishing authenticated trusts for both directions.'
  ),
  createQuestion(
    'em4-24',
    'Which web security risk describes an attacker exploiting insecure deserialization of inputs to run administrative commands?',
    ['Stored XSS', 'Insecure Deserialization / Software Integrity Failures', 'CSRF token bypass', 'Directory Traversal'],
    1,
    'Insecure Deserialization reconstructs malicious user objects in memory, allowing attackers to execute arbitrary code or bypass security checks.'
  ),
  createQuestion(
    'em4-25',
    'Which browser security flag prevents JavaScript engines (XSS scripts) from accessing sensitive cookies?',
    ['Secure', 'HttpOnly', 'SameSite=Lax', 'Interactive'],
    1,
    'The HttpOnly cookie flag blocks browser scripts (like those injected in XSS attacks) from reading cookie data, helping prevent session hijacking.'
  ),
  createQuestion(
    'em4-26',
    'An attacker floods web forms with strings like "OR \'1\'=\'1\'" to bypass verification. What is this exploit?',
    ['Cross-Site Scripting (XSS)', 'SQL Injection (SQLi)', 'Cross-Site Request Forgery (CSRF)', 'Directory Traversal'],
    1,
    'SQL Injection injects database delimiters and operators to manipulate query logic and access restricted data.'
  ),
  createQuestion(
    'em4-27',
    'What describes a rogue device sending deauthentication packets to wireless systems?',
    ['Allows the attacker to sniff unencrypted LAN cables.', 'Forces active wireless clients offline so they attempt to reconnect to an Evil Twin access point.', 'Upgrades local symmetric key standards.', 'Wipes local SQL database volumes.'],
    1,
    'Deauthentication attacks force active connections offline, prompting devices to roam onto a co-located Evil Twin clone.'
  ),
  createQuestion(
    'em4-28',
    'What type of malware embeds deeply in the operating system kernel, modifying APIs to hide its files, processes, and network connections?',
    ['Trojan Horse', 'Rootkit', 'Ransomware', 'Spyware'],
    1,
    'Rootkits modify OS modules and kernel APIs, making their backdoors and files invisible to standard security tools.'
  ),
  createQuestion(
    'em4-29',
    'An organization decides to shift risk burdens to insurance providers. Which risk strategy is this?',
    ['Risk Mitigation', 'Risk Transference', 'Risk Avoidance', 'Risk Acceptance'],
    1,
    'Risk transference maps risk impacts over to external third parties (like insurance underwriters or vendors).'
  ),
  createQuestion(
    'em4-30',
    'What mitigation protects a web login form from Brute-Force cracking sweeps?',
    ['Using symmetric GCM modes', 'Account lockout thresholds and CAPTCHAs', 'Applying base-64 masking templates', 'Double dot "../" check libraries'],
    1,
    'Lockouts and CAPTCHAs limit login attempts, preventing automated cracking utilities from guessing passwords.'
  ),
  createQuestion(
    'em4-31',
    'Which technology maps connections between IP routers, public registry names, and employee emails with graphical charts?',
    ['Nmap Map', 'Metasploit exploit', 'Maltego Graph Suite', 'Wireshark Sniffer'],
    2,
    'Maltego uses graph structures to analyze and visualize open-source intelligence (OSINT) data for security investigations.'
  ),
  createQuestion(
    'em4-32',
    'What network attack tricks local switch databases into mapping an attacker’s MAC address to a target gateway’s IP?',
    ['DNS Poisoning', 'ARP Poisoning / Spoofing', 'SQL Injection', 'VLAN Hopping'],
    1,
    'ARP Poisoning floods LAN segments with fake mappings, letting attackers intercept municipal local subnet data.'
  ),
  createQuestion(
    'em4-33',
    'Which malware replicates across network networks automatically without requiring user interactions?',
    ['Trojan Loader', 'Computer Worm', 'Hardware keylogger', 'Spyware agent'],
    1,
    'Worms are self-propagating security exploits that automatically spread over networks by exploiting unresolved service vulnerabilities.'
  ),
  createQuestion(
    'em4-34',
    'An attacker inserts macro tools in a safe invoice file to prepare for delivery. What is this Phase in Cyber Kill Chain?',
    ['Reconnaissance', 'Weaponization', 'Exploitation', 'Installation'],
    1,
    'Weaponization compiles exploit payloads with standard, legitimate files (like PDF or Office files) to prepare for delivery.'
  ),
  createQuestion(
    'em4-35',
    'Under PKI frameworks, which entity acts to receive user certificate requests, verify details, and forward them to a signing authority?',
    ['Certificate Broker', 'Registration Authority (RA)', 'Symmetric GCM module', 'OCSP Server'],
    1,
    'The Registration Authority (RA) handles the administrative verification of certificate applicants before forwarding requests to the CA.'
  ),
  createQuestion(
    'em4-36',
    'What is the cumulative mathematical formula used to calculate Annualized Loss Expectancy?',
    ['ALE = SLE * ARO', 'ALE = SLE / ARO', 'ALE = Assets + Vulnerability', 'ALE = Threat * Collision'],
    0,
    'ALE is calculated by multiplying the Single Loss Expectancy (SLE) by the Annualized Rate of Occurrence (ARO).'
  ),
  createQuestion(
    'em4-37',
    'An attacker intercepts web requests and modifies content on-the-fly. What category of exploit is this?',
    ['Replay exploit', 'Man-in-the-Middle (MITM)', 'VLAN Hopping', 'SQL Injection'],
    1,
    'MITM attacks insert an attacker\'s node between two communicating systems to intercept, inspect, or modify active data.'
  ),
  createQuestion(
    'em4-38',
    'What regulatory compliance standard directs security configurations on cardholder payments globally?',
    ['HIPAA compliance', 'PCI-DSS standard', 'GDPR privacy', 'SAML assertion'],
    1,
    'PCI-DSS is the proprietary security standard governing all organizations that process, store, or transmit payment card information.'
  ),
  createQuestion(
    'em4-39',
    'An attacker executes command strings in search fields. The script runs instantly in the local user\'s browser upon load. What type of XSS is this?',
    ['Stored XSS', 'Reflected XSS', 'DOM-based XSS', 'Static script'],
    1,
    'Reflected XSS echoes unsanitized input back to the user instantly, requiring them to click a malicious link or submit a crafted form.'
  ),
  createQuestion(
    'em4-40',
    'A web application processes XML inputs and permits physical system access keys. What OWASP threat catalog is this?',
    ['SQL Injection', 'XML External Entity (XXE)', 'Reflected XSS', 'Directory Traversal'],
    1,
    'XXE vulnerabilities occur when XML parsers process inputs containing references to external files, exposing local systems.'
  ),
  createQuestion(
    'em4-41',
    'Which symmetric cryptographic mode uses an incremental counter to create stream keys without block padding needs?',
    ['Cipher Block Chaining (CBC)', 'Counter Mode (CTR / GCM)', 'Electronic Codebook (ECB)', 'Digital block'],
    1,
    'CTR and GCM turn standard block ciphers into keystream generators, encrypting data without requiring block padding.'
  ),
  createQuestion(
    'em4-42',
    'To limit XSS attacks, which header configures browser parameters regarding dynamic execution origins?',
    ['Cross-Origin-Headers', 'Content-Security-Policy (CSP)', 'Strict-Transport-Security', 'HttpOnly Secure'],
    1,
    'CSP headers authorize explicit sources for scripts, images, and features, helping to block unauthorized script execution.'
  ),
  createQuestion(
    'em4-43',
    'Which security threat targets mobile devices using text messages with phishing links?',
    ['Phishing', 'Smishing', 'Vishing', 'Spim'],
    1,
    'Smishing is phishing conducted via mobile SMS network messaging platforms.'
  ),
  createQuestion(
    'em4-44',
    'What describes a "Warm Site" recovery location in a Disaster Recovery plan?',
    ['An empty facility with power and utility connections but no server hardware.', 'A server facility with power, network lines, and some server hardware, but requires restoring backups to become fully operational.', 'A fully mirrored live facility that operates in real-time.', 'An offline cloud storage drive.'],
    1,
    'A Warm Site is a recovery facility that has backing networks and hardware ready, but requires data restoration to resume operations.'
  ),
  createQuestion(
    'em4-45',
    'Which testing concept describes mock exercises where attack and defense specialists coordinate to calibrate systems and detection rules?',
    ['Black Box Scan', 'Purple Teaming', 'White Box Scan', 'Compliance checks'],
    1,
    'Purple Teaming matches offensive (Red) and defensive (Blue) teams to actively calibrate security systems and rules.'
  ),
  createQuestion(
    'em4-46',
    'What does the "I" inside a standard CIA Triad stand for?',
    ['Identification', 'Integrity', 'Infrastructure', 'Intrusion'],
    1,
    'The "I" in the CIA Triad stands for Integrity, ensuring that data is protected from unauthorized modification or corruption.'
  ),
  createQuestion(
    'em4-47',
    'An attacker triggers a server vulnerability to redirect API requests to run internal operations. What is this attack?',
    ['Cross-Site Scripting', 'Server-Side Request Forgery (SSRF)', 'Cross-Site Request Forgery (CSRF)', 'SQL Injection'],
    1,
    'SSRF forces a web server to execute requests to arbitrary internal or external domains on behalf of the attacker.'
  ),
  createQuestion(
    'em4-48',
    'What security cookie property prevents browser clients from transmitting session credentials over unsecure HTTP networks?',
    ['HttpOnly', 'Secure', 'SameSite', 'Path'],
    1,
    'The Secure attribute ensures that cookies are only sent over encrypted (HTTPS) connections, preventing interception.'
  ),
  createQuestion(
    'em4-49',
    'An attacker records unencrypted authentication packets over physical LAN lines and transmits them later to bypass access gates. What is this exploit?',
    ['Zero-Day attack', 'Replay Attack', 'Buffer Overflow', 'DNS Poisoning'],
    1,
    'Replay attacks intercept packets in transit and resend them to impersonate users or execute unauthorized transactions.'
  ),
  createQuestion(
    'em4-50',
    'Which software scanning result occurs when an alert is raised on completely benign, normal operational activity?',
    ['True Positive', 'False Positive', 'True Negative', 'False Negative'],
    1,
    'A False Positive is an alert triggered by legitimate, authorized activity mistaken for a security threat.'
  ),
  createQuestion(
    'em4-51',
    'What type of password attack uses precomputed lookup hash libraries to crack stolen credentials instantly?',
    ['Brute-Force Attack', 'Rainbow Table Attack', 'Dictionary Attack', 'Collision Sweep'],
    1,
    'Rainbow Table attacks use vast libraries of precomputed password hashes to crack stolen credential databases in seconds.'
  ),
  createQuestion(
    'em4-52',
    'Which security mechanism provides local data confidentiality on stolen laptop hardware at rest?',
    ['BitLocker AES full-disk encryption', 'Symmetric SHA-256 hashing', 'Local GCM validation tags', 'Asymmetric PKI setups'],
    0,
    'Full-disk encryption (like BitLocker) protects confidentiality by rendering physical drive data unreadable without the key.'
  ),
  createQuestion(
    'em4-53',
    'Which mathematical concept ensures the sender of a digitally signed transaction cannot deny executing it?',
    ['Confidentiality', 'Non-repudiation', 'Integrity verification', 'System Availability'],
    1,
    'Non-repudiation uses asymmetric digital signatures (private key signing) to prove the origin of a transaction.'
  ),
  createQuestion(
    'em4-54',
    'An attacker executes SQL injections to steal database records. What is the fundamental security impact of this exploit?',
    ['Break in hardware Availability', 'Loss of database Confidentiality and Integrity', 'Loss of asymmetric PKI trust', 'Bypassing local Air-Gaps'],
    1,
    'SQL injection allows attackers to view (breach confidentiality) and modify (breach integrity) sensitive database records.'
  ),
  createQuestion(
    'em4-55',
    'A developer wants to prevent client-side script interference with security cookies. Which parameter must be configured?',
    ['SameSite=Strict', 'HttpOnly', 'Secure', 'Max-Age'],
    1,
    'The HttpOnly flag blocks client-side scripts from reading session cookies, preventing session hijacking via XSS.'
  ),
  createQuestion(
    'em4-56',
    'A physical room contains dual locked security doors where the second door unlocks only after the first closes. What is this?',
    ['Jump Box Gateway', 'Mantrap / Access Portal', 'Air-Gapped vault', 'Rogue AP buffer'],
    1,
    'A mantrap (physical access portal) uses interlocking doors to prevent unauthorized entry and tailgating.'
  ),
  createQuestion(
    'em4-57',
    'What security practice divides networks into distinct, isolated layers governed by access rules?',
    ['Logical Air-Gapping', 'Microsegmentation', 'Symmetric block cipher mode', 'Obfuscation matrices'],
    1,
    'Microsegmentation decomposes corporate networks into granular security segments to control traffic and contain breaches.'
  ),
  createQuestion(
    'em4-58',
    'An attacker deploys a fake Wi-Fi router named after a popular airport hotspot to steal passwords. What is this?',
    ['Rogue AP', 'Evil Twin', 'Deauthentication attack', 'VLAN Hopping'],
    1,
    'An Evil Twin replicates a legitimate Wi-Fi network\'s name (SSID) to trick adjacent client devices into connecting.'
  ),
  createQuestion(
    'em4-59',
    'Which analytical model connects Adversary, Infrastructure, Capability, and Victim to analyze cyber campaigns?',
    ['Lockheed Cyber Kill Chain', 'The Diamond Model of Intrusion Analysis', 'MITRE ATT&CK Matrix', 'OWASP Threat Catalog'],
    1,
    'The Diamond Model organizes threat activities by mapping connections across threat actors, capability, infra, and victim nodes.'
  ),
  createQuestion(
    'em4-60',
    'Which defensive technology sits inline and actively blocks or drops malicious packets automatically based on rules?',
    ['Intrusion Detection System (IDS)', 'Intrusion Prevention System (IPS)', 'SIEM Portal', 'Endpoint AV utility'],
    1,
    'An IPS is deployed inline, allowing it to inspect traffic in real time and actively drop payloads to block attacks.'
  ),
  createQuestion(
    'em4-61',
    'In asymmetric cryptography, which key is used by a sender to encrypt a payload meant for a specific receiver?',
    ['The sender\'s private key', 'The receiver\'s public key', 'The CA\'s root key', 'The symmetric session key'],
    1,
    'In public-key encryption, messages are encrypted using the receiver\'s public key, ensuring only their private key can decrypt it.'
  ),
  createQuestion(
    'em4-62',
    'Which mechanism acts as a secure external gateway, requiring administrators to log in before connecting to backend servers?',
    ['Domain Controller', 'Bastion Host / Jump Box', 'SIEM Collector', 'Air-Gapped Vault'],
    1,
    'A Bastion Host acts as a hardened proxy gate, checking, logging, and routing remote administrative connections.'
  ),
  createQuestion(
    'em4-63',
    'What describes the primary risk associated with a SQL query string constructed using string concatenation?',
    ['It degrades database processing speed.', 'It allows attackers to inject malicious SQL commands, exposing or altering data.', 'It breaks PKI certificate encryption.', 'It exposes passwords in plain text.'],
    1,
    'String concatenation inserts user input directly into executable SQL statements, allowing attackers to hijack query logic.'
  ),
  createQuestion(
    'em4-64',
    'Which web application attack allows attackers to execute administrative scripts in a visitor\'s browser via url search parameters?',
    ['Stored XSS', 'Reflected XSS', 'DOM-based XSS', 'Open Redirect'],
    1,
    'Reflected XSS parses script parameters from HTTP requests and reflects them back to execute in the victim\'s browser.'
  ),
  createQuestion(
    'em4-65',
    'What security control prevents brute-force login cracking by locking accounts after multiple failed attempts?',
    ['Anti-CSRF Tokens', 'Account Lockout Policies', 'Symmetric Hashing', 'CSP Configuration'],
    1,
    'Account lockouts disable access after reaching a threshold of failed attempts, neutralizing automated brute-force attacks.'
  ),
  createQuestion(
    'em4-66',
    'What is the core directive of a Zero Trust Architecture (ZTA)?',
    ['Validate physical firewall connections first.', 'Never trust, always verify — assume all connections are untrusted and require continuous validation.', 'Change all passwords every 30 days.', 'Encrypt all database backup files.'],
    1,
    'Zero Trust assumes threats exist at all layers, requiring continuous authentication and microsegmentation for all hosts.'
  ),
  createQuestion(
    'em4-67',
    'An attacker places duplicate tags on Ethernet frames to transmit packets across restricted virtual networks. What is this?',
    ['ARP Spoofing', 'VLAN Hopping', 'SYN Flood', 'MAC Spoofing'],
    1,
    'VLAN Hopping uses double tagging to trick switches into routing packets across separate virtual local subnets.'
  ),
  createQuestion(
    'em4-68',
    'Which technology maps entities, networks, and domains to build OSINT relationship diagrams?',
    ['John the Ripper', 'Maltego', 'Metasploit', 'Nmap'],
    1,
    'Maltego uses graph visualization to trace OSINT connections across networks, domains, and public infrastructure records.'
  ),
  createQuestion(
    'em4-69',
    'Which physical security measure involves separating critical networks from physical connection to the Internet and other networks?',
    ['Logical Segmenting', 'Air-Gapping', 'Installing Bastion Nodes', 'DMZ creation'],
    1,
    'Air-gapping isolates critical networks completely, removing any physical or wireless paths to untrusted systems.'
  ),
  createQuestion(
    'em4-70',
    'What describes the primary role of a local demilitarized zone (DMZ) in network design?',
    ['To encrypt outgoing email traffic.', 'To host public-facing servers in a buffered subnetwork, isolating them from high-security internal subnets.', 'To back up critical database structures.', 'To manage Kerberos ticketing logs.'],
    1,
    'A DMZ isolates public-facing applications in a buffered segment, protecting sensitive internal resources from external attacks.'
  ),
  createQuestion(
    'em4-71',
    'Which vulnerability occurs when XML parsers process inputs containing external references, exposing local files?',
    ['SQL Injection', 'XML External Entity (XXE) injection', 'Reflected XSS', 'Directory Traversal'],
    1,
    'XXE vulnerabilities occur when XML parsers process inputs containing references to external entities, exposing local systems.'
  ),
  createQuestion(
    'em4-72',
    'Which authentication factor category does a fingerprint scan fall under?',
    ['Something You Know', 'Something You Are', 'Something You Have', 'Somewhere You Are'],
    1,
    'Fingerprints are biological indicators that fall under the inherence category (Something You Are).'
  ),
  createQuestion(
    'em4-73',
    'Which asymmetric algorithm relies on the difficulty of calculating discrete logarithms on elliptic curves?',
    ['RSA', 'Elliptic Curve Cryptography (ECC)', 'AES-GCM', 'Diffie-Hellman'],
    1,
    'ECC utilizes elliptic curve discrete logarithms, providing high-strength encryption with smaller keys.'
  ),
  createQuestion(
    'em4-74',
    'An attacker intercepts a user\'s session token and uses it to impersonate them without logging in. What is this exploit?',
    ['Brute-force crack', 'Session Hijacking', 'Zero-Day execution', 'Directory Traversal'],
    1,
    'Session hijacking steals active session tokens, letting attackers bypass authentication checks completely.'
  ),
  createQuestion(
    'em4-75',
    'What describes a Cold Site recovery location in disaster planning?',
    ['A live operational target facility.', 'A physical facility with power, environmental controls, and basic networking, but no server hardware or data.', 'A backup database server room.', 'A secure cloud backup folder.'],
    1,
    'A Cold Site is an empty shell with utilities but no hardware or data, resulting in long recovery times.'
  ),
  createQuestion(
    'em4-76',
    'An attacker transmits floods of UDP fragments with false source IPs to exhaust victim systems. What is this?',
    ['SYN Flood', 'UDP Flood / DDoS Amplification', 'VLAN Hopping', 'SQL Injection'],
    1,
    'UDP floods send high volumes of spoofed packets to target ports, saturating available bandwidth and system resources.'
  ),
  createQuestion(
    'em4-77',
    'What cookie attribute prevents session cookies from being attached to third-party web requests, mitigating CSRF?',
    ['Secure', 'SameSite', 'HttpOnly', 'Max-Age'],
    1,
    'SameSite attributes restrict cookies from being sent with cross-site requests, blocking CSRF attacks.'
  ),
  createQuestion(
    'em4-78',
    'What describes a "Logic Bomb" malware profile?',
    ['Dormant malicious code that triggers only when specific conditions are met.', 'A worm that spreads via email attachments.', 'Malware that modifies BIOS files.', 'Spyware that records keystrokes.'],
    0,
    'Logic bombs lie dormant within software until triggered by a specific event, like a date or administrative command.'
  ),
  createQuestion(
    'em4-79',
    'An attacker registers domains that are slightly misspelled copies of popular sites to exploit user typos. What is this?',
    ['Phishing', 'Typosquatting / URL Hijacking', 'Smishing', 'Whaling'],
    1,
    'Typosquatting registers misspelled variants of popular domains to trap user typing errors and host phishing pages.'
  ),
  createQuestion(
    'em4-80',
    'Which security mechanism monitors and correlates log data across thousands of enterprise network systems?',
    ['LDAP Directory', 'SIEM (Security Information & Event Management)', 'Symmetric GCM block', 'OCSP Responder'],
    1,
    'SIEM software centralizes and correlates security events and logs across an enterprise to identify threats and ease monitoring.'
  ),
  createQuestion(
    'em4-81',
    'An attacker tricks an executive into revealing their password over the phone by impersonating an IT technician. What is this?',
    ['Phishing', 'Vishing / Social Engineering', 'Tailgating', 'Shoulder Surfing'],
    1,
    'Vishing uses phone calls and social engineering to impersonate officials and extract sensitive information.'
  ),
  createQuestion(
    'em4-82',
    'Which algorithm is considered mathematically broken and highly vulnerable to collision lookups?',
    ['SHA-256', 'MD5', 'AES-GCM', 'bcrypt'],
    1,
    'MD5 is mathematically compromised, allowing different files to calculate to matching hashes.'
  ),
  createQuestion(
    'em4-83',
    'Which database injection exploit uses time-delayed responses to exfiltrate table records incrementally?',
    ['Union-based SQLi', 'Blind SQL Injection', 'Reflected SQLi', 'Error-based SQLi'],
    1,
    'Blind SQLi leverages true/false conditions and database sleep delays to reconstruct databases character-by-character when responses are hidden.'
  ),
  createQuestion(
    'em4-84',
    'An attacker redirects a logged-in user to change their profile email using active cookies. What is this exploit?',
    ['SQL Injection', 'Cross-Site Request Forgery (CSRF)', 'Stored XSS', 'Directory Traversal'],
    1,
    'CSRF tricks active browser sessions into issuing unauthorized state-changing requests, exploiting cookie trust.'
  ),
  createQuestion(
    'em4-85',
    'What describes "Living off the Land" in post-exploitation scenarios?',
    ['Downloading specialized malware modules.', 'Using pre-existing administrative utilities (like PowerShell or certutil) to execute scripts and bypass detection.', 'Scanning internal LAN segments for devices.', 'Wiping backup records completely.'],
    1,
    'Living off the Land leverages built-in, trusted system tools to execute scripts, avoiding detection by security monitoring tools.'
  ),
  createQuestion(
    'em4-86',
    'Which testing concept matches offensive Red and defensive Blue teams in mock operations to tune detection filters?',
    ['Black Box Scan', 'Purple Teaming', 'White Box Scan', 'Compliance checks'],
    1,
    'Purple Teaming coordinates offensive and defensive specialists to actively calibrate security systems and tune rules.'
  ),
  createQuestion(
    'em4-87',
    'Which encryption standard relies on mathematically factoring large prime numbers?',
    ['AES', 'RSA', 'ECC', 'Blowfish'],
    1,
    'RSA is an asymmetric algorithm whose security relies on the hardness of factoring huge semi-prime integers.'
  ),
  createQuestion(
    'em4-88',
    'Which server-side attack forces a server into executing requests to internal private databases on behalf of the attacker?',
    ['XSS attack', 'Server-Side Request Forgery (SSRF)', 'CSRF cookie hijack', 'Directory Traversal'],
    1,
    'SSRF forces a web server to execute requests to arbitrary internal or external domains on behalf of the attacker.'
  ),
  createQuestion(
    'em4-89',
    'Which cookie attribute restricts scripts from accessing cookie files, defending against session snatching via XSS?',
    ['Secure', 'HttpOnly', 'SameSite=Strict', 'Interactive'],
    1,
    'The HttpOnly flag blocks browser scripts (like those injected in XSS attacks) from reading cookie data, helping prevent session hijacking.'
  ),
  createQuestion(
    'em4-90',
    'What describes a "Zero-Day" vulnerability pattern?',
    ['A flaw open on Port 0.', 'An unpinned vulnerability with no vendor updates or security definitions available.', 'A dynamic script executed in zero seconds.', 'A weakness occurring across symmetric loops.'],
    1,
    'Zero-Day vulnerability profiles represent newly found faults that have no software patches or defensive signatures available.'
  ),
  createQuestion(
    'em4-91',
    'Which symmetric block encryption mode chains past blocks to prevent identical inputs from compiling into matching ciphertext?',
    ['ECB', 'Cipher Block Chaining (CBC)', 'GCM', 'Stream Mode'],
    1,
    'CBC mode XORs each block of plaintext with the previous ciphertext, preventing recognizable output patterns.'
  ),
  createQuestion(
    'em4-92',
    'An attacker watches an employee type password inputs from an adjacent hallway. What is this threat?',
    ['Tailgating', 'Shoulder Surfing', 'Dumpster Diving', 'Phishing'],
    1,
    'Shoulder surfing is directly observing inputs, screens, or keyboard movements to capture credentials.'
  ),
  createQuestion(
    'em4-93',
    'What is the cumulative target of a computer worm malware payload?',
    ['Masquerades as safe, benign programs.', 'Replicates across network ports automatically without needing human interactions.', 'Modifies kernel files to hide processes.', 'Locks physical drive sectors via encryption.'],
    1,
    'Worms are self-propagating security exploits that automatically spread over networks by exploiting unresolved service vulnerabilities.'
  ),
  createQuestion(
    'em4-94',
    'In PKI, which authoritative entity validates certificate queries instantly to return active revocation certificates?',
    ['Certificate Registry', 'OCSP Responder / CRL list', 'Symmetric GCM module', 'DH Exchange Server'],
    1,
    'OCSP Responders and CRLs provide status updates on whether a certificate has been revoked before its expiration.'
  ),
  createQuestion(
    'em4-95',
    'To limit script references across unsecure vectors, which browser header configures explicit permission scopes?',
    ['Cross-Origin-Headers', 'Content-Security-Policy (CSP)', 'Strict-Transport-Security', 'HttpOnly Secure'],
    1,
    'CSP headers authorize explicit sources for scripts, images, and features, helping to block unauthorized script execution.'
  ),
  createQuestion(
    'em4-96',
    'Which social engineering campaign uses mobile SMS gateways to deliver malware links?',
    ['Phishing', 'Smishing', 'Vishing', 'Spim'],
    1,
    'Smishing (SMS Phishing) leverage mobile text networks to trick recipients into downloading malware or entering login credentials.'
  ),
  createQuestion(
    'em4-97',
    'Which security division actively runs adversary emulations to find paths through perimeter controls?',
    ['Blue Team', 'Red Team', 'White Team', 'Compliance Team'],
    1,
    'The Red Team is composed of offensive security personnel tasked with simulating realistic threat actors to discover and exploit weaknesses.'
  ),
  createQuestion(
    'em4-98',
    'What describes a Host Intrusion Prevention System (HIPS) operating scope?',
    ['An inline router blocking network wide packets.', 'An agent installed on local hosts that dynamically monitors system file actions and blocks malicious behavior.', 'An unsecure directory backup volume.', 'A system designed to generate public PKIs.'],
    1,
    'A HIPS monitor runs locally on endpoints, checking file executions, registry writes, and memory paths to block payloads.'
  ),
  createQuestion(
    'em4-99',
    'What occurs when an attacker modifies their MAC address to match a trusted terminal NIC?',
    ['Causes local CPUs to run slower.', 'Bypasses network filters by spoofing a hardware NIC registered with the system.', 'Translates out SSL/TLS certifications automatically.', 'Injects blind SQL scripts into directories.'],
    1,
    'MAC Spoofing changes a device\'s physical hardware NIC address, masquerading as authorized hardware on the network.'
  ),
  createQuestion(
    'em4-100',
    'Which security algorithm provides key stretching to protect credentials against GPU-based offline cracking?',
    ['MD5', 'PBKDF2 / Bcrypt / Argon2', 'SHA-512', 'AES-ECB'],
    1,
    'PBKDF2 (and bcrypt) applies configurable hashing loops, stretching passwords to slow down brute-force cracking attempts.'
  )
];
