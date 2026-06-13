import { MATH_ROADMAP_AREAS, MATH_MODULES } from './data/mathData';
import { HACKING_ROADMAP_AREAS, HACKING_MODULES } from './data/hackingData';
import { FULL_STACK_ROADMAP_AREAS, FULL_STACK_MODULES } from './data/fullStackData';
import { DATA_ENGINEERING_ROADMAP_AREAS, DATA_ENGINEERING_MODULES } from './data/dataEngineeringData';
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
import {
  project1Quiz,
  project2Quiz,
  project3Quiz,
  project4Quiz,
  project5Quiz,
  project6Quiz,
  project7Quiz,
  project8Quiz,
  project9Quiz,
  project10Quiz,
  group8MasterExamQuestions
} from './data/group8Questions';

// Define our 7 Group-based Roadmap Areas
const BASE_ROADMAP_AREAS: RoadmapArea[] = [
  {
    id: 'group-1',
    name: 'Fundamental IT & OS',
    description: 'Master computer hardware components, connectivity interfaces, Windows & Linux setups, absolute/relative permissions, and host hypervisors.',
    icon: 'Monitor',
    color: 'blue',
    courseGroup: 'cyber_security'
  },
  {
    id: 'group-2',
    name: 'Networking & Infrastructure',
    description: 'Understand the standard 7-layer OSI model, IP CIDR subnetting schemes, client DHCP/DNS, routers/switches, and secure encrypted communications.',
    icon: 'Network',
    color: 'indigo',
    courseGroup: 'cyber_security'
  },
  {
    id: 'group-3',
    name: 'Security & Hacking Concepts',
    description: 'Explore the CIA Triad confidentiality, single sign-on authentication, team paradigms, and analytical threat-tracking frameworks.',
    icon: 'ShieldCheck',
    color: 'amber',
    courseGroup: 'cyber_security'
  },
  {
    id: 'group-4',
    name: 'Cryptography & Attack Matrix',
    description: 'Deep dive into hashing salts, symmetric block ciphers, OWASP vulnerabilities, privilege escalation, social engineering, and network-based exploits.',
    icon: 'Key',
    color: 'rose',
    courseGroup: 'cyber_security'
  },
  {
    id: 'group-5',
    name: 'Programming & Cloud Sys',
    description: 'Learn system-admin scripting languages, shared cloud responsibility matrices, capital/operational expenditure shifts, and container deployment flows.',
    icon: 'Cpu',
    color: 'violet',
    courseGroup: 'cyber_security'
  },
  {
    id: 'group-6',
    name: 'Defensive Engineering & IR',
    description: 'Enforce tactical endpoint hardening, SIEM log normalization engines, the standard 6-step incident response, and ISO/NIST certification frameworks.',
    icon: 'Activity',
    color: 'emerald',
    courseGroup: 'cyber_security'
  },
  {
    id: 'group-7',
    name: 'Practical Tooling & Certs',
    description: 'Operate active command-line network diagnostics, forensics PCAP parsers, OSINT intelligence, and map your industry certification career roadmap.',
    icon: 'Terminal',
    color: 'cyan',
    courseGroup: 'cyber_security'
  },
  {
    id: 'group-8',
    name: 'Dissertations & Capstone Projects',
    description: 'Acquire practical security skills with 10 real-world final year style Capstone Projects covering network topology, forensics, defense systems, and vulnerability scans.',
    icon: 'GraduationCap',
    color: 'fuchsia',
    courseGroup: 'cyber_security'
  }
];

export const ROADMAP_AREAS: RoadmapArea[] = [
  ...MATH_ROADMAP_AREAS,
  ...BASE_ROADMAP_AREAS,
  ...HACKING_ROADMAP_AREAS,
  ...FULL_STACK_ROADMAP_AREAS,
  ...DATA_ENGINEERING_ROADMAP_AREAS
];

// Helper to make quiz questions
const createQuestion = (id: string, text: string, options: string[], correctAnswerIndex: number, explanation: string): QuizQuestion => ({
  id, text, options, correctAnswerIndex, explanation
});

const BASE_MODULES: Module[] = [
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
         content: `### Lecture Notes: The Foundations of Hardware Architecture and Systematic Troubleshooting

Welcome to my classroom. Today, we begin at the absolute level zero: the physical machinery of the computer. In my years of teaching, I have observed that many aspiring cybersecurity and IT students jump straight into software, treating the hardware beneath it as a magic box. However, a true professional understands that the physical hardware dictates what software can and cannot do. Today, we will demystify this engine.

---

#### 1. Hardware Cores and Firmware Flags

To appreciate how computers operate, we must examine the motherboard. The motherboard is the central highway system, a printed circuit board that connects all physical components of our system. Let us look at the most critical elements:

* **Central Processing Unit (CPU)**: This is the primary calculator of the system. Think of it as the brain of your computer. When we begin creating virtual labs later, your CPU will need special instruction extensions to allow multiple operating systems to run concurrently. For Intel, this extension is called VT-x, and for AMD, it is AMD-V. In my labs, the most common reason a student cannot load their virtual laboratory is that they forgot to enable these extensions in their motherboard BIOS or UEFI firmware. Always remember to check this setting first.
* **Thermal Throttling**: Every calculator generates heat when working hard. If your CPU gets too hot (typically due to dynamic fan failure or dried thermal paste), it performs Thermal Throttling. This is a built-in safety measure where the motherboard forces the CPU to drop its clock speed drastically to avoid physical melting.
* **Random Access Memory (RAM)**: RAM is the system's volatile, high-speed workspace. It holds the active, running parts of our operating systems and applications. Think of it as your desktop workspace. It is fast, but volatile—meaning when you turn off the power, everything stored in RAM is permanently wiped.
* **Error-Correcting Code (ECC) RAM**: In mission-critical enterprise systems, memory corruptions can cause catastrophic server crashes. ECC RAM calculates parity checksums to automatically detect and correct single-bit memory corruptions in real-time, protecting our servers from the destructive Blue Screen of Death.
* **High-Speed Storage (NVMe, SATA, and Wear Leveling)**: Unlike RAM, storage is non-volatile; it holds data even with the power cut. NVMe is a modern, incredibly fast interface that communicates directly with the CPU over high-speed PCI Express (PCIe) lanes, bypassing older bottlenecks. SATA, meanwhile, is an older, slower interface using dedicated controller cables. Solid-state disks (SSDs) wear out with use; therefore, their internal controllers use Wear Leveling algorithms to distribute data writes across cells evenly, extending the drive's life. They also use S.M.A.R.T. technology to monitor their own health metrics, warning you before a drive dies.
* **Trusted Platform Module (TPM)**: This is a tiny, hardware-isolated cryptographic microchip soldered onto your motherboard. It acts as a secure vault, generating cryptographic keys that are securely sealed to your hardware. This is what systems like BitLocker use to encrypt hard drives, preventing a physical thief from extracting your data.

---

#### 2. Redundant Arrays of Disk Storage (RAID)

We do not trust single physical drives for important organizational data. Instead, we bundle multiple drives into Redundant Arrays of Independent Disks (RAID) to manage speed and safeguard data stability:

* **RAID 0 (Disk Striping)**: Splits your data blocks evenly across two or more physical drives. This gives incredibly fast read and write speeds, but it offers exactly zero fault tolerance. If you lose one drive, your entire storage volume is permanently destroyed. Think of it as a double-lane bridge where if either lane collapses, the whole bridge is closed.
* **RAID 1 (Disk Mirroring)**: Clones your data identically to two physical drives. This is highly redundant; you can lose half of your drives and still keep your files. However, you pay a steep price: fifty percent of your capacity is lost to structural redundancy.
* **RAID 5 (Striping with Distributed Parity)**: Combines three or more physical drives. It stripes data blocks but also distributes mathematical check bytes called parity across the drives. If one drive fails, the parity blocks on the remaining drives can reconstruct the lost data instantly when you install a replacement. It provides a balanced combination of speed, space, and safety.
* **RAID 10 (Stripe of Mirrors / RAID 1+0)**: Requires at least four physical drives. It mirrors your drives in pairs (RAID 1) and then stripes across those mirrored pairs (RAID 0). This is the gold standard for high-performance enterprise databases, offering both maximum speed and outstanding resilience.

---

#### 3. Systematic Troubleshooting Methodology

When systems fail, panic and chaotic guessing are your worst enemies. Over my career, I have coached hundreds of students to adopt a structured, six-step approach to diagnostic cycles:

1. **Identify the Problem and Symptoms**: Ask users questions, read event logs, check hardware beep codes, and reproduce the failure in a safe sandbox.
2. **Establish a Theory of Probable Cause**: Brainstorm the most likely, simple causes first. I highly recommend Split-Half Troubleshooting: split the suspected path in half and test the signal at the midpoint. If the signal is healthy at the middle, the fault lies downstream; if not, it lies upstream. This immediately eliminates fifty percent of your variables.
3. **Test the Theory**: Run a targeted test to see if your guess was right. For instance, boot the unit from a healthy recovery USB; if it loads, you prove that the motherboard is fine and the issue is likely a corrupted storage partition.
4. **Establish a Plan of Action and Implement the Solution**: Design a precise correction plan, seek appropriate permissions, and apply the fix.
5. **Verify Full System Functionality**: Turn the system back on, load standard programs, and put in place preventive parameters (such as configuring active surge protection or instructing your users) so it does not happen again.
6. **Document Findings, Actions, and Outcomes**: Write everything down. Your documentation will be the life-saving playbook for the next student or colleague who runs into this exact failure.

---

#### 4. Physical Threats and Environmental Hazards

A secure system must also be safe from physical manipulation and power grid anomalies:

* **BadUSB Attacks**: Imagine finding an ordinary-looking USB flash drive in a company parking lot. If plugged in, a threat called BadUSB takes advantage of a critical firmware flaw. The USB controller chip reprogrammed by an attacker tells your operating system that it is actually a human interface device (like a keyboard). The machine trusts it implicitly, and the device automatically types malicious system command sequences to install malware in seconds.
* **Power Grid Failures**: Computations require stable electricity. A Blackout is a complete loss of power. A Power Surge is a sudden spike of dangerous high voltage, which we prevent with surge protectors. A Brownout (Voltage Sag) is a temporary drop in line voltage. This starves computer power supplies of energy, triggering sudden server reboots. To keep our clean systems safe, we connect them to robust Uninterruptible Power Supplies (UPS).

---

#### 5. Academic Milestones and Scholar Award

To celebrate your completion of this first core step in hardware, I hereby award you the **Silicon Foundation Scholar Award**. Let this academic milestone inspire confidence as we leave physical hardware and step into the logical world of operating systems.

---

### Curated Study Resources
* **[Professor Messer's CompTIA A+ Hardware Course](https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv)** — Comprehensive hardware training.
* **[How RAID Configurations Work](https://www.youtube.com/watch?v=y79z8Vv8nO8)** — Visualization of RAID arrays.
* **[The BadUSB Threat Vector Explained](https://www.youtube.com/watch?v=S2vIn_G7Otc)** — Live demonstration of keyboard emulators.
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
         content: `### Lecture Notes: Operating Systems Architecture, Windows, and Linux Platform Administration

Now that we have covered physical hardware, we must explore the logical layer of software that coordinates these structures: the Operating System. In my classroom, I like to think of the operating system as the ultimate administrative manager, deciding exactly which software programs get to use the hardware, and how we protect systems from architectural failures and security breaches. Let us dive deep together.

---

#### 1. Hardware Privilege Shields: Processor Protection Rings

Modern processors implement a physical form of class system to maintain hardware security. This is referred to as the x86 Protection Ring Architecture, which splits system executions into levels of privilege:

* **Ring 0 (Kernel Mode)**: This is the highest level of privilege. The core engine of your operating system, known as the kernel, executes here along with system device drivers and memory managers. Processes running in Ring 0 have absolute, unrestricted access to your physical hardware. In my lectures, I compare this to a building's master physical key card.
* **Ring 3 (User Space)**: This is the restricted sandbox where standard user applications, tools, web browsers, and document editors run. Programs here are strictly forbidden from modifying physical hardware registers directly. To compute something on disk or access a network, they must make a formal request to the hardware through a security gatekeeper called a System Call (syscall).

---

#### 2. Kernel Design Paradigms

Operating system creators generally follow one of two competing philosophies when designing their system's architecture:

* **Monolithic Kernels**: Linux and Windows NT are prime examples. Monolithic designs bundle all key components—such as task schedulers, memory managers, and device drivers—into one massive executable file running entirely inside Ring 0. This architecture is extremely fast because there is very little communication overhead. However, it is vulnerable: a minor bug or partition corruption in a single third-party hardware driver can crash the entire operating system, resulting in a system panic or Blue Screen of Death.
* **Microkernels**: This architecture follows a philosophy of minimalism. It places only the absolute bare minimum components in Ring 0 space (such as thread scheduling and physical memory allocations). It runs device drivers, filesystems, and user interfaces as isolated services inside user-space (Ring 3). If one driver crashes, the system simply restarts that isolated service without interrupting the rest of the operational platform. The recovery is seamless, though it can suffer from minor performance impacts.

---

#### 3. Linux File System Hierarchy

For Linux administrations, directories are organized logically under a single root directory represented by a single forward slash. Some of these directories are particularly critical for developers and security analysts:

* **The root path**: Written as a single forward slash, this represents the top-most level of the directory hierarchy. Everything on the system is a file, branching from here.
* **The etc directory**: In Linux, almost all system-wide, static configurations are stored as simple, human-readable ASCII flat-text files within the etc directory.
* **The var directory**: This directory holds variable files whose size changes constantly, such as user mail queues, database buffers, and system log records in the var log folder.
* **The usr directory**: Pronounced user system resources, this path houses user utilities, shared binaries, and libraries. Note that standard executable bin scripts live in usr bin.
* **The proc directory**: This is a virtual, in-memory directory. It takes up zero physical space on your storage disk. It is a live window directly into the active Linux kernel memory space, mapping running processes (under their unique Process IDs, or PIDs) and current CPU attributes.

---

#### 4. Shared Dynamic Libraries and Compilation

To save storage and memory, operating systems use shared libraries, letting multiple running apps share the same support code:

* **Windows Shared Libraries**: Windows compiled utilities run shared code blocks called Dynamic Link Libraries (.dll files).
* **Linux Shared Libraries**: Linux systems use similar pre-compiled modules called Shared Objects (.so files).
* **Compilation from Source**: When we download open-source applications, they must often be compiled manually. The standard terminal sequence is:
  1. **Configure script**: Examines your local environment to ensure all required shared libraries and compiler tools are present, then generates a custom configuration blueprint called a Makefile.
  2. **Make command**: Reads the generated Makefile and starts compiling the raw source files into binary assets.
  3. **Sudo make install**: Places the compiled binary files into the appropriate corporate directories on the system.

---

#### 5. Windows Operating System Architecture

Windows systems use a completely different approach to system management:

* **The Windows Registry**: A massive, centralized database storing all hardware profiles, operating system settings, user configurations, and application properties.
  * **HKEY_LOCAL_MACHINE (HKLM)**: Serves as the critical registry hive containing computer-wide configuration details. Alterations here affect every user accounts on the machine.
  * **HKEY_CURRENT_USER (HKCU)**: Houses settings specific to the user account currently logged in.
* **Active Directory and Group Policies**: Active Directory is a centralized directory service used to manage enterprise computer nodes, users, and groups. Within this system, administrators enforce Group Policy Objects (GPOs), allowing them to push down administrative rules (such as disabling a physical USB port or mandating complex passwords) to thousands of workstations instantly.
* **Windows Event Viewer & Administrative Logs**: Displays structured configurations and diagnostic audits. The Security Event Log is where Windows logs user authentication attempts, logon failures, privilege elevations, policy alterations, and security rule changes.
* **System Resource Triage and Package Managers**: When physical RAM workspace is completely exhausted on a Linux server, the kernel moves inactive memory pages into a fallback disk space called **Swap Space**. While this keeps the server running, it can slow down your system since storage read/write limits are slower than RAM. For installing applications cleanly, Linux uses package managers like APT on Debian or Ubuntu to manage .deb archives, and YUM/DNF on CentOS or RedHat to manage .rpm packages. Windows administrators often use PowerShell instead of standard Command Prompts because PowerShell passes fully typed NET objects instead of dry flat text down the pipeline, giving far greater administrative precision.
* **Diagnostic Messages (dmesg)**: A Linux command line utility that prints the kernel ring buffer, displaying boot diagnostics, driver registrations, and system hardware attachments.

---

#### 6. Academic Milestones and Scholar Award

To recognize your focus on understanding core operating processes, I are conferring upon you the **Platform Pioneer Milestone - The Kernel Journeyman Award**. This represents your intermediate entry into platform administration.

---

### Curated Study Resources
* **[Introduction to Protection Rings & Kernel Modes](https://www.youtube.com/watch?v=vVkaGvR8QWk)** — Visualizing memory rings.
* **[Linux File System Hierarchy Explained](https://www.youtube.com/watch?v=HbgzrKJvDRw)** — Exploring directories from /etc to /var.
* **[Understanding the Windows Registry](https://www.youtube.com/watch?v=MyuE7nF4XVE)** — Deep dive into HKLM and registry hives.
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
         content: `### Lecture Notes: Command Line Interfaces and CRUD File Operations

In this lecture, we leave behind the Graphical User Interface (GUI). While pointing-and-clicking is convenient for daily consumers, true IT professionals and security researchers live in the Command Line Interface (CLI). Typing terminal commands is not simply about looking like a hacker; it is about speed, precision, absolute control, and the ability to automate complex tasks using simple, robust script chains. I want you to embrace the terminal—it will become your most trusted instrument.

---

#### 1. File Path Architecture and Navigation

Before we can manipulate files, we must understand how to find them. Operating systems map physical files across directories using logical paths:

* **Absolute Paths**: A complete, unambiguous map that starts from the absolute root of your filesystem. On Linux, this begins with a forward slash (/), such as /etc/ssh/sshd_config. On Windows, it begins with a drive letter, such as C:\\Windows\\System32\\drivers\\etc\\hosts. No matter where your terminal is currently sitting, an absolute path will always find the exact target file.
* **Relative Paths**: A path relative to the directory your terminal is currently active in. We use single dots (.) to represent our current folder, and double dots (..) to move back to the parent folder. For example, if you are working in a logs directory and want to examine a database backup in an adjacent folder, you might use ../database/backup.sql.
* **The pwd instruction**: Pronounced Print Working Directory, this displays the absolute path of your terminal's current active directory.
* **Running Current-Folder Executables**: In Linux, if you type the name of an executable that sits in your current folder, the terminal will report that the command is not found. This is a built-in safety posture to prevent an attacker from tricking you into running malicious binaries placed in common folders. To run a local executable, you must explicitly prepend dot-slash (./) to tell the path runner to look directly in the current directory.

---

#### 2. Cross-Platform Command Reference

Because you will operate in diverse corporate environments, you must memorize the key native directives across standard shell utilities. Let us compare the essential commands:

| Objective | Linux Bash Shell | Windows CMD | Windows PowerShell |
| :--- | :--- | :--- | :--- |
| **Print Current Path** | \`pwd\` | \`echo %cd%\` | \`pwd\` or \`Get-Location\` |
| **List Files (Details)** | \`ls -la\` | \`dir\` | \`Get-ChildItem\` or \`ls\` |
| **Create Directories** | \`mkdir mydir\` | \`mkdir mydir\` | \`New-Item -ItemType Directory mydir\` |
| **Create Empty Files** | \`touch note.txt\` | \`type nul > note.txt\` | \`New-Item -ItemType File note.txt\` |
| **Output Entire File** | \`cat note.txt\` | \`type note.txt\` | \`Get-Content note.txt\` |
| **Interactive File Paging** | \`less dynamic.log\` | \`more dynamic.log\` | \`Get-Content dynamic.log \| Out-Host -Paging\` |
| **Erase File** | \`rm note.txt\` | \`del note.txt\` | \`Remove-Item note.txt\` |
| **Recursively Delete Directory** | \`rm -rf mydir\` | \`rd /s /q mydir\` | \`Remove-Item -Recurse -Force mydir\` |
| **Search Content (RegEx)** | \`grep "Pattern"\` | \`findstr "Pattern"\` | \`Select-String "Pattern"\` |

---

#### 3. Redirection and Standard Input/Output Streams

The pipeline is one of the most powerful concepts in computing. In Unix-like environments, terminal operations rely on three standard data streams, each identified by numeric descriptors:

* **Standard Input (File Descriptor 0)**: Where a program reads its input data.
* **Standard Output (File Descriptor 1)**: Where a program writes its normal processing results.
* **Standard Error (File Descriptor 2)**: Where a program writes error logs and diagnostic details separately from its standard output.
* **Redirection Directives**:
  * **The Single-Greater-Than symbol (>)**: Intercepts standard output and overwrites the contents of a target file, erasing whatever sat there previously.
  * **The Double-Greater-Than symbol (>>)**: Intercepts standard output and inserts the information at the end of a target file without erasing previous data.
  * **Stderr Redirection (2>&1)**: Merges the Standard Error stream into the Standard Output stream so both travel together.
  * **The Absolute Silencer**: Instructing a script to write output to > /dev/null 2>&1 redirects all output and errors to a virtual black hole, executing the package with absolute silence in the background.

---

#### 4. Diagnostic Utilities and Log Inspection

To manage server systems, we use terminal-based diagnostic tools:

* **The Pipe operator (|)**: Connects commands. It routes the standard output of one command as the standard input of the next. For instance, running cat access.log | grep 404 takes a massive log file, reads it, and filters it to show only lines containing errors.
* **Reading high-volume records with less**: If you try to open a massive ten gigabyte web server log in a standard text editor, the system will run out of memory and hang. Using the less command loads the file dynamically page-by-page, demanding virtually no active RAM.
* **Continuous tail streams**: Running tail -f /var/log/auth.log keeps the terminal open and continuously prints new security lines as they are committed to disk, letting you monitor intrusions as they occur.
* **Analyzing system connections**: Running netstat -ano lists all active network connections. Most importantly, it displays active processes alongside their numeric Process IDs (PIDs), letting you pinpoint exactly which software tool is hosting a particular connection.
* **Managing Custom Command Shortcuts**: The **\`alias\`** utility allows engineers to define persistent shortcuts for complex statements (e.g., \`alias ll='ls -la'\`).
* **Wildcards**:
  * **\`*\` (Asterisk)**: Matches zero or more unknown characters during file matching (e.g., \`rm *.log\` deletes all log files).
  * **\`?\` (Question Mark)**: Matches exactly one single unknown character.

---

#### 5. Academic Milestones and Scholar Award

By conquering the CLI and learning to navigate the raw terminal, you have earned the **Terminal Adept Milestone - The Command Apprentice Award**. Continue applying these commands daily; repetition is the secret to engineering mastery.

---

### Curated Study Resources
* **[Linux Command Line Tutorial for Beginners](https://www.youtube.com/watch?v=ZtqBQ68cfJc)** — Cracking the core commands.
* **[Redirecting Linux Streams (Stdout/Stderr)](https://www.youtube.com/watch?v=bOonI89u66E)** — Master standard streams and null routing.
* **[How to Use Netstat to Troubleshoot Connections](https://www.youtube.com/watch?v=vVj_97Iidm4)** — Deciphering netstat output attributes.
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
         content: `### Lecture Notes: File Permissions, Access Control Lists, and System Logging

Welcome back. In today's lecture, we examine the fundamental concept of access controls. As a security professional, you must remember the Principle of Least Privilege: a user or process should only have the exact access required to perform its job, and absolutely nothing more. Today, we will study how operating systems enforce these boundaries on files, and how we inspect system logs to ensure our protections are holding.

---

#### 1. The Linux Permissions Model and Numerical Scoring

In Linux, every file and directory is bound to three classes of access: the Owner (the single user who created the file), the Group (a defined set of users), and Others (everyone else on the system). We evaluate and set permissions using chmod:

* **Numeric Values**:
  * **Read (r)**: Worth 4 units.
  * **Write (w)**: Worth 2 units.
  * **Execute (x)**: Worth 1 unit.
* **Calculating the Three-Digit Octal**:
  * To assign rights, we add up the scores for each class. This results in standard numerical codes:
    * **chmod 755**: The Owner gets full access (4+2+1=7), the Group gets read and execute (4+1=5), and Others get read and execute (4+1=5).
    * **chmod 640**: The Owner gets read and write (4+2=6), the Group gets read-only (4), and Others get absolutely no access (0).
* **Owner Management with chown**: To alter who legally owns a file, we use chown. For example, chown root:admin config.json changes the owner to root and assignment to the admin group.
* **Initial Templates with umask**: When standard applications create a file, they use a template filter called the user mask or umask. The system subtracts the active umask value from baseline default permission parameters (typically 666 for files and 777 for folders) to assign highly secure initial rights automatically.
* **Access Control Lists (ACLs)**: Standard owner-group-others systems are often too simple. If you must give a fourth specific user access without adding them to a broad group, we use Access Control Lists. Utilizing setfacl and getfacl lets us assign incredibly precise, customized access mappings to individual accounts and group files.

---

#### 2. Advanced and Specialized Permissions

Along with basic read, write, and execute flags, we use specialized permissions for administration, though they present unique security tradeoffs:

* **SUID (Set User ID)**: When SUID is active (indicated by an "s" in the owner's execute slot, like rws------), any user who runs the binary inherits the full security rights of the file's owner (often root) instead of their own user account. It is necessary for utilities like passwd, which must temporarily edit password hashes, but it presents a massive security risk if configured incorrectly on shell tools like bash.
* **The Sticky Bit**: Indicated by a "t" in the world execution position (like drwxrwxrwt, commonly configured on the public tmp directory). When active, it prevents users from deleting or renaming files owned by others inside that directory, even if they have write access to the folder.
* **Windows NTFS Permissions**: Windows structures permissions using Access Control Entries (ACEs) inside lists:
  * **DACL (Discretionary Access Control List)**: Explicitly defines which users are permitted or denied read, write, or execute rights on a resource.
  * **SACL (System Access Control List)**: Used exclusively to generate security audit logs in the Event Viewer when specified users attempt to read or modify a file.

---

#### 3. Navigating Processes and Logs

To troubleshoot a crashing server or detect an active attacker, you must know how to inspect process memory pathways and dynamic logging files:

* **Process Management snap lists**:
  * Run **ps aux** to print a complete snapshot of all running processes, their governing owner, Process ID (PID), memory usage, and command paths.
  * Use **top** or **htop** to view an real-time screen of server CPU cycles, physical memory bounds, and swap activities.
  * **SIGKILL (Signal 9)**: A non-ignorable command signal that forces the kernel to instantly terminate a process, shutting it down with no clean-up.
  * **SIGTERM (Signal 15)**: A polite shutdown request that gives the program time to save data and cleanly exit.
  * **OOM (Out-of-Memory) Killer**: A Linux kernel optimization engine. When physical RAM is exhausted and swap limits are reached, the OOM Killer terminates large, non-essential processes to keep the core OS running.
* **Critical Logging Paths**:
  * **Authentication Records**: Linux stores authentication details in var log auth.log on Debian/Ubuntu systems, and var log secure on RedHat/CentOS systems. This is where you audit failed logins, ssh connection logs, and sudo commands.
  * **Process system auditing**: The auditd utility records system events continuously to var log audit audit.log.
  * **System Calls tracing (strace)**: Traces all system calls (syscalls) and memory mappings executed by a binary.
  * **Open Files querying (lsof)**: Lists all open files, file descriptors, network sockets, and directories held open by active running PIDs.
  * **Windows Minidumps**: When Windows experiences a fatal kernel crash, it dumps system memory states into Minidump files (.dmp). Engineers use diagnostic debuggers like WinDbg to parse dump files and identify which corrupt hardware driver triggered the crash.

---

#### 4. Academic Milestones and Scholar Award

For mastering the mathematics of access controls and the architecture of forensic logs, I award you the **Access Sentinel Milestone - The Privilege Architect Award**. Maintaining security begins with absolute control over who has access to system assets.

---

### Curated Study Resources
* **[Understanding Linux Permission Octals (chmod)](https://www.youtube.com/watch?v=iwolPf6kN-k)** — Mastery of mathematical permissions.
* **[SUID, SGID, and Sticky Bit Explained](https://www.youtube.com/watch?v=vVkaGvR8QWk)** — Advanced specialized permissions flags.
* **[How to Analyze Windows BSOD Minidump Files](https://www.youtube.com/watch?v=-_Y2yK2Lhmo)** — Parsing memory dumps with WinDbg.
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
         content: `### Lecture Notes: Virtualization Fundamentals and Lab Architectures

Many students ask me, "Professor, how do I practice dangerous cybersecurity attacks without destroying my personal computer or going to jail?" The answer is simple: Virtualization. Virtualization allows us to create isolated software boxes that mimic physical machines on a single physical computer. Today, we will learn how hypervisors isolate guest systems, how to configure virtual network adapters, and how to design safe testing networks.

---

#### 1. Hypervisor Architecture: Type-1 and Type-2

A hypervisor is the underlying software engine that manages hardware resources, slicing up physical CPU, memory, and storage to allocate them to isolated virtual machines:

* **Type-1 (Bare-Metal) Hypervisors**: These install directly onto physical hardware, with no intermediate operating system underneath. Examples include VMware ESXi, Proxmox VE, and Microsoft Hyper-V. Because they have direct access to the physical CPU and memory registers, they deliver exceptional performance, low latency, and corporate scalability. This is the gold standard for enterprise data centers.
* **Type-2 (Hosted) Hypervisors**: These install as software applications on top of a Host Operating System, such as running VirtualBox or VMware Workstation on your personal Windows 11 client machine. These guest Virtual Machines (VMs) run their own fully independent operating systems (Guest OSs) inside their own virtualized components. This layout is ideal for local software testing and home security laboratories.
* **Virtual Machines vs. Containers**:
  * **Virtual Machines**: Run a completely independent guest operating system, including its own separate kernel, which is isolated from the host.
  * **Containers (such as Docker)**: Share the host system's kernel, running isolated user-space packages without virtualizing hardware. This makes them incredibly lightweight, starting up in fractions of a second.

---

#### 2. VirtualBox Network Adapter Topologies

When you deploy a dynamic laboratory, how you configure the virtual network cards dictates how your machines can talk to each other and the rest of the world. Let us analyze the standard settings:

* **Host-Only Adapter**: Connects the guest VM's virtual interface to an isolated virtual switch. This setup allows VMs to communicate with each other and your host system, but completely blocks outbound access to the physical local network and the internet. In my testing labs, I always mandate Host-Only configurations when analyzing dangerous malware to ensure it cannot escape outside your experimental sandbox.
* **Network Address Translation (NAT)**: The default setting, translating guest packets to match your host system's IP address. This grants guest VMs internet access while hiding them from any incoming connections.
* **Bridged Adapter**: Connects your guest VM directly to your physical router. The VM obtains a standard IP address from your local network DHCP pool, appearing as an entirely independent physical computer sitting on your office floor.
* **NAT Network**: A shared private network zone that enables VMs to talk to each other while also providing dynamic access out to the internet through the host's physical connection.

---

#### 3. Virtualization Tools and Disk Forms

To master laboratory design, we must utilize advanced management features:

* **Guest Additions and Support Packages**: These are driver packages installed directly inside the guest operating system. Once configured, they permit advanced integrations such as auto-scaling window resolutions, dynamic clipboard memory share (copy-paste), and shared folder mounts.
* **Virtual Machine Snapshots**: Preservation files recording the guest VM's exact disk and memory states at a specific moment. If a system test goes wrong, you can restore your snapshot to undo the damage instantly.
* **Common Disk Image Forms**:
  * **.iso**: Standard sector-by-sector optical disk image format, used to boot installer media.
  * **.vhd and .vhdx**: Microsoft virtual hard disk formats.
  * **.vmdk**: VMware virtual disk format.
* **Nested Virtualization**: A configuration pathway that passes CPU hardware-assisted virtualization extensions (VT-x/AMD-V) down inside a guest VM, enabling guest virtual machines to host their own virtual hypervisors and nested VMs.
* **KVM (Kernel-based Virtual Machine)**: An open-source virtualization module built directly into the Linux kernel, turning Linux into a standard Type-1 hypervisor.

---

#### 4. Academic Milestones and Scholar Award

By mastering virtualization and learning to coordinate safe, isolated digital sandboxes, you have earned the **Isolated Architect Milestone - The Sandbox Sovereign Award**. You are now fully prepared to build advanced, secure testing networks.

---

### Curated Study Resources
* **[Type-1 vs Type-2 Hypervisors Explained](https://www.youtube.com/watch?v=FZR0rG3HKIk)** — Visualizing bare-metal limits.
* **[VirtualBox Network Types: Host-Only, NAT, & Bridged](https://www.youtube.com/watch?v=wX75Z-4MEoM)** — Complete networking comparison.
* **[Nested Virtualization Setup in VirtualBox](https://www.youtube.com/watch?v=X2m1tZp-Mzk)** — Enabling virtualization passthrough.
`,         quiz: {
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
        content: `### Lecture Notes: Network Topologies, Networks Scales, and Wireless Interfaces

Welcome, scholars, to the foundational study of networking and infrastructure. In my years of teaching, I have observed that many students find networking intimidating. But do not worry; we will take it step by step. I want you to visualize network coordinates simply as a digital postal system, ensuring that mail packages find the correct house over any distance. Today, we will study physical architectures, wireless interfaces, and high-speed enterprise storage structures.

---

#### 1. Physical and Logical Network Topologies

In our classroom, we define a network topology as the structural arrangement of cabling, physical adapters, and systems that determines how electrical, optical, or radio-frequency signals travel.

* **Star Topology**: A central hub or LAN switch links each workstation node directly. If one cable fails, only that single PC loses access. However, if the central node fails, the entire network drops. This is our standard office configuration.
* **Mesh Topology**: Every system node connects directly to every other node. It is highly redundant; if a cable fails, the system automatically redirects traffic. The formulas to calculate physical cable runs ($C$) based on host nodes ($N$) are:
  - **Full Mesh (Dedicated direct lines)**: 
    $$C = \\frac{N(N - 1)}{2}$$
  - **Partial Mesh**: Only highly critical systems are redundantly connected to minimize expensive cabling runs.
* **Ring Topology**: Devices connect in a circular daisy chain. Signals travel in one direction, regulated by a "token". If a single cable cuts, the entire network fails.
* **Bus Topology**: A legacy layout using a single shared coaxial cable backbone capped by terminating resistors. If the main cable backbone breaks, the entire network fails.

---

#### 2. Network Geographical Scales

We categorize networks by their physical or geographical boundaries:
* **PAN (Personal Area Network)**: Very small scale, localized around an individual (such as Bluetooth connections between your phone and headphones).
* **LAN (Local Area Network)**: Interconnects workstations inside a single room, school, or corporate office building, using high-speed Ethernet or Wi-Fi.
* **CAN (Campus Area Network)**: Bridges separate LANs within a close physical layout (like connecting several university buildings).
* **MAN (Metropolitan Area Network)**: Links systems across a large municipality or city.
* **WAN (Wide Area Network)**: Spans massive geographic boundaries, countries, or the entire globe (e.g., the public Internet).

---

#### 3. Shortbox Wireless Transmission Spectrums

Wireless communication translates digital ones and zeros into modulated radio frequency (RF) bands:
* **NFC (Near Field Communication)**: Extremely short-range, magnetic inductive connection limited to approximately 4 cm. Frequently utilized for safe mobile payment kiosks.
* **RFID (Radio Frequency Identification)**: Utilizes electromagnetic fields to identify and track passive smart tags attached to items or credential badges.
* **Zigbee**: An ultra-low-power, open standard mesh protocol. Highly utilized in corporate building automation controls and smart sensors.
* **Bluetooth**: Operates in the 2.4 GHz ISM band. Used for safe close-range personal PAN connections.

---

#### 4. PoE (Power over Ethernet) Injectors

PoE (IEEE 802.3af/at/bt standards) allows a single copper twisted-pair network cable to transmit both high-speed data packets and stable electrical power simultaneously.
* **Significance**: Allows administrators to deploy remote hardware (such as VoIP wall phones, IP dome security cameras, and wireless access points) in high ceilings or remote corners without hiring electricians to install dedicated AC outlets.
* **PoE Injector**: If the local network switch does not natively support PoE, we place a standalone PoE Injector module between the switch port and the remote appliance to inject power into the copper line safely.

---

#### 5. Advanced Storage Hosting Protocols: NAS vs. SAN

Enterprise networks require fast, reliable access to petabytes of shared storage:
* **NAS (Network Attached Storage)**: A standalone file-server appliance connected to your standard local network switch. Storage is mounted at the **file level** using common network sharing protocols (such as **SMB/CIFS** for Windows platforms and **NFS** for Linux architectures). It is simple to operate but constrained by general LAN congestion.
* **SAN (Storage Area Network)**: A high-speed, dedicated subnet specialized exclusively for storage traffic. Systems interface with a SAN at the **block level**, meaning remote disks appear to the host OS as local, raw physical drives. Its transport layers are:
  - **Fibre Channel (FC)**: Employs dedicated Host Bus Adapters (HBAs) on your servers to transmit raw SCSI commands over dedicated fiber conduits with zero IP congestion.
  - **iSCSI**: Lowers costs by encapsulating SCSI commands inside standard TCP/IP transport packets, typically on **TCP Port 3260**, allowing block-level SANs to run over standard copper Ethernet switches.
  - **FCoE (Fibre Channel over Ethernet)**: Maps Fibre Channel frames directly over high-speed lossless Ethernet networks without TCP/IP overhead, allowing unified SAN and LAN traffic to coexist over a single network interface card.

---

#### 6. Academic Milestones and Scholar Award

For mastering the spatial scales and storage topologies of modern enterprise networks, I award you the **Topology Cartographer Milestone - The Mesh Weaver Award**. Connect your networks with redundancy, and they will never fail you.

---

### 🎥 High-Yield Core Tutorial Video Links
* **[CompTIA Network+ Full Course] (https://www.youtube.com/watch?v=qiQR5rTSshw)**
* **[Computer Networking Course] (https://www.youtube.com/watch?v=qiQR5rTSshw)**
* **[Network Topologies Explained] (https://www.youtube.com/watch?v=VwN91x5i25g)**
* **[Types of Networks Explained] (https://www.youtube.com/watch?v=QKfk7YFILws)**
* **[Wireless Technologies Explained] (https://www.youtube.com/watch?v=J4T0w2D7f7A)**
* **[NAS vs SAN] (https://www.youtube.com/watch?v=ZwhT-KI16jo)**`,
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
        content: `### Lecture Notes: The 7-Layer OSI Reference Model and Network Hardware

As you advance in your security career, you will find yourself returning to the Open Systems Interconnection (OSI) Reference Model constantly. I like to tell my students of the OSI model as our universal network translator. When computers from different manufacturers, running different operating systems, want to speak to each other, they use these standardized layers. Today, we will explore all seven layers, trace how data changes as it travels down the stack, and examine the physical hardware that forwards our packets.

---

#### 1. The 7-Layer OSI Reference Model

The OSI model breaks network communication down into seven logical layers. Each layer is responsible for a specific task and communicates directly with the layers immediately above and below it.

* **L7: Application Layer (PDU: Data)**: This is the user-facing gatekeeper. It does not refer to your local apps, but rather the underlying protocols that apps use to query remote resources. Standard web browsers run HTTP/HTTPS; email programs run SMTP. As security professionals, we inspect Layer 7 data utilizing Deep Packet Inspection (DPI) to identify application exploits or rogue payloads.
* **L6: Presentation Layer (PDU: Data)**: The translator of our system. It ensures that data sent from an application running on one platform is readable by an application running on an entirely different system. It manages UTF-8 character encoding, data compression (to save transit space), and critical encryption—including the SSL/TLS handshakes that protect web traffic.
* **L5: Session Layer (PDU: Data)**: The virtual coordinator. It is responsible for establishing, managing, synchronizing, and gracefully terminating persistent communication sessions between two software applications.
* **L4: Transport Layer (PDU: Segment for TCP, Datagram for UDP)**: This layer manages host-to-host delivery. It ensures that packets arrive error-free and in the exact order they were sent. It accomplishes this through connection-oriented tools like the TCP 3-way handshake (SYN, SYN-ACK, ACK) and flow control. If speed is your priority and minor packet loss is acceptable, we choose UDP (User Datagram Protocol), which is connectionless "best-effort" delivery.
* **L3: Network Layer (PDU: IP Packet)**: The routing engine. It maps logical IP addresses to find the absolute best paths across remote internet networks. Routers operate at this layer, inspecting destination IPv4 or IPv6 records to forward systems across the globe.
* **L2: Data Link Layer (PDU: Ethernet Frame)**: The local link manager. It handles hardware addressing on your local network segment. Switches operate here, learning physical MAC addresses to steer frames directly to their target ports.
* **L1: Physical Layer (PDU: Bits)**: The raw signal transceiver. This layer is responsible for converting logical ones and zeros into physical electrical current over copper wires, laser light pulses through fiber optic conduits, or radio waves traveling through the air.

---

#### 2. Network Hardware Forwarding Controls

* **Managed Layer 2 Switches**: Switches operate at Layer 2. They build a local directory known as a CAM (Content Addressable Memory) or MAC Address Table. When a frame arrives on a switch port, the switch reads the source MAC address and records it in its table. When forwarding, it inspects the destination MAC; if it exists in the CAM table, the switch forwards the frame directly to that specific port. This prevents signal duplication, isolates traffic, and eliminates packet collisions.
* **Unmanaged Physical Hubs**: Hubs are simple, non-intelligent Layer 1 devices. They do not maintain tables and cannot parse MAC or IP addresses. When a signal arrives on a hub port, the device blindly duplicates the current out of every single other active port on the machine. This is highly insecure; any client connected to the hub can run a sniffer program like Wireshark and capture everyone's plaintext traffic.
* **IP Routers**: Routers are Layer 3 devices. They connect completely separate logical networks (such as bridging your office segment to the outer internet). Routers inspect the destination IP address on packets and consult their routing table, which is compiled dynamically utilizing path protocols like OSPF or BGP, to determine the shortest path to forward the packets.
* **Next-Generation Firewalls (NGFW)**: Traditional stateful firewalls track connections at Layer 3 and 4, automatically blocking unexpected traffic. Next-Generation Firewalls operate all the way up to Layer 7 (Application). They inspect the underlying data payload of active web sessions, blocking advanced malware, database injection attacks (SQLi), and hidden Trojan horses.

---

#### 3. Core Enterprise Network Mappings and Attacks

* **VLANs (Virtual Local Area Networks)**: This technology lets us logically segment a physical Layer 2 switch. By assigning switch ports to different VLAN IDs (like VLAN 10 for Administration and VLAN 20 for Guest Wi-Fi), we isolate their broadcast traffic, keeping secure systems separated without needing duplicate physical switches.
* **DMZ (Demilitarized Zone)**: A buffer zone between your highly secure internal company intranet and the untrusted public Internet. We place public-facing servers here (like company web hosts and email relays) so that if they are compromised, attackers are still isolated from the secure internal network.
* **Spanning Tree Protocol (STP / IEEE 802.1D)**: When we wire redundant backup links between switches to prevent downtime, a circular physical loop is formed. In a loop, broadcast packets will circulate endlessly, creating a "broadcast storm" that consumes all bandwidth and crashes the switches. STP dynamically identifies these loops and disables redundant ports to keep the network topology loop-free.
* **ARP (Address Resolution Protocol) Exploits**: On local networks, ARP maps a known logical IP address back to its physical hardware MAC address. You can view your local mappings by typing the command \`arp -a\` in your terminal. Because ARP is completely unauthenticated, an attacker can broadcast fake ARP packets claiming that the default gateway's IP belongs to their MAC address. This maps all local traffic directly to the attacker, letting them run a Man-in-the-Middle (MITM) attack to spy on or modify data.
* **CAM Table Overflow (MAC Flooding)**: An attacker floods a Layer 2 switch with thousands of bogus source MAC addresses. Once the switch's CAM memory is completely full, it can no longer learn new addresses. To survive, the switch enters a fail-safe mode known as "fail-open", behaving exactly like an unmanaged Hub and broadcasting all incoming frames to every port. The attacker can then easily sniff all local corporate traffic.

---

#### 4. Academic Milestones and Scholar Award

For mastering the intricate mappings of the OSI model and the security boundaries of enterprise switches, I award you the **OSI Architect Milestone - The Seven-Layer Sage Award**. Keep your packet boundaries clean; they are your primary line of defense.

---

### 🎥 High-Yield Core Tutorial Video Links
* **[OSI Model Explained] (https://www.youtube.com/watch?v=vv4y_uOneC0)**
* **[Routers vs Switches] (https://www.youtube.com/watch?v=1z0ULvg_pW8)**
* **[Firewall Explained] (https://www.youtube.com/watch?v=kDEX1HXybrU)**
* **[VLAN Explained] (https://www.youtube.com/watch?v=MmwF1oHOvmg)**
* **[DMZ Explained] (https://www.youtube.com/watch?v=3Q0cM4N3F2E)**
* **[ARP Explained] (https://www.youtube.com/watch?v=QPi5Nvxaosw)**`,
        quiz: {
          id: 'q-osi-match',
          title: 'OSI Reference Model Quiz',
          questions: osiModelQuestions
        }
      },
      {
        id: 'les-subnetting-routing',
        moduleId: 'mod-group2',
        title: 'IP Addressing, CIDR Schemes, & Subnetting Mechanics',
        duration: 25,
        youtubeVideoId: 'BWZ-MHIhqjM',
        content: `### Lecture Notes: IP Addressing, CIDR Schemes, and Subnetting Mechanics

Welcome to one of the most practical sections of our networking course: IP subnetting. Many of my students get anxious when they see binary calculations. But in my class, we will break down the math simply, step-by-step. I want you to remember that subnetting is simply about design efficiency. It represents how we divide a massive block of postal addresses into smaller, secure, and easily managed neighborhood zones. Let us build these skills together.

---

#### 1. Public vs. Private IPv4 Spaces: RFC 1918 Guidelines

Due to the rapid exhaustion of IPv4 addresses, a regulatory standard called **RFC 1918** was created to reserve specific blocks of IP addresses exclusively for private corporate intranets. These private blocks are designated as non-routable on the public internet; standard internet service provider (ISP) routers will automatically drop any packet carrying these addresses.

The primary RFC 1918 Private Ranges are:
* **Class A**: \`10.0.0.0\` to \`10.255.255.255\` (Subnet Mask: \`255.0.0.0\`, CIDR: \`/8\`)
* **Class B**: \`172.16.0.0\` to \`172.31.255.255\` (Subnet Mask: \`255.240.0.0\`, CIDR: \`/12\`)
* **Class C**: \`192.168.0.0\` to \`192.168.255.255\` (Subnet Mask: \`255.255.0.0\`, CIDR: \`/16\`)

Here is an exam tip: If you see an address like \`172.32.1.1\`, is it private? No! The private Class B range stops at \`172.31.255.255\`. Any address starting with \`172.32.x.x\` is a public, routable address.

---

#### 2. Classless Inter-Domain Routing (CIDR) and Subnet Masks

An IP address consists of two parts: the network address and the host address. The subnet mask determines exactly where the network boundary ends and the host portion begins.

* **Subnet Mask Structure**: A 32-bit value composed of contiguous binary ones followed by consecutive zeros. The ones represent the network portion, while the zeros represent host space.
* **CIDR Notation**: A shorthand way of representing a subnet mask. Instead of writing \`255.255.255.0\`, we write a slash followed by the count of active network bits: \`/24\`.
* **Host Bits Calculation**: To determine how many host bits (H) you have available inside an IPv4 subnet, simply subtract your CIDR prefix from 32:
  $$H = 32 - \\text{CIDR Prefix}$$
  For example, a standard \`/24\` network prefix leaves exactly $32 - 24 = 8$ host bits.

Let us look at a quick references for common subnet masks:
* \`255.255.255.255\` $\\rightarrow$ **\`/32\`** (Single system node)
* \`255.255.255.252\` $\\rightarrow$ **\`/30\`** (Increments of 4)
* \`255.255.255.248\` $\\rightarrow$ **\`/29\`** (Increments of 8)
* \`255.255.255.240\` $\\rightarrow$ **\`/28\`** (Increments of 16)
* \`255.255.255.224\` $\\rightarrow$ **\`/27\`** (Increments of 32)
* \`255.255.255.192\` $\\rightarrow$ **\`/26\`** (Increments of 64)
* \`255.255.255.128\` $\\rightarrow$ **\`/25\`** (Increments of 128)
* \`255.255.255.0\`   $\\rightarrow$ **\`/24\`** (Increments of 256)

---

#### 3. Subnet Partitioning and Usable Host Calculations

When setting up any subnet, we must set aside two specific IP addresses for bookkeeping reasons:
1. **The Network Address**: The very first address in the IP block, where all host bits are set to binary zero. This address identifies the subnet itself.
2. **The Broadcast Address**: The very last address in the IP block, where all host bits are set to binary one. This address is used to send a packet to every host on that subnet simultaneously.

Because of this, the formula to calculate how many usable host IP slots exist inside any subnet is:
$$\\text{Usable Hosts} = 2^H - 2$$

Let us run through three practical templates:
* **\`/30\` Subnet**: $H = 32 - 30 = 2$. Total addresses = $2^2 = 4$. Usable hosts = $4 - 2 = 2$. These subnets are highly optimized for point-to-point router-to-router links to prevent address waste.
* **\`/29\` Subnet**: $H = 32 - 29 = 3$. Total addresses = $2^3 = 8$. Usable hosts = $8 - 2 = 6$.
* **\`/28\` Subnet**: $H = 32 - 28 = 4$. Total addresses = $2^4 = 16$. Usable hosts = $16 - 2 = 14$.

---

#### 4. Splitting Networks and VLSM

If you are asked to split a single \`/24\` block (which contains 256 addresses) into smaller segments:
* To slice it into **two equal-sized subnetworks**, you borrow exactly **1** host bit. The mask shifts from \`/24\` to **\`/25\`** ($2^1 = 2$ subnets), giving 128 total IPs (126 usable) per segment.
* To slice it into **four equal-sized subnetworks**, you borrow exactly **2** host bits. The mask shifts from \`/24\` to **\`/26\`** ($2^2 = 4$ subnets), giving 64 total IPs (62 usable) per segment.

**Variable-Length Subnet Masking (VLSM)** is the practice of dividing a corporate network allocation into subnets of varying custom sizes. This allows administrators to allocate IP ranges precisely to match each office department's client density, eliminating wasted IP slots.

---

#### 5. Border Configurations and VPN Tunnels

Let us wrap up with key configurations you will need as an administrator:
* **Default Gateway**: The closest router interface mapped on your local network segment (e.g., \`192.168.1.1\`). It receives any packet destined for outer, foreign subnets.
* **Site-to-Site VPN (Virtual Private Network)**: Connects entirely separate, remote corporate networks over the untrusted public Internet. The VPN encrypts all data packets prior to transit, preserving confidentiality.
* **Traceroute Utility**: Run as \`tracert\` on Windows and \`traceroute\` on Linux, this diagnostic tool maps out every individual router hop a network packet traverses to reach its destination.
* **Flushing Local DNS**: Over time, local lookup profiles can become corrupted or outdated. To force a system to perform a fresh DNS query, administrators type the command **\`ipconfig /flushdns\`** in a Windows terminal.

---

#### 6. Academic Milestones and Scholar Award

For mastering the binary alignments of IP subnetting and CIDR address distribution, you are awarded the **CIDR Commander Milestone - The Binary Boundary Award**. Calculate your ranges carefully; clear boundaries make stable networks.

---

### 🎥 High-Yield Core Tutorial Video Links
* **[IP Addressing Full Course] (https://www.youtube.com/watch?v=5WfiTHiU4x8)**
* **[Subnetting Mastery Series] (https://www.youtube.com/watch?v=BWZ-MHIhqjM)**
* **[Subnetting Full Course] (https://www.youtube.com/watch?v=ecCuyq-Wprc)**
* **[CIDR Explained] (https://www.youtube.com/watch?v=Vbgw9_oyZnM)**
* **[Subnet Masks Explained] (https://www.youtube.com/watch?v=s_Ntt6eTn94)**
* **[Default Gateway Explained] (https://www.youtube.com/watch?v=1z0ULvg_pW8)**`,
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
        content: `### Lecture Notes: Infrastructure Services and Security Protocols

Once we have mapped our logical network addresses, we must examine the essential background services that coordinate these pipelines. In my class, I compare infrastructure services to a building's utilities—its electricity, plumbing, and heating. The average user never thinks about them, but if they fail, the entire building collapses. Today, we will study name resolution, automatic addressing, clock synchronization, administrative encryption, and security protocols. Let us investigate together.

---

#### 1. Dynamic Host Configuration Protocol (DHCP) Mechanics

DHCP automatically leases IP addressing profiles to devices as they connect to the local network. It operates over **UDP Port 67** (servers listening) and **UDP Port 68** (clients transmitting).

To obtain an IP configuration, a client performs a 4-step sequence known as the **DORA Handshake**:
1. **Discover (D)**: The connected client broadcasts a Layer 2 discovery message (\`FF:FF:FF:FF:FF:FF\`) seeking any local DHCP server.
2. **Offer (O)**: Active DHCP servers reply, offering an IP address lease alongside a subnet mask, default gateway, and active DNS addresses.
3. **Request (R)**: The client broadcasts a request, accepting the lease parameters of the first responding server.
4. **Acknowledge (A)**: The DHCP server registers the lease and maps it to the client's physical MAC address.

Here is an administrative tool you must remember: DHCP broadcasts cannot cross Layer 3 router interfaces. To avoid deploying a DHCP server on every local subnet, we configure a **DHCP Relay Agent** on our routers. This agent intercepts local Layer 2 DHCP discovery broadcasts and forwards them as unicast Layer 3 packets over the router directly to a centralized server.

---

#### 2. Domain Name System (DNS) Port Allocations and Records

DNS is the centralized directory of our digital world. It translates human-friendly hostnames (like \`google.com\`) into machine-readable IP addresses. It uses two ports:
* **UDP Port 53**: Used for standard name resolution queries to maximize speed.
* **TCP Port 53**: Reserved for **DNS Zone Transfers** (databases syncs between nameservers), where the reliable delivery controls of TCP are required.

Key DNS record categories:
* **A Record**: Maps a hostname directly to its 32-bit IPv4 address.
* **AAAA Record**: Maps a hostname directly to its 128-bit IPv6 address.
* **CNAME Record**: An alias record that redirects one hostname to another.
* **MX Record**: Points domain lookup queries to your email servers.
* **TXT Record**: Contains arbitrary descriptive text, heavily utilized for email spam defenses such as **SPF**, **DKIM**, and **DMARC**.

---

#### 3. Network Time Protocol (NTP) Synchronization

Correct system clocking is essential for security auditing, forensic correlation of files, and cryptographic validations.
* **NTP Port**: Runs over **UDP Port 123**.
* **NTP Stratum Ratings**:
  * **Stratum 0**: Physical high-accuracy reference clocks (atomic or GPS).
  * **Stratum 1**: Servers directly connected to a Stratum 0 physical clock.
  * *Stratum Chains*: Stratum ratings increment as you hop further from the master clocks. High stratum numbers represent a higher risk of time drift.

---

#### 4. Administrative Protocols: Plaintext vs. Cryptographic Security

As network administrators, we must secure our connections. Legacy plaintext protocols must be disabled and replaced with secure models:

| Plaintext Protocol (Insecure) | Port | Cryptographic Replacement (Secure) | Port |
| :--- | :--- | :--- | :--- |
| **Telnet** (Remote shell administration) | TCP 23 | **SSH** (Secure Shell) | TCP 22 |
| **HTTP** (Plaintext web traffic) | TCP 80 | **HTTPS** (Heavily encrypted web traffic) | TCP 443 |
| **FTP** (Standard File Transfer) | TCP 21 | **SFTP** (Secure File Transfer over SSH) | TCP 22 |
| **LDAP** (Directory services queries) | TCP 389 | **LDAPS** (LDAP over SSL) | TCP 636 |

---

#### 5. The SSL/TLS Handshake and NAT Mechanics

* **The SSL/TLS Handshake Steps**:
  1. **Client Hello**: Client connects to server, proposing supported encryption algorithms and TLS versions.
  2. **Server Hello**: Server selects the strongest encryption algorithm and sends its public digital security certificate.
  3. **Verification**: The client verifies the certificate against trusted Root CA files.
  4. **Key Exchange**: The client encrypts a temporary key and sends it to the server. Both systems generate a symmetric session key to encrypt all subsequent transactions.
* **NAT (Network Address Translation)**: Translates public IP addresses to private RFC 1918 addresses.
* **PAT (Port Address Translation)**: Maps thousands of internal private systems to a single public IP address using unique port numbers as logical identifiers. This slows down IP exhaustion.
* **Netstat Utility**: Program used to list all active network listening sockets and process connections, helping security analysts find Trojan services.
* **BGP (Border Gateway Protocol)**: The routing engine of the global Internet, coordinating paths across autonomous systems.

---

#### 6. Academic Milestones and Scholar Award

For mastering the utilities, ports, and protocols of local and wide networks, you are awarded the **Protocol Commander Milestone - The Handshake Master Award**. Maintain your protocols securely; they are the heart of all safe networks.

---

### 🎥 High-Yield Core Tutorial Video Links
* **[DNS Explained] (https://www.youtube.com/watch?v=mpQZVYPuDGU)**
* **[DHCP Explained] (https://www.youtube.com/watch?v=e6-TaH5bkjo)**
* **[NTP Explained] (https://www.youtube.com/watch?v=5wgjM7J6HfA)**
* **[SSH Explained] (https://www.youtube.com/watch?v=hQWRp-FdTpc)**
* **[SFTP Explained] (https://www.youtube.com/watch?v=K0wM5Vh1xjQ)**
* **[HTTP vs HTTPS] (https://www.youtube.com/watch?v=hExRDVZHhig)**
* **[SSL/TLS Handshake Explained] (https://www.youtube.com/watch?v=AlE5X1NlHgg)**`,
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
        content: `### Lecture Notes: The CIA Triad, Access Verification, and Authentication Foundations

Welcome, class, to your first major lecture in our security engineering program. I always tell my students that cybersecurity is not just about blocking hackers; it is about building a secure, trustworthy digital environment. To achieve this, we must ground every single defense we implement in the fundamental pillars of the CIA Triad: Confidentiality, Integrity, and Availability. Let us examine how we apply these matrices to safeguard enterprise networks.

---

#### 1. The Three Pillars of the CIA Triad

The cornerstone of any security posture is the classic CIA Triad. Every defense mechanism we build can be mapped to one or more of these three dimensions:

* **Confidentiality**: This pillar is about keeping secret information hidden from unauthorized persons, processes, or systems. We must protect data in two distinct states: **Data at Rest** (stored on local drives, servers, or laptop SSDs) and **Data in Transit** (moving across local networks or the public internet).
  - *Confidentiality Controls*: To protect data at rest, we deploy robust standards like **AES-256 Symmetric Encryption**. For example, BitLocker utilizes AES-256 to ensure that if an employee\'s physical laptop is stolen, its local storage remains unreadable. To protect data in transit, we encrypt network sessions. Plaintext communication is highly vulnerable to network eavesdropping or packet sniffing. In web setups, we also disable cleartext sessions and configure secure attributes on browser cookies to prevent them from traveling over insecure lines, stopping session hijacking.
* **Integrity**: This pillar involves protecting files, databases, and system logs from unauthorized, accidental, or malicious modification, tampering, or deletion.
  - *Integrity Controls*: We enforce integrity through **Cryptographic Hashing** using one-way algorithms like **SHA-256** or **SHA-512**. Running these algorithms over a target file compiles a unique, fixed-size deterministic digest. If even a single character in the file changes, the resulting digest changes completely. To protect credentials, we hash passwords before storing them. Before hashing, we add a unique, random string of characters called a **Salt** to the plaintext password. This Salt neutralizes precompiled dictionary sheets known as **Rainbow Tables** and prevents off-line brute-force cracking using high-speed GPUs.
* **Availability**: This pillar guarantees that computer systems, databases, network connections, and server applications are continuously online, functional, and accessible whenever an authorized student or employee needs them.
  - *Availability Controls*: We design for availability by implementing dual power supplies, **Uninterruptible Power Supplies (UPS)** to survive blackouts, redundant **RAID 5** storage arrays to handle drive failures without system crashes, and load balancing routers that distribute incoming web traffic across a cluster of server nodes to remove any single point of failure.

---

#### 2. Digital Signatures and Non-Repudiation

In modern transactions, we must guarantee **Non-repudiation**—which means verifying an action so thoroughly that the sender cannot falsely deny sending a message or signing a digital document.
* *Mechanics*: We implement digital signatures using **Asymmetric Cryptography**. A sender hashes their transaction log and encrypts that hash using their private key. Because the private key is held strictly by them, anyone can decrypt the digital signature using the paired public key, confirming the signature\'s source mathematically.

---

#### 3. Identification, Authentication, and Authorization

In my classroom, I emphasize that tracking user access always consists of three separate, orderly phases:
1. **Identification**: Presenting a claim of identity to a system (for example, typing in your unique student username).
2. **Authentication**: Proving that you are indeed the owner of that identity (such as supplying a password, smartcard, or fingerprint). If our authentication checks are weak, attackers can steal active session data—a risk known as **Session Hijacking**—to bypass our login screens and impersonate clients.
3. **Authorization**: Granting the authenticated user explicit permissions to access specific directories or network nodes (determining what you are allowed to do after logging in). The operating system queries your account group or SID against access control tables to authorize actions like writing files.

---

#### 4. Multi-Factor Authentication (MFA) Standards

To satisfy true MFA requirements, an authentication system **must combine at least two separate factor categories**. Combining two items from the same factor (for example, requiring a physical smartcard and a physical security key) does not constitute MFA; it is simply single-factor Possession + Possession.
* **Something You Know (Knowledge)**: passwords, PINs, and secret passphrases. Relying solely on passwords is highly risky as they are easily stolen via phishing, keyloggers, or sniffing.
* **Something You Have (Possession)**: physical hardware tokens, RSA smartcards, mobile authenticator apps generating time-based codes (TOTP), or physical identity badges.
* **Something You Are (Inherence)**: unique biological traits (biometrics), such as fingerscans, iris scans, retina scans, or facial structure scans.
* **Somewhere You Are (Location)**: IP geofencing coordinates, regional limits, or  VLAN subnets.
* **Something You Do (Behavior)**: characteristic typing speed, walking gates, or cursor patterns.

---

#### 5. Strategic Access Control Policies and Rules

* **Principle of Least Privilege (PoLP)**: A vital security practice where we grant user accounts only the absolute minimum authorizations strictly necessary to complete their assigned job duties, curtailing administrative account risks.
* **Separation of Duties (SoD)**: Ensuring that critical, high-risk processes (like authorizing a high-value bank transaction) require at least two separate individuals to complete. This prevents any single human from having total administrative control over critical channels.
* **Discretionary Access Control (DAC)**: Security model that permits the owner of an asset or file to modify and grant permissions to other users at their own personal discretion.
* **Mandatory Access Control (MAC)**: Highly secure model where system administrators assign classification labels (like Secret or Top Secret) to files, and the operating system automatically correlates them with user clearance levels to authorize access.
* **Attribute-Based Access Control (ABAC)**: Context-aware model that evaluates conditions dynamically at runtime—such as device health state, user department role, or current time—mapping perfectly to modern Zero Trust requirements.
* **Role-Based Access Control (RBAC)**: Groups user permissions based on job roles (such as Billing, Engineer, or Human Resources) rather than managing individual users one-by-one.
* **Captive Portal**: An embedded landing web page presented to users who connect to guest networks or wireless access points, demanding authentication or policy agreements before network access is opened.
* **Complexity Rules and Lockout Policies**: Accounts should enforce complex passwords and maintain a password history registry to prevent reuse. Additionally, we implement lockout thresholds (such as locking an account after 5 consecutive failed attempts) to stop automated password sprays.

---

#### 6. Academic Milestones and Scholar Award

For mastering the fundamental pillars of access validation, I award you the **Triad Defender Milestone - The Guardian of the Three Pillars**. Let us keep our access controls strict and our system data pristine.

---

### High-Yield Core Tutorial Video Links
* **[CIA Triad Explained] (https://www.youtube.com/watch?v=A5j4N8mYx4M)**
* **[Cybersecurity Fundamentals - CIA Triad] (https://www.youtube.com/watch?v=3QhU9jd03a0)**
* **[Authentication vs Authorization] (https://www.youtube.com/watch?v=UBUNrFtufWo)**
* **[Identity and Access Management Basics] (https://www.youtube.com/watch?v=3i4f5YJ5J1Q)**`,
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
        content: `### Lecture Notes: Enterprise Authentication and Single Sign-On trust frameworks

Welcome back, students. Today we will tackle an administrative challenge that keeps corporate system engineers awake at night: how do we manage thousands of identity credentials across distributed applications safely, without creating a chaotic mess? To solve this, we must leverage structured directory databases, unified AAA authentication servers, and cryptographic federation. Let us explore these enterprise protocols step-by-step.

---

#### 1. Identity Infrastructure: LDAP and Active Directory

* **LDAP (Lightweight Directory Access Protocol)**: An open, cross-platform industry standard protocol used to query, manage, and inventory objects (such as users, network printers, and computers) inside a hierarchical directory tree.
  - *Structure*: Objects are organized inside folders called **Organizational Units (OUs)**. Unsecured LDAP queries transmit data over **TCP/UDP Port 389**. Plaintext queries are highly vulnerable to network eavesdropping and credential sniffing, allowing hackers to capture sensitive backend variables. To ensure complete privacy, we deploy secure **LDAPS (LDAP over SSL/TLS)**, which encrypts queries over **TCP Port 636**.
* **Active Directory (AD)**: Microsoft\'s proprietary directory database software built using standard LDAP schema structures to coordinate corporate domain environments.

---

#### 2. Centralized Security Services: Kerberos, RADIUS, and TACACS+

* **Kerberos (Port 88)**: The default ticket-based authentication protocol used inside Active Directory domains. It relies entirely on symmetric encryption, avoiding the absolute risk of transmitting plaintext passwords over network wires.
  - *Key Distribution Center (KDC) Handshake*:
    1. **Authentication Service (AS)**: Validates your initial identity proof and returns a **Ticket Granting Ticket (TGT)** to your machine.
    2. **Ticket Granting Service (TGS)**: Accepts your TGT and issues a temporary **Service Ticket (ST)**, allowing you to access a shared file drive or database.
  - *NTP Time Synchronization Request*: Kerberos tickets contain sensitive cryptographic timestamps to prevent reuse attacks. Consequently, all computers, servers, and controllers must synchronize their system clocks using **NTP (Network Time Protocol)** to within a strict skew threshold—typically **5 minutes**. A time drift larger than this causes the KDC to reject requests, locking users out of the domain entirely.
  - *Kerberos Attacks*: Attackers target these ticket structures via **Pass-the-Ticket (PtT)** (hijacking active tickets from RAM) and **Kerberoasting** (extracting service tickets to crack service account passwords offline).
* **RADIUS**: Centralizes Authentication, Authorization, and Accounting (AAA) operations across remote gateways, such as VPN tunnels and wireless access ports running IEEE **802.1X with EAP**.
  - *Ports and Limit*: RADIUS runs over **UDP Port 1812** (authentication) and **UDP Port 1813** (accounting). It has a severe security limitation: **RADIUS only encrypts the password field** inside its packets. Other parameters (like usernames and attributes) travel in plaintext, exposing details to sniffing.
* **TACACS+ (Port 49)**: Cisco\'s administrative alternative designed to secure router and switch CLI configurations.
  - *Advantages*: Unlike RADIUS, TACACS+ runs over reliable **TCP Port 49**, **encrypts the entire transmission payload**, and completely separates Authentication, Authorization, and Accounting into distinct operational services.

---

#### 3. Single Sign-On (SSO) and Trust Federation

Single Sign-On (SSO) is a design pattern that enables a user to authenticate once with a trusted Identity Provider and gain access to dozens of independent cloud and local systems without repeatedly typing credentials.

* **Federated Identity Management**: Interlinks separate identity databases, allowing users to access resources across entirely separate corporate organizations or trust domains using a single set of credentials.
* **SAML 2.0**: An open XML-based standard used to exchange signed digital assertions securely.
  - *SAML Roles*: The **Identity Provider (IdP)** hosts user records and authenticates identities, while the **Service Provider (SP)** hosts target applications and reviews IdP assertions to grant access. To establish trust, administrators download and export **Cryptographic Metadata XML files** containing public keys and service URLs between the IdP and SP.
* **JSON Web Tokens (JWT) and OIDC**: OIDC (OpenID Connect) is an identity layer built on top of the **OAuth 2.0 framework** (which manages API access authorization rather than direct identity verification). It utilizes JSON Web Tokens (JWT)—Base64-encoded, digitally signed JSON payloads—to transmit verified user claims.
* **Mutual TLS (mTLS)**: Mandates a bidirectional cryptographic verification where **both client and server** authenticate each other by exchanging and validating digital certificates.
* **OCSP Stapling**: To verify whether a digital certificate was revoked prior to its scheduled expiration, browsers utilize OCSP (Online Certificate Status Protocol) queries. To avoid heavy browser latency and preserve user privacy, **OCSP Stapling** delegates this status check to the hosting web server, which "staples" a CA-signed status response directly to the initial handshake payload.
* **Bcrypt, Argon2, and PBKDF2**: Key stretching algorithms that run millions of internal hashing loops, purposely slowing down computation to defend passwords against high-speed offline GPU brute-forcing.

---

#### 4. Academic Milestones and Scholar Award

To recognize your mastery over identity schemas and enterprise authentication, I award you the **Identity Warden Milestone - The Kerberos Sage Award**. Guard your credentials; they are the keys to the digital kingdom.

---

### High-Yield Core Tutorial Video Links
* **[Kerberos Authentication Explained] (https://www.youtube.com/watch?v=5N242XcKAsM)**
* **[Kerberos Deep Dive] (https://www.youtube.com/watch?v=qW361k3-BtU)**
* **[LDAP Explained] (https://www.youtube.com/watch?v=VFvA4W6uA4Y)**
* **[LDAP Basics] (https://www.youtube.com/watch?v=0u8WqS8K4xE)**
* **[RADIUS Explained] (https://www.youtube.com/watch?v=fh5x3mM5Q4Q)**
* **[SSO Explained] (https://www.youtube.com/watch?v=O1cRJWYF-g4)**`,
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
        content: `### Lecture Notes: Operations Teams, Detection Metrics, and Security Models

Hello, class. In today\'s lecture, we will examine how modern Security Operations Centers (SOC) configure teams, analyze diagnostic data, and design secure environments. I like to think of this as the operational blueprint for technical security centers. We will outline our interactive team structures, study the arithmetic of diagnostic telemetry, and examine architectural models that prevent lateral network compromise. Let us explore.

---

#### 1. Security Team Paradigms

To proactively protect and validate the security of an enterprise, organizations coordinate staff across three technical specialty roles:

* **Red Team**: Offensive security engineers task with emulating advanced adversaries. They actively simulate real-world hacker tactics, techniques, and procedures (TTPs) to identify security gaps, evaluate physical entry controls, and test response times.
* **Blue Team**: Defensive security operators focused on continuous monitoring. They analyze SIEM log streams, deploy host security agents, isolate compromised servers, and execute incident containment procedures to preserve business stability.
* **Purple Team**: Collaborative joint exercises where Red and Blue teams share insights. Under this paradigm, offensive practitioners execute targeted exploits while defensive teams verify and calibrate their detections, collaborating to **test, tune, and harden SIEM monitoring rules** and suppress false alarms.

---

#### 2. SOC Diagnostic Telemetry Metrics

Security analysts evaluate network monitor warnings and classify alerts into four core mathematical states:

* **True Positive**: The monitoring tool correctly generates an alarm because actual, malicious traffic or a system exploit has occurred. This requires immediate investigator response.
* **True Negative**: The system remains quiet because only routine, authorized background updates are processing. No alarm is fired; the system is operating normally.
* **False Positive**: The monitoring tool generates an alarm on completely normal, authorized system behavior (for example, a software compiler triggering an intrusion rule). This generates heavy noise and contributes directly to **Alert Fatigue**. To mitigate this, SOC centers tune and filter SIEM correlation tables.
* **False Negative**: An attacker successfully executes a hostile command or script, but monitoring tools remain green and silent, outputting zero logs. **This is the most critical and hazardous failure state** because stealth hackers can operate inside systems undetected.

---

#### 3. Structured Security Models and Architectures

* **Defense-in-Depth (DiD)**: Establishing multiple overlapping, diverse layers of security controls. If an external firewall rule is bypassed by a zero-day exploit, successive layers (VLAN boundaries, endpoint EDR agents, local folder permissions) preserve security.
* **Zero Trust Architecture (ZTA)**: Built on the absolute directive **"Never trust, always verify"**. It assumes the internal corporate network is as untrusted as the public internet. It demands continuous verification, context-aware evaluations, and device-health checks for every access request.
  - *Microsegmentation*: Breaking traditional local network structures into tiny, isolated granular security zones, restricting flat lateral traffic movement and containing potential breaches within a single segment.
* **Firewall Protocols**:
  - *Implicit Deny*: A defensive posture where any communication request not explicitly permitted by a defined rule is blocked, dropped, or denied by default.
  - *Ingress vs. Egress*: Ingress refers to incoming packets entering the network, whereas egress represents internal traffic exiting. Configured border rules blocking unroutable RFC 1918 private IP pools from entering ingress interfaces prevent **IP Address Spoofing**.
* **Operational Gateway Devices**:
  - *Demilitarized Zone (DMZ)*: A buffered subnetwork separating public-facing web servers from high-security internal resources (like Active Directory domains).
  - *Bastion Host (Jump Box)*: A highly hardened gateway server. Administrators must connect and authenticate to the Bastion host first before establishing secure **SSH (Port 22)** sessions to internal database backends.
  - *Air-Gapping*: A complete physical security measure where a critical network (such as power grid SCADA control nodes) has **absolutely zero physical, logical, or wireless connection** to the public internet.
* **SOC Defenses**:
  - *SIEM (Security Information and Event Management)*: Software that centralizes log streams from thousands of network nodes, databases, and endpoint antiviruses, using **event correlation and normalization** to map complex multi-site attacks on a single dashboard.
  - *Honeypot*: A decoy system configured with soft defenses to mimic sensitive databases or files. Its sole purpose is to lure in attackers so analysts can log and study active hacker techniques safely.
  - *Endpoint Detection and Response (EDR)*: Next-generation endpoint agents installed on corporate assets. Unlike traditional signature-based antivirus, EDR relies on **behavioral-based monitoring and heuristics** to stop advanced memory-resident threats, process injections, and zero-day exploits.
  - *Threat Hunting*: A proactive, analyst-driven SOC program where defenders manually search network and system logs for hidden **Indicators of Compromise (IoCs)** and active threats that bypassed automated security triggers.
  - *IPS vs. IDS*:
    - **IDS (Intrusion Detection System)**: A passive sensor that analyzes traffic and fires logs/alerts.
    - **IPS (Intrusion Prevention System)**: Installed inline on network borders, allowing it to actively drop packets, block connections, and dynamically prevent attacks in real time.

---

#### 4. Academic Milestones and Scholar Award

For your dedication to operational security mechanics and defense-in-depth principles, I award you the **Operations Sentinel Milestone - The Bastion Commander Award**. Maintain multiple layers of defense; a single wall is never enough.

---

### High-Yield Core Tutorial Video Links
* **[Defense-in-Depth Security] (https://www.youtube.com/watch?v=RkP6gA6xB7M)**
* **[IDS vs IPS] (https://www.youtube.com/watch?v=RkP6gA6xB7M)**
* **[SIEM Explained] (https://www.youtube.com/watch?v=RkP6gA6xB7M)**
* **[Zero Trust Architecture Guide] (https://www.youtube.com/watch?v=130aBV-Waeo)**`,
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
        content: `### Lecture Notes: Analytical Threat Models, Corporate Governance, and Risk Strategy

Welcome, class. Today we discuss the strategic side of enterprise security: how do we model advanced hacker behaviors, calculate business risks in real numbers, and ensure our companies recover after a disaster? I want you to remember that cybersecurity is not just a technical challenge—it is a business and risk computation challenge. Let us explore these governance and mitigation models systematically.

---

#### 1. Analytical Intrusion Threat Models

Security Operations Centers (SOC) map threat events to structured models to analyze active attacks:

* **The Lockheed Martin Cyber Kill Chain**: A linear 7-stage taxonomy tracking an attacker\'s execution path. In incident analysis, mapping events helps responders locate the exact phase of a compromise:
  1. *Reconnaissance*: Information gathering (such as harvesting target emails or scanning ports).
  2. *Weaponization*: Coupling an exploit with a backdoor payload into a transportable delivery package (such as a malicious macro script inside a receipt PDF).
  3. *Delivery*: Transmitting the infection package to the target user (e.g., bypassing email spam filters via phishing).
  4. *Exploitation*: Launching the weaponized exploit to run attacker shellcode on target software vulnerabilities.
  5. *Installation*: Securing administrative persistence on the system so the backdoor survives computer reboots.
  6. *Command & Control (C2)*: Opening an active, encrypted external communication channel (beaconing) back to the hacker\'s management server to await remote commands.
  7. *Actions on Objectives*: Achieving the final targeted goal of the compromise, such as exfiltrating financial files, or launching **Ransomware** file lockups—identifiable when user files are appended with **.locked** or **.crypto** extensions.
* **The Diamond Model of Intrusion Analysis**: Maps any technical attack or event by linking four vertices: **Adversary**, **Infrastructure** (such as physical lines or server IPs), **Capability** (payload, malware tools), and **Victim**. This aids forensic analysts in identifying connections across regional campaigns.
* **MITRE ATT&CK Matrix**: A globally accessible encyclopedia cataloging real-world threat actor tactics, techniques, and procedures (TTPs) mapped directly to mitigation strategies.

---

#### 2. Risk Management Foundations and Mathematics

We define risk as the likelihood of a hazard exploit occurring.

* **Risk Variables Calculation Model**: Risk is mathematically modeled as the intersection of:
  - *Threat*: The threat actor or hazard.
  - *Vulnerability*: A software weakness or missing patch.
  - *Asset Value*: The total cost/impact of an asset compromise.
  - *Equation*: $$Risk = \\text{Threat} \\times \\text{Vulnerability} \\times \\text{Asset Value}$$
* **Risk Response Strategies**:
  - *Mitigation*: Deploying defensive controls (such as patches, MFA, complex passwords, and firewalls).
  - *Transference*: Shifting the financial or operational liability to a third party (e.g., purchasing cyber liability insurance or migrating servers to a cloud provider).
  - *Avoidance*: Eliminating the risk altogether by retiring the service, disabling legacy portals, or stopping a business process.
  - *Acceptance*: Choosing to live with low-severity risks because remediation cost exceeds the asset\'s value.
* **Quantitative Risk Metrics**:
  - *Single Loss Expectancy (SLE)*: The projected financial loss from a single security incident:
    $$SLE = \\text{Asset Value (AV)} \\times \\text{Exposure Factor (EF)}$$
  - *Annualized Loss Expectancy (ALE)*: The projected cost of risk over a one-year period:
    $$ALE = SLE \\times \\text{Annualized Rate of Occurrence (ARO)}$$
  - *Practical Example*: If an enterprise database containing source records has a calculated Single Loss Expectancy (SLE) of \$50,000 and is estimated to fail once every two years (ARO = 0.5), the ALE is:
    $$ALE = \\$50,000 \\times 0.5 = \\$25,000 \\text{ per year}$$

---

#### 3. Enterprise Continuity, Resiliency, and Incident Response

When disaster strikes, we must coordinate technical recovery steps to preserve operations:

* **Business Continuity (BC) vs. Disaster Recovery (DR)**:
  - *BC Planning*: High-level plans focused on maintaining vital business operations during a massive outage or disruption.
  - *DR Subset*: Detailed technical procedures focused on the technical restoration of IT systems, hardware, files, and databases after a disaster.
* **Business Impact Analysis (BIA) Metrics**:
  - *Recovery Time Objective (RTO)*: The maximum acceptable duration of system downtime allowed before operations must go live.
  - *Recovery Point Objective (RPO)*: The maximum acceptable age of data records (data loss) that can be lost from backups (measured in time, e.g., up to 4 hours of lost databases).
* **Disaster Recovery Sites**:
  - *Hot Site*: A fully operational, real-time cloned redundant facility, enabling near-instantaneous business failover.
  - *Warm Site*: Armed with server hardware and active power, but lacks real-time replication, requiring restoration of recent backups before going live.
  - *Cold Site*: Basic empty physical space with power and cooling, but zero preconfigured computer hardware, requiring long lead times to restore.
* **Incident Response Frameworks**:
  - *Runbooks (Playbooks)*: Highly technical manuals instructing analysts step-by-step how to contain and recover from specific incidents (such as a ransomware outbreak).
  - *CSIRT (Computer Security Incident Response Team)*: A dedicated technical defender group tasked with receiving, containing, and remediating compromises. Attacking evidence like files or communications are classified as **Indicators of Compromise (IoCs)**.

---

#### 4. Compliance Frameworks and Industry Standards

* **PCI-DSS**: Regulates credit card security. Permits storing encrypted Card Account Numbers under strict safeguards, but strictly prohibits storing raw CVV codes after authorization.
* **GDPR**: Imposes strict data protection and database consumer privacy regulations for European Union (EU) residents.
* **HIPAA**: Standards for the protection, storage, and transaction confidentiality of patient Protected Health Information (PHI) (such as medical history records linked to biological names or IDs).
* **NIST CSF Core Functions**: Organizes high-level outcomes into five primary security actions: **Identify, Protect, Detect, Respond, and Recover**.

---

#### 5. Academic Milestones and Scholar Award

For mastering threat modeling, risk metrics, and the standards that protect human enterprise scale data, you are awarded the **Risk Strategist Milestone - The Compliance Navigator Award**. Quantify your risks; accurate numbers lead to robust defense.

---

### High-Yield Core Tutorial Video Links
* **[Cyber Kill Chain Explained] (https://www.youtube.com/watch?v=7f9v7Q0L5lI)**
* **[Quantitative Risk Analysis] (https://www.youtube.com/watch?v=7f9v7Q0L5lI)**
* **[Disaster Recovery Sites] (https://www.youtube.com/watch?v=7f9v7Q0L5lI)**
* **[Incident Response Lifecycle] (https://www.youtube.com/watch?v=7f9v7Q0L5lI)**`,
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
        content: `### Lecture Notes: Cryptographic Foundations, Key Types, and PKI Trust Fields

Hello, students. Welcome to one of the most intellectually rewarding departments of cybersecurity: cryptography. I like to tell my students that cryptography is the mathematics of trust. Today we will study how we lock data, prove identities, and establish secure tunnels across an untrusted globe. Let us approach these mathematical ciphers step-by-step.

---

#### 1. Hashing Algorithms and Password Security

* **One-Way Cryptographic Hashing**: Hashing functions take an arbitrary-sized input file or password and compile a unique, fixed-size deterministic digest. Hashing algorithms are one-way functions, meaning it is mathematically impossible to reverse a digest back into its original cleartext.
  - *Integrity Verification*: Cryptographic hashes are designed to verify file systems and secure storage files.
  - *Hash Collisions*: A vulnerability occurring when two completely different raw inputs yield the exact same output digest. MD5 and SHA-1 are obsolete and broken because they are highly vulnerable to lookup collision attacks.
* **Precomputed Hash Exploits (Rainbow Tables)**: Attackers utilize massive precompiled database libraries of common passwords and their corresponding hashes to crack stolen databases.
* **The Strategic Defense - Cryptographic Salting**: Appending a unique, randomized string of characters (a salt) to a cleartext password *before* running it through a hashing function. Even if two separate users select identical passwords (such as "Password123"), their final stored hashes will be completely different, neutralizing Rainbow Table lookups.
* **Key Stretching (Adaptive slow-hashing)**: Designed specifically to defend user credentials against rapid, GPU-assisted offline brute-force cracking. These algorithms intentionally force credentials through thousands or millions of dynamic CPU iterations to sluggishly delay password verification.
  - *Standards*: **bcrypt** (utilizing a customizable cost factor), **PBKDF2**, and **Argon2**.
  - *Note on Obfuscation*: Please do not confuse security with obfuscation (scrambling programs without mathematical ciphers), as obfuscation is completely unsecure.

---

#### 2. Symmetric Cryptography (Private-Key Bulk Encryption)

* **Definition**: Symmetric algorithms utilize a **single, shared private key** that must be kept secret to both encrypt plaintext and decrypt ciphertext.
  - *Advantage*: Symmetric ciphers are computationally lightweight, exceptionally fast, and optimized for bulk data processing and securing files at rest.
  - *Core Standards*: **AES (Advanced Encryption Standard)**, **Blowfish**, and **DES-CBC**. Standard bulk encryption tools, such as BitLocker AES full-disk encryption, provide strict confidentiality on physical laptop hardware and backup devices.
* **Cipher Block Modes of Operation**:
  - *Electronic Codebook (ECB)*: The simplest and least secure mode. ECB encrypts identical blocks of input plaintext into identical blocks of output ciphertext. It fails to mask structural data patterns or shapes, making it **highly unsafe for encrypting complex graphic images**.
  - *Cipher Block Chaining (CBC)*: Implements feedback dependencies by XOR chaining each plaintext block with the product of the previous block\'s output ciphertext. It utilizes a randomized **Initialization Vector (IV)** to seed the first block, ensuring that identical plaintexts compile to unique ciphertexts.
  - *Counter Mode (CTR) and Galois/Counter Mode (GCM)*: These modes use an incremental counter to turn standard block ciphers into streaming ciphers without block padding.
  - *Galois/Counter Mode (GCM)* is an **AEAD (Authenticated Encryption with Associated Data)** mode that simultaneously guarantees both data confidentiality (encryption) and tag-based data integrity checks in a single, high-speed hardware pass.

---

#### 3. Asymmetric Cryptography (Public-Key Key Exchange & Trust)

* **Definition**: Asymmetric algorithms utilize a mathematically linked keypair—a public key (which is published and shared freely with anyone) and a private key (which must be kept strictly confidential by its owner).
  - *Core Mathematical Structures*:
    - **RSA**: Cryptographic security relies entirely on the mathematical factorization difficulty of big prime numbers.
    - **Elliptic Curve Cryptography (ECC)**: Cryptographic security relies on the mathematical difficulty of solving discrete logarithms on elliptic curves. ECC offers equivalent, high-strength security with **much smaller key sizes** than RSA, drastically reducing server-side processing overhead, memory footprint, and network bandwidth.
* **Transmission Mechanics**:
  - *Confidentiality Envelope*: To encrypt a secure payload meant for a specific receiver, the sender encrypts the dataset using the **receiver\'s public key**. Consequently, only the receiver can decrypt the ciphertext using their matching **receiver\'s private key**.
  - *Symmetric Key Negotiation*: Asymmetrics are highly key-intensive. During a secure session (such as web TLS), client and server use asymmetric mechanics like **Diffie-Hellman (DH)** (or RSA-envelope handshakes) to securely negotiate and establish a shared symmetric session key over untrusted lines, without exposing it in transit. Once established, high-speed symmetric keys run the bulk communication.
* **Non-Repudiation and Digital Signatures**: To sign a document, the sender hashes the payload and encrypts the hash digest using the **sender\'s private key**. Receivers decrypt the signature using the sender\'s public key. Since only the sender controls their private key, this process establishes **non-repudiation**—guaranteeing mathematically that the sender cannot deny initiating the transaction.
* **Mutual TLS (mTLS)**: Mandates a bidirectional trust verification where **both the client and the server** are required to exchange and validate digital certificates to authenticate both endpoints of the communication channel.

---

#### 4. Public Key Infrastructure (PKI) Ecosystem

* **PKI**: The systematic framework of hardware, software, protocols, security policies, and Certificate Authorities (CAs) used to manage, distribute, store, and revoke public-key digital certificates.
* **Key Entities**:
  - *Certificate Authority (CA)*: The trusted central authority that validates domain claims and signs digital certificates.
  - *Registration Authority (RA)*: The administrative office tasked with directly receiving and auditing certificate applications before forwarding them to the CA for actual signing.
* **Certificate Standards and Trust**:
  - *X.509 Standard*: Specifies the precise global file schema and attribute field layouts of public-key digital certificates.
  - *Trust Verification*: Browsers contain pre-installed root stores of public root certificates issued by trusted CAs, which are used to authenticate server certificate signatures during HTTPS sessions.
* **Revocation Mechanics**:
  - *Validation Instruments*:
    - **CRL (Certificate Revocation List)**: A signed list containing all banned certificates. It must be downloaded and scanned, which consumes heavy bandwidth.
    - **OCSP (Online Certificate Status Protocol)**: A dynamic protocol sending lightweight real-time status queries to a CA-maintained responder to check a single certificate\'s validity instantly.
    - **OCSP Stapling**: To protect client privacy and reduce CA server traffic, the web server periodically queries the CA for revocation status, and "staples" this signed, timestamped status cert directly to the client\'s handshake payload.
  - *Key Escrow*: The policy of backing up and storing copies of cryptographic keys with a trusted third-party escrow agent to guarantee administrators can recover encrypted files if the user\'s local keys are lost.

---

#### 5. Academic Milestones and Scholar Award

For unlocking the complex mathematics that protect international communication pipelines, you are awarded the **Cryptographer Laureate Milestone - The Cipher Sage Award**. Secure your keys; they are the bedrock of all digital trust.

---

### High-Yield Core Tutorial Video Links
* **[Cryptography Full Course] (https://www.youtube.com/watch?v=jhXCTbFnK8o)**
* **[Cryptography Explained] (https://www.youtube.com/watch?v=AQDCe585Lnc)**
* **[Hashing Explained] (https://www.youtube.com/watch?v=b4b8ktEV4Bg)**
* **[Hashing and Salting] (https://www.youtube.com/watch?v=8ZtInClXe1Q)**
* **[Symmetric and Asymmetric Encryption] (https://www.youtube.com/watch?v=o_g-M7UBqI8)**
* **[Public Key Infrastructure (PKI)] (https://www.youtube.com/watch?v=5YfR4d8VQ6M)**
* **[TLS and SSL Explained] (https://www.youtube.com/watch?v=SJJmoDZ3il8)**`,
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
        content: `### Lecture Notes: System Vulnerabilities and Exploit Engineering: Overflows, Escalation, and Malware

Hello class. In this lecture, we will study high-impact software flaws and malware. I often emphasize to my students that to secure a system, we must think like an attacker. Exploitation is simply the process of using software features in unexpected ways. Let us trace how computer memory can be manipulated and how malware replicates.

---

#### 1. Penetration Testing Utilities and Threat Mapping

Security personnel and threat actors utilize centralized scanning and delivery environments to discover weaknesses:
* **Metasploit Framework**: A highly popular modular exploitation framework. It is used to easily select, compile, and execute pre-written exploit modules, payloads, and post-exploitation scripts against vulnerable targets.
* **Nmap (Network Mapper)**: A premier discovery utility that maps corporate networks, sweeps ports to discover open channels, maps active host topologies, and probes listening ports to identify active service versions.
* **Maltego**: A powerful open-source intelligence (OSINT) and graphical link-analysis suite. It collects public data, registry entries, and email lists, displaying complex connections on interactive charts.

---

#### 2. Memory-Based Exploits and Low-Level Weaknesses

A vast percentage of high-impact vulnerabilities steam from improper memory-handling inside low-level programming models (compiled languages like C and C++):
* **Stack-Based Buffer Overflow**: Matches scenarios where inputs processed into local memory buffers exceed the designated storage boundaries. The excess data overflows into adjacent memory registers on the active thread execution stack.
  - *The Vulnerability*: Attackers manipulate inputs to deliberately overwrite the **EIP Return Address Register** (or CPU Instruction Pointer). By overwriting this pointer, hackers can redirect the CPU\'s next execution step to launch malicious shellcode that has been injected directly into memory.
* **Memory Leak**: An operational bug occurring when a background program (or daemon) frequently allocates dynamic RAM sectors in a loop but fails to properly release (de-allocate) that memory back to the operating system after completing operations, leading to slow performance, thread freezes, and eventual system crashes.

---

#### 3. Strategic Host-Level Memory Mitigations

To prevent buffer overflow exploits, OS security structures deploy targeted stack-level checks:
* **Stack Canaries**: A random, secret integer value (cookie) placed in memory directly before the stack return pointer. If a buffer overflow attempt overwrites the return pointer, it inevitably alters the canary\'s value. The system checks this cookie before returning from a function; if a mismatch is found, thread execution is aborted instantly, neutralizing the exploit.
* **ASLR (Address Space Layout Randomization)**: A defense mechanism that randomizes the start memory addresses of system programs, libraries, stack partitions, and heap segments in RAM, making it exceptionally difficult for exploits to predict shellcode entry points.
* **DEP (Data Execution Prevention / NX Bit)**: Marks specific memory areas (such as the stack and heap partitions) as strictly non-executable. Even if a buffer overflow successfully injects malicious shellcode, the CPU enforces the NX (No-Execute) bit policy and refuses to execute instructions originating inside those data directories.

---

#### 4. Privilege Escalation Mechanisms

Once attackers establish initial beachheads inside low-privilege accounts, they attempt to gain higher system authorizations:
* **Vertical Privilege Escalation**: Capitalizing on local kernel bugs or service misconfigurations to transition an active session from a limited user account context directly into administrative, root, or SYSTEM-level control profiles.
* **Horizontal Privilege Escalation**: Moving sideways into other directories or accounts that sit on the exact same privilege tier (e.g., leveraging cookie interception or session hijacking to access a co-worker\'s standard account to read their private files).
* **Living off the Land (LOLBAS / GTFOBins)**: Post-exploitation strategy where adversaries leverage built-in, trusted administrative utilities already present on the victim host (such as PowerShell, certutil, wmic, or bash) to download and execute scripts. Because these utilities are trusted by default, this successfully bypasses database signature-based antivirus scanners and file tracking rules, preventing detection.

---

#### 5. Malware Taxonomy and Ingress Vectors

Malware is categorised strictly by its unique delivery payloads and replication attributes:
* **Trojan Horse**: Masquerades as legitimate, harmless, or highly desirable software to trick users into running it, while executing hidden dynamic compromises in the background.
* **Computer Worms**: Self-propagating and self-propelling malware programs. Worms automatically replicate across networks from host to host by exploiting unpatched software vulnerabilities, **completely independent of any human utility or user interaction**.
* **Ransomware**: Intrusive software that uses modern symmetric and asymmetric cryptographic ciphers to lock and encrypt local document directories, append locked suffixes, and display ransom notes demanding payment.
* **Keyloggers and Spyware**: Passive recording utilities that quietly track user keyboard strokes, capture viewport mouse clicks, and intercept system logs, packaging and sending credentials to remote Command-and-Control (C2) servers.
* **Rootkits**: Highly dangerous malware that embeds deep inside operating system kernel directories. They modify local system API queries to completely mask and hide their processes, files, registry values, and backdoor connections from active user-space antivirus tools.
* **Logic Bombs**: Dormant segments of malicious instructions nested inside applications that remain completely inactive until a specific trigger condition is encountered.

---

#### 6. Academic Milestones and Scholar Award

For your structural understanding of low-level software exploits and malware mechanisms, I award you the **Memory Architect Milestone - The Buffer Guardian Award**. Watch your boundaries; memory is a precious target.

---

### High-Yield Core Tutorial Video Links
* **[Buffer Overflow Explained] (https://www.youtube.com/watch?v=1S0aBV-Waeo)**
* **[Memory Leaks Explained] (https://www.youtube.com/watch?v=JdXcQhA0n8g)**
* **[Privilege Escalation Concepts] (https://www.youtube.com/watch?v=J0fM9QnV0hQ)**
* **[Malware Analysis Fundamentals] (https://www.youtube.com/watch?v=Vre7vY2A6hY)**
* **[Types of Malware] (https://www.youtube.com/watch?v=6uSVVCmOH5w)**`,
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
        content: `### Lecture Notes: OWASP Top 10: SQLi, XSS, CSRF and Directory Traversal Web Attacks

Welcome, class. Today we dive into web security. Let us discuss the most common structural vulnerabilities in web software and how we neutralize them. I want you to remember that client-side input validation on your browser is never enough; hackers can bypass your forms completely using tools like intercepting proxies (Burp Suite) or curl commands, making robust server-side security mandatory.

---

#### 1. SQL Injection (SQLi) - Manipulating Database Logic

* **The Vulnerability**: Occurs when web input fields accept database delimiters that are concatenated directly into SQL command strings constructed dynamically in the backend logic.
  - *The Exploit*: Attackers input database characters (like \`'\`) followed by standard SQL syntax keywords (such as \`OR '1'='1'\` or \`UNION SELECT\`) to manipulate query parameters, bypass access control gates, or dump database volumes.
* **Blind SQL Injection**: Encountered when web applications conceal verbose database error messages and output values. Attackers submit database queries containing timing operators (such as sleep or wait commands). By measuring whether the server delays its HTTP response, attackers deduce true/false conditions, exfiltrating database tables character-by-character.
* **The Defense - Parameterized Queries**: To eliminate SQL Injection, developers must implement **Parameterized Queries (Prepared Statements)**. This separates user input from compiled SQL processing logic, forcing the DBMS to interpret inputs strictly as literal data variables rather than executable software instructions.

---

#### 2. Cross-Site Scripting (XSS) - Browser Executions

XSS triggers when unvalidated user inputs are printed directly inside web documents, allowing attackers to inject malicious JavaScript payloads that run inside external visitor browsers:
* **XSS Taxonomy**:
  - **Stored (Persistent) XSS**: The most dangerous class. Attackers upload script tags persistently to the backend database (e.g., via public comment boxes). When anyone else visits that record, the server prints the stored script, executing it inside their browser context to hijack sessions.
  - **Reflected (Non-Persistent) XSS**: The payload script travels inside HTTP parameters and is immediately echoed back in the response document. Requires phishing campaigns to trick targets into triggering the request.
  - **DOM-Based XSS**: Executes entirely inside client-side browser scripts, parsing and executing unsanitized browser variables directly within the Document Object Model (DOM) without sending the payload back to the hosting server.
* **XSS Defenses and Cookie Safeguard Flags**:
  - *Output Encoding*: Escaping dynamic characters (turning \`<\` into \`&lt;\`, etc.) before printing them to the screen.
  - *HttpOnly Cookie Flag*: Completely blocks browser-side scripts from reading or manipulating active session cookies, neutralizing session hijacking attempts.
  - *Content Security Policy (CSP)*: An HTTP response header allowing administrators to explicitly define explicit whitelist domains from which dynamic scripts and resources can be loaded.

---

#### 3. Cross-Site Request Forgery (CSRF) - Session Hijacking

* **The Vulnerability**: Web applications automatically trust active authentication cookies attached by browsers to outgoing requests.
* **The Exploit**: Attackers trick logged-in victims into visiting co-located malicious sites. The malicious site silently triggers background state-changing POST or PUT requests to the vulnerable application, and the victim\'s browser automatically forwards the session cookie, executing the unauthorized command.
* **The Mitigation Safeguards**:
  - *Anti-CSRF Tokens*: Randomized, unique, and unpredictable tokens bound directly to the user session that must be verified server-side on every state-changing request.
  - *SameSite Cookie Attribute*: Setting session cookies to \`SameSite=Lax\` or \`SameSite=Strict\` instructs browsers not to attach authentication cookies to cross-origin or third-party web requests.

---

#### 4. Additional Complex OWASP Vulnerability Vectors

* **Directory Traversal**: Occurs when applications accept file path indicators blindly. Attackers submit parent relative directory markers (double-dots-and-slashes: \`../../etc/passwd\` or \`..\\\\..\\\\windows\\\\win.ini\`) to navigate past restricted folder limits to download sensitive configuration files from the OS.
* **XML External Entity (XXE)**: Occurs when web forms process XML file uploads containing unsafe external entity declarations. Attackers use XML references to fetch local operating system keys, read system files, or execute SSRF port scans.
* **Insecure Direct Object Reference (IDOR)**: Occurs when apps expose indices or backend database IDs directly in URLs (e.g., \`profile.php?id=101\`) without verifying access permissions first. Attackers simply increment IDs (\`id=102\`) to view other users\' private data.
* **Server-Side Request Forgery (SSRF)**: Occurs when servers fetch user-supplied URLs without verification. Attackers trigger requests through the server to bypass networking firewalls, forcing the server to query its local loopback interface (localhost), cloud host metadata endpoints (\`http://169.254.169.254\`), or private internal subnets.
* **Insecure Deserialization**: Occurs when applications reconstruct serialized input datasets back into dynamic programming objects in memory without verifying integrity, allowing attackers to hijack execution chains.
* **Open Redirects**: Accepting dynamic redirect targets blind to domain verification, letting phishers leverage a trusted domain\'s identity to redirect victims to cloned phishing sites.
* **Secure Cookie Attribute**: Instructs browsers to transmit session cookies strictly over encrypted (HTTPS) pathways, preventing sniffing (interception) on plaintext HTTP networks.

---

#### 5. Academic Milestones and Scholar Award

For dissecting the critical vulnerabilities of web applications, I proudly present you with the **Web Security Appraiser Milestone - The OWASP Master Award**. Secure your input borders, code safely, and trust nothing client-side.

---

### High-Yield Core Tutorial Video Links
* **[OWASP Top 10 Full Course] (https://www.youtube.com/watch?v=V8AUTc4hsuI)**
* **[OWASP Top 10 Explained] (https://www.youtube.com/watch?v=VfM4x8R8K7U)**
* **[SQL Injection Explained] (https://www.youtube.com/watch?v=ciNHn38EyRc)**
* **[XSS Explained] (https://www.youtube.com/watch?v=EoaDgUgS6QA)**
* **[CSRF Explained] (https://www.youtube.com/watch?v=eWEgUcHPle0)**
* **[Directory Traversal Explained] (https://www.youtube.com/watch?v=6rM5iN3Q4yQ)**`,
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
        content: `### Lecture Notes: Comprehensive Social Engineering, Wireless, and Infrastructure Intrusion Vectors

Hello class. Today we examine the human aspect of security. We can build the strongest firewalls and cryptographic protocols in the world, but if a threat actor can simply call our helpdesk or set up a lookalike wireless hotspot, they can bypass our entire defense instantly. Let us dissect social engineering and wireless network intrusion vectors.

---

#### 1. Social Engineering - Exploiting Human Trust and Perception

Adversaries target human operators to bypass advanced cryptographic safeguards and endpoint software:

* **Email Phishing Campaigns**:
  - *Phishing*: Mass-scale, bulk spam campaigns delivering generic clone links to harvest credentials.
  - *Spear-Phishing*: Highly targeted phishing focused on explicit departments or projects utilizing tailored data.
  - *Whaling*: A specific subclass of spear-phishing customized with deep business intelligence targeting **high-value executive heads** (CEOs, CFOs, Board members) to manipulate currency transfers or system configurations.
* **Alternate Mediums**:
  - *Vishing (Voice Phishing)*: Utilizing voice telephone networks to impersonate administrators to bypass verification registries or capture credentials.
  - *Smishing (SMS Phishing)*: SMS-based campaigns distributing lookalike destination domains.
  - *Spim*: Unsolicited bulk spam messaging transmitted directly over Instant Messaging (IM) and chat room platforms, whereas standard **Spam** exploits email servers.
* **Physical Deceptions**:
  - *Typosquatting (URL Hijacking)*: Registering domains that are slightly misspelled copies of popular, trusted sites (such as \`g00gle.com\` or \`paypaI.com\`) to trap user typo errors.
  - *Dumpster Diving*: Sifting through physical waste bins to recover discarded password sheets, flow charts, or corporate directories.
  - *Tailgating (Piggybacking)*: Following an authorized employee directly through secured entrance gates without presenting credentials.
  - *Shoulder Surfing*: Directly observing keyboard entry strokes or screen fields from close physical spaces.
  - *Physical Mantraps*: Security gates composed of twin interlocking doors where the inner door refuses to release until the external entrance door is safely closed and authenticated, directly stopping tailgating.

---

#### 2. Local Wireless Security Exploits

* **Evil Twin Access Point**: Deploying a rogue, attacker-controlled wireless router configured to broadcast the **exact replica SSID (network name)** of a legitimate hotspot, letting attackers execute complete traffic interception on connected clients.
* **Rogue Access Point**: Physically connecting unauthorized wireless routers onto active corporate ethernet switchports without permission, introducing massive unmanaged backdoors past local firewall systems.
* **Deauthentication Attack**: Broadcasting forged wireless deauth management frames with spoofed sender addresses to forcibly disconnect clients from authentic wireless channels, pushing them to connect to an adjacent Evil Twin AP.

---

#### 3. Layer 2 and Network Protocol Floods

Our local subnets suffer from architectural trust models that can be easily manipulated:

* **ARP Poisoning (ARP Spoofing)**: Flooding standard LAN subnets with spoofed Address Resolution Protocol replies. Attackers map their local MAC address to a target gateway IP address in local switch tables, positioning the attacker as an active inline node to record or modify communications in a **Man-in-the-Middle (MITM)** exploit.
* **DNS Cache Poisoning / Spoofing**: Injecting fraudulent IP mapping records directly into a recursive DNS resolver cache, directing web traffic destined for authentic domains over to cloned phishing servers. We defend against this using **DNSSEC** to cryptographically sign resource records.
* **MAC Spoofing**: Overwriting a host NIC\'s hardware Media Access Control address to impersonate a registered, authorized corporate device, bypassing local filters.
* **VLAN Hopping**: Attackers bypass layer-2 VLAN isolation by prepending double 802.1Q trunk headers to Ethernet frames, tricking switches into routing packets across separate, isolated virtual local networks.
* **Network Floods (Denial of Service)**:
  - *TCP SYN Flood*: Denial-of-Service attack that exhausts server connection tables by flooding the server with SYN handshakes but ignoring returned SYN-ACKs, leaving thousands of half-open TCP handshakes unresolved.
  - *Smurf Attack*: DDoS mechanism sending ICMP Echo Requests (pings) to a network\'s broadcast address with the source IP spoofed to the victim\'s address, prompting co-located hosts to saturate their CPU and bandwidth paths.
  - *UDP Flood / DDoS Amplification*: Floods client ports with spoofed UDP packet fragments from compromised hosts (botnets), saturating target bandwidth.

---

#### 4. Hardened Security Architectural Boundaries

To contain compromises, system planners deploy segmented boundaries:
* **Demilitarized Zone (DMZ)**: A isolated, buffered subnetwork hosting corporate public-facing applications (such as mail or web servers), separating them from high-security internal resources.
* **Bastion Host (Jump Box)**: A hardened gateway administration server. Engineers must authenticate at the jump box first, and are then authorized to establish secure SSH paths to backend databases.
* **Air-Gapping**: Physical security isolation where a vital database or industrial SCADA control network is completely disconnected from the Internet or other untrusted networks, with zero physical or wireless connection paths.

---

#### 5. Academic Milestones and Scholar Award

For securing the interface where humans, wireless devices, and local networks converge, I award you the **Humano-centric Guardian Milestone - The Shield of the Human Firewall**. Teach your users well and verify every wireless packet; human awareness is your strongest shield.

---

### High-Yield Core Tutorial Video Links
* **[Social Engineering Explained] (https://www.youtube.com/watch?v=lc7scxvKQOo)**
* **[Phishing Explained] (https://www.youtube.com/watch?v=XBkzBrXlle0)**
* **[Physical Security Attacks] (https://www.youtube.com/watch?v=6gFj0zM8eO4)**
* **[DNS Poisoning Explained] (https://www.youtube.com/watch?v=YzLrWHZa-Kc)**
* **[Man-in-the-Middle (MITM) Explained] (https://www.youtube.com/watch?v=4JfZ9dX4Q5w)**
* **[DDoS Explained] (https://www.youtube.com/watch?v=ilhGh9CEIwM)**
* **[Evil Twin Attack Explained] (https://www.youtube.com/watch?v=9wQj4aY7vI0)**
* **[Replay Attack Explained] (https://www.youtube.com/watch?v=2h0dKfA8XlQ)**
* **[VLAN Hopping Explained] (https://www.youtube.com/watch?v=YY9K6h2Q8Ow)**
* **[Zero-Day Explained] (https://www.youtube.com/watch?v=4f3sJ0d6z4M)**`,
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
        content: `### Lecture Notes: Absolute Automation Foundations in Cybersecurity

Welcome back, class. As your professor, I must tell you that in the modern landscape of cybersecurity, you cannot survive solely by pointing and clicking inside a commercial security suite. The true master of security is someone who can bend the operating system to their will, automate tedious log searches, and quickly draft tools to respond to evolving attacks. This is why we must study programming as a fundamental security discipline. It is also why we have a golden directive in this class: keep learning. The tools of our trade change, but the logical principles of coding remain permanent. Let us explore our core automation languages, beginning with the absolute basics.

---

#### 1. Python: The High-Level Scripting Standard

For many of you, Python will be your entry point. This is an interpreted language, which means that instead of running as precompiled machine code, a program called an interpreter reads and executes your script line-by-line during runtime. While this makes Python slightly slower than compiled binaries, it gives us unparalleled speed when writing code. It runs identically across Windows, Linux, and macOS platforms, provided they have a Python interpreter installed.

Let us discuss how Python handles memory. Unlike languages like C++, Python manages memory automatically using an automatic garbage collection engine. This engine tracks how many references point to each object in memory. When a variable is no longer accessible, the engine reclaims its space, shielding you from memory leak bugs.

For data structures, look at the difference between Lists and Tuples:
- Lists are declared with square brackets, such as my_list = [1, 2, 3]. They are mutable, which means you can append to, delete from, or modify them at any point.
- Tuples are declared with parentheses, such as my_tuple = (1, 2, 3). They are immutable. Once created, you cannot modify their contents. Tuples are faster to process and consume less memory, making them excellent for fixed collections like coordinate matrices or database records.

When you are exploring new libraries, the built-in function dir() is your absolute best friend. It returns an alphabetically sorted list of all valid helper functions and properties accessible within any imported module or object.

When writing production security scripts, things will break (a server goes down, or a log file is missing). To prevent your script from crashing, we use try-except blocks. This exception handling mechanism allows us to attempt a risky network handshake or disk read, and if a runtime exception occurs, we intercept the error and handle it gracefully rather than crashing.

For web APIs and log data, we use the JSON module:
- json.loads parses a raw JSON-formatted string and transforms it into a standard Python dictionary.
- json.dumps takes a dynamic Python dictionary and serializes it into a formatted JSON string, ready to be sent over a network.

---

#### 2. Go: Statically Compiled Speed and Concurrency

As we move up the engineering ladder, we encounter Go, often called Golang. Go is a statically compiled, type-safe language. This means its compiler transforms your readable source code directly into a single, self-sufficient machine binary. Golang runtimes are blindingly fast.

Go has two massive advantages for security engineering:
- It compiles to a completely standalone binary that does not require any external runtime or dynamic frameworks to run on your target server. This makes it a perfect tool for deploying custom port scanners, backdoors, or telemetry agents to remote hosts.
- It possesses native concurrency structures called goroutines. Unlike heavy operating system threads, a goroutine is an extremely lightweight, virtual thread managed by the Go runtime dispatcher. You can spin up thousands of concurrent goroutines at once with minimal memory overhead, allowing your custom network scanners to probe thousands of targets in parallel.

---

#### 3. JavaScript and TypeScript: The Foundations of Web Auditing

Every student of security must understand the web, and you cannot understand the web without learning JavaScript and its type-safe companion, TypeScript. JavaScript is an interpreted, prototype-based scripting language that runs natively in every modern web browser.

Our primary focus with JavaScript is auditing client-side scripts. By learning how browsers process scripts, you can locate and intercept cross-site scripting vulnerabilities, audit malicious browser extensions, and analyze suspicious web forms that attempt to exfiltrate user credentials.

---

#### 4. C++: Low-Level Memory Manipulation

Now let us step down to a compiled, low-level language: C++. In this course, we study C++ because it does not have automatic garbage collection. Instead, it forces you, the developer, to manage memory manually using pointers and reference markers.

Because memory allocation is manual, C++ forms the bedrock for understanding vulnerabilities like stack-based buffer overflows. It is also the language of choice for system drivers, operating system kernels, and malware authors. By digesting C++ principles, you will be fully prepared to reverse engineer suspicious compiled binaries and analyze system architecture safely.

---

#### 5. Operating System Shell Automation: Bash and PowerShell

Finally, we must talk about the system administration workhorses: Bash and PowerShell. These are not general programming languages; they are command-line shell environments designed specifically to automate administrative tasks and orchestrate the operating system itself.

- Bash is the default shell for Unix-like architectures and Linux servers. You will use Bash commands and conditional loops to process server logs using native stream tools. Think of using grep to parse patterns, awk to extract columns, and sed to replace lines of log data.
- PowerShell is Microsoft's object-oriented shell environment. Unlike Bash, which processes logs as standard plaintext strings, PowerShell processes everything as a structured object. A Windows administrator can query active services, query system registries, and run administrative policies across thousands of active corporate computers easily.

---

#### 6. Recommended Video Lectures
* [Programming Automation and Scripting Basics](https://www.youtube.com/watch?v=rfscVS0vtbw)

---

#### 7. Academic Milestones and Scholar Award

To recognize your dedication to scripting and system control, I officially award you the **Automation Champion Milestone - The Sovereign of the Terminal Console**. Use your scripting powers to automate the tedious and protect the defenseless; do not yield your terminal to the lazy.`,
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
        content: `### Lecture Notes: Cloud Architecture Core Security Models

Let us gather round for today's lecture on cloud security, my dear students. In the early days of corporate IT, security was about protecting what you could physically touch: server racks in a cold room, physical lockboxes, and dedicated fiber wires. Today, the world runs on the cloud. The cloud is not some mystical atmosphere; it simply means renting computing infrastructure, physical processors, databases, and network wires from massive providers like Google, Amazon, or Microsoft. Let us examine how we secure this virtual domain, beginning with our fundamental financial and service models.

---

#### 1. The CapEx to OpEx Financial Paradigm Shift

When a company moves its physical infrastructure to the cloud, it experiences a major operational shift:
- On-Premises Computing represents Capital Expenditure (CapEx). It demands spending immense sums of cash upfront to purchase physical server metal, build specialized datacenters, install massive cooling complexes, and configure backup electricity generators. If your business needs pivot, you are stuck with expensive, depreciating hardware.
- Cloud Computing shifts the financial model entirely to Operational Expenditure (OpEx). Under this utility paradigm, there is no high upfront hardware cost. You pay strictly for the compute capacity, virtual machines, and network bandwidth you actively consume, matching your costs dynamically to user demands.

---

#### 2. Cloud Deployment Service Models

To design secure clouds, you must understand the three core service tiers of cloud computing, which we categorize by how much of the logical stack the cloud provider manages versus what you control:

- Infrastructure as a Service (IaaS): Here, the provider rents you raw virtualized hardware, including virtual machines, hypervisors, raw storage drives, and network interfaces. You are responsible for installing the operating system, applying security updates, deploying runtime databases, and securing your applications. You have maximum architectural flexibility, but you also bear the heaviest security burden.
- Platform as a Service (PaaS): In this tier, the provider abstractly manages the server host, physical hardware, operating system, and software runtimes for you. They give you a structured playground, or sandbox, where you simply upload and execute your application code. You do not worry about patching the kernel or updating the web server; you focus purely on securing your application and user roles.
- Software as a Service (SaaS): This is the top of the stack. The provider hosts and manages the entire software application, its database, and infrastructure themselves. You access the system securely over the internet, typically via a browser window. Standard examples include enterprise calendars, cloud email, and document sharing platforms. You have minimal configuration controls; your responsibility is strictly restricted to securing user login accounts, credentials, and access permissions.

---

#### 3. The Shared Responsibility Model

If there is one concept from today's lecture that I want you to memorize, it is the Shared Responsibility Model. This represents a legally binding boundary dividing the defensive duties of the cloud provider from those of the client. Many beginners mistakenly assume that since they migrated to a multi-billion dollar cloud provider, their data is instantly secure. This is a hazardous misconception.

- Security OF the Cloud: The cloud provider is solely responsible for protecting the infrastructure that runs all of their services. This includes physical security of the datacenters (concrete barrier gates, biometrics, surveillance cameras), power management (uninterruptible power supplies, generators), and the underlying virtualization hypervisors that partition parent processors into guest virtual machine cells.
- Security IN the Cloud: You, the customer, are responsible for protecting everything you deploy inside those cloud partitions. This includes managing guest operating system patches, defining network firewall policies, configuring user access control accounts, and encrypting your cloud databases. If you leave a database open to the public internet with no password, that is your security failure, not the cloud provider's.

---

#### 4. Infrastructure as Code (IaC)

Finally, we must talk about how we deploy these architectures. In a secure enterprise environment, we do not log into web dashboards and click buttons to build networks, and we do not configure virtual machines manually. That approach is prone to mistakes and misses critical configurations.

Instead, we use Infrastructure as Code, or IaC. Under this methodology, we define our entire network topology (subnets, route tables, server clusters, API routing, and firewall rules) using clear, readable, and structured configuration files. We write files using platforms like Terraform. These templates allow us to peer-review our entire architecture, track changes over time, and spin up identical, perfectly secure virtual datacenters automatically in minutes.

---

#### 5. Recommended Video Lectures
* [Cloud Computing and Security Models Introduction](https://www.youtube.com/watch?v=un6ZyFkqFKo)

---

#### 6. Academic Milestones and Scholar Award

For mastering the operational boundaries of cloud architectures and defining the core duties of virtual environments, I officially award you the **Cloud Sentinel Milestone - The Master of the Shared Domain**. Stand watch on your parameters, secure your APIs, and never let down your virtual shield.`,
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
        content: `### Lecture Notes: Enterprise Endpoint Security and Host Hardening

Welcome back, class. Let us settle in. Today we face a challenging reality: in any modern company, your largest and most volatile vulnerability is not your enterprise firewall; it is the chaotic array of employee laptops, mobile phones, and local servers—what we collectively call endpoints. Every endpoint that connects to your corporate network represents a door that an attacker can kick open. In today's lecture, we will study host hardening, which is the systemic process of securing systems and network segments to reduce their vulnerable attack surfaces. Let us dive in.

---

#### 1. Posture Validation and Network Access Control

Let us consider a common corporate scenario. An employee or a temporary contractor brings their personal laptop from home, logs in, and plugs their machine straight into a physical ethernet port in your corporate headquarters. How do you guarantee their machine does not contain automated malware designed to scan your network and corrupt databases?

We do this by establishing Network Access Control, or NAC. A standard NAC system serves as an automated digital checkpoint. Instead of admitting the laptop to the primary network blocks straight away, NAC intercepts the request and executes a posture validation check:
- It audits the machine to verify if a corporate endpoint agent is active.
- It validates that its antivirus signatures are freshly updated.
- It checks that the operating system has the latest software security patches installed.
- It confirms that the local workstation firewall is turned on.

If the laptop satisfies these checks, it is granted access to the main corporate LAN. If even a single validation fails, the NAC agent quarantines the system. It places the device inside a highly restricted, isolated Quarantine VLAN. In this sandbox, the laptop can securely download updates, patch its vulnerabilities, and update its antivirus, without presenting any risk to the rest of the company's systems.

---

#### 2. Active Directory Governance and Group Policy Objects

In an enterprise network with thousands of computers, an IT administrator cannot log into every single machine individually to check settings. We manage this scale centrally using Active Directory and Group Policy Objects, or GPOs.

Active Directory is Microsoft's centralized directory service database that organizes and authorizes all domains, devices, and users in an environment. A GPO is an administrative rule or policy that domain controllers push automatically to thousands of target workstations in real time. We deploy GPOs to lock down endpoints systematically by:
- Enforcing password length, complexity, and maximum ages.
- Restricting or disabling local guest administrator account groups.
- Disabling the auto-run function on USB mass storage ports to block bad USB drives.
- Configuring corporate screensavers to lock automatically after a set period of inactivity.

---

#### 3. Media Access Control Address Filtering

At the interface level, we have one of the oldest layer-2 defense mechanisms: MAC Address Filtering. Every network interface card has a unique, physical hardware identifier called a Media Access Control address. Some administrators configure local switches or wireless routers to only communicate with a strict list of allowed MAC addresses.

However, I must warn you as a security teacher that MAC filtering is a very weak perimeter control. In the airwaves of a wireless network, MAC addresses travel in plaintext. An attacker can easily sniff the air, capture an authorized client MAC, and spoof their own network interface card to match that identity, completely bypassing the filter on the router. Treat MAC filtering as a minor boundary, never as your core defense.

---

#### 4. Recommended Video Lectures
* [Endpoint Security and Hardening Protocols](https://www.youtube.com/watch?v=ciNhn38KCzY)

---

#### 5. Academic Milestones and Scholar Award

For mastering the protocols that secure endpoints and govern large corporate computing arrays, I award you the **Endpoint Guardian Milestone - The Warden of Host Fortresses**. Keep your hosts patched, your policies strict, and do not trust any hardware until it has verified its posture.`,
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
        content: `### Lecture Notes: SOC Ingestion, Syslog Analytics, and Encryption Protocols

Welcome to class, my dear security practitioners. Today's lecture is about the central brain of enterprise defense: the Security Operations Center, or the SOC. The SOC is where specialized analyst teams sit twenty-four hours a day, monitoring systems, tracing attack alerts, and reviewing logs. To make sense of the billions of rows of operational log data created across a corporate ecosystem, we must deploy intelligent telemetry ingestion databases, understand packet streams, and retire all cleartext protocols. Let us explore.

---

#### 1. Ingestion Engines and SIEM Normalization

Every single router, server, endpoint agent, firewall, and database in your company is constantly writing diagnostic entries. If a SOC analyst had to log into each device individually to read logs, an active attack would remain completely invisible.

To solve this, we deploy a Security Information and Event Management platform, or a SIEM. A SIEM acts as a master aggregator that collects files and telemetry streams from thousands of disparate systems. When these logs arrive, the SIEM processes them through normalization and event correlation:
- Normalization reformats unstructured logs from different manufacturers into a single, common database schema, mapping elements like source IP, destination port, and event status consistently.
- Event Correlation evaluates those records in a split-second, using pre-established rules to detect patterns. For example, if a firewall logs five failed login attempts on a server, quickly followed by a successful database query from that same source, the SIEM correlates those independent events and raises a priority brute-force alert.

---

#### 2. Analyzing Syslog Anatomy and Severity Indicators

Understanding the exact format of system logs is vital. Syslog is an open protocol standard used to send message logs from Unix-like systems and networking hardware over UDP or TCP Port 514. A standard Syslog alert is composed of distinct sections:
- The Facility code represents the type of partition or program that created the log (such as the kernel, authentication services, mail protocols, or printing systems).
- The Severity level ranges mathematically from 0 (indicating a catastrophic system emergency) up to 7 (routine debugging messages).
- The Message payload contains the precise host IP address, process ID, timestamp, and detailed action description.

---

#### 3. Moving to Secure Cryptographic Protocols

One of your first tasks in any real corporate hardening mission is to find and shut down any cleartext protocols. When data travels in plaintext, an eavesdropper on the local network can capture entire packet streams with basic sniffers, harvesting active credentials and session tokens right out of the air. We must swap these obsolete protocols for their secure, encrypted, cryptographic alternatives:

- Swap Telnet (Port 23) for SSH (Secure Shell, Port 22): Telnet transmits passwords in cleartext. SSH encrypts the entire command-line communication channel.
- Swap HTTP (Port 80) for HTTPS (HTTP Secure, Port 443): Swap plain HTTP web pages for HTTPS, which runs over SSL or TLS to guarantee confidentiality, packet integrity, and web identity verification.
- Swap LDAP (Port 389) for LDAPS (Secure LDAP, Port 636): Traditional LDAP sends active directory administrative queries in plaintext. LDAPS wraps the directory query in a secure SSL/TLS session.
- Swap FTP (Ports 20 and 21) for SFTP (SSH File Transfer Protocol, Port 22): Plain FTP transmits login credentials and transfers entire files in cleartext. SFTP runs within SSH to protect the bulk transaction.
- Swap SNMPv1 or SNMPv2 for SNMPv3: Simple Network Management Protocol versions 1 and 2 secure administrative routers using cleartext passwords called "community strings". SNMPv3 adds cryptographic encryption, integrity checks, and user authentication.
- Swap SIP for SIP-S: Session Initiation Protocol manages voice and video calls in cleartext. SIP-S encrypts the communication to prevent illegal tapping of corporate calls.

---

#### 4. Recommended Video Lectures
* [Understanding SIEM and Core Log Architecture](https://www.youtube.com/watch?v=RkP6gA6xB7M)

---

#### 5. Academic Milestones and Scholar Award

For mastering the orchestration of security ingestion log engines and auditing enterprise communications for secure ports, I award you the **SOC Watchdog Milestone - The Sage of Telemetry Logs**. Let no packet travel in cleartext, and let no log go unmonitored.`,
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
        content: `### Lecture Notes: SANS/NIST Incident Response and Forensic Life Cycles

Hello, class. Please take your seats. In this security course, we must make a foundational assumption: our perimeters will eventually fail. An employee will click a deceptive link, or an attacker will deploy a zero-day exploit that bypasses our defenses. When that happens, the success of your company does not depend on a miracle; it depends on a rehearsed, structured incident response plan. Today, we will study the classic six-phase incident response lifecycle derived from the SANS and NIST frameworks. Let us walk through the process of neutralizing active exploits, and discuss how we isolate threat evidence.

---

#### 1. The Six-Step Incident Response Lifecycle

When a security incident begins, security teams must coordinate their actions through six distinct stages:

1. Preparation: This is the most critical phase, and it happens before any attack begins. Here, we build policies, create detailed response runbooks, configure robust server logs, deploy endpoint agents, and train the Computer Security Incident Response Team, or CSIRT. If you do not prepare, your response will be disorganized and slow.
2. Identification (Detection): Recognizing and validating that a real security compromise is occurring. Analysts parse SIEM warning alerts or host indicators to confirm a baseline breach. We locate Indicators of Compromise, such as suspicious file hashes, outbound connections to blacklisted IP addresses, or unauthorized registry changes on servers.
3. Containment: This is the speed gate. The moment a breach is validated, we must isolate the infected systems to stop the attack from spreading laterally across the network. If an office laptop has ransomware, we run commands to disconnect its network interface card or physically disconnect its ethernet line. However, do not turn off the machine yet; we collect forensic memory captures and active network logs first, since powering off the host destroys volatile ram data.
4. Eradication: Digging out the roots. Once the infected servers are successfully contained, we find and remove every trace of malware, close all active backdoor connections, audit and terminate compromised accounts, and deploy the software patches necessary to close the exploit gate.
5. Recovery: Restoring systems to active, secure production operations. This involves testing restored hosts, verifying they are secure, importing clean databases from offline, air-gapped backups, and gradually opening up application services to employees and clients.
6. Lessons Learned: Conducting a retrospective review of the entire incident. The CSIRT meets with organization executives to document exactly how the attacker breached the systems, analyze why certain detections were missed, evaluate the containment speed, and update the incident response playbooks to prevent future recurrence.

---

#### 2. Classifying Threat Log Indicators

During incident operations, forensic analysts must identify and organize attack details. We classify these details as Indicators of Compromise, or IoCs. Let us examine how we track them:
- Mathematical file hashes like SHA-256 or MD5 uniquely identify specific malware payloads.
- Malicious domains and outbound command-and-control IP addresses point to active attacker management channels.
- Unauthorized user configurations and credential creations alert us to backdoor system access.

---

#### 3. Recommended Video Lectures
* [The Incident Response Life Cycle](https://www.youtube.com/watch?v=y-m4rU4_eH_4)

---

#### 4. Academic Milestones and Scholar Award

For mastering the procedures that isolate active system threats and organize digital forensic responses during critical breaches, I award you the **Crisis Commander Milestone - The Order of the Blue Shield**. Respond with speed, analyze with rigor, and always learn from the battles you fight.`,
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
        content: `### Lecture Notes: Cybersecurity Compliance, Risk Management, and Standards

Gather round, my dear students, for today's lecture on corporate governance, risk assessment, and standard architectures. When you serve as security engineers, you do not operate in a vacuum. You must justify your technical controls to business boards, auditors, and legal compliance regulators. To achieve this, we use structured governance frameworks to design, audit, and authorize enterprise facilities. Let us study these compliance structures step-by-step.

---

#### 1. Compliance Frameworks and Security Catalogs

A security framework is a structured set of guidelines, practices, and controls designed to coordinate your defensive posture. Let us examine the most popular industry standards:

- ISO/IEC 27001: This is a prominent, certifiable international standard regulating an Information Security Management System, or an ISMS. It focuses heavily on organizational governance, security policies, documentation, and continuous management audits to align security practices with high-level corporate risk policies.
- NIST Cybersecurity Framework (CSF): A highly popular framework developed by the United States government. It maps security outcomes across five core high-level actions: Identify your assets, Protect your systems, Detect active compromises, Respond to security alerts, and Recover operational states.
- NIST Risk Management Framework (RMF): A highly structured, formal seven-step lifecycle used by federal agencies to secure, authorize, and continuously monitor computers and computing interfaces.
- CIS Controls: A prioritized list of highly technical, actionable defense guidelines created by the Center for Internet Security. Instead of vague policy statements, the CIS controls tell you exactly what configurations to apply, such as tracking hardware inventory, controlling admin permissions, and patching software.

---

#### 2. Risk Assessment Methodologies

To choose your security tools wisely, you must calculate risk. We model risk through two distinct assessment methodologies:

- Quantitative Risk Assessment: Expressing risk in precise, real-world financial numbers. For example, if a key database host is valued at fifty thousand dollars (Asset Value), and a flood would damage eighty percent of its data (Exposure Factor), the Single Loss Expectancy (SLE) represents forty thousand dollars. If this disaster is estimated to happen once every two years (Annualized Rate of Occurrence of zero point five), our Annualized Loss Expectancy (ALE) is mathematically computed as:
  $$\\text{ALE} = \\text{SLE} \\times \\text{ARO}$$
  This gives us twenty thousand dollars per year. A business can now compare this calculation to determine if buying a defensive tool makes financial sense.
- Qualitative Risk Assessment: Evaluating risk using non-numeric, logical variables and descriptive boards (such as scoring issues as low, medium, or high severity on a visual risk matrix). This is based on expert consensus, scenario modeling, and operational experience.

---

#### 3. Regulatory and Incident Notification Obligations

As our digital systems collect more personal data, compliance regulations impose strict legal boundaries. For example, the General Data Protection Regulation, or GDPR, protects human consumer data in the European Union. Under these laws, your organization must notify supervisory authorities of a personal data breach within seventy-two hours of discovery, highlighting the vital importance of high-speed incident detection in modern networks.

---

#### 4. Recommended Video Lectures
* [Introduction to NIST and Security Governance Standards](https://www.youtube.com/watch?v=O1cRJWYF-g4)

---

#### 5. Academic Milestones and Scholar Award

For mastering the governance models, risk evaluation systems, and compliance frameworks that protect modern human enterprise data, I award you the **Governance Sovereign Milestone - The Compliance Laureate Award**. Let your designs be compliant, your risk calculations precise, and your digital trust unshakeable.`,
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
        content: `### Lecture Notes: Command-Line Network Diagnostics and Linux File Processing

Welcome to your next laboratory lecture, class. As cybersecurity practitioners, you must learn to navigate system environments natively from a command-line interface. Let us agree on something right now: a true security professional does not depend on graphical icons or wizard utilities to diagnose a network. In this lesson, we will cover the essential command-line network diagnostic tools and native file utilities that form the foundation of real-world system audits and digital forensics. Let us begin.

---

#### 1. Command-Line Network Diagnostic Utilities

When a system fails or an alert triggers, you must trace the network path and inspect socket bindings natively inside the terminal. Let us look at our essential diagnostic commands:

- Ping: Sends standard ICMP (Internet Control Message Protocol) Echo Request packets to a target host and measures the travel time of the returning Echo Reply packets. This allows us to confirm if a remote IP address is active, check latency, and identify packet loss across a network path.
- Traceroute (or Tracert on Windows): Traces the sequential route a packet travels to its destination, mapping every router hop along the way. It does this by incrementally incrementing the Time To Live, or TTL, field in packet headers, causing each router in the path to return an ICMP Time Exceeded message, illuminating the logical path of your packets.
- Nslookup and Dig: Diagnostic utilities used to query Domain Name Systems, or DNS. While nslookup is a basic tool, dig is a powerful Linux utility that queries DNS servers to inspect complex resource logs (such as mail exchangers, text indicators, and authority certifications), valuable for DNS poisoning investigations.
- ARP: Interrogates the local Address Resolution Protocol cache to view physical MAC-to-IP address mapping tables on the local subnetwork segment, allowing you to identify hardware addresses.
- Netstat and SS: Displays active network connections, routing tables, listening interfaces, and process IDs. While netstat is the classic tool, ss is the modern, high-speed Linux utility used to inspect socket states and track listening applications in detail.
- Ipconfig (Windows) or Ifconfig and IP (Linux): Command tools used to read and manage active network interface parameters, display IP assignments, and audit active network subnet masks.

---

#### 2. Linux Native File Processing Utilities

In digital forensics, you often have to parse millions of lines of server logs on a remote terminal. We do not copy logs to desktop spreadsheets; we process them natively using the Linux command line:

- Grep: A highly powerful utility that searches files for specific text patterns or regular expressions. For sample log investigations, you can grep for specific IP addresses, file paths, or browser agents instantly.
- Tail and Head: Grabs the very end or the very beginning of a file. By utilizing the dynamic flag tail -f, you can follow log entries in real time, viewing commands as the operating system writes them.
- Cat and Less: Handles file reading. While cat dumps the entire contents of a file to your terminal, less is a scrollable page reader that lets you search, navigate, and parse giant files without loading their entire volume into memory.
- DD: A block-level utility used for bit-for-bit raw copying of disk drives. To create an untampered forensic image of a compromised computer partition, a forensic investigator executes:
  $$\\text{dd if=/dev/sda of=disk.img}$$
  where if represents your raw input disk source path and of represents your designated output target image file.
- Iptables: The built-in host-level utility used to define packet filtering, configure IP address forwarding boundaries, and manage firewall ports inside Linux system kernels.

---

#### 3. Recommended Video Lectures
* [Core Command Line Operations and Network Tools](https://www.youtube.com/watch?v=5WfiTHiU4x8)

---

#### 4. Academic Milestones and Scholar Award

For mastering the terminal utilities that reveal network states and process raw disk sectors natively, I officially award you the **Diagnostic Master Milestone - The Sovereign of Command Utilities**. Speak directly to your system, master the shell, and let no packet hide from your query.`,
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
        content: `### Lecture Notes: Forensic Extractions, Isolated Sandboxes, and OSINT Distribution Suites

Welcome back, class. Let us take our seats. In today's lecture, we shift our focus to digital forensics and threat intelligence. As investigators, you will capture network packets, analyze files for malicious indicators, and study dangerous threats in isolated sandboxes. To complete these actions without risking your company's network or compromising your own machine, we must utilize specialized tools, secure virtual zones, and custom security operating systems. Let us explore.

---

#### 1. Forensic Network Packet Capture and Analysis

When an adversary compromises a web server, they inevitably transmit data over the network wires. To trace their actions, we analyze packet captures, which we save as PCAP files.

Forensic engineers use utilities like Wireshark (a graphical packet analyzer) or command-line sniffer tools like tcpdump to capture raw frames and reconstruct sessions. For example, if an attacker exfiltrates database tables using cleartext protocols, you can open Wireshark, follow the raw TCP stream, and reconstruct the exact files and credentials sent in transit.

---

#### 2. Safe Inspection via Malware Sandboxing

What should you do if an analyst intercepts a suspicious email attachment containing an unrecognized document executable? You absolutely must not double-click that file on your personal workstation.

In security, we deploy isolated virtual sandboxes to safely analyze threats. A sandbox is a secure, isolated computer environment containing zero logical paths back to the company's production systems. In this virtual space, we can detonate and run suspicious programs while watching their behaviors:
- We check if the program attempts to inject malicious processes into system memory.
- We monitor if it tries to modify local system registries to establish persistence.
- We inspect if it attempts to make outbound network socket connections to suspect command-and-control servers.

---

#### 3. Open Source Intelligence and Reputation Directories

To analyze threat identifiers, we must cross-reference them with global intelligence data using Open Source Intelligence, or OSINT, systems:
- Web Reputation Directories: Services like Virustotal and Urlvoid analyze submitted domain names, IP addresses, and file hashes against dozens of independent blacklists and security database libraries, helping you identify malware instantly.
- Shodan: A specialized global search engine that indexes active internet-connected devices, industrial control systems, and open ports, allowing you to discover exposed systems.

---

#### 4. Specialized Security Distributions and Frameworks

To make these tools readily accessible, we use standardized operating system platforms loaded with security applications:
- Kali Linux: A Debian-based security distribution loaded with hundreds of offensive auditing packages. It is designed specifically for penetration testing, password audits, and forensic tasks.
- Parrot OS: An elegant, exceptionally lightweight Debian alternative. Parrot OS requires less memory and processor overhead, making it highly suitable for resource-limited systems, development projects, and anonymous security routing.

---

#### 5. Recommended Video Lectures
* [Network Packet Forensics and Wireshark Controls](https://www.youtube.com/watch?v=TkCSr30UojM)

---

#### 6. Academic Milestones and Scholar Award

For mastering the utilities of network packet extraction, sandbox threat analysis, and digital forensics, I award you the **Forensic Scout Milestone - The Cryptic Detective Award**. Keep your forensic methods clean, protect your evidence, and let the facts tell the truth.`,
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
        content: `### Lecture Notes: Rules of Engagement, Auditing Types, and Hands-on Capture the Flag Labs

Welcome, class. Today we will discuss the delicate balance of offensive security auditing. Many students are attracted to cybersecurity because they want to learn how systems are breached, but you must realize that what separates a professional security consultant from a common cyber offender is a single, fundamental factor: a legally binding contract and legal permission. Today, we will study the legal frameworks, rules of engagement, pentesting methodologies, and training ranges that define ethical hacking. Let us begin.

---

#### 1. The Legal Frame: Rules of Engagement

Before a security auditor runs a single scan, writes a script, or triggers an exploit against a client's server, they must establish a formal document called the Rules of Engagement, or the ROE. This legal agreement sets the strict boundaries of the entire security assessment:
- It defines the exact scope: which servers, IP addresses, APIs, and subnets can be audited, and which ones are strictly off-limits.
- It schedules the hours of operation: specifying whether testing must happen at night to avoid impacting business systems.
- It outlines the execution methodologies: detailing whether physical access, social engineering, or active Denial of Service attacks are permitted.
- It specifies emergency contact procedures: in case an audit tool accidentally crashes a production server.

Operating outside the ROE is not just a breach of policy; it is a federal crime.

---

#### 2. Systems Auditing Methodologies

Security assessments are structured into three distinct methodologies, based on how much information is shared with the auditor:

- Black-Box Testing: The security auditor is granted absolutely zero prior knowledge about the client's network design, source code, or configurations. This mimics an external hacker, requiring the auditor to conduct thorough initial reconnaissance and build their maps from scratch.
- White-Box Testing: The auditor receives comprehensive, details documentation, including system architecture drawings, user accounts, and core source code. This represents a thorough, fast audit, allowing us to find deep vulnerabilities that might take black-box scanners months to discover.
- Grey-Box Testing: A balanced, hybrid approach where the auditor receives partial, baseline information (such as a standard user login credential or a basic network map). This represents a highly realistic simulation of a malicious employee or an insider threat.

---

#### 3. Safe Training Environments: Capture the Flag Platforms

To train your skills safely without risking real servers, we use gamified cyber ranges called Capture the Flag, or CTF, platforms. Platforms like TryHackMe, Hack The Box, and PortSwigger Web Security Academy provide secure, legal virtualization sandboxes. In these ranges, your goal is to discover and exploit real software vulnerabilities to retrieve a secret cryptographic text string, known as a flag, proving you solved the challenge.

---

#### 4. Recommended Video Lectures
* [Penetration Testing Scope and Cyber Ranges](https://www.youtube.com/watch?v=2j9k5m7n1A0)

---

#### 5. Academic Milestones and Scholar Award

For mastering the ethical constraints, legal boundaries, and hands-on testing methodologies of offensive security auditing, I award you the **Adversary Emulator Milestone - The Ethical Champion Award**. Test with honor, document with precision, and always use your offensive skills to build a stronger defense.`,
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
        content: `### Lecture Notes: Cybersecurity Professional Credentials and Roadmap Strategy

Welcome, class, to today's informational seminar on professional security certifications. As you transition from students to security engineers, auditors, and managers, you will require professional credentials to validate your technical skills, demonstrate your dedication to continuing education, and satisfy regulatory requirements. In this lecture, we will map the major cybersecurity certifications, discuss their unique focus areas, and build your long-term career roadmap. Let us explore.

---

#### 1. Foundational Systems Security: CompTIA Certifications

CompTIA credentials are standard baselines used across the globe to validate core technical competencies:
- Security+: This is the standard entry-level certification for all systems security professionals. It validates your understanding of core concepts like cryptography, access controls, network threats, and compliance.
- CySA+ (Cybersecurity Analyst): This is a highly technical, defender-focused credential. It validates your ability to perform tactical threat hunting, configure SIEM indicators, analyze host and network logs, and respond to breaches.
- CASP+ or SecurityX: An advanced technical security certification designed for seasoned engineers who want to remain technical practitioners rather than moving into policy management.

---

#### 2. Governance, Risk, and Compliance: ISACA Credentials

For those of you who want to focus on corporate auditing, enterprise risk management, and administrative governance:
- CISM (Certified Information Security Manager): The gold standard credential for managing executive programs, developing strategic security policies, and directing incident recovery.
- CISA (Certified Information Systems Auditor): Focuses on auditing corporate assets, tracking data flows, verifying physical security standards, and ensuring financial reporting compliance.

---

#### 3. Management and Architecture: The ISC2 Domain

When you reach senior levels of security engineering or corporate leadership:
- CISSP (Certified Information Systems Security Professional): Widely recognized as a premium milestone certification. It validates high-level expertise across eight comprehensive security domains, including asset security, identity access management, and communications design. It requires years of verified, professional security experience to earn the full credential.

---

#### 4. Practical Offensive Engineering

If your primary career interest sits in legal penetration testing and offensive audits:
- CEH (Certified Ethical Hacker): A foundational, multiple-choice certificate that covers general hacking tools and methodology concepts.
- OSCP (Offensive Security Certified Professional): A rigorous, twenty-four hour practical exam where you are given a network of target servers and must actively exploit hosts, escalate local user privileges, pop administrative roots, retrieve flags, and compile a formal technical pentesting report.

---

#### 5. Recommended Video Lectures
* [Cybersecurity Analyst Careers and Certifications Pathways](https://www.youtube.com/watch?v=inWWhr5tnEA)

---

#### 6. Academic Milestones and Scholar Award

To recognize your dedication to mapping your professional pathways and pursuing lifelong technical study, I officially award you the **Roadmap Architect Milestone - The Lifelong Scholar Award**. Set your goals, plan your study hours, and let your credentials always reflect a genuine, deep-seated mastery of the craft.`,
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
  },
  {
    id: 'mod-group8',
    areaId: 'group-8',
    title: 'Senior Capstone: Real-World Cyber & Networking Dissertations',
    description: 'A comprehensive portfolio of 10 exam-caliber final year capstone projects. Implement and defend enterprise network security topologies, automated threat-detection hubs, secure dev pipelines, and forensic sandboxes.',
    lessons: [
      {
        id: 'les-capstone-p1',
        moduleId: 'mod-group8',
        title: 'Capstone 1: Enterprise Router-on-a-Stick Secure VLAN Schema',
        duration: 45,
        youtubeVideoId: 'ZtqBQ68cfJc',
        content: `### Lecture Notes: Capstone 1: Secure Enterprise Multi-VLAN Router-on-a-Stick Topology

Welcome back to the final capstone laboratory, class. As your professor, I will guide you through this final milestone project. This capstone serves as the ultimate technical integration, requiring you to combine security concepts, networking, implementation ciphers, and validation rules to defend a modern enterprise infrastructure. Let us approach this challenge with academic precision and a continuous drive to learn.

---
#### 🎓 Project Hypothesis & Design Scenario
In an enterprise environment, flat network designs pose catastrophic security issues. A compromised client terminal inside a guest WiFi segment can easily peer-discover secure internal treasury databases. This senior project requires designing, allocating, and defending a segmented multi-VLAN enterprise architecture using a single physical router link connected to a Layer 2 switch using subinterfaces—commonly called **Router-on-a-Stick inter-VLAN routing**.

#### 🖥️ Lab Architecture & Topology
* **Core Router Security Gateway (OPNsense or Cisco IOS)**: Single Trunk link connected to the switch.
* **Core Switch (Cisco Layer 2)**: Bundles ports into active security VLANs.
* **Network Segmentation Schema**:
  * **VLAN 10**: Secure Management Core (IP Segment: \`10.10.10.0/24\`, Gateway subinterface: \`10.10.10.1\`)
  * **VLAN 20**: Corporate Workstations (IP Segment: \`10.10.20.0/24\`, Gateway subinterface: \`10.10.20.1\`)
  * **VLAN 30**: Guest WiFi Segment (IP Segment: \`10.10.30.0/24\`, Gateway subinterface: \`10.10.30.1\`)
  * **VLAN 99**: Isolation Native VLAN (Dedicated non-default Native VLAN to prevent double-tagging hops)

---

#### ⌨️ Implementation Configuration Commands
Below are the Cisco IOS configuration snippets required to establish the inter-VLAN gateways on the router and trunk pathways on the core switch:

\`\`\`bash
# --- CORE ROUTER: Creating Interface Subinterfaces with 802.1Q Tags ---
Router> enable
Router# configure terminal
Router(config)# interface gigabitEthernet 0/0
Router(config-if)# no shutdown
Router(config-if)# exit

# Configure Management Gateway (VLAN 10)
Router(config)# interface gigabitEthernet 0/0.10
Router(config-subif)# encapsulation dot1Q 10
Router(config-subif)# ip address 10.10.10.1 255.255.255.0
Router(config-subif)# exit

# Configure Corporate Gateway (VLAN 20)
Router(config)# interface gigabitEthernet 0/0.20
Router(config-subif)# encapsulation dot1Q 20
Router(config-subif)# ip address 10.10.20.1 255.255.255.0
Router(config-subif)# exit

# Configure Guest Gateway (VLAN 30)
Router(config)# interface gigabitEthernet 0/0.30
Router(config-subif)# encapsulation dot1Q 30
Router(config-subif)# ip address 10.10.30.1 255.255.255.0
Router(config-subif)# exit


# --- CORE SWITCH: Allocating Ports & Activating Trunks ---
Switch> enable
Switch# configure terminal

# Define database VLAN namespaces
Switch(config)# vlan 10
Switch(config-vlan)# name MANAGEMENT_CORE
Switch(config-vlan)# exit
Switch(config)# vlan 20
Switch(config-vlan)# name CORPORATE_STAFF
Switch(config-vlan)# exit
Switch(config)# vlan 30
Switch(config-vlan)# name GUEST_WIFI
Switch(config-vlan)# exit
Switch(config)# vlan 99
Switch(config-vlan)# name NATIVE_TRUNK_SEC
Switch(config-vlan)# exit

# Configure the upstream Trunk link to physical routing gateway
Switch(config)# interface gigabitEthernet 0/1
Switch(config-if)# switchport trunk encapsulation dot1q
Switch(config-if)# switchport mode trunk
Switch(config-if)# switchport trunk native vlan 99
Switch(config-if)# no shutdown
Switch(config-if)# exit

# Assign access-facing client terminals
Switch(config)# interface range fastEthernet 0/5 - 10
Switch(config-if-range)# switchport mode access
Switch(config-if-range)# switchport access vlan 20
Switch(config-if-range)# exit
\`\`\`

---

#### 🧪 Verification & Defensive Defense Protocols
To defend the network and pass the Capstone jury defense, the student must apply **Access Control Lists (ACLs)** to isolate segments. The guest subnet (VLAN 30) must be forbidden from initiating pings or connections to the Administration Core (VLAN 10):

\`\`\`bash
# Create defensive ACL on the Gateway Router
Router(config)# ip access-list extended BLOCK_GUEST_TO_MGMT
Router(config-ext-nacl)# deny ip 10.10.30.0 0.0.0.255 10.10.10.0 0.0.0.255
Router(config-ext-nacl)# permit ip any any
Router(config-ext-nacl)# exit

# Apply ACL inbound on the Guest subinterface
Router(config)# interface gigabitEthernet 0/0.30
Router(config-subif)# ip access-group BLOCK_GUEST_TO_MGMT in
Router(config-subif)# exit
\`\`\`

**Milestone Validation Verification**:
1. Ping from VLAN 20 (\`10.10.20.5\`) to Gateway (\`10.10.20.1\`) must succeed.
2. Ping from VLAN 30 (\`10.10.30.5\`) to management server (\`10.10.10.15\`) must be actively **BLOCKED/DROPPED** by ACL.
3. Validate Native VLAN state matches: \`show interfaces trunk\` on Cisco IOS must output Native VLAN as **99**, not **1**.

---

#### 5. Recommended Video Lectures
* [Capstone 1: Secure Enterprise Multi-VLAN Router-on-a-Stick Topology Video Tutorial Walkthrough](https://www.youtube.com/watch?v=ZtqBQ68cfJc)

---

#### 6. Academic Milestones and Scholar Award

To recognize your dedication to complex security integration and practical defense, I officially award you the **Sovereign Network Architect Milestone - Master of the Secure Trunk Gateway**. Carry your architectural discipline with pride; never let flat architectures corrupt your corporate perimeter.
`,
        quiz: {
          id: 'q-capstone-p1',
          title: 'Router-on-a-Stick Defense',
          questions: project1Quiz
        }
      },
      {
        id: 'les-capstone-p2',
        moduleId: 'mod-group8',
        title: 'Capstone 2: Wazuh & ELK Stack SIEM Deployment Forge',
        duration: 50,
        youtubeVideoId: '8f8U8E_pD0g',
        content: `### Lecture Notes: Capstone 2: Wazuh & ELK Stack SIEM Deployment

Welcome back to the final capstone laboratory, class. As your professor, I will guide you through this final milestone project. This capstone serves as the ultimate technical integration, requiring you to combine security concepts, networking, implementation ciphers, and validation rules to defend a modern enterprise infrastructure. Let us approach this challenge with academic precision and a continuous drive to learn.

---
#### 🎓 Project Hypothesis & Design Scenario
Security Operations Centers (SOCs) require central correlation interfaces to monitor distributed endpoints. Manual inspection of local system journals is impossible to scale. This capstone guides the architectural implementation of a full central **Security Information & Event Management (SIEM)** server deploying the **Wazuh Manager** integrated with an **Elasticsearch/OpenSearch** logging index.

#### 🖥️ Lab Architecture & Topology
* **Wazuh & Elastic Server Cluster**: Anchored inside central management subnet IP \`192.168.100.5\`.
* **Client Host Endpoint (Linux Server)**: Running local services at address \`192.168.100.22\`.
* **Flow Mechanism**:
  1. Operating logs capture via Wazuh-Agent daemon.
  2. TLS-encrypted transport back to port \`1514\` on the manager.
  3. JSON document indexing on Elasticsearch.
  4. Visualization widgets mapped to custom Kibana/Wazuh dashboards.

---

#### ⌨️ Implementation Configuration Commands
Run the baseline single-node installation scripts and configure a custom alert rule on the central manager to audit brute-force SSH logins:

\`\`\`bash
# --- Central SIEM Node Setup (Ubuntu/Debian Server) ---
# Fetch the automated deployment script
curl -sO https://packages.wazuh.com/4.x/wazuh-install.sh

# Detonate single-node security deployment (Manager, Indexed DB, Dashboard)
bash wazuh-install.sh -a


# --- Client Endpoint Integration (Target Host) ---
# Register the client node with the central SIEM manager
curl -so wazuh-agent.deb https://packages.wazuh.com/4.x/apt/pool/main/w/wazuh-agent/wazuh-agent_4.6.0-1_amd64.deb
sudo WAZUH_MANAGER="192.168.100.5" dpkg -i wazuh-agent.deb

# Enable and spin up agent background daemon
sudo systemctl daemon-reload
sudo systemctl enable wazuh-agent
sudo systemctl start wazuh-agent


# --- Configuring Custom SIEM Correlative Rules (Manager Node) ---
# Edit /var/ossec/etc/rules/local_rules.xml on the SIEM Server:
# Add XML correlation block to trigger Alert Level 12 on multi-failed brute logins:
#
# <group name="ssh_bruteforce_audit,">
#   <rule id="100015" level="12">
#     <if_sid>5716</if_sid> <!-- Base failure SSH event -->
#     <frequency>6</frequency>
#     <timeframe>30</timeframe>
#     <description>Critical SSH Brute Force Ingestion Sequence Detected</description>
#     <group>authentication_failed,pci_dss_10.2.4</group>
#   </rule>
# </group>
\`\`\`

---

#### 🧪 Verification & Defensive Defense Protocols
To test threat intelligence alerts and verify logs flow, launch a mock hydra dictionary challenge or script manual SSH authentication failures against the workstation node:

\`\`\`bash
# Simulated adversary attack execution
ssh invalid_candidate@192.168.100.22 -p 22
# (Repeat access attempt 8 times, entering dummy keys)
\`\`\`

**Milestone Validation Verification**:
1. Check central dashboard logs index mapping using Elasticsearch REST query:
   \`curl -u admin:password -X GET "https://localhost:9200/_cat/indices?v" --insecure\`
2. Verify that Rule ID **100015** is triggered on the dashboard with a high severity level (Level 12).
3. System check of Wazuh agent connectivity status check:
   \`/var/ossec/bin/agent_control -l\` on the manager must show agent \`192.168.100.22\` status as **Active**.

---

#### 5. Recommended Video Lectures
* [Capstone 2: Wazuh & ELK Stack SIEM Deployment Video Tutorial Walkthrough](https://www.youtube.com/watch?v=8f8U8E_pD0g)

---

#### 6. Academic Milestones and Scholar Award

To recognize your dedication to complex security integration and practical defense, I officially award you the **Sovereign Security Operations Sentinel - Guardian of the Ingestion Feeds**. May your alerts remain low, your index mappings complete, and your logs clear. Safeguard your pipelines from malicious intrusion.
`,
        quiz: {
          id: 'q-capstone-p2',
          title: 'Wazuh SIEM deployment',
          questions: project2Quiz
        }
      },
      {
        id: 'les-capstone-p3',
        moduleId: 'mod-group8',
        title: 'Capstone 3: SAML & OpenID Connect Enterprise Auth Gateway',
        duration: 45,
        youtubeVideoId: 'S-uGe99pT8Q',
        content: `### Lecture Notes: Capstone 3: SAML, OAuth2, & OpenID Connect (OIDC) Secure Gateway

Welcome back to the final capstone laboratory, class. As your professor, I will guide you through this final milestone project. This capstone serves as the ultimate technical integration, requiring you to combine security concepts, networking, implementation ciphers, and validation rules to defend a modern enterprise infrastructure. Let us approach this challenge with academic precision and a continuous drive to learn.

---
#### 🎓 Project Hypothesis & Design Scenario
Decentralized credentials lead to weak password policies and high compromise rates. Modern enterprise infrastructure demands a centralized Identity Provider (IdP) leveraging OAuth2, OIDC, and SAML to authenticate multi-tier corporate apps. In this project, students implement and secure a central **identity portal (Keycloak)** acting as OAuth2/OIDC Trust Authority to authorize third-party SPAs.

#### 🖥️ Lab Architecture & Topology
* **Identity Provider (IdP Core)**: Keycloak container running on host IP \`10.50.0.10\` (Port \`8080\`).
* **Service Provider App (SPA Client)**: Modern React UI container running on port \`3000\`.
* **Database / Backend API Resource**: Fast API backend running on port \`8000\`.
* **Access Flow**:
  1. Client directs user to IdP authorization endpoint.
  2. Identity validated; IdP returns an ephemeral authorization code.
  3. Client exchanges code for signed **JSON Web Tokens (ID Token & Access Token)**.
  4. Access token verified by backend API using JWKS public keys.

---

#### ⌨️ Implementation Configuration Commands
The following scripts launch the Docker architecture and define the JSON web key set validations inside the target API gateway router:

\`\`\`bash
# --- Launching the Central Identity Provider Gateway ---
# Spin up Keycloak using robust Docker command sequences
docker run -d --name secure-keycloak-idp \
  -p 8080:8080 \
  -e KEYCLOAK_ADMIN=sys_audit_lead \
  -e KEYCLOAK_ADMIN_PASSWORD=ComplexAdminSecPass99! \
  quay.io/keycloak/keycloak:latest start-dev


# --- Verification Code for Node API Token Validation ---
# Node API backend validating signed RSA-256 JWT claims before exposing resources
# Below is the logic executed to parsing public JWK sets:
\`\`\`

\`\`\`typescript
import jwt from 'jsonwebtoken';
import jwksClient from 'jwks-rsa';

const client = jwksClient({
  jwksUri: 'http://10.50.0.10:8080/realms/enterprise-corp/protocol/openid-connect/certs'
});

function getKey(header: any, callback: any) {
  client.getSigningKey(header.kid, (err, key: any) => {
    const signingKey = key.getPublicKey();
    callback(null, signingKey);
  });
}

export function verifyUserAccessToken(token: string) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, getKey, { algorithms: ['RS256'] }, (err, decoded) => {
      if (err) return reject(err);
      resolve(decoded);
    });
  });
}
\`\`\`

---

#### 🧪 Verification & Defensive Defense Protocols
To defend the SSO configuration, protect authorization codes from interception by forcing strict protocol redirects and ensuring **Proof Key for Code Exchange (PKCE)** parameters are required for all browser-based clients:

* **PKCE Mandate**: Within the Keycloak administration console (Clients configuration panel), set "Proof Key for Code Exchange Code Challenge Method" strictly to **S256** (forcing crypto-hashed verifications over base64 configurations).
* **SSL Requirement**: Transition client endpoints to require Secure Sockets Layer configurations in production (\`https\`).

**Milestone Validation Verification**:
1. Initiate browser auth redirect, confirm browser lands on login portal at:
   \`http://10.50.0.10:8080/realms/enterprise-corp/protocol/openid-connect/auth...\`
2. Test an authentication flow using POSTMAN. Submit the authorization code back to Keycloak\'s token endpoint and confirm receipt of a valid, formatted OIDC token set.
3. Attempt to query target API resource with a tampered JWT payload; confirm the gateway throws an immediate **HTTP 401 Unauthorized** error.

---

#### 5. Recommended Video Lectures
* [Capstone 3: SAML, OAuth2, & OpenID Connect (OIDC) Secure Gateway Video Tutorial Walkthrough](https://www.youtube.com/watch?v=S-uGe99pT8Q)

---

#### 6. Academic Milestones and Scholar Award

To recognize your dedication to complex security integration and practical defense, I officially award you the **Sovereign Authenticator of Identity - Keeper of the Gateway Trust**. Secure the portals of access; let no unauthorized cipher pass. Trust is hard-won, but easily broken without central authentication.
`,
        quiz: {
          id: 'q-capstone-p3',
          title: 'SSO & OIDC Gateway Dev',
          questions: project3Quiz
        }
      },
      {
        id: 'les-capstone-p4',
        moduleId: 'mod-group8',
        title: 'Capstone 4: Two-Tier HSM-Backed PKI & ACME Auto SSL Rotation',
        duration: 45,
        youtubeVideoId: 'U_Y3F8xQdOk',
        content: `### Lecture Notes: Capstone 4: Two-Tier Private PKI CA & ACME Automated SSL Rotation

Welcome back to the final capstone laboratory, class. As your professor, I will guide you through this final milestone project. This capstone serves as the ultimate technical integration, requiring you to combine security concepts, networking, implementation ciphers, and validation rules to defend a modern enterprise infrastructure. Let us approach this challenge with academic precision and a continuous drive to learn.

---
#### 🎓 Project Hypothesis & Design Scenario
Exposing self-signed certificates or running active systems with long-lived (multi-year) static cryptographic keys leaves infrastructures highly vulnerable to man-in-the-middle exploits and key breaches. This senior project requires designing and deploying a secure, resilient, enterprise-grade **two-tier Public Key Infrastructure (PKI)**. The student must configure an **Offline Root CA** to act as trust anchor, an online **Intermediate CA** to sign server requests, and an automated challenge workflow using the **ACME protocol** to rotate leaf certificates in short 90-day intervals.

#### 🖥️ Lab Architecture & Topology
* **Root CA Node (Offline)**: Physically air-gapped system. Private keys stored on hardware.
* **Subordinate/Intermediate CA Node (Online)**: Connected to management networks, signs active web certificates.
* **Client App Server (Nginx Web Host)**: Needs dynamic certificate allocations.
* **Automated Rotation Loop**:
  1. Client cron initiates Certbot reload query.
  2. ACME server verifies challenge (HTTP-01 or DNS-01 validation).
  3. Intermediate CA generates and pushes freshly-signed X.509 v3 certificate.
  4. Nginx reloads config seamlessly without service downtime.

---

#### ⌨️ Implementation Configuration Commands
The following OpenSSL manual configurations outline the step-by-step procedures to bootstrap the secure offline root certificate authority and issuing intermediate CA certificates:

\`\`\`bash
# --- SECTION 1: ESTABLISHING OFFLINE ROOT CA ---
# Generate high-entropy 4096-bit private key for Root CA trust anchor
openssl genrsa -aes256 -out rootCA.key 4096

# Self-sign the root certificate with high lifespan parameters (e.g., 10 years / 3650 days)
openssl req -x509 -new -nodes -key rootCA.key -sha256 -days 3650 -out rootCA.pem


# --- SECTION 2: ESTABLISHING SUBORDINATE INTERMEDIATE CA ---
# Generate intermediate private key (4096-bit)
openssl genrsa -out intermediateCA.key 4096

# Compile a Certificate Signing Request (CSR) for the intermediate node
openssl req -new -key intermediateCA.key -out intermediateCA.csr

# Sign intermediate node CSR using root CA keys, generating valid 2-tier link
# Note the constraint extension configuring pathlength to 0 (cannot sign further subordinate CAs)
openssl x509 -req -in intermediateCA.csr \
  -CA rootCA.pem -CAkey rootCA.key -CAcreateserial \
  -out intermediateCA.pem -days 1825 -sha256 \
  -extfile <(echo -e "basicConstraints=critical,CA:true,pathlen:0\nkeyUsage=critical,keyCertSign,cRLSign")


# --- SECTION 3: AUTOMATING BROWSER ROTATION VIA ACME STACK ---
# Install Certbot client locally on target application server
sudo apt install certbot -y

# Request certificate from local/private ACME endpoint using web challenge validation
sudo certbot certonly --standalone \
  --register-unsafely-without-email \
  --agree-tos \
  -d app.enterprise.local \
  --deploy-hook "systemctl reload nginx"
\`\`/sbin/cron
\`\`\`

---

#### 🧪 Verification & Defensive Defense Protocols
To defend the PKI structure, the offline Root CA private keys module must never be linked to target web server structures. Run regular audits of **Certificate Revocation Lists (CRL)** and implement **Online Certificate Status Protocol (OCSP)** stapling arrays on the hosting Nginx server config files to verify active leaf states:

\`\`\`nginx
# --- Nginx Server Block Security Hardening ---
server {
    listen 443 ssl default_server;
    server_name app.enterprise.local;

    ssl_certificate /etc/letsencrypt/live/app.enterprise.local/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/app.enterprise.local/privkey.pem;

    # Injecting OCSP Stapling properties
    ssl_stapling on;
    ssl_stapling_verify on;
    ssl_trusted_certificate /etc/letsencrypt/live/app.enterprise.local/chain.pem;
    resolver 10.10.10.1 valid=300s;
}
\`\`\`

**Milestone Validation Verification**:
1. Verify TLS certificate chain status depth using OpenSSL Client tool command:
   \`openssl s_client -connect app.enterprise.local:443 -showcerts\`
   (Verify chain outputs: Depth 0 = Leaf, Depth 1 = Subordinate CA, Depth 2 = Root CA)
2. Run mock rotation test: \`sudo certbot renew --dry-run\`. Must return **Success**.

---

#### 5. Recommended Video Lectures
* [Capstone 4: Two-Tier Private PKI CA & ACME Automated SSL Rotation Video Tutorial Walkthrough](https://www.youtube.com/watch?v=U_Y3F8xQdOk)

---

#### 6. Academic Milestones and Scholar Award

To recognize your dedication to complex security integration and practical defense, I officially award you the **Sovereign Cryptographic Trustee - Master of the Root CA**. Safeguard the keys of trust. Let no self-signed certificate linger, and let the rotating ACME challenge preserve absolute secrecy across all secure domains.
`,
        quiz: {
          id: 'q-capstone-p4',
          title: 'PKI & ACME Rotation Forge',
          questions: project4Quiz
        }
      },
      {
        id: 'les-capstone-p5',
        moduleId: 'mod-group8',
        title: 'Capstone 5: Vuln-Aggregation Parser & Exploit Threat Intelligence',
        duration: 45,
        youtubeVideoId: '10gP84jZsz4',
        content: `### Lecture Notes: Capstone 5: Automated Scanner Parser & Exploit Intelligence Dashboard

Welcome back to the final capstone laboratory, class. As your professor, I will guide you through this final milestone project. This capstone serves as the ultimate technical integration, requiring you to combine security concepts, networking, implementation ciphers, and validation rules to defend a modern enterprise infrastructure. Let us approach this challenge with academic precision and a continuous drive to learn.

---
#### 🎓 Project Hypothesis & Design Scenario
Network vulnerability scanners produce massive, unstructured XML or JSON reporting files that overflow security operations logs. Without clear correlation, critical vulnerabilities are easily lost. This capstone guides the creation of an automated vulnerability intelligence program designed to parse raw scan outputs (like Nmap Vulners XML or OpenVAS indices), cross-reference CVEs with active exploits in **Exploit-DB** or **Metasploit**, and present remediation priorities based on real exploitation risk.

#### 🖥️ Lab Architecture & Topology
* **Aggregator Node**: Python code running on port \`5000\`.
* **Database API Service**: Captures Nmap raw XML output, retrieves CVSS scores, and searches Metasploit index arrays.
* **Flow Pipeline**:
  ` + '`Nmap scan -> Parse XML/JSON -> Query CVSS & Exploit-DB APIs -> Generate Actionable Defenses`' + `

---

#### ⌨️ Implementation Configuration Commands
Below is the core Python code required to parse Nmap Vulners XML data and query exploit availability APIs:

\`\`\`python
# --- Python Scanner Parser & Exploit Mapping Engine ---
import xml.etree.ElementTree as ET
import requests
import json

def parse_nmap_xml(xml_file):
    tree = ET.parse(xml_file)
    root = tree.getroot()
    vulnerable_services = []

    for host in root.findall('host'):
        ip_addr = host.find('address').attrib['addr']
        for port in host.findall('.//port'):
            port_id = port.attrib['portid']
            # Search for script outputs containing Vulners CVE lists
            for script in port.findall('.//script'):
                if script.attrib['id'] == 'vulners':
                    raw_text = script.attrib['output']
                    # Parse out detected CVE signatures and CVSS scores
                    for line in raw_text.split('\n'):
                        if 'CVE-' in line:
                            parts = line.strip().split('\t')
                            cve_id = parts[0]
                            cvss_score = float(parts[1]) if len(parts) > 1 else 0.0
                            
                            # Check vulnerability exploitation availability
                            exploit_available = check_exploit_db(cve_id)
                            
                            vulnerable_services.append({
                                'ip': ip_addr,
                                'port': port_id,
                                'cve': cve_id,
                                'cvss': cvss_score,
                                'exploit_ready': exploit_available
                            })
    return vulnerable_services

def check_exploit_db(cve):
    # Safe mock lookup to Exploit-DB API index
    url = f"https://cve.mitre.org/cgi-bin/cvename.cgi?name={cve}"
    # In enterprise production, query real databases like vulners.com / exploit-db api
    return True # Ephemeral output indicating exploitation script mapped

print(json.dumps(parse_nmap_xml('nmap_scan_report.xml'), indent=2))
\`\`\`

---

#### 🧪 Verification & Defensive Defense Protocols
Ensure that scanners run from dedicated audit subinterfaces, preventing performance degradation on high-traffic databases. Validate the parsed outputs by cross-checking Metasploit payloads against test target systems:

\`\`\`bash
# Run manual vulnerability scan with script flags
nmap -sV --script=vulners -oX nmap_scan_report.xml 192.168.100.22 --top-ports 100
\`\`\`

**Milestone Validation Verification**:
1. Confirm generation of the parsed XML report inside your Python pipeline root namespace.
2. Verify XML elements contain valid child attributes: \`element.find('address')\` must resolve a valid IP address value.
3. Test that vulnerabilities with a **CVSS >= 9.0** AND an **exploit_ready: True** flag trigger immediate priority alerts.

---

#### 5. Recommended Video Lectures
* [Capstone 5: Automated Scanner Parser & Exploit Intelligence Dashboard Video Tutorial Walkthrough](https://www.youtube.com/watch?v=10gP84jZsz4)

---

#### 6. Academic Milestones and Scholar Award

To recognize your dedication to complex security integration and practical defense, I officially award you the **Sovereign Vulnerability Cartographer - Master of Threat Context**. Keep mapping the cracks. Translate raw alerts into actionable intelligence, and prioritize with extreme clarity.
`,
        quiz: {
          id: 'q-capstone-p5',
          title: 'Vuln Aggregation Parser',
          questions: project5Quiz
        }
      },
      {
        id: 'les-capstone-p6',
        moduleId: 'mod-group8',
        title: 'Capstone 6: DevSecOps GitOps Automated CI/CD Security Pipeline',
        duration: 50,
        youtubeVideoId: 'bLhG7wWq0Rk',
        content: `### Lecture Notes: Capstone 6: DevSecOps CI/CD Security Pipeline with Quality Gates

Welcome back to the final capstone laboratory, class. As your professor, I will guide you through this final milestone project. This capstone serves as the ultimate technical integration, requiring you to combine security concepts, networking, implementation ciphers, and validation rules to defend a modern enterprise infrastructure. Let us approach this challenge with academic precision and a continuous drive to learn.

---
#### 🎓 Project Hypothesis & Design Scenario
In agile web development, manually reviewing every code commit for vulnerabilities before deployment is too slow. Integrating security testing directly into continuous integration/continuous deployment (CI/CD) pipelines automates code defense. Students will configure a GitOps pipeline that scans source code (SAST), checks third-party dependencies (SCA), audits container images, and breaks builds that fail core security quality gates.

#### 🖥️ Lab Architecture & Topology
* **Source Control**: GitHub/GitLab instance.
* **CI/CD Platform**: GitLab CI or GitHub Actions runner.
* **Security Scanning Stack**:
  * **SAST (Static Application Security Testing)**: Semgrep / SonarQube.
  * **SCA (Software Composition Analysis)**: Dependency-Check or Snyk.
  * **Container Image Audit**: Trivy.
* **Quality Gate Policy**: Fail the build if any vulnerability rated **High/Critical (CVSS >= 7.0)** is detected inside the codebase or base container images.

---

#### ⌨️ Implementation Configuration Commands
Below is the deployment schema defining a pipeline YAML file (e.g. for GitHub Actions) to run SCA and container security audits:

\`\`\`yaml
# --- GitHub Actions CI/CD Pipeline Definition (.github/workflows/devsecops.yml) ---
name: DevSecOps Quality Gate Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  security-hardened-check:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Source Code
        uses: actions/checkout@v3

      # STEP 1: Static Application Security Testing (SAST)
      - name: Run Semgrep Code Audit
        run: |
          pip install semgrep
          semgrep --config auto . --error

      # STEP 2: Software Composition Analysis (SCA)
      - name: Run Trivy Dependency Audit
        uses: aquasecurity/trivy-action@master
        with:
          scan-type: 'fs'
          security-checks: 'vuln'
          format: 'table'
          exit-code: '1' # Break the build if vulnerabilities are found
          severity: 'HIGH,CRITICAL'

      # STEP 3: Container Base Image Audit
      - name: Build Local Container Image
        run: docker build -t app-service:latest .

      - name: Run Trivy Container Security Scan
        uses: aquasecurity/trivy-action@master
        with:
          image-ref: 'app-service:latest'
          format: 'table'
          severity: 'HIGH,CRITICAL'
          exit-code: '1' # Break the build if base layers contain severe vulnerabilities
\`\`\`

---

#### 🧪 Verification & Defensive Defense Protocols
To test the pipeline\'s quality gates, deliberately introduce a vulnerable third-party package into your package manifests (e.g., adding an outdated, vulnerable version of \`axios\`, \`log4j\`, or \`express\`) and commit it to your repository.

\`\`\`bash
# Introduce vulnerable packages to trigger scanner alert
npm install axios@0.21.1 --save # CVE-2021-3749 Critical Vulnerability
git add package.json
git commit -m "Introduce dependencies"
git push origin main
\`\`\`

**Milestone Validation Verification**:
1. Verify that committing the vulnerable package triggers the pipeline runner.
2. Confirm the pipeline fails at **Step 2 (Trivy Dependency Audit)**, blocking deployment.
3. Check scanner logs to verify that vulnerabilities are reported with accurate CVE IDs and CVSS ratings.

---

#### 5. Recommended Video Lectures
* [Capstone 6: DevSecOps CI/CD Security Pipeline with Quality Gates Video Tutorial Walkthrough](https://www.youtube.com/watch?v=bLhG7wWq0Rk)

---

#### 6. Academic Milestones and Scholar Award

To recognize your dedication to complex security integration and practical defense, I officially award you the **Sovereign DevSecOps Integrator - Sentinel of the Source Control Pipeline**. Break the build to save the product. Weave security at every step and enforce code defense as a basic operational discipline.
`,
        quiz: {
          id: 'q-capstone-p6',
          title: 'Secure CI/CD Pipelines check',
          questions: project6Quiz
        }
      },
      {
        id: 'les-capstone-p7',
        moduleId: 'mod-group8',
        title: 'Capstone 7: Forensic Sandbox Malware Detonation & Volatility Engine',
        duration: 45,
        youtubeVideoId: 'N9N4fS4Vjzo',
        content: `### Lecture Notes: Capstone 7: Sandbox Malware Detonation & Volatility Memory Forensics

Welcome back to the final capstone laboratory, class. As your professor, I will guide you through this final milestone project. This capstone serves as the ultimate technical integration, requiring you to combine security concepts, networking, implementation ciphers, and validation rules to defend a modern enterprise infrastructure. Let us approach this challenge with academic precision and a continuous drive to learn.

---
#### 🎓 Project Hypothesis & Design Scenario
Advanced Persistent Threats (APTs) often execute payloads directly in RAM (fileless malware), leaving zero files on storage disk partitions. In this capstone, students design a secure, isolated malware detonation environment, retrieve a raw memory dump, and analyze it using the **Volatility Forensics Framework** to isolate registry anomalies, running processes, and trace active sockets.

#### 🖥️ Lab Architecture & Topology
* **Sandbox Supervisor (Hypervisor)**: Isolated host running Proxmox or VirtualBox.
* **Guest Target VM (Windows 10/Linux)**: Completely isolated on a host-only network.
* **Analysis Console**: Running Volatility 2.6 or 3 on Linux IP \`192.168.120.5\`.
* **Flow Pipeline**:
  ` + '`Detonate malware -> Generate RAM dump (.raw) -> Volatility Analysis -> Trace IP/Process`' + `

---

#### ⌨️ Implementation Configuration Commands
The following cli prompts demonstrate using Volatility on a captured memory raw file (\`compromised_memory.raw\`) to audit stealth malicious backdoors:

\`\`\`bash
# --- SECTION 1: MEMORY PROFILE INGESTION ---
# Identify the operating profile of the target memory dump
volatility -f compromised_memory.raw imageinfo

# --- SECTION 2: IDENTIFYING RUNNING SUSPECT PROCESSES ---
# List active processes matching execution hierarchies in RAM
volatility -f compromised_memory.raw --profile=Win10x64_17134 pslist

# Highlight hidden or unlinked orphan processes (potential rootkit indicators)
volatility -f compromised_memory.raw --profile=Win10x64_17134 psscan


# --- SECTION 3: NETSTAT AND SOCKET EXTRACTIONS ---
# Search memory space for active TCP/UDP listeners and active sockets
volatility -f compromised_memory.raw --profile=Win10x64_17134 netscan


# --- SECTION 4: SUSPECT PE CARVING ---
# Extract the executable payload of the malicious process (e.g., PID 4012) directly to local folders
volatility -f compromised_memory.raw --profile=Win10x64_17134 procdump -p 4012 -D /tmp/malware_extracts/
\`\`\`

---

#### 🧪 Verification & Defensive Defense Protocols
Always keep the analysis sandbox network isolated. This prevents malware from communicating with external command-and-control (C2) servers. Verify Volatility parsed outputs by matching memory IOCs with local system configurations:

\`\`\`bash
# Calculate SHA-256 integrity hash of extracted suspicious binaries
sha256sum /tmp/malware_extracts/executable.4012.exe
# Search hash on virusTotal database to identify malware properties
\`\`\`

**Milestone Validation Verification**:
1. Identify the parent PID of malicious process \`4012\` (Must match shell/launcher process like \`cmd.exe\` or \`powershell.exe\`).
2. Verify socket states via \`netscan\`. Confirm IP address connections to external ports like \`4444\` or \`8080\`.
3. Locate the registry persistence key using \`printkey\` plugin to prove persistence installation.

---

#### 5. Recommended Video Lectures
* [Capstone 7: Sandbox Malware Detonation & Volatility Memory Forensics Video Tutorial Walkthrough](https://www.youtube.com/watch?v=N9N4fS4Vjzo)

---

#### 6. Academic Milestones and Scholar Award

To recognize your dedication to complex security integration and practical defense, I officially award you the **Sovereign Digital Forensics Investigator - Master of Memory Volatility**. Analyze without fear. Detonate in safety, trace the ciphers in RAM, and piece together the digital evidence.
`,
        quiz: {
          id: 'q-capstone-p7',
          title: 'Memory Volatility Analysis',
          questions: project7Quiz
        }
      },
      {
        id: 'les-capstone-p8',
        moduleId: 'mod-group8',
        title: 'Capstone 8: Secure API Gateway, WAF & OWASP Defense Shields',
        duration: 45,
        youtubeVideoId: 'SykP3U2Q8eA',
        content: `### Lecture Notes: Capstone 8: Secure API Gateway with OWASP Defenses

Welcome back to the final capstone laboratory, class. As your professor, I will guide you through this final milestone project. This capstone serves as the ultimate technical integration, requiring you to combine security concepts, networking, implementation ciphers, and validation rules to defend a modern enterprise infrastructure. Let us approach this challenge with academic precision and a continuous drive to learn.

---
#### 🎓 Project Hypothesis & Design Scenario
Web APIs are prime targets for automated exploit bots, SQL injections, and brute-force starvation attacks. Flat API microservices without an intermediary security layer are highly vulnerable. This senior project requires designing, coding, and defending a **Secure API Gateway** implementing strict OWASP mitigation rules: parameterized inputs, robust Cross-Origin Resource Sharing (CORS) headers, and token-bucket sliding rate limiters to defend resources.

#### 🖥️ Lab Architecture & Topology
* **Public Client Interfaces**: Frontend browser queries.
* **API Gateway Node**: Acts as proxy barrier on port \`443\`.
* **Private API Microservers**: Backend resource servers blocked from public access.
* **Defensive Layers**:
  1. CORS whitelist filters.
  2. Rate limit thresholds (Token Bucket sliding window).
  3. Strict input sanitization and parameterized queries.

---

#### ⌨️ Implementation Configuration Commands
The following Node.js snippet shows the implementation of a secure API module equipped with Helmet, CORS controls, rate limiters, and SQL input sanitization:

\`\`\`typescript
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import sqlite3 from 'sqlite3';

const app = express();
const PORT = 3000;
const db = new sqlite3.Database(':memory:');

// 1. Activate Helmet to enforce secure HTTP headers (no XSS execution, strict transport security)
app.use(helmet());

// 2. Configure strict CORS headers
const corsOptions = {
  origin: 'https://trusted-portal.enterprise.local',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// 3. Deploy Token Bucket Sliding Window Rate Limiter (Max 100 requests per 15 minutes)
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100,
  message: { error: 'Rate limit exceeded. System access throttled.' },
  statusCode: 429
});
app.use('/api/', apiLimiter);

app.use(express.json());

// 4. Secure API Endpoint using prepared SQL statements to prevent SQL Injection
app.post('/api/v1/user-record', (req, res) => {
  const userId = req.body.userId;
  
  // SECURE: Parameterized Statement prevents malicious SQL injection sequences
  const query = 'SELECT username, access_level FROM corporate_members WHERE id = ?';
  
  db.get(query, [userId], (err, row) => {
    if (err) return res.status(500).json({ status: 'Database error' });
    if (!row) return res.status(404).json({ status: 'Not found' });
    res.json(row);
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log('Secure API Gateway listening on port ' + PORT);
});
\`\`\`

---

#### 🧪 Verification & Defensive Defense Protocols
To audit the API gateway defenses, attempt to execute an SQL injection using curl and confirm that input vectors (like \`userId = "admin' OR '1'='1"\`) are treated as plain text parameters and fail to expose data:

\`\`\`bash
# Audit SQL Injection vulnerability
curl -X POST -H "Content-Type: application/json" \
  -d '{"userId": "15 OR 1=1"}' \
  http://localhost:3000/api/v1/user-record
# (Confirm response returns 404/Empty, verify query treated the entire string as userID)
\`\`\`

**Milestone Validation Verification**:
1. Check response headers. Verify that **X-Frame-Options** is set to \`SAMEORIGIN\` and **X-Content-Type-Options** is configured as \`nosniff\`.
2. Send more than 100 requests in a tight loop to verify rate-limiting triggers an **HTTP 429 Too Many Requests** error.
3. Validate CORS origin constraints. Attempting a request with an invalid origin header must throw a standard preflight failure.

---

#### 5. Recommended Video Lectures
* [Capstone 8: Secure API Gateway with OWASP Defenses Video Tutorial Walkthrough](https://www.youtube.com/watch?v=SykP3U2Q8eA)

---

#### 6. Academic Milestones and Scholar Award

To recognize your dedication to complex security integration and practical defense, I officially award you the **Sovereign API Defender - Sentinel of the Gateway Shields**. Block the bots and validate the inputs. No malformed request or SQL injection must penetrate your microserver architecture.
`,
        quiz: {
          id: 'q-capstone-p8',
          title: 'Secure API Gateways checking',
          questions: project8Quiz
        }
      },
      {
        id: 'les-capstone-p9',
        moduleId: 'mod-group8',
        title: 'Capstone 9: Site-to-Site WireGuard/IPsec VPN Gateway with PFS',
        duration: 45,
        youtubeVideoId: 'S_iS91U638K',
        content: `### Lecture Notes: Capstone 9: Site-to-Site VPN Gateway Tunneling

Welcome back to the final capstone laboratory, class. As your professor, I will guide you through this final milestone project. This capstone serves as the ultimate technical integration, requiring you to combine security concepts, networking, implementation ciphers, and validation rules to defend a modern enterprise infrastructure. Let us approach this challenge with academic precision and a continuous drive to learn.

---
#### 🎓 Project Hypothesis & Design Scenario
Connecting distributed enterprise branch networks over the public internet exposes traffic to interception. Standard unencrypted tunnels are vulnerable to rogue inspection. Students will design and deploy a secure, low-latency **Site-to-Site VPN Tunnel** connecting two corporate offices using **WireGuard**. The tunnel must enforce shared authentication, mutual key pairs, and Perfect Forward Secrecy (PFS).

#### 🖥️ Lab Architecture & Topology
* **Branch Office Alpha Gateway**: Core Node on IP \`192.168.10.1\`. Internal subnet: \`10.10.0.0/16\`.
* **Branch Office Beta Gateway**: Core Node on IP \`192.168.20.1\`. Internal subnet: \`10.20.0.0/16\`.
* **Cryptographic Tunnel Link**:
  ` + '`Subnet 10.10.0.0/16 -> Gateway Alpha -> Encrypted Wireguard Tunnel -> Gateway Beta -> Subnet 10.20.0.0/16`' + `

---

#### ⌨️ Implementation Configuration Commands
The following configurations establish a secure WireGuard peer-to-peer configuration on both gateways:

\`\`\`ini
# --- GATEWAY ALPHA CONFIGURATION (/etc/wireguard/wg0.conf) ---
[Interface]
PrivateKey = [Alpha_Private_Key_Here_Base64_Encoded=]
Address = 10.99.0.1/24
ListenPort = 51820
PostUp = iptables -A FORWARD -i %i -j ACCEPT; iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
PostDown = iptables -D FORWARD -i %i -j ACCEPT; iptables -t nat -D POSTROUTING -o eth0 -j MASQUERADE

[Peer]
# Beta peer gateway parameters
PublicKey = [Beta_Public_Key_Here_Base64_Encoded=]
PresharedKey = [Optional_Shared_Symmetric_PSKey_For_PFS=]
AllowedIPs = 10.99.0.2/32, 10.20.0.0/16
Endpoint = 192.168.20.1:51820
PersistentKeepalive = 25


# --- GATEWAY BETA CONFIGURATION (/etc/wireguard/wg0.conf) ---
[Interface]
PrivateKey = [Beta_Private_Key_Here_Base64_Encoded=]
Address = 10.99.0.2/24
ListenPort = 51820
PostUp = iptables -A FORWARD -i %i -j ACCEPT; iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
PostDown = iptables -D FORWARD -i %i -j ACCEPT; iptables -t nat -D POSTROUTING -o eth0 -j MASQUERADE

[Peer]
# Alpha peer gateway parameters
PublicKey = [Alpha_Public_Key_Here_Base64_Encoded=]
PresharedKey = [Optional_Shared_Symmetric_PSKey_For_PFS=]
AllowedIPs = 10.99.0.1/32, 10.10.0.0/16
Endpoint = 192.168.10.1:51820
PersistentKeepalive = 25
\`\`\`

\`\`\`bash
# --- ACTIVATING THE GATEWAY INTERFACES ---
# Fire up intermediate Wireguard tunnel links on both nodes
sudo wg-quick up wg0
sudo systemctl enable wg-quick@wg0
\`\`\`

---

#### 🧪 Verification & Defensive Defense Protocols
To verify the tunnel configuration, ping across internal subnets from an internal client host connected to Gateway Alpha to a client host on Gateway Beta. Check the tunnel handshake statistics using the WireGuard CLI:

\`\`\`bash
# Trace active peer Handshakes and metrics
sudo wg show wg0
\`\`\`

**Milestone Validation Verification**:
1. Run \`wg show\` on Gateway Alpha, verify peer connection shows active **handshake** received within last 60 seconds.
2. Run \`traceroute 10.20.0.15\` from an local Alpha workspace node. Verify packet routes path through gateway address \`10.99.0.2\` without traversing public intermediate nodes in clear text.
3. Check status of kernel forwarding: \`sysctl net.ipv4.ip_forward\`. Must output value \`1\` to allow routing.

---

#### 5. Recommended Video Lectures
* [Capstone 9: Site-to-Site VPN Gateway Tunneling Video Tutorial Walkthrough](https://www.youtube.com/watch?v=S_iS91U638K)

---

#### 6. Academic Milestones and Scholar Award

To recognize your dedication to complex security integration and practical defense, I officially award you the **Sovereign Tunneling Craftsman - Guardian of the Encrypted Transit**. Construct your tunnels with perfect forward secrecy. Keep branch networks united and communications strictly confidential across public lanes.
`,
        quiz: {
          id: 'q-capstone-p9',
          title: 'VPN Wireguard Tunneling',
          questions: project9Quiz
        }
      },
      {
        id: 'les-capstone-p10',
        moduleId: 'mod-group8',
        title: 'Capstone 10: Cowrie/Dionaea Distributed Active Honeynet System',
        duration: 45,
        youtubeVideoId: 'S0j9S1F2D8s',
        content: `### Lecture Notes: Capstone 10: Multi-node Defensive Honeynet & STIX Feed Generator

Welcome back to the final capstone laboratory, class. As your professor, I will guide you through this final milestone project. This capstone serves as the ultimate technical integration, requiring you to combine security concepts, networking, implementation ciphers, and validation rules to defend a modern enterprise infrastructure. Let us approach this challenge with academic precision and a continuous drive to learn.

---
#### 🎓 Project Hypothesis & Design Scenario
Defenders must capture details on live internet attacks to proactively block malicious IPs. Deploying decoy nodes (**honeypots**) allows you to map attacker IP addresses, passwords, and shell scripts. This capstone requires implementing an active multi-node **Honeynet** (using **Cowrie** for SSH/Telnet and **Dionaea** for network exploits) and converting captured events into standardized threat feeds (**STIX/TAXII** format) to dynamically update active edge firewalls.

#### 🖥️ Lab Architecture & Topology
* **Decoy Node (DMZ Subnet)**: Emulates a corporate target on address \`192.168.10.90\`.
* **Honeywall Firewall Router**: Isolates decoy nodes and restricts outbound connections.
* **CTI Aggregator Node**: Parses alerts, extract attack signatures, and creates STIX files.
* **Intelligence Flow**:
  ` + '`Adversary -> Attacks Honeypot -> Logs Saved -> Python extracts Indicators -> STIX JSON Generated`' + `

---

#### ⌨️ Implementation Configuration Commands
The following scripts launch an isolated Cowrie SSH honeypot container and demonstrate parsing raw JSON outputs into STIX indicator indicators:

\`\`\`bash
# --- SECTION 1: DEPLOYING DECOY INSTANCES ---
# Pull and execute isolated SSH/Telnet Cowrie Decoy
docker run -d --name decoy-ssh-cowrie \
  -p 2222:2222 \
  -v /opt/cowrie/var/log/cowrie:/cowrie/cowrie-git/var/log/cowrie \
  cowrie/cowrie:latest


# --- SECTION 2: PYTHON PARSER & STIX 2.1 FEED ENGINE ---
# Install the official Oasis Open-Source STIX python package
pip install stix2

# Run script to output valid STIX JSON representation of honeypot anomalies:
\`\`\`

\`\`\`python
from stix2 import Indicator, Bundle
import datetime

def generate_stix_indicator(attacker_ip, desc):
    indicator = Indicator(
        name="Adversary Honeypot Probe Source",
        description=desc,
        pattern_type="stix",
        pattern=f"[ipv4-addr:value = '{attacker_ip}']",
        valid_from=datetime.datetime.now(datetime.timezone.utc).isoformat()
    )
    # Package into a secure CTI Bundle
    bundle = Bundle(objects=[indicator])
    return bundle.serialize(pretty=True)

# Parse attacker IP from Cowrie auth log file
sample_attacker_ip = "192.0.2.75" # Example attacker IP parsed from JSON log
print(generate_stix_indicator(sample_attacker_ip, "Honeypot Brute Force Source IP"))
\`\`\`

---

#### 🧪 Verification & Defensive Defense Protocols
Ensure that Cowrie runs on port 2222, and redirect traffic from port 22 using iptables. This prevents the honeypot container from running with root privileges:

\`\`\`bash
# Port redirection on local firewall interface
sudo iptables -t nat -A PREROUTING -p tcp --dport 22 -j REDIRECT --to-port 2222
\`\`\`

**Milestone Validation Verification**:
1. Connect to port 22 from an external IP: \`ssh root@192.168.10.90\`. Enter dummy credentials.
2. Inspect Cowrie output: \`tail -f /opt/cowrie/var/log/cowrie/cowrie.json\`. Ensure the login attempt is logged.
3. Verify the generated STIX payload contains correct JSON properties, including \`type: "indicator"\`.

---

#### 5. Recommended Video Lectures
* [Capstone 10: Multi-node Defensive Honeynet & STIX Feed Generator Video Tutorial Walkthrough](https://www.youtube.com/watch?v=S0j9S1F2D8s)

---

#### 6. Academic Milestones and Scholar Award

To recognize your dedication to complex security integration and practical defense, I officially award you the **Sovereign Threat Intelligence Strategist - Architect of Active Decoy Walls**. Observe to learn, decoy to defend. Let attacker errors update your edge shields automatically, making your defenses dynamic and self-healing.
`,
        quiz: {
          id: 'q-capstone-p10',
          title: 'CTI Honeynets defense',
          questions: project10Quiz
        }
      }
    ],
    exam: {
      id: 'ex-group8',
      title: 'Senior Capstone & Dissertation Project Defense Exam',
      moduleId: 'mod-group8',
      timeLimit: 180,
      questions: group8MasterExamQuestions
    }
  }
];


export const MODULES: Module[] = [
  ...MATH_MODULES,
  ...BASE_MODULES,
  ...HACKING_MODULES,
  ...FULL_STACK_MODULES,
  ...DATA_ENGINEERING_MODULES
];
