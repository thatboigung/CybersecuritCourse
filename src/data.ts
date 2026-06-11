import { RoadmapArea, Module, Lesson, Quiz, Exam, QuizQuestion } from './types';

// Define our 7 Group-based Roadmap Areas
export const ROADMAP_AREAS: RoadmapArea[] = [
  {
    id: 'group-1',
    name: 'Fundamental IT & OS',
    description: 'Master computer hardware components, connectivity interfaces, Windows & Linux setups, absolute/relative permissions, and host hypervisors.',
    icon: 'Monitor',
    color: 'blue'
  },
  {
    id: 'group-2',
    name: 'Networking & Infrastructure',
    description: 'Understand the standard 7-layer OSI model, IP CIDR subnetting schemes, client DHCP/DNS, routers/switches, and secure encrypted communications.',
    icon: 'Network',
    color: 'indigo'
  },
  {
    id: 'group-3',
    name: 'Security & Hacking Concepts',
    description: 'Explore the CIA Triad confidentiality, single sign-on authentication, team paradigms, and analytical threat-tracking frameworks.',
    icon: 'ShieldCheck',
    color: 'amber'
  },
  {
    id: 'group-4',
    name: 'Cryptography & Attack Matrix',
    description: 'Deep dive into hashing salts, symmetric block ciphers, OWASP vulnerabilities, privilege escalation, social engineering, and network-based exploits.',
    icon: 'Key',
    color: 'rose'
  },
  {
    id: 'group-5',
    name: 'Programming & Cloud Sys',
    description: 'Learn system-admin scripting languages, shared cloud responsibility matrices, capital/operational expenditure shifts, and container deployment flows.',
    icon: 'Cpu',
    color: 'violet'
  },
  {
    id: 'group-6',
    name: 'Defensive Engineering & IR',
    description: 'Enforce tactical endpoint hardening, SIEM log normalization engines, the standard 6-step incident response, and ISO/NIST certification frameworks.',
    icon: 'Activity',
    color: 'emerald'
  },
  {
    id: 'group-7',
    name: 'Practical Tooling & Certs',
    description: 'Operate active command-line network diagnostics, forensics PCAP parsers, OSINT intelligence, and map your industry certification career roadmap.',
    icon: 'Terminal',
    color: 'cyan'
  }
];

// Helper to make quiz questions
const createQuestion = (id: string, text: string, options: string[], correctAnswerIndex: number, explanation: string): QuizQuestion => ({
  id, text, options, correctAnswerIndex, explanation
});

export const MODULES: Module[] = [
  // GROUP 1: Fundamental IT Skills & Operating Systems
  {
    id: 'mod-group1',
    areaId: 'group-1',
    title: 'Hardware Components, Platform Setup & Virtualization',
    description: 'Master hardware specifications, connection types, OS independent troubleshooting, Windows/Linux platform admin, CLI CRUD commands, permissions, and hypervisors (Proxmox/ESXi/VirtualBox).',
    lessons: [
      {
         id: 'les-it-hardware',
         moduleId: 'mod-group1',
         title: 'Computer Hardware Components & Workspace Troubleshooting',
         duration: 25,
         youtubeVideoId: '2eLe7uz-7CM',
         content: `### Computer Hardware Architecture and Diagnostic Methods

To build any strong cybersecurity workflow, understanding the physical architecture of computer systems is an absolute prerequisite. This includes motherboard layouts, system buses, CPU cycles, memory boundaries, and standard connection systems.

#### 1. Internal Hardware Components:
* **CPU (Central Processing Unit)**: The primary execution engine of the computer. Modern processors support hardware-assisted virtualization extensions (**Intel VT-x** or **AMD-V**). Enabling these flags in the BIOS/UEFI is a strict requirement for nesting hypervisors.
* **RAM (Random Access Memory)**: Volatile workspace storage. In security environments, active execution states are loaded here. Memory is highly vulnerable to dumping attacks (like cold-boot attacks), and securing it requires techniques like memory scrambling or DRAM scrambling.
* **Storage Disks (SSD, HDD)**: Non-volatile data blocks. These are parsed using specialized file systems (NTFS, FAT32 for Windows, ext4/XFS for Linux) and virtual containers.
* **Motherboard & System Buses**: The connecting highway (such as PCIe lanes, SATA channels, or direct memory buses) routing data packages. 

#### 2. Connection Types and Interfaces:
* **USB-C / USB 3.0**: High-speed interface standards capable of dynamic charging, peripheral connections, and dual-lane bus routing.
* **SATA vs. NVMe M.2**: Internal data storage communication protocols. NVMe leverages PCIe buses directly to provide super-fast data reads, while SATA runs via slower retro legacy configurations.
* **DisplayPort / HDMI**: Professional digital AV cables capable of high-bandwidth video output projection.

#### 3. OS-Independent Troubleshooting Methodology:
When a system experiences a failure, a structured, platform-agnostic triage process is used:
1. **Identify the Problem & Gather Symptoms**: Query logs, gather user descriptions, and inspect system states.
2. **Isolate Logical Boundaries & Formulate a split-half hypothesis**: Formulate a split-half hypothesis (e.g., Is the issue with Hardware or Software? Input or Output?).
3. **Test Theory**: Conduct targeted tests (e.g., booting off a recovery USB drive to isolate primary disk corruption).
4. **Deploy Root Correction**: Replace failing component, apply patches, and verify operational status under load.
5. **Document Outcomes**: Compile local logs inside your playbook to optimize future response times.

***
#### 4. Standard Application Productivity Suites:
Securing modern enterprise environments requires auditing workspace applications:
* **Microsoft Office Suite (Microsoft 365 Core)**: Standard desktop automation tool including Word, Excel, PowerPoint, and Outlook. Relies heavily on local registry caching, macro execution boundaries, and mail server rules.
* **Google Workspace (G Suite Core)**: Multi-tenant cloud application suite including Google Docs, Sheets, and Drive. Operates through federated single sign-on (SSO), browser cookie permissions, and fine-grained cloud storage sharing policies.
* **Apple iCloud**: Connected Apple environment synchronization service. Utilizes device keys, recovery code schemes, and continuous file streaming mechanisms.

---
### 🎥 Curated Lesson Video Resources

Improve your understanding with these professional tutorials:
* **[CPU Cores Explained](https://www.youtube.com/watch?v=2eLe7uz-7CM)** — Deep dive into hardware cores and hyperthreading.
* **[Professor Messer CompTIA A+ Core 1 Playlist](https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv)** — Essential computer hardware and troubleshooting.
* **[Google IT Support Certificate Overview](https://www.youtube.com/watch?v=Dxcc6ycZ73M)** — Comprehensive workspace IT triage principles.
* **[IT Fundamentals Full Course](https://www.youtube.com/watch?v=AwLnur5Yt9o)** — General technical building blocks.
* **[Microsoft Office Full Tutorial](https://www.youtube.com/watch?v=Vl0H-qTclOg)** — Suite setup and deployment.
* **[Word Course](https://www.youtube.com/watch?v=QJv4i47b-JA)** / **[Excel Course](https://www.youtube.com/watch?v=Vl0H-qTclOg)** / **[PowerPoint Course](https://www.youtube.com/watch?v=XF34-Wu6qWU)** — Workplace application master classes.
* **[Google Workspace Complete Guide](https://www.youtube.com/watch?v=9eV0R5KVjVs)** — Dynamic administration of cloud suites.
* **[iCloud Infrastructure Tutorial](https://www.youtube.com/watch?v=8zTQ4Tz8v9g)** — Multi-device cloud storage patterns.
`,
         quiz: {
           id: 'q-it-hardware',
           title: 'Hardware Components & Diagnostics Quiz',
           questions: [
             createQuestion(
               'qh-1',
               'Which bios feature must you explicitly enable at the motherboard firmware layer to host Type-1 bare-metal hypervisors?',
               ['Data Execution Prevention (DEP)', 'Intel VT-x / AMD-V Virtualization extension', 'Secure Boot Integrity check', 'SATA AHCI interface controller mode'],
               1,
               'Hosting standard hypervisor nodes requires hardware-assisted CPU virtualization parameters (Intel VT-x or AMD-V) to be toggled on in BIOS/UEFI.'
             ),
             createQuestion(
               'qh-2',
               'Which represents the first logical step during a structured system-level troubleshooting flow?',
               ['Replace the central processing unit', 'Formulate an actionable hypothesis and test theories', 'Identify the problem by gathering active symptoms and system state logs', 'Write system log events onto standard recovery drives'],
               2,
               'A robust troubleshooting lifecycle always begins by identifying the active symptoms and establishing a clear problem boundaries checklist.'
             ),
             createQuestion(
               'qh-3',
               'Which storage interface is specifically designed to bypass legacy driver overhead and communicate directly over PCIe lanes to provide massive throughput?',
               ['SATA III SSD', 'iSCSI Storage Unit', 'NVMe M.2 SSD', 'SAS Enterprise Grid'],
               2,
               'NVMe (Non-Volatile Memory Express) maps storage commands directly over high-speed PCIe system lanes, significantly outperforming legacy SATA configurations.'
             )
           ]
         }
      },
      {
         id: 'les-host-platforms',
         moduleId: 'mod-group1',
         title: 'Windows & Linux Platform Administrations',
         duration: 25,
         youtubeVideoId: 'dvA9gh5dCwU',
         content: `### Operating Systems Architecture and Configuration

Understanding operating system layers is key to auditing access privileges, tracking background processes, and deploying system updates.

#### 1. Target Core Host Platforms:
Cybersecurity environments involve two prominent operating system architectures:
* **Windows Family**: Structured on a unified central system config registry, Active Directory domains GPO files, and Event logs framework. Operates via proprietary licensing and close-source system binaries.
* **Linux Family**: Structured around open-source, modular kernels, configurations written in flat text configurations in the \`/etc/\` directory tree, and standardized initialization routines managed via \`systemd\`.

#### 2. Kernel Architectures and Distribution Models:
* **Windows Kernel**: Monolithic design, using a system ring boundary system (Ring 0 for Kernel drivers, Ring 3 for User space software).
* **Linux distributions**: Packaged variants combining the shared Linux Kernel with specialized utilities, desktop interfaces, and packages (e.g., Debian/Ubuntu, CentOS/RedHat, Kali Linux, Arch Linux).

#### 3. Command Navigation Systems:
* **GUI (Graphical User Interface)**: Window-based control systems providing easy navigation but lacking automation efficiency.
* **CLI (Command Line Interface)**: Native shell terminals (Bash, Zsh for Linux; Command Prompt (cmd.exe) and PowerShell for Windows). Shell access allows for faster configuration, troubleshooting, and forensics analysis.

#### 4. Software Installation & Binary Compilations:
* **Windows**: Runs through centralized \`.msi\` installers, executable wrappers, or dynamic packages configured with Microsoft Store.
* **Linux**: Managed via Package Managers (\`apt\` on Debian/Ubuntu, \`yum\`/\`dnf\` on RHEL/Fedora). Packages download cryptographically signed pre-compiled packages.
* **Compiling from Source Code**: When custom binaries or bleeding-edge packages are needed, you compile them directly using compiler toolchains like \`make\` and \`gcc\`:
  1. \`./configure\` — inspects physical environment variables and verifies dependencies.
  2. \`make\` — compiles raw source code files into target binary assemblies.
  3. \`sudo make install\` — places the finished binaries into appropriate system lanes (e.g., \`/usr/local/bin\`).

---
### 🎥 Curated Operating System Video Resources

Improve your system administration skills with these tutorials:
* **[Linux Full Course for Beginners](https://www.youtube.com/watch?v=dvA9gh5dCwU)** — Clear master class on Linux OS setup, layouts, and navigation.
* **[Windows 11 Full Administration Course](https://www.youtube.com/watch?v=Vw6P-RP5M5Y)** — In-depth guide to setting up and configuring Windows.
* **[Windows Admin for Beginners](https://www.youtube.com/watch?v=4a7sq4l4M5I)** — Group policies, users configurations, and system registries.
* **[Linux System Administration Tutorials](https://www.youtube.com/watch?v=wBp0Rb-ZJak)** — Server administration patterns.
`,
         quiz: {
           id: 'q-os-platforms',
           title: 'Windows & Linux Architecture Quiz',
           questions: [
             createQuestion(
               'qo-p1',
               'Which Linux structure evaluates system dependency prerequisites and configures build parameters before compiling binaries from source code?',
               ['The make command', 'The ./configure script', 'The apt package manager', 'The make install directive'],
               1,
               'The "./configure" step is run first when compiling from source, evaluating the system setup and generating appropriate Makefiles for execution.'
             ),
             createQuestion(
               'qo-p2',
               'Where are system-wide configuration files primarily stored on most standard Linux distributions?',
               ['/var/sys', '/usr/bin', '/etc', '/opt'],
               2,
               'The "/etc" directory is the central location for static, flat-text system configuration files on Linux environments.'
             ),
             createQuestion(
               'qo-p3',
               'Which level of the processor hardware protection ring architecture is executed strictly by the core runtime Operating System Kernel?',
               ['Ring 3', 'Ring 1', 'Ring 0', 'Ring 2'],
               2,
               'Ring 0 possesses absolute execution privileges and runs core Kernel instructions. Ring 3 is hyper-restricted, executing standard user software.'
             )
          ]
         }
      },
      {
         id: 'les-os-cli-crud',
         moduleId: 'mod-group1',
         title: 'Command Line Interfaces & CRUD File Operations',
         duration: 25,
         youtubeVideoId: 'ZtqBQ68cfJc',
         content: `### Mastering the Command Line Interface (CLI)

Navigating systems without a desktop interface is a core security skill. You must be able to perform standard CRUD (Create, Read, Update, Delete) file operations using native CLI commands.

#### 1. Navigation Shell Operations:
* **Current Working Directory**: Tracked via \`pwd\` (Linux) or \`cd\`/\`Get-Location\` (PowerShell).
* **Relative vs Absolute Paths**: Absolute paths map directories starting from the system root directory (e.g., \`/etc/passwd\` or \`C:\\Windows\\System32\`), while relative paths define target nodes starting from your current working directory (e.g., \`../logs/auth.log\`).

#### 2. Native File CRUD Reference Table:

| Objective | Linux Bash Terminal | Windows CMD | Windows PowerShell |
| :--- | :--- | :--- | :--- |
| **Locate Current Path** | \`pwd\` | \`echo %cd%\` | \`pwd\` or \`Get-Location\` |
| **List Directory Contents** | \`ls -la\` | \`dir\` | \`Get-ChildItem\` or \`ls\` |
| **Create Directories** | \`mkdir testdir\` | \`mkdir testdir\` | \`New-Item -ItemType Directory testdir\` |
| **Create Empty Files** | \`touch file.txt\` | \`type nul > file.txt\` | \`New-Item -ItemType File file.txt\` |
| **Read Entire File Content** | \`cat file.txt\` | \`type file.txt\` | \`Get-Content file.txt\` |
| **Paging Large Log Files** | \`less debug.log\` | \`more debug.log\` | \`Get-Content debug.log | Out-Host -Paging\` |
| **Update File / Append content** | \`echo "add" >> file.txt\` | \`echo add >> file.txt\` | \`Add-Content file.txt "add"\` |
| **Erase Files** | \`rm file.txt\` | \`del file.txt\` | \`Remove-Item file.txt\` |
| **Erase Folders Recursively** | \`rm -rf testdir\` | \`rd /s /q testdir\` | \`Remove-Item -Recurse -Force testdir\` |

#### 3. Redirection Symbols & Piping Processes:
* **Pipe Operator (\`|\`)**: Feeds the text stream output of one command script as direct input to a secondary parsing utility.
* **Output Redirect (\`>\`)**: Overwrites the target file contents with new criteria.
* **Output Append (\`>>\`)**: Appends the text stream onto the end of an existing file.

---
### 🎥 Curated CLI & Shell Command Video Resources

Quickly familiarize yourself with terminal interfaces using these videos:
* **[The 50 Most Popular Linux Commands](https://www.youtube.com/watch?v=ZtqBQ68cfJc)** — Command line master class on CRUD operations, navigation, and searching.
* **[Windows Command Line Prompt Complete Guide](https://www.youtube.com/watch?v=MBBWVgE0ewk)** — Navigating and managing cmd.exe windows files.
* **[PowerShell Full Course for Beginners](https://www.youtube.com/watch?v=UVUd9_k9C6A)** — Building robust administrative pipelines with PowerShell cmdlet scripts.
`,
         quiz: {
           id: 'q-cli-crud',
           title: 'Command Line Interfaces & CRUD File Operations Quiz',
           questions: [
             createQuestion(
               'qo-c1',
               'Which command flag forces the recursive erasure of non-empty directory scopes on Linux Bash environments?',
               ['-la', '-rf', '-dir', '-append'],
               1,
               '"rm -rf" issues a force statement to recursively erase the directory and all of its nested contents.'
             ),
             createQuestion(
               'qo-c2',
               'What is the fundamental difference between the redirection operators ">" and ">>"?',
               ['> appends data, whereas >> is used for pipeline operations', '>> appends the text stream onto the end of a file, while > completely overwrites existing contents', '> writes logs to the main terminal console exclusively', '>> runs commands across isolated container runtimes'],
               1,
               'The double-arrow (">>") appends streams to the end of a file without destroying current file rows, while is standard single-arrow (">") replaces the file contents completely.'
             ),
             createQuestion(
               'qo-c3',
               'Which PowerShell cmdlet serves as the direct equivalent to the Linux "cat" file reading command?',
               ['type-file', 'Get-Content', 'Read-Item', 'Set-Content'],
               1,
               'The PowerShell cmdlet "Get-Content" is the standard mechanism to query and output unencrypted text strings from local files.'
             )
           ]
         }
      },
      {
         id: 'les-permissions-troubleshooting',
         moduleId: 'mod-group1',
         title: 'File Permissions, Access Control Lists (ACLs) & System Errors Logging',
         duration: 25,
         youtubeVideoId: 'iwolPf6kN-k',
         content: `### Permissions Auditing and System Troubleshooting

Enforcing boundaries and reading logs is critical for security monitoring and incident investigation.

#### 1. Linux File Permissions (rwx):
Linux manages file system security through explicit permission flags:
* **Permission Fields**: Read (**r = 4**), Write (**w = 2**), Execute (**x = 1**).
* **Target Segments**: Owner, Group, and Others.
* **Permissions Scoring**:
  * *Octal 7* (r+w+x = 4+2+1): Full access rights.
  * *Octal 5* (r+x = 4+1): Read and execute access (common for shared directories and scripts).
  * *Octal 0*: No access permissions.
  * *Example*: \`chmod 750\` authorizes the Owner full control (7), the Group read/execute (5), and denies Others (0).

#### 2. Changing Ownership & Access Controls:
* **chmod**: Updates permission parameters (absolute numerical style e.g., \`chmod 755\`, or relative style e.g., \`chmod +x\`).
* **chown**: Modifies user or group ownership (e.g., \`chown admin:secgroup secure_file.sql\`).
* **ACLs (Access Control Lists)**: Native tools (like \`setfacl\` and \`getfacl\` on Linux) that define custom access rights for specific users outside standard owner/group boundaries.

#### 3. Troubleshooting using Operating System Logs:
When tracking exploits, diagnostics rely on reading system-wide events and process tables:
* **Process Management**:
  * *Linux*: \`ps aux\` (lists active processes), \`top\` or \`htop\` (real-time resource monitoring), and \`kill -9 <PID>\` (terminates a rogue process).
  * *Windows*: Task Manager UI, \`tasklist\` command, or \`Get-Process\` PowerShell command.
* **Logs Auditing Directories**:
  * *Linux System Logs*: Syslog data is gathered inside \`/var/log/\`. Inspect \`/var/log/auth.log\` (security authentication failures) and \`/var/log/syslog\` (general system operations).
  * *dmesg*: Queries system boot logs and device drivers stored inside the kernel ring buffer.
  * *Windows Event Viewer*: Built-in utility (\`eventvwr.msc\`) grouping security events, boot errors, database crashes, and administrative tasks.

---
### 🎥 Curated Permissions & Logs Video Resources

Learn how to audit permissions and troubleshoot issues using these tutorials:
* **[Linux File Permissions Explained](https://www.youtube.com/watch?v=iwolPf6kN-k)** — Comprehensive guide to owner, group, and others numeric permission flags.
* **[Chmod, Chown, and ACLs Mastery](https://www.youtube.com/watch?v=6YqQH6Q0mVQ)** — Hands-on command examples explaining system permissions.
* **[Linux Troubleshooting Full Course](https://www.youtube.com/watch?v=6WatcfENsOU)** — Triage and forensic log analysis techniques.
* **[Linux System Logs & Dmesg Command](https://www.youtube.com/watch?v=lM3_CXbeXgA)** — Navigating the kernel ring buffer and investigating event indicators.
`,
         quiz: {
           id: 'q-permissions-logs',
           title: 'Permissions & System Logs Quiz',
           questions: [
             createQuestion(
               'qo-l1',
               'If a security analyst executes "chmod 640 target_report.csv" on a Linux node, what access rights has the Group received?',
               ['Read access only', 'Read and execute access', 'Read and write access exclusively', 'No permissions whatsoever'],
               0,
               'Octal 6 means Owner gets Read+Write (4+2), 4 means Group gets Read (4), and 0 means Others get No Access. Therefore, the Group only has Read access.'
             ),
             createQuestion(
               'qo-l2',
               'Which Linux directory is the standard location for files containing authentication logs, boot diagnostic details, and network services logs?',
               ['/usr/log', '/var/log', '/sys/log', '/etc/log'],
               1,
               'The "/var/log" directory contains system-wide logs, process status values, and service events logs.'
             ),
             createQuestion(
               'qo-l3',
               'A security operations team wants to inspect SSH authentication attempts on a Linux system. Which log file contains these records?',
               ['/var/log/auth.log (or /var/log/secure)', '/var/log/dmesg', '/var/log/syslog', '/var/log/admin.log'],
               0,
               '"/var/log/auth.log" (on Debian-based systems) and "/var/log/secure" (on RedHat-based systems) track authentication attempts, SSH logins, and sudo executions.'
             )
           ]
         }
      },
      {
         id: 'les-virtualization-tech',
         moduleId: 'mod-group1',
         title: 'Virtualization Fundamentals & Lab Setup Structures',
         duration: 30,
         youtubeVideoId: 'FZR0rG3HKIk',
         content: `### Basics of Hypervisors, Operating Systems, and Virtualization

Virtualization abstracts physical hardware, allowing multiple isolated virtual operating systems to run concurrently on a single physical host.

#### 1. Abstraction Layers:
* **Hypervisor**: The software layer that manages hardware resources and distributes them to virtual nodes.
  * **Type 1 (Bare-Metal)**: Installs directly onto the physical server hardware. This has minimal resource overhead and is the standard for corporate data centers and cloud hosting.
  * **Type 2 (Hosted)**: Installs as an application layer on top of an existing base operating system (HostOS). This is ideal for personal testing and developer environments.
* **HostOS**: The primary operating system that interacts directly with physical hardware in Type-2 architectures.
* **GuestOS**: The isolated operating system running inside a virtual machine instance.
* **Virtual Machine (VM)**: A software-emulated system containing virtual CPUs, RAM, and disk storage.

#### 2. Virtualization Technologies:
To build a functional cybersecurity testing sandbox, you must understand common platform managers:
* **VirtualBox**: A widely used, free, Type-2 open-source hypervisor.
* **VMware Workstation**: A commercial Type-2 hypervisor with robust networking capabilities.
* **VMware ESXi**: A dedicated, bare-metal Type-1 hypervisor widely used in corporate environments.
* **Proxmox Virtual Environment (VE)**: An open-source bare-metal Type-1 hypervisor. It features software-defined networking, container clustering, and VM management.

---
### 🎥 Curated Virtualization Video Resources

Learn about virtualization technology and how to configure labs using these guides:
* **[Virtualization Technology Explained](https://www.youtube.com/watch?v=FZR0rG3HKIk)** — Conceptual overview of hypervisors and virtualized boundaries.
* **[Virtual Machines Deep Dive](https://www.youtube.com/watch?v=yIVXjl4SwVo)** — Understanding how hardware is emulated.
* **[VirtualBox Setup & Deployment Tutorial](https://www.youtube.com/watch?v=wX75Z-4MEoM)** — Creating isolated networks inside VirtualBox.
* **[VMware Workstation Tutorial](https://www.youtube.com/watch?v=sB_5fqiysi4)** — Multi-machine lab configuration.
* **[VMware ESXi Complete Beginner Guide](https://www.youtube.com/watch?v=efP4j2kQ6R8)** — Deploying enterprise bare-metal infrastructures.
* **[Proxmox VE Full Training Course](https://www.youtube.com/watch?v=_u8qTN3cCnQ)** — Building virtual machines and SDN infrastructures.
* **[Proxmox VE for Absolute Beginners](https://www.youtube.com/watch?v=GoZaMgEgrHw)** — Installing and managing your home-lab environment.
`,
         quiz: {
           id: 'q-virtualization',
           title: 'Virtualization Systems Quiz',
           questions: [
             createQuestion(
               'qo-v1',
               'Which virtualization software is categorized as a high-performance bare-metal Type-1 Hypervisor directly managing hardware?',
               ['VirtualBox', 'VMware Workstation', 'Proxmox VE', 'QEMU emulator client'],
               2,
               'Proxmox VE (and VMware ESXi) are bare-metal Type-1 hypervisors that control infrastructure directly, bypassing the hosting desktop OS environment.'
             ),
             createQuestion(
               'qo-v2',
               'Which VirtualBox network configuration attaches guests securely to an internal isolated switch that only allows communication between guest VMs and the host machine, while blocking external internet WAN access?',
               ['NAT Service Adapter', 'Bridged Network Adapter', 'Host-Only Network Adapter', 'Generic Driver Interface'],
               2,
               'The Host-Only Network framework isolates guests from outer gateway addresses while keeping inter-VM and Host-to-Guest local communications active.'
             ),
             createQuestion(
               'qo-v3',
               'In virtualized topologies, what role is played by the HostOS?',
               ['It represents the isolated sandbox guest', 'It represents the base physical operating system hosting Type-2 virtualization software', 'It serves as the cloud-native database pipeline', 'It functions as a virtual router link'],
               1,
               'The HostOS acts as the underlying hardware manager for Type-2 hosted hypervisors (like VirtualBox).'
             )
           ]
         }
      }
    ],
    exam: {
      id: 'ex-group1',
      title: 'Fundamental IT & OS Master Exam',
      moduleId: 'mod-group1',
      timeLimit: 15,
      questions: [
        createQuestion(
          'em1-1',
          'In virtualized labs, what term identifies the virtual operating instances nested and running on hardware-managed hypervisors?',
          ['The HostOS', 'The GuestOS', 'The Physical Core', 'The Bare-Metal controller'],
          1,
          'A GuestOS runs virtualized inside system chassis emulations, separated from direct physical host resource levels.'
        ),
        createQuestion(
          'em1-2',
          'Which utility command allows an admin to dynamically search, query, and filter specific strings of text inside massive Linux logs?',
          ['cat', 'grep', 'ls -la', 'chmod'],
          1,
          'The Linux command utility "grep" searches file systems and logs using regular expression patterns to isolate target criteria.'
        ),
        createQuestion(
          'em1-3',
          'A corporate auditor wants to inspect system boot failures, device driver issues, and credential validation events on Windows. Which native GUI is the primary diagnostic suite?',
          ['Device Manager', 'Event Viewer (eventvwr.msc)', 'Disk Management', 'System Configuration (msconfig)'],
          1,
          'The Windows Event Viewer (eventvwr.msc) tracks diagnostic logs under Security, System, and Application categories.'
        ),
        createQuestion(
          'em1-4',
          'Which bios settings extension must you explicitly toggle on in system systems configurations before you can deploy or run any Nested Type-1 Virtual Machine instances?',
          ['Secure Boot configurations integrity', 'Intel VT-x / AMD-V virtualization features flags', 'PATA controller operations mode', 'Trusted Cryptographic Platform modules keys (TPM)'],
          1,
          'Hardware-assisted cpu virtualization flags (Intel VT-x or AMD-V) are a mandatory requirement that must be explicitly enabled at the BIOS firmware configuration layer before hosting nested virtual segments.'
        ),
        createQuestion(
          'em1-5',
          'Which combined file command arguments correctly forces a recursive deletion on a Linux machine folder that contains nested data files?',
          ['chown -R', 'rm -rf', 'Remove-Item -Relative', 'cat >>'],
          1,
          'The command "rm -rf" forcefully removes lists (using "-f" flag) and recursively tracks folders structures (using the "-r" loop parameter) to delete non-empty locations.'
        )
      ]
    }
  },

  // GROUP 2: Networking Knowledge & Core Infrastructures
  {
    id: 'mod-group2',
    areaId: 'group-2',
    title: 'Networking Architecture, Address Mapping & Host Protocols',
    description: 'Master network star/mesh topologies, LAN/WAN differences, deep OSI model transitions (Layers 1 to 7), CIDR IP subnetting networks, DHCP, and secure SSL/TLS communication states.',
    lessons: [
      {
        id: 'les-net-basics',
        moduleId: 'mod-group2',
        title: 'Network Topologies, Scales, & Wireless Interfaces',
        duration: 25,
        youtubeVideoId: 'qiQR5rTSshw',
        content: `### 🌐 Network Topologies, Architectures, and Storage Basics

To master computer networking security, you must understand the physical and logical arrangements of systems, how networks span physical distances, and how enterprise network storage repositories are hosted.

---

#### 1. Network Topologies: Structural Node Arrangements
A topology is the layout configuration describing how network interfaces and terminal nodes link and route electrical or optical signals:
* **Star Topology**: Every workstation is wired directly to a central node (an Ethernet Switch or Hub). Resilient because a single broken copper run only isolates that specific endpoint. However, the central switch represents a **Single Point of Failure (SPOF)**.
* **Mesh Topology**: Point-to-point redundant connections where system nodes are linked to multiple neighbors. A "Full Mesh" guarantees absolute redundancy and paths, making it the standard for mission-critical WAN links and high-availability database clusters.
* **Ring Topology**: Legacy configuration where systems are wired in a closed logical loop; a single token rotates to delegate packet transmission rights. A single line fault can lock down execution.
* **Bus Topology**: A classic shared coaxial trunk line where terminal taps inject signals. Highly vulnerable to collisions, reflection, and physical line cuts that disconnect the entire network segment.

---

#### 2. Network Architectures and Boundary Scales
Networks are categorized by size, ownership, and distance:
* **LAN (Local Area Network)**: Private, high-bandwidth networks covering localized scopes (e.g., an office suite, university building, or home).
* **WAN (Wide Area Network)**: Links separated geographical LAN zones across municipalities, states, or global horizons. The Internet is the world\\'s largest public WAN.
* **WLAN (Wireless Local Area Network)**: Extends standard local network topologies utilizing IEEE 802.11 RF signal broadcasts.
* **MAN (Metropolitan Area Network)**: Bridges networks across a city municipal zone or dedicated metropolitan campus region.

---

#### 3. Short-Range Localized Communication Spectrums
A cybersecurity specialist must audit short-range wireless interfaces to prevent unauthorized war-driving or wireless tapping:
* **NFC (Near Field Communication)**: Extremely localized, low-frequency security connection (operates in range < 4cm) designed for secure contactless processing (POS registers, transit passes, access badges).
* **Bluetooth**: Short-range local radio frequency hopping spectrum (approximately 10m scale) targeting peripheral sharing. Vulnerable to Bluejacking (unsolicited messaging) and Bluesnarfing (data theft).
* **Wi-Fi**: Ubiquitous local area wireless connectivity standard operating on 2.4GHz, 5GHz, and 6GHz channels to bridge hosts to high-speed LAN controllers.
* **Infrared (IR)**: Direct line-of-sight optical path communications. Cannot bypass physical barriers, making it naturally immune to remote structural eavesdropping.

---

#### 4. Enterprise Storage Architectures: NAS vs. SAN
Understanding remote data architectures guides disk forensic collection:
* **NAS (Network Attached Storage)**: A single dedicated file-level appliance connected to the IP network. Shares storage dynamically over standard protocols like **NFS** (Unix) or **SMB/CIFS** (Windows). Easy to configure but restricted by standard LAN traffic congestion.
* **SAN (Storage Area Network)**: A high-performance, low-latency, block-level network of disk arrays. Connects storage hosts over a dedicated structural fiber channel fabric or iSCSI. The host OS mounts the SAN array directly as if it were a local physical hard drive.

---
### 🎥 Core Tutorial Video Links
* **[CompTIA Network+ Full Course] (https://www.youtube.com/watch?v=qiQR5rTSshw)**
* **[Computer Networking Course] (https://www.youtube.com/watch?v=qiQR5rTSshw)**
* **[Network Topologies Explained] (https://www.youtube.com/watch?v=VwN91x5i25g)**
* **[Types of Networks Explained] (https://www.youtube.com/watch?v=QKfk7YFILws)**
* **[Wireless Technologies Explained] (https://www.youtube.com/watch?v=J4T0w2D7f7A)**
* **[NAS vs SAN] (https://www.youtube.com/watch?v=ZwhT-KI16jo)**
`,
        quiz: {
          id: 'q-net-basics',
          title: 'Topologies, Scales, & Wireless Quiz',
          questions: [
            createQuestion(
              'qn-top-1',
              'Which network topology features absolute fault tolerance by providing redundant, direct point-to-point links between every single node?',
              ['Bus Topology', 'Star Topology', 'Ring Topology', 'Mesh Topology'],
              3,
              'A Mesh topology features redundant, direct pathways between nodes, ensuring maximum uptime and data survivability.'
            ),
            createQuestion(
              'qn-top-2',
              'An administrator needs to bridge network connectivity across five office buildings situated inside a single Parisian municipal metro sector. Which network category best defines this scale?',
              ['LAN (Local Area Network)', 'WAN (Wide Area Network)', 'MAN (Metropolitan Area Network)', 'PAN (Personal Area Network)'],
              2,
              'A Metropolitan Area Network (MAN) bridges connected systems across municipal distances larger than a local site but smaller than an inter-city WAN link.'
            ),
            createQuestion(
              'qn-top-3',
              'What is the primary operational distance limit of Near Field Communication (NFC) spectrum configurations to secure card-present payments?',
              ['Under 4 Centimeters', 'Under 10 Meters', 'Up to 100 Meters', 'Line of Sight Optical Path'],
              0,
              'NFC operates on highly localized electromagnetic fields with a scale under 4 centimeters, making structural tapping extremely difficult.'
            ),
            createQuestion(
              'qn-top-4',
              'Which storage technology provides dedicated, high-speed block-level access to consolidated arrays of disks over a fiber channel routing fabric, appearing as local raw hard disks?',
              ['SMB Network Share Appliance (NAS)', 'Storage Area Network (SAN)', 'Network Attached Storage (NAS)', 'Redundant Array of Independent Disks (RAID)'],
              1,
              'SAN (Storage Area Network) provides high-speed block-level access to consolidated storage arrays, whereas NAS provides file-level access over standard SMB/NFS.'
            )
          ]
        }
      },
      {
        id: 'les-osi-model',
        moduleId: 'mod-group2',
        title: '7-Layer OSI Reference Model & Network Hardware',
        duration: 25,
        youtubeVideoId: 'vv4y_uOneC0',
        content: `### 🏛️ The OSI Reference Model & Core Network Hardware

To diagnose, secure, or exploit networked systems, you must map all network communication flows directly to the Open Systems Interconnection (OSI) reference model, and master the physical interfaces routing them.

---

#### 1. Mastery of the 7-Layer OSI Reference Model
The ISO/IEC 7498-1 standard divides digital systems communication into 7 distinct logical layers. Each layer handles specific payload structures and abstracts complexity:

| Layer | Name | Core Security Controls & Functions | Protocol Data Unit (PDU) | Key Protocols / Technologies |
| :--- | :--- | :--- | :--- | :--- |
| **Layer 7** | **Application** | Direct user API interface, malware payload triggers, authorization | **Raw Data / Payload** | HTTP, HTTPS, SSH, FTP, SMTP, RDP |
| **Layer 6** | **Presentation** | Format translation, character encodings, SSL/TLS decryption | **Formatted Data** | SSL, TLS, ASCII, JPEG, compression |
| **Layer 5** | **Session** | Establishes, controls, and tears down persistent connections | **Session Sockets** | L2TP, NetBIOS, RPC, Sockets |
| **Layer 4** | **Transport** | End-to-end reliability, multiplexing via host port endpoints | **Segment (TCP) / Datagram (UDP)** | TCP (Syn/Ack handshake), UDP |
| **Layer 3** | **Network** | Logical host routing, path selection, virtual IPS packet structures | **IP Packet** | IPv4, IPv6, ICMP, IPsec, Routers |
| **Layer 2** | **Data Link** | Physical frame delivery, MAC layer filtering, VLAN tagging | **Ethernet Frame** | Ethernet, ARP, VLANs, L2 Switches |
| **Layer 1** | **Physical** | Signal voltage bitstream transmissions across physical mediums | **Raw Bitstream** | Copper RJ45, Fiber Optic, Hubs, RF |

---

#### 2. Core Network Hardware Elements and Roles
To enforce physical network defenses, you must master these core perimeter node technologies:
* **Routers**: Operate at **OSI Layer 3 (Network)**. They use custom dynamic routing tables to forward logical IP packet payloads across completely separate, independent subnets.
* **Switches**: Operate primarily at **OSI Layer 2 (Data Link)**. They inspect the destination **MAC (Media Access Control)** address of frames to route data directly to the physical port hosting that device, avoiding legacy packet collision issues.
* **Hardware Firewalls**: Inspect incoming/outgoing traffic to block malicious connections. Traditional firewalls act at Layers 3 & 4 (checking IPs and Ports); Next-Generation Firewalls (NGFW) operate up to Layer 7 to analyze full payload characteristics.
* **VPN Gateways**: Enforce absolute data-in-transit confidentiality by establishing encrypted IPSec or SSL/TLS tunnels, bridging remote clients securely back into private company backplanes.

---

#### 3. Core Enterprise Network Mappings and Segmentation
* **VLAN (Virtual Local Area Network)**: Logical segmentation of physical Layer-2 switches. Isolates departmental segments (e.g., separating guest Wi-Fi from the database tier) without requiring separate physical infrastructure.
* **DMZ (Demilitarized Zone)**: A physical or logical subnetwork containing public-facing services (like web and mail servers). It acts as a secure buffer zone between untrusted external networks (the Internet) and high-value internal intranets.
* **ARP (Address Resolution Protocol)**: Maps a known Layer-3 IP address to a physical Layer-2 MAC address on local subnets. Highly vulnerable to **ARP Poisoning** because it lacks built-in authentication, allowing attackers to hijack local packet routing.

---
### 🎥 Core Tutorial Video Links
* **[OSI Model Explained] (https://www.youtube.com/watch?v=vv4y_uOneC0)**
* **[Routers vs Switches] (https://www.youtube.com/watch?v=1z0ULvg_pW8)**
* **[Firewall Explained] (https://www.youtube.com/watch?v=kDEX1HXybrU)**
* **[VLAN Explained] (https://www.youtube.com/watch?v=MmwF1oHOvmg)**
* **[DMZ Explained] (https://www.youtube.com/watch?v=3Q0cM4N3F2E)**
* **[ARP Explained] (https://www.youtube.com/watch?v=QPi5Nvxaosw)**
`,
        quiz: {
          id: 'q-osi-match',
          title: 'OSI Layers & Hardware Quiz',
          questions: [
            createQuestion(
              'qn-osi-1',
              'At which layer of the standard 7-Layer OSI model does Address Resolution Protocol (ARP) operate to map logical network IPs to hardware MAC addresses?',
              ['Layer 1 (Physical Layer)', 'Layer 2 (Data Link Layer)', 'Layer 3 (Network Layer)', 'Layer 4 (Transport Layer)'],
              1,
              'ARP maps logical Network layer (L3) IPs to hardware Data Link layer (L2) MAC addresses, operating precisely at OSI Layer 2.'
            ),
            createQuestion(
              'qn-osi-2',
              'To analyze and block connection parameters inside the actual user payload data (e.g., stopping specific custom SQL injections), a firewall must inspect traffic at which OSI Layer?',
              ['Layer 2 (Data Link Layer)', 'Layer 3 (Network Layer)', 'Layer 4 (Transport Layer)', 'Layer 7 (Application Layer)'],
              3,
              'Deep packet inspection of user data and web service parameters operates at OSI Layer 7, the Application Layer.'
            ),
            createQuestion(
              'qn-osi-3',
              'What security and routing benefits do Virtual Local Area Networks (VLANs) offer inside an enterprise network switch infrastructure?',
              ['Automatically lease dynamic logical address ranges to hosts', 'Route frames across remote geographic WAN clusters statefully', 'Partition a physical switch logically into separate broadcast domains', 'Encrypt internal network payloads asynchronously over SSL/TLS channels'],
              2,
              'VLANs segment a physical switch logically, partitioning it into separate broadcast domains for local traffic isolation.'
            ),
            createQuestion(
              'qn-osi-4',
              'An engineer is deploying public-facing web servers. Where should they position these systems to isolate them from the high-security corporate intranet?',
              ['Directly inside the physical Default Gateway core bus', 'Within a dedicated Demilitarized Zone (DMZ)', 'On the localhost loopback virtual subnet interface', 'Across a physical SAN array network trunk line'],
              1,
              'The DMZ (Demilitarized Zone) acts as a logical subnetwork buffering trusted internal infrastructures from untrusted external segments.'
            )
          ]
        }
      },
      {
        id: 'les-subnetting-routing',
        moduleId: 'mod-group2',
        title: 'IP Addressing, CIDR Schemes, & Subnetting Mechanics',
        duration: 25,
        youtubeVideoId: 'BWZ-MHIhqjM',
        content: `### 🧮 IP Subnetting, Classless Routing (CIDR), & Addressing Principles

Understanding subnet boundaries is critical for secure network design. It ensures your infrastructure has clear logical barriers and helps you identify anomalous lateral movement across systems.

---

#### 1. Public vs. Private IP Addresses: RFC 1918
Private IP addresses are reserved for internal, localized use and are **non-routable** on the public Internet. Under the **RFC 1918** guidelines, these ranges include:
* **Class A**: \`10.0.0.0\` to \`10.255.255.255\` (Subnet Mask: \`255.0.0.0\`, denoted as \`/8\`)
* **Class B**: \`172.16.0.0\` to \`172.31.255.255\` (Subnet Mask: \`255.240.0.0\`, denoted as \`/12\`)
* **Class C**: \`192.168.0.0\` to \`192.168.255.255\` (Subnet Mask: \`255.255.0.0\`, denoted as \`/16\`)

All other IPv4 addresses are public and must be leased from regional Internet registries to route traffic across the global WAN.

---

#### 2. Classless Inter-Domain Routing (CIDR) and Subnet Masks
Historically, networks were divided into rigid class structures (Class A/B/C). Today, we use **CIDR (Classless Inter-Domain Routing)** to dynamically slice network blocks using variable-length subnet masks (VLSM).
* **Subnet Mask**: A 32-bit value composed of consecutive binary \`1\`s followed by \`0\`s. The binary \`1\`s define the **Network** portion of an address, while the \`0\`s define the **Host** portion.
* **CIDR Notation**: Combines the base IP with a slash (\`/\`) followed by the count of active network bits. E.g., \`192.168.1.0/24\` represents a subnet mask of \`255.255.255.0\` (24 consecutive binary \`1\`s).

---

#### 3. Resolving Usable Host Addresses: Practical Mechanics
When configuring any IP subnet network block, you must reserve **2** IP addresses for infrastructure bookkeeping:
1. **Network Address**: The absolute baseline identifier of that subnet block (all host bits are set to binary \`0\`).
2. **Broadcast Address**: The administrative signaling destination used to send a packet to all hosts in the subnet (all host bits are set to binary \`1\`).

**How to calculate Usable Hosts**:
* Usable Hosts = \`2^H - 2\` (where \`H\` is the count of binary Host bits, i.e., \`32 - CIDR_prefix\`).
* *Example (for a \`/28\` subnet)*:
  * Host bits (\`H\`) = \`32 - 28 = 4\`.
  * Total IP addresses = \`2^4 = 16\`.
  * Usable Hosts = \`16 - 2 = 14\`.

---

#### 4. Default Gateway, Localhost, & Loopback Interfaces
* **Default Gateway**: The routing node interface (usually a local router port, e.g., \`192.168.1.1\`) on the edge of the local subnet. When an endpoint wants to send a packet to any address outside its local subnet, it forwards the frame directly to this gateway.
* **Localhost & Loopback**: A self-referential virtual computer interface. Routed to the reserved address space **\`127.0.0.1\`**, allowing systems to send and test local IP services without transmitting frames onto physical network wires.

---
### 🎥 Core Tutorial Video Links
* **[IP Addressing Full Course] (https://www.youtube.com/watch?v=5WfiTHiU4x8)**
* **[Subnetting Mastery Series] (https://www.youtube.com/watch?v=BWZ-MHIhqjM)**
* **[Subnetting Full Course] (https://www.youtube.com/watch?v=ecCuyq-Wprc)**
* **[CIDR Explained] (https://www.youtube.com/watch?v=Vbgw9_oyZnM)**
* **[Subnet Masks Explained] (https://www.youtube.com/watch?v=s_Ntt6eTn94)**
* **[Default Gateway Explained] (https://www.youtube.com/watch?v=1z0ULvg_pW8)**
`,
        quiz: {
          id: 'q-subnetting',
          title: 'Addressing & Subnetting Quiz',
          questions: [
            createQuestion(
              'qn-sub-1',
              'Which of the following IP addresses is public and routable on the WAN, and NOT reserved as a private range under RFC 1918 guidelines?',
              ['10.250.12.8', '172.24.113.41', '192.168.1.1', '203.0.113.50'],
              3,
              '203.0.113.50 is outside the RFC 1918 private scopes (10.x.x.x, 172.16-31.x.x, 192.168.x.x) and is a public routable WAN address.'
            ),
            createQuestion(
              'qn-sub-2',
              'A router interface is assigned an IP of 10.0.0.1 with a /28 subnet configuration. How many usable host IP addresses are allocatable in this private network?',
              ['30 Usable Hosts', '14 Usable Hosts', '16 Usable Hosts', '254 Usable Hosts'],
              1,
              'For a /28 block, there are 4 host bits (32 - 28 = 4). 2^4 = 16 total IPs. Subtracting the network and broadcast address leaves 14 usable hosts.'
            ),
            createQuestion(
              'qn-sub-3',
              'A local server wants to send an IP packet to a target backup cluster hosted at another branch globally. Which local component is responsible for receiving and routing this outbound trunk traffic?',
              ['Default Gateway Router interface', 'Localhost Loopback adapter (127.0.0.1)', 'Layer-2 Broadcast Address IP endpoint', 'Centrally mapped IPAM lease table'],
              0,
              'The Default Gateway is the border routing path interface designed to receive local packets bound for external global subnet locations.'
            ),
            createQuestion(
              'qn-sub-4',
              'Which standard logical IP address serves as the loopback interface on a local computer workstation to verify network services without physical wire transmission?',
              ['192.168.1.254', '10.0.0.0', '127.0.0.1', '0.0.0.0'],
              2,
              '127.0.0.1 is the universal logical loopback address mapping IP packets immediately back to the local device RAM.'
            )
          ]
        }
      },
      {
        id: 'les-protocols-services',
        moduleId: 'mod-group2',
        title: 'Infrastructure Services & Security Protocols',
        duration: 25,
        youtubeVideoId: 'mpQZVYPuDGU',
        content: `### ⚙️ Network Services, Administration, & Cryptographic Security Protocols

To secure systems, we must run core routing directory services and transition from clear-text administrative protocols to highly encrypted cryptographic layers.

---

#### 1. Core Administrative Infrastructure Services
Enterprise IP configurations rely on several critical automated services:
* **DHCP (Dynamic Host Configuration Protocol)**: Operates on UDP ports **67 & 68**. It automates IP lease assignment to connecting clients using the classic four-step **DORA** handshake:
  1. **Discover**: Client broadcasts a broadcast call seeking an active DHCP server.
  2. **Offer**: DHCP servers respond with lease parameters (IP, Subnet, DNS, Gateway).
  3. **Request**: Client requests to secure the parameters offered.
  4. **Acknowledge**: Server locks the lease parameters onto the host client MAC binding.
* **DNS (Domain Name System)**: Operates on UDP/TCP port **53**. It translates human-friendly domain names (e.g., \`google.com\`) into mechanical destination IP addresses. Security risks include **DNS Poisoning**, where attackers inject fake IP mappings into caches to redirect traffic to phishing sites.
* **NTP (Network Time Protocol)**: Operates on UDP port **123**. Crucial for log correlation and cryptographic token operations, ensuring all active network logs share accurate timestamps.
* **IPAM (IP Address Management)**: A centralized control suite used to track, audit, and manage IP address spaces, active leases, DNS records, and DHCP pool allocations.

---

#### 2. Network Protocols Breakdown: Clear-Text vs. Encrypted Security
Securing administrative interfaces is a primary defense against network eavesdropping:

* **SSH (Secure Shell) - Port 22**: A highly secure administrative CLI, replacing the archaic, unencrypted **Telnet (Port 23)**. Telnet transmits usernames, passwords, and sessions in clear text, making them easy to capture.
* **RDP (Remote Desktop Protocol) - Port 3389**: Microsoft standard remote desktop utility. Uses modern network level authentication (NLA) protocols to validate connections before loading the GUI.
* **FTP (File Transfer Protocol) - Ports 20 & 21**: Unencrypted legacy file delivery. You must transition to **SFTP (SSH File Transfer Protocol - Port 22)** or **FTPS (FTP over SSL)** to secure files.
* **HTTP (Port 80) vs. HTTPS (Port 443)**: HTTP transmits web requests in the clear. HTTPS uses standard **SSL/TLS Handshaking** to encrypt active traffic.

---

#### 3. The Cryptographic SSL/TLS Handshake Mechanics
Clients establish secure HTTPS connections with web servers through a multi-step negotiation process:
1. **Client Hello**: Client initiates the session by sending supported TLS versions, session parameters, and a suite of cryptographic options (cipher suites).
2. **Server Hello**: Server selects the highest mutual TLS standards, specifies its chosen cipher suite, and sends its public digital **Security Certificate** (signed by a trusted Certificate Authority).
3. **Key Exchange**: Client validates the server's identity certificate, generates a random pre-master secret key, and encrypts it using the server's public key. The server decrypts this pre-master key using its private key.
4. **Session Key Generation**: Both systems generate matching symmetric session keys, switch to secure encryption modes, and encrypt all subsequent traffic (preserving data confidentiality).

---

#### 4. NAT (Network Address Translation)
* **NAT**: An routing mechanism running on routers to map internal private RFC 1918 addresses to a single public internet-routable WAN address. This conserves the world\\'s limited IPv4 address pool and hides internal subnets from direct external network exposure.

---
### 🎥 Core Tutorial Video Links
* **[DNS Explained] (https://www.youtube.com/watch?v=mpQZVYPuDGU)**
* **[DHCP Explained] (https://www.youtube.com/watch?v=e6-TaH5bkjo)**
* **[NTP Explained] (https://www.youtube.com/watch?v=5wgjM7J6HfA)**
* **[SSH Explained] (https://www.youtube.com/watch?v=hQWRp-FdTpc)**
* **[SFTP Explained] (https://www.youtube.com/watch?v=K0wM5Vh1xjQ)**
* **[HTTP vs HTTPS] (https://www.youtube.com/watch?v=hExRDVZHhig)**
* **[SSL/TLS Handshake Explained] (https://www.youtube.com/watch?v=AlE5X1NlHgg)**
`,
        quiz: {
          id: 'q-protocols-services',
          title: 'Infrastructure & Protocols Quiz',
          questions: [
            createQuestion(
              'qn-pro-1',
              'What represents the correct logical sequence of administrative steps taken during a client DHCP IP lease configuration?',
              ['Offer, Discover, Acknowledge, Request', 'Discover, Offer, Request, Acknowledge', 'Request, Offer, Discover, Acknowledge', 'Discover, Request, Offer, Acknowledge'],
              1,
              'DHCP leases addresses using the DORA handshake: Discover, Offer, Request, and Acknowledge.'
            ),
            createQuestion(
              'qn-pro-2',
              'Which system protocol transfers administrative commands and files in clear-text, and should be replaced with SSH/SFTP respectively?',
              ['Telnet & FTP', 'HTTPS & RDP', 'NTP & DHCP', 'IPAM & FTPS'],
              0,
              'Telnet and FTP transfer passwords and system data in absolute plaintext (clear-text) which can be easily sniffed and captured.'
            ),
            createQuestion(
              'qn-pro-3',
              'What is the primary operational purpose of Network Address Translation (NAT) running on an edge router?',
              ['Securely authenticate admin administrators over RDP sessions', 'Map private RFC 1918 addresses to a single public internet IP', 'Log all timestamped events onto an enterprise IPAM server', 'Verify the digital signatures of incoming certificate authorities'],
              1,
              'NAT translates multiple internal private IPv4 addresses to a single public IP to route traffic on the WAN and hide internal networks.'
            ),
            createQuestion(
              'qn-pro-4',
              'During the TLS handshake process, how is the symmetric session key established between client and server once the certificate is verified?',
              ['The client sends its own raw private key in the initial Client Hello', 'The server publishes its private session key over UDP port 53', 'The client encrypts a pre-master secret key with the server\'s public key', 'The CA third-party directory services push matches to both systems dynamically'],
              2,
              'During standard asymmetric key exchange, the pre-master key is generated by the client, encrypted under the server\'s public key, and transmitted safely.'
            )
          ]
        }
      }
    ],
    exam: {
      id: 'ex-network-security',
      title: 'Networking & Infrastructure Master Exam',
      moduleId: 'mod-group2',
      timeLimit: 15,
      questions: [
        createQuestion(
          'em2-1',
          'Which OSI layer abstracts symmetric session keys, formatting characters (like ASCII/UTF-8), and cryptographically sets up SSL/TLS handshakes?',
          ['Layer 4 (Transport Layer)', 'Layer 5 (Session Layer)', 'Layer 6 (Presentation Layer)', 'Layer 7 (Application Layer)'],
          2,
          'Symmetric encryption, character code translations, and formatting operate precisely at Layer 6, the Presentation Layer.'
        ),
        createQuestion(
          'em2-2',
          'Under RFC 1918 private allocations, what is the valid range of IP addresses reserved under the Class B private address space?',
          ['10.0.0.0 - 10.255.255.255', '172.16.0.0 - 172.31.255.255', '192.168.0.0 - 192.168.255.255', '169.254.0.0 - 169.254.255.255'],
          1,
          'Class B private RFC 1918 scope is defined as 172.16.0.0 through 172.31.255.255.'
        ),
        createQuestion(
          'em2-3',
          'A system administrator needs to divide the empty network IP block 192.168.10.0/24 into four separate, isolated logical host submodules. Which CIDR mask should be assigned to each slice?',
          ['/25', '/26', '/27', '/28'],
          1,
          'Subdividing a /24 network block into 4 even subnets requires borrowing 2 network bits (2^2 = 4 subnets). 24 + 2 = /26 CIDR prefixes.'
        ),
        createQuestion(
          'em2-4',
          'Your network intrusion detection system alerts on UDP packets targeted towards port 53. Which directory infrastructure service is likely being probed or spoofed on that port?',
          ['Domain Name System (DNS)', 'Dynamic Host Configuration Protocol (DHCP)', 'Network Time Protocol (NTP)', 'Remote Desktop Protocol (RDP)'],
          0,
          'DNS operates on standard UDP (and sometimes TCP) port 53.'
        ),
        createQuestion(
          'em2-5',
          'Which protocol is unencrypted and carries web traffic over port 80, highly exposing user payloads to sniffing and packet hijacking if HTTPS is not enforced?',
          ['SSH', 'HTTP', 'FTP', 'RDP'],
          1,
          'HTTP is the archaic clear-text protocol running on port 80.'
        ),
        createQuestion(
          'em2-6',
          'You notice unauthenticated ARP frames being broadcast to map local server IPs to false MAC addresses. What attack is currently being executed?',
          ['ARP Poisoning / Spoofing', 'DNS Cache Poisoning', 'DDoS SYN Flood', 'MAC Flood Attack'],
          0,
          'ARP Poisoning is the classic attacker technique mapping hardware MAC addresses dynamically to targeted corporate gateway IPs on Layer 2.'
        ),
        createQuestion(
          'em2-7',
          'Which statement correctly describes the architectural difference between NAS and SAN configurations?',
          ['NAS runs over dedicated fiber networks only; SAN runs over standard IP networks', 'NAS serves file-level networks using protocols like NFS/SMB; SAN serves block-level storage directly', 'NAS maps block-level disks via iSCSI; SAN operates strictly over browser cookies', 'NAS requires Intel CPU virtualization; SAN relies solely on loopback 127.0.0.1'],
          1,
          'NAS operates as file-ready network mounts shared over traditional SMB/NFS protocols, while SAN represents block-level raw disk arrays.'
        ),
        createQuestion(
          'em2-8',
          'A secure HTTPS website requires an SSL/TLS Handshake. What is the very first packet exchange initiated by a web browser?',
          ['Server Hello with Certificate', 'Client Hello with supported cipher suites', 'Symmetric key validation frame', 'CA security directory lookup call'],
          1,
          'The browser initiates a TLS handshake with a Client Hello containing supported parameters and ciphers.'
        )
      ]
    }
  },

  // GROUP 3: Core Security Skills & Hacking Knowledge
  {
    id: 'mod-group3',
    areaId: 'group-3',
    title: 'CIA Security Matrices, User AAA, & Attack Frameworks',
    description: 'Enforce the classic CIA triad, audit identity validation systems (SSO, Kerberos, SAML), manage red/blue collaborative security postures, and implement the Cyber Kill Chain schema.',
    lessons: [
      {
        id: 'les-cia-triad',
        moduleId: 'mod-group3',
        title: 'CIA Triad & Core Access Verification Scales',
        duration: 25,
        youtubeVideoId: 'A5j4N8mYx4M',
        content: `### 🛡️ The CIA Triad, Access Verification, & Authentication Foundations

Understanding core cybersecurity metrics starts with defining key boundaries around system reliability, authentication factors, and user authorizations.

---

#### 1. The Core CIA Triad Matrices
The cornerstone of any security posture is the **CIA Triad**. Security controls always target one or more of these pillars:
* **Confidentiality**: Ensuring sensitive information is protected from unauthorized access or disclosure.
  * *Controls*: Advanced Encryption Standard (AES) at rest, SSL/TLS encryption for data in transit, and strictly defined Access Control Lists (ACLs).
* **Integrity**: Protecting system data and software from unauthorized, accidental, or malicious modification.
  * *Controls*: Hashing algorithms (SHA-256), cryptographic digital signatures, and configuration change-auditing engines.
* **Availability**: Ensuring data resources, communication channels, and systems are live, running, and accessible to authorized entities whenever needed.
  * *Controls*: Dynamic server clusters, hardware redundancy, RAID disk arrays, automated offsite backup restorations, and load balancers to absorb DDoS traffic spikes.

---

#### 2. Authentication vs. Authorization
These two critical principles are often conflated but govern separate system boundaries:
* **Authentication**: The active process of validating an identity claim (who you are). The system requires you to prove your claim using credentials before granting session access.
* **Authorization**: The process of validating a user\\'s permissions (what you are allowed to *do* after authentication). This defines which file registers, directories, databases, or actions are accessible.

---

#### 3. Authentication Factor Architecture: MFA & 2FA
Multi-Factor Authentication (MFA) requires users to verify their identities by pulling from at least **two separate factor categories**:
* **Something You Know** (Knowledge): Secret text strings, such as passwords, passphrases, PINs, or answers to security questions.
* **Something You Have** (Possession): Physical or logical assets, such as FIDO2 hardware security keys, mobile devices running authenticator apps (TOTP), or RSA hardware smartcards.
* **Something You Are** (Inherence): Biometric measurements, including fingerprint templates, facial structures, or retina/iris scans.
* **Somewhere You Are** (Location): Contextual indicators, such as GPS-derived coordinate boundaries, local network IP ranges, or geo-IP locks.
* **Something You Do** (Behavior): Typing cadences, gait metrics, or cursor navigation paths.

*Note: Combining two passwords or two hardware tokens does not satisfy MFA requirements; they must be from completely different categories.*

---
### 🎥 Tutorial Lectures
* **[CIA Triad Explained] (https://www.youtube.com/watch?v=A5j4N8mYx4M)**
* **[Cybersecurity Fundamentals - CIA Triad] (https://www.youtube.com/watch?v=3QhU9jd03a0)**
* **[Authentication vs Authorization] (https://www.youtube.com/watch?v=UBUNrFtufWo)**
* **[Identity and Access Management Basics] (https://www.youtube.com/watch?v=3i4f5YJ5J1Q)**
`,
        quiz: {
          id: 'q-cia-triad',
          title: 'CIA Triad & Access Verification Quiz',
          questions: [
            createQuestion(
              'qn-cia-q1',
              'An enterprise system administrator executes a daily scheduled task to verify that local file hashes match their original hashes. Which pillar of the CIA Triad is being audited?',
              ['Confidentiality', 'Integrity', 'Availability', 'Authorization'],
              1,
              'Integrity focuses on assuring that data has not been modified, tampered with, or corrupted. File hashing checks are the primary tool used to verify data integrity.'
            ),
            createQuestion(
              'qn-cia-q2',
              'A user presents a standard alpha-numeric password alongside physical fingerprint verification to access their terminal. Which MFA factors are being utilized?',
              ['Something You Know and Something You Have', 'Something You Know and Something You Are', 'Something You Have and Something You Are', 'Something You Do and Somewhere You Are'],
              1,
              'An alpha-numeric password is "Something You Know" (knowledge factor), and a fingerprint is a biometric indicator falling under "Something You Are" (inherence factor).'
            )
          ]
        }
      },
      {
        id: 'les-auth-methodologies',
        moduleId: 'mod-group3',
        title: 'Enterprise Authentication Protocols: Kerberos, RADIUS & LDAP',
        duration: 25,
        youtubeVideoId: '5N242XcKAsM',
        content: `### 🔑 Enterprise Authentication and Single Sign-On (SSO) Architectures

Modern organizations must connect thousands of users to distributed applications securely. Doing this requires centralized directory structures and ticket-based authentication protocols.

---

#### 1. Identity Infrastructure: LDAP and Active Directory
* **LDAP (Lightweight Directory Access Protocol)**: Communicates over TCP/UDP ports **389** (plain) and **636** (LDAPS/secure). It is an open, cross-platform protocol used to query and manage directory information services over IP networks.
* **Active Directory (AD)**: Microsoft\\'s proprietary enterprise directory database service. It is built on LDAP and handles authentication and authorization across Windows domain networks.

---

#### 2. Centralized Security Services: Kerberos, RADIUS & TACACS+
* **Kerberos (Port 88)**: The standard ticket-based authentication protocol for Active Directory. It operates entirely on symmetric cryptography to avoid transmitting passwords over local wires.
  * *Core Components*: The **Key Distribution Center (KDC)** is divided into:
    1. **Authentication Service (AS)**: Verifies the user and issues a **Ticket Granting Ticket (TGT)**.
    2. **Ticket Granting Service (TGS)**: In exchange for a valid TGT, issues a **Service Ticket** granting access to physical file servers or SQL databases.
* **RADIUS (Remote Authentication Dial-In User Service)**: Operates over UDP ports **1812 (Auth) & 1813 (Accounting)**. It is an open industry protocol designed to centralize Authentication, Authorization, and Accounting (AAA) for users connecting to remote services (VPNs, Wireless Access Points, dial-up). Combine it with 802.1X for enterprise Wi-Fi.
* **TACACS+ (Terminal Access Controller Access-Control System)**: Operates over TCP port **49**. Cisco proprietary protocol that encrypts the *entire* payload (unlike RADIUS, which only encrypts the password segment) and separates AAA functions, making it the choice for enterprise router administration.

---

#### 3. Single Sign-On (SSO) & Certificates
SSO allows users to authenticate once and access multiple independent local or cloud services without re-entering credentials:
* **SSO Infrastructures**: Uses secure authorization standards like **SAML 2.0** (Security Assertion Markup Language, XML-based) or **OIDC** (OpenID Connect, JSON/REST-based) to pass digital assertions between Identity Providers (IdP) and Service Providers (SP).
* **Local Auth & Central Certificates**: Employs local cryptographic certificates to bind identities securely to endpoints.

---
### 🎥 Tutorial Lectures
* **[Kerberos Authentication Explained] (https://www.youtube.com/watch?v=5N242XcKAsM)**
* **[Kerberos Deep Dive] (https://www.youtube.com/watch?v=qW361k3-BtU)**
* **[LDAP Explained] (https://www.youtube.com/watch?v=VFvA4W6uA4Y)**
* **[LDAP Basics] (https://www.youtube.com/watch?v=0u8WqS8K4xE)**
* **[RADIUS Explained] (https://www.youtube.com/watch?v=fh5x3mM5Q4Q)**
* **[SSO Explained] (https://www.youtube.com/watch?v=O1cRJWYF-g4)**
`,
        quiz: {
          id: 'q-auth-methods',
          title: 'Enterprise AAA & SSO Quiz',
          questions: [
            createQuestion(
              'qn-auth-q1',
              'What primary token is returned by the Authentication Service (AS) of a Kerberos KDC to allow a client to request access to specific resources later?',
              ['Service Ticket (ST)', 'Ticket Granting Ticket (TGT)', 'LDAP Access Token', 'Symmetric Session Certificate'],
              1,
              'Under Kerberos, the AS returns a Ticket Granting Ticket (TGT). The user presents this TGT to the Ticket Granting Service (TGS) to obtain individual Service Tickets (ST).'
            ),
            createQuestion(
              'qn-auth-q2',
              'Which protocol encrypts the entire administrative transmission payload and operates on TCP Port 49, offering superior administrative protection over RADIUS?',
              ['LDAP', 'TACACS+', 'SAM-L 2.0', 'OIDC'],
              1,
              'TACACS+ operates over TCP Port 49, separates AAA functions completely, and encrypts the entire transmission payload, separating it from RADIUS which only encrypts user passwords.'
            )
          ]
        }
      },
      {
        id: 'les-operations-metrics',
        moduleId: 'mod-group3',
        title: 'Team Paradigms, Alert Metrics, & Defense in Depth Models',
        duration: 25,
        youtubeVideoId: 'RkP6gA6xB7M',
        content: `### 👥 Operations Teams, Detection Metrics, & Security Models

Securing an enterprise requires coordinating distinct specialty roles, auditing continuous telemetry, and enforcing structured defense-in-depth parameters.

---

#### 1. Security Team Paradigms
Cybersecurity operations divide technical specialists into focused "Colours":
* **Red Team**: Offensive security professionals who emulate real adversaries to bypass perimeter barriers, exploit custom configurations, and test defensive responses.
* **Blue Team**: Defensive operators who maintain enterprise stability, coordinate continuous SIEM collection, and execute tactical security playbooks.
* **Purple Team**: Collaborative joint-engagement workshops that combine Red and Blue capabilities, using offensive techniques to test, tune, and harden defensive detection rules.

---

#### 2. Diagnostic Telemetry Metrics
Security Operations Center (SOC) analysts monitor systems to classify security events using specific metrics:
* **True Positive**: An alert triggered by genuine malicious exploit traffic. (Actionable breach)
* **True Negative**: System remains quiet, and no security incidents are occurring. (Normal operations)
* **False Positive**: An alarm is raised by a normal, safe operational procedure. (Causes alert fatigue, e.g., a developer triggers a warning during a scheduled test)
* **False Negative**: An exploit successfully executes without triggering any logs or alarms. This is the **most dangerous state**, as an attacker retains undetected network access.

---

#### 3. Structured Security Architectures
Organizations protect high-value targets by combining defensive layers:
* **Defense-in-Depth**: Designing overlapping layered controls. If one boundary fails (e.g., a physical badge reader is bypassed), additional safety layers (e.g., local host firewalls and file access control lists) are in place to stop the attacker.
* **Zero Trust Frameworks**: Built on the core principle **"Never trust, always verify"**. It requires continuous micro-segmentation, session evaluations, and device-health checks, and assumes that all devices—inside or outside the network boundary—are hostile.
* **Perimeter Defense**: Isolating internal structures using Firewalls, Intrusion Prevention Systems (IPS), and Demilitarized Zones (DMZs) to create distinct physical or logical boundaries interface zones.

---
### 🎥 Tutorial Lectures
* **[Red Team vs Blue Team] (https://www.youtube.com/watch?v=RkP6gA6xB7M)**
* **[Purple Team Explained] (https://www.youtube.com/watch?v=59E4M5q3R7I)**
* **[False Positive vs False Negative] (https://www.youtube.com/watch?v=4jRBRDbJemM)**
* **[Defense in Depth Explained] (https://www.youtube.com/watch?v=0g4F4mN2K8Q)**
* **[Zero Trust Architecture] (https://www.youtube.com/watch?v=Yx7N2dKjvQ8)**
`,
        quiz: {
          id: 'q-operations-metrics',
          title: 'Teams, Status Metrics, & Security Models Quiz',
          questions: [
            createQuestion(
              'qn-op-q1',
              'A firewall utility blocks a standard employee from uploading an approved financial sheet, raising a critical data leak alert. How should this event be classified?',
              ['True Positive', 'True Negative', 'False Positive', 'False Negative'],
              2,
              'An alarm raised for genuine, authorized activity is classified as a False Positive.'
            ),
            createQuestion(
              'qn-op-q2',
              'Which design philosophy operates on the assumption that any host is hostile by default, enforcing continuous session authentication, device health checks, and granular micro-segmentation?',
              ['Perimeter Defense Fortress Model', 'Defense-in-Depth Stratification', 'Zero Trust Architecture', 'Administrative Compliance Auditing'],
              2,
              'Zero Trust Architecture assumes there are no safe zones within a network, requiring continuous authentication and micro-segmentation for all hosts.'
            )
          ]
        }
      },
      {
        id: 'les-analytical-frameworks',
        moduleId: 'mod-group3',
        title: 'Analytical Threat Models & Cybersecurity Governance',
        duration: 25,
        youtubeVideoId: '7f9v7Q0L5lI',
        content: `### 🧭 Analytical Frameworks, Enterprise Governance, & Risk Strategy

To understand how complex attacks unfold and systematically manage network risk, organizations map security events to structured models and establish administrative governance processes.

---

#### 1. Analytical Intrusion Frameworks
* **The Lockheed Martin Cyber Kill Chain**: A linear 7-stage sequence tracking an attacker\\'s execution path:
  1. **Reconnaissance**: Gathering target intelligence (email lists, public IPs).
  2. **Weaponization**: Packing malware payloads inside functional files (e.g., malicious macros in an invoice document).
  3. **Delivery**: Transmitting the payload (e.g., via targeted phishing email).
  4. **Exploitation**: Triggering the vulnerability to execute rogue code on the target host.
  5. **Installation**: Setting up physical persistence (e.g., installing a backdoor utility).
  6. **Command & Control (C2)**: Establishing an external secure connection back to the attacker\\'s command server.
  7. **Actions on Objectives**: Carrying out the mission (exfiltrating database contents).
* **The Diamond Model of Intrusion Analysis**: Maps any technical attack or event by linking four core vertices: **Adversary**, **Infrastructure**, **Capability**, and **Victim**. This helps security teams find links and correlations across separate regional attacks.
* **MITRE ATT&CK Matrix**: A comprehensive repository of real-world adversary tactics, techniques, and procedures (TTPs). It details specific technical mitigation profiles for each vulnerability.

---

#### 2. Enterprise Security Governance
* **Risk Management Foundations**:
  * *Risk Definition*: The intersection of **Threat** (malicious entities), **Vulnerability** (system weaknesses), and **Asset Value** (worth of physical data, servers, or reputations).
  * *Risk Responses*: **Mitigate** (deploy firewalls), **Transfer** (purchase cybersecurity insurance), **Avoid** (retire vulnerable service assets), or **Accept** (acknowledge low-level risks).
* **Auditing and Compliance**: Operational verification that physical setups, training records, and active firewalls match regulatory frameworks (such as ISO 27001 or NIST SP 800-53).
* **Backups, Disaster Recovery, and Resiliency**: Maintaining offsite backup vaults to ensure business continuity following a database compromise or natural disaster.
* **Tactical Runbooks**: Structured, step-by-step technical guides that instruct analysts how to respond to specific secure alerts (such as a database compromise or ransomware alert).

---
### 🎥 Tutorial Lectures
* **[Cyber Kill Chain Explained] (https://www.youtube.com/watch?v=7f9v7Q0L5lI)**
* **[Diamond Model of Intrusion Analysis] (https://www.youtube.com/watch?v=JsA7hE8QWfY)**
* **[MITRE ATT&CK Explained] (https://www.youtube.com/watch?v=9dR8tN4D4M0)**
* **[MITRE ATT&CK for Beginners] (https://www.youtube.com/watch?v=2Qd7r5kQdA8)**
* **[Backup and Disaster Recovery] (https://www.youtube.com/watch?v=W0t6R7mT2sM)**
`,
        quiz: {
          id: 'q-analytic-models',
          title: 'Threat Frameworks & Corporate Governance Quiz',
          questions: [
            createQuestion(
              'qn-fr-q1',
              "During which linear phase of the standard 7-stage Cyber Kill Chain does an attacker create custom backdoors onto the victim's operating system to persist through system reboots?",
              ['Delivery', 'Exploitation', 'Installation', 'Command & Control (C2)'],
              2,
              'The Installation stage is defined by establishing a persistent presence, such as installing backdoors or services, on the compromised host.'
            ),
            createQuestion(
              'qn-fr-q2',
              'An IT director decides to outsourcing all web transaction databases to a secure third-party provider, relinquishing direct control. Which risk response strategy was chosen?',
              ['Risk Mitigation', 'Risk Avoidance', 'Risk Acceptance', 'Risk Transference'],
              3,
              'Risk Transference shifts the financial, operational, or legal burden of risks to an external third party.'
            )
          ]
        }
      }
    ],
    exam: {
      id: 'ex-sec-risk',
      title: 'Security & Hacking Concepts Master Exam',
      moduleId: 'mod-group3',
      timeLimit: 20,
      questions: [
        createQuestion(
          'em3-q1',
          "A security team is conducting a table-top assessment. They map the adversary's capabilities and infrastructures back to their target systems using a diamond-shaped network of models. Which analytical model is being applied?",
          ['Mitre ATT&CK Tactical Framework', 'Lockheed Martin Cyber Kill Chain', 'The Diamond Model of Intrusion Analysis', 'Defense-in-Depth Hierarchy'],
          2,
          'The Diamond Model connects Adversary, Infrastructure, Capability, and Victim to analyze and find links across intrusion campaigns.'
        ),
        createQuestion(
          'em3-q2',
          'Which identity solution operates primarily over UDP Ports 1812 and 1813 to manage remote client AAA operations, yet only encrypts the password transmission packet segment?',
          ['RADIUS', 'LDAP', 'TACACS+', 'Kerberos'],
          0,
          'RADIUS uses UDP ports 1812 (authentication) and 1813 (accounting), encrypting only the user password in its packet payloads.'
        ),
        createQuestion(
          'em3-q3',
          'A malicious attacker executes local privilege escalations on a target file server, yet fails to access adjacent financial storage buckets due to strict internal VLAN isolation. This demonstrates:',
          ['Symmetric Digital Signatures', 'The Diamond Model execution', 'Defense-in-Depth / Micro-segmentation', 'Risk Transference models'],
          2,
          'By using multiple defensive controls (like segmenting the internal network), organizations ensure that if one layer fails, others are there to contain the threat.'
        ),
        createQuestion(
          'em3-q4',
          'An intrusion analyst notices that a server is actively responding to administrative commands sent from an external IP address over a hidden channel. At which stage of the Cyber Kill Chain is this attack?',
          ['Exploitation', 'Installation', 'Command and Control (C2)', 'Actions on Objectives'],
          2,
          'Developing interactive, administrative channels from compromised hosts to external IP addresses happens during the Command & Control (C2) phase.'
        ),
        createQuestion(
          'em3-q5',
          'Which factor category does a custom USB security key that generates temporary cryptographic codes over NFC fall under?',
          ['Something You Know', 'Something You Have', 'Something You Are', 'Somewhere You Are'],
          1,
          'Physical authentication assets (like local USB keys or smartcards) fall under the "Something You Have" (possession) factor.'
        ),
        createQuestion(
          'em3-q6',
          'An organization needs to document standard step-by-step technical procedures to guide security analysts through containing and isolating a malware outbreak. What should they deploy?',
          ['Disaster Recovery Backups', 'Enterprise Risk Assessments', 'Tactical Incident Runbooks', 'Compliance Audit Questionnaires'],
          2,
          'Incident Runbooks provide tactical, step-by-step instructions for responding to specific security incidents.'
        )
      ]
    }
  },

  // GROUP 4: Cryptography, Exploits & Common Attacks
  {
    id: 'mod-group4',
    areaId: 'group-4',
    title: 'Cryptography Engines, OWASP Top 10, & Host Exploits',
    description: 'Deploy hash salting, asymmetric key block handshakes, locate memory heap vulnerabilities, neutralize OWASP bugs, and defend against social engineering schemes.',
    lessons: [
      {
        id: 'les-cryptography-basics',
        moduleId: 'mod-group4',
        title: 'Cryptographic Foundations: Hashing, Symmetric vs Asymmetric, & PKI',
        duration: 25,
        youtubeVideoId: 'jhXCTbFnK8o',
        content: `### 🔑 Basics of Cryptography: Hashing, Salting, & PKI Trust Fields

Cryptography provides the mathematical mechanisms used to ensure data confidentiality, authenticate identities, and verify transaction integrity.

---

#### 1. Hashing and the Principle of Salting
* **Hashing Algorithms**: One-way mathematical functions that take an arbitrary input and generate a fixed-size, deterministic output (the hash digest). Hashing is designed to be irreversible; you cannot mathematically reconstruct the plaintext from the digest. E.g., SHA-256 or MD5.
  * Use Cases: Verifying file integrity and storing passwords.
* **The Vulnerability - Precomputed Tables**: Attackers use precomputed tables of common passwords and their corresponding hashes (called **Rainbow Tables**) to crack stolen hash lists instantly.
* **The Defense - Cryptographic Salting**: Adding a unique, random string of characters (a salt) to a password before hashing it. This ensures that the same password generates completely unique hashes on different accounts, completely neutralizing Rainbow Table attacks.

---

#### 2. Key Architectures: Symmetric vs. Asymmetric Encryption
Modern encryption is split into two primary architectures:
* **Symmetric Cryptography**: Uses a single, shared key to both encrypt and decrypt data. It is extremely fast and suited for bulk data encryption but suffers from the **Key Distribution problem** (how to securely share the key).
  * *Protocols*: AES (Advanced Encryption Standard), DES, 3DES, Blowfish.
* **Asymmetric Cryptography**: Uses a mathematically-bound public/private keypair:
  * Open public keys are shared with anyone to *encrypt* data or *verify* digital signatures.
  * Secret private keys are kept secure by their owner to *decrypt* data or *generate* digital signatures.
  * *Protocols*: RSA, Diffie-Hellman (used for secure key exchanges), Elliptic Curve Cryptography (ECC).

---

#### 3. Public Key Infrastructure (PKI) & TLS
* **PKI**: The ecosystem of hardware, software, security policies, and Certificate Authorities (CAs) used to manage, distribute, store, and revoke digital certificates.
* **Certificate Authority (CA)**: A trusted third party that signs and issues digital certificates (which contain a public key and identity details) to verify ownership of domain names.
* **Validation and Trust**: Browsers use pre-installed root certificates from trusted CAs to verify server identities before establishing secure connections.
* **Obfuscation**: Scrambling code structure (e.g., changing variable names, scrambling execution paths) to make it difficult for humans to analyze, without applying mathematical encryption.

---
### 🎥 Tutorial Lectures
* **[Cryptography Full Course] (https://www.youtube.com/watch?v=jhXCTbFnK8o)**
* **[Cryptography Explained] (https://www.youtube.com/watch?v=AQDCe585Lnc)**
* **[Hashing Explained] (https://www.youtube.com/watch?v=b4b8ktEV4Bg)**
* **[Hashing and Salting] (https://www.youtube.com/watch?v=8ZtInClXe1Q)**
* **[Symmetric and Asymmetric Encryption] (https://www.youtube.com/watch?v=o_g-M7UBqI8)**
* **[Public and Private Keys Explained] (https://www.youtube.com/watch?v=GSIDS_lvRv4)**
* **[Public Key Infrastructure (PKI)] (https://www.youtube.com/watch?v=5YfR4d8VQ6M)**
* **[Certificates and Certificate Authorities] (https://www.youtube.com/watch?v=lrY9lNfN8tE)**
* **[TLS and SSL Explained] (https://www.youtube.com/watch?v=SJJmoDZ3il8)**
* **[Code Obfuscation Explained] (https://www.youtube.com/watch?v=4x0wzM2o6YU)**
`,
        quiz: {
          id: 'q-crypto-basics',
          title: 'Cryptography, Key Types, & PKI Quiz',
          questions: [
            createQuestion(
              'qn-cr-q1',
              'What primary objective does adding unique cryptographic "Salts" to plaintexts before executing hashing algorithms achieve?',
              ['Establishes asymmetric digital signatures', 'Slows CPU decryption speed during Diffie-Hellman handshakes', 'Ensures identical passwords generate different, unique hashes to neutralize Rainbow Tables', 'Translates character encodings from HTTPS to ASCII formatted configurations'],
              2,
              'Salting introduces unique randomized entropy per record so that identical user passphrases do not produce matching hashes in database lists.'
            ),
            createQuestion(
              'qn-cr-q2',
              'An administrator wants to encrypt large backup databases on local physical storage arrays quickly and efficiently. Which cryptographic category is best suited for bulk disk encryption?',
              ['Asymmetric Cryptography', 'Symmetric Cryptography', 'Digital Obfuscation Scrambling', 'Diffie-Hellman Key Exchange'],
              1,
              'Symmetric cryptography (e.g., AES) is much faster and computationally efficient than asymmetric cryptography, making it the industry choice for bulk data encryption.'
            )
          ]
        }
      },
      {
        id: 'les-vulnerabilities-exploits',
        moduleId: 'mod-group4',
        title: 'System Vulnerabilities & Exploit Engineering: Overflows, Escalation, & Malware',
        duration: 25,
        youtubeVideoId: '1S0aBV-Waeo',
        content: `### ☠️ Vulnerabilities, Hacking Frameworks, & Malware Mechanics

Understanding memory management flaws, privilege escalation techniques, and malware types is critical for defending server endpoints and client nodes.

---

#### 1. Exploit Pipelines and Common Hacking Tools
Attackers automate scanning, payload creation, and exploit delivery using centralized frameworks:
* **Metasploit Framework**: A highly popular modular library used to configure payloads, launch exploits, and manage system access.
* **Nmap**: Used to locate active systems, scan ports, and identify running software services.
* **Maltego & OSINT Tools**: Used to collect intelligence on targets before launching attacks.

---

#### 2. Memory-Based Exploits
Software vulnerabilities often trace back to unsafe memory handling in low-level programming languages (like C/C++):
* **Buffer Overflow**: Occurs when web input or terminal inputs exceed the memory buffer\\'s allocated boundary. This data overflows into adjacent memory registers, allowing an attacker to overwrite the **Return Address Pointer (next instruction address)** and execute malicious shellcode.
* **Memory Leak**: Occurs when applications fail to release standard allocated RAM resources back to the operating system after executing functions, leading to system slowdowns and application crashes.

---

#### 3. Privilege Escalation Dynamics
Once an attacker compromises a system as a low-level user, they seek to capture administrative rights:
* **Vertical Privilege Escalation**: Transitioning from a standard user context directly to root, system admin, or domain administrator rights.
* **Horizontal Privilege Escalation**: Moving laterally into another standard user account on the same privilege level.
* **Living off the Land (LOLBAS / GTFOBins)**: Exploiting built-in system administration utilities (like PowerShell, certutil, or bash) to download and run malicious scripts without bringing external malware files onto the disk, thereby bypassing security blocklists.

---

#### 4. Malware Mechanics
Malicious software is classified by its behaviors and propagation methods:
* **Trojans**: Malware disguised as benign, legitimate applications.
* **Worms**: Standalone malware that replicates across networks automatically, exploiting service vulnerabilities without requiring user action.
* **Ransomware**: Encrypts local user systems and databases and demands cryptocurrency payment in exchange for the decryption key.
* **Spyware & Keyloggers**: Secretly monitors input keystrokes, browser histories, and local cameras.
* **Rootkits**: Modifies the operating system kernel to hide active backdoors, processes, and network connections from security tools.

---
### 🎥 Tutorial Lectures
* **[Buffer Overflow Explained] (https://www.youtube.com/watch?v=1S0aBV-Waeo)**
* **[Memory Leaks Explained] (https://www.youtube.com/watch?v=JdXcQhA0n8g)**
* **[Privilege Escalation Concepts] (https://www.youtube.com/watch?v=J0fM9QnV0hQ)**
* **[Malware Analysis Fundamentals] (https://www.youtube.com/watch?v=Vre7vY2A6hY)**
* **[Types of Malware] (https://www.youtube.com/watch?v=6uSVVCmOH5w)**
`,
        quiz: {
          id: 'q-vulnerabilities-exploits',
          title: 'Memory Bugs, Privilege Escalation & Malware Quiz',
          questions: [
            createQuestion(
              'qn-vu-q1',
              "What memory vulnerability allows an attacker to execute custom shellcode by providing large input strings that overwrite the CPU's Return Address Point instruction pointer?",
              ['Memory Leak', 'Buffer Overflow', 'Obfuscation Scrambling', 'Horizontal Privilege Escalation'],
              1,
              'A Buffer Overflow allows users to input more data than a buffer can hold, overwriting key stack registers to redirect system execution.'
            ),
            createQuestion(
              'qn-vu-q2',
              'An attacker leverages pre-installed system binaries (like PowerShell or certutil) to carry out malicious actions, bypassing traditional file-based antivirus scanners. Which concept does this describe?',
              ['Symmetric Key Exchange', 'Directory Traversal', 'Living off the Land (LOLBAS)', 'Worm Replication'],
              2,
              'Living off the Land (LOLBAS/GTFOBins) leverages trust-vouched system binaries to carry out malicious actions, allowing attackers to avoid dropping external malware files.'
            )
          ]
        }
      },
      {
        id: 'les-owasp-web-security',
        moduleId: 'mod-group4',
        title: 'OWASP Top 10: SQLi, XSS, CSRF & Directory Traversal Web Attacks',
        duration: 25,
        youtubeVideoId: 'V8AUTc4hsuI',
        content: `### 🌐 Web-Based Attacks and the OWASP Top 10 Framework

Web applications are highly visible targets for external attackers. The Open Web Application Security Project (OWASP) compiles the top security threats facing modern web applications.

---

#### 1. SQL Injection (SQLi)
* **The Vulnerability**: Occurs when unvalidated user inputs are concatenated directly into backend database query strings.
* **The Exploit**: Attackers inject database escape characters (like \`'\`) followed by SQL command operators (like \`OR '1'='1'\`) to bypass authentication or access confidential data.
* **The Defense**: Use **Parameterized Queries (Prepared Statements)** to treat all inputs as literals rather than executable commands.

---

#### 2. Cross-Site Scripting (XSS)
* **The Vulnerability**: Occurs when web applications echo untrusted user inputs directly onto public pages without sanitization.
* **The Exploit**: Attackers inject hostile browser scripts (like \`<script>stealCookies()</script>\`) that execute within a visiting user\\'s browser context.
* **Types**:
  * **Reflected XSS**: The malicious script is part of a request and is echoed back in the server response instantly, targetted via phishing URLs.
  * **Stored (Persistent) XSS**: The malicious script is permanently stored on the backend server (such as an public forum post) and executes in the browser of any user who views that page.
  * **DOM-based XSS**: Executed purely within the client-side JavaScript, modifying the Document Object Model (DOM) directly.
* **The Defense**: Strict output encoding, input sanitization, and deploying a robust **Content Security Policy (CSP)**.

---

#### 3. Cross-Site Request Forgery (CSRF)
* **The Vulnerability**: Exploits a website\\'s trust in user browser cookies.
* **The Exploit**: Attackers trick logged-in users into visiting malicious websites that silently execute requests (e.g., initiating bank transfers) on the target site using the user\\'s active authentication cookie.
* **The Defense**: Deploying random, unique **Anti-CSRF Tokens** for every state-changing request.

---

#### 4. Directory Traversal
* **The Vulnerability**: Occurs when applications accept file path inputs without verifying folder boundaries.
* **The Exploit**: Attackers submit parent directory sequences (like \`../../etc/passwd\` or \`..\\..\\windows\\win.ini\`) to read unrestricted files from the server\\'s operating system.
* **The Defense**: Restricting permissions, hashing file identifiers, and sanitizing path delimiters.

---
### 🎥 Tutorial Lectures
* **[OWASP Top 10 Full Course] (https://www.youtube.com/watch?v=V8AUTc4hsuI)**
* **[OWASP Top 10 Explained] (https://www.youtube.com/watch?v=VfM4x8R8K7U)**
* **[SQL Injection Explained] (https://www.youtube.com/watch?v=ciNHn38EyRc)**
* **[XSS Explained] (https://www.youtube.com/watch?v=EoaDgUgS6QA)**
* **[CSRF Explained] (https://www.youtube.com/watch?v=eWEgUcHPle0)**
* **[Directory Traversal Explained] (https://www.youtube.com/watch?v=6rM5iN3Q4yQ)**
`,
        quiz: {
          id: 'q-owasp-web-security',
          title: 'OWASP Top 10 & Web Attacks Quiz',
          questions: [
            createQuestion(
              'qn-ow-q1',
              'Which web vulnerability allows an attacker to inject client-side scripts that execute within the browser of anyone who views a compromised forum post?',
              ['Reflected XSS', 'Stored (Persistent) XSS', 'Cross-Site Request Forgery (CSRF)', 'Directory Traversal'],
              1,
              'Stored (Persistent) XSS happens when malicious scripts are saved to database storage and execute in the browser of any user who visits that page.'
            ),
            createQuestion(
              'qn-ow-q2',
              'What primary coding practice should a web developer implement to prevent SQL Injection (SQLi) vulnerabilities?',
              ['Employing base-64 string obfuscation on forms', 'Enforcing client-side password hashing on submit', 'Implementing Parameterized Queries (Prepared Statements)', 'Deploying symmetric AES encryption on all text forms'],
              2,
              'Parameterized queries ensure the database engine treats input as text data, not executable code, completely blocking SQL injection attacks.'
            )
          ]
        }
      },
      {
        id: 'les-social-engineering-networks',
        moduleId: 'mod-group4',
        title: 'Comprehensive Social Engineering & Infrastructure Vectors',
        duration: 25,
        youtubeVideoId: 'lc7scxvKQOo',
        content: `### 🎣 Social Engineering, Corporate Impersonation, & Infrastructure Attacks

The human element is often a system\\'s weakest link. Adversaries combination physical deception, social manipulation, and network infrastructure attacks to bypass secure perimeters.

---

#### 1. Social Engineering: The Human Attacks
* **Phishing**: General, high-volume email campaigns directing users to cloned logins.
* **Vishing**: Voice-based phishing via telephone to capture verification codes.
* **Smishing**: SMS/text message bait schemes designed to steal credentials.
* **Whaling**: Custom phishing attacks targeting high-value corporate executives (CEOs/CFOs).
* **Dumpster Diving**: Searching physical waste bins to locate passwords, network charts, or technical sheets.
* **Tailgating**: Following authorized personnel closely through physical locked badge doors.
* **Shoulder Surfing**: Watching someone type credentials over their shoulder.
* **Spim & Spam**: Unsolicited bulk messaging over Instant Messaging (Spim) vs. Standard Email (Spam).

---

#### 2. Local Wireless and Network Spoofing
* **Evil Twin / Rogue Access Point**: Deploying a physical Wi-Fi router named after a target network to intercept user traffic.
* **Deauthentication Attack**: Sending forged physical frames to disconnect clients from a legitimate Wi-Fi access point, forcing them to reconnect to an Evil Twin clone.
* **Rogue DHCP / DNS Poisoning**: Deploying a rogue DHCP server to assign fake gateway parameters, or poisoning DNS files to redirect clients to duplicate phishing sites.
* **Spoofing**: Forging packet source IP or MAC addresses to bypass firewall filters.

---

#### 3. Advanced Traffic Manipulation & Infrastructure Attacks
* **DoS vs. DDoS**: Denial of Service (resource exhaustion from a single system) vs. Distributed Denial of Service (exhausting target bandwidth or resources using botnets).
* **Man-in-the-Middle (MITM)**: Intercepting and secretly modifying active communications between two devices (often achieved via ARP Poisoning).
* **VLAN Hopping**: Modifying physical VLAN tags inside Ethernet frames (via double-tagging) to route packets across separate virtual local subnets.
* **Replay Attack**: Capturing authentication packets transmitted over unencrypted connections and re-sending them later to claim unauthorized access.
* **Zero-Day Exploit**: Targeting previously unknown and unpatched vulnerabilities.

---
### 🎥 Tutorial Lectures
* **[Social Engineering Explained] (https://www.youtube.com/watch?v=lc7scxvKQOo)**
* **[Phishing Explained] (https://www.youtube.com/watch?v=XBkzBrXlle0)**
* **[Physical Security Attacks] (https://www.youtube.com/watch?v=6gFj0zM8eO4)**
* **[DNS Poisoning Explained] (https://www.youtube.com/watch?v=YzLrWHZa-Kc)**
* **[Man-in-the-Middle (MITM) Explained] (https://www.youtube.com/watch?v=4JfZ9dX4Q5w)**
* **[DDoS Explained] (https://www.youtube.com/watch?v=ilhGh9CEIwM)**
* **[Evil Twin Attack Explained] (https://www.youtube.com/watch?v=9wQj4aY7vI0)**
* **[Replay Attack Explained] (https://www.youtube.com/watch?v=2h0dKfA8XlQ)**
* **[VLAN Hopping Explained] (https://www.youtube.com/watch?v=YY9K6h2Q8Ow)**
* **[Zero-Day Explained] (https://www.youtube.com/watch?v=4f3sJ0d6z4M)**
`,
        quiz: {
          id: 'q-social-networks',
          title: 'Social Engineering & Network Intrusion Quiz',
          questions: [
            createQuestion(
              'qn-so-q1',
              'What specific term describes a high-value phishing campaign targeting senior executives like C-level managers to steal corporate secrets?',
              ['Smishing', 'Whaling', 'Tailgating', 'Spim'],
              1,
              'Whaling specifically targets high-value corporate executives like CEOs, CFOs, or Board members.'
            ),
            createQuestion(
              'qn-so-q2',
              'An attacker transmits forged deauthentication packets to disconnect clients from corporate Wi-Fi network and redirect them to their rogue router. What attack has occurred?',
              ['SQL Injection', 'Evil Twin / Rogue AP Attack', 'VLAN Hopping double-tagging', 'Symmetric Key Exchange hijack'],
              1,
              'An Evil Twin attack uses rogue access points with matching Wi-Fi names; deauthentication packets are often used to force clients over to the rogue clone.'
            )
          ]
        }
      }
    ],
    exam: {
      id: 'ex-cryptography',
      title: 'Cryptography & Attack Matrix Master Exam',
      moduleId: 'mod-group4',
      timeLimit: 20,
      questions: [
        createQuestion(
          'em4-q1',
          'A user arrives at a cloned landing page after typing a valid web domain. Security logs reveal that a local DNS database contains false IP mapping entries. What attack has occurred?',
          ['DNS Poisoning', 'SQL Injection', 'Smishing', 'CSRF cookie hijack'],
          0,
          'DNS Poisoning maps legitimate domains to false destination IPs, redirecting users to malicious cloned servers.'
        ),
        createQuestion(
          'em4-q2',
          "Which attack methodology tricks a user's browser into sending state-changing requests (like initiating bank transfers) using their active authentication cookie?",
          ['Cross-Site Scripting (XSS)', 'Cross-Site Request Forgery (CSRF)', 'SQL Injection (SQLi)', 'Directory Traversal'],
          1,
          'CSRF exploits the domain-wide trust browsers have in cookie authentication, tricking active user sessions into executing malicious, unauthorized requests.'
        ),
        createQuestion(
          'em4-q3',
          'An attacker appends custom directory dots and slashes (e.g. "../../etc/passwd") to retrieve operating files from a server. What vulnerability is being exploited?',
          ['Memory Leak buffer fault', 'Directory Traversal', 'Zero-Day execution', 'Symmetric Key bypass'],
          1,
          'Directory Traversal uses file system markers (such as "../" or "..\\") to bypass web directory roots and access restricted operating system files.'
        ),
        createQuestion(
          'em4-q4',
          "An organization's servers are flooded with millions of UDP packets originating from globally distributed botnet networks. How should this exploit be classified?",
          ['DNS Spoofing', 'SQL injection attack', 'Distributed Denial of Service (DDoS)', 'VLAN Hopping execution'],
          2,
          'A DDoS attack floods target bandwidth or system resources using networks of compromised, globally distributed devices (botnets).'
        ),
        createQuestion(
          'em4-q5',
          'Which cryptographic hashing attack involves using a precomputed database of password hashes to crack stolen credential lists instantly?',
          ['Obfuscation scramble', 'Rainbow Table Attack', 'Diffie-Hellman Key hijack', 'Replay transaction exploit'],
          1,
          'Rainbow Tables contain precomputed hashes of common passwords; salting is the primary defense used to neutralize them.'
        ),
        createQuestion(
          'em4-q6',
          'An attacker intercepts active web traffic, captures access tokens, and transmits them unmodified to authenticate to a system later. What is this?',
          ['Buffer Overflow', 'Replay Attack', 'SQL Injection (SQLi)', 'Whaling campaign'],
          1,
          'Replay Attacks capture unencrypted transmission parameters or authentication keys and transmit them later to gain unauthorized access.'
        )
      ]
    }
  },

  // GROUP 5: Programming Skills & Cloud Environments
  {
    id: 'mod-group5',
    areaId: 'group-5',
    title: 'Programming Skills & Cloud Environments',
    description: 'Learn script automation (Python, Bash, PowerShell, JS, Go, C++) matched with secure cloud architectures, Shared Responsibility rules, IaC templates, and service models.',
    lessons: [
      {
        id: 'les-programming-fundamentals',
        moduleId: 'mod-group5',
        title: 'Python, Go, JavaScript, C++, Bash & PowerShell Automation',
        duration: 30,
        youtubeVideoId: 'rfscVS0vtbw',
        content: `### 💻 Programming & Automation for Security Practitioners

A cornerstone of defensive and offensive engineering is automating repetitive tasks, querying security APIs, analyzing logs, and parsing network traffic. 

**Core Directive**: In security engineering, the absolute mandate is to *Keep Learning*. Tech stacks shift, but solid fundamentals map across all dynamic environments.

---

#### 1. Python: The Defacto Standard for Custom Exploit & Analysis Pipelines
Python is highly readable, has massive library support, and excels at rapid prototype exploitation, scripting, and log analysis.
* **Featured Tutorials**:
  * **[Python Full Course for Beginners] (https://www.youtube.com/watch?v=rfscVS0vtbw)**
  * **[Python Programmer Playlist] (https://www.youtube.com/playlist?list=PLZPZq0r_RZOOzY_vR4zJM32SqsSInGMwe)**
  * **[Intermediate Python Deep Dive] (https://www.youtube.com/watch?v=XKHEtdqhLK8)**
* *Core Libraries*: \`requests\` for web interactions, \`socket\` for low-level connection handshakes, \`scapy\` for raw packet crafting, and \`json\` / \`csv\` for parsing telemetry.

---

#### 2. Bash Scripting: UNIX Infrastructure Systems Automation
Bash is the standard command-line interface shell for UNIX-like environments (Linux, macOS). It provides immediate glue scripts to link system utilities.
* **Featured Tutorials**:
  * **[Bash Scripting Tutorial for Beginners] (https://www.youtube.com/watch?v=tK9Oc6AEnR4)**
  * **[Learn Bash in 1 Hour - Crash Course] (https://www.youtube.com/watch?v=SPwyp2NG-bE)**
* *Use Case*: Automatically running log sweeps, configuring firewalls on boot, scheduling backups with cron jobs, and extracting user lists with grep/awk pipelines.

---

#### 3. PowerShell: Native Windows Enterprise Administration
PowerShell uses an object-oriented structure where commands (cmdlets) return structured .NET components rather than text streams.
* **Featured Tutorials**:
  * **[PowerShell Course for Beginners] (https://www.youtube.com/watch?v=UVUd9_k9C6A)**
  * **[PowerShell Tooling In-Depth] (https://www.youtube.com/watch?v=IHrGresKu2w)**
* *Use Case*: Querying Active Directory, auditing GPO configurations, automating endpoint security patches, and pulling Event Viewer logs.

---

#### 4. JavaScript & Node.js: Dynamic Web Scripting & Event Automation
JavaScript operates primarily in client browsers but is heavily deployed on the server side via Node.js for high-speed dynamic asynchronous tasks.
* **Featured Tutorials**:
  * **[JavaScript Full Course for Beginners] (https://www.youtube.com/watch?v=PkZNo7MFNFg)**
  * **[Advanced JavaScript Guide] (https://www.youtube.com/watch?v=hdI2bqOjy3c)**
* *Use Case*: Auditing client-side cross-site scripting risks, creating speedy API backend proxies, and parsing JSON payload configurations.

---

#### 5. Go (Golang): High-Performance Concurrent Security Tools
Go compiles directly to single statically-linked binaries, making it incredibly easy to distribute across different architectures without managing dependencies.
* **Featured Tutorials**:
  * **[Go Programming Tutorial - Full Course] (https://www.youtube.com/watch?v=un6ZyFkqFKo)**
* *Use Case*: Building high-performance network scanners (like custom vulnerability probes), rapid sub-domain enumerators, and multi-threaded proxy engines.

---

#### 6. C++: Low-Level System Access & Advanced Exploit Engineering
C++ provides direct hardware control, manual memory management, and is the choice for writing high-performance low-level applications.
* *Security Context*: Analyzing memory allocation behaviors to understand buffer overflows, heap-spraying mechanics, and malware reverse-engineering.

---
### 🎥 Core Programming Reference Guide
* **Python**: [Full Course] (https://www.youtube.com/watch?v=rfscVS0vtbw) | [Playlist] (https://www.youtube.com/playlist?list=PLZPZq0r_RZOOzY_vR4zJM32SqsSInGMwe) | [Intermediate] (https://www.youtube.com/watch?v=XKHEtdqhLK8)
* **Bash**: [Basic Tutorial] (https://www.youtube.com/watch?v=tK9Oc6AEnR4) | [1-Hour Crash] (https://www.youtube.com/watch?v=SPwyp2NG-bE)
* **PowerShell**: [Beginner Guide] (https://www.youtube.com/watch?v=UVUd9_k9C6A) | [In-Depth Tooling] (https://www.youtube.com/watch?v=IHrGresKu2w)
* **JavaScript**: [Full course] (https://www.youtube.com/watch?v=PkZNo7MFNFg) | [Advanced] (https://www.youtube.com/watch?v=hdI2bqOjy3c)
* **Golang**: [Full Course] (https://www.youtube.com/watch?v=un6ZyFkqFKo)
`,
        quiz: {
          id: 'q-programming-fundamentals',
          title: 'Sysadmin Languages & Concepts Quiz',
          questions: [
            createQuestion(
              'qn-pr-q1',
              'Which language yields a compiled, standalone statically-linked binary with built-in concurrency support, making it popular for writing fast network utilities like scanners?',
              ['Python', 'Go (Golang)', 'Bash Scripting', 'JavaScript (Node.js)'],
              1,
              'Go is widely praised in security engineering for compiling down to single, portable static binaries with powerful built-in concurrency engines.'
            ),
            createQuestion(
              'qn-pr-q2',
              'How does PowerShell fundamentally differ from traditional UNIX command shells like Bash when returning data from system terminal inputs?',
              ['Bash returns encrypted streams; PowerShell is plain text', 'PowerShell returns structured .NET object arrays; Bash returns plain text streams', 'Bash compiles on-demand; PowerShell compiles statically', 'PowerShell lacks access to OS directories.'],
              1,
              'PowerShell is object-oriented, passing .NET objects between piped cmdlets, whereas Bash passes characters and text bytes.'
            )
          ]
        }
      },
      {
        id: 'les-cloud-security',
        moduleId: 'mod-group5',
        title: 'Cloud Security Model: Shared Responsibility, SaaS/PaaS/IaaS, & IaC Templates',
        duration: 30,
        youtubeVideoId: 'un6ZyFkqFKo',
        content: `### ☁️ Enterprise Cloud Architectures, Shared Responsibility, & Orchestration

Transitioning from local data centers to cloud computing shifts business funding models drastically and introduces unique collaborative security frameworks.

---

#### 1. Fundamental Financial Shift: Cloud vs. On-Premises
* **On-Premises Infrastructure (CapEx)**: Capital Expenditure represents significant upfront physical investments (buying racks, virtualization motherboards, cooling hardware, backup power generators).
* **Cloud Environments (OpEx)**: Operational Expenditure represents ongoing utility-based costs. System configurations, databases, and microservices are metered per minute of dynamic execution.

---

#### 2. Cloud Security & Shared Responsibility Models
Securing cloud setups requires dividing boundaries between the cloud provider and the tenant:
* **Infrastructure as a Service (IaaS)**:
  * *Provider*: Physical facilities, server virtualization hypervisors, and storage cages.
  * *Tenant*: Operating system installation, patching, databases, network filtering rules, and application code. (Highest administrative load)
* **Platform as a Service (PaaS)**:
  * *Provider*: Hardened system environments, operating system runtimes, dynamic auto-scaling, and routing nodes.
  * *Tenant*: Application code and configuration values.
* **Software as a Service (SaaS)**:
  * *Provider*: Maintains the entire software suite, underlying physical nodes, databases, and application controls.
  * *Tenant*: Data classifications, device approvals, and user accounts. (Lowest administrative load)

---

#### 3. Enterprise Cloud Frameworks and Services
Modern organizations use massive public or blended models:
* **AWS (Amazon Web Services)**, **GCP (Google Cloud Platform)**, and **Azure (Microsoft)**.
* **Concept of Enterprise Storage Targets**: Standardizing file targets across elastic cloud destinations (e.g., AWS S3 bucket structures) vs. corporate storage networks (OneDrive, Google Drive, Box, Dropbox).
* **Concept of Serverless (FaaS)**: Event-driven models (e.g., AWS Lambda, Cloud Run) where virtual containers are brief-spawned dynamically, execute a function, and instantly tear down, eliminating background OS idle costs.
* **Concept of Infrastructure as Code (IaC)**: Deploying, modifying, and tearing down entire secure networks automatically using text configs (like Terraform script templates).

---
### 🎥 Essential Cloud Security References
* **[Shared Responsibility Models] (https://www.youtube.com/watch?v=uK1XfV5n0yM)**
* **[Cloud Computing Frameworks: SaaS, PaaS, IaaS] (https://www.youtube.com/watch?v=ORiCo2_K4bM)**
* **[Infrastructure as Code (IaC) Explained] (https://www.youtube.com/watch?v=LQD7U_K7v3I)**
* **[Serverless Computing Basics] (https://www.youtube.com/watch?v=0kFpL8v92vA)**
`,
        quiz: {
          id: 'q-cloud-security',
          title: 'Cloud Architectures & Service Boundaries Quiz',
          questions: [
            createQuestion(
              'qn-cl-q1',
              'Under the Shared Responsibility Model of a PaaS database instance, who is strictly responsible for running OS-level security patches and kernel updates?',
              ['The tenant customer', 'The cloud platform hosting provider', 'The independent database software developer', 'The third-party network administrator'],
              1,
              'Under Platform as a Service (PaaS), the cloud provider manages host runtimes, operating systems, and core kernel updates, freeing the tenant to focus purely on application configurations and data.'
            ),
            createQuestion(
              'qn-cl-q2',
              'An enterprise uses Terraform to script-drive and boot entire identical virtual local networks across separate test facilities. What concept does this represent?',
              ['SaaS account synchronization', 'Serverless computing (FaaS)', 'Infrastructure as Code (IaC)', 'CapEx physical planning'],
              2,
              'Infrastructure as Code (IaC) uses declarative software scripts to build and manage infrastructure components consistently and automatically.'
            )
          ]
        }
      }
    ],
    exam: {
      id: 'ex-group5',
      title: 'Programming & Cloud Security Master Exam',
      moduleId: 'mod-group5',
      timeLimit: 20,
      questions: [
        createQuestion(
          'em5-q1',
          'Which cloud deployment pattern represents a complete, finished application delivered over web browsers requiring zero software installations or system setups from the customer?',
          ['Infrastructure as a Service (IaaS)', 'Platform as a Service (PaaS)', 'Software as a Service (SaaS)', 'Bare-Metal Hypervisor virtualization'],
          2,
          'SaaS delivers complete, user-ready systems maintained fully by the vender.'
        ),
        createQuestion(
          'em5-q2',
          'An engineering team transitions their virtual apps to execute on transient containers that spawn instantly on incoming HTTP triggers and scale to zero during idle periods. This is:',
          ['Infrastructure as Code (IaC)', 'CapEx resource allocation', 'Serverless computing', 'Private Cloud isolation'],
          2,
          'Serverless/FaaS architectures use isolated micro-containers on demand to process discrete events and scale down completely when idle.'
        ),
        createQuestion(
          'em5-q3',
          'A cybersecurity developer needs to distribute standard utility scanner binaries across thousands of dynamic employee systems. Why would they select Go (Golang) over Python?',
          ['Go requires a local runtime interpreter installed on all systems', 'Go compiles to standalone, statically-linked binaries needing no dynamic local libraries', 'Go only runs on specialized Web browsers', 'Go is an uncompiled object-oriented script language'],
          1,
          'Go compiles code to self-contained, lightweight statically-linked executables, whereas Python requires target machines to have interpreter utilities and libraries installed.'
        ),
        createQuestion(
          'em5-q4',
          'Which financial model describes an physical on-premise datacenter purchase pattern, focusing heavily on early capital acquisitions?',
          ['Operational Expenditure (OpEx)', 'Capital Expenditure (CapEx)', 'Dynamic Metered Billing', 'On-Demand Server Licensing'],
          1,
          'CapEx represents upfront capital investments in physical assets (servers, physical facilities), contrasting with the cloud metered utility billing model (OpEx).'
        ),
        createQuestion(
          'em5-q5',
          'A security developer writes a Bash script that runs daily on local syslogs, parses lines for failed login alerts, and routes warnings to a webhook. Under which category does this fall?',
          ['Client-Side script manipulation', 'System automation and administrative pipeline operations', 'SaaS subscription service coordination', 'Low-level stack pointer reverse engineering'],
          1,
          'Using glue shell scripts to crawl system files and trigger hooks is a classic example of security automation and sysadmin pipelines.'
        ),
        createQuestion(
          'em5-q6',
          'What framework dictates how a tenant client must secure, configure, and maintain Guest Operating Systems, applications, and firewalls on their virtual machine?',
          ['SaaS License Agreements', 'Standard CapEx physical constraints', 'The Shared Responsibility Model', 'The DNS Registry configuration'],
          2,
          'The Shared Responsibility Model explicitly defines where the providers physical boundary ends and the cloud tenants logical control starts.'
        )
      ]
    }
  },

  // GROUP 6: Defensive Engineering, Incident Response & Governance
  {
    id: 'mod-group6',
    areaId: 'group-6',
    title: 'Defensive Engineering, Incident Response & Governance',
    description: 'Enforce enterprise-grade GPO hardening, analyze multi-source SIEM/SOAR logs, execute SANS/NIST incident response protocols, and audit compliance standards (ISO/NIST).',
    lessons: [
      {
        id: 'les-endpoint-hardening',
        moduleId: 'mod-group6',
        title: 'Endpoint Hardening, Enterprise Security Architecture, & MAC/NAC Protocols',
        duration: 25,
        youtubeVideoId: 'ciNhn38KCzY',
        content: `### 🛡️ Enterprise Endpoint Security & Host Hardening

Endpoint hardening is the systematic process of securing operating systems, applications, and networks by reducing their vulnerable attack surfaces.

---

#### 1. Hardening Strategies and Security Controls
* **Group Policy Objects (GPO)**: Microsoft Active Directory controls used to disable guest accounts, secure LAN configurations, prevent USB storage insertions, and enforce complex password boundaries globally.
* **System Updates and Patching**: Consistently installing software fixes to resolve known vulnerabilities before exploitation tools are deployed.
* **Access Control Lists (ACLs) & Port Blocking**: Closing unrequired logical communication ports at host firewalls (e.g., disabling SMB on Port **445** and RDP on Port **3389**) to block lateral propagation.
* **Jump Servers**: Hardened, monitored intermediate gateway terminals through which engineers must tunnel to execute administrative changes in secure server zones.
* **Traffic Sinkholes**: Redirection systems that capture requests for known malicious domains and route them to safe diagnostic loopbacks.
* **Operating System Hardening and system isolation**: Standardizing safe, restricted containers and virtualization runtimes to isolate high-value user sessions and secure standard terminals.

---

#### 2. Specialized Host Protection Tools
Modern host defense goes far beyond basic file scanners:
* **Antivirus & Antimalware**: Signature-based tools designed to quarantine files matching database footprints.
* **Endpoint Detection & Response (EDR)**: Monitors host memory modifications, behavioral analytics, and system processes in real-time to locate hidden, signature-less activities.
* **Data Loss Prevention (DLP)**: Monitors and stops unauthorized actions that steal sensitive files (e.g., blocking credit card number exports).
* **Host IPS (HIPS) vs. NIPS**: Systems designed to block local execution steps on endpoints (HIPS) vs. inspecting bulk data packets on routers inline (NIPS) or passive sensors (NIDS).

---

#### 3. Network Access Controls and Safe Port Handshakes
* **Media Access Control (MAC) Security**: MAC-filtering tables to verify network card identity tags at local ports.
* **Network Access Control (NAC)**: Intercepts connection requests and audits hardware health (verifies active antivirus states, OS system updates, configuration flags) before granting access to network segments.
* **Wireless Port Security: EAP & PEAP**: Enterprise authentication protocols (Extensible Authentication Protocol and Protected EAP) that establish cryptographic TLS tunnels to validate client Wi-Fi keys safely.

---
### 🎥 Hardening & Enterprise Security References
* **[Active Directory Group Policies (GPO) Explained] (https://www.youtube.com/watch?v=0g4F4mN2K8Q)**
* **[EDR (Endpoint Detection and Response) In-Depth] (https://www.youtube.com/watch?v=n6_z8qGIn_Q)**
* **[NAC (Network Access Control) Basics] (https://www.youtube.com/watch?v=R2jMNoe7vxs)**
* **[Extensible Authentication Protocol: EAP vs PEAP] (https://www.youtube.com/watch?v=Wcoen8zM8B8)**
`,
        quiz: {
          id: 'q-endpoint-hardening',
          title: 'Hardening & Network Admission Quiz',
          questions: [
            createQuestion(
              'qn-ha-q1',
              'Which technology restricts local client access by auditing host health metrics (e.g. verifying active firewall and patch states) before granting physical LAN permissions?',
              ['MAC Filtering', 'Group Policy Objects (GPO)', 'Network Access Control (NAC)', 'Traffic Sinkholes'],
              2,
              'NAC systems act as hardware health gatekeepers, verifying compliance profiles before authorizing active local network connections.'
            ),
            createQuestion(
              'qn-ha-q2',
              'An enterprise administrator needs to disable USB mass storage mounts across 5,000 corporate Windows machines globally. What directory control is best?',
              ['Operating System local registries', 'Group Policy Objects (GPOs)', 'Host Intrusion Prevention Systems (HIPS)', 'Extensible Authentication Protocol (EAP)'],
              1,
              'Group Policy Objects (GPOs) allow Windows administrators to manage, enforce, and distribute system configurations to thousands of Active Directory nodes automatically.'
            )
          ]
        }
      },
      {
        id: 'les-soc-operations',
        moduleId: 'mod-group6',
        title: 'SOC Operations: SIEM Ingestion, Syslog Analytics, & Secure Protocols',
        duration: 25,
        youtubeVideoId: 'RkP6gA6xB7M',
        content: `### 📈 SOC Operations, Logs, & Security Protocol Upgrades

Security Operations Centers (SOCs) manage the real-time auditing, correlation, and response steps of enterprise networks.

---

#### 1. Real-Time Detection Systems: SIEM and SOAR Engines
* **SIEM (Security Information and Event Management)**: Centralizes log streaming from workstations, active directory databases, border firewalls, and application containers. It maps disparate records, and correlates them to warn analysts of active attacks.
* **SOAR (Security Orchestration, Automation, and Response)**: Enhances SIEM setups by writing automated scripts (playbooks) that instantly contain attacks (e.g., blocking an IP at the firewall automatically following an alarm).

---

#### 2. Log Types and Troubleshooting Diagnostics
A core analyst responsibility is querying distinct log types:
* **Event Logs (Windows) & Syslogs (UNIX)**: Documents device states, process execution, service statuses, and login attempts.
* **Firewall Logs**: Logs permitted and dropped packets, tracking ports, IP pairings, and protocol headers.
* **PCAP Records (Packet Captures)**: Extracts the complete byte payloads of network traffic, vital for deep forensics.
* **Netflow Logs**: Summarizes network traffic statistics (source/destination, byte volumes, durations) without recording full packet payloads.

---

#### 3. Secure Protocol Transition Strategy
Cybersecurity engineers actively secure communication pipelines by replacing unencrypted legacy protocols with modern, cryptographic alternatives:
* **FTP (TCP 20/21) ➔ SFTP (TCP 22)**: Replaces clear-text file transmission with SSH-encrypted pipelines.
* **HTTP (TCP 80) ➔ HTTPS (TCP 443)**: Encrypts browser sessions using TLS.
* **Telnet (TCP 23) ➔ SSH (TCP 22)**: Secures terminal command line sessions.
* **LDAP (TCP 389) ➔ LDAPS (TCP 636)**: Encrypts organizational directory queries.
* **SSL ➔ TLS**: Deprecates insecure, obsolete Socket Layers in favor of Transport Layer Security (TLS 1.2/1.3).
* **Additional Secure Protocol Targets**:
  * *IPsec*: Encrypts IP traffic at Layer 3, ideal for secure VPN gateways.
  * *DNSSEC*: Integrates cryptographic signatures to prevent DNS redirect spoofing.
  * *SRTP (Secure Real-Time Transport Protocol)*: Encrypts audio/video data (VoIP).
  * *S/MIME*: Digitally signs and encrypts raw emails.

---
### 🎥 SIEM, Logs, & Protocols References
* **[What is SIEM & SOAR?] (https://www.youtube.com/watch?v=vVAFtL-3O9M)**
* **[Reading Syslogs and Windows Event Logs] (https://www.youtube.com/watch?v=wH-OqTebF7w)**
* **[Introduction to PCAPs and Wireshark] (https://www.youtube.com/watch?v=Ib8U_gZgW60)**
* **[Secure Protocols for Beginners] (https://www.youtube.com/watch?v=lrY9lNfN8tE)**
`,
        quiz: {
          id: 'q-soc-operations',
          title: 'Logs, SIEM, & Security Protocol Quiz',
          questions: [
            createQuestion(
              'qn-so-q1',
              'Which protocol transition secures remote console command line sessions inside target machines, encrypting credential parameters over TCP Port 22?',
              ['FTP to SFTP', 'Telnet to SSH', 'HTTP to HTTPS', 'LDAP to LDAPS'],
              1,
              'Telnet (Port 23) transmits commands and passwords in plain text. SSH (Port 22) uses secure cryptographic handshakes to encrypt sessions.'
            ),
            createQuestion(
              'qn-so-q2',
              'What real-time operations engine integrates automated script execution templates (playbooks) to instantly block anomalous firewalls or isolate infected hardware?',
              ['Passive Intrusion Detection Systems (IDS)', 'Security Orchestration, Automation, and Response (SOAR)', 'Basic Netflow Collector databases', 'MAC Filter Management services'],
              1,
              'SOAR platforms automate operational response playbooks, triggering programmatic defenses like API-driven system lockdowns when incidents are detected.'
            )
          ]
        }
      },
      {
        id: 'les-incident-response',
        moduleId: 'mod-group6',
        title: 'The Six-Step Incident Response Lifecycle & Threat Classification',
        duration: 25,
        youtubeVideoId: 'y-m4rU4_eH_4',
        content: `### 🚨 SANS/NIST Incident Response Process & Threat Metrics

When defensive boundaries fail, organizations must deploy structured incident response workflows to contain and remediate security breaches.

---

#### 1. SANS / NIST Incident Response Process
A six-step tactical lifecycle designed to isolate cyber threats and reconstruct systems systematically:
1. **Preparation**: Building playbooks, baseline configuration maps, and training responders before attacks strike.
2. **Identification**: Ingesting indicators of compromise (IoCs), classifying threat events, and declaring an active security incident.
3. **Containment**: Isolating infected virtual servers, terminating credentials, and disabling routes to block lateral movement.
4. **Eradication**: Removing backdoors, malware files, rootkits, and closing vulnerabilities.
5. **Recovery**: Rebuilding clean operational configurations, verifying services, and routing production client traffic safely.
6. **Lessons Learned**: Writing post-incident postmortem forensic files to refine long-term configurations and prevent future breaches.

---

#### 2. Enterprise Stakeholder Management and Communication
As technical teams fight to recover systems, incident managers must relay operational impacts to external business stakeholders:
* **HR (Human Resources)**: Coordinates employee safety and manages staff internal security policies.
* **Legal and Compliance Counsel**: Reviews operational liability, evaluates regulatory disclosure windows, and manages forensic retention scopes.
* **Public Relations & Management**: Translates technical event parameters to public clients, media channels, and executives.

---

#### 3. Threat Classification Matrix
* **Known vs. Unknown Attacks**: Signatures match known databases vs. unique attacks.
* **Zero-Day Exploits**: Attacks exploiting software vulnerabilities that are completely unknown to the vendor and have no available patches.
* **Advanced Persistent Threats (APTs)**: Highly funded, coordinated nation-state actors executing prolonged cyber attacks targeting long-term system access.

---

#### 4. Volatile Forensics and File Extraction Basics
* **Volitile Data Capture order**: RAM (highly volatile, holds active keys, clear-text files, malware process binaries), temporary pagefiles, storage disks, and network charts.
* **Chain of Custody Record**: Legally-binding, sequential log documenting every forensic analyst who touched or examined evidence, ensuring its validity in a court of law.

---
### 🎥 SANS/NIST Incident Response & Forensic References
* **[The Six-Step Incident Response Process SANS] (https://www.youtube.com/watch?v=y-m4rU4_eH_4)**
* **[Digital Forensics and Memory Analysis Basics] (https://www.youtube.com/watch?v=68xK8Bf0gB0)**
* **[Basics of Threat Intel and APT Groups] (https://www.youtube.com/watch?v=v3vL-uMofv8)**
`,
        quiz: {
          id: 'q-incident-response-lifecycle',
          title: 'Incident Lifecycle & Forensics Class Quiz',
          questions: [
            createQuestion(
              'qn-ir-q1',
              'What SANS/NIST incident response phase coordinates restoring patched database instances, restoring systems from offsite backups, and routing live traffic back online?',
              ['Eradication', 'Containment', 'Recovery', 'Lessons Learned'],
              2,
              'The Recovery phase returns clean system operations back to live production safely and verifies that services are running correctly.'
            ),
            createQuestion(
              'qn-ir-q2',
              'Which digital storage component represents the highest volatile state, requiring instant dump extraction before power cycles during forensic assessments?',
              ['Solid State Disks (SSD)', 'Host Random Access Memory (RAM)', 'System Registry files on storage', 'Archive database files'],
              1,
              'RAM holds active memory configurations, clear-text cryptographic keys, and ephemeral logs that vanish completely when system power is disconnected.'
            )
          ]
        }
      },
      {
        id: 'les-compliance-frameworks',
        moduleId: 'mod-group6',
        title: 'Compliance Architectures: NIST, RMF, ISO, & CIS Controls',
        duration: 25,
        youtubeVideoId: 'O1cRJWYF-g4',
        content: `### 📜 Cybersecurity Compliance Frameworks, Risk Management, & Standards

Global compliance standards provide systematic structures used to govern corporate security positions and audit system defenses.

---

#### 1. Core Industry Security Standards
* **ISO/IEC 27001**: An international, certifiable standard regulating Information Security Management Systems (ISMS). Focuses on administrative process structures and audits.
* **NIST Cybersecurity Framework (CSF)**: Synthesizes core cybersecurity actions into five clear pillars: **Identify, Protect, Detect, Respond, Recover** (recently upgraded to include **Govern**).
* **CIS Critical Security Controls**: A highly focused, Prioritized Actionable List of 18 critical controls targeted at neutralizing the most prevalent real-world cyber threats.
* **NIST RMF (Risk Management Framework)**: A structured federal defense blueprint outlining standard lifecycle parameters for managing and authorizing system risks (NIST SP **800-37**).
* **NIST SP 800-53**: Compiles the specific technical, visual, operational, and physical security control details mandated for protective structures.

---

#### 2. Foundations of Vulnerability Management
* **Vulnerability Scanning**: Continuous automated network mapping (internal/external) using tools like Nessus.
* **CVE and CVSS score maps**: Common Vulnerability and Exposures index mapped with Common Vulnerability Scoring System (CVSS 1.0 to 10.0 criticality scales) to prioritize patching cycles.

---
### 🎥 Cybersecurity Compliance & Governance References
* **[NIST Cybersecurity Framework (CSF) Explained] (https://www.youtube.com/watch?v=fXWnclU_8w8)**
* **[ISO 27001 Introduction and ISMS Metrics] (https://www.youtube.com/watch?v=3WnS4N8K5g4)**
* **[NIST Risk Management Framework (RMF) Steps] (https://www.youtube.com/watch?v=W0t6R7mT2sM)**
* **[Vulnerability Management Lifecycle Basics] (https://www.youtube.com/watch?v=07q-15z71e4)**
`,
        quiz: {
          id: 'q-compliance-frameworks',
          title: 'Operational Rules & Compliance Audit Quiz',
          questions: [
            createQuestion(
              'qn-co-q1',
              'Which globally aligned compliance standard dictates requirements for establishing, maintaining, and certifying an institutional Information Security Management System (ISMS)?',
              ['ISO/IEC 27001', 'NIST SP 800-53', 'CIS Controls List', 'NIST SP 800-37 (RMF)'],
              0,
              'ISO 27001 is the leading international standard dictating rigorous requirements for operational ISMS audits and business certifications.'
            ),
            createQuestion(
              'qn-co-q2',
              'Which specialized NIST publication dictates the 7-step Risk Management Framework (RMF) structured process schema used to authorize and manage information systems?',
              ['NIST SP 800-53', 'NIST SP 800-37', 'NIST SP 800-115', 'NIST SP 800-30'],
              1,
              'NIST SP 800-37 explicitly outlines the official security lifecycle steps of the Risk Management Framework (RMF).'
            )
          ]
        }
      }
    ],
    exam: {
      id: 'ex-group6',
      title: 'Defensive Engineering & Governance Master Exam',
      moduleId: 'mod-group6',
      timeLimit: 20,
      questions: [
        createQuestion(
          'em6-q1',
          'A SOC analyst needs to quarantine a workstation infected with ransomware. Which phase of the SANS/NIST Incident Response Process are they executing?',
          ['Identification', 'Containment', 'Eradication', 'Recovery'],
          1,
          'Quarantining infected systems to stop ransomware from spreading laterally represents the core action of the Containment phase.'
        ),
        createQuestion(
          'em6-q2',
          'Which core directory control utility enables Windows domain administrators to systematically enforce password policies, disable services, and prevent execution profiles globally?',
          ['Network Access Control (NAC)', 'Group Policy Objects (GPO)', 'Unified Threat Management (UTM)', 'Standard Access Lists (ACLs)'],
          1,
          'GPOs provide global policy management across Active Directory, allowing administrators to secure and harden enterprise endpoints.'
        ),
        createQuestion(
          'em6-q3',
          'Which secure protocol standard secures active directory database lookups across enterprise endpoints, encrypting LDAP traffic over TCP Port 636?',
          ['SFTP (Port 22)', 'SSH (Port 22)', 'LDAPS (Port 636)', 'DNSSEC (Port 53)'],
          2,
          'LDAPS (LDAP over TLS/SSL) encrypts directory queries using secure SSL/TLS channels, utilizing default TCP Port 636.'
        ),
        createQuestion(
          'em6-q4',
          'A security administrator configures an external DNS server zone to intercept user search queries for known malware domains and redirect them to a safe local diagnostic server. This is called:',
          ['A Jump Server gateway', 'A DNS Traffic Sinkhole', 'A MAC-filtering firewall ruleset', 'A local Host IPS constraint'],
          1,
          'DNS Sinkholing forces malicious outbound lookups to resolve to safe, isolated diagnostic IPs, neutralizing potential command & control redirects.'
        ),
        createQuestion(
          'em6-q5',
          'According to forensics and legal practices, what is the primary purpose of maintaining a continuous Chain of Custody log for digital evidence seized during an investigation?',
          ['To guarantee the files are converted to compatible PDF structures', 'To authenticate evidence integrity and secure court admissibility by accounting for every individual who accessed it', 'To coordinate PR announcements to media outlets', 'To satisfy NIST 800-53 administrative controls'],
          1,
          'The Chain of Custody proves that evidence has not been tampered with or modified from the moment of capture, making it advisable in legal proceedings.'
        ),
        createQuestion(
          'em6-q6',
          'An enterprise deployment replaces unsecured clear-text FTP transfers with a secure pipeline encapsulating data in SSH tunnels over TCP Port 22. What protocol is deployed?',
          ['FTPS', 'HTTPS', 'SFTP', 'SRTP'],
          2,
          'SFTP (SSH File Transfer Protocol) runs natively over secure SSH connections (TCP Port 22) to protect file transfers.'
        )
      ]
    }
  },

  // GROUP 7: Tooling, Practical Labs & Certifications
  {
    id: 'mod-group7',
    areaId: 'group-7',
    title: 'Tooling, Practical Labs & Certifications',
    description: 'Master command-line network diagnostics, forensics tools, sandbox threat analysis, hacking Linux environments, active CTFs, and primary certification maps.',
    lessons: [
      {
        id: 'les-network-diagnostics',
        moduleId: 'mod-group7',
        title: 'Network Command Line Diagnostics & Linux Native File Utilities',
        duration: 30,
        youtubeVideoId: '5WfiTHiU4x8',
        content: `### 🛠️ Network Command-Line Diagnostics & Linux File Utilities

A competent security analyst must navigate systems via console, troubleshoot layer connections, map ports, inspect socket bindings, and parse continuous log outputs.

---

#### 1. Core Windows/Linux Network Diagnostics
* **\`ipconfig\` / \`ip addr\`**: Displays local MAC interface parameters, IPv4 addresses, subnet masks, and default gateways.
* **\`ping\`**: Sends ICMP Echo Requests to verify Layer-3 path endpoints and log latency boundaries or packet drop characteristics.
* **\`dig\` & \`nslookup\`**: Queries DNS name servers to verify zone domain records (A, AAAA, MX, TXT, CNAME) and troubleshoot network resolutions.
* **\`route\`**: Evaluates and modifies host system IP routing tables to direct IP traffic to gateways.
* **\`nmap\`**: Advanced network map scanner used for host discovery, port scanning, service version enumeration, and vulnerability analysis.
* **\`netstat\`**: Unveils active TCP/UDP connections, listening socket states, routing tables, and matching process IDs (\`-ano\` on Windows, \`-tulnp\` on Linux).
* **\`tcpdump\`**: Essential enterprise CLI command-line packet sniffer capturing raw ethernet frames and data packets directly on interface adapters.
* **\`arp\`**: Prints the Address Resolution Protocol cache mapping physical Layer-2 MAC addresses to logical Layer-3 IP destinations.
* **\`tracert\` (Windows) / \`traceroute\` (Linux)**: Tracks the physical router path and hops to target destinations by triggering incrementing Time-to-Live (TTL) responses.
* **\`hping\` / \`hping3\`**: Powerful utility capable of constructing customized TCP/UDP/ICMP packets for manual firewall testing and crafting.
* **\`iptables\`**: Securely configures Linux-based host packet filtration, firewall rulesets, and NAT mapping.
* **\`curl\`**: Performs versatile REST API queries, web testing, and downloads files securely over protocols (HTTP/S, FTP, etc.).

---

#### 2. Linux System Administration & File Utilities
When parsing dense system configurations, system logs, or security telemetry files, these Linux native tools are vital:
* **\`cat\`**: Displays or concatenates raw text files to the terminal output.
* **\`dd\`**: Securely duplicates storage blocks or partitions. Frequently used in digital forensics to create bit-by-bit identical forensic disk images.
* **\`tail\` / \`head\`**: Inspects the final/starting rows of log files respectively. Use \`tail -f\` to view log events screaming in real-time.
* **\`grep\`**: Employs normal or regular expressions to crawl text streams and isolate specific Indicators of Compromise (IoCs) or warnings.

---
### 🎥 Network Command Diagnostics References
* **[Networking Command Line Tools Explained] (https://www.youtube.com/watch?v=5WfiTHiU4x8)**
* **[Linux Networking Commands Deep Dive] (https://www.youtube.com/watch?v=ZtqBQ68cfJc)**
`,
        quiz: {
          id: 'q-network-diagnostics',
          title: 'Network Diagnostics Quiz',
          questions: [
            createQuestion(
              'qn-nd-q1',
              'Which native console command prints a list of all active TCP/UDP socket lines, their connection states, and corresponding process identifiers (PIDs)?',
              ['arp -a', 'ping -t', 'netstat', 'nslookup'],
              2,
              'netstat (with options like -ano or -tulnp) reveals all active network connections, listening ports, and the hosting system process IDs.'
            ),
            createQuestion(
              'qn-nd-q2',
              'A digital forensics analyst needs to construct bit-for-bit exact copies of an compromised hard drive. Which native Linux utility performs this block-level duplication?',
              ['cat', 'dd', 'grep', 'tail'],
              1,
              'The dd (disk duplicator or data duplicator) tool writes bit-by-bit physical disk clones, which is crucial for preserving evidentiary integrity.'
            )
          ]
        }
      },
      {
        id: 'les-forensics-threat-platforms',
        moduleId: 'mod-group7',
        title: 'Forensic Extraction, Interactive Sandboxing, & OSINT Security Distros',
        duration: 30,
        youtubeVideoId: 'TkCSr30UojM',
        content: `### 🔍 Digital Forensics, Threat Intelligence Platforms, & Operating Systems

Investigative engineers require pristine forensic platforms to parse packet streams, analyze volatile data states, and execute dangerous binaries inside secure sandboxes.

---

#### 1. Digital Forensics & Forensic Imaging Toolkit
* **Wireshark (PCAP)**: Premier visual graphical analyzer used to dissect packet headers, investigate frames, trace TCP streams, and locate clear-text security violations.
* **winhex**: Sophisticated hexadecimal editor used for low-level data recovery, file verification, and disk sector visualization.
* **Autopsy**: Comprehensive open-source digital forensics platform that simplifies the analysis of drive sectors, metadata extraction, registry values, and web histories.
* **Memdump / Volatility**: Tools that capture volatile active RAM images to isolate active malware memory binaries, local keys, and active session cookies.
* **FTK Imager**: Legally-acceptable forensic workspace that constructs bitstream matches of physical drives under write-blocked standards.

---

#### 2. Open-Source Intelligence (OSINT) & Multi-Engine Sandboxing
Before opening suspicious email attachments or executable web files inside enterprise boundaries, analysts route payloads to isolated sandboxing services:
* **VirusTotal**: Scans files and URLs through over 70 distinct antivirus engine databases to scan for malicious matches.
* **urlscan.io / urlvoid**: Automates browser rendering processes to audit web domains, tracking redirects, domain age, and active scripts.
* **any.run / Joe Sandbox**: Employs interactive or static sandbox virtualizations to detonate files, tracing process calls, registry updates, and callbacks in real-time.
* **Honeypots**: Intentional decoy devices populated with simulated databases and left exposed on networks to draw and study attacker operations without risking core systems.
* **WHOIS**: Queries registration records, documenting registrar details, server authorities, and administrative names.

---

#### 3. Standardized Security Adaptations (OS Distros)
To streamline testing and diagnostics, security analysts utilize specialized operating system distributions:
* **Kali Linux**: Linux kernel pre-packaged with hundreds of specialized offensive penetration testing, wireless attacking, reverse engineering, and password cracking scripts.
* **ParrotOS**: Lightweight, security-hardened Debian alternative featuring built-in encryption, development environments, and anonymous routing options.

---
### 🎥 Forensics & Threat OSINT References
* **[Wireshark Full Course: Packet Analysis] (https://www.youtube.com/watch?v=TkCSr30UojM)**
* **[Digital Forensics and Incident Response Tools] (https://www.youtube.com/watch?v=7m8jA5J5y3k)**
* **[Memory Forensics and Volatility Basics] (https://www.youtube.com/watch?v=1S0aBV-Waeo)**
`,
        quiz: {
          id: 'q-forensics-threat-platforms',
          title: 'Forensics & Sandbox Quiz',
          questions: [
            createQuestion(
              'qn-ft-q1',
              'Which threat examination platform provides interactive virtualized sandboxing, allowing an analyst to safely execute malicious software and watch process execution trees live?',
              ['VirusTotal', 'WHOIS lookup', 'any.run', 'wireshark'],
              2,
              'any.run is an interactive sandbox that visualizes complete execution steps, network calls, and file modifications in real-time.'
            ),
            createQuestion(
              'qn-ft-q2',
              'What standardized workspace layout is globally utilized by forensic teams to generate exact, hash-verifiable digital clones of target data storage drives?',
              ['winhex editor', 'Autopsy user suite', 'FTK Imager', 'Kali Linux distro'],
              2,
              'FTK Imager generates exact physical disk images (such as .E01 or raw files) and records MD5/SHA hashes to prove zero alteration occurred.'
            )
          ]
        }
      },
      {
        id: 'les-ctfs-roe',
        moduleId: 'mod-group7',
        title: 'Penetration Testing ROE & Hands-on CTF Ecosystems',
        duration: 30,
        youtubeVideoId: '2j9k5m7n1A0',
        content: `### 🎮 Defensive Boundaries, Rules of Engagement (RoE), & CTF Arenas

To validate theoretical knowledge, security practitioners train in gamified Capture the Flag (CTF) environments and model actual penetrations under rigorous regulatory scopes.

---

#### 1. Penetration Testing Rules of Engagement (RoE)
An offense engagement is never a "free-for-all". A legally-enforced **Rules of Engagement** document establishes absolute operational terms:
* **Scope Definition**: Specifies exact IP ranges, hostnames, subnets, physical locations, and databases that are open to investigation.
* **Attack Parameters**: Lists prohibited techniques (e.g., forbidding Denial of Service (DoS) attacks or social engineering phishing).
* **Scheduling and Contacts**: Defines precise testing windows (days/hours) and emergency systems engineer contacts to halt attacks.
* **Compliance Boundaries**: Establishes data-handling protocols, evidence storage, and liability exemptions.

---

#### 2. Practical CTF (Capture the Flag) Frameworks & Ranges
Dynamic lab networks let students exploit and harden systems safely, looking for custom text codes (flags) hidden inside directory structures:
* **TryHackMe**: Guided, walkthrough-heavy modules ideal for learning system fundamentals, tool command maps, and secure network baselines.
* **Hack The Box (HTB)**: Advanced, active black-box virtualization cages testing realistic operational steps and vulnerability execution patterns.
* **VulnHub**: Precompiled virtual machine system configurations that students download to test local virtual networks offline with hypervisors.
* **picoCTF**: Structured, student-friendly platform with lightweight, high-value web, cryptography, and reverse engineering challenges.
* **SANS Holiday Hack Challenge**: Seasonal gamified enterprise playground containing highly detailed narrative paths and modern security scenarios.

---
### 🎥 Cyber Ranges & Practical Security References
* **[Introduction to Capture the Flag (CTF) Mechanics] (https://www.youtube.com/watch?v=2j9k5m7n1A0)**
* **[Getting Started in Hack The Box] (https://www.youtube.com/watch?v=3Kq1M8r9Q2A)**
`,
        quiz: {
          id: 'q-ctfs-roe',
          title: 'Scopes & Target Platforms Quiz',
          questions: [
            createQuestion(
              'qn-ct-q1',
              'Which document dictates exactly what subnets can be tested, what tools can be executed, and what hours the testers can run scans during a professional security audit?',
              ['NIST Risk mitigation blueprint', 'The Rules of Engagement (RoE)', 'CompTIA Certification syllabus', 'A standard CSV asset inventory list'],
              1,
              'The Rules of Engagement (RoE) represents the legally binding agreement outlining precise engagement scopes, authorized utilities, and emergency protocols.'
            ),
            createQuestion(
              'qn-ct-q2',
              'Which CTF range specializes in providing prebuilt offline virtual machines that you download and load into virtual hypervisors (like VirtualBox) to practice intrusion testing local servers?',
              ['TryHackMe', 'Hack The Box', 'VulnHub', 'picoCTF'],
              2,
              'VulnHub provides complete standalone offline virtual machine configurations that security analysts can download and test locally without an internet connection.'
            )
          ]
        }
      },
      {
        id: 'les-industry-credentials',
        moduleId: 'mod-group7',
        title: 'Professional Security Pathways: Framework Certifications Roadmap',
        duration: 30,
        youtubeVideoId: 'inWWhr5tnEA',
        content: `### 🎓 Navigating Professional Cybersecurity Certification Pipelines

A key part of establishing credibility and career progression in security operations is navigating standard professional certifications.

---

#### 1. Foundational Security Track Certifications
* **CompTIA A+**: Validates hardware disassembly, operating structures, client configurations, and core technician troubleshooting.
* **CompTIA Security+**: Industry-standard entry benchmark verifying broad competence in active cryptography, operational risk, system hardening, and architecture.
* **Cisco CCNA**: Validates complete physical core router and switch understanding, subnet math, routing metrics, and enterprise network design.
* **CompTIA Linux+**: Certifies system command proficiency, path structure management, permissions administration, and systemd maintenance on Unix-like targets.

---

#### 2. Specialized Offensive & Defensive Engineering
* **CEH (Certified Ethical Hacker)**: Focuses on reconnaissance mechanisms, hacking program lists, and common exploit signatures.
* **OSCP (Offensive Security Certified Professional)**: 24-hour practical penetration challenge demonstrating active system enumeration, manual exploit writing, and privilege escalation in a hostile, monitored lab.

---

#### 3. Advanced Strategy & Governance Credentials
* **CISM (Certified Information Security Manager)**: Geared towards security leaders, directing business continuity, compliance regulations, governance, and asset risk analysis.
* **CISSP (Certified Information Systems Security Professional)**: Globally prominent senior standard testing 8 domains of security engineering, physical infrastructure, systems administration, and organizational compliance.

---
### 🎥 Certification Paths & Study Guides
* **[Cybersecurity Certification Roadmap & Strategy] (https://www.youtube.com/watch?v=inWWhr5tnEA)**
`,
        quiz: {
          id: 'q-industry-credentials',
          title: 'Credentials & Timelines Quiz',
          questions: [
            createQuestion(
              'qn-ic-q1',
              'Which standard junior-to-mid security validation certifies baseline competency across cryptographic structures, network hardening controls, and security operation tasks?',
              ['CompTIA Security+', 'CCNA Security', 'CISSP audit registration', 'CISM leadership credentials'],
              0,
              'CompTIA Security+ is universally recognized as the premier entry-to-mid security certificate verifying basic operational security knowledge.'
            ),
            createQuestion(
              'qn-ic-q2',
              'Which certification requires candidates to analyze 8 broad architectural domains and undergoes a rigorous credentialing verification of 5 years of verified security experience?',
              ['CompTIA Security+', 'Cisco CCNA', 'CISSP', 'CEH'],
              2,
              'The CISSP is a senior architecture standard requiring candidates to pass an adaptive exam and prove at least 5 years of professional workspace experience.'
            )
          ]
        }
      }
    ],
    exam: {
      id: 'ex-group7',
      title: 'Practical Tooling & Industry Credentials Master Exam',
      moduleId: 'mod-group7',
      timeLimit: 20,
      questions: [
        createQuestion(
          'em7-q1',
          'A cybersecurity engineer needs to monitor an interface card natively on a server terminal to capture continuous web and system packets. Which console tool is best suited?',
          ['netstat', 'tcpdump', 'nslookup', 'arp'],
          1,
          'tcpdump is a CLI packet processor that intercepts and logs raw Ethernet/IP frames of system interfaces.'
        ),
        createQuestion(
          'em7-q2',
          'Which document is legally required before starting security assessments, defining authorized scopes, timelines, contact addresses, and target directories?',
          ['NIST Risk mitigation blueprint', 'The Rules of Engagement (RoE)', 'CompTIA Certification syllabus', 'CIS Critical audit control checklist'],
          1,
          'The Rules of Engagement (RoE) is the contract defining authorized boundaries, allowed tools, and rules of engagement.'
        ),
        createQuestion(
          'em7-q3',
          'A system engineer wants to quickly scan a target network subnet to map open ports and identify running service versions. Which utility is best for this task?',
          ['arp', 'nmap', 'nslookup', 'route'],
          1,
          'Nmap scans addresses to locate active ports, identify operating systems, and enumerate vulnerability indicators.'
        ),
        createQuestion(
          'em7-q4',
          'A digital forensics analyst discovers a suspect server has been powered down, causing them to lose key indicators of compromise. What volatile storage contains this ephemeral data?',
          ['Solid State drive partitioning', 'Host Random Access Memory (RAM)', 'Mechanical storage arrays', 'Optical recovery archives'],
          1,
          'RAM holds active configuration logs, clear-text encryption keys, and volatile session data that erase completely upon power loss.'
        ),
        createQuestion(
          'em7-q5',
          'Which open-source platform is designed to act as an intentional vulnerable decoy database to trap attackers and analyze active command patterns?',
          ['A dynamic Sandbox', 'An enterprise Honeypot', 'A GPO rule', 'A Jump Server gateway'],
          1,
          'Honeypots are decoy networks/databases designed to attract attackers so operational teams can observe threat actor methods.'
        ),
        createQuestion(
          'em7-q6',
          'An IT professional is looking to progress into advanced advisory security positions. Which globally recognized standard calls for at least 5 years of domain experience and tests 8 security domains?',
          ['CompTIA Security+', 'CEH multiple-choice exam', 'CISSP', 'CCNA routing certification'],
          2,
          'The CISSP (Certified Information Systems Security Professional) is widely considered the industry benchmark for senior security design and governance.'
        )
      ]
    }
  }
];
