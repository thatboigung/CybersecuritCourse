import { RoadmapArea, Module } from '../types';

export const HACKING_ROADMAP_AREAS: RoadmapArea[] = [
  {
    id: 'hacking-104',
    name: 'Cryptography & Advanced Vulnerability Engineering',
    description: 'Deep dive into encryption math, exploit mechanics, and malicious software execution paths.',
    icon: 'Key',
    color: 'rose',
    courseGroup: 'hacking'
  },
  {
    id: 'hacking-105',
    name: 'Systemic Enterprise Attack Paradigms',
    description: 'Cataloging and executing tactical exploit classes across social engineering, network layers, and application endpoints.',
    icon: 'ShieldAlert',
    color: 'amber',
    courseGroup: 'hacking'
  },
  {
    id: 'hacking-106',
    name: 'Defensive Security, Cloud Security & Engineering Operations',
    description: 'Hardening corporate perimeters, cloud environments, and analyzing security logs.',
    icon: 'Activity',
    color: 'emerald',
    courseGroup: 'hacking'
  },
  {
    id: 'hacking-107',
    name: 'Automation Scripting, DevSecOps & Practical Labs',
    description: 'Writing security tools and applying your skills in realistic lab testing environments.',
    icon: 'Terminal',
    color: 'cyan',
    courseGroup: 'hacking'
  }
];

export const HACKING_MODULES: Module[] = [
  {
    id: 'mod-hacking-104',
    areaId: 'hacking-104',
    title: 'Cryptography & Advanced Vulnerability Engineering',
    description: 'Advanced cryptography math, heap/stack overflows, Metasploit mechanics, malware hooks, and privileged bypasses.',
    libraryLinks: [
      {
        title: "Cryptography Full Course",
        url: "https://www.youtube.com/watch?v=jhXCTbFnK8o"
      },
      {
        title: "Computerphile Cryptography Playlist",
        url: "https://www.youtube.com/playlist?list=PLzH6n4zXuckoAod3z31Q"
      }
    ],
    lessons: [
      {
        id: 'h104-l1',
        moduleId: 'mod-hacking-104',
        title: 'Data Integrity Hashing & Salts',
        duration: 20,
        youtubeVideoId: 'U_Y3F8xQdOk',
        content: `### Lecture Notes: Data Integrity Hashing & salts

Welcome back to the lecture hall, class. As your professor, I must emphasize that plaintext password storage is an absolute security failure. Today we explore hashing—the deterministic generation of fixed-width ciphers using one-way algorithms (MD5, SHA-256).

Let us discuss rainbow lists and precomputed hashes. An attacker with a precomputed lookup table can instantly map common hashed files back to their plaintext states. To defeat this, we use secure cryptographic salts. A unique, random text string added to the password input prior to hashing guarantees that two identical passwords generate completely distinct hashes.

---

#### 6. Academic Milestones and Scholar Award
Congratulations on earning the **Sovereign Integrous Hash Specialist Milestone** for proving secure salt defenses.`,
        quiz: {
          id: 'q-h104-l1',
          title: 'Hashing and Salts Check',
          questions: [
            {
              id: 'qh104-l1-q1',
              text: 'What is the primary role of a cryptographic salt during password processing?',
              options: ['To speed up database search timings', 'To defeat lookup tables and precomputed cracking attempts', 'To make hashes reversible', 'To encrypt keys symmetrically'],
              correctAnswerIndex: 1,
              explanation: 'Salts introduce random string uniqueness so that identical passwords result in distinct hashes, neutralizing lookup books.'
            }
          ]
        }
      },
      {
        id: 'h104-l2',
        moduleId: 'mod-hacking-104',
        title: 'Key Lifecycle Architectures: Symmetric vs Asymmetric',
        duration: 25,
        youtubeVideoId: 'U_Y3F8xQdOk',
        content: `### Lecture Notes: Symmetric vs Asymmetric Cryptography

Welcome back, class. To establish secure digital pipes, we must balance symmetric and asymmetric algorithms.

Symmetric algorithms (e.g., AES-256) use the same secret key for both encryption and decryption, offering rapid speeds. Asymmetric algorithms (e.g., RSA, ECC) use public-private key pairs. The public key encrypts, while only the matching private key decrypts, eliminating raw key exchange risks.

---

#### 6. Academic Milestones and Scholar Award
You have earned the **Sovereign Key Guardian Milestone** for mastering key lifecycle pairs.`,
        quiz: {
          id: 'q-h104-l2',
          title: 'Symmetric vs Asymmetric Check',
          questions: [
            {
              id: 'qh104-l2-q1',
              text: 'Which algorithm is symmetric and highly performant for mass data storage?',
              options: ['RSA', 'AES', 'ECC', 'Diffie-Hellman'],
              correctAnswerIndex: 1,
              explanation: 'AES is a symmetric block cipher, optimized for high speed and volume, unlike expensive asymmetric algorithms.'
            }
          ]
        }
      },
      {
        id: 'h104-l3',
        moduleId: 'mod-hacking-104',
        title: 'Public Key Infrastructure (PKI) Systems',
        duration: 25,
        youtubeVideoId: 'U_Y3F8xQdOk',
        content: `### Lecture Notes: PKI Principles & Trust Stores

Welcome back, class. PKI is the bedrock of corporate identity trust.

Without Certificate Authorities (CAs), clients cannot verify if they are talking to a legitimate server or an attacker intercepting the path. A CA signs digital certificates with its private key, and clients validate this signature using the CA public key inside their root trust store.

---

#### 6. Academic Milestones and Scholar Award
You have earned the **Sovereign PKI Architect Milestone** for establishing trusted PKI roots.`,
        quiz: {
          id: 'q-h104-l3',
          title: 'PKI Verification Check',
          questions: [
            {
              id: 'qh104-l3-q1',
              text: 'How does a browser verify that an SSL certificate was signed by a trusted authority?',
              options: ['By resolving DNSSEC records', 'Using local public keys stored in the root trust store to validate signatures', 'By querying a centralized MAC block list', 'Using a local symmetric key grab'],
              correctAnswerIndex: 1,
              explanation: 'Root trust stores contain trusted CA public certificates. Browsers decrypt CA signatures on certificates using these public keys.'
            }
          ]
        }
      },
      {
        id: 'h104-l4',
        moduleId: 'mod-hacking-104',
        title: 'Data Obfuscation Techniques',
        duration: 15,
        youtubeVideoId: 'U_Y3F8xQdOk',
        content: `### Lecture Notes: Code Payload Concealment

Welcome back, class. Cryptography is not the only way to shield data.

Obfuscation alters compiled code pathways, strings, and structures to hinder reverse engineering, with zero changes to target execution logic. Techniques like XOR masking, packing, and variable randomization are standard across both defensive proprietary protections and malicious evasion.

---

#### 6. Academic Milestones and Scholar Award
You have earned the **Sovereign Code Obfuscation Champion Milestone** for concealing application paths.`,
        quiz: {
          id: 'q-h104-l4',
          title: 'Obfuscation Check',
          questions: [
            {
              id: 'qh104-l4-q1',
              text: 'How does data obfuscation differ from encryption?',
              options: ['It requires no cryptographic keys and preserves original functional behavior while confusing human static analysis', 'It has mathematical keys to undo actions', 'It speeds up execution code paths', 'It requires root permissions to execute'],
              correctAnswerIndex: 0,
              explanation: 'Obfuscation relies on making code or ciphers unreadable without applying strong mathematical encryption vaults.'
            }
          ]
        }
      },
      {
        id: 'h104-l5',
        moduleId: 'mod-hacking-104',
        title: 'Offensive Framework Automation: Metasploit',
        duration: 25,
        youtubeVideoId: '10gP84jZsz4',
        content: `### Lecture Notes: Metasploit Framework Orchestrations

Welcome back, class. Penetration testing requires fast, automated exploitation platforms.

Metasploit organizes exploits, payloads, encoders, and post-exploitation modules. Using a standard exploit block coupled with a reverse tcp shell payload, testers gain shell-level host accesses when targets run outdated unpatched processes.

---

#### 6. Academic Milestones and Scholar Award
You have earned the **Sovereign Penetration Exploiter Milestone** for orchestrating secure shell accesses.`,
        quiz: {
          id: 'q-h104-l5',
          title: 'Metasploit Check',
          questions: [
            {
              id: 'qh104-l5-q1',
              text: 'What is the role of a post-exploitation module in Metasploit?',
              options: ['To scan open ports', 'To compile the exploit payload', 'To gather local system credentials, check scopes, and move laterally', 'To clear local syslog events'],
              correctAnswerIndex: 2,
              explanation: 'Post-exploitation modules operate after initial access is secured to scan filesystems, gather details, or expand privileges.'
            }
          ]
        }
      },
      {
        id: 'h104-l6',
        moduleId: 'mod-hacking-104',
        title: 'Web Application Flaws & OWASP',
        duration: 30,
        youtubeVideoId: 'SykP3U2Q8eA',
        content: `### Lecture Notes: OWASP Web App Defensive Engineering

Welcome back, class. Standard web frameworks frequently expose web interfaces to injection, broken sessions, and authorization bypasses.

The Open Web Application Security Project (OWASP) Top 10 documents severe application risks. Mitigating SQLi requires parameterized statements, while XSS is shut down by HTML entity escaping.

---

#### 6. Academic Milestones and Scholar Award
You have earned the **Sovereign Web Defense Master Milestone** for locking down OWASP vectors.`,
        quiz: {
          id: 'q-h104-l6',
          title: 'OWASP Check',
          questions: [
            {
              id: 'qh104-l6-q1',
              text: 'Which defensive programming technique effectively neutralizes SQL Injection?',
              options: ['Escaping single spaces', 'Using parameterized queries and prepared statements', 'Writing complex regex filters', 'Rebooting the database engine on errors'],
              correctAnswerIndex: 1,
              explanation: 'Prepared statements treat inputs strictly as parameters, preventing the database interpreter from running user commands as SQL logic.'
            }
          ]
        }
      },
      {
        id: 'h104-l7',
        moduleId: 'mod-hacking-104',
        title: 'Buffer Overflows & Memory Leaks',
        duration: 35,
        youtubeVideoId: '10gP84jZsz4',
        content: `### Lecture Notes: Low-Level Memory Destruction

Welcome back, class. Low-level memory management errors represent critical exploit targets.

A Stack-based Buffer Overflow occurs when a program writes more data to a buffer than it is allocated to hold. This overflows into neighboring memory boundaries, allowing attackers to overwrite the Return Instruction Pointer (EIP/RIP) and divert execution to injected shellcode.

---

#### 6. Academic Milestones and Scholar Award
You have earned the **Sovereign Stack Hardening Scholar Milestone** for securing heap and stack environments.`,
        quiz: {
          id: 'q-h104-l7',
          title: 'Memory Exploitation Check',
          questions: [
            {
              id: 'qh104-l7-q1',
              text: 'Which register do stack-overflow exploits attempt to overwrite to hijack code execution?',
              options: ['EAX', 'ESP', 'EIP (Instruction Pointer)', 'EBP'],
              correctAnswerIndex: 2,
              explanation: 'The Instruction Pointer (EIP) dictates what memory address to run next. Overwriting it redirects execution to attacker space.'
            }
          ]
        }
      },
      {
        id: 'h104-l8',
        moduleId: 'mod-hacking-104',
        title: 'Privilege Escalation Routes: Horizontal & Vertical',
        duration: 25,
        youtubeVideoId: '10gP84jZsz4',
        content: `### Lecture Notes: Privilege Escalation Paths

Welcome back, class. Initial entry onto a target host rarely grants root authority.

- Horizontal Escalation involves moving from one low-privilege user account to another.
- Vertical Escalation involves moving from a standard user account directly to administrative authority (root/SYSTEM). Exploits target weak file permissions, unpatched kernel issues, or misconfigured SUID binaries.

---

#### 6. Academic Milestones and Scholar Award
You have earned the **Sovereign Access Supervisor Milestone** for isolating escalation vectors.`,
        quiz: {
          id: 'q-h104-l8',
          title: 'Escalation Check',
          questions: [
            {
              id: 'qh104-l8-q1',
              text: 'How does vertical privilege escalation differ from horizontal escalation?',
              options: ['It only targets cloud-based databases', 'It moves from a general user level directly to root/admin authority', 'It requires physical access to switch ports', 'It bypasses local firewalls completely'],
              correctAnswerIndex: 1,
              explanation: 'Vertical escalation moves up the permission ladder (e.g., standard to administrator), whereas horizontal moves sideways.'
            }
          ]
        }
      },
      {
        id: 'h104-l9',
        moduleId: 'mod-hacking-104',
        title: 'Malware Internals & Executable Hijacking',
        duration: 30,
        youtubeVideoId: 'N9N4fS4Vjzo',
        content: `### Lecture Notes: Malware Structure and Behavioral Hooks

Welcome back, class. Today we inspect compiled malware internals.

Malicious binaries leverage propagation loops, payload injectors, and persistent triggers (like registry overrides or scheduled jobs). Attackers hook executable pathways by modifying Import Address Tables (IAT) or injecting malicious DLLs.

---

#### 6. Academic Milestones and Scholar Award
You have earned the **Sovereign Behavioral Malware Hunter Milestone** for tracing persistent DLL injection hooks.`,
        quiz: {
          id: 'q-h104-l9',
          title: 'Malware Internals Check',
          questions: [
            {
              id: 'qh104-l9-q1',
              text: 'What is a common registry persistence trick used by Windows malware variants?',
              options: ['Disabling virtual memory swaps', 'Adding entries to the Run or RunOnce key directories', 'Flushing active routing tables', 'Rebuilding the System.ini file'],
              correctAnswerIndex: 1,
              explanation: 'Writing malicious paths to Run or RunOnce registry keys forces Windows to automatically launch the payload during boot.'
            }
          ]
        }
      },
      {
        id: 'h104-l10',
        moduleId: 'mod-hacking-104',
        title: 'Living off the Land: GTFOBins & LOLBAS',
        duration: 20,
        youtubeVideoId: '10gP84jZsz4',
        content: `### Lecture Notes: Living off the Land

Welcome back, class. Security detection suites monitor malicious downloads. To bypass this, adversary techniques utilize pre-installed local administrative utilities.

- LOLBAS (Windows) and GTFOBins (Linux) serve as directories of standard system binaries (like certutil, sc, or find) that can be abused to bypass endpoint protections, move data, or execute arbitrary scripts.

---

#### 6. Academic Milestones and Scholar Award
You have earned the **Sovereign Native System Infiltrator Milestone** for mastering defensive detection of LOLBAS maneuvers.`,
        quiz: {
          id: 'q-h104-l10',
          title: 'LOLBAS & GTFOBins Check',
          questions: [
            {
              id: 'qh104-l10-q1',
              text: 'What describes "Living off the Land"?',
              options: ['Deploying rogue physical hardware taps', 'Abusing pre-installed, system-native administrative tools to conduct exploits', 'Stealing databases using phishing', 'Configuring unencrypted router paths'],
              correctAnswerIndex: 1,
              explanation: 'Living off the land leverages pre-installed legitimate utilities (like certutil) to bypass download and run controls.'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'mod-hacking-105',
    areaId: 'hacking-105',
    title: 'Systemic Enterprise Attack Paradigms',
    description: 'Deceptions, physical breaches, database injections, wireless intrusions, and middleman proxy captures.',
    libraryLinks: [
      {
        title: "Ethical Hacking Full Course - FreeCodeCamp",
        url: "https://www.youtube.com/watch?v=3Kq1M8r9Q2A"
      },
      {
        title: "Ethical Hacking Playlist - NetworkChuck",
        url: "https://www.youtube.com/@NetworkChuck/playlists"
      },
      {
        title: "Practical Ethical Hacking (Beginner → Advanced) - TCM Security",
        url: "https://www.youtube.com/watch?v=3FNYvj2U0HM"
      },
      {
        title: "Cybersecurity Labs - John Hammond",
        url: "https://www.youtube.com/@_JohnHammond"
      },
      {
        title: "Phishing Explained (Defensive Cybersecurity)",
        url: "https://www.youtube.com/watch?v=XBkzBrXlle0"
      },
      {
        title: "Social Engineering Full Breakdown",
        url: "https://www.youtube.com/watch?v=lc7scxvKQOo"
      },
      {
        title: "Human Factor in Cybersecurity",
        url: "https://www.youtube.com/watch?v=2z6Y3dX4p9Q"
      },
      {
        title: "Physical Security Attacks Explained",
        url: "https://www.youtube.com/watch?v=6gFj0zM8eO4"
      },
      {
        title: "Security Awareness Training (Human Layer Defense)",
        url: "https://www.youtube.com/watch?v=9kQ2m5s7A1L"
      },
      {
        title: "OSINT Full Course",
        url: "https://www.youtube.com/watch?v=qwA6MmbeGNo"
      },
      {
        title: "Digital Footprinting Explained",
        url: "https://www.youtube.com/watch?v=8yG3mQ7p2Wk"
      },
      {
        title: "OWASP Top 10 Full Course",
        url: "https://www.youtube.com/watch?v=V8AUTc4hsuI"
      },
      {
        title: "SQL Injection Explained (Defense Perspective)",
        url: "https://www.youtube.com/watch?v=ciNHn38EyRc"
      },
      {
        title: "XSS Explained",
        url: "https://www.youtube.com/watch?v=EoaDgUgS6QA"
      },
      {
        title: "CSRF Explained",
        url: "https://www.youtube.com/watch?v=eWEgUcHPle0"
      },
      {
        title: "Directory Traversal Explained",
        url: "https://www.youtube.com/watch?v=6rM5iN3Q4yQ"
      },
      {
        title: "Password Attacks Explained (Defensive Security)",
        url: "https://www.youtube.com/watch?v=1m7g5kQ9P2A"
      },
      {
        title: "Pass-the-Hash Concept Explained",
        url: "https://www.youtube.com/watch?v=J0fM9QnV0hQ"
      },
      {
        title: "Wi-Fi Security Explained (WPA2/WPA3)",
        url: "https://www.youtube.com/watch?v=VV4y_uOneC0"
      },
      {
        title: "Evil Twin Attack (Defensive Awareness)",
        url: "https://www.youtube.com/watch?v=9wQj4aY7vI0"
      },
      {
        title: "Wireless Security Fundamentals",
        url: "https://www.youtube.com/watch?v=J4T0w2D7f7A"
      },
      {
        title: "Man-in-the-Middle Explained",
        url: "https://www.youtube.com/watch?v=4JfZ9dX4Q5w"
      },
      {
        title: "DNS Spoofing Explained",
        url: "https://www.youtube.com/watch?v=YzLrWHZa-Kc"
      },
      {
        title: "ARP Spoofing Explained",
        url: "https://www.youtube.com/watch?v=QPi5Nvxaosw"
      },
      {
        title: "DDoS Explained",
        url: "https://www.youtube.com/watch?v=ilhGh9CEIwM"
      },
      {
        title: "Botnet Attacks Explained",
        url: "https://www.youtube.com/watch?v=6uSVVCmOH5w"
      },
      {
        title: "TryHackMe Learning Path (SAFE PRACTICAL LABS)",
        url: "https://tryhackme.com"
      },
      {
        title: "Hack The Box Academy (Controlled Ethical Labs)",
        url: "https://academy.hackthebox.com"
      },
      {
        title: "picoCTF (Beginner Cybersecurity Practice)",
        url: "https://picoctf.org"
      }
    ],
    lessons: [
      {
        id: 'h105-l1',
        moduleId: 'mod-hacking-105',
        title: 'Communication Deceptions: Phishing & Spear-attacks',
        duration: 20,
        youtubeVideoId: 'SykP3U2Q8eA',
        content: `### Lecture Notes: Communication Deceptions

Welcome back, class. Attack pathways often bypass firewall perimeters by targeting human trust.

Deceptions exploit targets through electronic and verbal avenues: Phishing (targeted emails), Vishing (fraudulent VoIP phone calls), Smishing (deceptive SMS text feeds), and Whaling (spear attacks designed targeting company executives).

---

#### 6. Academic Milestones and Scholar Award
You have earned the **Sovereign Anti-Deception Specialist Milestone** for building strong human posture shields.`,
        quiz: {
          id: 'q-h105-l1',
          title: 'Deception Audit Check',
          questions: [
            {
              id: 'qh105-l1-q1',
              text: 'Which term specifically defines phishing attacks aimed directly at high-level corporate executives?',
              options: ['Vishing', 'Smishing', 'Whaling', 'Tailgating'],
              correctAnswerIndex: 2,
              explanation: 'Whaling is a spear-phishing subset that exclusively targets executives (CEOs, CFOs) using customized pretexting.'
            }
          ]
        }
      },
      {
        id: 'h105-l2',
        moduleId: 'mod-hacking-105',
        title: 'Physical Perimeter Overrides & Taps',
        duration: 15,
        youtubeVideoId: 'SykP3U2Q8eA',
        content: `### Lecture Notes: Physical Perimeter Overrides

Welcome back, class. Logical cybersecurity shields provide zero value if an attacker can simply walk into your server cage.

Physical exploits target barriers via tailgating (slipstreaming behind verified staff), badge cloning, shoulder surfing password entries, and dumpster diving to recover discarded hard-copy documents or serial list guides.

---

#### 6. Academic Milestones and Scholar Award
You have earned the **Sovereign Perimeter Sentinel Milestone** for reinforcing offline facilities boundaries.`,
        quiz: {
          id: 'q-h105-l2',
          title: 'Facility Security Check',
          questions: [
            {
              id: 'qh105-l2-q1',
              text: 'What physical security exploitation occurs when an unauthorized person closely follows an authorized employee through a secure gate?',
              options: ['Shoulder Surfing', 'Pretexting', 'Tailgating', 'Dumpster Diving'],
              correctAnswerIndex: 2,
              explanation: 'Tailgating bypasses badge portals by slide-slipping behind authentic workers before physical barriers re-latch.'
            }
          ]
        }
      },
      {
        id: 'h105-l3',
        moduleId: 'mod-hacking-105',
        title: 'Pretexting & Identity Footprinting',
        duration: 15,
        youtubeVideoId: 'SykP3U208eA',
        content: `### Lecture Notes: Pretexting & Identity Footprinting

Welcome back, class. Social engineering relies on high-fidelity, believable scenario manipulation.

Pretexting involves creating a simulated backstory and personal identity to deceive targets. Attackers perform reconnaissance (footprinting) using social portals (OSINT) to map company relationships, administrative rosters, and operating languages before executing call campaigns.

---

#### 6. Academic Milestones and Scholar Award
You have earned the **Sovereign Social Reconstruction Hunter Milestone** for tracing pretexting pathways.`,
        quiz: {
          id: 'q-h105-l3',
          title: 'Pretexting Audit Guide',
          questions: [
            {
              id: 'qh105-l3-q1',
              text: 'Which process describes creating a false persona or scenario to manipulate someone into releasing records?',
              options: ['DNS spoofing', 'Pretexting', 'Subnetting', 'Cross-site scripting'],
              correctAnswerIndex: 1,
              explanation: 'Pretexting involves crafting a believable backstory to establish fake authority over phone or email channels.'
            }
          ]
        }
      },
      {
        id: 'h105-l4',
        moduleId: 'mod-hacking-105',
        title: 'User Access Theft: Watering Holes & Typosquatting',
        duration: 20,
        youtubeVideoId: 'SykP3U2Q8eA',
        content: `### Lecture Notes: Web-based Host Intrusion Vectors

Welcome back, class. Adversaries intercept standard browsing lanes to deploy host exploits.

- Watering Hole Attacks compromise specific online portals visited regularly by target employees (e.g., local lunch cafeterias or supplier systems).
- Typosquatting registers look-alike domains (e.g., corpa-gate.com instead of corp-gate.com) to capture user logins.

---

#### 6. Academic Milestones and Scholar Award
You have earned the **Sovereign Web Space Guard Milestone** for blocking typosquatted landing gates.`,
        quiz: {
          id: 'q-h105-l4',
          title: 'Access Theft Check',
          questions: [
            {
              id: 'qh105-l4-q1',
              text: 'What attack vector targets a specific profile of users by compromising a public website they are known to visit?',
              options: ['Watering Hole', 'Brute Force', 'Typosquatting', 'ARP Poisoning'],
              correctAnswerIndex: 0,
              explanation: 'A watering hole compromises niche websites frequented by target groups (such as supplier forums) to download malware.'
            }
          ]
        }
      },
      {
        id: 'h105-l5',
        moduleId: 'mod-hacking-105',
        title: 'Credential Cracking: Password Spraying & PtH',
        duration: 25,
        youtubeVideoId: '8f8U8E_pD0g',
        content: `### Lecture Notes: Credential Theft Strategies

Welcome back, class. Standard security auditing includes probing authentication strength.

Password Spraying tests a single, extremely common password (e.g., Fall2025!) across hundreds of directory usernames simultaneously. This bypasses account lockout ceilings triggered by target guess limits on a single account.
Pass-the-Hash (PtH) steals active NTLM password hashes from memory, authenticating to adjacent servers without decrypting them.

---

#### 6. Academic Milestones and Scholar Award
You have earned the **Sovereign Directory Defender Milestone** for building lockouts against sprays.`,
        quiz: {
          id: 'q-h105-l5',
          title: 'Spraying Checks',
          questions: [
            {
              id: 'qh105-l5-q1',
              text: 'How does password spraying successfully bypass host lockout locks?',
              options: ['By encrypting target logs', 'By testing one common password across many accounts to stay below individual account retry thresholds', 'By cracking symmetric ciphers in bulk offline', 'By resetting default admin routing configurations'],
              correctAnswerIndex: 1,
              explanation: 'Spraying iterates through users, guessing each once, thereby never triggering individual accounts lock thresholds.'
            }
          ]
        }
      },
      {
        id: 'h105-l6',
        moduleId: 'mod-hacking-105',
        title: 'Wireless Intrusions: Evil Twin & De-auth',
        duration: 25,
        youtubeVideoId: 'S_iS91U638K',
        content: `### Lecture Notes: Wireless Endpoint Intrusions

Welcome back, class. Wireless airwaves can be easily manipulated from the corporate parking lot.

An Evil Twin attack configures a rogue Access Point matching the corporate SSID. Attackers send continuous wireless De-authentication frame injections, forcing genuine client computers off the authentic network to connect directly to the rogue trap instead.

---

#### 6. Academic Milestones and Scholar Award
You have earned the **Sovereign Signals Guardian Milestone** for locating rogue access nodes.`,
        quiz: {
          id: 'q-h105-l6',
          title: 'Wireless Security Check',
          questions: [
            {
              id: 'qh105-l6-q1',
              text: 'Which rogue device emulates a legitimate corporate SSID to intercept client credentials?',
              options: ['Hardware Keylogger', 'Evil Twin Access Point', 'DNS Cache Redirector', 'EAP-TLS Authenticator'],
              correctAnswerIndex: 1,
              explanation: 'Evil twins mimic SSID and MAC labels, capturing clients who auto-connect when disconnected from genuine access.'
            }
          ]
        }
      },
      {
        id: 'h105-l7',
        moduleId: 'mod-hacking-105',
        title: 'Middleman Interception: ARP Spoofing & DNS Poisoning',
        duration: 30,
        youtubeVideoId: 'S_iS91U638K',
        content: `### Lecture Notes: Man-in-the-Middle Attacks

Welcome back, class. Unsecured LAN protocols allow easy packet intercepts.

- ARP Spoofing broadcasts forged ARP replies, mapping the default gateway IP to the attacker’s local MAC address, intercepting local traffic.
- DNS Cache Poisoning injects fake IP entries directly into local DNS resolver catalogs, routing client browsing requests to fraudulent endpoints.

---

#### 6. Academic Milestones and Scholar Award
You have earned the **Sovereign Integrity Protocol Master Milestone** for locking down local ARP boundaries.`,
        quiz: {
          id: 'q-h105-l7',
          title: 'MitM Checking',
          questions: [
            {
              id: 'qh105-l7-q1',
              text: 'By what mechanism does ARP spoofing redirect target LAN configurations?',
              options: ['By hijacking DNS server root stores', 'By mapping the destination gateway IP address to the attacker\'s network hardware MAC address', 'By exhausting IP addresses inside the DHCP lease pool', 'By deploying malicious software packages directly'],
              correctAnswerIndex: 1,
              explanation: 'Forged ARP letters map the gateway IP to the attacker MAC, instructing systems to route output frames to the intercepting host.'
            }
          ]
        }
      },
      {
        id: 'h105-l8',
        moduleId: 'mod-hacking-105',
        title: 'Resource Exhaustion: Denial of Service & DDoS',
        duration: 20,
        youtubeVideoId: '8f8U8E_pD0g',
        content: `### Lecture Notes: Resource Starvation Exploits

Welcome back, class. Today we discuss maintaining system availability.

Resource Exhaustion (Denial of Service) floods target web nodes. Standard DoS sweeps consume connection buffers locally. Broadly scaled Distributed Denial of Service (DDoS) networks deploy massive botnets, leveraging amplification methods (like DNS amplification) to exhaust edge firewall pathways.

---

#### 6. Academic Milestones and Scholar Award
You have earned the **Sovereign Adaptive Load Specialist Milestone** for building high-availability shields.`,
        quiz: {
          id: 'q-h105-l8',
          title: 'Availability quiz',
          questions: [
            {
              id: 'qh105-l8-q1',
              text: 'What amplification technique creates massive DDoS UDP traffic spikes?',
              options: ['Symmetric AES padding', 'DNS or NTP request amplification using spoofed source IPs', 'ARP mapping sweeps', 'Local virtual machine migrations'],
              correctAnswerIndex: 1,
              explanation: 'DNS amplification queries open resolvers with spoofed source IPs, yielding highly-scaled reply records directed at targets.'
            }
          ]
        }
      },
      {
        id: 'h105-l9',
        moduleId: 'mod-hacking-105',
        title: 'Application Injections: SQLi, XSS & Directory Traversal',
        duration: 30,
        youtubeVideoId: 'SykP3U2Q8eA',
        content: `### Lecture Notes: Application Input Injections

Welcome back, class. Input parsing failures expose application layers directly to data theft.

- SQL Injection (SQLi) executes malicious database statements.
- Cross-Site Scripting (XSS) injects malicious client-side JavaScript into secure sessions.
- CSRF forces browsers to run unwanted actions on active authenticated logins, and Directory Traversal inputs access file paths outside server cages.

---

#### 6. Academic Milestones and Scholar Award
You have earned the **Sovereign Input Sanitizer Milestone** for locking down injection boundaries.`,
        quiz: {
          id: 'q-h105-l9',
          title: 'Injections Check',
          questions: [
            {
              id: 'qh105-l9-q1',
              text: 'Which injection occurs when executable browser scripts are displayed inside client templates without active escaping?',
              options: ['SQLi', 'XSS (Cross-Site Scripting)', 'Directory Traversal', 'CSRF'],
              correctAnswerIndex: 1,
              explanation: 'XSS injects executable scripts into websites, running malicious javascript inside user browsers.'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'mod-hacking-106',
    areaId: 'hacking-106',
    title: 'Defensive Security, Cloud Security & Engineering',
    description: 'Bases GPO templates, unified logging pipelines, incident response steps, and compliance architectures.',
    libraryLinks: [
      {
        title: "Windows Security Hardening",
        url: "https://www.youtube.com/watch?v=xw1K0v7p0sY"
      },
      {
        title: "Linux Hardening Guide",
        url: "https://www.youtube.com/watch?v=JmQ8N4XJj1g"
      },
      {
        title: "System Hardening Concepts",
        url: "https://www.youtube.com/watch?v=6zjM1P7K4LM"
      },
      {
        title: "Active Directory Full Course",
        url: "https://www.youtube.com/watch?v=4qC7H-y7oKI"
      },
      {
        title: "Group Policy Tutorial",
        url: "https://www.youtube.com/watch?v=Yf6L2xM4zqQ"
      },
      {
        title: "Windows Server Administration",
        url: "https://www.youtube.com/watch?v=Q4jM5sM7L0Q"
      },
      {
        title: "Patch Management Explained",
        url: "https://www.youtube.com/watch?v=8kM3p2v7Q1A"
      },
      {
        title: "Vulnerability & Patch Management",
        url: "https://www.youtube.com/watch?v=QzTfH7K7wkg"
      },
      {
        title: "Firewalls Explained",
        url: "https://www.youtube.com/watch?v=kDEX1HXybrU"
      },
      {
        title: "Next Generation Firewalls (NGFW)",
        url: "https://www.youtube.com/watch?v=Jj4u6fJm0jE"
      },
      {
        title: "EDR Explained",
        url: "https://www.youtube.com/watch?v=Nr7k0N8Jp2U"
      },
      {
        title: "Microsoft Defender for Endpoint",
        url: "https://www.youtube.com/watch?v=Q4cRj0g5H8E"
      },
      {
        title: "DLP Fundamentals",
        url: "https://www.youtube.com/watch?v=R_h3nQ6A2mI"
      },
      {
        title: "Microsoft Purview DLP",
        url: "https://www.youtube.com/watch?v=2X9T0z5s9rM"
      },
      {
        title: "IDS vs IPS",
        url: "https://www.youtube.com/watch?v=4jM2YhQ6K4Q"
      },
      {
        title: "Intrusion Detection Systems",
        url: "https://www.youtube.com/watch?v=GZz4Hh4cE3I"
      },
      {
        title: "Network Access Control Explained",
        url: "https://www.youtube.com/watch?v=fdK1rQ0r6Y4"
      },
      {
        title: "802.1X Authentication Explained",
        url: "https://www.youtube.com/watch?v=2g8sYq8Q1LQ"
      },
      {
        title: "EAP & PEAP Explained",
        url: "https://www.youtube.com/watch?v=q5YfJx3n9uM"
      },
      {
        title: "SIEM Explained",
        url: "https://www.youtube.com/watch?v=4sJ0I0mK4qE"
      },
      {
        title: "Splunk SIEM Course",
        url: "https://www.youtube.com/watch?v=2BO0Jf7888c"
      },
      {
        title: "Microsoft Sentinel Fundamentals",
        url: "https://www.youtube.com/watch?v=QjM6I3M8jG0"
      },
      {
        title: "Windows Event Logs",
        url: "https://www.youtube.com/watch?v=4g3Q2L2Y6hQ"
      },
      {
        title: "Linux Syslog Explained",
        url: "https://www.youtube.com/watch?v=Q5m8p2k4R1A"
      },
      {
        title: "NetFlow Analysis",
        url: "https://www.youtube.com/watch?v=1k9m4p6q2S8"
      },
      {
        title: "Firewall Log Analysis",
        url: "https://www.youtube.com/watch?v=7m9dQx7n3kA"
      },
      {
        title: "SOAR Explained",
        url: "https://www.youtube.com/watch?v=YYWf7m1i8xA"
      },
      {
        title: "Security Automation Playbooks",
        url: "https://www.youtube.com/watch?v=9kJ5h3pQm2A"
      },
      {
        title: "Nessus Tutorial",
        url: "https://www.youtube.com/watch?v=4Cm5M6N9P5Y"
      },
      {
        title: "OpenVAS Tutorial",
        url: "https://www.youtube.com/watch?v=Zk6k1g6Q8qY"
      },
      {
        title: "CVSS Explained",
        url: "https://www.youtube.com/watch?v=U4j5Q9P6j8Q"
      },
      {
        title: "Threat Hunting Fundamentals",
        url: "https://www.youtube.com/watch?v=5fM4jL9cV4Q"
      },
      {
        title: "OSINT Full Course",
        url: "https://www.youtube.com/watch?v=qwA6MmbeGNo"
      },
      {
        title: "Cyber Threat Intelligence",
        url: "https://www.youtube.com/watch?v=QzTfH7K7wkg"
      },
      {
        title: "SSL vs TLS",
        url: "https://www.youtube.com/watch?v=SJJmoDZ3il8"
      },
      {
        title: "FTP vs SFTP",
        url: "https://www.youtube.com/watch?v=H4aQj6f0W6Q"
      },
      {
        title: "HTTPS Explained",
        url: "https://www.youtube.com/watch?v=hExRDVZHhig"
      },
      {
        title: "IPSec VPN Explained",
        url: "https://www.youtube.com/watch?v=G6J7K2nA4A8"
      },
      {
        title: "DNSSEC Explained",
        url: "https://www.youtube.com/watch?v=qL4w3hM4Q8I"
      },
      {
        title: "LDAPS Explained",
        url: "https://www.youtube.com/watch?v=Vt8x1R5D8gY"
      },
      {
        title: "Incident Response Full Course",
        url: "https://www.youtube.com/watch?v=4A8L7T7wM7Q"
      },
      {
        title: "NIST Incident Response Process",
        url: "https://www.youtube.com/watch?v=9j6k2sM9Q1M"
      },
      {
        title: "SOC Incident Handling",
        url: "https://www.youtube.com/watch?v=7f9v7Q0L5lI"
      },
      {
        title: "Cybersecurity Risk Communication",
        url: "https://www.youtube.com/watch?v=Q7v6K9d3L2A"
      },
      {
        title: "Executive Incident Reporting",
        url: "https://www.youtube.com/watch?v=2fQ0vL5h6gQ"
      },
      {
        title: "Digital Forensics Course",
        url: "https://www.youtube.com/watch?v=3d3igA0fJ4I"
      },
      {
        title: "Computer Forensics Fundamentals",
        url: "https://www.youtube.com/watch?v=7m8jA5J5y3k"
      },
      {
        title: "FTK Imager Tutorial",
        url: "https://www.youtube.com/watch?v=Yl7s5T2H4W8"
      },
      {
        title: "Linux dd Command Tutorial",
        url: "https://www.youtube.com/watch?v=pb6tECZP6WE"
      },
      {
        title: "Volatility Framework Tutorial",
        url: "https://www.youtube.com/watch?v=1S0aBV-Waeo"
      },
      {
        title: "Memory Dump Analysis",
        url: "https://www.youtube.com/watch?v=U8m1V9K4j8M"
      },
      {
        title: "Reverse Engineering for Beginners",
        url: "https://www.youtube.com/watch?v=44UP7Y7f9k4"
      },
      {
        title: "Ghidra Tutorial",
        url: "https://www.youtube.com/watch?v=fTGTnrgjuGA"
      },
      {
        title: "ISO 27001",
        url: "https://www.youtube.com/watch?v=Vj9W9Q7w5hM"
      },
      {
        title: "NIST Cybersecurity Framework (CSF)",
        url: "https://www.youtube.com/watch?v=F4x5l7e5Q3A"
      },
      {
        title: "NIST Risk Management Framework (RMF)",
        url: "https://www.youtube.com/watch?v=4Q0Q6hQ8S3Q"
      },
      {
        title: "CIS Controls",
        url: "https://www.youtube.com/watch?v=hL4xM2q7M8A"
      },
      {
        title: "John Hammond",
        url: "https://www.youtube.com/@_JohnHammond"
      },
      {
        title: "TCM Security",
        url: "https://www.youtube.com/@TCMSecurityAcademy"
      },
      {
        title: "David Bombal",
        url: "https://www.youtube.com/@davidbombal"
      },
      {
        title: "NetworkChuck",
        url: "https://www.youtube.com/@NetworkChuck"
      },
      {
        title: "Professor Messer",
        url: "https://www.youtube.com/@professormesser"
      },
      {
        title: "HackerSploit",
        url: "https://www.youtube.com/@HackerSploit"
      },
      {
        title: "Simply Cyber",
        url: "https://www.youtube.com/@SimplyCyber"
      },
      {
        title: "Black Hills Information Security",
        url: "https://www.youtube.com/@BlackHillsInformationSecurity"
      },
      {
        title: "Microsoft Security",
        url: "https://www.youtube.com/@MicrosoftSecurity"
      }
    ],
    lessons: [
      {
        id: 'h106-l1',
        moduleId: 'mod-hacking-106',
        title: 'Attack Surface Reduction & GPOs',
        duration: 20,
        youtubeVideoId: '8f8U8E_pD0g',
        content: `### Lecture Notes: Attack Surface Reductions

Welcome back, class. Today we focus on reducing local entry vectors across corporate directories.

We utilize Active Directory Group Policy Objects (GPOs) to deploy local baseline templates: locking down unnecessary client ports, shutting down unencrypted protocols, and funneling management actions through Jump Server gateways.

---

#### 6. Academic Milestones and Scholar Award
You have earned the **Sovereign Directory Hardener Milestone** for enforcing strict baseline profiles.`,
        quiz: {
          id: 'q-h106-l1',
          title: 'ASR Check',
          questions: [
            {
              id: 'qh106-l1-q1',
              text: 'What central Microsoft directory service deploys policy parameters onto corporate client endpoints?',
              options: ['Active Directory GPOs', 'WSUS patch lists', 'NDIS gateways', 'SMTP servers'],
              correctAnswerIndex: 0,
              explanation: 'GPOs allow system administrators to enforce security profiles (port closures, system settings) across all nodes globally.'
            }
          ]
        }
      },
      {
        id: 'h106-l2',
        moduleId: 'mod-hacking-106',
        title: 'Endpoint Detection Technologies: EDR, DLP & NGFW',
        duration: 25,
        youtubeVideoId: '8f8U8E_pD0g',
        content: `### Lecture Notes: Host Endpoint Protection Assemblies

Welcome back, class. Endpoints require continuous behavioral analysis.

Next-Generation Firewalls (NGFW) inspect packet payloads, Endpoint Detection and Response (EDR) agents audit memory footprints and command execution paths, and Data Loss Prevention (DLP) blocks data leakage before transport.

---

#### 6. Academic Milestones and Scholar Award
You have earned the **Sovereign Host Defense Tactician Milestone** for integrating EDR telemetry.`,
        quiz: {
          id: 'q-h106-l2',
          title: 'EDR Check',
          questions: [
            {
              id: 'qh106-l2-q1',
              text: 'How does EDR differ from standard legacy antivirus agents?',
              options: ['It only scans local storage partitions during inactive hours', 'It leverages continuous real-time behavioral tracing, script audits, and lateral detection', 'It is client-only with zero master server links', 'It automatically builds private router VLANs'],
              correctAnswerIndex: 1,
              explanation: 'EDR actively audits running processes, network connections, memory writes, and registry changes rather than relying on file hashes.'
            }
          ]
        }
      },
      {
        id: 'h106-l3',
        moduleId: 'mod-hacking-106',
        title: 'Network Access Control (NAC): Port checks & 802.1X',
        duration: 25,
        youtubeVideoId: 'ZtqBQ68cfJc',
        content: `### Lecture Notes: Network Access Controls

Welcome back, class. Admission to physical and wireless subnets requires strict client posture validations.

Network Access Control (NAC) validates client hardware MAC IDs alongside robust 802.1X routing gateways (EAP-TLS/PEAP). Unverified systems are directed into non-default Isolation Native VLAN cages.

---

#### 6. Academic Milestones and Scholar Award
You have earned the **Sovereign Network Admission Master Milestone** for locking switch port gates.`,
        quiz: {
          id: 'q-h106-l3',
          title: 'NAC Check',
          questions: [
            {
              id: 'qh106-l3-q1',
              text: 'What protocol secures local switch port or wireless authentication checks?',
              options: ['802.1Q tagging', '802.1X', 'IPsec', 'ACME'],
              correctAnswerIndex: 1,
              explanation: '802.1X is the IEEE standard for port-based Network Access Control, authenticating endpoints via EAP.'
            }
          ]
        }
      },
      {
        id: 'h106-l4',
        moduleId: 'mod-hacking-106',
        title: 'SIEM Log Centralization & Parsers',
        duration: 25,
        youtubeVideoId: '8f8U8E_pD0g',
        content: `### Lecture Notes: Central Log Aggregation

Welcome back, class. Real-time SOC investigation demands a single pane of event glass.

We compile log streams (Windows Event log files, Linux Syslog dumps, NetFlow telemetry packets) into a centralized SIEM parser cluster. Parsers normalize data fields, making searches swift and correlative rules possible.

---

#### 6. Academic Milestones and Scholar Award
You have earned the **Sovereign Telemetry Engineer Milestone** for normalizing event records.`,
        quiz: {
          id: 'q-h106-l4',
          title: 'SIEM Check',
          questions: [
            {
              id: 'qh106-l4-q1',
              text: 'By what mechanism makes a SIEM find alerts across multi-layer Windows and Linux nodes?',
              options: ['By utilizing direct database queries on endpoints', 'By centralizing log metrics and executing normalization parser schemas', 'By resetting default admin routing paths', 'Using symmetric cryptographic salts'],
              correctAnswerIndex: 1,
              explanation: 'SIEM engines ingest, normalize, and parse timestamps and fields from text logs to enable multi-source event correlation.'
            }
          ]
        }
      },
      {
        id: 'h106-l5',
        moduleId: 'mod-hacking-106',
        title: 'Security Automation (SOAR) & Alert containment',
        duration: 20,
        youtubeVideoId: '8f8U8E_pD0g',
        content: `### Lecture Notes: SOAR Automation Playbooks

Welcome back, class. Standard hand-triaged alerts are too slow to hold active lateral attacks.

We deploy Security Orchestration, Automation, and Response (SOAR) playbooks. SOAR scripts intercept severe SIEM triggers, automatically executing API containment ciphers (e.g., isolating hosts via EDR or disabling directories profiles).

---

#### 6. Academic Milestones and Scholar Award
You have earned the **Sovereign Incident Orchestrator Milestone** for designing automated containment scripts.`,
        quiz: {
          id: 'q-h106-l5',
          title: 'SOAR Check',
          questions: [
            {
              id: 'qh106-l5-q1',
              text: 'What is the primary role of a SOAR platform in modern SOC teams?',
              options: ['To compile raw backend source code packages', 'To execute automated playbook scripts responding to validated alerts instantly', 'To back up local database tables', 'To generate physical corporate identity badges'],
              correctAnswerIndex: 1,
              explanation: 'SOAR automates defensive actions (like host isolation) via playbooks, removing delay overhead from initial response workflows.'
            }
          ]
        }
      },
      {
        id: 'h106-l6',
        moduleId: 'mod-hacking-106',
        title: 'Proactive Operations: Threat Hunting & CVSS',
        duration: 25,
        youtubeVideoId: '10gP84jZsz4',
        content: `### Lecture Notes: Threat Hunting & Risk Scoring

Welcome back, class. Passive defense leaves enterprise pathways exposed to unalerted active footholds.

We run active Threat Hunting exercises, querying local systems for Indicators of Compromise (IoCs). We score vulnerability findings using the Common Vulnerability Scoring System (CVSS) framework to prioritize remediation action plans.

---

#### 6. Academic Milestones and Scholar Award
You have earned the **Sovereign Threat Hunter Milestone** for tracing persistent compromise indicators.`,
        quiz: {
          id: 'q-h106-l6',
          title: 'Hunting Check',
          questions: [
            {
              id: 'qh106-l6-q1',
              text: 'Which risk scoring system is widely used to evaluate software vulnerabilities?',
              options: ['NIST RMF', 'ISO 27001', 'CVSS (Common Vulnerability Scoring System)', 'CIS Controls'],
              correctAnswerIndex: 2,
              explanation: 'CVSS scores vulnerabilities from 0.0 to 10.0 based on exploit complexity, leverage requirements, and impact metrics.'
            }
          ]
        }
      },
      {
        id: 'h106-l7',
        moduleId: 'mod-hacking-106',
        title: 'Secure Protocol Transitioning',
        duration: 20,
        youtubeVideoId: 'SykP3U2Q8eA',
        content: `### Lecture Notes: Secure Protocol Hardening

Welcome back, class. Cleartext transit channels represent open doors for local packet sniffing.

We enforce transition pathways: FTP → SFTP, HTTP → HTTPS, and LDAP → LDAPS. We validate host network mappings by enrolling secure IPsec tunnel routes and authorizing cryptographic DNSSEC entries.

---

#### 6. Academic Milestones and Scholar Award
You have earned the **Sovereign Cryptographic Network Guardian Milestone** for eliminating cleartext transits.`,
        quiz: {
          id: 'q-h106-l7',
          title: 'Protocols Check',
          questions: [
            {
              id: 'qh106-l7-q1',
              text: 'Which protocol represents the secure encrypted replacement for standard cleartext LDAP directory queries?',
              options: ['SFTP', 'HTTPS', 'LDAPS', 'DNSSEC'],
              correctAnswerIndex: 2,
              explanation: 'LDAPS (LDAP over SSL/TLS) encrypts directory access queries, neutralizing packet sniffing over LAN pathways.'
            }
          ]
        }
      },
      {
        id: 'h106-l8',
        moduleId: 'mod-hacking-106',
        title: 'The Six-Step Incident Response Lifecycle',
        duration: 30,
        youtubeVideoId: 'N9N4fS4Vjzo',
        content: `### Lecture Notes: SANS/NIST Incident Response Steps

Welcome back, class. When alerts confirm active server breaches, responders operate under SANS/NIST lifecycle steps:

1. **Preparation**: Hardening nodes and configuring log pools.
2. **Identification**: Establishing the incident boundaries.
3. **Containment**: Isolating target units to halt sideways movement.
4. **Eradication**: Purging entry files and backdoors.
5. **Recovery**: Elevating clean systems back to production.
6. **Lessons Learned**: Writing post-mortem logs.

---

#### 6. Academic Milestones and Scholar Award
You have earned the **Sovereign Incident Commander Milestone** for orchestrating secure node isolations.`,
        quiz: {
          id: 'q-h106-l8',
          title: 'IR Steps Check',
          questions: [
            {
              id: 'qh106-l8-q1',
              text: 'In which incident response step do engineers isolate a compromised node to prevent lateral spread?',
              options: ['Preparation', 'Containment', 'Eradication', 'Lessons Learned'],
              correctAnswerIndex: 1,
              explanation: 'Containment focuses on restricting the footprint of an incident, such as disconnecting or isolating compromised assets.'
            }
          ]
        }
      },
      {
        id: 'h106-l9',
        moduleId: 'mod-hacking-106',
        title: 'Crisis Communications Management',
        duration: 20,
        youtubeVideoId: 'N9N4fS4Vjzo',
        content: `### Lecture Notes: Crisis Communications

Welcome back, class. Security incidents demand professional communication bridging technical details with business impact reporting.

During active breaches, responders coordinate clear reporting vectors with Legal, compliance officers, HR, public relations, and board directors, translating low-level shell incidents into clear risk profiles.

---

#### 6. Academic Milestones and Scholar Award
You have earned the **Sovereign Security Spokesperson Milestone** for leading corporate breach incident briefs.`,
        quiz: {
          id: 'q-h106-l9',
          title: 'Communications quiz',
          questions: [
            {
              id: 'qh106-l9-q1',
              text: 'What represents the core objective of crisis communication during a major data leak?',
              options: ['To configure and launch local packet filters', 'To translate technical exploits into clean business risk profiles and align responses with legal boundaries', 'To clear local database tables before audit', 'To reset active trunk native configurations'],
              correctAnswerIndex: 1,
              explanation: 'Crisis communications bridge technical events with corporate, legal, and reputational structures to guide structured corporate action.'
            }
          ]
        }
      },
      {
        id: 'h106-l10',
        moduleId: 'mod-hacking-106',
        title: 'Forensic Collection, RAM dumps & Disk Imaging',
        duration: 30,
        youtubeVideoId: 'N9N4fS4Vjzo',
        content: `### Lecture Notes: Cryptographic Forensics Collection

Welcome back, class. Investigating crimes requires securing volatile evidence without altering target system traces.

We execute live volatile RAM captures, configure bit-stream disk copies (using dd or specialized FTK platforms), and register strict chains of custody to ensure target file proof remains valid in courts of law.

---

#### 6. Academic Milestones and Scholar Award
You have earned the **Sovereign Forensics Examiner Milestone** for conducting valid RAM volatile captures.`,
        quiz: {
          id: 'q-h106-l10',
          title: 'Forensics Check',
          questions: [
            {
              id: 'qh106-l10-q1',
              text: 'Why is volatile system memory (RAM) usually extracted prior to physical storage disk copies?',
              options: ['It consumes less capacity during capture', 'RAM holds active volatile logs, process tables, and encryption keys that dissolve on power down', 'Disk copies require active system rebooting', 'RAM files are naturally signed cryptographic keys'],
              correctAnswerIndex: 1,
              explanation: 'Volatile memory gets wiped when power is cut. Responders capture active processes, network configurations, and decrypted keys in RAM first.'
            }
          ]
        }
      },
      {
        id: 'h106-l11',
        moduleId: 'mod-hacking-106',
        title: 'Compliance Framework Standards: ISO, CIS & RMF',
        duration: 25,
        youtubeVideoId: '8f8U8E_pD0g',
        content: `### Lecture Notes: Compliance Framework Architectures

Welcome back, class. Defensive engineering teams align audits with trusted international frameworks.

We map operations to ISO 27001 (information security systems), the NIST Risk Management Framework (RMF), NIST CSF (Cybersecurity Framework), and the Center for Internet Security (CIS) Controls.

---

#### 6. Academic Milestones and Scholar Award
You have earned the **Sovereign Security Auditor Milestone** for mapping CIS control baselines.`,
        quiz: {
          id: 'q-h106-l11',
          title: 'Compliance Check',
          questions: [
            {
              id: 'qh106-l11-q1',
              text: 'Which resource is specifically designed for practical, prioritized step-by-step security hardening tasks?',
              options: ['ISO 27001 Annex templates', 'NIST RMF catalogs', 'CIS Critical Security Controls', 'COBIT databases'],
              correctAnswerIndex: 2,
              explanation: 'CIS Controls document direct, action-focused guidelines, designed as a technical checklist to build baseline host defenses.'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'mod-hacking-107',
    areaId: 'hacking-107',
    title: 'Automation Scripting, DevSecOps & Practical Labs',
    description: 'Writing Python security tools, setting Cloud shared models, command-line toolkits, and CTF arenas.',
    libraryLinks: [
      {
        title: "Python Full Course (FreeCodeCamp)",
        url: "https://www.youtube.com/watch?v=rfscVS0vtbw"
      },
      {
        title: "Python for Cybersecurity & Automation",
        url: "https://www.youtube.com/watch?v=s0HYrw4Yd8U"
      },
      {
        title: "Python Network Automation Basics",
        url: "https://www.youtube.com/watch?v=3cZp7k4pQ1E"
      },
      {
        title: "Bash Scripting Full Course",
        url: "https://www.youtube.com/watch?v=tK9Oc6AEnR4"
      },
      {
        title: "Linux Shell Scripting Tutorial",
        url: "https://www.youtube.com/watch?v=v-F3YLd6oMw"
      },
      {
        title: "PowerShell Full Course",
        url: "https://www.youtube.com/watch?v=UVUd9_k9C6A"
      },
      {
        title: "PowerShell for Cybersecurity",
        url: "https://www.youtube.com/watch?v=IHrGresKu2w"
      },
      {
        title: "Go Programming Full Course",
        url: "https://www.youtube.com/watch?v=YS4e4q9oBaU"
      },
      {
        title: "Learn Go for Backend & Security Tools",
        url: "https://www.youtube.com/watch?v=un6ZyFkqFKo"
      },
      {
        title: "JavaScript Full Course",
        url: "https://www.youtube.com/watch?v=PkZNo7MFNFg"
      },
      {
        title: "JavaScript Crash Course",
        url: "https://www.youtube.com/watch?v=hdI2bqOjy3c"
      },
      {
        title: "C++ Full Course",
        url: "https://www.youtube.com/watch?v=vLnPwxZdW4Y"
      },
      {
        title: "Cloud Computing Full Course",
        url: "https://www.youtube.com/watch?v=2LaAJq1lB1Q"
      },
      {
        title: "Cloud Fundamentals Explained",
        url: "https://www.youtube.com/watch?v=M988_fsOSWo"
      },
      {
        title: "SaaS vs PaaS vs IaaS Explained",
        url: "https://www.youtube.com/watch?v=36zducUX16w"
      },
      {
        title: "Cloud Service Models Overview",
        url: "https://www.youtube.com/watch?v=3k5xp2fYJ7U"
      },
      {
        title: "AWS Shared Responsibility Model Explained",
        url: "https://www.youtube.com/watch?v=4Z7R3P1A5B0"
      },
      {
        title: "Cloud Security Fundamentals",
        url: "https://www.youtube.com/watch?v=0X0g6b0jJkQ"
      },
      {
        title: "AWS Full Course",
        url: "https://www.youtube.com/watch?v=NhDYbskXRgc"
      },
      {
        title: "AWS Cloud Practitioner Course",
        url: "https://www.youtube.com/watch?v=SOTamWNgDKc"
      },
      {
        title: "AWS S3 Storage Explained",
        url: "https://www.youtube.com/watch?v=e6w9LwZJFIA"
      },
      {
        title: "AWS Lambda (Serverless)",
        url: "https://www.youtube.com/watch?v=eOBq__h4"
      },
      {
        title: "TryHackMe Learning Path (SAFE PRACTICAL LABS)",
        url: "https://tryhackme.com"
      },
      {
        title: "Hack The Box Academy (Controlled Ethical Labs)",
        url: "https://academy.hackthebox.com"
      },
      {
        title: "picoCTF (Beginner Cybersecurity Practice)",
        url: "https://picoctf.org"
      },
      {
        title: "John Hammond (Recommended Channel)",
        url: "https://www.youtube.com/@_JohnHammond"
      },
      {
        title: "TCM Security (Recommended Channel)",
        url: "https://www.youtube.com/@TCMSecurityAcademy"
      },
      {
        title: "David Bombal (Recommended Channel)",
        url: "https://www.youtube.com/@davidbombal"
      },
      {
        title: "NetworkChuck (Recommended Channel)",
        url: "https://www.youtube.com/@NetworkChuck"
      },
      {
        title: "Professor Messer (Recommended Channel)",
        url: "https://www.youtube.com/@professormesser"
      },
      {
        title: "HackerSploit (Recommended Channel)",
        url: "https://www.youtube.com/@HackerSploit"
      },
      {
        title: "Simply Cyber (Recommended Channel)",
        url: "https://www.youtube.com/@SimplyCyber"
      },
      {
        title: "Black Hills Information Security (Recommended Channel)",
        url: "https://www.youtube.com/@BlackHillsInformationSecurity"
      },
      {
        title: "Microsoft Security (Recommended Channel)",
        url: "https://www.youtube.com/@MicrosoftSecurity"
      }
    ],
    lessons: [
      {
        id: 'h107-l1',
        moduleId: 'mod-hacking-107',
        title: 'Administrative Scripting: Python, Go & Shells',
        duration: 30,
        youtubeVideoId: 'rfscVS0vtbw',
        content: `### Lecture Notes: Secure Systems Automations

Welcome back, class. Automating daily threat detections requires mastering multi-language structures.

Our toolkit leverages Python (parsing logs, writing port crawlers), Go (high-concurrency tools), Bash (UNIX server stream edits), and PowerShell objects.

---

#### 6. Academic Milestones and Scholar Award
You have earned the **Sovereign Systems Automator Milestone** for compiling fast connection scanners.`,
        quiz: {
          id: 'q-h107-l1',
          title: 'Scripting Check',
          questions: [
            {
              id: 'qh107-l1-q1',
              text: 'Which language utilizes goroutines for high-concurrency network tasks?',
              options: ['Python', 'Ruby', 'Go (Golang)', 'Bash'],
              correctAnswerIndex: 2,
              explanation: 'Go is statically compiled with native, light goroutines to execute thousands of simultaneous socket hooks efficiently.'
            }
          ]
        }
      },
      {
        id: 'h107-l2',
        moduleId: 'mod-hacking-107',
        title: 'Cloud Architecture Paradigms & Shared Security',
        duration: 20,
        youtubeVideoId: 'rfscVS0vtbw',
        content: `### Lecture Notes: Cloud Architecture Security

Welcome back, class. Cloud environments shift boundary definitions from physical walls to API access logic.

Deployments leverage IaaS (infrastructure), PaaS (platforms), and SaaS (software). Regardless of the service model, the Cloud Shared Responsibility Model dictates that customer data, permissions, and host configurations remain the customer\'s physical responsibility.

---

#### 6. Academic Milestones and Scholar Award
You have earned the **Sovereign Cloud Custodian Milestone** for securing shared tenant directory portals.`,
        quiz: {
          id: 'q-h107-l2',
          title: 'Cloud Sec Check',
          questions: [
            {
              id: 'qh107-l2-q1',
              text: 'In the Cloud Shared Responsibility Model, who remains responsible for protecting client data and access roles?',
              options: ['The Cloud Supplier exclusively', 'The Customer enterprise', 'The local physical security team', 'The state regulatory body'],
              correctAnswerIndex: 1,
              explanation: 'Under the shared model, cloud vendors handle host hypervisors and facilities, but configurations and content remain customer tasks.'
            }
          ]
        }
      },
      {
        id: 'h107-l3',
        moduleId: 'mod-hacking-107',
        title: 'Cloud Infrastructure Engineered: IaC Templates',
        duration: 20,
        youtubeVideoId: 'rfscVS0vtbw',
        content: `### Lecture Notes: Infrastructure as Code Security

Welcome back, class. Virtual environments must build predictably without manual administrator drift.

We declare environments using Infrastructure as Code (IaC) architectures (compiled templates like Terraform) to deploy immutable security groups, encrypt S3 cloud buckets, and secure virtual gateways.

---

#### 6. Academic Milestones and Scholar Award
You have earned the **Sovereign Cloud Architect Milestone** for structuring verified secure cloud templates.`,
        quiz: {
          id: 'q-h107-l3',
          title: 'Cloud Engineering Check',
          questions: [
            {
              id: 'qh107-l3-q1',
              text: 'What describes the concept of "Infrastructure as Code"?',
              options: ['Writing application code using web-based interfaces', 'Defining and configuring virtual computing units, networks, and rules via machine-readable script templates', 'Enabling unencrypted FTP portals', 'Compiling local kernel binaries manually'],
              correctAnswerIndex: 1,
              explanation: 'IaC allows engineering teams to deploy and track network boundaries, server configurations, and storage rules using declarative scripts.'
            }
          ]
        }
      },
      {
        id: 'h107-l4',
        moduleId: 'mod-hacking-107',
        title: 'Network Command Line Toolkit: Diagnostics',
        duration: 30,
        youtubeVideoId: '5WfiTHiU4x8',
        content: `### Lecture Notes: Command-Line Diagnostic Audits

Welcome back, class. We operate natively inside console environments without relying on graphical programs.

Our terminal diagnostic toolkit includes nmap (ports scanning), ping (ICMP path checking), tcpdump (raw packet collection), route/netstat (interface checks), nslookup (DNS names lookup), and iptables (local firewalls rules configuring).

---

#### 6. Academic Milestones and Scholar Award
You have earned the **Sovereign Terminal Auditor Milestone** for diagnostics processing.`,
        quiz: {
          id: 'q-h107-l4',
          title: 'CLI Diagnostics Check',
          questions: [
            {
              id: 'qh107-l4-q1',
              text: 'Which utility captures and records raw network communication packets flowing through a physical system interface?',
              options: ['ping', 'nslookup', 'tcpdump', 'route'],
              correctAnswerIndex: 2,
              explanation: 'tcpdump is a command-line packet sniffing utility capable of capturing and displaying packets for analysis.'
            }
          ]
        }
      },
      {
        id: 'h107-l5',
        moduleId: 'mod-hacking-107',
        title: 'Forensics & Analysis Tools: Wireshark & any.run',
        duration: 25,
        youtubeVideoId: 'N9N4fS4Vjzo',
        content: `### Lecture Notes: PCAP & Sandbox Threat Analyses

Welcome back, class. Inspecting malicious activity demands specialized tools.

We analyze local PCAP packet files inside Wireshark, capture malicious behaviors inside interactive sandboxes (e.g., any.run, Joe Sandbox), and verify file indicators of compromise via platforms like VirusTotal and WHOIS lookup queries.

---

#### 6. Academic Milestones and Scholar Award
You have earned the **Sovereign Packet Examiner Milestone** for uncovering packet trace flows.`,
        quiz: {
          id: 'q-h107-l5',
          title: 'Forensics Tools Check',
          questions: [
            {
              id: 'qh107-l5-q1',
              text: 'Which interactive platform allows analysts to safely detonate binaries in a virtual environment to monitor network and file outcomes?',
              options: ['Wireshark', 'any.run interactive sandbox', 'Nmap', 'FTK Imager'],
              correctAnswerIndex: 1,
              explanation: 'Interactive malware sandboxes (like any.run) let responders monitor detonation workflows, DLL loads, and remote connection attempts safely.'
            }
          ]
        }
      },
      {
        id: 'h107-l6',
        moduleId: 'mod-hacking-107',
        title: 'Practical Challenge Arenas (Capture the Flag)',
        duration: 30,
        youtubeVideoId: '5WfiTHiU4x8',
        content: `### Lecture Notes: Capture the Flag (CTF) Practice Arenas

Welcome to your next lecture, class. Defensive and offensive skills must be tested in safe virtual environments.

Students execute hands-on challenges across trusted arenas: TryHackMe, Hack The Box (infrastructure challenges), VulnHub (isolated machines), picoCTF, and SANS Holiday Hack environments.

---

#### 6. Academic Milestones and Scholar Award
You have officially earned the **Sovereign CTF Glider Milestone - Master of the Decoy Challenge Rooms**. Defend and attack with absolute academic integrity!`,
        quiz: {
          id: 'q-h107-l6',
          title: 'CTF Checking',
          questions: [
            {
              id: 'qh107-l6-q1',
              text: 'Which platform is highly recommended for structured, step-by-step room walks covering core security concepts?',
              options: ['Hack The Box', 'TryHackMe', 'VulnHub', 'dd'],
              correctAnswerIndex: 1,
              explanation: 'TryHackMe offers structured, interactive guided walkrooms, making it superb for learning security roles step-by-step.'
            }
          ]
        }
      }
    ]
  }
];
