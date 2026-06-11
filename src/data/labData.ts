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
  }
];
