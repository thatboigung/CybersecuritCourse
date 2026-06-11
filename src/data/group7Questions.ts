import { QuizQuestion } from '../types';

const createQuestion = (id: string, text: string, options: string[], correctAnswerIndex: number, explanation: string): QuizQuestion => ({
  id, text, options, correctAnswerIndex, explanation
});

// ========================================================
// QUIZ 1: NETWORK COMMAND LINE DIAGNOSTICS & LINUX UTILITIES (20 Qs)
// ========================================================
export const networkDiagnosticsQuestions: QuizQuestion[] = [
  createQuestion(
    'qn-nd-1',
    'Which native console command prints a list of all active TCP/UDP socket lines, their connection states, and corresponding process identifiers (PIDs)?',
    ['arp -a', 'ping -t', 'netstat -ano', 'nslookup'],
    2,
    'netstat (with options like -ano or -tulnp) reveals all active network connections, listening ports, and the hosting system process IDs.'
  ),
  createQuestion(
    'qn-nd-2',
    'A digital forensics analyst needs to construct bit-for-bit exact copies of an compromised hard drive. Which native Linux utility performs this block-level duplication?',
    ['cat', 'dd', 'grep', 'tail'],
    1,
    'The dd (disk duplicator or data duplicator) tool writes bit-by-bit physical disk clones, which is crucial for preserving evidentiary integrity.'
  ),
  createQuestion(
    'qn-nd-3',
    'What option should be passed to "netstat" on Linux to display listening ports along with the associated process name and PID?',
    ['-ano', '-tulnp', '-rn', '-e'],
    1,
    'On Linux platforms, netstat -tulnp lists TCP/UDP listening sockets along with names and process IDs.'
  ),
  createQuestion(
    'qn-nd-4',
    'Which switch should be used with the "ping" command in Linux to limit the total number of packets sent to exactly four transmissions?',
    ['-n 4', '-c 4', '-t 4', '-p 4'],
    1,
    'In Linux, the -c switch specifies the count of echo requests to transmit, whereas Windows uses the -n switch.'
  ),
  createQuestion(
    'qn-nd-5',
    'Which Linux utility is best suited to watch an active, scrolling log file in real-time as new events are added to the bottom?',
    ['cat -n', 'head -n 20', 'tail -f', 'less'],
    2,
    'The "tail -f" command continuously follows and outputs newly appended text rows to the console.'
  ),
  createQuestion(
    'qn-nd-6',
    'A security analyst needs to check if a specific TCP Port (Port 443) on a remote server is open and responsive. What lightweight tool can establish a quick, raw socket handshake without launching a full scan?',
    ['ipconfig', 'nslookup', 'curl', 'route'],
    2,
    'The curl command verifies port responsiveness by initiating secure web connections over TCP Port 443.'
  ),
  createQuestion(
    'qn-nd-7',
    'Which network utility displays the hardware MAC addresses mapped to current IP addresses within the internal physical segment?',
    ['route print', 'arp -a', 'ipconfig /all', 'nslookup'],
    1,
    'The "arp" command utility prints the Address Resolution Protocol physical-to-logical address mappings.'
  ),
  createQuestion(
    'qn-nd-8',
    'What diagnostic command allows you to verify every router hop-by-hop intermediate pathway from your local machine to a remote destination host?',
    ['ping', 'nslookup', 'traceroute (or tracert)', 'netstat'],
    2,
    'traceroute/tracert increments the Time-to-Live (TTL) field of packets, forcing each gateway to send back an ICMP timeout.'
  ),
  createQuestion(
    'qn-nd-9',
    'Which CLI tool allows administrators to directly query DNS servers for records such as Mail Exchanger (MX) or Name Systems (NS) maps?',
    ['dig (or nslookup)', 'route', 'ipconfig', 'netstat'],
    0,
    'The dig utility (or nslookup) structures specific DNS queries to trace name registrations and domain metadata.'
  ),
  createQuestion(
    'qn-nd-10',
    'An engineer suspects that a local machine routing table is configured incorrectly, throwing traffic to a dead gateway. Which command lists active routing pathways?',
    ['arp -a', 'netstat -r (or route print)', 'ipconfig /flushdns', 'ping -l'],
    1,
    'netstat -r or "route print" displays the default gateway structures and host-routing priorities.'
  ),
  createQuestion(
    'qn-nd-11',
    'Which tool can be used to construct custom TCP/UDP packets, execute packet-crafting experiments, and bypass simple firewall configurations?',
    ['hping3', 'ping', 'ipconfig', 'nslookup'],
    0,
    'hping/hping3 can construct custom packets with custom TCP flags, payloads, and protocols, which is useful for audit experiments.'
  ),
  createQuestion(
    'qn-nd-12',
    'A security professional wants to parse a massive Linux syslog file and extract only the rows containing the word "failed". Which command filters streams efficiently?',
    ['grep "failed" logfile', 'cat logfile', 'head -n 10 logfile', 'dd if=logfile of=failed'],
    0,
    'The "grep" tool filters input stream lines matching a regular expression or search phrase.'
  ),
  createQuestion(
    'qn-nd-13',
    'Which standard Linux configuration interface commands apply raw network matching policies, packet tracking, and NAT state configurations?',
    ['ipconfig', 'iptables', 'nslookup', 'arp'],
    1,
    'iptables manages the Linux netfilter firewall rulesets, classifying packets based on network ports, source coordinates, and protocol flags.'
  ),
  createQuestion(
    'qn-nd-14',
    'A network administrator on a Windows workstation needs to clear the local DNS lookup cache, resolving stale IP address cache tags. Which command is executed?',
    ['ipconfig /release', 'ipconfig /renew', 'ipconfig /flushdns', 'ipconfig /all'],
    2,
    'The "ipconfig /flushdns" command purges the local operational cache of previously retrieved domain name mappings.'
  ),
  createQuestion(
    'qn-nd-15',
    'Which CLI tool operates as a versatile administrative command-line packet capture engine, capturing raw Ethernet frames directly on network interface cards?',
    ['netstat', 'nslookup', 'tcpdump', 'route'],
    2,
    'tcpdump captures raw network packets flowing through selected physical interface adapters for diagnostics.'
  ),
  createQuestion(
    'qn-nd-16',
    'To print the complete hardware interfaces, local IP configurations, netmasks, and MAC mappings on a Linux system, which utility is executed?',
    ['ip addr (or ifconfig)', 'arp -a', 'route print', 'netstat'],
    0,
    'The system command "ip addr" (or "ifconfig") lists interface adapters, physical MAC mappings, and active IPv4/IPv6 networks.'
  ),
  createQuestion(
    'qn-nd-17',
    'What switch is passed to "nmap" to perform a stealthy SYN scan, initiating a connection but terminating before completing the three-way handshake?',
    ['-sT', '-sS', '-sU', '-sV'],
    1,
    'The "nmap -sS" switch triggers a quiet TCP SYN scan, protecting target logs by terminating the handshake with a RST packet.'
  ),
  createQuestion(
    'qn-nd-18',
    'Which utility enables an elite security auditor to automatically enumerate target operating systems, open TCP/UDP ports, and running service versions?',
    ['traceroute', 'nmap', 'nslookup', 'ping'],
    1,
    'nmap maps and scans target ranges, enumerating open ports, services, vulnerable scripts, and operating system types.'
  ),
  createQuestion(
    'qn-nd-19',
    'A Linux administrator wants to securely mirror all storage sectors from path "/dev/sda" to a backup image called "disk.img". What is the correct syntax?',
    ['cat /dev/sda > disk.img', 'dd if=/dev/sda of=disk.img', 'tail -f /dev/sda > disk.img', 'grep /dev/sda disk.img'],
    1,
    'Using dd with input file (if) set to the block device and output file (of) set to the target path creates a block-level clone.'
  ),
  createQuestion(
    'qn-nd-20',
    'Which ICMP payload parameters are verified by default when diagnostic ping tests operate over internal networking bridges?',
    ['TCP handshakes and sequence alignments', 'Echo Request (Type 8) and Echo Reply (Type 0) packets', 'UDP datagram port targets', 'LDAP directory metadata flags'],
    1,
    'Ping utility operations rely on sending standard ICMP raw Echo Requests and receiving active Echo Replies.'
  )
];

// ========================================================
// QUIZ 2: FORENSIC EXTRACTION, SANDBOXING, & OSINT SYS DISTROS (20 Qs)
// ========================================================
export const forensicsThreatPlatformsQuestions: QuizQuestion[] = [
  createQuestion(
    'qn-ft-1',
    'Which threat examination platform provides interactive virtualized sandboxing, allowing an analyst to safely execute malicious software and watch process execution trees live?',
    ['VirusTotal', 'WHOIS lookup', 'any.run', 'wireshark'],
    2,
    'any.run is an interactive sandbox that visualizes complete execution steps, network calls, and file modifications in real-time.'
  ),
  createQuestion(
    'qn-ft-2',
    'What standardized workspace layout is globally utilized by forensic teams to generate exact, hash-verifiable digital clones of target data storage drives?',
    ['winhex editor', 'Autopsy user suite', 'FTK Imager', 'Kali Linux distro'],
    2,
    'FTK Imager generates exact physical disk images (such as .E01 or raw files) and records MD5/SHA hashes to prove zero alteration occurred.'
  ),
  createQuestion(
    'qn-ft-3',
    'A cybersecurity analyst wants to analyze a suspicious file by comparing its cryptographic hash against multiple antivirus engines simultaneously. Which global repository provides this?',
    ['urlscan.io', 'WHOIS registrar', 'VirusTotal', 'Joe Sandbox'],
    2,
    'VirusTotal checks submitted file handles or hashes against over 70 third-party anti-malware databases to detect known patterns.'
  ),
  createQuestion(
    'qn-ft-4',
    'Which forensic utility is specifically optimized to perform deep RAM analysis, extracting process memory structures, active network handles, and keys from memory dumps?',
    ['Autopsy', 'FTK Imager', 'Volatility / Memdump', 'winhex'],
    2,
    'Volatility is a memory forensics framework designed to carve data, connection pools, and credentials from volatile RAM captures.'
  ),
  createQuestion(
    'qn-ft-5',
    'Which network protocol analyzer parses binary PCAP files, providing GUI tabs, filter bars, and complete TCP packet field breakdowns?',
    ['Nmap', 'Wireshark', 'any.run', 'Autopsy'],
    1,
    'Wireshark is the industry-standard software packet sniffer, allowing visual analysis of frames and datagram streams.'
  ),
  createQuestion(
    'qn-ft-6',
    'What is the distinct purpose of hosting an enterprise "Honeypot" within an internal network infrastructure zone?',
    ['Accelerate remote database backup synchronization times', 'Act as an isolated, decoy server with dummy data to attract, distract, and study active intrusion methods', 'Scan employee endpoint compliance health baselines', 'Automate firewalls via software playbooks'],
    1,
    'Honeypots are decoy resources designed to lure attackers, enabling security teams to study threat vectors in a safe environment.'
  ),
  createQuestion(
    'qn-ft-7',
    'An analyst wants to view the domain registration details, administrative contacts, and registration dates of an external suspicious domain. Which command-line system queries this?',
    ['nslookup', 'ping', 'WHOIS', 'nmap'],
    2,
    'WHOIS databases register domain metadata, supplying administrative registration and domain routing timestamps.'
  ),
  createQuestion(
    'qn-ft-8',
    'Which Linux security distribution comes pre-packaged with hundreds of specialized penetration testing, vulnerability scanning, and reverse engineering tools?',
    ['Ubuntu Desktop LTS', 'Kali Linux', 'CentOS Linux Core', 'ParrotOS Mobile'],
    1,
    'Kali Linux is a Debian-based security distribution packed with specialized exploitation and diagnostic security packages.'
  ),
  createQuestion(
    'qn-ft-9',
    'What type of tool is Autopsy in the context of commercial and open-source cybersecurity investigations?',
    ['A high-speed inline router firewall', 'An open-source digital forensic suite used to analyze hard drive images, recover deleted files, and index registries', 'An OSINT password crawler', 'A real-time memory sandbox'],
    1,
    'Autopsy is a GUI-based forensics platform designed to index filesystem data, catalog metadata, and recover deleted directories.'
  ),
  createQuestion(
    'qn-ft-10',
    'Why is winhex considered an essential software tool for advanced low-level computer diagnostics and forensics?',
    ['It automatically updates patch configurations across endpoints.', 'It is a robust binary hexadecimal editor allowing specialists to directly inspect, search, and edit sector-level bytes of folders and disks.', 'It conducts multi-engine sandboxing.', 'It acts as an automated honeypot.'],
    1,
    'winhex provides direct hexadecimal byte access to file structures, allowing sector-level data carving.'
  ),
  createQuestion(
    'qn-ft-11',
    'Which specialized platform automates browser rendering in an isolated cloud server, tracking scripts, web redirects, and domain connections?',
    ['FTK Imager', 'urlscan.io (or urlvoid)', 'Volatility', 'WHOIS'],
    1,
    'urlscan.io allows analysts to browse web links safely by capturing screenshots, networking structures, and active redirects remotely.'
  ),
  createQuestion(
    'qn-ft-12',
    'When capturing an employee computer\'s active RAM image for forensic investigations, which administrative state factor must be prioritized?',
    ['Preserve storage device cooling schedules', 'Expedite collection since volatile data is lost upon power loss or operating system restarts', 'Review the physical keyboard configurations first', 'Ensure the server is running public cloud databases only'],
    1,
    'RAM represents highly volatile memory; its contents disappear once the system is powered down or restarted.'
  ),
  createQuestion(
    'qn-ft-13',
    'Under forensic guidelines, how does an investigator establish that an imported drive image has not been altered during transportation to the lab?',
    ['Compare physical disk measurements', 'Compare pre-transport and post-transport cryptographic hashes (e.g., SHA-256) of the image file', 'Deploy the disk inside a live production sandbox', 'Check the OS system version tags'],
    1,
    'Matching cryptographic hash strings verifies data integrity and confirms that no modifications occurred.'
  ),
  createQuestion(
    'qn-ft-14',
    'What is the distinct difference between Kali Linux and ParrotOS?',
    ['Kali Linux is strictly Windows-based.', 'ParrotOS is designed to be lightweight and security-hardened, often used for secure development and network mapping alongside offensive modules.', 'ParrotOS does not contain any penetration testing tools.', 'Kali Linux is completely cloud-native.'],
    1,
    'ParrotOS is lightweight and security-focused, serving as a dual-purpose platform for secure system operations and penetration testing.'
  ),
  createQuestion(
    'qn-ft-15',
    'Which diagnostic tool should be used to parse, view, and follow the network trace frames recorded inside a .pcap file?',
    ['Autopsy forensic parser', 'Wireshark packet analyzer', 'any.run interactive sandbox', 'FTK Imager clone system'],
    1,
    'Wireshark is specifically built to import, group, and dissect packets from .pcap files.'
  ),
  createQuestion(
    'qn-ft-16',
    'What term describes security datasets containing public directory details, IP registry maps, open domain registration logs, and publicly searchable files?',
    ['Proprietary malware logs', 'Open-Source Intelligence (OSINT)', 'Honeypot decoys', 'Volatility registry frames'],
    1,
    'OSINT refers to information gathered legally from public records, databases, and open search structures.'
  ),
  createQuestion(
    'qn-ft-17',
    'Which technology prevents a digital forensics workstation from accidentally writing metadata, files, or modifications to a target evidence storage device?',
    ['A hardware Write-Blocker adapter', 'An active VM sandbox', 'FTK Imager command files', 'VirusTotal database scans'],
    0,
    'Hardware write-blockers allow only read commands to pass to the target drive, protecting original evidence from alteration.'
  ),
  createQuestion(
    'qn-ft-18',
    'If an analyst executes an unknown executable file inside any.run, what security containment layer prevents malware from infecting the host computer?',
    ['The local firewall client', 'A secure virtualization container / Sandbox', 'The browser cache', 'Network Access Control (NAC) profiles'],
    1,
    'Sandbox architectures use hypervisors to isolate and containerize threat executions away from underlying physical hardware.'
  ),
  createQuestion(
    'qn-ft-19',
    'What diagnostic check-in does "urlvoid" perform to catalog whether a website is trustworthy?',
    ['Queries multiple domain reputation lists and blocklists to see if the URL has been flagged for malicious activity', 'Decompiler translation testing', 'Volatility RAM packet extraction', 'Hard disk sector imaging'],
    0,
    'urlvoid checks domains against blacklists and security databases to detect historic malware distribution patterns.'
  ),
  createQuestion(
    'qn-ft-20',
    'An investigator needs to carve out hidden files and headers from a damaged partition raw image. What type of tool is designed for this task?',
    ['A network scanner like nmap', 'A hexadecimal binary editor like winhex', 'A WHOIS directory script', 'A honeypot decoy system'],
    1,
    'Hex editors like winhex allow investigators to inspect raw file signatures (magic bytes) to recover files without functional partition tables.'
  )
];

// ========================================================
// QUIZ 3: PENETRATION TESTING ROE & HANDS-ON CTF ECOSYSTEMS (20 Qs)
// ========================================================
export const ctfsRoeQuestions: QuizQuestion[] = [
  createQuestion(
    'qn-ct-1',
    'Which document dictates exactly what subnets can be tested, what tools can be executed, and what hours the testers can run scans during a professional security audit?',
    ['NIST Risk mitigation blueprint', 'The Rules of Engagement (RoE)', 'CompTIA Certification syllabus', 'A standard CSV asset inventory list'],
    1,
    'The Rules of Engagement (RoE) represents the legally binding agreement outlining precise engagement scopes, authorized utilities, and emergency protocols.'
  ),
  createQuestion(
    'qn-ct-2',
    'Which CTF range specializes in providing prebuilt offline virtual machines that you download and load into virtual hypervisors (like VirtualBox) to practice intrusion testing local servers?',
    ['TryHackMe', 'Hack The Box', 'VulnHub', 'picoCTF'],
    2,
    'VulnHub provides complete standalone offline virtual machine configurations that security analysts can download and test locally without an internet connection.'
  ),
  createQuestion(
    'qn-ct-3',
    'What describes a "Capture the Flag" (CTF) security training scenario?',
    ['A tournament to see who can physically run the fastest', 'An educational exercise where players exploit system vulnerabilities to retrieve secret text strings (flags) that prove successful compromise', 'A database optimization challenge', 'An audit comparing patch baselines'],
    1,
    'CTF exercises are gamified learning challenges verifying hands-on security skills through target exploitation to locate proof-of-compromise flags.'
  ),
  createQuestion(
    'qn-ct-4',
    'Which document outlines the absolute bounds of a penetration test, defining what resources are off-limits and what liability exemptions exist?',
    ['NIST Cybersecurity Standard', 'Rules of Engagement (RoE)', 'The user manual of Nmap', 'CISM study syllabus'],
    1,
    'The RoE establishes operational constraints, defining the legal boundaries and scope of penetration tests.'
  ),
  createQuestion(
    'qn-ct-5',
    'Which cyber range platform is uniquely designed with a focus on structured, gamified walkthrough modules that guide beginners through fundamentals of networking, commands, and security layouts?',
    ['VulnHub', 'Hack The Box (HTB)', 'TryHackMe', 'SANS Holiday Hack'],
    2,
    'TryHackMe leverages guided rooms with clear walkthrough paths, making it ideal for foundational, hands-on security training.'
  ),
  createQuestion(
    'qn-ct-6',
    'What is the standard focus of the "picoCTF" learning environment?',
    ['Advanced nation-state APT simulation arrays', 'A student-friendly, educational cybersecurity ecosystem targeting core topics like web utilities, basic cryptography, and simple reverse engineering', 'Physical lockpicking challenges', 'CompTIA hardware cataloging'],
    1,
    'picoCTF, created by Carnegie Mellon University, offers a beginner-friendly platform focusing on fundamentals.'
  ),
  createQuestion(
    'qn-ct-7',
    'During a penetration test, a tester executes a high-bandwidth Denial of Service (DoS) script that causes an enterprise database to crash. If the RoE explicitly prohibited DoS techniques, what is the consequence?',
    ['The tester receives bonus XP rewards', 'The test remains fully compliant as long as they recover the database', 'The tester violated the contract, nullifying legal exemptions and exposing themselves to liability or termination', 'It triggers automatic LAPS key rotations'],
    2,
    'Violating the RoE breaches the legal agreement, exposing testers to civil or criminal liabilities.'
  ),
  createQuestion(
    'qn-ct-8',
    'Which Cyber Range hosting ecosystem is widely known for hosting "black-box" virtual machines that mimic realistic enterprise networks, challenging users to escalate local privileges?',
    ['Hack The Box (HTB)', 'WHOIS repository console', 'Autopsy user screens', 'VirusTotal search tables'],
    0,
    'Hack The Box is a leading security platform offering advanced, realistic black-box hacking scenarios.'
  ),
  createQuestion(
    'qn-ct-9',
    'Why is establishing a clear "Engagement Window" (days and hours of legal scanning) critical in a Penetration Testing project proposal?',
    ['It increases the compiler speed of local scripts.', 'It ensures clients can monitor administrative logs, schedule operations when business impact is lowest, and distinguish testing from active real-world hostile actions.', 'It helps rotate the guest operating systems.', 'It satisfies HIPAA database storage standards.'],
    1,
    'Defining explicit time boundaries helps the client distinguish authorized testing activity from actual external attacks.'
  ),
  createQuestion(
    'qn-ct-10',
    'What is the role of emergency contact procedures defined inside a Rules of Engagement (RoE) contract?',
    ['To reset forgotten Active Directory user passwords', 'Provide immediate channels for the operations team to order penetration testers to halt activities if critical services fail', 'Route public relations declarations to media outlets', 'Configure LAPS keys globally'],
    1,
    'Emergency contacts allow clients and testers to communicate immediately if systems become unstable during security tests.'
  ),
  createQuestion(
    'qn-ct-11',
    'Which Cyber Range is hosted as an annual, narrative Christmas-themed cybersecurity playground containing complex mini-games and terminal challenges?',
    ['TryHackMe rooms', 'Hack The Box Prolabs', 'SANS Holiday Hack Challenge', 'VulnHub offline VM sets'],
    2,
    'The SANS Holiday Hack Challenge (KringleCon) is a highly-regarded, annual gamified learning event.'
  ),
  createQuestion(
    'qn-ct-12',
    'In CTF terminology, what is a "Flag"?',
    ['An automated network firewall configuration template', 'A unique, hard-to-find text string (e.g., flag{abc_123}) placed on a system to prove a security analyst successfully exploited a vulnerability', 'A system indicator flagged by endpoint antivirus software', 'A standard GPO parameter'],
    1,
    'A "flag" is the token of success in cyber ranges, verifying that a vulnerability was successfully navigated.'
  ),
  createQuestion(
    'qn-ct-13',
    'What are the primary target areas tested in picoCTF challenges representatively?',
    ['Corporate HR policies and office cleaning', 'Web Security, Cryptography, Reverse Engineering, Forensics, and Binary Exploitation', 'Physical server building locks and air conditioning', 'CompTIA A+ hardware assembly metrics'],
    1,
    'picoCTF covers core practical areas including web security, reverse engineering, cryptography, and binary exploitation.'
  ),
  createQuestion(
    'qn-ct-14',
    'A penetration tester is evaluating an client active system subnet and discovers a sensitive server not declared in the RoE "Scope" list. What should they do?',
    ['Scan the server stealthily to see if it contains vulnerabilities', 'Do not touch or scan the server, and notify the client contact point to clarify if the resource should be added to the scope list', 'Format the server partitions using dd commands', 'Isolate the node inside a guest sandbox immediately'],
    1,
    'Resource scopes are strictly defined; accessing out-of-scope nodes is prohibited and legally risky.'
  ),
  createQuestion(
    'qn-ct-15',
    'Which scenario represents an "Active CTF" challenge as opposed to a static learning walkthrough?',
    ['Evaluating a step-by-step document explaining how to change a password', 'A live, competitive event where teams race against a timer to exploit a shared range, submitting flags on a dynamic score system', 'Downloading a Windows update patch manually', 'Auditing firewalls via local paper checklists'],
    1,
    'Active, competitive CTFs assess hands-on speed and adaptability through live, timed team-v-team challenges.'
  ),
  createQuestion(
    'qn-ct-16',
    'Why must penetration testing reports include a detailed description of the methodology used to discover weaknesses?',
    ['To fill space in the document', 'To allow the client security team to reproduce and verify the vulnerabilities, confirming remediation efficacy', 'To satisfy standard compiler validation errors', 'To advertise expensive proprietary software products'],
    1,
    'Documenting the exact steps allows client remediation teams to recreate issues, verify vulnerabilities, and confirm fixes.'
  ),
  createQuestion(
    'qn-ct-17',
    'Which practice is typically banned inside a standard Rules of Engagement document to avoid system degradation?',
    ['Running standard port discovery scans using Nmap', 'Executing destructive exploits or launching non-consensual Denial of Service (DoS) attacks', 'Querying public WHOIS databases', 'Configuring local Linux interfaces with ip addr'],
    1,
    'Aggressive, destructive exploits and DoS attacks are usually restricted to avoid disrupting real production systems.'
  ),
  createQuestion(
    'qn-ct-18',
    'What distinguishes "White-box" testing from "Black-box" testing in professional security audits?',
    ['White-box uses older operating systems.', 'White-box testers are given full internal system details, network maps, and source codes; Black-box testers are given zero configuration details beforehand.', 'Black-box testing never uses software tools.', 'White-box testing is always unauthorized.'],
    1,
    'White-box testing provides full background documentation, while black-box testing simulates attacks with zero prior knowledge.'
  ),
  createQuestion(
    'qn-ct-19',
    'What term is used in cyber security to describe tests simulating attacks with partial knowledge of target infrastructure coordinates?',
    ['NIST vulnerability audits', 'Gray-box testing', 'Black-box testing', 'Passive OSINT captures'],
    1,
    'Gray-box testing simulates attacks where the tester has access to limited, user-level system credentials or network diagrams.'
  ),
  createQuestion(
    'qn-ct-20',
    'Which software virtualization provider is most commonly utilized to load and play VulnHub downloaded offline security target machines?',
    ['Oracle VirtualBox (or VMware)', 'Wireshark packet processor', 'VirusTotal database lookup', 'FTK Imager clone system'],
    0,
    'Local hypervisors like Oracle VirtualBox or VMware Player are used to host and play downloaded VulnHub machines.'
  )
];

// ========================================================
// QUIZ 4: PROFESSIONAL SECURITY PATHWAYS: FRAMEWORK CERTIFICATIONS ROADMAP (20 Qs)
// ========================================================
export const industryCredentialsQuestions: QuizQuestion[] = [
  createQuestion(
    'qn-ic-1',
    'Which standard junior-to-mid security validation certifies baseline competency across cryptographic structures, network hardening controls, and security operation tasks?',
    ['CompTIA Security+', 'CCNA Security', 'CISSP audit registration', 'CISM leadership credentials'],
    0,
    'CompTIA Security+ is universally recognized as the premier entry-to-mid security certificate verifying basic operational security knowledge.'
  ),
  createQuestion(
    'qn-ic-2',
    'Which certification requires candidates to analyze 8 broad architectural domains and undergoes a rigorous credentialing verification of 5 years of verified security experience?',
    ['CompTIA Security+', 'Cisco CCNA', 'CISSP', 'CEH'],
    2,
    'The CISSP is a senior architecture standard requiring candidates to pass an adaptive exam and prove at least 5 years of professional workspace experience.'
  ),
  createQuestion(
    'qn-ic-3',
    'Which practical cybersecurity certification requires candidates to complete a 24-hour network-wide penetration test in a monitored, black-box lab environment?',
    ['CEH (Certified Ethical Hacker)', 'CompTIA Security+', 'OSCP (Offensive Security Certified Professional)', 'CISM leadership'],
    2,
    'The OSCP is a 24-hour, highly-regarded practical penetration testing exam requiring candidates to compromise lab machines.'
  ),
  createQuestion(
    'qn-ic-4',
    'Which Cisco credential certifies an analyst\'s ability to configure physical layer-2 switches, handle IPv4/IPv6 subnetting, and manage routing protocols?',
    ['CompTIA Network+', 'Cisco CCNA', 'CISSP blueprint', 'CISM certification'],
    1,
    'The Cisco Certified Network Associate (CCNA) validates solid intermediate networking and routing competence.'
  ),
  createQuestion(
    'qn-ic-5',
    'Which baseline certificate validates entry-level physical computer repair, operating system configuration, and technician helpdesk troubleshooting skills?',
    ['CompTIA Security+', 'Cisco CCNA', 'CompTIA A+', 'OSCP pentesting labs'],
    2,
    'CompTIA A+ is the foundational standard for technical helpdesk, operating systems, hardware assembly, and repair.'
  ),
  createQuestion(
    'qn-ic-6',
    'Which specialized certification from ISACA is specifically target-modeled for security managers, overseeing risk portfolios, governance frameworks, and disaster recovery?',
    ['CompTIA Linux+', 'Certified Ethical Hacker (CEH)', 'CISM (Certified Information Security Manager)', 'OSCP practical'],
    2,
    'CISM focuses on risk analysis, administrative alignment, incident management, and high-level security governance.'
  ),
  createQuestion(
    'qn-ic-7',
    'Which credential focuses primarily on system command-line proficiency, path navigations, access permissions, and systemd maintenance on Unix-like targets?',
    ['CompTIA Linux+', 'Cisco CCNA', 'CompTIA Security+', 'CISSP domains'],
    0,
    'CompTIA Linux+ validates administrative competency inside Linux configurations, automation, and core CLI services.'
  ),
  createQuestion(
    'qn-ic-8',
    'What describes the main exam format of the Certified Ethical Hacker (CEH) certification representatively?',
    ['A 24-hour live programming challenge', 'A 125-question multiple-choice exam focusing on scanning methodologies, tools, and exploit signatures', 'An oral presentation to a board of corporate board members', 'A physical server assembly lab'],
    1,
    'CEH tests theoretical knowledge of hacking tools, footprinting methodologies, and defensive frameworks through multiple-choice questions.'
  ),
  createQuestion(
    'qn-ic-9',
    'Which organisation governs, audits, and maintains the CISSP certification program globally?',
    ['CompTIA', 'ISC2', 'ISACA', 'Cisco'],
    1,
    'ISC2 (International Information System Security Certification Consortium) administers the CISSP program and its associated security domains.'
  ),
  createQuestion(
    'qn-ic-10',
    'Why does the CISSP exam require candidates to prove they have five years of verified cumulative experience in at least two of the eight domains?',
    ['To charge more expensive registration fees', 'To ensure candidates possess deep, real-world practical experience rather than just theoretical, book-learned knowledge', 'To limit the compiler execution parameters', 'To satisfy HIPAA compliance regulations'],
    1,
    'The five-year professional experience mandate underpins the CISSP\'s status as a preeminent senior advisory credential.'
  ),
  createQuestion(
    'qn-ic-11',
    'Which CompTIA certification would you pursue specifically to intermediate between Security+ and CISSP, verifying skill in vulnerability scanning, threat intelligence, and behavioral analytics?',
    ['CompTIA A+', 'CySA+ (Cybersecurity Analyst+)', 'Cisco CCNA', 'OSCP practical'],
    1,
    'CySA+ is an intermediate credential focusing on defensive analysis, SIEM logs, incident response, and vulnerability diagnostics.'
  ),
  createQuestion(
    'qn-ic-12',
    'What specialized offensive certification, popular for security consultants, is administered by OffSec and requires writing a thorough technical penetration report to pass?',
    ['CompTIA Security+', 'CISM governance', 'OSCP', 'CEH multiple choice'],
    2,
    'Over and above compromising target hosts, the OSCP requires compiling a professional-grade penetration report to pass.'
  ),
  createQuestion(
    'qn-ic-13',
    'An engineer wants to specialize specifically in cloud resources security architecture. Which vendor-neutral standard should they pursue under ISC2?',
    ['CompTIA Cloud+', 'CCSP (Certified Cloud Security Professional)', 'AWS Cloud practitioner', 'Cisco CCNA'],
    1,
    'CCSP is an advanced cloud security architecture certification managed by ISC2.'
  ),
  createQuestion(
    'qn-ic-14',
    'Which standard junior network certification validates basic subnet math, network media types, topology structures, and routing concepts?',
    ['CompTIA Network+', 'CompTIA Linux+', 'CCNA Security', 'OSCP'],
    0,
    'CompTIA Network+ validates critical baseline competency in enterprise networking architectures and protocols.'
  ),
  createQuestion(
    'qn-ic-15',
    'What credentialing body manages, audits, and issues the Certified Information Security Manager (CISM) credential?',
    ['ISC2', 'CompTIA', 'ISACA', 'OffSec'],
    2,
    'ISACA is the global professional association issuing the CISM, CISA, and CRISC certifications.'
  ),
  createQuestion(
    'qn-ic-16',
    'An analyst wants to specialize in forensic analysis of storage partitions, file system metadata, and host operating registries. Which vendor-neutral course fits best?',
    ['CEH offensive track', 'CHFI (Computer Hacking Forensic Investigator)', 'Cisco CCNA routing', 'CompTIA A+'],
    1,
    'The CHFI certifies baseline competency in computer forensics, data recovery, and evidence processing.'
  ),
  createQuestion(
    'qn-ic-17',
    'Which security designation is often standard for audits of corporate internal controls, financial system reliability, and IT compliance processes?',
    ['CISA (Certified Information Systems Auditor)', 'OSCP practical pentesting', 'CompTIA Security+', 'Cisco CCNA'],
    0,
    'CISA (issued by ISACA) is the premier certification for managing IT audits, internal controls, and corporate compliance.'
  ),
  createQuestion(
    'qn-ic-18',
    'What does "Continuing Professional Education" (CPE) represent in the context of maintaining active security certificates?',
    ['Taking physical university classes', 'Periodic training credits (e.g., attending conferences or writing articles) required to keep certifications active and current', 'Buying updated software packages annually', 'Maintaining an active profile in TryHackMe'],
    1,
    'CPE credits ensure certified professionals stay current with changing security vectors throughout their careers.'
  ),
  createQuestion(
    'qn-ic-19',
    'What is the distinct focus of the CompTIA CASP+ (Practice-certified Advanced Security Practitioner) compared to CISSP?',
    ['It is designed strictly for helpdesk specialists.', 'It targets hands-on engineering security practices and technical solution design rather than high-level administrative management.', 'It does not require any examination.', 'It is completely offensive.'],
    1,
    'CASP+ is designed for technical experts who prefer hands-on engineering and architecture over administrative management.'
  ),
  createQuestion(
    'qn-ic-20',
    'Which of the following describes the core domain layout of the CISSP certification syllabus?',
    ['8 security domains covering concepts from risk management, asset security, to network engineering and identity access', 'A sequential system assembly pipeline', 'A single 24-hour mock hacking scenario', 'A vendor-specific Cisco router configuration curriculum'],
    0,
    'The CISSP covers 8 key domains of knowledge, ensuring a broad and balanced understanding of security architecture.'
  )
];

// ========================================================
// EXAM: PRACTICAL TOOLING & INDUSTRY CREDENTIALS MASTER EXAM (100 Qs)
// ========================================================
export const group7MasterExamQuestions: QuizQuestion[] = [
  createQuestion(
    'em7-1',
    'A cybersecurity engineer needs to monitor an interface card natively on a server terminal to capture continuous web and system packets. Which console tool is best suited?',
    ['netstat', 'tcpdump', 'nslookup', 'arp'],
    1,
    'tcpdump is a CLI packet processor that intercepts and logs raw Ethernet/IP frames of system interfaces.'
  ),
  createQuestion(
    'em7-2',
    'Which document is legally required before starting security assessments, defining authorized scopes, timelines, contact addresses, and target directories?',
    ['NIST Risk mitigation blueprint', 'The Rules of Engagement (RoE)', 'CompTIA Certification syllabus', 'CIS Critical audit control checklist'],
    1,
    'The Rules of Engagement (RoE) is the contract defining authorized boundaries, allowed tools, and rules of engagement.'
  ),
  createQuestion(
    'em7-3',
    'A system engineer wants to quickly scan a target network subnet to map open ports and identify running service versions. Which utility is best for this task?',
    ['arp', 'nmap', 'nslookup', 'route'],
    1,
    'Nmap scans addresses to locate active ports, identify operating systems, and enumerate vulnerability indicators.'
  ),
  createQuestion(
    'em7-4',
    'A digital forensics analyst discovers a suspect server has been powered down, causing them to lose key indicators of compromise. What volatile storage contains this ephemeral data?',
    ['Solid State drive partitioning', 'Host Random Access Memory (RAM)', 'Mechanical storage arrays', 'Optical recovery archives'],
    1,
    'RAM holds active configuration logs, clear-text encryption keys, and volatile session data that erase completely upon power loss.'
  ),
  createQuestion(
    'em7-5',
    'Which open-source platform is designed to act as an intentional vulnerable decoy database to trap attackers and analyze active command patterns?',
    ['A dynamic Sandbox', 'An enterprise Honeypot', 'A GPO rule', 'A Jump Server gateway'],
    1,
    'Honeypots are decoy networks/databases designed to attract attackers so operational teams can observe threat actor methods.'
  ),
  createQuestion(
    'em7-6',
    'An IT professional is looking to progress into advanced advisory security positions. Which globally recognized standard calls for at least 5 years of domain experience and tests 8 security domains?',
    ['CompTIA Security+', 'CEH multiple-choice exam', 'CISSP', 'CCNA routing certification'],
    2,
    'The CISSP (Certified Information Systems Security Professional) is widely considered the industry benchmark for senior security design and governance.'
  ),
  createQuestion(
    'em7-7',
    'Which command-line switch should be used with "netstat" on Windows to print the active connections along with the process IDs associated with each socket binding?',
    ['-ano', '-tulnp', '-rn', '-e'],
    0,
    'On Windows systems, netstat -ano prints active TCP/UDP lines, their state, and matching PID values.'
  ),
  createQuestion(
    'em7-8',
    'Which native block-level command-line utility is used on Linux terminals to write exact bitwise clones of a source storage medium?',
    ['cat', 'grep', 'dd', 'tail'],
    2,
    'The dd (data duplicator) tool writes block-by-block disk clones, ensuring no evidentiary metadata is altered.'
  ),
  createQuestion(
    'em7-9',
    'An analyst wants to watch the logs of an Apache server update dynamically in a terminal as traffic hits the server. What command is used?',
    ['head -n 20 access.log', 'tail -f access.log', 'cat access.log', 'grep "GET" access.log'],
    1,
    'The "tail -f" utility follows text outputs as they are dynamically written to log files.'
  ),
  createQuestion(
    'em7-10',
    'What is the distinct task performed by an interactive sandbox like any.run when analyzing a suspicious document?',
    ['Compares file signatures against global reputation blacklist APIs', 'Runs the binary inside a secure virtualized host runtime, allowing live tracking of processes, registry keys, and API calls', 'Reconfigures domain active controller policies', 'Images the hard drive sector layers'],
    1,
    'Sandboxes run suspicious applications in isolated virtual environments, tracing process lifecycle activities safely.'
  ),
  createQuestion(
    'em7-11',
    'Which legal document governs the operational scope, forbidden test vectors, and testing schedule for a penetration testing deployment?',
    ['SANS incident blueprint', 'The Rules of Engagement (RoE)', 'CompTIA Security+ guidelines', 'CIS controls registry'],
    1,
    'The Rules of Engagement (RoE) defines the legal contract, scope boundaries, active targets, and emergency contacts.'
  ),
  createQuestion(
    'em7-12',
    'Which digital forensic utility enables specialists to visually reconstruct, carve, and analyze filesystem registries, drive partitions, and metadata from import clones?',
    ['Wireshark', 'Autopsy', 'VirusTotal', 'any.run'],
    1,
    'Autopsy is an open-source digital forensic platform used to carve metadata, index databases, and evaluate disk images.'
  ),
  createQuestion(
    'em7-13',
    'An engineer needs to download a secure update package from an external API server over HTTP/S using command line tools. What CLI utility is native to Unix shells?',
    ['route', 'ipconfig', 'curl', 'netstat'],
    2,
    'The "curl" utility transfers data from or to servers, supporting HTTP, HTTPS, FTP, and other standard protocols.'
  ),
  createQuestion(
    'em7-14',
    'Which certification requires intermediate cybersecurity analysts to conduct behavioral analytics, parse SIEM streams, and configure vulnerability scanning parameters?',
    ['CompTIA A+', 'CySA+ (Cybersecurity Analyst+)', 'Cisco CCNA', 'OSCP practical pentesting'],
    1,
    'CySA+ certifies analyst skills in security operations, threat detection, and continuous security monitoring.'
  ),
  createQuestion(
    'em7-15',
    'To print physical MAC mapping tables built by local network bridges over Layer 2 on Windows or Linux, which command is executed?',
    ['arp -a', 'nslookup', 'route print', 'ipconfig /all'],
    0,
    'The "arp" command (often with the -a flag) lists the address translation maps linking logical IPs to hardware MAC paths.'
  ),
  createQuestion(
    'em7-16',
    'Which professional cybersecurity benchmark is a intensive, 24-hour completely hands-on offensive penetration testing challenge requiring candidates to compile a report to pass?',
    ['CISSP governance', 'CEH multiple choice', 'OSCP (Offensive Security Certified Professional)', 'CompTIA Security+'],
    2,
    'The OSCP is widely recognized as a preeminent practical penetration testing certification.'
  ),
  createQuestion(
    'em7-17',
    'Which diagnostic tool queries global registration databases to details regarding a suspect domain registrar, registration dates, and server authorities?',
    ['traceroute', 'dig', 'WHOIS', 'nmap'],
    2,
    'WHOIS databases maintain registration information detailing origin ownership, registries, and DNS routing records.'
  ),
  createQuestion(
    'em7-18',
    'An investigator needs to verify that a cloned drive database remains an identical match to the physical drive before analysis. What calculation is evaluated?',
    ['Storage size comparison', 'Cryptographic hashing (such as MD5 or SHA-256) of both nodes to verify equal output tags', 'RAM consumption benchmarks', 'OS system registry mapping checks'],
    1,
    'Hash checks verify that the forensic clone is an unaltered clone of the suspicious physical asset.'
  ),
  createQuestion(
    'em7-19',
    'What Kali Linux pre-packaged system configuration contains robust wireless exploitation scripts, vulnerability scanning engines, and reverse engineering tools?',
    ['Kali Linux Security Distro', 'ParrotOS Mobile', 'Ubuntu Desktop Base', 'CentOS Server Core'],
    0,
    'Kali Linux is a dedicated security-testing distribution containing hundreds of security utilities.'
  ),
  createQuestion(
    'em7-20',
    'What describes the main function of "VirusTotal" as a threat intelligence repository?',
    ['An offline forensic suite used to recover deleted registries', 'A multi-engine platform that checks submitted files, URLs, or hashes against over 70 antivirus databases in parallel', 'An internal web server hosting honeypot databases', 'A command-line tool measuring Layer 3 packet hops'],
    1,
    'VirusTotal checks files against historical virus databases to isolate known infections rapidly.'
  ),
  createQuestion(
    'em7-21',
    'What is the standard switch config passed to "nmap" to evaluate target ranges specifically using quiet, non-fully established TCP SYN connections?',
    ['-sT', '-sS', '-sU', '-sV'],
    1,
    'The -sS switch conducts SYN scans, terminating connections before completion to execute more subtle scans.'
  ),
  createQuestion(
    'em7-22',
    'Which utility helps trace the packet route, hop-by-hop latency, and network drop locations of intermediate pathways between systems?',
    ['ping', 'nslookup', 'traceroute (or tracert)', 'netstat'],
    2,
    'Traceroute / tracert relies on TTL incrementation to identify every hop along a networking path.'
  ),
  createQuestion(
    'em7-23',
    'Which foundational certification validates baseline knowledge regarding physical hardware structures, operating systems, and basic client troubleshoot skills?',
    ['CompTIA Security+', 'Cisco CCNA', 'CompTIA A+', 'CEH domains'],
    2,
    'CompTIA A+ is the industry benchmark for entry-level technician skills.'
  ),
  createQuestion(
    'em7-24',
    'What specialized Linux utility edits, reads, and searches raw block-level sectors of storage drives, useful for digital recovery and low-level forensics data analysis?',
    ['Volatility', 'winhex or hex editors', 'FTK Imager GUI', 'Autopsy forensic suite'],
    1,
    'Hex editors like winhex allow analysts to examine and edit the exact binary representation of physical directories.'
  ),
  createQuestion(
    'em7-25',
    'Which tool under Linux allows administrators to apply host-level packet filters, firewall configurations, and address translation states?',
    ['ip addr', 'iptables', 'netstat', 'traceroute'],
    1,
    'iptables manages netfilter rules, matching traffic against source/destination headers and port tags.'
  ),
  createQuestion(
    'em7-26',
    'In a Capture the Flag (CTF) game, what constitutes the "Flag" that contestants must hunt and recover?',
    ['A physical physical banner hosted at the data center', 'A unique, hard-to-find text string (e.g., flag{abc_123}) confirming successful exploitation of a target vulnerability', 'A system indicator flagged by endpoint antivirus software', 'A custom Active directory password string'],
    1,
    'A flag is the token of proof verifying a target compromise has been successfully performed.'
  ),
  createQuestion(
    'em7-27',
    'Which global standard certifies and registers informational risk managers, supervising governance structures, organizational continuity, and compliance policies?',
    ['CompTIA A+', 'OSCP practical pentest', 'CISM (Certified Information Security Manager)', 'CEH multiple choice'],
    2,
    'The CISM from ISACA validates leadership-level security risk management and governance competency.'
  ),
  createQuestion(
    'em7-28',
    'An analyst notices a local host cache registry maps stale addresses for a client target portal. What terminal command clears stale mapping tags on Windows?',
    ['ipconfig /release', 'ipconfig /renew', 'ipconfig /flushdns', 'ipconfig /all'],
    2,
    'The /flushdns command purges local cached DNS data, causing fresh lookup queries.'
  ),
  createQuestion(
    'em7-29',
    'Which cyber range platform focuses on beginner-to-intermediate guided, structured rooms featuring walkthrough instructions for learning CLI networks and tool syntax?',
    ['TryHackMe', 'Hack The Box (HTB)', 'VulnHub downloadable VMs', 'SANS Holiday Hack challenge'],
    0,
    'TryHackMe uses walkthrough paths to guide security students starting active operations.'
  ),
  createQuestion(
    'em7-30',
    'Before opening suspected virus links inside an enterprise workstation, what cloud platform acts as an automated analyzer rendering web actions safely?',
    ['FTK Imager', 'urlscan.io', 'Volatility', 'WHOIS'],
    1,
    'urlscan.io renders URL behavior in sandboxed cloud browers, protecting network nodes from infection.'
  ),
  createQuestion(
    'em7-31',
    'An analyst wants to examine if local systems bind to listening ports that are unauthorized. What CLI utility exposes local protocol socket bindings?',
    ['arp', 'nslookup', 'netstat', 'ping'],
    2,
    'netstat lists listening ports and active sockets, showing connected parties and process ids.'
  ),
  createQuestion(
    'em7-32',
    'Which digital forensic hardware inhibits the forensics analyst’s workstation from accidentally writing metadata changes to imported evidence storage disks?',
    ['An active VM sandbox wrapper', 'A hardware Write-Blocker adapter', 'An FTK Imager script folder', 'A local nmap scanner'],
    1,
    'Write-blockers disable any potential write commands to maintain evidence files without alterations.'
  ),
  createQuestion(
    'em7-33',
    'The NIST.gov Risk Management Framework uses Authorizing Officials (AO) to authorize a network systems deployment. Who is this representative?',
    ['The developer writing the SQL queries', 'The senior executive who formally accepts residual systems risks and permits operations', 'The external auditing service lead', 'The technician patching local helpdesks'],
    1,
    'The Authorizing Official (AO) holds responsibility for signing off on systems safety and risk.'
  ),
  createQuestion(
    'em7-34',
    'What Cisco credential certifies baseline operational skills across physical layer router layouts, VLAN boundaries, network subnet designs, and routing parameters?',
    ['CompTIA Security+', 'Cisco CCNA', 'CISSP domain blueprint', 'CISM enterprise lead'],
    1,
    'Cisco\'s CCNA is the preeminent routing and switching foundational validation.'
  ),
  createQuestion(
    'em7-35',
    'What describes a "Honeynet"?',
    ['An advanced visual dashboard displaying active SIEM logs', 'A network of interactive honeypot decoys designed to attract malicious lateral traversals for analysis', 'A high-speed cloud database platform', 'A local hardware interface tracking MAC structures'],
    1,
    'Honeynets are networks of decoys designed to monitor attacker lateral traversal techniques.'
  ),
  createQuestion(
    'em7-36',
    'Why must penetration testing campaigns strictly avoid "Out-of-Scope" network assets and addresses?',
    ['Accessing out-of-scope assets can cause performance leaks', 'Scanning or accessing out-of-scope devices is illegal, violates the Rules of Engagement, and exposes testers to severe liability', 'It alters Active Directory baseline configurations', 'It bypasses the local NAC network profiles'],
    1,
    'Accessing nodes outside of the written scope is a major contract violation with potential legal consequences.'
  ),
  createQuestion(
    'em7-37',
    'Which global standard certifies and validates IT auditing competence, internal compliance auditing, and controls engineering?',
    ['CompTIA Linux+', 'CEH offensive tracker', 'CISA (Certified Information Systems Auditor)', 'OSCP practical pentesting'],
    2,
    'CISA represents the global audit standard for managing, evaluating, and designing IT systems controls.'
  ),
  createQuestion(
    'qn-nd-comp1',
    'Which command syntax in Linux allows a security engineer to trace current socket bindings, processes, and service paths filtering specifically for "ssh"?',
    ['netstat -ano | grep ssh', 'netstat -tulnp | grep ssh', 'arp -a | grep ssh', 'route print | grep ssh'],
    1,
    'On Linux systems, combining netstat -tulnp with a grep filter isolates process names and bindings matching ssh.'
  ),
  createQuestion(
    'qn-nd-comp2',
    'If a security analyst executes "ip addr" on a system and gets "127.0.0.1", what interface adapter is active?',
    ['The default physical ethernet network adapter', 'The corporate physical wireless network card', 'The loopback diagnostic interface adapter', 'An external VPN gateway target'],
    2,
    'The IPv4 coordinate loopback local routing address is 127.0.0.1.'
  ),
  createQuestion(
    'qn-nd-comp3',
    'A network engineer needs to test remote firewalls by sending continuous customized TCP packets with the ACK flag enabled. Which command utility is used?',
    ['ping', 'hping3 --ack', 'nslookup', 'arp'],
    1,
    'hping3 features robust arguments facilitating the creation of custom packets with specific flags.'
  ),
  createQuestion(
    'qn-nd-comp4',
    'What parameter on a Linux terminal prints the first 15 lines of a text log file?',
    ['tail -n 15 logfile', 'head -n 15 logfile', 'cat -n 15 logfile', 'grep -n 15 logfile'],
    1,
    'The "head" utility outputs the top portion of a specified file stream.'
  ),
  createQuestion(
    'qn-nd-comp5',
    'What port is utilized natively by DNS systems to receive administrative name lookups from local host client environments?',
    ['TCP Port 80', 'UDP Port 53', 'TCP Port 443', 'TCP Port 445'],
    1,
    'DNS operations use UDP Port 53 to manage address translation lookups.'
  ),
  createQuestion(
    'qn-nd-comp6',
    'What utility allows a network administrator on Windows to verify the local network card MAC physical address?',
    ['ipconfig /all', 'arp -a', 'nslookup', 'route print'],
    0,
    'Executing ipconfig with the /all option lists MAC physical addresses alongside active lease profiles.'
  ),
  createQuestion(
    'qn-nd-comp7',
    'What does a "Time-to-Live (TTL) Expired in Transit" ICMP message indicate during a traceroute operation?',
    ['The packet buffer registry crashed on the system', 'The packet packet reached its limit of hop steps, indicating the location of an intermediate hop router', 'The target network router is rejecting connection packets', 'Local DNS mappings are stale'],
    1,
    'Traceroute relies on TTL expirations to identify intermediate routing nodes along the path.'
  ),
  createQuestion(
    'qn-nd-comp8',
    'Which command displays the Linux system ARP cache mapping IP addresses to physical MAC routes in a standard shell?',
    ['route print', 'ip neigh (or arp -an)', 'netstat -tulnp', 'nslookup'],
    1,
    'The command "ip neigh" or "arp -an" prints local ARP mappings.'
  ),
  createQuestion(
    'qn-nd-comp9',
    'A security tester needs to perform an exhaustive port scan on a single system targeting all 65,535 TCP ports. Which nmap switch config is passed?',
    ['-p 65535', '-p-', '-sT', '-sS'],
    1,
    'The "-p-" flag instructs Nmap to scan all possible port allocations.'
  ),
  createQuestion(
    'qn-nd-comp10',
    'If you run "ping 8.8.8.8" and get a response metric showing "Destination Host Unreachable", what Layer may have a routing path failure?',
    ['Physical layer wiring bridges only', 'Layer 3 Network Routing configurations', 'Application layer web configurations', 'Operating system registries'],
    1,
    'An "Unreachable" message indicates a Layer 3 routing failure blocking access to the target subnet.'
  ),
  createQuestion(
    'qn-ft-comp1',
    'While capturing system memory diagnostics, what command utility maps active processes, loaded DLLs, and registry hives directly from the memory file?',
    ['Volatility', 'FTK Imager', 'Autopsy', 'Wireshark'],
    0,
    'Volatility is specifically designed for deep RAM forensics and investigation of memory dumps.'
  ),
  createQuestion(
    'qn-ft-comp2',
    'Which forensic workspace layout is widely utilized by law enforcement to preserve static byte copies of target drives into encrypted forensic formats like .E01?',
    ['winhex binary editor', 'FTK Imager', 'any.run sandbox', 'Kali terminal packages'],
    1,
    'FTK Imager handles drive acquisition and produces secure, hash-verified forensic image formats.'
  ),
  createQuestion(
    'qn-ft-comp3',
    'An investigator discovers that system log parameters have been deleted. What forensic technique recovers these erased blocks directly from disk drive sectors?',
    ['VirusTotal multi-engine scans', 'Data Carving using Autopsy or diagnostic editors', 'any.run process virtualization', 'WHOIS administrative queries'],
    1,
    'Data carving reconstructs raw file segments directly from disk sectors when filesystem metadata is missing.'
  ),
  createQuestion(
    'qn-ft-comp4',
    'Which open source portal lets a researcher trace external IP registry allocations, WHOIS registrants, and domain contacts easily?',
    ['Volatility memory carver', 'WHOIS and OSINT registries', 'FTK Imager drive systems', 'any.run visual trackers'],
    1,
    'WHOIS registers contact detail, registrar metrics, and allocation timestamps for domain networks.'
  ),
  createQuestion(
    'qn-ft-comp5',
    'Which component of a PCAP file contains the actual raw bytes transmitted in individual network conversations?',
    ['The network interface MAC route', 'The packet payload segment', 'The DNS cache registry list', 'The local compiler terminal log'],
    1,
    'The packet payload holds the actual data transmitted during network communications.'
  ),
  createQuestion(
    'qn-ft-comp6',
    'What occurs if a digital forensics analyst performs system investigations directly on a live evidence drive without mounting blocks on a write-blocker?',
    ['The drive cooling adapters fail', 'The operating system automatically writes system files, metadata, and timeline changes to the evidence disk, corrupting the image integrity', 'The local database rotates LAPS keys', 'The drive partition is automatically formatted'],
    1,
    'Modifying metadata or file timestamps on an active evidence drive can compromise its legal admissibility.'
  ),
  createQuestion(
    'qn-ft-comp7',
    'How does ParrotOS improve administrative efficiency over standard Kali Linux on laptops with limited hardware resources?',
    ['It does not support command-line shells.', 'It is designed as a lightweight Debian alternative requiring fewer CPU cores and less RAM system overhead.', 'It does not require any antivirus updates.', 'It is completely vendor-specific Cisco software.'],
    1,
    'ParrotOS is optimized to be lightweight and responsive on constrained hardware platforms.'
  ),
  createQuestion(
    'qn-ft-comp8',
    'An analyst wants to isolate web calls, DNS redirects, and process trees of a suspicious PDF. What secure cloud runtime detonates this file visually?',
    ['Autopsy suite tools', 'urlscan.io reputation lists', 'any.run interactive sandbox', 'FTK Imager drive duplicator'],
    2,
    'any.run visualizes the process execution tree of detonated executables and documents in real-time.'
  ),
  createQuestion(
    'qn-ft-comp9',
    'Which file parameter is queried automatically by VirusTotal to see if a file has been flagged as malicious by other security vendors?',
    ['Filesystem path structure details', 'Cryptographic hash values (such as SHA-256 or MD5)', 'Local active CPU load tags', 'Windows domain controller registers'],
    1,
    'VirusTotal uses cryptographic hashes to quickly check files against historical threat databases.'
  ),
  createQuestion(
    'qn-ft-comp10',
    'What describes "Volatile Evidence" according to standard digital forensics guidelines?',
    ['Stored database files scheduled for offline archiving', 'System properties, RAM registers, active network lines, and socket logs that are lost upon power disruption', 'Physical lock mechanisms inside server facilities', 'Hard disk drive data partitions'],
    1,
    'Volatile evidence consists of transient system state data that requires immediate extraction to prevent loss.'
  ),
  createQuestion(
    'qn-ct-comp1',
    'Which standard document specifies the absolute range of IP addresses, domain scopes, and devices targeted during security scanning campaigns?',
    ['CompTIA exam catalog', 'Rules of Engagement (Scope parameters)', 'NIST SP 800-53 catalog', 'WHOIS registry record'],
    1,
    'The scope section of the RoE details the specific targets authorized for testing.'
  ),
  createQuestion(
    'qn-ct-comp2',
    'Which Cyber Range platform focuses on providing prepackaged offline target VM images that students must configure locally inside Oracle VirtualBox?',
    ['TryHackMe', 'Hack The Box', 'VulnHub', 'SANS Holiday Hack'],
    2,
    'VulnHub hosts downloadable virtual machine targets that can be run and analyzed offline.'
  ),
  createQuestion(
    'qn-ct-comp3',
    'In a Capture the Flag contest, what does achieving "Root Privileges" on an target system indicate?',
    ['The developer local IDE is configured successfully', 'The investigator has gained total administrative control of the target Linux node, enabling complete data access', 'The network interfaces are bridged over Layer 2', 'LAPS keys are rotated in Active Directory'],
    1,
    'Root is the ultimate administrative identity in Unix and Linux operating environments.'
  ),
  createQuestion(
    'qn-ct-comp4',
    'Why must penetration testing programs avoid scanning corporate targets during peak business hours unless explicitly allowed by the RoE?',
    ['It increases the compiler compilation speeds', 'Scanning can cause system lag, crash sensitive legacy services, and disrupt active business workflows', 'It resets the local host router tables', 'It disables GPO password complexity standards'],
    1,
    'Tests are scheduled during low-traffic windows to minimize potential operational blockages or system crashes.'
  ),
  createQuestion(
    'qn-ct-comp5',
    'Which platform organizes an annual interactive, narrative cybersecurity gamified arena packed with terminal challenges and terminal games?',
    ['SANS Holiday Hack Challenge', 'Hack The Box Prolabs', 'TryHackMe basic rooms', 'VulnHub offline compilations'],
    0,
    'The SANS Holiday Hack Challenge (KringleCon) is a highly-regarded, annual gamified learning event.'
  ),
  createQuestion(
    'qn-ct-comp6',
    'If a penetration tester discovers a critical vulnerability that allows immediate access to sensitive client databases, what should they do?',
    ['Post the vulnerability details to open web forums', 'Notify the client point of contact immediately as defined in the RoE, protecting corporate assets from potential exploit', 'Format the database sectors using block-level tools', 'Isolate the database inside local honeypots'],
    1,
    'Critical vulnerabilities, especially those exposing sensitive data, should be reported to the client immediately.'
  ),
  createQuestion(
    'qn-ct-comp7',
    'What distinguishes a "Jeopardy-style" CTF tournament framework?',
    ['Teams defend servers while attacking opponents.', 'Questions are divided into categorized boxes (e.g., Web, Crypto, Forensics) with escalating point values based on difficulty.', 'Users download virtual files to play offline on VirtualBox.', 'A single player exploits one virtual machine over 24 hours.'],
    1,
    'Jeopardy-style CTFs arrange challenges by category and point values, matching difficulty with rewards.'
  ),
  createQuestion(
    'qn-ct-comp8',
    'Which Cyber Range is highly popular for challenging intermediate developers with "black-box" systems mimicking real enterprise networks?',
    ['Hack The Box (HTB)', 'urlscan.io visual directories', 'Autopsy registry listings', 'WHOIS lookup scripts'],
    0,
    'Hack The Box is a leading security platform offering advanced, realistic black-box hacking scenarios.'
  ),
  createQuestion(
    'qn-ct-comp9',
    'What describes "Scope Creep" in professional cyber security audits?',
    ['Malware propagating laterally inside local subnet loops', 'Unplanned growth of testing targets beyond the boundaries defined in the original contract, causing timing and resource issues', 'The compiler throwing multiple dependencies errors', 'LAPS automatic credentials adjustments'],
    1,
    'Scope creep occurs when actual testing extends beyond original contractual boundaries without adjustment.'
  ),
  createQuestion(
    'qn-ct-comp10',
    'Which testing methodology simulates an attack where the consultant has some background details on internal coordinates?',
    ['Black-box testing', 'Gray-box testing', 'White-box testing', 'Passive logging'],
    1,
    'Gray-box testing balances internal access credentials and black-box external scenarios.'
  ),
  createQuestion(
    'qn-ic-comp1',
    'Which globally recognized certification requires candidates to analyze 8 broad architectural domains and verify 5 years of experience to pass?',
    ['CompTIA Security+', 'Cisco CCNA', 'CISSP', 'CEH'],
    2,
    'The CISSP (Certified Information Systems Security Professional) is widely considered the industry benchmark for senior security design and governance.'
  ),
  createQuestion(
    'qn-ic-comp2',
    'Which CompTIA certification validates baseline helpdesk support, system structures, operating systems, and core client troubleshooting?',
    ['CompTIA Security+', 'CompTIA Network+', 'CompTIA A+', 'CompTIA Linux+'],
    2,
    'CompTIA A+ is the foundational entry benchmark for technical and administrative workstation helpdesk roles.'
  ),
  createQuestion(
    'qn-ic-comp3',
    'Which certification requires candidates to complete a 24-hour practical penetration challenge, compromising systems, escalating privileges, and compiling a professional report?',
    ['CEH offensive exam', 'CISM management designation', 'OSCP (Offensive Security Certified Professional)', 'CompTIA Security+'],
    2,
    'The OSCP evaluates practical, hands-on exploitation and reporting skills under strict proctored timelines.'
  ),
  createQuestion(
    'qn-ic-comp4',
    'Which credential is ideal for professionals aiming to enter security leadership roles, directing risk management, governance, and business continuity plans?',
    ['CISM (Certified Information Security Manager)', 'CEH multiple choice exam', 'OSCP', 'Cisco CCNA'],
    0,
    'CISM focuses on managing risk portfolios, corporate alignment, and high-level incident management.'
  ),
  createQuestion(
    'qn-ic-comp5',
    'What Cisco certification validates a network administrator\'s competency in configuring physical switches, IPv4/IPv6 networks, and routing parameters?',
    ['CompTIA Network+', 'CompTIA Linux+', 'Cisco CCNA', 'CISSP'],
    2,
    'Cisco Certified Network Associate (CCNA) validates solid intermediate networking and routing competence.'
  ),
  createQuestion(
    'qn-ic-comp6',
    'Which CompTIA designation is designed as an intermediate cybersecurity benchmark, focusing on defensive analysis, SIEM log parsing, and active incident response?',
    ['CompTIA A+', 'CySA+ (Cybersecurity Analyst+)', 'CompTIA Linux+', 'OSCP pentesting labs'],
    1,
    'CySA+ bridges foundational knowledge and senior architecture, validating core defensive operations.'
  ),
  createQuestion(
    'qn-ic-comp7',
    'What organization administers the senior-level CCSP (Certified Cloud Security Professional) certification?',
    ['CompTIA', 'ISC2', 'ISACA', 'Cisco'],
    1,
    'ISC2 governs the vendor-neutral CCSP certification program.'
  ),
  createQuestion(
    'qn-ic-comp8',
    'Which CompTIA certification validates intermediate skills in administrative CLI navigation, user permissions, and Unix script automations?',
    ['CompTIA Linux+', 'Cisco CCNA', 'CompTIA Security+', 'CISSP domains'],
    0,
    'Linux+ validates critical baseline competency in enterprise Linux configurations and shell administration.'
  ),
  createQuestion(
    'qn-ic-comp9',
    'What organization manages the commercial CISA (Certified Information Systems Auditor) program globally?',
    ['ISC2', 'CompTIA', 'ISACA', 'OffSec'],
    2,
    'ISACA is the global professional association issuing the CISM, CISA, and CRISC certifications.'
  ),
  createQuestion(
    'qn-ic-comp10',
    'What do professional security associations require members to earn annually to maintain the active status of their credentials (like CISSP or CISM)?',
    ['Take a new proctored exam each year', 'Pay additional registration fees only', 'Earn Continuing Professional Education (CPE) credits by attending training, conferences, or writing articles', 'Perform monthly pentests on TryHackMe'],
    2,
    'CPE credits ensure certified professionals stay current with changing security vectors throughout their careers.'
  ),
  createQuestion(
    'em7-final-1',
    'Which Linux command-line tool displays active socket connections, protocol details, and system interfaces natively?',
    ['nslookup', 'arp', 'netstat', 'traceroute'],
    2,
    'netstat catalogs active connections, ports, and associated network configuration metrics.'
  ),
  createQuestion(
    'em7-final-2',
    'What represents the standard legal contract containing approved scanning targets, allowed tooling configurations, and emergency contacts?',
    ['NIST security framework', 'Rules of Engagement (RoE)', 'CompTIA curriculum criteria', 'CIS controls audit log'],
    1,
    'The RoE establishes operational constraints, defining the legal boundaries and scope of penetration tests.'
  ),
  createQuestion(
    'em7-final-3',
    'What utility is best suited to perform high-speed active host discovery, port audits, and service version enumeration across host subnets?',
    ['arp', 'nmap', 'nslookup', 'route'],
    1,
    'Nmap scans addresses to locate active ports, identify operating systems, and enumerate vulnerability indicators.'
  ),
  createQuestion(
    'em7-final-4',
    'Why does a digital forensics team prioritize volatile memory (RAM) extraction over static SSD file imaging?',
    ['RAM processes files faster than SSD controllers', 'Volatile data (RAM) contains active processes, cryptokeys, and session states that vanish instantly on system shutdown', 'SSD drives cannot be duplicated foreseeably', 'RAM is cheaper to catalog physically'],
    1,
    'RAM represents highly volatile memory; its contents disappear once the system is powered down or restarted.'
  ),
  createQuestion(
    'em7-final-5',
    'Which decoy system is designed to mimic standard enterprise assets to lure, audit, and analyze threat actor techniques?',
    ['A local proxy sandbox', 'An enterprise Honeypot', 'A GPO rule set', 'A secure Jump Server'],
    1,
    'Honeypots are decoy resources designed to lure attackers, enabling security teams to study threat vectors in a safe environment.'
  ),
  createQuestion(
    'em7-final-6',
    'Which senior-level credential is a globally recognized cybersecurity standard requiring five years of cumulative experience and testing across eight domains?',
    ['CompTIA Security+', 'CEH offensive exam', 'CISSP', 'Cisco CCNA'],
    2,
    'The CISSP (Certified Information Systems Security Professional) is widely considered the industry benchmark for senior security design and governance.'
  ),
  createQuestion(
    'em7-final-7',
    'Which Linux command syntax appends trailing rows of an active system log to the terminal output in real-time?',
    ['head -n 50 syslog', 'tail -f syslog', 'cat syslog', 'grep "error" syslog'],
    1,
    'Combining tail -f dynamically monitors active console log files as new rows are appended.'
  ),
  createQuestion(
    'em7-final-8',
    'Which tool under Linux handles block-by-block disk duplication to create hash-verifiable sector clones?',
    ['cat', 'grep', 'dd', 'tail'],
    2,
    'The dd (disk duplicator or data duplicator) tool writes bit-by-bit physical disk clones, which is crucial for preserving evidentiary integrity.'
  ),
  createQuestion(
    'em7-final-9',
    'What tool under a Windows terminal displays active IPv4 configs, MAC address lists, and DHCP lease mappings?',
    ['ipconfig /all', 'arp -a', 'nslookup', 'route print'],
    0,
    'Executing ipconfig with the /all option lists MAC physical addresses alongside lease profiles.'
  ),
  createQuestion(
    'em7-final-10',
    'Which visual platform allows interactive virtual sandboxing of suspect executable files to analyze process calls, network callbacks, and file system creations live?',
    ['VirusTotal api', 'WHOIS directory records', 'any.run', 'Wireshark packet filters'],
    2,
    'any.run visualizes the process execution tree of detonated executables and documents in real-time.'
  ),
  createQuestion(
    'em7-final-11',
    'Which digital forensics suite parses image clones, retrieves deleted directories, and catalogs registry entries through a unified GUI?',
    ['Wireshark network tool', 'Autopsy forensic suite', 'any.run sandbox platform', 'FTK Imager clone workspace'],
    1,
    'Autopsy provides an intuitive, comprehensive GUI designed to manage raw image data carving.'
  ),
  createQuestion(
    'em7-final-12',
    'Which certification validates entry-level helpdesk troubleshooting, client PC hardware repair, and OS configuration support skills?',
    ['CompTIA Security+', 'Cisco CCNA', 'CompTIA A+', 'OSCP practical exams'],
    2,
    'CompTIA A+ is the foundational standard for technical helpdesk, operating systems, hardware assembly, and repair.'
  ),
  createQuestion(
    'em7-final-13',
    'Which intermediate-level defensive certification is focused on threat intelligence, behavior tracking, and security monitoring tasks?',
    ['CompTIA A+', 'CySA+ (Cybersecurity Analyst+)', 'Cisco CCNA routing', 'OSCP offensive tracks'],
    1,
    'CySA+ bridges foundational knowledge and senior architecture, validating core defensive operations.'
  ),
  createQuestion(
    'em7-final-14',
    'What Cisco course certifies switch integration competencies, IPv4/IPv6 subnetting, and WAN routing parameters?',
    ['CompTIA Network+', 'Cisco CCNA', 'CISSP domain list', 'CISM leadership credentials'],
    1,
    'Cisco Certified Network Associate (CCNA) validates solid intermediate networking and routing competence.'
  ),
  createQuestion(
    'em7-final-15',
    'Why of the following is crucial during forensic seizure of physical hard assets for investigation?',
    ['Maintain high cooling environment setups', 'Ensure files remain unaltered by using hardware write-blockers', 'Format storage databases first using dd command layers', 'Verify LAPS Active directory password registers'],
    1,
    'Hardware write-blockers isolate incoming data streams, preserving original disk byte metrics from alterations.'
  ),
  createQuestion(
    'em7-final-16',
    'Which command lists MAC addresses mapped to logic IP configurations on host segments?',
    ['route print', 'arp -a', 'ipconfig /all', 'nslookup'],
    1,
    'The ARP utility reveals MAC mappings associated with logical internal IP addresses.'
  ),
  createQuestion(
    'em7-final-17',
    'Which OffSec certification requires consultants to execute a 24-hour practical penetration exploit scenario in a black-box lab and prepare a technical report?',
    ['CompTIA Security+', 'CISM advisory', 'OSCP', 'CEH theoretical'],
    2,
    'The OSCP is an intensive, proctored hands-on exam that evaluates real-world penetration and exploitation skills.'
  ),
  createQuestion(
    'em7-final-18',
    'An analyst wants to check a suspect domain registrar details and server paths. What command facilitates this database query?',
    ['nslookup', 'ping', 'WHOIS', 'nmap'],
    2,
    'WHOIS registry lists domain-level structural detail, administrative records, and timestamp authorities.'
  ),
  createQuestion(
    'em7-final-19',
    'What secure security-oriented Linux distro comes loaded with pre-configured cracking tools, pentesting packages, and reverse engineering databases?',
    ['Kali Linux Security Distro', 'ParrotOS Mobile', 'Ubuntu Desktop Base', 'CentOS Server Core'],
    0,
    'Kali Linux is a dedicated security-testing distribution containing hundreds of security utilities.'
  ),
  createQuestion(
    'em7-final-20',
    'Which portal compares suspect files against seventy anti-malware engine databases in parallel?',
    ['urlscan.io', 'WHOIS contacts', 'VirusTotal', 'Joe Sandbox'],
    2,
    'VirusTotal checks submitted files or hashes against third-party antivirus definitions to isolate threats.'
  ),
  createQuestion(
    'em7-final-21',
    'What does the nmap "-sS" command switch perform?',
    ['An aggressive UDP port sweep', 'A stealthy TCP SYN connection scan', 'An operating system identification query', 'A vulnerability script evaluation scan'],
    1,
    'SYN scans initiate connections but terminate them early to execute more subtle scans.'
  ),
  createQuestion(
    'em7-final-22',
    'Which network utility displays all intermediate routing hops from a local system to an external IP destination?',
    ['ping', 'nslookup', 'traceroute (or tracert)', 'netstat'],
    2,
    'Traceroute / tracert relies on TTL incrementation to identify every hop along a networking path.'
  ),
  createQuestion(
    'em7-final-23',
    'Which ISACA management credential targets risk managers, disaster recovery designers, and security governance consultants?',
    ['CompTIA Linux+', 'CEH', 'CISM (Certified Information Security Manager)', 'OSCP practical'],
    2,
    'The CISM from ISACA validates leadership-level security risk management and governance competency.'
  ),
  createQuestion(
    'em7-final-24',
    'What sector-level hexadecimal binary editor is used inside forensics to reconstruct partitions and analyze raw bytes directly?',
    ['Volatility memory blocks', 'winhex or hex editors', 'FTK Imager UI tools', 'Autopsy GUI panels'],
    1,
    'Hex editors like winhex allow analysts to examine and edit the exact binary representation of physical directories.'
  ),
  createQuestion(
    'em7-final-25',
    'Which database service represents an intentional vulnerable trap configured on networks to analyze external attacker footprint methods?',
    ['An enterprise Honeypot', 'A GPO rule set', 'A local proxy sandbox', 'A secure Jump Server'],
    0,
    'Honeypots are decoy resources designed to lure attackers, enabling security teams to study threat vectors in a safe environment.'
  ),
  createQuestion(
    'em7-final-26',
    'In a Capture the Flag contest, what is the "Flag" that proof of exploit analysts are tasked to recover?',
    ['A physical physical banner hosted at the data center', 'A unique, hard-to-find text string (e.g., flag{abc_123}) confirming successful exploitation of a target vulnerability', 'A system indicator flagged by endpoint antivirus software', 'A custom Active directory password string'],
    1,
    'A flag is the token of proof verifying a target compromise has been successfully performed.'
  )
];
