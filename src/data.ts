import { RoadmapArea, Module, Lesson, Quiz, Exam, QuizQuestion } from './types';
import {
  hardwareQuestions,
  osPlatformsQuestions,
  osCliCrudQuestions,
  permissionsQuestions,
  virtualizationQuestions,
  group1MasterExamQuestions
} from './data/group1Questions';
import {
  netBasicsQuestions,
  osiModelQuestions,
  subnettingQuestions,
  protocolsQuestions,
  group2MasterExamQuestions
} from './data/group2Questions';
import {
  ciaTriadQuestions,
  authMethodologiesQuestions,
  operationsMetricsQuestions,
  analyticalFrameworksQuestions,
  group3MasterExamQuestions
} from './data/group3Questions';
import {
  cryptographyBasicsQuestions,
  vulnerabilitiesExploitsQuestions,
  owaspWebSecurityQuestions,
  socialEngineeringQuestions,
  group4MasterExamQuestions
} from './data/group4Questions';
import {
  programmingFundamentalsQuestions,
  cloudSecurityModelQuestions,
  group5MasterExamQuestions
} from './data/group5Questions';
import {
  endpointHardeningQuestions,
  socOperationsQuestions,
  incidentResponseQuestions,
  complianceFrameworksQuestions,
  group6MasterExamQuestions
} from './data/group6Questions';
import {
  networkDiagnosticsQuestions,
  forensicsThreatPlatformsQuestions,
  ctfsRoeQuestions,
  industryCredentialsQuestions,
  group7MasterExamQuestions
} from './data/group7Questions';

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
           questions: hardwareQuestions
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
           questions: osPlatformsQuestions
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
           questions: osCliCrudQuestions
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
           questions: permissionsQuestions
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
           questions: virtualizationQuestions
         }
      }
    ],
    exam: {
      id: 'ex-group1',
      title: 'Fundamental IT & OS Master Exam',
      moduleId: 'mod-group1',
      timeLimit: 90,
      questions: group1MasterExamQuestions
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
          questions: netBasicsQuestions
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
          questions: osiModelQuestions
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
          questions: subnettingQuestions
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
          questions: protocolsQuestions
        }
      }
    ],
    exam: {
      id: 'ex-network-security',
      title: 'Networking & Infrastructure Master Exam',
      moduleId: 'mod-group2',
      timeLimit: 90,
      questions: group2MasterExamQuestions
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
          questions: ciaTriadQuestions
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
          questions: authMethodologiesQuestions
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
          questions: operationsMetricsQuestions
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
          questions: analyticalFrameworksQuestions
        }
      }
    ],
    exam: {
      id: 'ex-sec-risk',
      title: 'Security & Hacking Concepts Master Exam',
      moduleId: 'mod-group3',
      timeLimit: 90,
      questions: group3MasterExamQuestions
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
          questions: cryptographyBasicsQuestions
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
          questions: vulnerabilitiesExploitsQuestions
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
          questions: owaspWebSecurityQuestions
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
          questions: socialEngineeringQuestions
        }
      }
    ],
    exam: {
      id: 'ex-cryptography',
      title: 'Cryptography & Attack Matrix Master Exam',
      moduleId: 'mod-group4',
      timeLimit: 20,
      questions: group4MasterExamQuestions
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
          questions: programmingFundamentalsQuestions
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
          questions: cloudSecurityModelQuestions
        }
      }
    ],
    exam: {
      id: 'ex-group5',
      title: 'Programming & Cloud Security Master Exam',
      moduleId: 'mod-group5',
      timeLimit: 20,
      questions: group5MasterExamQuestions
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
          questions: endpointHardeningQuestions
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
          questions: socOperationsQuestions
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
          questions: incidentResponseQuestions
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
          questions: complianceFrameworksQuestions
        }
      }
    ],
    exam: {
      id: 'ex-group6',
      title: 'Defensive Engineering & Governance Master Exam',
      moduleId: 'mod-group6',
      timeLimit: 90,
      questions: group6MasterExamQuestions
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
          questions: networkDiagnosticsQuestions
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
          questions: forensicsThreatPlatformsQuestions
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
          questions: ctfsRoeQuestions
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
          questions: industryCredentialsQuestions
        }
      }
    ],
    exam: {
      id: 'ex-group7',
      title: 'Practical Tooling & Industry Credentials Master Exam',
      moduleId: 'mod-group7',
      timeLimit: 120,
      questions: group7MasterExamQuestions
    }
  }
];
