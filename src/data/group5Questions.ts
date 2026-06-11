import { QuizQuestion } from '../types';

const createQuestion = (id: string, text: string, options: string[], correctAnswerIndex: number, explanation: string): QuizQuestion => ({
  id, text, options, correctAnswerIndex, explanation
});

// ========================================================
// QUIZ 1: PROGRAMMING & AUTOMATION FUNDAMENTALS (20 Qs)
// ========================================================
export const programmingFundamentalsQuestions: QuizQuestion[] = [
  createQuestion(
    'qn-pr-1',
    'Which programming language compiles to a single, standalone, statically-linked binary, bypassing the need for a local interpreter and making it highly popular for building fast network security utilities?',
    ['Python', 'Go (Golang)', 'Bash Scripting', 'JavaScript (Node.js)'],
    1,
    'Go (Golang) compiles directly to machine code as a self-contained static binary with all dependencies included, yielding high portability and enabling execution without intermediate runtimes.'
  ),
  createQuestion(
    'qn-pr-2',
    'How does PowerShell primarily differ from traditional UNIX command shells like Bash when transferring data between piped commands?',
    ['Bash pipes pass binary encryption keys; PowerShell passes unencrypted text.', 'PowerShell passes structured .NET object arrays; Bash passes plain text byte streams.', 'Bash parses local system configurations dynamically; PowerShell requires pre-compiled binaries.', 'PowerShell restricts access to environment directories.'],
    1,
    'PowerShell is object-oriented, allowing cmdlets to pass structured .NET objects down the pipeline, preserving properties and types, in contrast to Bash which relies on parsing unstructured text streams.'
  ),
  createQuestion(
    'qn-pr-3',
    'A cybersecurity engineer needs to quickly script an automated REST API client to query a thread intelligence feed. Which native third-party module in Python is the industry standard for handling HTTP methods seamlessly?',
    ['urllib2', 'json', 'requests', 'socket'],
    2,
    'The "requests" library is the de facto standard in Python for synchronous HTTP operations, offering an intuitive, human-readable API for GET, POST, and authentication headers.'
  ),
  createQuestion(
    'qn-pr-4',
    'Which conditional block syntax is standard and correct in a Bash script when validating if a secure configuration file exists on a UNIX system?',
    ['if [ -f /etc/secure.conf ]', 'if [[ -d /etc/secure.conf ]]', 'if (exists /etc/secure.conf)', 'if check-file /etc/secure.conf'],
    0,
    'In Bash, the -f operator within single or double brackets is used to verify if a file exists and is a regular file. (The -d operator validates directories).'
  ),
  createQuestion(
    'qn-pr-5',
    'Under Python\'s built-in standard library, which module provides low-level system communication interfaces, allowing script writers to open TCP sockets or run raw banner grabs?',
    ['os', 'subprocess', 'sys', 'socket'],
    3,
    'The "socket" module gives developers direct access to the BSD socket interface, letting them bind, connect, and stream raw TCP/UDP bytes to target hosts and ports.'
  ),
  createQuestion(
    'qn-pr-6',
    'How does Node.js handle high-concurrency requests, such as receiving multiple security event webhooks, using a single-threaded architecture?',
    ['By running parallel virtual threads inside the OS kernel.', 'Using an asynchronous, event-driven, non-blocking I/O model governed by an Event Loop.', 'By spawning independent child processes for every incoming connection.', 'By compiling JavaScript source modules directly into hardware instructions on demand.'],
    1,
    'Node.js uses an event-style loop backed by the libuv library to handle asynchronous I/O natively without traditional multi-threading thread-per-connection overhead.'
  ),
  createQuestion(
    'qn-pr-7',
    'A defensive engineer wants to parse a massive Linux authorization log (/var/log/auth.log) to extract all IP addresses associated with failed root login attempts. Which command chain is most optimal?',
    ['grep "Failed password for root" auth.log | awk \'{print $11}\'', 'cat auth.log | sed \'s/failed//\'', 'find-failed-root auth.log', 'wc -l auth.log | grep root'],
    0,
    'Combining grep to filter lines matching the criteria with awk to print specific columnar indexes (such as the IP address usually at field 11) is a standard UNIX text processing pipeline.'
  ),
  createQuestion(
    'qn-pr-8',
    'In PowerShell, what command (cmdlet) would a security administrator run to fetch audit logs from the Windows operating system Security log channel?',
    ['Get-EventLog -LogName Security', 'Fetch-Audit -Channel Security', 'Show-WindowsLog -Name OS', 'Read-EventLog -Type AuditSuccess'],
    0,
    'The cmdlet "Get-EventLog" (and its modern counterpart "Get-WinEvent") query the Windows Event Log files, specifying "-LogName Security" to fetch authentication and authorization audits.'
  ),
  createQuestion(
    'qn-pr-9',
    'What describes the primary driver for using C++ over scripting languages when writing advanced low-level security applications?',
    ['Direct hardware interaction, manual memory management, and high-performance execution without runtime interpreter environments.', 'Immediate portability to any device without recompilation.', 'Inherent immunity to memory corruption vulnerabilities.', 'Built-in sandboxing that prevents system privilege abuse.'],
    0,
    'C++ offers absolute control over memory optimization and direct compilation to machine code. However, this comes at the cost of having to manage memory manually, which can introduce vulnerabilities if not done carefully.'
  ),
  createQuestion(
    'qn-pr-10',
    'A penetration tester is writing a custom packet manipulation script to test an Intrusion Detection System (IDS). Which Python library should they use to craft, modify, and transmit custom network packets?',
    ['socketio', 'scapy', 'pcap-parser', 'requests'],
    1,
    'Scapy is an extremely powerful interactive packet manipulation library that allows users to craft, decode, send, and sniff network packets across multiple protocol layers.'
  ),
  createQuestion(
    'qn-pr-11',
    'Which Go language feature is designed to perform concurrent execution of tasks (like multi-threaded network port probing) efficiently with minimal memory overhead?',
    ['Mutex Locks', 'Interfaces', 'Goroutines', 'Virtual Channels'],
    2,
    'Goroutines are lightweight, green threads managed by the Go runtime scheduler rather than the OS kernel. They consume far less memory than standard OS threads, allowing millions to run concurrently.'
  ),
  createQuestion(
    'qn-pr-12',
    'Which JavaScript RegExp method returns a boolean indicating whether a string (such as an IP address or password input) matches a given regex pattern?',
    ['String.match()', 'RegExp.test()', 'RegExp.execute()', 'String.parse()'],
    1,
    'The "RegExp.prototype.test()" method evaluates a string against a regular expression and returns "true" or "false" based on whether a match exists.'
  ),
  createQuestion(
    'qn-pr-13',
    'In a Bash script, how do you set an environmental variable so that any child processes spawned by the current shell session can inherit the configuration value?',
    ['local VAR="value"', 'VAR="value"', 'export VAR="value"', 'set VAR="value" -global'],
    2,
    'Using the "export" command marks a shell variable to be shared with children environment environments spawned from that parent process.'
  ),
  createQuestion(
    'qn-pr-14',
    'In Python, which mechanism is the standardized way to handle runtime errors gracefully, preventing the security script or daemon from crashing unexpectedly?',
    ['try...except blocks', 'on error resume next', 'catch { error() }', 'assert / eval checks'],
    0,
    'Python uses "try...except" blocks to encapsulate potentially dangerous code blocks, catching specific exceptions and allowing the code to recover cleanly.'
  ),
  createQuestion(
    'qn-pr-15',
    'What type of security vulnerability is a program written in C or C++ highly susceptible to if developers fail to perform bounds-checking on input arrays?',
    ['Insecure direct deserialization', 'Cross-site scripting (XSS)', 'Buffer Overflow', 'SQL Injection'],
    2,
    'C and C++ allow manual memory management and direct pointer manipulation without native bounds-checking, which can lead to stack or heap buffer overflows if inputs exceed allocations.'
  ),
  createQuestion(
    'qn-pr-16',
    'What construct does modern JavaScript use to solve the issue of nested asynchronous callback functions (often called "Callback Hell")?',
    ['Callbacks & Recursion', 'Promises and the async/await syntax', 'Process forks and exit frames', 'Global State Buffers'],
    1,
    'Promises coupled with the "async/await" keyword wrapper allow structured, synchronous-looking syntax for writing asynchronous, non-blocking code in JavaScript.'
  ),
  createQuestion(
    'qn-pr-17',
    'In Bash, what does the suffix "2>&1" achieve when appended to a standard system command execution line?',
    ['Redirects standard input over to standard host port 21.', 'Translates two separate files into ASCII formatted structures.', 'Redirects Standard Error (stderr, descriptor 2) over to Standard Output (stdout, descriptor 1).', 'Initiates a background multi-threaded worker session.'],
    2,
    'The stream redirect descriptor "2>&1" instructs the shell to merge Standard Error (file descriptor 2) into the Standard Output stream (file descriptor 1) so all logging can be handled by a single file pipe.'
  ),
  createQuestion(
    'qn-pr-18',
    'Why is Python called an "interpreted" language, and how does this affect its runtime comparison to compiled languages like Go or C++?',
    ['It converts to machine binary during build time; runs extremely fast.', 'Its source files are parsed and executed line-by-line during runtime by an interpreter, causing higher latency than pre-compiled machine binaries.', 'It compiles directly to hardware kernel layers.', 'It does not support data management objects.'],
    1,
    'Python relies on an interpreter utility (like CPython) to translate bytecode to assembly instructions on-the-fly at runtime, resulting in slower execution speeds compared to statically compiled languages.'
  ),
  createQuestion(
    'qn-pr-19',
    'What is a "dangling pointer" in C++ development, and what is its security hazard?',
    ['A pointer initialized as void to block external memory access.', 'A pointer referencing a memory address that has already been deallocated, which can lead to Use-After-Free system exploits.', 'An arithmetic operator referencing physical CPU speeds.', 'A function boundary that limits process execution loops.'],
    1,
    'A dangling pointer occurs when the memory it references is freed or deleted, but the pointer still holds that address, creating a vulnerability that can be exploited (e.g. Use-After-Free).'
  ),
  createQuestion(
    'qn-pr-20',
    'A developer wants to create a secure, portable, and repeatable script to automate server setups across macOS, Linux, and Windows. Why is selecting Python over Bash or PowerShell recommended?',
    ['Python comes natively pre-compiled as an executable for every architecture.', 'Python has strong cross-platform compatibility and runs identically on any target system that has a Python interpreter.', 'Python scripts completely bypass target access configurations.', 'Python requires zero local code interpreters to boot.'],
    1,
    'Unlike Bash (UNIX-specific) or PowerShell (Windows-native, though porting exists), Python acts as a highly robust cross-platform scripting mechanism.'
  )
];

// ========================================================
// QUIZ 2: CLOUD ARCHITECTURES & SERVICE BOUNDARIES (20 Qs)
// ========================================================
export const cloudSecurityModelQuestions: QuizQuestion[] = [
  createQuestion(
    'qn-cl-1',
    'Under the Cloud Security Alliance (CSA) Shared Responsibility Model, which capability remains the absolute responsibility of the tenant client across ALL service configurations (SaaS, PaaS, and IaaS)?',
    ['Physical security of the server facility hosts', 'Maintenance of hypervisor layer configurations', 'Data classifications, identity governance, access credentials, and endpoint monitoring', 'Kernel-level operating system updates'],
    2,
    'Regardless of whether the model is SaaS, PaaS, or IaaS, the customer (tenant) is always responsible for their own data classifications, accounts, access keys, and endpoint security.'
  ),
  createQuestion(
    'qn-cl-2',
    'What does the shift from on-premises datacenters to cloud computing represent financially for an enterprise?',
    ['A migration from Operational Expenditure (OpEx) to Capital Expenditure (CapEx).', 'A migration from Capital Expenditure (CapEx) to Operational Expenditure (OpEx).', 'A total elimination of any licensing or infrastructure metrics.', 'Direct government funding for processing activities.'],
    1,
    'On-premises datacenters require massive capital investments (CapEx) to buy physical assets up front. Migration to the cloud shifts costs to utility-based operational billing (OpEx).'
  ),
  createQuestion(
    'qn-cl-3',
    'Under Platform as a Service (PaaS), who is responsible for updating and patching the operating system (OS) hosting the application runtimes?',
    ['The cloud provider hosting the platform', 'The tenant administrative employee', 'The database programmer', 'The third-party compliance auditor'],
    0,
    'Under PaaS, the provider is responsible for configuring, securing, and maintaining the operating systems and runtimes, freeing up the tenant to focus strictly on their custom source codes and configurations.'
  ),
  createQuestion(
    'qn-cl-4',
    'Which technology allows operations teams to automatically build, modify, and tear down secure enterprise networks consistently using declarative text files?',
    ['Hypertext preprocessor templates', 'Infrastructure as Code (IaC) e.g., Terraform', 'Database salting blocks', 'Continuous runtime virtualization arrays'],
    1,
    'Infrastructure as Code (IaC) utilizes machine-readable configuration files (like Terraform or CloudFormation) to automatically manage and provision resources across environments.'
  ),
  createQuestion(
    'qn-cl-5',
    'What serverless computing model (FaaS) characteristic reduces idle overhead costs to zero when services are not actively processing events?',
    ['Mandatory CapEx system arrays', 'Automatic scaling down to zero instances when inactive', 'Local static binary pre-allocation', 'Constant virtualization baseline pinging'],
    1,
    'Function-as-a-Service (FaaS) resources are billed strictly by execution time. When no incoming request triggers the handler, the host scales to zero instances, eliminating idle infrastructure billing.'
  ),
  createQuestion(
    'qn-cl-6',
    'What type of hypervisor installs directly on bare-metal hardware, managing the underlying resources and virtual machines without a base operating system?',
    ['Type-2 Hypervisor', 'Embedded Container Engine', 'Type-1 Hypervisor', 'User-Mode Emulator Layer'],
    2,
    'Type-1 (Bare-Metal) hypervisors run directly on the host hardware, yielding lower latency and higher security isolation than Type-2 hypervisors.'
  ),
  createQuestion(
    'qn-cl-7',
    'Which cloud service model provides the customer with the highest degree of administrative control, but also places the largest share of host security responsibility on the client?',
    ['Software as a Service (SaaS)', 'Platform as a Service (PaaS)', 'Infrastructure as a Service (IaaS)', 'Function as a Service (FaaS)'],
    2,
    'IaaS provides bare virtual computing nodes, storage, and networks. The user is responsible for managing everything on top, including the OS, middleware, runtimes, and databases.'
  ),
  createQuestion(
    'qn-cl-8',
    'Under the AWS or GCP shared responsibility model for a databases-as-a-service (like RDS or Cloud SQL), what is a clear boundary representing the tenant responsibility?',
    ['Applying physical firewall locks around storage arrays', 'Configuring database access controls (IAM/users), schema permissions, and database credentials', 'Upgrading the physical network routing modules', 'Replacing failed hypervisor server blades'],
    1,
    'The cloud provider manages the underlying operating system and database application updates, while the client maintains database users, access control lists, schema designs, and querying operations.'
  ),
  createQuestion(
    'qn-cl-9',
    'An enterprise maintains local datacenters for highly sensitive intellectual records but leverages elastic public cloud targets for heavy research workloads. This configuration represents what cloud deployment model?',
    ['Community Cloud', 'Private Cloud', 'Hybrid Cloud', 'Symmetric SaaS Cloud'],
    2,
    'A Hybrid Cloud combines distinct on-premises resources (private) with public cloud environments to create a single, unified computing system.'
  ),
  createQuestion(
    'qn-cl-10',
    'What is a primary security hazard when using public cloud environments where different client companies reside on the exact same physical server hardware?',
    ['Inadequate symmetric salt inputs', 'Multi-tenancy isolation failure (VM escaping or side-channel cache attacks)', 'S3 index certificate expiration', 'Automatic CapEx cost shifts'],
    1,
    'Since public cloud computing relies on multi-tenancy, any logical isolation exploit on the virtualization layers or hypervisors (VM escaping) could allow one tenant to spy on or access another tenant\'s RAM.'
  ),
  createQuestion(
    'qn-cl-11',
    'Which cloud technology provides real-time, tamper-resistant API transaction logging, allowing auditors to trace who called which cloud resource and when?',
    ['Infrastructure as Code (IaC) templates', 'Cloud-native audits (e.g., AWS CloudTrail or GCP Cloud Logging)', 'Serverless hypervisor blocks', 'Static host firewalls'],
    1,
    'API auditing services (such as AWS CloudTrail or Google Cloud Logging) record all REST calls made to the cloud controller plane, logging the request identities, IP addresses, and actions.'
  ),
  createQuestion(
    'qn-cl-12',
    'What is "Infrastructure Drift" in the context of cloud operations and Infrastructure as Code?',
    ['Moving servers between different physical cloud regions.', 'When manual, untracked changes are made directly to active resources in the cloud console, making them fall out of sync with the defined IaC state file.', 'Using multiple programming codes inside the same container.', 'Transitioning resources from public back to private datacenters.'],
    1,
    'Infrastructure drift occurs when manual updates bypass the IaC pipeline (untracked modifications to security groups, instances, etc.), leading to discrepancies between the live system and the configurations defined in version control.'
  ),
  createQuestion(
    'qn-cl-13',
    'How does a "cold start" affect serverless functions from a performance perspective?',
    ['It causes permanent database transaction locks.', 'It causes an initial latency spike because the cloud environment must dynamically launch a new container runtime instance to handle the call.', 'It prevents the container from utilizing TLS encryption.', 'It restricts function execution to Bash structures only.'],
    1,
    'A cold start happens when a serverless function is triggered after being idle, requiring the platform runner to boot a container container runtime and load the runtime library, creating a momentary drop in speed.'
  ),
  createQuestion(
    'qn-cl-14',
    'Which security concept dictates that cloud services and system applications should possess only the absolute minimum cloud permissions necessary to function?',
    ['Principle of Least Privilege', 'Unified Role Mapping', 'Stateless Access Governance', 'Multi-tenant CapEx restriction'],
    0,
    'The Principle of Least Privilege (PoLP) ensures that user identities, APIs, and microservices are granted only the minimum system access needed to complete their defined tasks.'
  ),
  createQuestion(
    'qn-cl-15',
    'Which secure hardware component is deployed in cloud infrastructures to perform cryptographic key management, envelope encryption, and key material generation natively?',
    ['Elastic Security Group (ESG)', 'Cloud Hardware Security Module (HSM) / Key Management Service (KMS)', 'Hypervisor isolation wrapper', 'Serverless execution board'],
    1,
    'A Hardware Security Module (HSM) is a dedicated physical microprocessor designed to secure the lifecycle of cryptographic keys. Cloud providers integrate virtualized HSM pipelines inside Key Management Services (KMS).'
  ),
  createQuestion(
    'qn-cl-16',
    'Which cloud security control acts as a stateful firewall, evaluating inbound and outbound traffic at the individual virtual machine instance level?',
    ['Network Access Control List (NACL)', 'Security Group', 'Internet Gateway (IGW)', 'Virtual Private Gateway (VGW)'],
    1,
    'Security Groups are host-level (instance-level) virtual firewalls that run statefully, meaning outbound return traffic is automatically permitted regardless of inbound rules.'
  ),
  createQuestion(
    'qn-cl-17',
    'Contrast the operational scope of Security Groups and Network Access Control Lists (NACLs) in a Cloud VPC.',
    ['NACLs are stateful and apply to instances; Security Groups are stateless and apply to subnets.', 'Security Groups are stateful and evaluate traffic at the instance level; NACLs are stateless and evaluate traffic at the subnet boundary level.', 'Security Groups govern public domains; NACLs handle private addresses.', 'NACLs require physical HSM hardware installation.'],
    1,
    'Security Groups run statefully at the instance boundary, whereas Network Access Control Lists (NACLs) act as a stateless layer of network security at the subnet boundary level.'
  ),
  createQuestion(
    'qn-cl-18',
    'Under which service model does the tenant simply configure authentication, access privileges, and consume pre-coded enterprise services through a web browser with zero responsibility for underlying code or networks?',
    ['IaaS', 'PaaS', 'SaaS', 'Bare-Metal Hypervisors'],
    2,
    'Software as a Service (SaaS) provides fully-realized business logic applications via web access, offloading all platform, host, code, and network security to the hosting vendor.'
  ),
  createQuestion(
    'qn-cl-19',
    'How does edge computing / Content Delivery Networks (CDNs) help mitigate heavy Distributed Denial of Service (DDoS) traffic attacks on an organization\'s cloud application servers?',
    ['By forcing users to re-authenticate with physical MFA tags keypads.', 'By distributing traffic requests globally across edge-cache locations, absorbing flood volumes before they reach the primary server backend nodes.', 'By encrypting all network streams into symmetric block patterns.', 'By converting all server files to static YAML files on fly.'],
    1,
    'CDNs use geographically dispersed edge nodes to cache content and filter malicious requests, absorbing and routing traffic surges away from central compute backends.'
  ),
  createQuestion(
    'qn-cl-20',
    'What concept refers to monitoring the transfer of data out of a private cloud tenant environment into public channels, which could indicate data exfiltration?',
    ['Ingress Traffic analysis', 'Egress Traffic monitoring', 'Hypervisor baseline auditing', 'Multi-tenant CapEx scheduling'],
    1,
    'Egress monitoring analyzes traffic exiting the network boundary, which is essential for capturing and blocking unauthorized sensitive data transfers (data exfiltration).'
  )
];

// ========================================================
// EXAM: PROGRAMMING & CLOUD SECURITY MASTER EXAM (100 Qs)
// ========================================================
export const group5MasterExamQuestions: QuizQuestion[] = [
  createQuestion(
    'em5-1',
    'A development team wants to deploy highly decoupled, portable services that contain all runtime components, libraries, and configurations inside a lightweight wrapper. What is this?',
    ['Type-2 Operating Systems', 'Virtual Machines', 'Containers (e.g. Docker)', 'Bare-Metal Type-1 hypervisors'],
    2,
    'Containers package application code, configurations, and dependencies into a single image that shares the host OS kernel, offering faster start times than full virtual machines.'
  ),
  createQuestion(
    'em5-2',
    'Under the AWS and GCP Shared Responsibility models, which action is ALWAYS the responsiblity of the cloud service provider (CSP)?',
    ['Patching the guest operating systems on virtual nodes', 'Configuring the network security group firewalls', 'Applying physical security, lock systems, and environmental limits inside host datacenters', 'Creating Identity Access Management (IAM) permissions lists'],
    2,
    'Physical data center facility safety, cooling systems, and power backup infrastructures are the sole responsibility of the cloud provider.'
  ),
  createQuestion(
    'em5-3',
    'Which low-level programming language allows developers to perform manual pointer operations and direct memory allocations, but introduces buffer overflow risks if bounds checking is missed?',
    ['Python', 'JavaScript', 'C++', 'Go'],
    2,
    'C++ allows raw memory manipulation and pointer arithmetic without built-in execution bounds checks, exposing programs to stack and heap buffer corruptions.'
  ),
  createQuestion(
    'em5-4',
    'An administrator writes a script containing "Get-WinEvent" lines to automatically audit system logon configurations. Which administrative shell environment is this script designed for?',
    ['UNIX Bash shell', 'Command Prompt (CMD)', 'PowerShell', 'Python interpreter'],
    2,
    'Cmdlets utilizing structured "Verb-Noun" syntax (like Get-Process, Get-WinEvent) are native to PowerShell.'
  ),
  createQuestion(
    'em5-5',
    'What operational cost model does the elastic, automated, resource-provisioned public cloud environment represent for an enterprise?',
    ['Capital Expenditure (CapEx)', 'Operational Expenditure (OpEx)', 'Static Infrastructure Allocations', 'Decoupled Hardware Surcharges'],
    1,
    'Cloud resources are metered and billed on-demand as they are consumed, making them Operational Expenditures (OpEx) that fluctuate with utility.'
  ),
  createQuestion(
    'em5-6',
    'Which regular expression character guarantees that a pattern searching for a password uppercase character must start precisely at the beginning of the text line?',
    ['$', '^', '*', '?'],
    1,
    'The caret "^" character in regular expression configurations anchors the search pattern precisely to the beginning of the evaluated text line.'
  ),
  createQuestion(
    'em5-7',
    'An engineer wants to configure cloud storage buckets to store static host images. What security configuration must be strictly applied on bucket access metrics?',
    ['Permit anonymous read permissions across global users', 'Block public access and enforce authenticated IAM-based bucket policies', 'Deploy Type-2 system hypervisors natively', 'Convert storage targets to serverless FaaS triggers only'],
    1,
    'Blocking public access and enforcing explicit, least-privilege IAM policies, bucket policies, and ACLs is crucial to prevent exposing sensitive files on the internet.'
  ),
  createQuestion(
    'em5-8',
    'What is the principal security benefit of deploying Type-1 Bare-Metal Hypervisors over Type-2 (Hosted) Hypervisors in enterprise private cloud ecosystems?',
    ['They eliminate the requirement for custom VM templates.', 'They run directly on the underlying hardware, removing the middleman host OS, which reduces the attack surface and virtualization overhead.', 'They run inside standard web browser tabs.', 'They operate automatically without processor locks.'],
    1,
    'Type-1 hypervisors do not require a host operating system, which speeds up processing and removes an exploitation vector (host OS compromise).'
  ),
  createQuestion(
    'em5-9',
    'Which Python library provides simple, synchronous HTTP handlers to interact with public APIs, manage authentication cookies, and pass JSON data payloads easily?',
    ['requests', 'urllib2', 'socket', 'scapy'],
    0,
    'The "requests" library is the standard Python package used to execute high-level, human-readable synchronous HTTP methods.'
  ),
  createQuestion(
    'em5-10',
    'Which cloud delivery model removes all server, OS, database, and background infrastructure management, allowing users to simply consume business systems like webmail?',
    ['Infrastructure as a Service (IaaS)', 'Software as a Service (SaaS)', 'Platform as a Service (PaaS)', 'Database as a Service (DBaaS)'],
    1,
    'SaaS delivers complete, user-ready applications over the web, offloading all platform and host maintenance to the cloud vendor.'
  ),
  createQuestion(
    'em5-11',
    'In Go (Golang), what are goroutines and how do they differ from standard operating system threads?',
    ['They are client-side JavaScript workers.', 'They are lightweight, green threads managed by the Go runtime rather than the OS, taking as little as a few kilobytes of memory to handle high concurrency.', 'They are uncompiled scripts running within browser engines.', 'They are hardware-isolated processor blades reserved for VMs.'],
    1,
    'Goroutines are light, user-space threads managed directly by the Go runtime scheduler, enabling massive concurrency with minimal overhead.'
  ),
  createQuestion(
    'em5-12',
    'A system administrator wants to automatically monitor a Windows directory for file modification events and output alert emails. Which environment is most appropriate?',
    ['Standard Bash shell', 'PowerShell script with FileSystemWatcher', 'C++ compiler compiler', 'JSON config mapping'],
    1,
    'PowerShell can monitor local file events natively via the .NET API class [System.IO.FileSystemWatcher], making it ideal for Windows administration.'
  ),
  createQuestion(
    'em5-13',
    'How does a stateless Network Access Control List (NACL) handle return traffic from a web page query in a VPC subnet?',
    ['It automatically permits the return flow because it tracks state tables.', 'It evaluates outbound traffic against separate, explicit egress rules; if no matching rule allows return traffic, it is blocked.', 'It redirects return packets through a Type-1 hypervisor.', 'It scrambles the packet header using symmetric salts.'],
    1,
    'Because NACLs are stateless, they do not track configuration connections. To allow full query communication loops, matching rules must be explicitly defined in both inbound and outbound tables.'
  ),
  createQuestion(
    'em5-14',
    'Which design concept ensures that if a serverless application component (like a payment endpoint) crashes, other functions continue to execute without disruption?',
    ['Tightly-coupled monolithic architectures', 'Server orchestration arrays', 'Decoupled, microservices-based architectures', 'Type-2 hosted baseline virtualization'],
    2,
    'Decoupled microservice architectures isolate different application capabilities, preventing a crash in one utility from taking down the entire system.'
  ),
  createQuestion(
    'em5-15',
    'A security engineer is performing a static code analysis on a C++ program. They discover a call to "strcpy()" which takes user inputs without validation. What issue does this represent?',
    ['Unsecured deserialization mapping', 'Buffer Overflow vulnerability due to copying input without verifying buffer bounds', 'Insecure direct object reference', 'Memory leaks in background daemons'],
    1,
    'The standard library function "strcpy()" does not check bounds before copying data, which can overflow buffers if the input is larger than the destination array.'
  ),
  createQuestion(
    'em5-16',
    'What occurs during a serverless function "cold start"?',
    ['The physical server hosting the cloud environment reboots.', 'The platform experiences latency because it must boot a new container instance and load runtime code to process a request after being idle.', 'All active sessions are logged out due to certificate expiration.', 'The function execution is permanently locked into low-level C++ instructions.'],
    1,
    'If a serverless function is inactive, its containers are scaled down. When a new trigger arrives, the platform must provision a new container container, causing a brief start latency.'
  ),
  createQuestion(
    'em5-17',
    'Under the IaaS cloud deployment model, which configuration is the sole responsibility of the tenant customer?',
    ['Symmetric hardware router firmware safety', 'Physical security of storage cages inside the datacenter', 'Installing, configuring, patching, and maintaining the guest Operating System and applications', 'Hypervisor layer resource assignment'],
    2,
    'IaaS provides only fundamental compute, storage, and networking layers. The tenant is responsible for everything installed on top, including the OS.'
  ),
  createQuestion(
    'em5-18',
    'Which UNIX-like text processing utility is optimized first for reading data line-by-line, splitting inputs into columns based on a delimiter, and running arithmetic calculations?',
    ['grep', 'awk', 'sed', 'nano'],
    1,
    'Awk is an extremely powerful text-processing language built to parse structured, delimited columnar logs and data lines efficiently.'
  ),
  createQuestion(
    'em5-19',
    'An enterprise wants to deploy an application in the cloud that dynamically provisions more virtual machine nodes as traffic increases, and tears them down as demand drops. What is this?',
    ['Bare-metal processing virtualization', 'Elastic Auto-Scaling', 'Infrastructure as Code drift', 'Type-2 hypervisor balancing'],
    1,
    'Auto-scaling engines monitor load and dynamically adjusts compute resources, optimizing capacity and costs.'
  ),
  createQuestion(
    'em5-20',
    'What describes the primary operational risk associated with "Infrastructure as Code drift"?',
    ['It alters compiler binaries in static systems.', 'Live environment resources contain manual security configurations that fall out of sync with version-controlled code configurations, leading to untracked security holes.', 'It forces serverless platforms to trigger cold starts.', 'It migrates VMs from private to public tenancy.'],
    1,
    'Drift happens when manual changes are made in the cloud console. These changes are not reflected in version control, which can lead to compliance violations and security risks.'
  ),
  createQuestion(
    'em5-21',
    'Which Node.js design pattern is the standard way to export custom module functions so they can be consumed by other application files via CommonJS?',
    ['export default class', 'module.exports = { functionName }', 'import * as module', 'sys.export(functionName)'],
    1,
    'CommonJS uses "module.exports" or "exports.name" to export modules, which are then loaded in other files using the "require()" statement.'
  ),
  createQuestion(
    'em5-22',
    'Under the Platform as a Service (PaaS) model, which component is managed and secured strictly by the Cloud Service Provider?',
    ['The custom database schemas configured inside tables', 'The application source codes uploaded by tenant workers', 'The underlying operating system, platform runtimes, and middleware servers', 'The client access tokens and users permissions'],
    2,
    'Under PaaS, the provider handles everything from the physical level up to the operating system and execution environment runtimes.'
  ),
  createQuestion(
    'em5-23',
    'Why is it critical to configure multi-factor authentication (MFA) on the root organizational accounts in a cloud environment?',
    ['It reduces cold start latencies.', 'It defends against credentials compromise on the account holding administrative control over all enterprise resources.', 'It compiles low-level C++ instructions faster.', 'It disables the need for subnet Network ACLs.'],
    1,
    'Because cloud controllers are managed via API web endpoints, compromising administrative root credentials gives attackers total control to delete, steal, or hijack all computing assets.'
  ),
  createQuestion(
    'em5-24',
    'In Python scripting, which built-in function returns a list of all valid properties, functions, and active methods available inside an imported module object?',
    ['type()', 'help()', 'dir()', 'properties()'],
    2,
    'The "dir()" built-in function is incredibly useful for security scripting, returning the defined attributes and methods of any provided module or variable.'
  ),
  createQuestion(
    'em5-25',
    'An operations team wants to ensure that internal development environments completely match live production networks. Which deployment mechanism enforces identical environmental configurations?',
    ['Manual hypervisor routing tweaks', 'Developing Infrastructure as Code (IaC) templates verified through CI/CD pipelines', 'Running continuous background container thread loops', 'Upgrading of all internal nodes to C++ templates'],
    1,
    'IaC templates enable repeatable, automated infrastructure configurations, ensuring consistency across development, testing, and production environments.'
  ),
  createQuestion(
    'em5-26',
    'Which statement is false regarding Python\'s "lists" and "tuples" data structures?',
    ['Lists are mutable and can be modified after creation.', 'Tuples are immutable; their values cannot be changed or reallocated once defined.', 'Tuples are declared using brackets [ ], while lists are declared using parentheses ( ).', 'Tuples are faster and consume less memory than lists.'],
    2,
    'This statement is reversed. Lists are declared using square brackets "[ ]" (e.g. `my_list = [1, 2]`), while tuples are declared using parentheses "( )" (e.g. `my_tuple = (1, 2)`).'
  ),
  createQuestion(
    'em5-27',
    'In a Cloud VPC, what is the role of an Internet Gateway (IGW)?',
    ['It encrypts VPC database backups statefully.', 'It acts as a target inside route tables to connect VPC instances directly with the public internet.', 'It blocks multi-tenant VM escaping.', 'It translates C++ instructions to virtualized YAML files.'],
    1,
    'An Internet Gateway handles public-private address translations (NAT) and enables communication between VPC instances in public subnets and the internet.'
  ),
  createQuestion(
    'em5-28',
    'Which Bash scripting control loop will loop continuously as long as a specified condition evaluates to "false" (or exits with non-zero status)?',
    ['while loop', 'until loop', 'for loop', 'case select loop'],
    1,
    'The "until" loop in Bash runs instructions as long as its condition evaluates to false, completing execution as soon as the condition becomes true.'
  ),
  createQuestion(
    'em5-29',
    'Which cloud storage tier is designed specifically to store archived, rarely-accessed audit compliance logs at a significantly lower cost, but has long retrieval times?',
    ['Hot Storage level', 'Cold / Archive Disk Storage (e.g., AWS S3 Glacier)', 'Dynamic local virtual block disk', 'Ephemeral Memory Buffer'],
    1,
    'Cold and archival storage classes (like Glacier) offer very inexpensive bulk storage, but retrieval can take minutes to hours.'
  ),
  createQuestion(
    'em5-30',
    'What mathematical problem are "memory leaks" in software darmons most likely to resolve to over time?',
    ['Complete disclosure of system keys to hackers', 'A localized Denial of Service (DoS) caused by exhaustion of host physical RAM', 'Symmetric collision patterns across databases', 'Direct bypass of user MFA verification matrices'],
    1,
    'Memory leaks consume RAM without freeing it. If left running, the host eventually runs out of system memory, causing services to crash.'
  ),
  createQuestion(
    'em5-31',
    'A malware analyst is auditing a piece of compiled software. They run the UNIX utility "strings". What is the goal of this utility?',
    ['To encrypt the software\'s executable files.', 'To extract and display printable character sequences from binary files, helping identify hardcoded URLs or passwords.', 'To compile source code into statically-linked binaries.', 'To inject custom shellcode into running processes.'],
    1,
    'The "strings" utility displays printable UTF-8/plain characters in binary files, helping gather information from potential malware or executables.'
  ),
  createQuestion(
    'em5-32',
    'Which cloud networking security component behaves statefully, meaning that if you allow an incoming SSH query, return packet flows are instantly validated?',
    ['Network Access Control List (NACL)', 'Security Group', 'Subnet routing router table', 'Internet Gateway (IGW)'],
    1,
    'Security Groups are stateful virtual firewalls. They track connections and automatically allow return traffic, regardless of inbound rules.'
  ),
  createQuestion(
    'em5-33',
    'In Python regular expression operations (the "re" module), what does the pattern "re.findall()" return if multiple matches exist?',
    ['A single string containing the first match found.', 'An array (list) containing all non-overlapping matches of the pattern within the string.', 'A boolean indicating true or false.', 'The line index position number.'],
    1,
    'The function "re.findall()" scans the input string and returns a list of all matching patterns found.'
  ),
  createQuestion(
    'em5-34',
    'Which cloud billing strategy ensures that companies only pay for the exact processor time, storage, and networking consumed?',
    ['Capital Upfront Allocation', 'Metered Utility Cost Billing / Pay-as-you-go', 'Enterprise Fixed Subscription', 'Hypervisor Level CapEx Allocation'],
    1,
    'Pay-as-you-go models in the cloud charge organizations strictly for the resources they provision and run, aligning costs with actual usage.'
  ),
  createQuestion(
    'em5-35',
    'In C++, which keyword is used to deallocate memory that was previously allocated dynamically on the heap using the "new" operator?',
    ['free', 'delete', 'release', 'destruct'],
    1,
    'In C++, heap memory allocated via "new" must be deallocated using the "delete" operator (or `delete[]` for arrays) to prevent memory memory leaks.'
  ),
  createQuestion(
    'em5-36',
    'What is a primary danger of utilizing unvalidated user inputs directly inside shell scripting commands like "os.system()" in Python, or backticks in Bash?',
    ['Memory pointer leaks', 'Command Injection, enabling attackers to execute arbitrary shell commands on the server', 'Symmetric hash integrity collisions', 'Direct invalidation of cloud S3 policies'],
    1,
    'Passing raw user inputs to shell commands can expose applications to Command Injection, allowing attackers to run unauthorized commands with the process\'s privileges.'
  ),
  createQuestion(
    'em5-37',
    'Which deployment design manages and updates a shared catalog of pre-configured virtual machine templates to ensure server operating systems are boot-hardened?',
    ['Statically compiled Go libraries', 'Golden Images / Custom Machine Images', 'Hypervisor container orchestration', 'S3 storage buckets'],
    1,
    'Using base templates ("Golden Images") ensures that all new virtual machine nodes start with a standard, pre-hardened operating system configuration.'
  ),
  createQuestion(
    'em5-38',
    'How does Python handle memory management and avoid memory leaks for variables that are no longer accessible or needed by a program?',
    ['It requires manual deletion of pointers.', 'Through an automatic garbage collection engine that tracks reference counts and reclaims unused memory.', 'By compiling lists directly to static binaries.', 'By routing variables through Cloud KMS pipelines.'],
    1,
    'Python manages memory automatically using reference counting and a garbage collector, which reclaims memory from objects that are no longer referenced.'
  ),
  createQuestion(
    'em5-39',
    'In cloud environments, what is the concept of standard "Object Storage" and how does it differ from traditional "Block Storage"?',
    ['Block storage acts as static system YAML files; Object stores hold C++ functions.', 'Object Storage treats data as discrete units stored with metadata and unique identifiers, whereas Block Storage divides files into raw sector structures directly accessible as a virtual hard drive.', 'Object Storage requires bare-metal hypervisor integration.', 'Block storage is completely public; Object storage blocks all access automatically.'],
    1,
    'Object Storage (like AWS S3) accesses files as discrete units via APIs with rich metadata, while Block Storage (like AWS EBS) behaves like a raw, partitioned virtual hard drive mounted to virtual machines.'
  ),
  createQuestion(
    'em5-40',
    'What does the "shebang" line (e.g., "#!/usr/bin/env python3") at the start of a UNIX text script declare to the operating system?',
    ['It is a signature flag indicating malware obfuscation.', 'It specifies the exact interpreter path the OS should use to process and execute the file\'s contents.', 'It converts the script into a compiled C++ binary layout.', 'It establishes connection handshakes on local network ports.'],
    1,
    'The "shebang" line tells the system loader which interpreter to run (e.g., Python or Bash) to process the rest of the script.'
  ),
  createQuestion(
    'em5-41',
    'Which Cloud Security concept dictates creating virtual subnets that cannot communicate with each other directly except through designated security proxies?',
    ['CapEx resource consolidation', 'Micro-segmentation / VPC Subnet Isolation', 'Multi-tenant hypervisor clustering', 'Serverless execution buffering'],
    1,
    'Micro-segmentation splits a cloud network into isolated subnets, limiting lateral movement (lateral traversal) if an attacker compromises a host.'
  ),
  createQuestion(
    'em5-42',
    'Which PowerShell execution policy allows you to run local, custom-written scripts, but requires all scripts downloaded from the internet to be signed by a trusted publisher?',
    ['Restricted', 'AllSigned', 'RemoteSigned', 'Unrestricted'],
    2,
    'The "RemoteSigned" execution policy allows locally created scripts to run without signatures, while requiring downloaded scripts to be signed by a trusted publisher.'
  ),
  createQuestion(
    'qn-em5-43',
    'What is the security implication of hardcoding long-lived cloud API access keys directly within software script code repository volumes?',
    ['It increases Cold Start times.', 'If the code volume is exposed or leaked (e.g. to public repositories), attackers can extract the keys and run unauthorized commands inside the cloud environment.', 'It enforces Type-1 hypervisor security controls.', 'It converts C++ pointer operations to Python formats.'],
    1,
    'Hardcoding credentials in source code exposes keys to unauthorized eyes; secrets should instead be managed using dedicated environment variables or secret vaults (like AWS Secrets Manager).'
  ),
  createQuestion(
    'qn-em5-44',
    'Which data transmission format represents keys and values as human-readable text blocks, widely used in cloud API queries and server logs?',
    ['Symmetric binary block format', 'JSON (JavaScript Object Notation)', 'C++ pointer matrices', 'YAML raw stream assemblies'],
    1,
    'JSON is a lightweight, human-readable data-interchange format structured as "key-value" pairs or arrays, which is widely used in API communication.'
  ),
  createQuestion(
    'qn-em5-45',
    'In Python scripting, which regular expression operator matches any single character except a newline?',
    ['Asterisk (*)', 'Dot (.)', 'Question Mark (?)', 'Backslash (\\)'],
    1,
    'In regular expressions, the dot "." matches any character except a newline.'
  ),
  createQuestion(
    'qn-em5-46',
    'Under the AWS and GCP shared responsibility models, who is responsible for configuring virtualization platform hypervisor security shields?',
    ['The tenant database design engineer', 'The Cloud Service Provider (CSP)', 'The end-user client client', 'The network compliance auditor'],
    1,
    'The cloud provider manages the physical infrastructure and virtualization layers, including hypervisors and host environments.'
  ),
  createQuestion(
    'qn-em5-47',
    'Which Bash scripting syntax safely evaluates if a string variable is completely empty or has zero length?',
    ['if [ -z "$VAR" ]', 'if [ -e "$VAR" ]', 'if [[ -n "$VAR" ]]', 'if [ $VAR == NULL ]'],
    0,
    'In Bash, the "-z" operator returns true if the string variable is empty or has zero length.'
  ),
  createQuestion(
    'qn-em5-48',
    'Which cloud design pattern allows systems to handle traffic spikes smoothly by adding more instances of virtual machines, rather than upgrading the processor sizing of a single server?',
    ['Vertical Scaling (Scale-Up)', 'Horizontal Scaling (Scale-Out)', 'Serverless Cold-Starting', 'Bare-metal virtualization clustering'],
    1,
    'Horizontal scaling adds more instances (virtual machines, containers) to share the load, offering higher elastic resilience and uptime than vertical scaling.'
  ),
  createQuestion(
    'qn-em5-49',
    'In Go programming, how do channels function alongside goroutines to ensure thread safety?',
    ['They encrypt variables internally using AES-256 blocks.', 'They provide a safe mechanism for goroutines to communicate, share data, and synchronize execution without using manual lock pools.', 'They compile system instructions to static binary maps.', 'They disable hypervisor routing limits.'],
    1,
    'Channels in Go act as conduits that allow concurrent goroutines to safely exchange data, avoiding race conditions and complex mutex locking.'
  ),
  createQuestion(
    'qn-em5-50',
    'Which cloud storage component represents a mountable, virtual file system accessible by multiple virtual machine nodes simultaneously over network ports?',
    ['Object Storage (Amazon S3)', 'Elastic Block Storage (EBS)', 'Network File System (NFS) / Elastic File System (EFS)', 'Local memory cache buffers'],
    2,
    'Network/Elastic file stores (like AWS EFS) allow multiple hosts to mount and access the same filesystem concurrently, unlike EBS which generally attaches to one instance.'
  ),
  createQuestion(
    'qn-em5-51',
    'A cybersecurity engineer discovers a "race condition" in a multi-threaded application. What does this vulnerability represent?',
    ['A network packet collision on network trunks.', 'A flaw where the program\'s behavior depends on the order or timing of execution processes, which can allow attackers to bypass security checks.', 'A buffer overflow that overwrites memory registers.', 'A memory leak that slowly degrades system performance.'],
    1,
    'A race condition happens when multiple threads access shared resources concurrently without proper synchronization, enabling attackers to exploit timing windows.'
  ),
  createQuestion(
    'qn-em5-52',
    'Which programmatic parameter is commonly passed inside HTTP headers to authorize clients communicating with private REST API endpoints?',
    ['Symmetric salt inputs', 'API Key or Bearer Token', 'Type-1 certificate keys', 'C++ memory variables'],
    1,
    'Bearer tokens or unique API Keys included in the "Authorization" header verify the caller\'s identity, securing access to REST endpoints.'
  ),
  createQuestion(
    'qn-em5-53',
    'Under the SaaS model of an enterprise customer relationship system, what is the role of the tenant\'s security team?',
    ['Configuring guest operating system firewalls', 'Applying security updates to code runtimes', 'Managing user identities, access privileges, and enforcement of multi-factor authentication (MFA)', 'Auditing hypervisor virtualization blades'],
    2,
    'SaaS offloads all backend, platform, and infrastructure security to the supplier; the client focuses purely on user access, configurations, and data classifications.'
  ),
  createQuestion(
    'qn-em5-54',
    'In Python regular expression operations, which quantifer matches zero or one occurrences of the preceding element within search text?',
    ['Pluss token (+)', 'Asterisk (*)', 'Question Mark (?)', 'Brace parameter ({ })'],
    2,
    'The question mark "?" specifies that the preceding character or group should match zero or one times (making it optional).'
  ),
  createQuestion(
    'qn-em5-55',
    'What describes the primary operational security risk of utilizing community "Infrastructure as Code" templates from untrusted third parties?',
    ['They trigger cold-starts on local machines.', 'They can contain security misconfigurations, default accounts, or open ports, exposing infrastructure on boot.', 'They compile code into un-interpretable binary code.', 'They degrade local CPU processing speeds.'],
    1,
    'Third-party configurations may contain misconfigurations (like wide-open ports or default passwords) that expose newly booted infrastructure to attacks.'
  ),
  createQuestion(
    'qn-em5-56',
    'In a Bash script, what is the purpose of the directive "set -e" at the start of the file?',
    ['Enables debug output.', 'Instructs the script to exit immediately if any command exits with a non-zero (error) status.', 'Encrypts variables in memory.', 'Routes error logging to standard port 80.'],
    1,
    '"set -e" tells the shell to abort script execution if any step fails, preventing execution from continuing with broken dependencies.'
  ),
  createQuestion(
    'qn-em5-57',
    'Which cloud virtual hardware configuration is designed to forward internet traffic into subnets designated as "private", without allowing external networks to talk back to those nodes directly?',
    ['Internet Gateway (IGW)', 'Network Address Translation (NAT) Gateway', 'Elastic virtual block drive', 'Type-1 bare hypervisors'],
    1,
    'A NAT Gateway lets hosts in private subnets reach the internet for patches, while blocking direct connections from the public internet.'
  ),
  createQuestion(
    'qn-em5-58',
    'Which JavaScript built-in function parses string inputs formatted as JSON into key-value data object structures?',
    ['JSON.stringify()', 'JSON.parse()', 'String.toObject()', 'Object.parseJSON()'],
    1,
    'The method "JSON.parse()" converts a well-formed JSON string into a structured JavaScript object.'
  ),
  createQuestion(
    'qn-em5-59',
    'In high-security cloud multi-tenant architectures, how does "micro-segmentation" limit an attacker\'s primary path after they compromise a virtual machine?',
    ['It closes standard internet gateways globally.', 'It prevents lateral movement within the network by isolating individual hosts and subnets from communicating directly.', 'It speeds up serverless cold starting.', 'It randomizes C++ heap pointers automatically.'],
    1,
    'Micro-segmentation restricts internal network traffic. If one VM is compromised, the attacker cannot pivot to other resources because communication is blocked by default.'
  ),
  createQuestion(
    'qn-em5-60',
    'What is the security hazard of having of active "Use After Free" (UAF) vulnerabilities in system kernels compiled in C++?',
    ['It leads to public directory traversal alerts.', 'It allows attackers to reuse the memory address of a cleared object, letting them execute arbitrary shellcode or escalate privileges.', 'It invalidates database KMS encryption keys.', 'It causes immediate multi-tenant hardware crashes.'],
    1,
    'Use-After-Free (UAF) is a memory corruption vulnerability that allows attackers to manipulate a program after heap memory is freed, potentially leading to shellcode execution.'
  ),
  createQuestion(
    'qn-em5-61',
    'A defensive script extracts failed usernames from a log file. To secure output inputs, which command filters out duplicate user entries?',
    ['grep failed auth.log', 'uniq (after running sort on lines)', 'sed s/duplicate//', 'wc -l auth.log'],
    1,
    'The "uniq" command filters duplicate adjacent lines. It is typically combined in a pipeline after sorting the inputs (`sort | uniq`).'
  ),
  createQuestion(
    'qn-em5-62',
    'Which cloud platform service manages virtual machine instances, handles automatic deployment, and provisions storage targets natively?',
    ['IaaS compute engines (e.g., AWS EC2 or GCP Compute Engine)', 'SaaS workspace apps', 'Bare-metal Type-2 hypervisors', 'Docker container runners'],
    0,
    'Compute-as-a-service platforms provide complete on-demand virtual machine nodes, giving customers access to scale up OS instances.'
  ),
  createQuestion(
    'qn-em5-63',
    'A security script uses standard regex operators to inspect customer phone inputs. Which regex block matches exactly three sequential digits?',
    ['\\d{3}', '\\d*', '[0-9]+', '\\d{1,3}'],
    0,
    'The curly braces `{3}` specify that the preceding character match (in this case, `\\d`, representing any digit) must occur exactly three times.'
  ),
  createQuestion(
    'qn-em5-64',
    'What does "Serverless Computing" mean regarding the physical existence of hardware servers in the cloud infrastructure?',
    ['The client does not require an active physical connection to hosts.', 'The cloud platform provider abstracts the underlying host servers, provisioning and scaling compute runtimes dynamically on-demand.', 'The environment runs entirely inside static local files.', 'Hardware servers are completely bypassed by compiling code into hardware structures.'],
    1,
    'In serverless architectures, physical hosts still exist, but they are managed and scaled by the provider, removing OS management for the developer.'
  ),
  createQuestion(
    'qn-em5-65',
    'Which Python standard module exposes functions to print current command-line inputs passed when launching a script file?',
    ['os', 'sys (via sys.argv)', 'subprocess', 'json'],
    1,
    'The "sys.argv" list in the "sys" module stores command-line arguments passed when launching a Python script.'
  ),
  createQuestion(
    'qn-em5-66',
    'Which cloud storage component represents a dedicated, non-volatile virtual drive mapped to a single virtual machine instance, functioning like a physical SSD?',
    ['Object Storage', 'SaaS Storage Registry', 'Block Storage (e.g., AWS EBS or GCP Persistent Disk)', 'Ephemeral ram cache'],
    2,
    'Block storage volumes provide low-latency virtual storage disks that can be mounted directly to single compute instances.'
  ),
  createQuestion(
    'qn-em5-67',
    'Contrast static "Imperative" IaC with "Declarative" IaC deployments.',
    ['Imperative defines target states; Declarative lists step-by-step shell instructions.', 'Declarative defines the desired final state of the infrastructure and lets the tool figure out how to build it; Imperative scripts are step-by-step procedures to build resources.', 'Declarative only operates inside local private files.', 'Imperative utilizes C++ modules; Declarative runs using Python.'],
    1,
    'Declarative IaC (like Terraform) defines the target end-state, whereas Imperative IaC (like Bash scripts or AWS CLI) lists the sequential commands to construct the platform.'
  ),
  createQuestion(
    'qn-em5-68',
    'Which regular expression quantifer represents matching the preceding token one or more times within the analyzed string?',
    ['Asterisk (*)', 'Plus sign (+)', 'Question Mark (?)', 'Brace quantifer ({0,1})'],
    1,
    'The plus '+' quantifer matches the preceding token one or more times, requiring at least physical instance.'
  ),
  createQuestion(
    'qn-em5-69',
    'In PowerShell scripting, what built-in variable tracks the success or failure status of the last executed cmdlet?',
    ['$Status', '$?', '$LastExitCode', '$_'],
    1,
    'The automatic variable "$?" evaluates to "True" if the last command executed successfully, and "False" if it failed.'
  ),
  createQuestion(
    'qn-em5-70',
    'Under the AWS or GCP Shared Responsibility models, when a database engine runs as part of IaaS virtual machines, who patches issues with database engines?',
    ['The Cloud Service Provider (CSP)', 'The end-user database host', 'The tenant administrative team', 'The database system vendor'],
    2,
    'Because the operating system and apps run on top of an IaaS VM, patching the database software and operating system remains the customer\'s responsibility.'
  ),
  createQuestion(
    'qn-em5-71',
    'Which language compiles down to statically-compiled structures, manages dependencies natively, and provides fast concurrency support via goroutines?',
    ['Python', 'Go (Golang)', 'Bash Scripting', 'C++ memory variables'],
    1,
    'Go (Golang) is built for highly portable, high-concurrency systems, compiling source code into efficient single static executables.'
  ),
  createQuestion(
    'qn-em5-72',
    'What describes the primary difference between public cloud environments and private cloud environments regarding hardware tenancy?',
    ['Public clouds allow raw VM escape exploits; Private clouds prevent them natively.', 'Public clouds host resources from multiple companies on shared physical infrastructure; Private clouds restrict hardware tenancy to a single company.', 'Private clouds operate with metered OpEx models.', 'Public clouds run using Type-1 hypervisors only.'],
    1,
    'Public clouds share physical infrastructure across multiple organizations (multi-tenancy), while Private clouds restrict access to a single organization.'
  ),
  createQuestion(
    'qn-em5-73',
    'Which Python module executes system commands in shell environments, captures screen output, and retrieves process exit codes?',
    ['os.path', 'sys.argv', 'subprocess', 'requests'],
    2,
    'The "subprocess" module is designed to execute system commands, spawn child processes, and capture stdout/stderr streams cleanly.'
  ),
  createQuestion(
    'qn-em5-74',
    'Under PaaS models, how is access authentication to applications managed and secured?',
    ['Determined and maintained by the platform hosting vendor.', 'Managed and secured strictly by the customer, utilizing custom user schemas and access management.', 'Wiped automatically after every cold-start.', 'Enforced via physical datacenter guards.'],
    1,
    'PaaS manages the underlying infrastructure and OS, but identity, access rules, and configurations remain the responsibility of the customer.'
  ),
  createQuestion(
    'qn-em5-75',
    'An operations team runs a script that outputs "drift detected". What does this alert indicate?',
    ['Server virtual machine nodes are moving geographically.', 'The actual active configuration of cloud assets has fallen out of sync with version-controlled IaC templates.', 'S3 file buckets are experiencing high latency.', 'A Type-2 hypervisor is escaping into Type-1.'],
    1,
    'Infrastructure drift shows a misalignment between the live cloud state and version-controlled Infrastructure as Code (IaC) configuration files.'
  ),
  createQuestion(
    'qn-em5-76',
    'In Python regular expression operations, how do you match any digit (equivalent to the class `[0-9]`) using a shortcut string?',
    ['\\w', '\\s', '\\d', '\\D'],
    2,
    'The escape shortcut `\\d` represents any digit from 0 to 9.'
  ),
  createQuestion(
    'qn-em5-77',
    'Explain the concept of Cloud IAM "Roles".',
    ['Explicit accounts assigned to database system administrators.', 'Abstract identities with specific permission sets that can be assumed by users, services, or virtual machines to query resources without using static access keys.', 'Symmetric keys stored in cloud HSM layers.', 'Script blocks written in declarative YAML files.'],
    1,
    'IAM Roles allow users, APIs, or systems to assume dynamic, temporary permissions, eliminating the need to store long-lived credentials.'
  ),
  createQuestion(
    'qn-em5-78',
    'Which PowerShell cmdlet checks if a remote network port is open or reachable on a target server host?',
    ['Ping-Server -Port 80', 'Test-NetConnection -Port 80', 'Check-Host -Port 80', 'Show-NetPort -Target 80'],
    1,
    'The "Test-NetConnection" cmdlet is a versatile tool used in Windows terminal scripts to analyze network properties, check UDP/TCP ports, and trace routes.'
  ),
  createQuestion(
    'qn-em5-79',
    'In a Cloud VPC subnet structure, what does a "Route Table" manage?',
    ['It calculates dynamic multi-tenant costs.', 'It directs outgoing network traffic from subnets to target hosts, gateways, or networks based on IP destinations.', 'It boots serverless container runners statefully.', 'It stores KMS database credentials.'],
    1,
    'Route tables contain routing rules that determine where network traffic from subnets or gateways is forwarded.'
  ),
  createQuestion(
    'qn-em5-80',
    'An engineer wants to write a Python script that decodes a JSON payload returned from an API command. Which conversion function should they use?',
    ['json.dumps()', 'json.loads()', 'json.parse()', 'json.decode()'],
    1,
    'The function "json.loads()" parses a raw JSON-formatted string and converts it into a Python data structure (dictionary).'
  ),
  createQuestion(
    'qn-em5-81',
    'What describes a primary risk of utilizing Type-2 (Hosted) Hypervisors in high-security enterprise server rooms?',
    ['They require bare-metal storage blades.', 'They run on top of a primary commercial operating system, meaning if the host OS is compromised, all guest virtual machines are also compromised.', 'They do not support network security groups.', 'They generate high cold-start latencies on boot.'],
    1,
    'Type-2 hypervisors rely on host operating systems. If an attacker compromises the underlying host OS, they gain control of all nested VMs.'
  ),
  createQuestion(
    'qn-em5-82',
    'Which regular expression quantifer matches the preceding token exactly zero times, or zero or more times, representing the search as optional?',
    ['Plus (+)', 'Asterisk (*)', 'Question Mark (?)', 'Braces bounds ({0})'],
    1,
    'The asterisk \'*\' quantifer matches the preceding token zero or more times.'
  ),
  createQuestion(
    'qn-em5-83',
    'Under the SaaS model of an online accounting software, who is responsible for backing up the system software data volume?',
    ['The SaaS Host Client developer', 'The Cloud Service Provider (SaaS Vendor)', 'The IT service desk of the tenant workspace', 'The third-party network compliance auditor'],
    1,
    'In SaaS, the host vendor is responsible for backing up the application databases, ensuring service availability.'
  ),
  createQuestion(
    'qn-em5-84',
    'A DevOps engineer wants to ensure that no developer can deploy an on-demand container that lacks a valid TLS port. Which pipeline strategy applies this validation?',
    ['Applying strict linting and structural validation of IaC templates before deployment', 'Allowing unauthenticated root access to public channels', 'Running un-containerized processes on host VMs', 'Using Python requests to edit active networks'],
    0,
    'Integrating automated IaC linters and security checks within CI/CD pipelines ensures secure configuration standards are met before deployment.'
  ),
  createQuestion(
    'qn-em5-85',
    'In C++, why is utilizing raw pointer operations considered historically dangerous compared to dynamic languages like JavaScript or Python?',
    ['C++ variables are processed slower than scripting languages.', 'Raw pointer operations lack runtime memory bounds checking, exposing programs to memory corruption vulnerabilities.', 'They cannot connect to cloud KMS platforms.', 'They force the compiler to require manual execution logs.'],
    1,
    'C++ lacks built-in garbage collection or automatic safety shields for pointers, making memory accessible to exploitation if pointers are not handled carefully.'
  ),
  createQuestion(
    'qn-em5-86',
    'Which file location contains configuration parameter files used by Bash to establish environment setups upon user login?',
    ['/etc/system.d', '/var/log/auth.log', '~/.bashrc or ~/.bash_profile', '/etc/hosts.config'],
    2,
    'The configuration files `.bashrc` and `.bash_profile` in user home directories define environment variables, paths, and aliases run at login.'
  ),
  createQuestion(
    'qn-em5-87',
    'Which regular expression wildcard represents matching any space, tab, or carriage return characters within analyzed blocks?',
    ['\\w', '\\s', '\\d', '\\S'],
    1,
    'The shortcut escape sequence `\\s` matches any whitespace character (spaces, tabs, newlines).'
  ),
  createQuestion(
    'qn-em5-88',
    'An engineer wants to configure a secure cloud-native application database. Under PaaS responsibility, how is database encryption managed?',
    ['The platform hosting provider maintains underlying KMS keys, while the tenant configures database encryption requirements within their schema.', 'The customer must physically provision and patch physical storage cabinets.', 'All data must be stored plaintext.', 'The OS kernel must be manually updated by the tenant.'],
    0,
    'In PaaS databases, the cloud provider manages the encryption infrastructure (HSM/KMS), while the client turns on and configures encryption variables within schemas.'
  ),
  createQuestion(
    'qn-em5-89',
    'Which JavaScript keyword structure is used to handle Promise failures gracefully within an code module block?',
    ['try...catch', 'async...await', 'if...then', 'throw default'],
    0,
    'In JavaScript, async routines wrap operations in "try...catch" blocks to intercept and handle rejected actions gracefully.'
  ),
  createQuestion(
    'qn-em5-90',
    'A security auditor runs a tool that parses S3 bucket metadata and alerts that some indexes have wide-open read/write permissions. How is this risk classified?',
    ['Hypervisor escaping bypass', 'Cloud storage misconfiguration, which can lead to data leaks', 'Infrastructure drift latency error', 'Serverless cold-start collision'],
    1,
    'Exposing object storage buckets publicly is a major cloud security risk, often leading to unauthorized data access and data leaks.'
  ),
  createQuestion(
    'qn-em5-91',
    'In Python regular expression tasks, which shortcut pattern matches any alphanumeric word character (letters, numbers, underscores)?',
    ['\\d', '\\s', '\\w', '\\W'],
    2,
    'The escape shortcut `\\w` matches any alphanumeric character (equivalent to `[a-zA-Z0-9_]`).'
  ),
  createQuestion(
    'qn-em5-92',
    'Under the AWS or GCP shared responsibility model, who compiles the physical hardware virtualization reports of private nodes?',
    ['The end-user administrative workstation', 'The Cloud Service Provider (CSP)', 'The cloud tenant compliance auditor', 'The network routing provider'],
    1,
    'Since the cloud provider physically owns and controls the host hardware, they generate the compliance reports for those levels.'
  ),
  createQuestion(
    'qn-em5-93',
    'Which UNIX-like text processing utility is optimized to perform stream replacements and search-and-replace transformations using regular expressions?',
    ['grep', 'sed', 'awk', 'nano'],
    1,
    'The "sed" (Stream Editor) utility is optimized for scanning text streams and performing patterned replacements on-the-fly.'
  ),
  createQuestion(
    'qn-em5-94',
    'What describes a "Race Condition" in software development, and what is its primary security hazard?',
    ['A network latency bottleneck on symmetric data segments.', 'A vulnerability where the program\'s behavior depends on execution timing, which can allow attackers to bypass security checks.', 'A buffer overflow that overwrites memory registers.', 'A memory leak that slowly degrades system performance.'],
    1,
    'Race conditions happen when multiple threads access shared resources concurrently without proper synchronization, enabling attackers to exploit timing windows.'
  ),
  createQuestion(
    'qn-em5-95',
    'In PowerShell scripting, how are parameters passed into a custom script file variables section?',
    ['Using direct C++ compiler pointers.', 'Declaring parameters within a "Param(...)" block at the top of the script.', 'Passing inputs into local ~/.bashrc registers.', 'Executing local system env calls on startup.'],
    1,
    'PowerShell scripts declare arguments inside a "Param()" statement block at the start of the script, enabling named parameters.'
  ),
  createQuestion(
    'qn-em5-96',
    'Which regular expression quantifer matches the preceding element zero or one times?',
    ['Plus (+)', 'Asterisk (*)', 'Question Mark (?)', 'Dollar ($)'],
    2,
    'The question mark "?" specifies that the preceding character or group should match zero or one times (making it optional).'
  ),
  createQuestion(
    'qn-em5-97',
    'Contrast stateful Security Groups and stateless Subnet NACLs in Cloud Networks.',
    ['NACLs remember connection sessions; Security Groups require explicit return rules.', 'Security Groups track connection sessions and automatically permit return traffic; NACLs do not track states and require explicit inbound and outbound rules.', 'Security Groups compile using Go; NACLs require Bash script installations.', 'NACLs require physical datacenter space.'],
    1,
    'Security Groups are stateful host-level virtual firewalls. Subnet NACLs are stateless subnet-level virtual firewalls that evaluate traffic in both directions.'
  ),
  createQuestion(
    'qn-em5-98',
    'Which concept represents allocating host resources (hard drives, processors) globally on physical hosts utilizing centralized management utilities?',
    ['Software Virtualization', 'Bare-metal Type-2 compilation', 'Infrastructure as Code drift', 'Micro-segmentation routing'],
    0,
    'Virtualization abstracts physical hardware resources (CPU, RAM, storage) to create multiple logical computers (virtual machines).'
  ),
  createQuestion(
    'qn-em5-99',
    'An engineer wants to write a Python script that converts dynamic variables into structured JSON strings before calling an API. Which function should they use?',
    ['json.loads()', 'json.dumps()', 'json.parse()', 'json.encode()'],
    1,
    'The function "json.dumps()" serializes a Python object (like a dictionary) into a structured JSON-formatted string.'
  ),
  createQuestion(
    'qn-em5-100',
    'Under the Shared Responsibility Model of a SaaS cloud email client, what critical security baseline is managed strictly by the tenant company?',
    ['Enforcing lock codes on physical server storage boxes', 'Designing host webmail kernel operating structures', 'Configuring tenant directory identity policies, employee access classifications, and enforcing strong credentials', 'Applying patches to internal database storage systems'],
    2,
    'SaaS suppliers handle all infrastructure and platform security, leaving the customer to manage user accounts, permissions, and security policies.'
  )
];
