import { QuizQuestion } from '../types';

const createQuestion = (id: string, text: string, options: string[], correctAnswerIndex: number, explanation: string): QuizQuestion => ({
  id, text, options, correctAnswerIndex, explanation
});

// ==========================================
// QUIZ 1: IT HARDWARE & DIAGNOSTICS (20 Qs)
// ==========================================
export const hardwareQuestions: QuizQuestion[] = [
  createQuestion(
    'qh-1',
    'Which motherboard firmware virtualization protocol must be enabled in the BIOS/UEFI configuration to host Type-1 or nested Type-2 hypervisors?',
    ['Data Execution Prevention (DEP)', 'Intel VT-x / AMD-V Virtualization extensions', 'Secure Boot Integrity check', 'SATA AHCI interface controller mode'],
    1,
    'Hosting standard virtual nodes requires hardware-assisted CPU virtualization parameters (Intel VT-x or AMD-V) to be toggled on in BIOS/UEFI.'
  ),
  createQuestion(
    'qh-2',
    'Which represents the first logical step during a structured system-level troubleshooting flow according to industry-standard diagnostic models?',
    ['Replace the central processing unit', 'Formulate an actionable hypothesis and test theories', 'Identify the problem by gathering active symptoms and system state logs', 'Implement preventive measures against future failures'],
    2,
    'A robust troubleshooting lifecycle always begins by identifying the active symptoms, querying affected users, and establishing clear problem boundaries.'
  ),
  createQuestion(
    'qh-3',
    'Which storage interface is specifically designed to bypass legacy driver overhead and communicate directly over PCIe lanes to provide maximum throughput and lower latency?',
    ['SATA III SSD', 'iSCSI Storage Unit', 'NVMe M.2 SSD', 'SAS Enterprise Grid'],
    2,
    'NVMe (Non-Volatile Memory Express) maps storage commands directly over high-speed PCIe system lanes, significantly outperforming legacy SATA drivers and cables.'
  ),
  createQuestion(
    'qh-4',
    'When a computer boots up, what volatile hardware storage holds active system configurations, running program instructions, and real-time execution states?',
    ['Non-volatile EEPROM', 'Random Access Memory (RAM)', 'Solid State Disk (SSD)', 'Central Processing Unit Cache'],
    1,
    'Random Access Memory (RAM) is volatile memory that houses running OS instructions, active software runtimes, and user session buffers.'
  ),
  createQuestion(
    'qh-5',
    'A system administrator wants to establish read/write speeds that are highly accelerated while maintaining fault tolerance on a critical local storage server. Which RAID configuration should they choose?',
    ['RAID 0', 'RAID 1', 'RAID 5', 'RAID 10'],
    3,
    'RAID 10 (1+0) combines disk striping (for performance) and disk mirroring (for redundancy), creating a stripe of mirrors with optimal read/write speeds and high fault tolerance.'
  ),
  createQuestion(
    'qh-6',
    'Which safety feature in UEFI firmware prevents unauthorized or unsigned operating system bootloaders from executing during the system startup routine?',
    ['Trusted Platform Module (TPM)', 'Secure Boot', 'Drive Encryption (BitLocker)', 'BIOS Master Password'],
    1,
    'Secure Boot enforces cryptographic signature checks on the bootloader system to verify that only trusted, OEM-signed operating structures can execute.'
  ),
  createQuestion(
    'qh-7',
    'What hardware-based microchip is soldered onto a system motherboard to securely generate, store, and manage cryptographic keys used for hardware platform authentication?',
    ['PCIe Cryptographic Accel', 'Trusted Platform Module (TPM)', 'UEFI Secure Vault', 'Hardware Security Module (HSM)'],
    1,
    'The Trusted Platform Module (TPM) is a dedicated physical cryptoprocessor that safely seals device encryption keys (such as BitLocker keys) and certifies physical platform integrity.'
  ),
  createQuestion(
    'qh-8',
    'An industrial server suddenly starts dropping CPU clock speeds drastically under heavy workloads. Diagnostic monitors indicate temperature spikes. What hardware system is likely failing?',
    ['RAM Memory Integrity Scrubbing', 'CPU Power Supply Rail', 'CPU Thermal Dissipation / Cooling System', 'PCIe System Bus Controller'],
    2,
    'CPU thermal throttling triggers when safe operational heat limits are breached. This suggests a failure of the CPU thermal paste, heat-sink alignment, or active cooling fan systems.'
  ),
  createQuestion(
    'qh-9',
    'A client workstation experiences continuous, random application crashes. A security analyst suspects corruption during volatile memory processing. Which process can proactively identify and correct single-bit memory faults?',
    ['System File Checking (SFC)', 'ECC (Error-Correcting Code) RAM processing', 'Dynamic Disk Sector Allocation', 'BIOS memory paging adjustments'],
    1,
    'ECC (Error-Correcting Code) memory detects multi-bit memory corruptions and uses special parity bits to automatically correct single-bit errors in real-time.'
  ),
  createQuestion(
    'qh-10',
    'Which USB-C security threat involves hardware programmed to maliciously emulate human interface devices (like keyboards) to inject fatal terminal sequences when plugged in?',
    ['BadUSB / HID Spoofing attacks', 'USB power surge / physical killer circuits', 'Dual-lane PCIe DMA hijacking', 'Firmware Flash memory scrambling'],
    0,
    'BadUSB modifications reprogram USB controller microchips to masquerade as standard keyboards (HID), triggering automated keystroke injection payloads upon host connection.'
  ),
  createQuestion(
    'qh-11',
    'What diagnostic sequence does a computer motherboard run immediately after receiving power to verify that baseline hardware dependencies (RAM, CPU, storage, video) are responsive?',
    ['Operating system kernel bootstrap', 'Power-On Self-Test (POST)', 'UEFI execution cycle logging', 'Hardware configuration interrupts polling'],
    1,
    'The Power-On Self-Test (POST) is a firmware routine verifying that vital physical modules are online. Motherboards indicate POST failures with diagnostic beep codes or digital display readouts.'
  ),
  createQuestion(
    'qh-12',
    'A field technician reports that several servers are suddenly restarting unexpectedly. Power measurements detect temporary, dramatic voltage drops in the city grid. What power anomaly has occurred?',
    ['Power Surge / Spike', 'Blackout', 'Brownout (voltage sag)', 'Harmonic noise interference'],
    2,
    'A brownout is a sustained, temporary drop in physical grid voltage supply. It can starve server PSUs of target electricity levels, sparking sudden shutdowns if not isolated by an Uninterruptible Power Supply (UPS).'
  ),
  createQuestion(
    'qh-13',
    'Which motherboard form factor represents the smallest design standard suitable for highly compact embedded hardware chassis while supporting regular SATA and PCIe specifications?',
    ['Extended ATX (E-ATX)', 'Standard ATX', 'Micro-ATX', 'Mini-ITX'],
    3,
    'Mini-ITX is a highly compact (typically 6.7 × 6.7 inches) layout standard widely deployed in small-form-factor devices, specialized kiosks, and mobile systems.'
  ),
  createQuestion(
    'qh-14',
    'Solid State Drives (SSDs) utilize a modern flash-storage architecture. Which process determines how hardware blocks are distributed to block-erasure patterns to avoid early physical disk wear?',
    ['Dynamic Defragmentation Engine', 'Wear Leveling algorithms', 'Disk Stripping parity matrix', 'Sector-level magnetic balancing'],
    1,
    'Wear Leveling algorithms write sector updates evenly across all flash-storage cells, ensuring individual sectors are not over-cycled, which prevents premature disk read/write death.'
  ),
  createQuestion(
    'qh-15',
    'Which system interconnect standard carries high-performance graphics card signals, high-speed storage buses, and network interfaces directly to the processor via independent point-to-point lanes?',
    ['SATA controller channels', 'Universal Serial Bus (USB)', 'PCI Express (PCIe) lanes', 'Legacy BIOS system bridge'],
    2,
    'PCI Express (PCIe) lanes provide direct, dedicated serial communication pathways between key high-speed expansion peripherals and the CPU, avoiding shared system bus bottlenecks.'
  ),
  createQuestion(
    'qh-16',
    'A company deploys Microsoft Office desktop apps across workstations. Which structural security element must be heavily monitored and restricted to prevent remote macro virus execution in files?',
    ['Unified SSO tokens verification', 'Local VBA (Visual Basic for Applications) macro security policies', 'Outlook message queue routing filters', 'Direct desktop shortcut paths settings'],
    1,
    'VBA macro scripts built into legacy files (like .docm or .xlsm files) are a common vector for remote execution malware. Securing them requires disabling external macros or enforcing digital signature code execution checks.'
  ),
  createQuestion(
    'qh-17',
    'Google Workspace manages collaborative cloud storage files. Which protocol represents the standard mechanism to configure secure single sign-on (SSO) enterprise federations with external active directory IDPs?',
    ['SAML 2.0 (Security Assertion Markup Lang)', 'LDAP user query access protocol', 'Local SMTP mail synchronization', 'Symmetric file system caching sync'],
    0,
    'SAML 2.0 (and modern OAuth/OIDC frameworks) coordinates secure federated identification. This allows users to authenticate once against an enterprise identity provider (IdP) to access Google cloud resources securely.'
  ),
  createQuestion(
    'qh-18',
    'An Apple user activates advanced recovery steps on their iCloud. Which backup mechanism represents the strongest control against cloud-side compromise of personal synced details?',
    ['Symmetric database encryption files', 'End-to-end data encryption with private recovery keys', 'Localized recovery contact sms alerts', 'Device layout mirroring profiles'],
    1,
    'Enabling cryptographic end-to-end recovery keys ensures that user synced iCloud files are encrypted using private device keys. This prevents third-party providers from accessing the raw data blocks.'
  ),
  createQuestion(
    'qh-19',
    'If a diagnostic technician utilizes a "split-half troubleshooting method" on an unresponsive network segment, what action are they performing conceptually?',
    ['Disabling half of the network servers inside the active host', 'Dividing the sequence path of troubleshooting in the middle to quickly isolate if the fault is downstream or upstream', 'Erasing half of the diagnostic database files to inspect indexing errors', 'Routing network pathways through secondary backup cables'],
    1,
    'The split-half troubleshooting strategy divides a system at a midpoint. This allows technicians to run direct diagnostic queries to quickly determine if the fault lives in the first half or the second half of the operational flow.'
  ),
  createQuestion(
    'qh-20',
    'What hardware diagnostics standard is pre-programmed into modern SSD and HDD storage blocks to continuously monitor system attributes like bad sectors and mechanical faults?',
    ['System Diagnostics Console logging', 'S.M.A.R.T. (Self-Monitoring, Analysis and Reporting Tech)', 'PCIe bus lanes status flags', 'BIOS system interrupt registers monitoring'],
    1,
    'S.M.A.R.T. analytics track critical drive performance statistics (such as read error rates, reallocated sector counts, and operating temperatures) to predict drive failure before data is lost.'
  )
];

// ==========================================
// QUIZ 2: WINDOWS & LINUX ARCHITECTURE (20 Qs)
// ==========================================
export const osPlatformsQuestions: QuizQuestion[] = [
  createQuestion(
    'qo-p1',
    'Which Linux compilation tool structure evaluates physical system prerequisites and sets target configuration parameters on standard C-based packages before compile scripts execute?',
    ['The "make" execution pipeline', 'The "./configure" script step', 'The "apt-get install" package engine', 'The "sudo make install" directory mapper'],
    1,
    'The "./configure" script inspects physical parameters, dynamic link files, and available dependencies on the local system, generating an optimal Makefile used to build code.'
  ),
  createQuestion(
    'qo-p2',
    'Where are system-wide, flat-text configuration parameters and local network rules files primarily saved on most standard Linux distributions?',
    ['/var/configuration/sys', '/usr/bin/local', '/etc directory tree', '/opt/services/configs'],
    2,
    'The "/etc" directory houses static, plain-text configuration directives (including network definitions, authentication guidelines, and service parameters) on Linux nodes.'
  ),
  createQuestion(
    'qo-p3',
    'Which level of the processor hardware protection ring architecture executes with absolute, unrestricted privileges and is strictly reserved for the core operating system kernel modules?',
    ['Ring 3 (Application boundaries)', 'Ring 1 (Unused/Device emulator loops)', 'Ring 0 (Kernel mode)', 'Ring 2 (Legacy drivers scope)'],
    2,
    'Ring 0 (Kernel Mode) has highest privileges and direct access to raw host processor memory and underlying physical hardware lanes.'
  ),
  createQuestion(
    'qo-p4',
    'Operating system design paradigms vary between monolithic layouts and microkernel architectures. What determines a monolithic kernel structure?',
    ['Only virtual memory managers run inside privileged environments', 'All core OS services (virtual filesystem management, scheduling, network stacks, hardware device drivers) execute inside a unified high-privilege kernel space', 'User applications are fully nested inside physical firmware modules', 'Kernel components run only on virtual container setups'],
    1,
    'Monolithic kernels bundle virtual memory managers, disk schedulers, network modules, and physical hardware device drivers into a single, high-speed kernel segment.'
  ),
  createQuestion(
    'qo-p5',
    'A Windows security engineer is auditing the central operating configuration system database (the Windows Registry). Which key Hive dictates system-wide settings, operational hardware profiles, and global drivers configurations?',
    ['HKEY_CURRENT_USER (HKCU)', 'HKEY_CLASSES_ROOT (HKCR)', 'HKEY_LOCAL_MACHINE (HKLM)', 'HKEY_USERS (HKU)'],
    2,
    'HKEY_LOCAL_MACHINE (HKLM) houses system-wide configurations, boot-loading parameters, disk architectures, and hardware-specific drivers.'
  ),
  createQuestion(
    'qo-p6',
    'Which modular software initialization manager is standard on modern Linux platforms, executing system services boot configurations using unit files (e.g., .service variables)?',
    ['The SysVinit runlevels controller', 'Systemd system and service manager', 'The init.d scripts configuration runner', 'Upstart process manager'],
    1,
    'modern Linux systems deploy "systemd" to manage boot cycles, track service dependencies, mount storage files, and execute services in parallel using unified .service configurations.'
  ),
  createQuestion(
    'qo-p7',
    'What Linux utility package manager tracks, verifies signatures, and installs pre-compiled binary components from secure central network repositories onto Debian or Ubuntu machines?',
    ['The "yum" software client', 'The "rpm" direct installer', 'The "Advanced Package Tool" (apt-get / apt)', 'The "dnf" compiler application'],
    2,
    'APT (Advanced Package Tool) is the package management system for Debian and Ubuntu distributions. It handles remote dependency lookups, cryptographic package signature verification, and system upgrades.'
  ),
  createQuestion(
    'qo-p8',
    'An enterprise active directory administrator wants to enforce USB port lockdowns, safe password lengths, and automatic screen locks on 500 remote Windows laptops. Which integrated system must they configure?',
    ['Windows System Restore points', 'Group Policy Objects (GPOs)', 'Windows Defender Security Center', 'Dynamic Active Directory DNS mappings'],
    1,
    'Group Policy Objects (GPOs) allow Windows domain administrators to define and distribute strict desktop configurations, registry values, and security restrictions across all connected workstations.'
  ),
  createQuestion(
    'qo-p9',
    'Where in the Linux directories flow are service logging logs, active network transactions files, and general runtime execution records maintained continuously?',
    ['/usr/log/sys', '/opt/logs/active', '/var/log directory tree', '/etc/log/operations'],
    2,
    'The "/var/log" directory contains volatile, dynamic system records (such as authentication events, server logs, kernel diagnostics, and custom service outputs).'
  ),
  createQuestion(
    'qo-p10',
    'An administrator needs to grant specific junior security analysts root-level permissions to run only network diagnostic scans, without sharing the master root password. Which config file must they edit on Linux?',
    ['/etc/passwd user directories rules', '/etc/shadow secure crypt keys list', '/etc/sudoers permissions parameters structure', '/etc/group user association mapping'],
    2,
    'The "/etc/sudoers" configuration designates exactly which users, groups, or endpoints can trigger elevated commands, allowing granular privilege delegation through "sudo" directives.'
  ),
  createQuestion(
    'qo-p11',
    'When evaluating enterprise infrastructure management, what represents a primary disadvantage of a Graphical User Interface (GUI) over a Command Line Interface (CLI) for system administration?',
    ['GUIs do not support deep multi-colored visual themes', 'GUIs have higher resource overhead, lack native parallel automation scripting, and are complex to manage securely over low-bandwidth diagnostic loops', 'GUIs completely block the compilation of binary application code files', 'GUIs run strictly inside the processor Ring 0 kernel privilege core'],
    1,
    'GUIs introduce heavy display software overhead and are difficult to automate on a large scale. CLIs support advanced script pipelines, run lightweight over secure SSH keys, and consume minimal resources.'
  ),
  createQuestion(
    'qo-p12',
    'In active Windows deployments, which security mechanism tracks and aggregates audit details (like logon failures, privilege modifications, and system startup interruptions) for forensic auditing?',
    ['Windows Task Manager database', 'Windows Event Logs (System, Security, Application logs)', 'IIS administrative log files', 'Registry hives local files backups'],
    1,
    'The Windows Event log infrastructure collects centralized, structured XML-based diagnostic files. The Security log is especially critical for tracking authorization events and logon failures.'
  ),
  createQuestion(
    'qo-p13',
    'When compiling software from source code on Linux, which utility reads generated Makefile guidelines to orchestrate the compiling sequence of compiler modules?',
    ['The "cc" compiler runner', 'The "configure" shell script', 'The "make" utility engine', 'The "sudo dpkg" installation engine'],
    2,
    'The "make" command processes Makefile directives. This automatically compiles code in the correct sequence, linking objects, setting environment flags, and building final binary assemblies.'
  ),
  createQuestion(
    'qo-p14',
    'Operating systems support shared dynamic library frameworks to optimize RAM and storage resources. What file types represent these shared dynamic assemblies on Windows and Linux, respectively?',
    ['.exe runtime wrappers and .sh shell blocks', '.dll (Dynamic Link Libraries) and .so (Shared Objects) files', '.sys system drivers and .conf configuration listings', '.reg registries templates and .bin storage modules'],
    1,
    'Windows maps dynamic linkages using DLL files, while Linux platforms leverage Shared Objects (.so extension). Both formats let multiple running applications share the same compiled helper code in RAM.'
  ),
  createQuestion(
    'qo-p15',
    'How do memory management systems on Linux handle resource allocation when active RAM capacity is fully exhausted by system workloads?',
    ['They trigger BIOS hardware restarts automatically', 'They allocate dedicated "swap space" partitions (virtual memory on disk) to prevent crashing', 'They permanently compress all existing kernel binaries in memory Ring 0', 'They route memory operations directly over PCIe serial channels'],
    1,
    'When physical RAM limits are reached, Linux moves inactive memory pages to a designated disk partition known as swap space. This keeps the system running, although it reduces performance due to disk read/write constraints.'
  ),
  createQuestion(
    'qo-p16',
    'A security investigator audits a CentOS/RHEL enterprise instance. Which package manager is native to this distribution family for downloading and tracking dependencies?',
    ['The Debian advanced package tool "apt"', 'The RedHat/CentOS installer tool (yum / dnf)', 'The Arch terminal builder pacman tool', 'The dynamic binary tarball compiler install script'],
    1,
    'RedHat and CentOS/Fedora distributions use the YUM/DNF package management engines, which interact with RPM package metadata files.'
  ),
  createQuestion(
    'qo-p17',
    'Which prominent directory in the Linux file layout houses user-specific execution binaries, system utility commands, and standard shared libraries?',
    ['/proc virtual directories layout', '/usr directory tree', '/boot firmware folder', '/opt container mounts'],
    1,
    'The "/usr" hierarchy (User System Resources) stores read-only user-facing system utilities, shared library architectures, and standard executable binaries inside "/usr/bin".'
  ),
  createQuestion(
    'qo-p18',
    'What terminal command lets a Linux administrator view live kernel boot logs, hardware interface registrations, and physical processor loading events stored in the kernel ring buffer?',
    ['cat /var/log/kernel', 'dmesg console command', 'ps -ef sys logs list', 'tail -f /etc/sysctl.conf'],
    1,
    'The "dmesg" (diagnostic message) utility extracts and prints the kernel ring buffer. This helps identify physical driver issues, storage device attachments, and network card failures.'
  ),
  createQuestion(
    'qo-p19',
    'What is the structural role of the "/proc" virtual directory path on standard Linux installations?',
    ['It is the secure folder containing encrypted user password hashes', 'It is a virtual, in-memory interface mapping real-time kernel variables, process states, and active hardware metrics', 'It stores physical backup images of the operating system partitions', 'It lists configuration unit models for the systemd boot process'],
    1,
    'The "/proc" directory is a virtual file system (procfs). It does not exist on disk, acting instead as a live window into memory that maps active process trees (PIDs), CPU variables, and kernel resources in real-time.'
  ),
  createQuestion(
    'qo-p20',
    'Which Windows command line terminal tool is built around object-oriented scripting patterns, leveraging the .NET Framework to pass structured data objects instead of raw text characters?',
    ['Command Prompt (cmd.exe)', 'PowerShell shell terminal engine', 'Bash for Windows subsystem (WSL)', 'Windows Task Scheduler terminal'],
    1,
    'PowerShell is built on the .NET framework, passing structured objects through its pipeline. This allows scripts to modify precise file and process parameters, rather than parsing raw text streams with regex.'
  )
];

// ==========================================
// QUIZ 3: COMMAND LINE INTERFACES (20 Qs)
// ==========================================
export const osCliCrudQuestions: QuizQuestion[] = [
  createQuestion(
    'qo-c1',
    'Which combined system flags must be appended to the "rm" command on Linux Bash terminals to completely force a recursive deletion of a directory and all of its files?',
    ['-la directory list', '-rf recursive and force flags', '-dir configuration file block', '-append backup variables'],
    1,
    'The command "rm -rf" issues a force statement to recursively erase the directory and all of its nested contents.'
  ),
  createQuestion(
    'qo-c2',
    'What is the operational difference between the console stdout redirection operators ">" and ">>"?',
    ['> is a pipeline operator, whereas >> is a secure routing mode', '>> appends data to the end of a file without destroying existing content, while > overwrites the target file completely', '> is a PowerShell exclusive command, while >> belongs to Bash', '>> is used to list directory files recursively'],
    1,
    'The double-arrow (">>") appends streams to the end of a file without destroying current file rows, while is standard single-arrow (">") replaces the file contents completely.'
  ),
  createQuestion(
    'qo-c3',
    'Which Microsoft PowerShell administrative cmdlet represents the native equivalent to the Linux "cat" file-viewing utility?',
    ['type-file cmdlet script', 'Get-Content cmdlet script', 'Read-Item console command', 'Set-Content text parameters'],
    1,
    'The PowerShell cmdlet "Get-Content" is the standard mechanism to query and output unencrypted text strings from local files.'
  ),
  createQuestion(
    'qo-c4',
    'Which console character feeds the text output stream of one running system command directly into a second parsing utility command?',
    ['The redirection arrow ">"', 'The pipeline operator "|"', 'The background running operator "&"', 'The variable wildcard "%"'],
    1,
    'The pipe ("|") operator establishes a standard pipeline, feeding the standard output (stdout) of the preceding process as direct input (stdin) to the following utility.'
  ),
  createQuestion(
    'qo-c5',
    'An analyst wants to view all files, including hidden ones (prefixed with a dot), along with their detailed metadata (permissions, owner, size) on Linux. Which command should they run?',
    ['ls -la', 'dir /w', 'list-files -all', 'show -hidden'],
    0,
    'The command "ls -la" lists all files inside a directory in long-form format ("-l"), displaying size, ownership, dates, permissions, and including hidden files ("-a").'
  ),
  createQuestion(
    'qo-c6',
    'Which terminal utility displays your active absolute path location inside the system folder structure on a Bash console?',
    ['whoami', 'pwd (print working directory)', 'cd /root', 'whereis'],
    1,
    'The "pwd" (print working directory) command outputs the complete absolute path starting from the system root to your current location.'
  ),
  createQuestion(
    'qo-c7',
    'A technician needs to view a giant 10-Gigabyte network intrusion log file. Which command is safest to open it incrementally without eating system RAM resources?',
    ['cat big_log.log', 'notepad big_log.log', 'less big_log.log', 'vi big_log.log'],
    2,
    '"less" displays file contents page-by-page. It does not load the entire large file into RAM on launch, protecting system performance.'
  ),
  createQuestion(
    'qo-c8',
    'When redirecting process outputs, which numeric descriptor represents the standard error output (stderr) stream in Bash configurations?',
    ['0 descriptor', '1 descriptor', '2 descriptor', '3 descriptor'],
    2,
    'In Linux shell systems, file descriptor 0 represents standard input (stdin), 1 is standard output (stdout), and 2 represents standard error (stderr).'
  ),
  createQuestion(
    'qo-c9',
    'Which binary utility creates a new empty folder path in Linux and Windows CLI command terminals?',
    ['create-dir directory', 'mkdir utility', 'touch initialization', 'new-item -type file'],
    1,
    'The "mkdir" (make directory) utility creates new directory structures across both Linux Bash and Windows cmd/PowerShell networks.'
  ),
  createQuestion(
    'qo-c10',
    'How do absolute paths and relative paths differ in command line file system operations?',
    ['Absolute paths map from the workspace user directory, relative paths map from physical memory structures', 'Absolute paths define locations starting from the system root directory (e.g. /), while relative paths define targets relative to your current location (e.g. ../)', 'Relative paths require superuser sudo credentials to parse, while absolute paths are readable by any process', 'They are identical across Linux but function differently on Windows CMD platforms'],
    1,
    'Absolute paths map directory steps starting explicitly from the root directory ("/" on Linux, "C:\\" on Windows). Relative paths resolve starting from your current working directory.'
  ),
  createQuestion(
    'qo-c11',
    'A Windows security analyst wants to inspect active network socket connections, listening ports, and corresponding process identifiers (PIDs). Which tool is best?',
    ['ipconfig /all', 'nslookup -type=any', 'netstat -ano command', 'tasklist /v'],
    2,
    'The command "netstat" (with "-ano" switches on Windows) outputs all listening and active TCP/UDP ports, showing numeric IP addresses and mapping them to their governing Process ID (PID).'
  ),
  createQuestion(
    'qo-c12',
    'Which Linux utility copies files or complete directories from a source path to a destination path?',
    ['mv utility', 'cp utility', 'touch utility', 'mkfile utility'],
    1,
    'The "cp" command copies files or directories (with the "-r" recursive flag) to a target path, leaving the source files intact.'
  ),
  createQuestion(
    'qo-c13',
    'Which console utility is used to rename files or relocate files to different directories on Linux shells?',
    ['cp utility', 'mv utility', 'ln utility', 'ren utility'],
    1,
    'The "mv" (move) utility is used to move files or directories, and is also the standard mechanism to rename them.'
  ),
  createQuestion(
    'qo-c14',
    'A SOC analyst needs to monitor a live authentication log file for raw incoming attacks in real-time. Which command continuously outputs new appended data lines?',
    ['cat /var/log/auth.log', 'tail -f /var/log/auth.log', 'head -n 20 /var/log/auth.log', 'less /var/log/auth.log'],
    1,
    'The "tail -f" (follow) utility monitors files in real-time, displaying new lines as they are appended to the log file on disk.'
  ),
  createQuestion(
    'qo-c15',
    'Which command parses text files using regular expression parameters to isolate and print matching lines on a Linux host?',
    ['grep utility', 'sed utility', 'awk utility', 'find utility'],
    0,
    'The "grep" (global regular expression print) utility parses files for a specified string pattern, displaying all matching lines.'
  ),
  createQuestion(
    'qo-c16',
    'In PowerShell, what command template syntax structure characterizes standard system cmdlet scripts?',
    ['Verb-Noun naming structure (e.g., Get-Process)', 'Noun-Verb naming structure (e.g., Process-Get)', 'Object oriented dot methods (e.g., process.get)', 'Unix styled lowercase commands (e.g., psaux)'],
    0,
    'PowerShell cmdlets use a consistent "Verb-Noun" syntax (e.g., Get-Content, Set-ExecutionPolicy, Start-Service), making command discovery highly intuitive.'
  ),
  createQuestion(
    'qo-c17',
    'Which terminal wildcard character represents zero or more unknown characters when filtering files or paths?',
    ['The question mark "?" wildcard', 'The asterisk "*" wildcard', 'The percent "%" key flag', 'The backslash "\\" path flag'],
    1,
    'The asterisk ("*") is a multi-character wildcard that matches any string of zero or more characters during file operations.'
  ),
  createQuestion(
    'qo-c18',
    'Which characters are placed before a command to run it as an alias or look up shortcut names in Linux settings?',
    ['alias console utility', 'set shortcut configurations', 'export profiles settings', 'link binary directives'],
    0,
    'The "alias" command lets you create custom shortcuts or override commands with default flags (e.g., "alias ll=\'ls -la\'").'
  ),
  createQuestion(
    'qo-c19',
    'How do you execute a binary file located inside your current working directory when your shell path path environment doesn\'t actively index it?',
    ['Run: filename', 'Run: ./filename', 'Run: /filename', 'Run: runfilename'],
    1,
    'Using "./filename" tells the shell to look specifically in the current directory (".") for the target binary, bypassing search path checks.'
  ),
  createQuestion(
    'qo-c20',
    'When running a script, you want to redirect both standard output (stdout) and standard error (stderr) to a null device to silence all console output. Which redirection is correct on Linux?',
    ['> /dev/null 2>&1', '2> /dev/null', '>> silenced_run.txt', '| /dev/null/silent'],
    0,
    'Using "> /dev/null" redirects standard output to a virtual null path. Appending "2>&1" then redirects standard error (file descriptor 2) to the same stream, silencing all system outputs.'
  )
];

// ==========================================
// QUIZ 4: PERMISSIONS & SYSTEM LOGS (20 Qs)
// ==========================================
export const permissionsQuestions: QuizQuestion[] = [
  createQuestion(
    'qo-l1',
    'If a security analyst executes "chmod 640 target_report.csv" on a Linux node, what access rights has the Group received?',
    ['Read access only', 'Read and execute access', 'Read and write access exclusively', 'No permissions whatsoever'],
    0,
    'The octal digit for the group field is 4, which corresponds to Read-only access (Read=4, Write=2, Execute=1).'
  ),
  createQuestion(
    'qo-l2',
    'Which Linux directory is the standard location for files containing authentication logs, boot diagnostics, and system services logs?',
    ['/usr/log/system', '/var/log directory tree', '/sys/log system records', '/etc/log variables'],
    1,
    'The "/var/log" directory contains system-wide logs, process status values, and service events logs.'
  ),
  createQuestion(
    'qo-l3',
    'A security operations team wants to inspect active SSH authorization attempts and sudo executions on a Debian-based Linux host. Which log file contains these records?',
    ['/var/log/auth.log (or /var/log/secure)', '/var/log/dmesg system buffer', '/var/log/syslog general logs', '/var/log/audit/rules.log'],
    0,
    '"/var/log/auth.log" (Debian/Ubuntu) and "/var/log/secure" (CentOS/RHEL) track all login transactions, authentication failures, and privilege escalations.'
  ),
  createQuestion(
    'qo-l4',
    'Which Linux command utility is used to alter user or group ownership attributes on files and folder trees?',
    ['chmod operator', 'chown operator', 'setfacl system options', 'chgrp console setting'],
    1,
    'The "chown" (change owner) command updates user or group ownership of a target file or folder.'
  ),
  createQuestion(
    'qo-l5',
    'What capability do Access Control Lists (ACLs) provide over standard Linux file permissions (rwx User-Group-Others)?',
    ['ACLs compress file sizes during transfer', 'ACLs let you define specific access rights for individual users or distinct groups outside standard owner/group structures (e.g. via setfacl)', 'ACLs permanently seal registry hives on host systems', 'ACLs verify kernel signatures during UEFI boot'],
    1,
    'ACLs provide granular access control. Using "setfacl" and "getfacl" on Linux, you can assign custom permissions to specific users without altering the file\'s primary group ownership.'
  ),
  createQuestion(
    'qo-l6',
    'A system administrator wants to list all active running processes, resource owners, and process parent lines on a Linux server. Which command is best?',
    ['ps aux or ps -ef', 'top -list', 'get-process -active', 'sysctl process'],
    0,
    'The "ps aux" and "ps -ef" commands list all running processes, resource owners (UIDs), CPU/RAM usage, and parent process associations.'
  ),
  createQuestion(
    'qo-l7',
    'Which terminal utility continuously displays real-time system resource usage, sorting processes by CPU and RAM utilization?',
    ['ps -ef utility', 'top or htop console utilities', 'kill -l diagnostic', 'dmesg system diagnostics'],
    1,
    'The "top" and "htop" utilities output real-time process statistics, memory allocations, CPU loads, and active swap indicators.'
  ),
  createQuestion(
    'qo-l8',
    'Which terminal kill signal is a non-ignorable command that forces the instant termination of a rogue system process?',
    ['SIGTERM (Signal 15)', 'SIGKILL (Signal 9)', 'SIGINT (Signal 2)', 'SIGHUP (Signal 1)'],
    1,
    'Signal 9 (SIGKILL) forces immediate process termination. Bypassing clean program shutdowns, the OS kernel forcefully destroys the execution thread.'
  ),
  createQuestion(
    'qo-l9',
    'Which command extracts raw boot records, system hardware alerts, and device driver configurations directly from the kernel ring buffer?',
    ['cat /var/log/boot.log', 'dmesg command tool', 'journalctl -f', 'syslog -view'],
    1,
    'The "dmesg" utility prints out logs from the kernel ring buffer, making it invaluable for diagnosing physical hardware issues and driver initialization errors.'
  ),
  createQuestion(
    'qo-l10',
    'A Windows administrator wants to list running processes and map active memory allocations via CLI. What native shell command can they use?',
    ['tasklist utility', 'Get-Service cmdlet', 'eventvwr command', 'taskmgr console'],
    0,
    'The command "tasklist" is a native Windows cmd/PowerShell utility that lists running processes, showing PIDs and active memory allocations.'
  ),
  createQuestion(
    'qo-l11',
    'What critical risk is introduced when a Linux executable is configured with the "Set Owner User ID" (SUID) privilege flag?',
    ['The file is compressed using a weak algorithm', 'The executing user inherits the security privileges of the file owner (which can lead to privilege escalation if configured on binaries like bash or python)', 'It restricts administrative access to Ring 3 exclusively', 'It exposes local network paths of the host'],
    1,
    'The SUID flag (represented as an "s" in the owner execution field) runs the process with the file owner\'s permissions instead of the executing user\'s, raising risk if applied to administrative binaries.'
  ),
  createQuestion(
    'qo-l12',
    'What directory permission configuration prevents users from deleting or renaming files owned by others inside a public shared folder on Linux?',
    ['The SGID network parameter', 'The Sticky Bit (octal 1000, representation t)', 'The SUID authorization flag', 'The general chmod 777 configuration'],
    1,
    'The Sticky Bit (represented as "t" in permissions) prevents users from deleting or renaming files inside a public directory unless they own the file, the folder, or have root credentials.'
  ),
  createQuestion(
    'qo-l13',
    'In Windows NTFS configurations, what is the role of the Discretionary Access Control List (DACL)?',
    ['It handles cryptographic key storage inside the TPM', 'It defines exactly who is permitted or denied read, write, or execution rights on files and folders', 'It manages system audit logs in Event Viewer', 'It handles virtualization templates over active directories'],
    1,
    'The DACL consists of Access Control Entries (ACEs) that specify permissions for users and groups, determining who has access to a resource.'
  ),
  createQuestion(
    'qo-l14',
    'In auditing systems, what does the System Access Control List (SACL) handle on Windows platforms?',
    ['Enforces password length requirements across active directories', 'Generates security audit records in the Event Log whenever defined individuals access a target file', 'Enforces BitLocker drive decryption routines', 'Allocates disk quotas to guest users'],
    1,
    'The SACL specifies which file access events (e.g. read attempts by a specific group) should generate security audit logs in the Event Log.'
  ),
  createQuestion(
    'qo-l15',
    'What user setting determines the default base file permissions assigned to newly created files and directories on Linux nodes?',
    ['chmod default policy', 'umask (user mask)', 'chown primary assignment', 'setfacl default rules'],
    1,
    'The "umask" represents a subtraction mask applied to files (base 666) and directories (base 777) during creation to set initial access rights.'
  ),
  createQuestion(
    'qo-l16',
    'Which command tracks all system-call loops, dynamic linkages, and physical memory attachments executed by a running program in Linux?',
    ['lsof command', 'strace tool system', 'dmesg terminal', 'systemctl monitor'],
    1,
    'The "strace" (system trace) utility monitors system calls (syscalls) made by processes, making it invaluable for debugging file modifications and operational exceptions.'
  ),
  createQuestion(
    'qo-l17',
    'A security investigator suspects a rogue program is running. Which tool lists all open file handles, active directory linkages, and active network sockets held by that PID on Linux?',
    ['ps -ef process list', 'lsof (list open files)', 'dd diagnostics', 'tail -f syslog'],
    1,
    'The "lsof" (list open files) utility prints a list of files, sockets, and ports held open by system process threads, helping identify unauthorized activity.'
  ),
  createQuestion(
    'qo-l18',
    'Which automated kernel process monitor on Linux evaluates active memory footprints and forcefully kills processes with high RAM usage to protect host operations?',
    ['Systemd core scheduler', 'Out-Of-Memory (OOM) Killer', 'CPU governor daemon', 'dmesg monitor scheduler'],
    1,
    'The Out-Of-Memory (OOM) Killer is a kernel feature that monitors system RAM. When resources are depleted, it selects and terminates a high-footprint process to prevent system-wide lockups.'
  ),
  createQuestion(
    'qo-l19',
    'What Linux daemon generates continuous kernel-level audits, tracking authentication events, file writes, and custom rule violations?',
    ['The systemd-init daemon', 'The auditd (Audit Daemon) system', 'The secure syslog transport framework', 'The PAM (Pluggable Authentication Modules) engine'],
    1,
    'The auditd framework monitors defined files, system calls, and authentication events on a Linux machine, logging violations to /var/log/audit/audit.log.'
  ),
  createQuestion(
    'qo-l20',
    'What diagnostic output is saved to disk when a Windows computer experiences a Blue Screen of Death (BSOD) system crash?',
    ['A complete registry hive export', 'A system Minidump file (.dmp file)', 'An event viewer database archive', 'An IIS administrative text track'],
    1,
    'When Windows crashes (BSOD), the kernel dumps physical memory contents onto a Minidump (.dmp) file, which technicians parse with debuggers (like WinDbg) to find the failing driver.'
  )
];

// ==========================================
// QUIZ 5: VIRTUALIZATION SYSTEMS (20 Qs)
// ==========================================
export const virtualizationQuestions: QuizQuestion[] = [
  createQuestion(
    'qo-v1',
    'Which virtualization platform is categorized as a bare-metal Type-1 Hypervisor that manages physical server hardware directly?',
    ['VirtualBox application', 'VMware Workstation application', 'Proxmox VE (or VMware ESXi)', 'QEMU emulator interface'],
    2,
    'Proxmox VE and VMware ESXi are bare-metal Type-1 hypervisors that run directly on physical hardware, bypassing the need for a host operating system.'
  ),
  createQuestion(
    'qo-v2',
    'Which VirtualBox network configuration attaches guests securely to an isolated switch that enables guest-to-guest and host-to-guest communication, while blocking external internet WAN access?',
    ['NAT Service Adapter', 'Bridged Network Adapter', 'Host-Only Network Adapter', 'Generic Driver Interface'],
    2,
    'A Host-Only adapter isolates virtual guests from external networks while keeping local communication between the guest VMs and the host machine active.'
  ),
  createQuestion(
    'qo-v3',
    'In Type-2 virtualized topologies, what role is played by the HostOS?',
    ['It represents the isolated sandboxed guest', 'It represents the base physical operating system hosting the hypervisor application', 'It serves as the cloud-native database gateway', 'It manages hardware storage sectors directly'],
    1,
    'The HostOS is the primary physical operating system. It runs the Type-2 hypervisor (like VirtualBox or VMware Workstation) as a standard application.'
  ),
  createQuestion(
    'qo-v4',
    'In hypervisor setups, how does a GuestOS differ from the HostOS conceptually?',
    ['The GuestOS runs privileged in memory Ring 0 physical space', 'The GuestOS is the isolated operating system nested inside a virtual machine, running on virtualized hardware abstracted by the hypervisor', 'The HostOS runs only virtual containers', 'The GuestOS is the hardware motherboard firmware'],
    1,
    'The GuestOS is the operating system installed within a VM, isolated from the physical hardware by the hypervisor\'s abstraction layer.'
  ),
  createQuestion(
    'qo-v5',
    'A cybersecurity researcher wants to safely run a nested Type-1 hypervisor inside a standard VirtualBox VM. What virtualization extension flag must they enable?',
    ['DEP security settings', 'Nested Virtualization (VT-x/AMD-V pass-through)', 'UEFI Secure Boot profiles', 'BitLocker keys integration'],
    1,
    'Nested Virtualization passes hardware virtualization instructions (VT-x or AMD-V) through the hypervisor down to the guest VM, allowing it to host its own virtual machines.'
  ),
  createQuestion(
    'qo-v6',
    'What risk is associated with maintaining highly nested virtual snapshots on active production virtual machine storage nodes?',
    ['Snapshots compress the primary virtual storage disk permanently', 'Snapshots can cause massive storage I/O performance drops and consume high disk space as write operations diverge onto delta disks (.vmdk files)', 'Snapshots completely disable local network interfaces', 'Snapshots force automatic system upgrades on guests'],
    1,
    'Virtual snapshots use delta disks to track changes. If left open, these delta files grow continuously, causing performance degradation and a high risk of storage depletion.'
  ),
  createQuestion(
    'qo-v7',
    'What virtual disk provisioning model allocates the entire defined disk size to system storage immediately during VM creation?',
    ['Thin Provisioning model', 'Thick Provisioning model', 'Dynamic allocation loop', 'RAID-0 sector mapping'],
    1,
    'Thick Provisioning consumes the entire defined disk space on the physical SAN/SSD immediately, ensuring reliable disk performance.'
  ),
  createQuestion(
    'qo-v8',
    'What virtual disk provisioning model allocates physical disk space on-demand as files are actually written by the GuestOS?',
    ['Thick Provisioning model', 'Thin Provisioning model', 'Static allocation system', 'Dynamic sector paging'],
    1,
    'Thin Provisioning allocates storage on-demand. Although this allows storage over-subscription, it carries a risk of server crashes if the physical disk fills up.'
  ),
  createQuestion(
    'qo-v9',
    'How do virtual machines (VMs) differ fundamentally from software containers (like Docker)?',
    ['VMs share the host OS kernel directly, while containers package a full operating system', 'VMs require a guest OS kernel, virtualizing complete hardware configurations, while containers share the host OS kernel and package only application dependencies', 'Containers are hardware Type-1 hypervisors', 'VMs run strictly inside hardware Ring 3 profiles'],
    1,
    'Virtual machines use a hypervisor to virtualize complete hardware, requiring a separate guest kernel. Containers isolate application processes while sharing the host OS kernel directly.'
  ),
  createQuestion(
    'qo-v10',
    'Which software addition must be installed within a guest VM to enable features like dynamic display resizing, shared folders, and host-guest clipboard synchronization?',
    ['Hypervisor admin interface', 'Guest Additions (or VM Tools)', 'VirtIO network drivers', 'Device Manager updates'],
    1,
    'Guest Additions (or VMware Tools) are specialized drivers that integrate the guest operating system with the hypervisor, enabling seamless display, mouse, and clipboard features.'
  ),
  createQuestion(
    'qo-v11',
    'A security lab technician wants to deploy a new virtual machine instantly from a pre-configured template. What format describes standard packaged virtual appliances containing metadata (.ovf) and virtual disks?',
    ['.zip archive folder', '.OVA (Open Virtual Appliance / Archive)', '.ISO installation image', '.EXE installer wrapping'],
    1,
    'An OVA file is a single tar archive containing OVF metadata files, virtual disk images (.vmdk), and configuration parameters for easy deployment.'
  ),
  createQuestion(
    'qo-v12',
    'What virtual network adapter configuration bridges the Guest VM directly to your local physical LAN, assigning it an IP address from your local physical router?',
    ['NAT (Network Address Translation)', 'Bridged Adapter', 'Host-Only Adapter', 'Internal Network Adapter'],
    1,
    'A Bridged Adapter binds the VM\'s virtual network interface to your physical network card, making the VM appear as an independent device on your local LAN.'
  ),
  createQuestion(
    'qo-v13',
    'What virtual network adapter configuration translates internal outbound VM requests to the host\'s IP address, hiding the VM\'s local IP from external networks?',
    ['Bridged Adapter', 'NAT (Network Address Translation)', 'Host-Only Adapter', 'Internal Network Adapter'],
    1,
    'NAT translates outbound traffic from the VM to the host\'s IP address. This protects the VM from direct external attacks while allowing it outbound internet access.'
  ),
  createQuestion(
    'qo-v14',
    'A company needs to migrate a live, active virtual machine from one physical hypervisor host node to another with zero visible downtime. What is this process called?',
    ['Thin disk cloning migration', 'Live Migration (such as VMware vMotion or Proxmox migration)', 'Virtual backup recovery loop', 'Warm snapshot synchronization'],
    1,
    'Live Migration (e.g. VMware vMotion, Proxmox migration) copies active RAM, CPU registers, and storage states between hosts in real-time to prevent service interruption.'
  ),
  createQuestion(
    'qo-v15',
    'What hypervisor mechanism monitors and reclaims unused RAM blocks from guest systems, redistributing them back to the active resource pool?',
    ['Virtual hyper-threading scheduler', 'Memory Ballooning driver', 'Storage defragmenter loop', 'Thin-disk caching system'],
    1,
    'A balloon driver forces guest operating systems to release unused memory pages, allowing the hypervisor to reclaim and redistribute RAM resources across active VMs.'
  ),
  createQuestion(
    'qo-v16',
    'What software-defined networking (SDN) feature partitions virtual switches into isolated logical networks to separate guest networks without physical rewiring?',
    ['Dynamic router links', 'VLAN Tagging (802.1Q)', 'Virtual Host-Only profiles', 'Bridged subnet routing'],
    1,
    'Virtual switches support 802.1Q Virtual Local Area Network (VLAN) tagging, allowing administrators to logically isolate VMs on the same physical switch.'
  ),
  createQuestion(
    'qo-v17',
    'Which technology allows a guest virtual machine direct physical access to specific hardware peripherals (like a PCIe GPU or a physical USB storage drive)?',
    ['Virtual memory ballooning', 'Hardware Pass-through (such as IOMMU / PCIe pass-through)', 'Direct disk cloning', 'Thick provisioning allocation'],
    1,
    'Hardware pass-through bypasses the hypervisor layer, giving the guest VM exclusive direct access to physical PCI or USB devices.'
  ),
  createQuestion(
    'qo-v18',
    'Microsoft Windows features an integrated hypervisor of its own. What is this technology called?',
    ['VirtualBox Engine', 'Hyper-V hypervisor', 'VMware Workstation', 'Proxmox virtual suite'],
    1,
    'Hyper-V is Microsoft\'s native hypervisor. It runs as a Type-1 hypervisor beneath the bare-metal architecture when Windows virtualization is enabled.'
  ),
  createQuestion(
    'qo-v19',
    'What is the structural difference between a Linked Clone and a Full Clone VM in virtualization setups?',
    ['A Full Clone is a complete duplicate, while a Linked Clone shares virtual disk sectors with the parent VM and records changes in separate delta disks', 'A Linked Clone cannot connect to local networks', 'A Full Clone requires root rights to execute, while Linked Clones run inside web browsers', 'A Linked Clone is a container image'],
    0,
    'A Full Clone is a standalone copy of the parent VM. A Linked Clone shares the parent\'s base disk, only recording modifications in a dynamic delta disk, which saves storage space.'
  ),
  createQuestion(
    'qo-v20',
    'What security framework defines the isolation boundaries between the HostOS and GuestOS to prevent a malicious guest VM from accessing host memory?',
    ['UEFI Secure Boot parameters', 'Hypervisor Isolation rings / VM Escape protection', 'DACL/SACL configuration profiles', 'Process ring boundaries Ring 3'],
    1,
    'Hypervisor separation keeps guest machines isolated. Exploit tactics that attempt to breach this boundary are known as Virtual Machine Escape (VM Escape) attacks.'
  )
];

// ==========================================================
// MASTER EXAM: FUNDAMENTAL IT & OS (100 COMPREHENSIVE Qs)
// ==========================================================
// We will generate exactly 100 actual certification exam questions (em1-1 to em1-100).
// Each covers the exact material taught from Hardware, Diagnostics, OS administration, permissions, CLI commands, and virtualization.
export const group1MasterExamQuestions: QuizQuestion[] = [];

// Helper to push dynamically defined objects to make sure they are exact
const pushExamQ = (id: string, text: string, options: string[], ans: number, exp: string) => {
  group1MasterExamQuestions.push(createQuestion(id, text, options, ans, exp));
};

// -- Hardware & Diagnostics: 1-20
pushExamQ('em1-1', 'Which motherboard CPU parameter must be explicitly enabled at the BIOS/UEFI level to host nested VMs?', ['Data Execution Prevention (DEP)', 'Intel VT-x / AMD-V Virtualization extensions', 'Secure Boot validation keys', 'SATA controller interface mode'], 1, 'Hardware-assisted CPU virtualization (Intel VT-x or AMD-V) is required for hypervisors.');
pushExamQ('em1-2', 'Which storage type utilizes direct high-speed PCIe lanes to achieve massive read/write speeds that circumvent standard SATA bottlenecks?', ['SAS database drives', 'SATA III solid state disks', 'Non-Volatile Memory Express (NVMe) M.2 SSDs', 'USB 3.1 external modules'], 2, 'NVMe communicates directly over the PCIe bus, resulting in ultra-high read/write speeds.');
pushExamQ('em1-3', 'According to CompTIA diagnostics paradigms, what represents the first step of an active system troubleshooting model?', ['Establish a theory of probable cause', 'Test the theory to determine the cause', 'Identify the problem by gathering symptoms and examining logs', 'Establish a preventive action plan'], 2, 'Troubleshooting always begins with problem identification by gathering symptoms and user reports.');
pushExamQ('em1-4', 'What physical hardware microchip securely generates and houses device encryption keys and assists in system platform integrity checks?', ['Symmetric Vault chip', 'Trusted Platform Module (TPM)', 'PCIe bus controller', 'UEFI Secure key generator'], 1, 'The Trusted Platform Module (TPM) stores cryptographic keys and conducts local hardware measurements.');
pushExamQ('em1-5', 'What CPU-related behavior triggers when safe thermal limits are overridden, dropping clock speeds to prevent hardware burnup?', ['Dynamic Multi-threading', 'Thermal Throttling', 'ECC memory scrubbing', 'POST verification cycle'], 1, 'Thermal throttling reduces CPU clock speed to avoid overheating and catastrophic damage.');
pushExamQ('em1-6', 'Which redundant array of disks stripes data at the block level and duplicates it via mirroring to provide maximum recovery speed and fault tolerance?', ['RAID 0', 'RAID 1', 'RAID 5', 'RAID 10'], 3, 'RAID 10 stripes and mirrors data across at least 4 drives, combining high performance and redundancy.');
pushExamQ('em1-7', 'Secure Boot relies on which UEFI firmware mechanism to guarantee bootloaders have not been maliciously modified?', ['Symmetric bitlocker key checks', 'Cryptographic custom digital signatures validation', 'Automatic local cloud synchronization', 'RAM memory scrubbing diagnostics'], 1, 'Secure Boot matches the bootloader signature against trusted cryptographic keys embedded in UEFI firmware.');
pushExamQ('em1-8', 'In virtualized labs, what term describes the guest virtual operating system instances running on abstracted hypervisor interfaces?', ['The HostOS parent', 'The GuestOS VM', 'The Bare-Metal container', 'The CPU-emulation hardware'], 1, 'A GuestOS represents any operating system installed within a VM, separated from the host system.');
pushExamQ('em1-9', 'ECC RAM contains specialized parity circuits. What memory faults can it automatically repair in real-time?', ['All multi-bit corruptions', 'Single-bit memory faults', 'Hard drive physical bad blocks', 'Volatile CPU cache drops'], 1, 'ECC RAM automatically detects and repairs single-bit memory faults using parity codes.');
pushExamQ('em1-10', 'A technician encounters a system that does not boot and outputs a sequence of short beep codes. What diagnostic asset is reporting this failure?', ['Operating System bootloader', 'Motherboard POST firmware routine', 'Solid State Drive SMART monitor', 'Virtual machine guest engine'], 1, 'POST beep codes are hardware signals indicating physical faults discovered during startup.');
pushExamQ('em1-11', 'Which USB hazard involves a device that quickly charges capacitor banks from the USB port and discharges high voltage back down the data pins?', ['BadUSB firmware adapter', 'USB Killer circuit device', 'PCIe DMA pass-through adapter', 'Symmetric USB spoofing cable'], 1, 'A USB Killer discharges high-voltage loads across data lines to physically fry systems.');
pushExamQ('em1-12', 'A sustained drop in AC power grid voltage that causes system power supplies to starve is called what?', ['Power surge', 'Brownout sag', 'Blackout drop', 'Spike voltage surge'], 1, 'Brownouts are deliberate or accidental drops in network voltage that can trigger server failures.');
pushExamQ('em1-13', 'Which standard motherboard layout represents the baseline mini system used in highly compact embedded computing structures?', ['Extended ATX', 'Standard ATX', 'Micro-ATX', 'Mini-ITX'], 3, 'Mini-ITX is the standard compact form factor, perfect for kiosks and portable IT systems.');
pushExamQ('em1-14', 'What process optimizes SSD longevity by distributing block writes evenly across all flash-memory arrays?', ['System Defragmentation', 'Wear Leveling algorithms', 'Disk Mirroring redundancy', 'Paging file configurations'], 1, 'Wear leveling prevents SSD sectors from wearing out prematurely by distributing writes across all blocks.');
pushExamQ('em1-15', 'Which bus handles high-speed expansion modules, communicating directly with the CPU via serial point-to-point lanes?', ['SATA cable channel', 'PCI Express (PCIe) lanes', 'USB controller channel', 'Legacy Southbridge systems'], 1, 'PCIe lanes connect high-bandwidth peripherals (like GPUs and NVMe drives) directly to the CPU.');
pushExamQ('em1-16', 'What office-suite automation hazard must be heavily restricted to avoid remote execution exploits?', ['Central active directory SSO logs', 'Localized desktop shortcuts definitions', 'VBA Macro execution permissions', 'Cloud drive syncing templates'], 2, 'VBA macros in MS Office are an execute-access vector and must be restricted to authenticated sources.');
pushExamQ('em1-17', 'Which protocol framework maps secure federated SSO integrations between Google cloud workspace and on-premise Active Directory services?', ['SAML 2.0 Assertions', 'Direct LDAP queries', 'Standard SMTP mail exchange', 'Symmetric disk mappings'], 0, 'SAML 2.0 coordinates federated identity exchanges between Identity Providers (IdPs) and Service Providers.');
pushExamQ('em1-18', 'An Apple user secures their iCloud using Advanced Data Protection. What determines who holds the cryptographic keys to their backed-up disk files?', ['Apple technical servers exclusively', 'The user\'s local device via private end-to-end recovery keys', 'Active Directory primary domain administrators', 'UEFI firmwares Secure Boot keys'], 1, 'Advanced Data Protection encrypts files using keys stored on local user devices.');
pushExamQ('em1-19', 'Using a "split-half" checking methodology, how do you locate a short-circuited cable inside a major chain of connected network links?', ['We check each individual interface in the chain sequentially', 'We test the network at the midpoint to see which half contains the issue', 'We replace the central router immediately to see if things recovery', 'We erase half of the configuration software registries'], 1, 'A split-half search checks a system at the midpoint to instantly isolate the faulty half.');
pushExamQ('em1-20', 'Which standard monitoring technology queries internal sector statistics, temperatures, and error rates to warn of hard disk failures?', ['System File Checker (SFC)', 'S.M.A.R.T. analytics', 'Unified BIOS diagnostics', 'Event Viewer system logs'], 1, 'S.M.A.R.T. provides automated analytics monitoring disk health indicators.');

// -- Operating Systems & Architectures: 21-40
pushExamQ('em1-21', 'Which compilation step checks prerequisites and outputs Makefiles on C-based Linux distributions?', ['The make sequence', 'The configure script', 'The apt-get install sequence', 'The build script'], 1, 'The ./configure script checks dependencies and creates Makefile scripts prior to compilation.');
pushExamQ('em1-22', 'Which directory holds system-wide, flat-text configuration parameters and local service configurations on Linux?', ['/var/configuration', '/usr/bin', '/etc directory tree', '/opt/configs'], 2, 'The /etc directory houses global raw text configuration variables on Linux.');
pushExamQ('em1-23', 'Which CPU execution ring executes with absolute, unrestricted hyper-privilege and runs the core OS Kernel?', ['Ring 3 user space', 'Ring 1 drivers', 'Ring 0 kernel space', 'Ring 2 emulators'], 2, 'Ring 0 executes kernel-level system instructions with direct access to physical hardware.');
pushExamQ('em1-24', 'What defines a monolithic kernel design in operating system architecture?', ['Core subsystems share memory and execute inside high-privilege kernel space', 'Subsystems run separately inside isolated user rings', 'Applications run directly nested inside BIOS motherboard firmware', 'The filesystem runs strictly inside cloud modules'], 0, 'Monolithic kernels bundle core services into a single kernel-space execution segment.');
pushExamQ('em1-25', 'Which registry hive holds system-wide settings, operational hardware profiles, and global driver configurations on Windows?', ['HKCU', 'HKCR', 'HKLM (HKEY_LOCAL_MACHINE)', 'HKU'], 2, 'HKLM houses system-wide configurations, boot settings, and driver definitions.');
pushExamQ('em1-26', 'Which dynamic initialization system manages boot cycles, services, and system mounts on modern Linux platforms using unit files?', ['SysVinit loader', 'systemd init engine', 'Upstart daemon', 'init.d shell executor'], 1, 'Modern Linux systems deploy "systemd" to manage boot cycles, services, and mount files.');
pushExamQ('em1-27', 'Which package manager handles dependency resolution, signs verification, and package installations on Debian and Ubuntu hosts?', ['Yum packages engine', 'RPM local installer', 'APT (Advanced Package Tool)', 'DNF system compiler'], 2, 'APT manages remote lookups, dependencies, and packages on Debian and Ubuntu.');
pushExamQ('em1-28', 'What centralized tool enables Windows Domain Administrators to deploy security profiles, passwords limits, and USB lockdowns across hundreds of host nodes?', ['Windows restore points', 'Group Policy Objects (GPOs)', 'Windows Defender Security Center', 'Active Directory DNS config'], 1, 'GPOs let active directory administrators push secure configuration templates.');
pushExamQ('em1-29', 'Where in the Linux folder system are dynamic log files and system audit histories accumulated?', ['/usr/log', '/opt/sys/log', '/var/log directory tree', '/etc/log/ops'], 2, 'The /var/log directory houses system logging files.');
pushExamQ('em1-30', 'Which configuration file controls elevated command privileges and system command execution rules for "sudo" on Linux?', ['/etc/passwd user settings', '/etc/shadow security file', '/etc/sudoers parameters', '/etc/group configurations'], 2, 'The /etc/sudoers file dictates who can elevate commands using sudo.');
pushExamQ('em1-31', 'What represents a major technical disadvantage of utilizing a GUI over a CLI for high-scale enterprise server management?', ['Lack of multi-color themes support', 'Higher CPU/RAM resource overhead and complexity in automation scripting', 'Interferes with standard make compilers', 'Restricts the administrator to CPU Ring 3 execution'], 1, 'GUIs consume significant system resources and are difficult to automate on a large scale.');
pushExamQ('em1-32', 'Which system logging framework maps and audits logon failures and credential mutations on Windows?', ['Task Manager memory counters', 'Windows Event Logs (specifically the Security log)', 'IIS web server files', 'Registry hive delta logs'], 1, 'Windows Event Viewer Security log tracks logon audits and permission mutations.');
pushExamQ('em1-33', 'Which compiler command parses Makefile records to coordinate the compilation of dynamic C binaries?', ['GCC compiler utility', 'Configure loader script', 'Make command utility', 'DPKG install package script'], 2, 'The make utility orchestrates the execution of Makefiles to compile source code.');
pushExamQ('em1-34', 'What dynamic libraries represent the Windows runtime linkage format, and what is the Linux equivalent standard?', ['EXE files and SH shell blocks', 'DLL modules and SO dynamic files', 'SYS binary drivers and CONF flat files', 'REG files and BIN images'], 1, 'Windows uses DLLs, while Linux leverages Shared Objects (.so) for dynamically linked libraries.');
pushExamQ('em1-35', 'How does a Linux kernel prevent system crashes when physical RAM resources are fully consumed by workloads?', ['Issues a hardware reset from motherboard BIOS', 'Leverages disk swap partitions to hold memory pages on disk', 'Compresses kernel binaries in memory Ring 0', 'Routes active memory threads to PCIe lanes'], 1, 'Swap space allows Linux to move inactive memory pages from RAM to disk when physical memory is saturated.');
pushExamQ('em1-36', 'Which package manager is native to CentOS, RedHat, and Fedora distributions for downloading RPM files and resolving dependencies?', ['Debian advanced package tool "apt"', 'The CentOS/RHEL installer tool (YUM / DNF)', 'The Arch terminal builder pacman tool', 'Tarball compiler scripts'], 1, 'CentOS and RedHat deploy YUM/DNF to retrieve packages and dependencies.');
pushExamQ('em1-37', 'Which directory in the Linux system houses standard user-facing binaries, libraries, and utilities?', ['/proc files path', '/usr directory tree', '/boot system files', '/opt sandbox setups'], 1, 'The /usr directory contains compiled binaries, user-facing utilities, and shared libraries.');
pushExamQ('em1-38', 'Which tool outputs live kernel ring buffer logs, hardware interface registrations, and driver initializations?', ['cat /var/log/kernel', 'dmesg command tool', 'ps -ef options list', 'tail -f etc/configurations'], 1, 'The dmesg command outputs the live kernel ring buffer, useful for driver diagnostics.');
pushExamQ('em1-39', 'What represents the primary architectural role of the virtual file system "/proc" on Linux standard kernels?', ['Stores decrypted offline user credentials', 'Acts as an in-memory virtual directory path exposing real-time kernel, system metrics, and process tables', 'Saves compressed physical files and archives', 'Allocates boot directives for the systemd processes'], 1, 'The procfs (/proc) directory acts as a live window to memory, exposing process states (PIDs) and kernel configurations.');
pushExamQ('em1-40', 'Which Microsoft shell leverages the .NET Framework, passing typed structured objects down its pipeline instead of raw character arrays?', ['Cmd.exe command shell', 'PowerShell command shell', 'Windows Subsystem for Linux (WSL)', 'Task Scheduler shell wrapper'], 1, 'PowerShell passes .NET objects through its pipeline, facilitating structured system state mutations.');

// -- Command Line Interfaces & CRUD Operations: 41-60
pushExamQ('em1-41', 'Which Bash command forces recursive erasure of a directory, bypassing confirmation prompts?', ['rm -la directory', 'rm -rf directory and files', 'rmdir system files', 'delete -all directories'], 1, 'The "rm -rf" command recursively deletes folders and files without user prompts.');
pushExamQ('em1-42', 'What is the operational difference between the redirection characters ">" and ">>" in shell systems?', ['> routes data streams to processes, >> is for pipe loops', '>> appends data to the end of a file, whereas > completely overwrites the target file', '> is for Bash console structures, >> is for cmd.exe exclusively', '>> lists files recursively'], 1, 'The ">>" operator appends output to a file, whereas ">" overwrites existing content.');
pushExamQ('em1-43', 'Which PowerShell cmdlet outputs file contents to the terminal, serving as the equivalent to the Linux "cat" command?', ['Get-FileContent cmdlet', 'Get-Content cmdlet', 'Read-FileContent cmdlet', 'Set-Content cmdlet'], 1, 'Get-Content is the standard PowerShell cmdlet used to retrieve file contents.');
pushExamQ('em1-44', 'Which operator routes the stdout stream of the preceding command as stdin to the next command?', ['Redirection arrow >', 'Pipe operator |', 'Background run operator &', 'Variable modifier %'], 1, 'The pipe ("|") operator establishes an active stream routing stdout of one process to stdin of another.');
pushExamQ('em1-45', 'An administrator wants to list all directory contents in long-form format, showing hidden files and metadata. Which command is best?', ['ls -la', 'dir /w', 'list -all -hidden', 'show -files'], 0, 'The command "ls -la" displays complete folder entries (including hidden files prefixed with ".") in long-form.');
pushExamQ('em1-46', 'Which command outputs your current active folder directory path in a standard Linux Bash terminal?', ['whoami', 'pwd (print working directory)', 'cd /root', 'whereis'], 1, 'pwd prints the absolute directory path of the shell\'s current working folder.');
pushExamQ('em1-47', 'Which file paging tool lets a user navigate a large log file page-by-page without loading the entire file into memory?', ['cat tool', 'notepad utility', 'less command utility', 'vi script editor'], 2, 'The less utility processes text incrementally, avoiding RAM depletion when viewing extremely large files.');
pushExamQ('em1-48', 'Which numeric file descriptor represents the standard error (stderr) stream in Bash consoles?', ['0 file descriptor', '1 file descriptor', '2 file descriptor', '3 file descriptor'], 2, 'File descriptor 2 represents stderr, while 0 is stdin and 1 is stdout.');
pushExamQ('em1-49', 'Which cross-platform command is used to spawn a new directory?', ['create-directory', 'mkdir', 'touch', 'new-item -type file'], 1, 'mkdir creates a new folder on both Linux and Windows.');
pushExamQ('em1-50', 'How do absolute paths and relative paths differ in CLI operations?', ['Absolute paths start from current directory, relative paths point to root', 'Absolute paths map from system root (/), whereas relative paths resolve starting from current location', 'Relative paths require administrative privileges, absolute paths are public', 'Absolute paths are Windows CMD specific'], 1, 'Absolute paths map starting from system root, while relative paths map starting from your current folder location.');
pushExamQ('em1-51', 'Which command shows listening network connections and active socket ports mapped to PIDs on Windows?', ['ipconfig /all', 'nslookup -type=any', 'netstat -ano command', 'tasklist /v'], 2, 'The command "netstat -ano" outputs network sockets, listening ports, and corresponding process IDs.');
pushExamQ('em1-52', 'Which system command is used to replicate or copy files on Linux terminals?', ['mv utility', 'cp utility', 'touch utility', 'mkfile utility'], 1, 'The "cp" utility duplicates a file or directory block to a target path.');
pushExamQ('em1-53', 'Which console tool moves a file or folder and is also used to rename file blocks in Linux?', ['cp utility', 'mv utility', 'ln utility', 'ren utility'], 1, 'The "mv" (move) utility is used to rename files or relocate them across directory segments.');
pushExamQ('em1-54', 'To monitor a system authentication log file for raw incoming login alerts in real-time, which command should you run?', ['cat /var/log/auth.log', 'tail -f /var/log/auth.log', 'head -n 25 /var/log/auth.log', 'less /var/log/auth.log'], 1, 'Using "tail -f" monitors log updates in real-time as they are written to disk.');
pushExamQ('em1-55', 'Which utility uses regular expressions to search for specific text patterns inside log files?', ['grep', 'sed', 'awk', 'find'], 0, 'grep is the standard utility used to search text streams for defined regex patterns.');
pushExamQ('em1-56', 'How are standard cmdlets named in Microsoft PowerShell terminal environments?', ['Noun-Verb syntax', 'Verb-Noun syntax (e.g., Get-Service)', 'Dot-notation namespaces', 'C-language labels'], 1, 'PowerShell uses a unified "Verb-Noun" format (e.g., Get-Process, Set-Content) to organize tasks.');
pushExamQ('em1-57', 'What standard wildcard matches any sequence of characters during path expansion?', ['Question mark ?', 'Asterisk *', 'Percent symbol %', 'Backslash \\'], 1, 'The asterisk ("*") represents any sequence of zero or more characters in directory searches.');
pushExamQ('em1-58', 'Which command defines custom terminal shortcuts or binds default flags to shell utilities?', ['alias command', 'set shortcuts command', 'export profile command', 'link binary path'], 0, 'The alias command declares user shortcuts (e.g., alias ls="ls --color=auto").');
pushExamQ('em1-59', 'How do you execute an unindexed binary file inside your current working directory when its path isn\'t stored in the system PATH variable?', ['Run: file', 'Run: ./file', 'Run: /file', 'Run: run file'], 1, 'Using "./file" executes the target binary located explicitly inside the current folder (".").');
pushExamQ('em1-56', 'Which operator combination redirects both stdout and stderr channels to a null target to silence script logging on Linux?', ['> /dev/null 2>&1', '2> /dev/null', '>> silenced_logs.txt', '| /dev/null/logs'], 0, 'Silencing all console logs requires "> /dev/null" for stdout and "2>&1" to route stderr to stdout.');

// -- Permissions & System Logs: 61-80
pushExamQ('em1-61', 'What access permissions are assigned to Others if a file is configured with octal permissions "750" in Linux?', ['Read and write only', 'Read and execute only', 'No permissions whatsoever', 'Execute access exclusively'], 2, 'In "750", Owner gets 7 (rwx), Group gets 5 (r-x), and Others get 0 (no access).');
pushExamQ('em1-62', 'In Linux, where are service logs, diagnostic records, and security audits primarily accumulated?', ['/usr/log/sys', '/var/log directory tree', '/sys/log system files', '/etc/log variables'], 1, 'The /var/log hierarchy contains system logs, service event trails, and audit records.');
pushExamQ('em1-63', 'A security administrator wants to audit failed logins and privilege escalations on a RedHat-derived server. Which log file contains these entries?', ['/var/log/auth.log', '/var/log/secure', '/var/log/syslog', '/var/log/audit/rules.log'], 1, 'RedHat/CentOS platforms log authentication and security events to /var/log/secure.');
pushExamQ('em1-64', 'Which Linux utility modifies file user or group ownership attributes?', ['chmod', 'chown', 'setfacl', 'chgrp'], 1, 'The "chown" utility updates the primary owner and group identities on files.');
pushExamQ('em1-65', 'What capability does an Access Control List (ACL) provide over standard Linux file permissions (rwx)?', ['Configures NTFS encryption files', 'Allows administrators to configure granular permissions for specific users and groups inside the filesystem (e.g. via setfacl)', 'Seals HKLM hives', 'Authenticates SSL signatures'], 1, 'ACLs let administrators assign specific permissions to individual users or groups outside of standard ownership boundaries.');
pushExamQ('em1-66', 'Which command displays a list of running processes, resource owners, and parent process associations?', ['ps aux or ps -ef', 'top -list', 'get-process', 'sysctl process'], 0, 'The ps command (with "aux" or "-ef" options) returns process tables and parent/child associations.');
pushExamQ('em1-67', 'Which console tool displays real-time resource usage, sorting processes by CPU or memory usage?', ['ps -ef command', 'top or htop commands', 'kill -l diagnostic', 'dmesg console buffer'], 1, 'The top and htop utilities provide dynamic, interactive monitoring of running processes and system resources.');
pushExamQ('em1-68', 'Which kill signal cannot be blocked or ignored, forcing immediate process termination?', ['SIGTERM (Signal 15)', 'SIGKILL (Signal 9)', 'SIGINT (Signal 2)', 'SIGHUP (Signal 1)'], 1, 'Signal 9 (SIGKILL) forces the kernel to instantly terminate the process thread.');
pushExamQ('em1-69', 'Which command prints logs from the kernel ring buffer, displaying hardware driver and physical interface registrations?', ['cat /var/log/boot.log', 'dmesg command tool', 'journalctl -f', 'syslog -print'], 1, 'The loader tool dmesg queries the kernel ring buffer to extract driver and hardware alerts.');
pushExamQ('em1-70', 'Which command displays running processes, process IDs, and memory metrics on a Windows CMD terminal?', ['tasklist', 'Get-Service', 'eventvwr', 'taskmgr'], 0, 'The command tasklist outputs active process strings and PID mappings on Windows.');
pushExamQ('em1-71', 'What critical security vulnerability is introduced when an executable is configured with the SUID flag?', ['The file is compressed using a weak algorithm', 'The executing user inherits the security privileges of the file owner (creating potential privilege escalation hazards if applied to shell binaries)', 'It restricts administrative operations to Ring 3', 'It exposes physical hardware configurations over networks'], 1, 'SUID executes binaries with the owner\'s privileges, raising security risks if set on administrative tools.');
pushExamQ('em1-72', 'Which permission setting ensures that only the file owner can delete or rename files inside a shared public directory?', ['The SGID flag', 'The Sticky Bit (octal 1000)', 'The SUID flag', 'The chmod 777 configuration'], 1, 'The Sticky Bit ("t" flag, octal 1000) restricts file deletions within shared folders to the file owner.');
pushExamQ('em1-73', 'In Windows NTFS permissions, what is the role of the Discretionary Access Control List (DACL)?', ['Hosts crypt hashes in TPM hardware', 'Defines which users or groups are granted or denied access permissions on files and folders', 'Collects Event Viewer entries', 'Distributes virtual machine templates'], 1, 'The DACL lists Access Control Entries (ACEs) that specify permissions for users and groups.');
pushExamQ('em1-74', 'Which security asset logs success or failure events whenever audited users access defined files on Windows?', ['Workplace GPO system files', 'System Access Control List (SACL)', 'Windows Defender antivirus definitions', 'BitLocker storage keys config'], 1, 'The SACL registers file-access event logs for tracking and auditing purposes.');
pushExamQ('em1-75', 'Which user setting defines the default permissions applied to new files and directories created on Linux?', ['chmod default policy', 'umask masking configuration', 'chown primary allocation', 'setfacl default rules'], 1, 'The umask determines default permissions by subtracting its value from basic system creation scopes.');
pushExamQ('em1-76', 'Which command traces system call logs and process interrupts executed by an active Linux binary?', ['lsof command', 'strace utility', 'dmesg utility', 'systemctl monitor'], 1, 'The strace utility intercepts and records system calls made by running processes.');
pushExamQ('em1-77', 'Which diagnostic tool lists all open file handles, active directory linkages, and socket mappings held by processes in Linux?', ['ps -ef process list', 'lsof (list open files)', 'dd data duplication', 'tail -f syslog'], 1, 'lsof displays open files, active directories, and sockets mapped to running PIDs.');
pushExamQ('em1-78', 'Which kernel process monitor forces the termination of processes consuming excessive RAM to safeguard host operations?', ['Systemd scheduler', 'Out-Of-Memory (OOM) Killer', 'CPU governor daemon', 'dmesg hardware scheduler'], 1, 'The OOM Killer terminates resource-intensive threads to prevent system crashes when RAM is exhausted.');
pushExamQ('em1-79', 'What auditing daemon compiles continuous logs of file accesses, system calls, and authentication events on enterprise Linux hosts?', ['Systemd init', 'auditd daemon', 'rsyslog dispatcher', 'PAM verification engine'], 1, 'The auditd daemon compiles real-time system and security audits.');
pushExamQ('em1-80', 'Where does Windows write kernel crash dumps, driver failures, and memory errors for post-BSOD troubleshooting?', ['Active directory database backup', 'A Minidump (.dmp) file', 'IIS directory configuration files', 'Registry restore snapshots'], 1, 'On crashing (BSOD), Windows writes diagnostic memory states to a minidump (.dmp) file.');

// -- Virtualization & Lab Networks: 81-100
pushExamQ('em1-81', 'What type of hypervisor runs directly on physical server hardware with minimal resources overhead?', ['Type 2 Hosted Hypervisor', 'Type 1 Bare-Metal Hypervisor (such as Proxmox or ESXi)', 'VirtualBox application', 'QEMU emulator interface'], 1, 'Type 1 hypervisors run directly on physical hardware, maximizing efficiency.');
pushExamQ('em1-82', 'Which network configuration allows guest VMs to communicate only with other guest VMs and the host machine, while blocking WAN access?', ['NAT Service Adapter', 'Bridged Network Adapter', 'Host-Only Network Adapter', 'Generic Driver Interface'], 2, 'Host-Only adapters restrict virtual machine traffic to an isolated local network containing the host and guest VMs.');
pushExamQ('em1-83', 'In Type-2 virtualized topologies, what role is played by the HostOS?', ['It represents the guest VM', 'It represents the base physical operating system hosting the hypervisor application', 'It serves as the parent database pipeline', 'It manages raw hardware memory partitions'], 1, 'The HostOS runs the Type-2 hypervisor application on physical hardware.');
pushExamQ('em1-84', 'In hypervisor configurations, how does a GuestOS differ from the HostOS conceptually?', ['GuestOS runs privileged in memory Ring 0 physical space', 'The GuestOS is the isolated operating system nested inside a virtual machine, running on virtualized hardware abstracted by the hypervisor', 'The HostOS runs only virtual containers', 'The GuestOS is the hardware motherboard firmware'], 1, 'The GuestOS is the operating system running within a VM, isolated from the physical hardware by the hypervisor.');
pushExamQ('em1-85', 'Which virtualization extension setting must be enabled inside a VirtualBox VM to allow it to host its own virtual machines?', ['DEP security structures', 'Nested Virtualization (VT-x/AMD-V pass-through)', 'UEFI Secure Boot parameters', 'BitLocker keys integration'], 1, 'Nested Virtualization enables VT-x/AMD-V instructions to pass through down to guest VMs.');
pushExamQ('em1-86', 'What storage risk occurs when nesting numerous delta files and virtual snapshots in virtual machine environments?', ['Permanently compresses virtual storage disks', 'Decreases storage I/O performance and consumes excessive disk space', 'Disables local network adapters', 'Triggers automatic system updates on guest VMs'], 1, 'Snapshots degrade disk I/O and consume physical storage space as changes are written to delta files.');
pushExamQ('em1-87', 'Which disk allocation model allocates the entire defined storage block on physical arrays during VM creation?', ['Thin Provisioning', 'Thick Provisioning', 'Dynamic allocation loop', 'RAID-0 sector mapping'], 1, 'Thick provisioning pre-allocates the entire defined storage space on disk immediately.');
pushExamQ('em1-88', 'Which disk allocation model allocates physical block spaces dynamically on-demand as files are written by the GuestOS?', ['Thick Provisioning', 'Thin Provisioning', 'Static disk allocation', 'Dynamic sector paging'], 1, 'Thin provisioning allocates storage space dynamically as files are written.');
pushExamQ('em1-89', 'How do virtual machines differ fundamentally from software containers like Docker?', ['VMs share the host OS kernel directly, while containers package a full operating system', 'VMs require a guest OS kernel virtualizing complete hardware configurations, while containers share the host OS kernel and package only application dependencies', 'Containers are hardware Type-1 hypervisors', 'VMs run strictly inside hardware Ring 3 profiles'], 1, 'Containers share the host kernel and isolate processes, whereas VMs virtualize complete hardware and run independent kernels.');
pushExamQ('em1-90', 'Which guest utility package enables screen auto-resizing, folder integrations, and host-guest clipboard syncing?', ['Hypervisor administrative console', 'Guest Additions (or VM Tools)', 'VirtIO network drivers', 'Device Manager updates'], 1, 'Guest Additions/VM Tools provide drivers to integrate the guest OS with the hypervisor.');
pushExamQ('em1-91', 'Which pre-packaged virtual appliance format bundles metadata (.ovf) and virtual disks (.vmdk) in a single file for easy deployment?', ['ZIP archive file', 'OVA (Open Virtual Appliance / Archive)', 'ISO installation image', 'EXE dynamic wrapper'], 1, 'An OVA file is a single package containing OVF metadata and VM configuration configurations.');
pushExamQ('em1-92', 'Which virtual network adapter bridges the Guest VM directly of your physical corporate LAN, obtaining its own IP address from the physical network router?', ['NAT (Network Address Translation)', 'Bridged Adapter', 'Host-Only Adapter', 'Internal Network Adapter'], 1, 'A Bridged Adapter connects the VM directly to the physical LAN, making it appear as a physical host.');
pushExamQ('em1-93', 'Which network adapter translates internal VM requests to the host’s IP address, hiding the VM\'s internal IP from the outside network?', ['Bridged Adapter', 'NAT (Network Address Translation)', 'Host-Only Adapter', 'Internal Network Adapter'], 1, 'NAT translates internal VM traffic to the host\'s physical IP address, isolating the VM from external discovery.');
pushExamQ('em1-94', 'Migrating a running, active virtual machine from one physical hypervisor host to another with no visible downtime is known as what?', ['Thin disk cloning migration', 'Live Migration (such as VMware vMotion or Proxmox live migration)', 'Virtual backup recovery loop', 'Warm snapshot synchronization'], 1, 'Live Migration moves a running VM, its memory state, and CPU registers between hosts without service interruption.');
pushExamQ('em1-95', 'Which virtualization driver reclaims idle RAM blocks from a guest VM and returns them to the hypervisor\'s resource pool?', ['Virtual hyper-threading scheduler', 'Memory Ballooning driver', 'Storage defragmenter loop', 'Thin-disk caching system'], 1, 'A memory ballooning driver forces the guest OS to release idle memory so it can be reclaimed by the hypervisor.');
pushExamQ('em1-96', 'Which network standard partitions physical switches into isolated logical networks to segment traffic without physical cabling?', ['Dynamic router links', 'VLAN Tagging (802.1Q)', 'Virtual Host-Only profiles', 'Bridged subnet routing'], 1, 'VLAN tagging (802.1Q) logically segments virtual switch networks without additional physical cabling.');
pushExamQ('em1-97', 'Which option grants a VM exclusive, direct access to physical motherboard hardware like a GPU or PCIe peripheral?', ['Virtual memory ballooning', 'Hardware Pass-through (such as IOMMU / PCIe pass-through)', 'Direct disk cloning', 'Thick provisioning allocation'], 1, 'Hardware pass-through gives a guest VM dedicated, direct control over physical PCIe devices.');
pushExamQ('em1-98', 'What native virtualization engine is built into corporate editions of Microsoft Windows platforms?', ['VirtualBox helper', 'Hyper-V hypervisor', 'VMware workstation link', 'Proxmox virtual system'], 1, 'Hyper-V is Microsoft\'s built-in bare-metal hypervisor technology.');
pushExamQ('em1-99', 'What is the structural difference between a Linked Clone and a Full Clone virtual machine?', ['A Full Clone is a complete duplicate, while a Linked Clone shares virtual disk sectors with the parent VM and records changes in separate delta disks', 'A Linked Clone cannot connect to local networks', 'A Full Clone requires root rights to execute, while Linked Clones run inside web browsers', 'A Linked Clone is a container image'], 0, 'A Linked Clone shares the parent\'s base disk and records updates on a separate delta disk, whereas a Full Clone is completely independent.');
pushExamQ('em1-100', 'What security hazard involves a local exploit breaching virtual machine isolation to gain unauthorized command access directly on the hypervisor host?', ['Motherboard Secure Boot bypass', 'Virtual Machine Escape (VM Escape)', 'DACL NTFS inheritance injection', 'Ring 3 processor segment crash'], 1, 'VM Escape is an exploit where a malicious guest VM breaches isolation boundaries to execute malicious code on the host OS.');
