import { PracticalLab } from '../types';

export const PRACTICAL_LABS: PracticalLab[] = [
  {
    id: 'lab-sec-eng',
    moduleId: 'mod-group1',
    title: 'Proxmox Virtual Network & VLAN Isolation Lab',
    difficulty: 'Advanced',
    estimatedTime: 75,
    xpReward: 600,
    rulesOfEngagement: [
      'Avoid making changes that disrupt other active virtual machines on the network.',
      'Configure stateful firewall rules to block unauthorized cross-VLAN traffic.',
      'Confirm you maintain administrative access while applying firewall restrictions.'
    ],
    topology: {
      description: 'A Proxmox server hosting both test systems and secure database segments separated by a safe virtual network bridge.',
      nodes: [
        { name: 'Proxmox-Host', ip: '10.10.1.1', role: 'Hypervisor Host Server' },
        { name: 'Test-Machine', ip: '10.10.99.15', role: 'Vulnerable Test Host (Isolated Subnet)' },
        { name: 'Secured-Server', ip: '10.10.100.20', role: 'Secure Database and Management Server' }
      ]
    },
    milestones: [
      { id: 'm-eng-1', title: 'Create Virtual Network Bridge', description: 'Configure an isolated virtual network bridge (vmbr99) on the Proxmox hypervisor.' },
      { id: 'm-eng-2', title: 'Configure Firewall Rules', description: 'Add network packet rules to block traffic between subnet 99 and subnet 100.' },
      { id: 'm-eng-3', title: 'Verify Hypervisor Isolation', description: 'Ensure hypervisor-level virtualization isolation parameters are fully active.' }
    ],
    verificationChecks: [
      { id: 'c-eng-1', description: 'Confirm the test machine cannot ping the Secure Database Server IP.', hint: 'Run a ping test between the hosts to verify block.' },
      { id: 'c-eng-2', description: 'Ensure the test guest VM cannot list internal host disk drives.', hint: 'Check block device visibility inside the guest settings.' }
    ],
    expectedFlag: 'CTF{HYPERVISOR_SDN_VLAN_ISOLATED}'
  },
  {
    id: 'lab-network-security',
    moduleId: 'mod-group2',
    title: 'Port Scanning & network Packet Analysis Lab',
    difficulty: 'Intermediate',
    estimatedTime: 50,
    xpReward: 400,
    rulesOfEngagement: [
      'Avoid aggressive flooding scans to prevent slowdowns on the target environment.',
      'Configure your packet captures to listen only to the target test subnet.',
      'Retrieve and submit the plaintext password found in the capture.'
    ],
    topology: {
      description: 'Two virtual machines running on a local network. An insecure application server transmits credentials over unencrypted HTTP (port 80).',
      nodes: [
        { name: 'Attack-Kali', ip: '10.5.0.2', role: 'Security Tools and Capture Terminal' },
        { name: 'Target-Server', ip: '10.5.0.10', role: 'Insecure Web Server Application' }
      ]
    },
    milestones: [
      { id: 'm-net-1', title: 'Perform Port Scanning', description: 'Scan the subnet using port scanner commands to discover open ports and services.' },
      { id: 'm-net-2', title: 'Capture Traffic with Wireshark', description: 'Listen on the network interface and filter the recorded traffic for HTTP web traffic.' },
      { id: 'm-net-3', title: 'Retrieve Web Password', description: 'Enter a test login on the server and extract the password from the capture.' }
    ],
    verificationChecks: [
      { id: 'c-net-1', description: 'Verify that port 80 is detected as active on the client dashboard.', hint: 'Use nmap to discover open ports: nmap 10.5.0.10' },
      { id: 'c-net-2', description: 'Confirm you can inspect the HTTP POST request password payload.', hint: 'Filter HTTP traffic using http.request.method == "POST"' }
    ],
    expectedFlag: 'CTF{PT_80_NMAP_WIRESHARK_DECODED}'
  },
  {
    id: 'lab-iam',
    moduleId: 'mod-group3',
    title: 'Active Directory & Multi-Factor Security Lab',
    difficulty: 'Intermediate',
    estimatedTime: 55,
    xpReward: 400,
    rulesOfEngagement: [
      'Avoid modifying active directory configurations except where requested.',
      'Use PowerShell administration scripts to find circular or nested group memberships.',
      'Configure enrollments and authentication requirements for administrators.'
    ],
    topology: {
      description: 'A Windows Active Directory cluster hosting corporate user files and nested permissions group settings.',
      nodes: [
        { name: 'Domain-Controller', ip: '172.16.200.5', role: 'User Directory Server' },
        { name: 'Auditing-Workstation', ip: '172.16.200.41', role: 'Administrator Diagnostic Testing PC' }
      ]
    },
    milestones: [
      { id: 'm-iam-1', title: 'Audit Nested Groups', description: 'Query account mappings to find unauthorized permission inheritance.' },
      { id: 'm-iam-2', title: 'Configure Role Permissions', description: 'Establish clean directory categories according to role roles.' },
      { id: 'm-iam-3', title: 'Enforce Administrative MFA', description: 'Set multi-factor verification policies for high-security administrator accounts.' }
    ],
    verificationChecks: [
      { id: 'c-iam-1', description: 'Verify that circular permission pathways have been identified and removed.', hint: 'Use Get-ADGroupMember commands to view recursive groups.' },
      { id: 'c-iam-2', description: 'Confirm that admin logins successfully trigger a multi-factor verification challenge.', hint: 'Check that administrators are requested for a backup code when signing in.' }
    ],
    expectedFlag: 'CTF{IAM_RBAC_NESTED_AD_RESOLVED}'
  },
  {
    id: 'lab-cryptography',
    moduleId: 'mod-group4',
    title: 'Cryptography & Certificate Recovery Lab',
    difficulty: 'Intermediate',
    estimatedTime: 60,
    xpReward: 500,
    rulesOfEngagement: [
      'Avoid running full guessing attacks; instead, locate the certificate block details in memory.',
      'Use OpenSSL utilities inside the master terminal to inspect private key structures.',
      'Store any clean output keys in a safe workspace location.'
    ],
    topology: {
      description: 'A test client machine containing an encrypted zip file and a memory dump backup from a decommissioned archive server.',
      nodes: [
        { name: 'Diagnostic-Terminal', ip: 'Local Workstation', role: 'OpenSSL and Editing Terminal Host' },
        { name: 'Backup-Server-Drive', ip: '10.0.4.150', role: 'Offline storage vault with archived backup segments' }
      ]
    },
    milestones: [
      { id: 'm-cry-1', title: 'Search Memory for Key Files', description: 'Scan the disk backup file to locate the start of a private certificate block.' },
      { id: 'm-cry-2', title: 'Rebuild PEM Private Key', description: 'Clean the extraction string and create a valid .pem private certificate file.' },
      { id: 'm-cry-3', title: 'Unlock Encrypted Archive', description: 'Use the passphrase found in the certificate comments to decrypt the AES file backup.' }
    ],
    verificationChecks: [
      { id: 'c-cry-1', description: 'Confirm OpenSSL can successfully parse and validate your restored private key.', hint: 'Test your certificate validity with: openssl rsa -in keyfile.pem -check' },
      { id: 'c-cry-2', description: 'Confirm that you successfully decoded the base64 symmetric key passphrase.', hint: 'Find the password strings in the memory registry search.' }
    ],
    expectedFlag: 'CTF{PKI_KEYPAIR_DECRYPTION_SUCCESS}'
  },
  {
    id: 'lab-gov-risk',
    moduleId: 'mod-group5',
    title: 'Threat Modeling & Privacy Compliance Lab',
    difficulty: 'Beginner',
    estimatedTime: 45,
    xpReward: 350,
    rulesOfEngagement: [
      'Analyze the cloud application structure to identify potential security threats.',
      'Draft security solutions aligned with standard privacy frameworks.',
      'Never share private log information outside the target secure server.'
    ],
    topology: {
      description: 'A virtual hypervisor hosting a test app server and an automated diagnostic audit agent.',
      nodes: [
        { name: 'Policy-Auditor', ip: '192.168.10.12', role: 'Security Compliance Auditing Station' },
        { name: 'Prod-DB-Host', ip: '192.168.10.25', role: 'Encrypted PostgreSQL Database Server' },
        { name: 'Nginx-Gateway', ip: '192.168.10.5', role: 'Reverse Proxy/Gateway Node' }
      ]
    },
    milestones: [
      { id: 'm-gov-1', title: 'Define Security Risks', description: 'Analyze potential incoming traffic paths and identify potential security risks.' },
      { id: 'm-gov-2', title: 'Analyze Account Policies', description: 'Verify that the server configuration enforces strong password storage parameters.' },
      { id: 'm-gov-3', title: 'Configure Log Forwarding', description: 'Direct server application access logs onto a secondary virtual auditor storage folder.' }
    ],
    verificationChecks: [
      { id: 'c-gov-1', description: 'Confirm database users possess only the permissions they require.', hint: 'Check pg_hba.conf configurations.' },
      { id: 'c-gov-2', description: 'Verify that system event logs are successfully forwarded to the audit node.', hint: 'Check active journal logs to view remote exports.' }
    ],
    expectedFlag: 'CTF{STRIDE_COMPLIANCE_AUDIT_CLEAR}'
  },
  {
    id: 'lab-sec-ops',
    moduleId: 'mod-group6',
    title: 'SIEM Security Auditing & Log Analysis Lab',
    difficulty: 'Intermediate',
    estimatedTime: 65,
    xpReward: 450,
    rulesOfEngagement: [
      'Do not modify active system logs while performing log collection.',
      'Use standard search queries to investigate large collections of security logs.',
      'Organize detected events in chronological order to find root causes.'
    ],
    topology: {
      description: 'A central security monitoring hub configured to receive event reports from active application servers.',
      nodes: [
        { name: 'SIEM-Wazuh-Core', ip: '10.82.0.100', role: 'Central Security Event Incident Parser' },
        { name: 'Active-API-Node', ip: '10.82.0.15', role: 'Log Emitting Endpoint' }
      ]
    },
    milestones: [
      { id: 'm-ops-1', title: 'Link Server Logs', description: 'Add operational logging paths inside your security monitoring configuration.' },
      { id: 'm-ops-2', title: 'Identify Suspicious Activities', description: 'Filter incoming alerts for repeated authentication failures.' },
      { id: 'm-ops-3', title: 'Block Suspicious IP Addresses', description: 'Create a firewall rule to drop traffic from the offending IP address.' }
    ],
    verificationChecks: [
      { id: 'c-ops-1', description: 'Confirm your analyzer has successfully flagged repeated failed SSH login events.', hint: 'Query logs for: Rule ID 5712 (SSHD Bruteforce).' },
      { id: 'c-ops-2', description: 'Check that the target bad IP address is successfully blocked on the firewall rule list.', hint: 'Check the blocked IP routing list to see if 203.0.113.88 is listed.' }
    ],
    expectedFlag: 'CTF{WAZUH_SIEM_AUDITING_ATTACK_TRACE}'
  },
  {
    id: 'lab-assessment',
    moduleId: 'mod-group7',
    title: 'Vulnerability Testing & Command Shell Lab',
    difficulty: 'Advanced',
    estimatedTime: 70,
    xpReward: 550,
    rulesOfEngagement: [
      'Run security tests strictly against authorized lab host nodes.',
      'Configure incoming connection ports above 1024, avoiding standard system defaults.',
      'Clean up all temporary files created during the simulation.'
    ],
    topology: {
      description: 'A safe testing network with an outdated application server exposing a remote command vulnerability.',
      nodes: [
        { name: 'Attack-Kali', ip: '192.168.1.15', role: 'Testing and Diagnostic Terminal' },
        { name: 'ProFTP-Vulnerable', ip: '192.168.1.20', role: 'Target Server Node (v1.3.3a)' }
      ]
    },
    milestones: [
      { id: 'm-ass-1', title: 'Scan Outdated Services', description: 'Check version numbers on the target server to identify potential security warnings.' },
      { id: 'm-ass-2', title: 'Configure Connection Listener', description: 'Set up your diagnostic terminal to await a connection from the target server.' },
      { id: 'm-ass-3', title: 'Run Vulnerability Simulation', description: 'Trigger the server simulator to establish an interactive diagnostic session.' }
    ],
    verificationChecks: [
      { id: 'c-ass-1', description: 'Verify your scanning tool correctly flags the outdated server software version.', hint: 'Check common vulnerability databases for the target server version.' },
      { id: 'c-ass-2', description: 'Confirm you can successfully execute simple diagnostic commands on the target machine.', hint: 'Verify that commands like whoami return valid administrative levels.' }
    ],
    expectedFlag: 'CTF{METASPLOIT_REVERSE_SHELL_ESTABLISHED}'
  },
  {
    id: 'lab-fs-static-web',
    moduleId: 'mod-fs-201',
    title: 'Responsive E-Commerce Storefront Layout Project',
    difficulty: 'Beginner',
    estimatedTime: 90,
    xpReward: 500,
    rulesOfEngagement: [
      'Implement semantic HTML5 structure exclusively, avoiding generic div nesting for primary sections.',
      'Enforce absolute fluid resizing down to 320px viewport without horizontal layout breaks.',
      'Lock down a clean git workflow structure with distinct feature branch merges.'
    ],
    topology: {
      description: 'A responsive visual catalog featuring elegant bento grids, CSS Flexbox product carts, and absolute positioning promotional tags.',
      nodes: [
        { name: 'Index-Main', ip: 'index.html', role: 'Primary document semantic core structure' },
        { name: 'Stylesheet', ip: 'styles.css', role: 'CSS styles mapping Flex and Grid configurations' },
        { name: 'State-Staging', ip: 'Git Repository', role: 'Tracking project milestones and feature commits' }
      ]
    },
    milestones: [
      { id: 'm-fsw-1', title: 'Layout Semantic Wireframe', description: 'Create semantic tags representing header, nav, main bento grid content, and footer sections.' },
      { id: 'm-fsw-2', title: 'Build Fluid Bento Catalog Grid', description: 'Assemble a highly responsive CSS grid that fluidly wraps columns based on screen size (grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))).' },
      { id: 'm-fsw-3', title: 'Integrate Flexbox Cart Layout', description: 'Construct a responsive shopping cart shelf displaying rows of items with clean space-between alignments.' }
    ],
    verificationChecks: [
      { id: 'c-fsw-1', description: 'Confirm that viewport scales down to mobile screens without introducing horizontal scrolling limits.', hint: 'Inspect styling rules, ensure max-width: 100% is enforced on asset blocks.' },
      { id: 'c-fsw-2', description: 'Verify that git logs record at least two descriptive atomic commits.', hint: 'Run git log --oneline to audit clean tracking stages.' }
    ],
    expectedFlag: 'CTF{HTML5_CSS_GRID_FLEXBOX_MASTERED}'
  },
  {
    id: 'lab-fs-shopping-cart',
    moduleId: 'mod-fs-202',
    title: 'Dynamic Shopping Cart Engine Project',
    difficulty: 'Intermediate',
    estimatedTime: 120,
    xpReward: 600,
    rulesOfEngagement: [
      'Write pure client-side JavaScript, managing persistent states via Web Storage APIs.',
      'Structure asynchronous promise callbacks elegantly with async/await commands.',
      'Strictly avoid DOM security leakage: sanitize all dynamically rendered markup.'
    ],
    topology: {
      description: 'A dynamic modular application engine that handles item additions, coupon discounts, calculations, and local persistence cycles.',
      nodes: [
        { name: 'CoreJS', ip: 'app.js', role: 'Reactive event listeners, dynamic computations, and client cache' },
        { name: 'WebStorage', ip: 'localStorage', role: 'Maintaining shopping cart items through page reloads' },
        { name: 'PackageEcosystem', ip: 'package.json', role: 'Managing external helper tools and execution scripts' }
      ]
    },
    milestones: [
      { id: 'm-fsc-1', title: 'Initialize Persistent Storage Engine', description: 'Develop hooks that retrieve, parse, and save item arrays inside localStorage on load.' },
      { id: 'm-fsc-2', title: 'Code Discount Coupon Handlers', description: 'Establish clean verification logic checking discount coupons, supporting async API validations.' },
      { id: 'm-fsc-3', title: 'Render Sanitized Cart Rows', description: 'Safely write dynamic template strings displaying item name, price, quantity multipliers, and active counts.' }
    ],
    verificationChecks: [
      { id: 'c-fsc-1', description: 'Confirm that items added to the cart remain completely preserved after refreshing the page.', hint: 'Inspect browser local storage database for serialized items JSON.' },
      { id: 'c-fsc-2', description: 'Confirm that attempts to inject malicious script tags into inputs are blocked.', hint: 'Sanitize user string inputs by replacing dynamic markup operators.' }
    ],
    expectedFlag: 'CTF{JS_DOM_ASYNC_LS_PERSIST_CLEAR}'
  },
  {
    id: 'lab-fs-saas-dashboard',
    moduleId: 'mod-fs-203',
    title: 'Interactive SaaS Financial Dashboard Project',
    difficulty: 'Intermediate',
    estimatedTime: 130,
    xpReward: 650,
    rulesOfEngagement: [
      'Implement standard component-driven architectures using React functional components.',
      'Control active list filters and detail selections via stable React state management hooks.',
      'Style the entire dashboard utilizing Tailwind CSS utility classes exclusively.'
    ],
    topology: {
      description: 'An interactive analytical dashboard rendering live transaction statistics with dynamic dark mode options.',
      nodes: [
        { name: 'ReactApp', ip: 'App.tsx', role: 'Functional entrypoint coordinating state and view layouts' },
        { name: 'AnalyticsCharts', ip: 'Recharts', role: 'Compiling SVG representation of financial statistics' },
        { name: 'TailwindStyles', ip: 'index.css', role: 'Compiling utility classes for eye-safe aesthetics' }
      ]
    },
    milestones: [
      { id: 'm-fsd-1', title: 'Design Modular Grid Layout', description: 'Create reusable sub-components for header metrics, filter panels, and historic logs.' },
      { id: 'm-fsd-2', title: 'Develop Live Filtering Loops', description: 'Map items in state through concurrent filter criteria (e.g., date ranges, transaction status, categorizations).' },
      { id: 'm-fsd-3', title: 'Incorporate Responsive Metrics Charts', description: 'Feed filtered variables into responsive charts with customizable viewport animations.' }
    ],
    verificationChecks: [
      { id: 'c-fsd-1', description: 'Check that modifying categories dynamically recalculates aggregate summary card counts.', hint: 'Verify useMemo computations rerun only when target sources change.' },
      { id: 'c-fsd-2', description: 'Confirm dashboard grids adapt layout smoothly from mobile screen to ultra-wide desktop monitors.', hint: 'Apply responsive breakpoints like md:grid-cols-2 and xl:grid-cols-4.' }
    ],
    expectedFlag: 'CTF{REACT_STATE_DASHBOARD_STYLISH}'
  },
  {
    id: 'lab-fs-blog-api',
    moduleId: 'mod-fs-204',
    title: 'RESTful Blog API with Database Project',
    difficulty: 'Advanced',
    estimatedTime: 150,
    xpReward: 700,
    rulesOfEngagement: [
      'Write backend Express routers in modular, type-safe TypeScript.',
      'Enforce parameterized SQL commands using standard database queries to prevent injections.',
      'Return consistent structured JSON standard responses along with appropriate HTTP status codes.'
    ],
    topology: {
      description: 'A secure backend REST server linked with an encapsulated relational database to manage full CRUD resources.',
      nodes: [
        { name: 'REST_Runner', ip: '127.0.0.1:3000', role: 'Express TypeScript web server hosting CRUD endpoints' },
        { name: 'Blog_DB', ip: 'PostgreSQL/SQLite', role: 'Encapsulating transactional tables for users, articles, and reviews' },
        { name: 'API_Client', ip: 'Postman/cURL', role: 'Testing headers, authorization values, and HTTP payloads' }
      ]
    },
    milestones: [
      { id: 'm-fsb-1', title: 'Construct DB Table Layouts', description: 'Declare schemas with autoincrement keys, foreign relational locks, and standard timezone timestamps.' },
      { id: 'm-fsb-2', title: 'Build Express Router Handlers', description: 'Implement GET /posts, POST /posts, PUT /posts/:id, and DELETE /posts/:id endpoints.' },
      { id: 'm-fsb-3', title: 'Program Centralized Error Middleware', description: 'Design custom middleware capturing routing anomalies and parsing structured JSON errors.' }
    ],
    verificationChecks: [
      { id: 'c-fsb-1', description: 'Confirm database triggers successfully throw a 404 response if the requested record ID does not exist.', hint: 'Test requesting invalid route parameters with a REST client.' },
      { id: 'c-fsb-2', description: 'Audit inputs to ensure SQL injection scripts are safely parameterized by the relational library.', hint: 'Never concatenate user variables directly into raw query strings.' }
    ],
    expectedFlag: 'CTF{EXPRESS_SQL_CRUD_API_ROBUST}'
  },
  {
    id: 'lab-fs-secure-chat',
    moduleId: 'mod-fs-205',
    title: 'JWT Secure Communication API Project',
    difficulty: 'Advanced',
    estimatedTime: 160,
    xpReward: 750,
    rulesOfEngagement: [
      'Establish state audits relying on JSON Web Tokens (JWT) for secure authentication layers.',
      'Embed authorization header requirements inside secured resource routes.',
      'Enforce password cryptographic hashing utilizing high-grade blowfish algorithms (bcrypt).'
    ],
    topology: {
      description: 'A secure API application verifying tokens before serving private details or message histories.',
      nodes: [
        { name: 'OAuth_Auth_Service', ip: '10.9.0.5', role: 'Verifies incoming user login and issues signed JWT tokens' },
        { name: 'Message_Server', ip: '10.9.0.10', role: 'Secures private chat channels, auditing token payloads' },
        { name: 'Redis_Token_Blacklist', ip: '10.9.0.25', role: 'Caches revoked auth tokens to block access instantly on logout' }
      ]
    },
    milestones: [
      { id: 'm-fss-1', title: 'Code Cryptographic Logins', description: 'Establish /api/register and /api/login endpoints hashing passwords with salt metrics.' },
      { id: 'm-fss-2', title: 'Implement Auth Guard Middleware', description: 'Create a reusable middleware wrapper that extracts, parses, and validates signed JWT string parameters.' },
      { id: 'm-fss-3', title: 'Build Session Revocation Engine', description: 'Implement instant token invalidation, recording logout timestamps inside in-memory stores.' }
    ],
    verificationChecks: [
      { id: 'c-fss-1', description: 'Check that calling secured routes without a Bearer authentication token responds with a 401 Unauthorized code.', hint: 'Send a request without the Authorization header.' },
      { id: 'c-fss-2', description: 'Check that direct modifications to the JWT signature content instantly blocks access.', hint: 'Verify that any modified token returns a JsonWebTokenError.' }
    ],
    expectedFlag: 'CTF{JWT_AUTHENTICATION_AUTHENTICITY_SHIELD}'
  }
];
