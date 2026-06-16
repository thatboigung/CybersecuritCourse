import { RoadmapArea, Module } from '../types';

export const COMP_SCI_ROADMAP_AREAS: RoadmapArea[] = [
  {
    id: 'cs-101',
    name: 'Data Representation & Computer Arithmetic',
    description: 'Learn binary, octal, hexadecimal conversion, two\'s complement, floating point models, mantissa, exponent normalization, and error tracking.',
    icon: 'Hash',
    color: 'blue',
    courseGroup: 'computer_science'
  },
  {
    id: 'cs-102',
    name: 'Computer Architecture & Cloud Services',
    description: 'Explore CPU architectures, registers, the Fetch-Execute cycle, memory systems, low-level execution, cloud models (IaaS/PaaS/SaaS), and public/hybrid topologies.',
    icon: 'Cpu',
    color: 'violet',
    courseGroup: 'computer_science'
  },
  {
    id: 'cs-103',
    name: 'Networking & Communication Protocols',
    description: 'Master OSI vs. TCP/IP structural stack profiles, subnetting IPv4/IPv6, Domain Name System resolution workflows, and static vs. dynamic packet routing.',
    icon: 'Network',
    color: 'emerald',
    courseGroup: 'computer_science'
  },
  {
    id: 'cs-104',
    name: 'Algorithms & Advanced Data Structures',
    description: 'Study static vs. dynamic arrays, linked lists, stacks, queues, binary tree traversal, recursion, and search/sort algorithms.',
    icon: 'GitBranch',
    color: 'indigo',
    courseGroup: 'computer_science'
  },
  {
    id: 'cs-105',
    name: 'Software Development Methodologies & Programming',
    description: 'Differentiate structured vs. OOP blueprints (encapsulation, inheritance, polymorphism) and compare rigid Waterfall against iterative Prototyping models.',
    icon: 'Code',
    color: 'amber',
    courseGroup: 'computer_science'
  },
  {
    id: 'cs-106',
    name: 'Relational Databases & Management Systems (DBMS)',
    description: 'Examine flat-file hazards, relational data structures, Entity-Relationship Models (ERDs), keys, and 1NF, 2NF, 3NF schema normalization formulas.',
    icon: 'Database',
    color: 'cyan',
    courseGroup: 'computer_science'
  },
  {
    id: 'cs-107',
    name: 'Security, Ethics, and Professional Environment',
    description: 'Thwart software injection flaws, utilize multi-factor access control systems, implement disaster recovery, explore legal guidelines, and master Unhu/Ubuntu ethics.',
    icon: 'Shield',
    color: 'rose',
    courseGroup: 'computer_science'
  },
  {
    id: 'cs-108',
    name: 'Technology Enterprising & E-Commerce',
    description: 'Map e-business models (B2B, B2C, C2C), payment integrations, software business plan pricing models, and commercial engineering specs.',
    icon: 'TrendingUp',
    color: 'violet',
    courseGroup: 'computer_science'
  }
];

export const COMP_SCI_MODULES: Module[] = [
  {
    id: 'mod-cs-101',
    areaId: 'cs-101',
    title: 'Unit 1: Data Representation & Computer Arithmetic',
    description: 'How modern digital hardware models numerical systems, represents signed integers, and manipulates real/floating-point values with error tracking.',
    libraryLinks: [
      { title: "Number Bases and Twos Complement (A Level)", url: "https://www.youtube.com/results?search_query=A+Level+Computer+Science+Number+Bases+and+Twos+Complement" },
      { title: "Floating Point Binary Representation & Normalization", url: "https://www.youtube.com/results?search_query=Floating+point+binary+representation+and+normalization+A+level" }
    ],
    lessons: [
      {
        id: 'cs101-l1',
        moduleId: 'mod-cs-101',
        title: '1.1 Number Bases & Sign Representations',
        duration: 35,
        youtubeVideoId: 'mNAsE6T0Gf0', // placeholder or real, can use some standard a-level tutorial or generic
        content: `### 1.1 Number Bases & Sign Representations

Modern computer hardware architectures rely entirely on digital states to store, transmit, and manipulate parameters. In this lesson, we drill down into binary, octal, hexadecimal, and denary conversion algorithms and evaluate signed integer modeling using two's complement and sign-and-magnitude schemas.

---

#### 1. Positional Number Systems
Positional notation defines a value by its digits and its base ($b$):
$$V = \sum_{i=0}^{n} d_i \cdot b^i$$

* **Binary (Base 2):** Digits $\{0, 1\}$. The standard internal language of processors.
* **Octal (Base 8):** Digits $\{0, 1, 2, 3, 4, 5, 6, 7\}$. Used as a compact shorthand for binary sequences.
* **Denary/Decimal (Base 10):** Digits $\{0, \dots, 9\}$. The human standard.
* **Hexadecimal (Base 16):** Digits $\{0, \dots, 9, A, B, C, D, E, F\}$. Crucial for memory addressing and debugging.

#### 2. Converts & Shorthands
To convert fractional or whole parts:
* **Denary to Base $b$:** Successively divide the integer part by $b$, noting remainders from bottom to top.
* **Hexadecimal $\leftrightarrow$ Binary:** Group binary sequences into 4-bit nibbles starting from the least significant bit (LSB).
  * Example: $1101\ 1010_2 \rightarrow D\ A_{16}$.

#### 3. Signed Integer Systems
How do we represent negative variables in a pure binary register?
* **Sign-and-Magnitude:** The most significant bit (MSB) acts as the sign flag ($0 = +$, $1 = -$). The remaining bits define the magnitude. 
  * *Downside:* Dual zero representations ($+0$ and $-0$), leading to complex ALU circuit designs.
* **Two's Complement:** Invert all bits of the positive representation (one's complement) and add $1$.
  * **Equation:** The value of an $n$-bit sequence in two's complement is:
    $$V = -d_{n-1} \cdot 2^{n-1} + \sum_{i=0}^{n-2} d_i \cdot 2^i$$
  * *Advantage:* Simple addition/subtraction hardware using a single adder unit with no dual zero hazard.

---

#### Video Resource Guide
* **YouTube Search:** \`A Level Computer Science Number Bases and Twos Complement\`
* **Link to copy:** [Number Bases Search](https://www.youtube.com/results?search_query=A+Level+Computer+Science+Number+Bases+and+Twos+Complement)

#### Practical Assignment
1. Convert $234_{10}$ into Base 16 and Base 2.
2. Represent $-45_{10}$ in an 8-bit register using Two's Complement.`,
        quiz: {
          id: 'q-cs101-l1',
          title: 'Number Bases & Signs Quiz',
          questions: [
            {
              id: 'q-cs101-l1-1',
              text: 'Convert the hexadecimal value 0x3F to binary.',
              options: ['00111111', '01111111', '00111110', '00010011'],
              correctAnswerIndex: 0,
              explanation: '3 is 0011 and F is 1111, so 0x3F is 00111111.'
            },
            {
              id: 'q-cs101-l1-2',
              text: 'In an 8-bit signed two\'s complement system, what represents the denary integer -5?',
              options: ['10000101', '11111011', '11111010', '11111101'],
              correctAnswerIndex: 1,
              explanation: 'Positive 5 in 8-bit binary is 00000101. Inverting the bits gives 11111010. Adding 1 results in 11111011.'
            }
          ]
        }
      },
      {
        id: 'cs101-l2',
        moduleId: 'mod-cs-101',
        title: '1.2 Floating Point Arithmetic & Computation Errors',
        duration: 40,
        youtubeVideoId: 'f0epc9wN_q8',
        content: `### 1.2 Floating Point Arithmetic & Computation Errors

Computer registers display fractions and real numbers using scientific notation layouts divided into a fractional base (Mantissa) and active power (Exponent).

---

#### 1. Floating-Point Model Structure
A binary floating-point value is calculated as:
$$\text{Value} = M \cdot 2^E$$
Where:
* $M$ is the **Mantissa** (usually a signed fractional slice in Two's Complement).
* $E$ is the **Exponent** (a signed integer indicating the scale factor).

#### 2. Normalization Process
To maximize precision and eliminate redundant representations, floating-point numbers are **normalized**:
* For a positive value, the mantissa must start with $0.1$.
* For a negative value, the mantissa must start with $1.0$.
* Normalization ensures that there is only one unique representation for any real number and maximizes the number of significant digits stored in a fixed length register.

#### 3. Computational Accuracy Hazards
* **Overflow:** The numeric outcome is larger than the maximum boundary capacity of the exponent register.
* **Underflow:** The calculated level drops below the microscopic limit of representable small values, resulting in rounding down to zero.
* **Rounding Errors:** Representing fractions in binary can result in infinite repeaters (e.g., $0.1_{10}$ is an infinite series in binary: $0.0001100110011\dots_2$), leading to small cumulative execution deviations.

---

#### Video Resource Guide
* **YouTube Search:** \`Floating point binary representation and normalization A level\`
* **Link to copy:** [Floating Point Search](https://www.youtube.com/results?search_query=Floating+point+binary+representation+and+normalization+A+level)

#### Practical Assignment
1. Normalize the binary float: Mantissa = $0.001101_2$, Exponent = $0100_2$ (4).
2. Calculate the decimal value of the normalized floating-point number: Mantissa = $0.1100000_2$ (positive), Exponent = $0011_2$.`,
        quiz: {
          id: 'q-cs101-l2',
          title: 'Floating Point Model Quiz',
          questions: [
            {
              id: 'q-cs101-l2-1',
              text: 'Why is normalization applied to floating point binary representations?',
              options: [
                'To convert negative exponent values to positive formats',
                'To maximize numeric precision and remove duplicate representations',
                'To prevent any possibilities of hardware underflow errors',
                'To encode the numbers into Unicode base systems'
              ],
              correctAnswerIndex: 1,
              explanation: 'Normalization shifts the mantissa so that the first fractional bit is significant, maximizing precision and ensuring unique representations.'
            },
            {
              id: 'q-cs101-l2-2',
              text: 'Which starting bit sequence identifies a normalized NEGATIVE floating-point mantissa?',
              options: ['0.1', '1.1', '1.0', '0.0'],
              correctAnswerIndex: 2,
              explanation: 'A normalized negative mantissa in two\'s complement must show the MSB as sign bit 1, followed by a different bit: 1.0.'
            }
          ]
        }
      }
    ],
    exam: {
      id: 'ex-cs-101',
      title: 'CS-101 Data Representation Certificate Exam',
      moduleId: 'mod-cs-101',
      timeLimit: 30,
      questions: [
        {
          id: 'ex-cs101-q1',
          text: 'An 8-bit sign-and-magnitude register has value 10101100. Write down the decimal value represented.',
          options: ['-44', '-76', '44', '-30'],
          correctAnswerIndex: 0,
          explanation: 'The MSB is 1 (negative), and the remaining bits 0101100 represent 32 + 8 + 4 = 44. Thus, it represents -44.'
        },
        {
          id: 'ex-cs101-q2',
          text: 'What happens when a positive integer is added to another positive integer in a fixed-size two\'s complement register, resulting in a sign bit of 1?',
          options: [
            'Normal algebraic closure is preserved.',
            'Arithmetic overflow, prompting incorrect sign interpretation.',
            'Underflow, resulting in absolute zero.',
            'No change occurs; the register ignores the high bit.'
          ],
          correctAnswerIndex: 1,
          explanation: 'When adding two positive numbers yields a negative sign bit (1) in two\'s complement, arithmetic overflow has occurred.'
        },
        {
          id: 'ex-cs101-q3',
          text: 'In floating-point normalization, why must a positive mantissa begin with the digits "0.1"?',
          options: [
            'To indicate that the sign is negative and exponent is fractional.',
            'To ensure the highest possible precision by forcing the most significant fractional bit to be non-zero and removing redundant representations.',
            'To align the mantissa dynamically with the hexadecimal alignment block.',
            'To force the exponent to remain strictly positive.'
          ],
          correctAnswerIndex: 1,
          explanation: 'A normalized positive mantissa under two\'s complement must show the sign bit (0) followed by a different bit (1), so it starts with 0.1 to maximize precision.'
        }
      ]
    }
  },
  {
    id: 'mod-cs-102',
    areaId: 'cs-102',
    title: 'Unit 2: Computer Architecture & Cloud Services',
    description: 'Deconstruct internal CPU micro-operations, standard registers, cycles, and study cloud service deployment paradigms.',
    libraryLinks: [
      { title: "CPU Architecture and Fetch-Execute Cycle (A Level)", url: "https://www.youtube.com/results?search_query=CPU+architecture+and+fetch+execute+cycle+A+level+computer+science" },
      { title: "Cloud Computing Models: IaaS, PaaS, SaaS", url: "https://www.youtube.com/results?search_query=Cloud+computing+models+IaaS+PaaS+SaaS+computer+science" }
    ],
    lessons: [
      {
        id: 'cs102-l1',
        moduleId: 'mod-cs-102',
        title: '2.1 Hardware vs. Software Architecture',
        duration: 35,
        youtubeVideoId: 'SFA8SIsG_qY',
        content: `### 2.1 Hardware vs. Software Architecture

To optimize or secure software, a solid grasp of Von Neumann processor architecture, system bus interfaces, and the Fetch-Execute cycle is mandatory.

---

#### 1. CPU Register Architectures
The CPU depends on fast, internal registers to conduct micro-operations:
* **Program Counter (PC):** Stores the memory address of the *next* instruction to be fetched.
* **Memory Address Register (MAR):** Holds the physical RAM address currently being written to or read from.
* **Memory Data Register (MDR):** Temporarily stores data fetched from memory or prepared for storage.
* **Current Instruction Register (CIR):** Retains the instructions currently being decoded and executed.
* **Accumulator (ACC):** Temporarily stores the mathematical or logical outcomes of the Arithmetic Logic Unit (ALU).

#### 2. The Fetch-Execute Cycle
The continuous pulse of digital processing follows these distinct steps:
1. **Fetch:** Copy PC address to MAR. Retrieve code from RAM via data bus. Place code in MDR. Increment the PC.
2. **Decode:** Transfer instruction from MDR to CIR. The Control Unit (CU) interprets opcode and operand flags.
3. **Execute:** Execute parameters (e.g., ALU checks, memory writes etc.).

#### 3. Standard System Buses
* **Data Bus:** Bi-directional path transferring actual data values between parts.
* **Address Bus:** Uni-directional highway matching destination coordinates.
* **Control Bus:** Directs status messages, synchronization signals, and write/read prompts.

---

#### Video Resource Guide
* **YouTube Search:** \`CPU architecture and fetch execute cycle A level computer science\`
* **Link to copy:** [CPU Architecture Search](https://www.youtube.com/results?search_query=CPU+architecture+and+fetch+execute+cycle+A+level+computer+science)

#### Practical Assignment
1. Outline the step-by-step changes in register contents during a basic "LOAD accumulator with value in address 0x1A" instruction.
2. Explain the differences between Von Neumann and Harvard architectures.`,
        quiz: {
          id: 'q-cs102-l1',
          title: 'CPU Logic & Registers Quiz',
          questions: [
            {
              id: 'q-cs102-l1-1',
              text: 'Which CPU register stores the address of the NEXT instruction to be executed?',
              options: ['Accumulator (ACC)', 'Program Counter (PC)', 'Memory Data Register (MDR)', 'Current Instruction Register (CIR)'],
              correctAnswerIndex: 1,
              explanation: 'The Program Counter (PC) automatically holds and increments the address of the next upcoming instruction.'
            },
            {
              id: 'q-cs102-l1-2',
              text: 'Why is the Address Bus uni-directional?',
              options: [
                'Data can only flow from the CPU to external memory address lines',
                'Instructions are only read at startup',
                'The CPU is the sole master that issues target locations to hardware',
                'To prevent electric magnetic impedance'
              ],
              correctAnswerIndex: 2,
              explanation: 'The CPU (or DMA controller) generates destination addresses and outputs them on the Address Bus to select RAM cells; memory modules do not write back addresses to the CPU.'
            }
          ]
        }
      },
      {
        id: 'cs102-l2',
        moduleId: 'mod-cs-102',
        title: '2.2 Cloud Service Models & Deployment Types',
        duration: 30,
        youtubeVideoId: 'P_3H4pY29l0',
        content: `### 2.2 Cloud Service Models & Deployment Types

Today, physical servers are often replaced with virtualized assets hosted globally. We break down the standard stack profiles and organizational models of cloud computing.

---

#### 1. Cloud Service Architecture
The cloud service models define how responsibility is partitioned between the vendor and user:
* **Infrastructure as a Service (IaaS):** Offers raw compute power, storage blocks, and hypervisors. You manage the OS, runtimes, and databases (e.g., GCP Compute Engine, AWS EC2).
* **Platform as a Service (PaaS):** Delivers pre-configured application runtimes. You deploy code without worrying about server configurations or operating systems (e.g., App Engine, Cloud Run, Heroku).
* **Software as a Service (SaaS):** A complete, hosted application accessible over the browser (e.g., Gmail, Google Workspace, Slack).

#### 2. Cloud Deployment Topologies
* **Public Cloud:** Resources are owned and operated by third-party service providers (multi-tenant environment).
* **Private Cloud:** Infrastructure dedicated exclusively to a single enterprise (single-tenant).
* **Hybrid Cloud:** Combines public and private resource patterns, facilitating fluid data sharing.
* **Community Cloud:** Infrastructure shared by organizations with common shared concerns (legal requirements, compliance rules etc.).

---

#### Video Resource Guide
* **YouTube Search:** \`Cloud computing models IaaS PaaS SaaS computer science\`
* **Link to copy:** [Cloud Computing Search](https://www.youtube.com/results?search_query=Cloud+computing+models+IaaS+PaaS+SaaS+computer+science)

#### Practical Assignment
1. Identify whether a Cloud Run instance fits IaaS, PaaS, or SaaS. Defend your answer.
2. Outline why a bank might prefer a hybrid cloud system over a pure public cloud model.`,
        quiz: {
          id: 'q-cs102-l2',
          title: 'Cloud Models Quiz',
          questions: [
            {
              id: 'q-cs102-l2-1',
              text: 'In which service model is the user responsible for patching the Guest Operating System?',
              options: ['SaaS', 'PaaS', 'IaaS', 'Serverless'],
              correctAnswerIndex: 2,
              explanation: 'Under Infrastructure as a Service (IaaS), you lease bare VMs and are responsible for installing and patching the operational system, runtimes, and applications.'
            },
            {
              id: 'q-cs102-l2-2',
              text: 'What qualifies a deployment as a HYBRID cloud model?',
              options: [
                'Using both AMD and Intel CPUs',
                'Directly linking private servers with public cloud networks',
                'Accessing the system on both mobile and desktop computers',
                'Using multiple public cloud providers simultaneously'
              ],
              correctAnswerIndex: 1,
              explanation: 'A hybrid cloud connects on-premises or private cloud systems with public cloud services, allowing workloads to shift dynamically between them.'
            }
          ]
        }
      }
    ],
    exam: {
      id: 'ex-cs-102',
      title: 'CS-102 Computer Architecture & Cloud Services Cert Exam',
      moduleId: 'mod-cs-102',
      timeLimit: 30,
      questions: [
        {
          id: 'ex-cs102-q1',
          text: 'During which phase of the Fetch-Execute cycle is the Program Counter (PC) incremented?',
          options: ['Decode', 'Fetch', 'Execute', 'Interrupt Check'],
          correctAnswerIndex: 1,
          explanation: 'The PC is incremented immediately after the instruction is copied from memory to the Memory Data Register (MDR), which is part of the Fetch phase.'
        },
        {
          id: 'ex-cs102-q2',
          text: 'Which Cloud architecture model offers the client control over the underlying operating system and virtualized networks?',
          options: ['SaaS (Software as a Service)', 'PaaS (Platform as a Service)', 'IaaS (Infrastructure as a Service)', 'BaaS (Backend as a Service)'],
          correctAnswerIndex: 2,
          explanation: 'With IaaS, users are provided with bare infrastructure (virtual servers, hypervisors, storage), on which they must install and manage and configure the OS and software stack.'
        },
        {
          id: 'ex-cs102-q3',
          text: 'What specialized CPU registers hold the address of the memory location currently being read from or written to?',
          options: ['Program Counter (PC)', 'Accumulator (ACC)', 'Memory Address Register (MAR)', 'Current Instruction Register (CIR)'],
          correctAnswerIndex: 2,
          explanation: 'The Memory Address Register (MAR) stores the primary coordinates of memory addresses being requested by the CPU.'
        }
      ]
    }
  },
  {
    id: 'mod-cs-103',
    areaId: 'cs-103',
    title: 'Unit 3: Networking and Communication Protocols',
    description: 'Learn OSI and TCP/IP stack models, IPv4/IPv6 subnetting, DNS resolution, and routing mechanics.',
    libraryLinks: [
      { title: "OSI Model vs. TCP/IP Suite (Computer Science)", url: "https://www.youtube.com/results?search_query=OSI+model+vs+TCP+IP+suite+computer+science" },
      { title: "IP Addressing, Subnetting, and DNS Workflows", url: "https://www.youtube.com/results?search_query=IP+addressing+subnetting+and+DNS+computer+science" }
    ],
    lessons: [
      {
        id: 'cs103-l1',
        moduleId: 'mod-cs-103',
        title: '3.1 OSI vs. TCP/IP Architectural Layers',
        duration: 35,
        youtubeVideoId: 'U_A_58UvEVM',
        content: `### 3.1 OSI vs. TCP/IP Architectural Layers

Data networks route packets globally through highly structured protocols. We compare the conceptual OSI 7-layer reference model with the pragmatic 4-layer TCP/IP production suite.

---

#### 1. The Open Systems Interconnection (OSI) Model
An abstraction model representing network communication divided into 7 distinct sequential layers:
7. **Application:** System-user interface protocols (e.g., HTTP, FTP, SMTP).
6. **Presentation:** Data format translation, encoding, and encryption mechanisms (e.g., SSL/TLS, JSON).
5. **Session:** Establishes and manages connections, sessions, and synchronization points.
4. **Transport:** End-to-end reliability, segment check-summing, flow control (TCP/UDP).
3. **Network:** Formulates logic routing, paths, and host IP mapping.
2. **Data Link:** Framing, error checking physical pathways, and logical MAC addresses.
1. **Physical:** Transmits raw binary streams over physical media (cables, fiber optics, radio frequencies).

#### 2. The TCP/IP Protocol Suite
A streamlined 4-layer production-oriented protocol suite:
* **Application (OSI 5-7):** Integrates presentation, session, and application layers.
* **Transport (OSI 4):** Manages flow controls and packet reconstruction.
* **Internet (OSI 3):** Routes packets across physical networks.
* **Network Access (OSI 1-2):** Translates frames to hardware signals.

---

#### Video Resource Guide
* **YouTube Search:** \`OSI model vs TCP IP suite computer science\`
* **Link to copy:** [OSI vs TCP/IP Search](https://www.youtube.com/results?search_query=OSI+model+vs+TCP+IP+suite+computer+science)

#### Practical Assignment
1. Categorize these protocols into their correct OSI layers: SSL, ARP, UDP, IPsec, HTTP.
2. Describe what happens when a package header is added at each step of transmission (encapsulation).`,
        quiz: {
          id: 'q-cs103-l1',
          title: 'OSI vs TCP/IP Quiz',
          questions: [
            {
              id: 'q-cs103-l1-1',
              text: 'Which layer of the OSI model handles data compression and TLS encryption?',
              options: ['Session Layer', 'Application Layer', 'Presentation Layer', 'Transport Layer'],
              correctAnswerIndex: 2,
              explanation: 'The Presentation Layer (Layer 6) is responsible for converting data structures into network-safe formats, as well as data compression and encryption.'
            },
            {
              id: 'q-cs103-l1-2',
              text: 'TCP and UDP exist at which functional layer of the TCP/IP stack?',
              options: ['Network Access', 'Internet', 'Transport', 'Application'],
              correctAnswerIndex: 2,
              explanation: 'TCP and UDP are transport protocols that govern end-to-end communication, session delivery, and reliability at the Transport Layer.'
            }
          ]
        }
      },
      {
        id: 'cs103-l2',
        moduleId: 'mod-cs-103',
        title: '3.2 IP Addressing, DNS, and Routing Protocols',
        duration: 40,
        youtubeVideoId: 'rL8XmGq9pL8',
        content: `### 3.2 IP Addressing, DNS, and Routing Protocols

We dive into subnetting network addresses, the DNS lookup chain, and how routers direct traffic across networks.

---

#### 1. IP Address Subnetting
An IP address is split into **Network ID** and **Host ID** portions using a subnet mask:
* **IPv4 Address:** 32 bits, divided into 4 decimal octets (e.g., $192.168.1.0/24$).
* **Subnet Mask:** Defines which bits represent the network. \`/24\` means the first 24 bits are the network ID ($255.255.255.0$), leaving 8 bits for hosts ($2^8 - 2 = 254$ usable host addresses, excluding network and broadcast addresses).
* **IPv6 Address:** 128-bit hex sequences to handle universal scale and prevent address exhaustion.

#### 2. Domain Name System (DNS) Flow
DNS maps human-readable domain names (e.g., \`google.com\`) to machine-readable IP addresses. The lookup hierarchy involves:
1. **Recursive Resolver:** The local DNS server that orchestrates the query.
2. **Root Name Server:** Directs the resolver to the appropriate Top-Level Domain (TLD) server.
3. **TLD Name Server:** Directs the resolver to the authoritative name server (e.g., based on \`.com\`, \`.org\`).
4. **Authoritative Name Server:** Returns the final physical IP address to the resolver, which caches the result.

#### 3. Routing Paradigms
* **Static Routing:** Paths are configured manually. Best for simple, unchanging network layouts.
* **Dynamic Routing:** Routers use protocols (e.g., OSPF, RIP, BGP) to automatically discover paths, adapt to outages, and find the shortest route under changing loads.

---

#### Video Resource Guide
* **YouTube Search:** \`IP addressing subnetting and DNS computer science\`
* **Link to copy:** [IP Addressing Search](https://www.youtube.com/results?search_query=IP+addressing+subnetting+and+DNS+computer+science)

#### Practical Assignment
1. Subnet the network address $10.0.0.0/26$. Determine the network address, broadcast address, and usable range of host IPs.
2. Sketch the physical path of a DNS query from your home computer to Google's primary authoritative nameserver.`,
        quiz: {
          id: 'q-cs103-l2',
          title: 'IP & DNS Resolution Quiz',
          questions: [
            {
              id: 'q-cs103-l2-1',
              text: 'How many usable host IPs are available mathematically under a /29 subnet mask?',
              options: ['8', '6', '14', '30'],
              correctAnswerIndex: 1,
              explanation: 'A /29 subnet leaves 32 - 29 = 3 bits for hosts. 2³ = 8. Subtracting the network address and broadcast address yields 6 usable host IPs.'
            },
            {
              id: 'q-cs103-l2-2',
              text: 'Which DNS server actually holds the authoritative IP maps for a specific company web server?',
              options: ['Recursive Resolver', 'Root Server', 'TLD Nameserver', 'Authoritative Nameserver'],
              correctAnswerIndex: 3,
              explanation: 'The Authoritative Nameserver is the source of truth that contains the actual DNS records for a domain.'
            }
          ]
        }
      }
    ],
    exam: {
      id: 'ex-cs-103',
      title: 'CS-103 Networking & Protocols Certificate Exam',
      moduleId: 'mod-cs-103',
      timeLimit: 30,
      questions: [
        {
          id: 'ex-cs103-q1',
          text: 'Which Layer of the OSI Model oversees packet routing, path determination, logical IP addressing, and IP lookup setups?',
          options: ['Data Link Layer (Layer 2)', 'Network Layer (Layer 3)', 'Transport Layer (Layer 4)', 'Session Layer (Layer 5)'],
          correctAnswerIndex: 1,
          explanation: 'Layer 3 (Network Layer) is responsible for routing packets across the network, processing logical coordinates (IP addresses), and routing tables.'
        },
        {
          id: 'ex-cs103-q2',
          text: 'What is the network address of the subnet for an IP address 192.168.1.50 with a subnet mask of /26?',
          options: ['192.168.1.0', '192.168.1.32', '192.168.1.48', '192.168.1.64'],
          correctAnswerIndex: 0,
          explanation: 'A /26 subnet splits the octet into segments of 64. The range for the first subnet is 0-63, so 192.168.1.50 falls in the range 0 to 63, making the network address 192.168.1.0.'
        },
        {
          id: 'ex-cs103-q3',
          text: 'Which protocol is responsible for auto-rotating or matching dynamic IP allocations to systems on a local network?',
          options: ['DNS', 'DHCP', 'ARP', 'NTP'],
          correctAnswerIndex: 1,
          explanation: 'DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses, subnet masks, and default gateways to devices on a network.'
        }
      ]
    }
  },
  {
    id: 'mod-cs-104',
    areaId: 'cs-104',
    title: 'Unit 4: Algorithms and Advanced Data Structures',
    description: 'Understand linear and non-linear data structures, binary search trees, recursion, and search/sort algorithms.',
    libraryLinks: [
      { title: "Data structures: Arrays, Lists, Stacks, Queues", url: "https://www.youtube.com/results?search_query=Data+structures+arrays+stacks+queues+linked+lists+A+level" },
      { title: "Binary Search Trees, Traversal, and Recursion", url: "https://www.youtube.com/results?search_query=Binary+search+tree+traversal+and+recursion+computer+science" },
      { title: "Standard Search & Sort Algorithms (Big O)", url: "https://www.youtube.com/results?search_query=Standard+algorithms+bubble+sort+insertion+sort+binary+search" }
    ],
    lessons: [
      {
        id: 'cs104-l1',
        moduleId: 'mod-cs-104',
        title: '4.1 Primitive Data Types & Linear Data Structures',
        duration: 35,
        youtubeVideoId: 'SFA8SIsG_qY',
        content: `### 4.1 Primitive Data Types & Linear Data Structures

Programs manipulate data in memory. We must select structures that ensure efficient read, write, and search operations.

---

#### 1. Primitive data types
* **Integer:** Stores whole numbers (e.g., 32-bit signed integer).
* **Real/Float:** Stores floating-point fraction values.
* **Boolean:** Single-bit logic ($0 = \text{False}$, $1 = \text{True}$).
* **Character/String:** Text encodings (ASCII, Unicode).

#### 2. Static vs. Dynamic Structures
* **Static:** Memory allocated at compile-time (e.g., fixed-length arrays). Fast access but size cannot change.
* **Dynamic:** Memory allocated at runtime (e.g., user-defined lists). Adapts to data size but requires pointer overhead.

#### 3. Linear Structures
* **Array:** Fixed, contiguous memory blocks accessed via index ($O(1)$ lookup).
* **Linked List:** Nodes linked by pointers.
  * *Singly Linked list:* Each node points to the next.
  * *Doubly Linked list:* Each node points to both the next and previous node.
* **Stack:** LIFO (Last-In, First-Out) buffer. Supported by two main methods: \`push()\` and \`pop()\`.
* **Queue:** FIFO (First-In, First-Out) buffer. Elements are added with \`enqueue()\` and removed with \`dequeue()\`.

---

#### Video Resource Guide
* **YouTube Search:** \`Data structures arrays stacks queues linked lists A level\`
* **Link to copy:** [Linear Structures Search](https://www.youtube.com/results?search_query=Data+structures+arrays+stacks+queues+linked+lists+A+level)

#### Practical Assignment
1. Implement a singly linked list with insert and delete operations in pseudocode.
2. Describe how a call stack works when running nested function calls in programming.`,
        quiz: {
          id: 'q-cs104-l1',
          title: 'Linear Structures Quiz',
          questions: [
            {
              id: 'q-cs104-l1-1',
              text: 'Which data structure utilizes a LIFO buffer pattern?',
              options: ['Queue', 'Linked List', 'Stack', 'Acyclic graph'],
              correctAnswerIndex: 2,
              explanation: 'A Stack utilizes the Last-In, First-Out (LIFO) pattern, where the last item added is the first one removed.'
            },
            {
              id: 'q-cs104-l1-2',
              text: 'What is a major advantage of a Doubly Linked List over a Singly Linked List?',
              options: [
                'Faster indexing speeds than arrays',
                'Uses less memory',
                'Supports native bi-directional list traversals',
                'Guarantees thread safety automatically'
              ],
              correctAnswerIndex: 2,
              explanation: 'A doubly linked list stores pointers to both next and previous nodes, allowing bi-directional traversal.'
            }
          ]
        }
      },
      {
        id: 'cs104-l2',
        moduleId: 'mod-cs-104',
        title: '4.2 Non-Linear Structures (Binary Trees) & Recursion',
        duration: 40,
        youtubeVideoId: 'h8Sby_Z7H2A',
        content: `### 4.2 Non-Linear Structures (Binary Trees) & Recursion

Data is often organized hierarchically rather than linearly. We explore recursive logic and the layout of binary search trees.

---

#### 1. Binary Search Tree (BST) Properties
A Binary Search Tree is a hierarchical structure where each node has at most two children:
* **The BST Principle:** For any given node $N$, values in the left subtree are smaller than $N$, and values in the right subtree are larger than $N$.
* This structure supports efficient $O(\log n)$ search, insert, and delete operations in balanced systems.

#### 2. Node Traversal Strategies
To read all elements of a tree, we use recursive traversal algorithms:
* **Pre-order Traversal (Root $\rightarrow$ Left $\rightarrow$ Right):** Useful for duplicating trees.
* **In-order Traversal (Left $\rightarrow$ Root $\rightarrow$ Right):** Retrieves data in sorted order.
* **Post-order Traversal (Left $\rightarrow$ Right $\rightarrow$ Root):** Ideal for deleting or freeing nodes.

\`\`\`
       5
      / \
     3   8
    / \
   1   4
\`\`\`
*In-order traversal of the above tree yields: 1, 3, 4, 5, 8.*

#### 3. Recursion & The Call Stack
Recursion occurs when a function calls itself. To prevent infinite loops, recursion depends on:
* **Base Case:** The condition under which the function stops calling itself and returns.
* **Recursive Case:** The function invokes itself with a smaller input, working toward the base case.
* **Stack Depth:** Every self-call adds a frame to the computer's call stack. Too many recursive calls without hitting the base case results in a **stack overflow**.

---

#### Video Resource Guide
* **YouTube Search:** \`Binary search tree traversal and recursion computer science\`
* **Link to copy:** [Tree & Recursion Search](https://www.youtube.com/results?search_query=Binary+search+tree+traversal+and+recursion+computer+science)

#### Practical Assignment
1. Write a recursive function in pseudocode to calculate the factorial of $n$.
2. Sequence the Pre-order, In-order, and Post-order coordinates of a BST built by inserting keys: $12, 5, 18, 2, 9, 15, 22$.`,
        quiz: {
          id: 'q-cs104-l2',
          title: 'Trees & Recursion Quiz',
          questions: [
            {
              id: 'q-cs104-l2-1',
              text: 'Which traversal technique yields values from a Binary Search Tree in sorted ascending order?',
              options: ['Pre-order', 'In-order', 'Post-order', 'Breadth-First Search'],
              correctAnswerIndex: 1,
              explanation: 'In-order traversal visits the left node, then the root, then the right node, which retrieves values in sorted order from a BST.'
            },
            {
              id: 'q-cs104-l2-2',
              text: 'What happens if a recursive function lacks a base case?',
              options: [
                'The program will compile faster',
                'It runs in O(1) time complexity',
                'It results in a stack overflow crash',
                'It converts automatically to an iterative loop'
              ],
              correctAnswerIndex: 2,
              explanation: 'Without a base case, a recursive function will call itself infinitely, filling the call stack until a stack overflow crash occurs.'
            }
          ]
        }
      },
      {
        id: 'cs104-l3',
        moduleId: 'mod-cs-104',
        title: '4.3 Pseudocode Logic & Standard Search/Sort Algorithms',
        duration: 45,
        youtubeVideoId: 'SFA8SIsG_qY',
        content: `### 4.3 Pseudocode Logic & Standard Search/Sort Algorithms

We study pseudocode design and analyze standard searching and sorting algorithms, comparing their Big O complexity.

---

#### 1. Standard Sorting Algorithms
How do we sort arrays efficiently in memory?
* **Bubble Sort:** Iteratively compares adjacent elements and swaps them if they are in the wrong order. Very simple but inefficient.
  * *Worst-case:* $O(n^2)$
* **Insertion Sort:** Divides the array into sorted and unsorted portions, inserting one unsorted element at a time into its correct position. Highly efficient for small or partially sorted datasets.
  * *Worst-case:* $O(n^2)$

#### 2. Standard Searching Algorithms
* **Linear Search:** Iterates through every element from index 0 to $n-1$.
  * *Worst-case:* $O(n)$ time. Works on unsorted arrays.
* **Binary Search:** Repeatedly divides a sorted search interval in half.
  * *Worst-case:* $O(\log n)$ time. **Prerequisite:** The array MUST be sorted.

---

#### Video Resource Guide
* **YouTube Search:** \`Standard algorithms bubble sort insertion sort binary search\`
* **Link to copy:** [Algorithms Search](https://www.youtube.com/results?search_query=Standard+algorithms+bubble+sort+insertion+sort+binary+search)

#### Practical Assignment
1. Implement a complete Binary Search algorithm in clean pseudocode.
2. Track the array states as you sort $[12, 5, 1, 9, 3]$ using Insertion Sort.`,
        quiz: {
          id: 'q-cs104-l3',
          title: 'Search & Sort Quiz',
          questions: [
            {
              id: 'q-cs104-l3-1',
              text: 'What is the absolute prerequisite requirement for executing a Binary Search?',
              options: [
                'The array size must be a power of 2',
                'The array elements must be sorted',
                'The array must contain positive elements',
                'The array must be dynamic'
              ],
              correctAnswerIndex: 1,
              explanation: 'Binary Search assumes that the middle element acts as a divider, requiring the array to be sorted.'
            },
            {
              id: 'q-cs104-l3-2',
              text: 'Which Big O time complexity represents the average execution of Bubble Sort?',
              options: ['O(log n)', 'O(n)', 'O(n log n)', 'O(n²)'],
              correctAnswerIndex: 3,
              explanation: 'Bubble Sort uses nested loops to compare adjacent elements, resulting in a quadratic $O(n^2)$ time complexity.'
            }
          ]
        }
      }
    ],
    exam: {
      id: 'ex-cs-104',
      title: 'CS-104 Algorithms & Advanced Data Structures Exam',
      moduleId: 'mod-cs-104',
      timeLimit: 30,
      questions: [
        {
          id: 'ex-cs104-q1',
          text: 'Which sorting algorithm uses a divide-and-conquer strategy, selecting a "pivot" element to split the array into halves?',
          options: ['Insertion Sort', 'Selection Sort', 'Quick Sort', 'Bubble Sort'],
          correctAnswerIndex: 2,
          explanation: 'Quick Sort is a divide-and-conquer algorithm that selects a pivot, partitions the array around it, and recursively sorts the sub-arrays.'
        },
        {
          id: 'ex-cs104-q2',
          text: 'In a standard Binary Search Tree (BST), what traversal sequence produces the keys in strictly values-sorted ascending order?',
          options: ['Pre-order', 'In-order', 'Post-order', 'Breadth-first'],
          correctAnswerIndex: 1,
          explanation: 'An In-order traversal of a BST visits the left subtree, the node itself, then the right subtree, which retrieves keys in ascending order.'
        },
        {
          id: 'ex-cs104-q3',
          text: 'What major limitation defines static arrays compared to dynamic linked lists?',
          options: [
            'Fixed configuration size defined at execution, requiring continuous memory blocks',
            'Slower random access time speeds',
            'Inability to hold integer variables',
            'Complex recursive execution loops'
          ],
          correctAnswerIndex: 0,
          explanation: 'Static arrays are allocated as a single, contiguous block of memory with a fixed size; expanding them requires re-allocation and copying, unlike linked lists.'
        }
      ]
    }
  },
  {
    id: 'mod-cs-105',
    areaId: 'cs-105',
    title: 'Unit 5: Software Development Methodologies & Programming',
    description: 'Learn programming fundamentals, variable scopes, functional parameters, object-oriented concepts, and software life cycle configurations.',
    libraryLinks: [
      { title: "Variable Scope, Parameters, and File Handling", url: "https://www.youtube.com/results?search_query=Functions+procedures+and+file+handling+programming" },
      { title: "Object-Oriented Programming (OOP) Core Concepts", url: "https://www.youtube.com/results?search_query=Object+oriented+programming+core+concepts+explained" },
      { title: "Software Lifecycles: Waterfall vs. Prototyping vs. Agile", url: "https://www.youtube.com/results?search_query=SDLC+waterfall+model+vs+prototyping+agile+computer+science" }
    ],
    lessons: [
      {
        id: 'cs105-l1',
        moduleId: 'mod-cs-105',
        title: '5.1 Structured vs. Advanced Programming Basics',
        duration: 35,
        youtubeVideoId: 'SFA8SIsG_qY',
        content: `### 5.1 Structured vs. Advanced Programming Basics

We cover programming concepts like variable scope, parameter passing mechanisms, and filesystem interaction.

---

#### 1. Variable Scope
* **Global Variables:** Declared outside function blocks. Accessible throughout the program. Overuse can lead to hard-to-debug state dependencies.
* **Local Variables:** Declared inside a function block. De-allocated when the function exits, protecting memory states.

#### 2. Parameter Passing
Functions receive input parameters in two main ways:
* **Pass-by-Value:** Sends a copy of the variable's value. Changes made inside the function do not affect the original variable.
* **Pass-by-Reference:** Sends a pointer to the variable's memory address. Modifying the parameter inside the function directly updates the caller's variable state.

#### 3. Structured File Handling
We must systematically manage system I/O resources to prevent read/write leaks:
* **Opening:** Acquires a system handle on a physical file in read (\`r\`), write (\`w\`), or append (\`a\`) mode.
* **Closing:** Releases the handle, saving data and freeing system resources. Failing to close files can lock resources and lead to memory leaks.

---

#### Video Resource Guide
* **YouTube Search:** \`Functions procedures and file handling programming\`
* **Link to copy:** [Programming Basics Search](https://www.youtube.com/results?search_query=Functions+procedures+and+file+handling+programming)

#### Practical Assignment
1. Write a function in clean pseudocode that accepts an array of strings and writes them line-by-line to a physical text file. Include file error guards.
2. Outline the difference in stack memory behavior between pass-by-value and pass-by-reference.`,
        quiz: {
          id: 'q-cs105-l1',
          title: 'Structured Code Quiz',
          questions: [
            {
              id: 'q-cs105-l1-1',
              text: 'In pass-by-reference, how are variables passed to a function?',
              options: [
                'A copy of the variable\'s value is pushed to stack',
                'The actual memory address of the variable is shared',
                'The variable is converted to a string format',
                'The variable is stored in a temporary database table'
              ],
              correctAnswerIndex: 1,
              explanation: 'Pass-by-reference shares the memory address of the argument, so any updates within the function directly modify the original variable.'
            },
            {
              id: 'q-cs105-l1-2',
              text: 'Why is it critical to close system file handles after finished running reads/writes?',
              options: [
                'To convert ASCII values back to binary',
                'To release OS locks, flush buffers, and prevent resource leaks',
                'To trigger automatic garbage collection algorithms',
                'To prevent compilers from throwing syntax errors'
              ],
              correctAnswerIndex: 1,
              explanation: 'Closing files flushes buffered writes to disk, releases system-level file locks, and frees up system handles.'
            }
          ]
        }
      },
      {
        id: 'cs105-l2',
        moduleId: 'mod-cs-105',
        title: '5.2 Object-Oriented Programming (OOP) Blueprint',
        duration: 40,
        youtubeVideoId: 'SFA8SIsG_qY',
        content: `### 5.2 Object-Oriented Programming (OOP) Blueprint

Object-Oriented Programming (OOP) models software systems using classes and objects. We study classes, objects, and the 4 core concepts of OOP.

---

#### 1. Classes vs. Objects
* **Class:** A template or blueprint that defines state (fields) and behavior (methods).
* **Object:** A concrete instance of a class, stored in heap memory.

#### 2. The Four Pillars of OOP
* **1. Encapsulation:** Bundling fields and methods within a class, hiding internal state from direct outer modification. Classes expose public methods (getters/setters) to interact with private fields.
* **2. Inheritance:** Allows a subclass to acquire fields and methods of a parent class, promoting code reuse.
* **3. Polymorphism:** The ability of different classes to respond uniquely to the same method call:
  * *Method Overloading:* Multiple methods with the same name but different signatures within the same class (compile-time polymorphism).
  * *Method Overriding:* A subclass provides a custom implementation of a method inherited from a parent class (runtime polymorphism).
* **4. Abstraction:** Hiding complex implementation details and exposing only what is essential via interfaces or abstract classes.

---

#### Video Resource Guide
* **YouTube Search:** \`Object oriented programming core concepts explained\`
* **Link to copy:** [OOP Core Search](https://www.youtube.com/results?search_query=Object+oriented+programming+core+concepts+explained)

#### Practical Assignment
1. Implement a class system representing a BankAccount parent class and SavingsAccount subclass. Design fields, methods, and implement encapsulation.
2. Outline how overriding a method differs from overloading a method.`,
        quiz: {
          id: 'q-cs105-l2',
          title: 'OOP Blueprint Quiz',
          questions: [
            {
              id: 'q-cs105-l2-1',
              text: 'Which OOP pillar is demonstrated by declaring class traits to be private and exposing public getters and setters?',
              options: ['Polymorphism', 'Inheritance', 'Encapsulation', 'Abstraction'],
              correctAnswerIndex: 2,
              explanation: 'Encapsulation restricts direct outer access to a class\'s fields, routing all interactions through public accessors.'
            },
            {
              id: 'q-cs105-l2-2',
              text: 'What qualifies a method as being OVERRIDDEN in Java/C++?',
              options: [
                'Writing multiple parameters inside the same constructor function',
                'Redefining an inherited parent method in a subclass with the same signature',
                'Defining local variables inside an arithmetic iteration',
                'Changing the privacy levels of a global variable constructor'
              ],
              correctAnswerIndex: 1,
              explanation: 'An overridden method redefined in a subclass has the exact same name and signature as the one in its parent class, providing a custom implementation.'
            }
          ]
        }
      },
      {
        id: 'cs105-l3',
        moduleId: 'mod-cs-105',
        title: '5.3 Software Lifecycles: Waterfall, Prototyping, and OOM',
        duration: 35,
        youtubeVideoId: 'mNAsE6T0Gf0',
        content: `### 5.3 Software Lifecycles: Waterfall, Prototyping, and OOM

Selecting the right development methodology is critical to project success. We compare classic Waterfall, Rapid Prototyping, and Object-Oriented Analysis and Design (OOAD).

---

#### 1. The Waterfall Model
A rigid, sequential development model where each phase must be fully completed before the next begins:
$$\text{Requirements} \rightarrow \text{Design} \rightarrow \text{Implementation} \rightarrow \text{Verification} \rightarrow \text{Maintenance}$$
* **Advantage:** Straightforward, easily calculated scopes and targets. Well-suited for projects with stable requirements.
* **Drawback:** Inflexible. Adjusting requirements late in the lifecycle can be prohibitively expensive.

#### 2. Prototyping Model
Enables design testing by building simplified mockups of the final product:
$\text{Build Mockup} \rightarrow \text{User Evaluation} \rightarrow \text{Refine Prototype} \rightarrow \text{Production Finalization}$
* **Advantage:** Catches design issues early; highly responsive to user feedback.
* **Drawback:** Can lead to "scope creep" and fragmented system architectures if not carefully managed.

#### 3. Object-Oriented Methodology (OOM)
Uses OOAD (Object-Oriented Analysis and Design) to model software as a collection of interacting objects:
* Core structural components are modeled as logical objects.
* Systems are visualized using UML diagrams (Class, Sequence, and Use Case diagrams) to map interactions.
* Highly iterative, modular, and integrates naturally with modern Agile frameworks.

---

#### Video Resource Guide
* **YouTube Search:** \`SDLC waterfall model vs prototyping agile computer science\`
* **Link to copy:** [SDLC Models Search](https://www.youtube.com/results?search_query=SDLC+waterfall+model+vs+prototyping+agile+computer+science)

#### Practical Assignment
1. Compare Waterfall, Prototyping, and Agile based on flexibility, budget predictability, and customer involvement.
2. Draft a basic UML class diagram for a school enrollment system.`,
        quiz: {
          id: 'q-cs105-l3',
          title: 'Software SDLC Quiz',
          questions: [
            {
              id: 'q-cs105-l3-1',
              text: 'In which scenario is a physical Waterfall model highly recommended?',
              options: [
                'A mobile startup creating a viral game app',
                'A project with well-defined, static requirements',
                'An exploratory UI project',
                'A complex web application with evolving features'
              ],
              correctAnswerIndex: 1,
              explanation: 'Because Waterfall is a rigid, sequential model, it works best when requirements are fully locked and unlikely to change.'
            },
            {
              id: 'q-cs105-l3-2',
              text: 'What represents the core strength of OOAD during software modeling?',
              options: [
                'Eliminating all needs for automated testing',
                'Translating loose business rules directly to structured modular objects and UML profiles',
                'Compressing compile times',
                'Ensuring secure database encryption out of the box'
              ],
              correctAnswerIndex: 1,
              explanation: 'OOAD models systems as modular, interacting objects, translating complex business requirements into maintainable software architectures.'
            }
          ]
        }
      }
    ],
    exam: {
      id: 'ex-cs-105',
      title: 'CS-105 Software Design & OOP Certification Exam',
      moduleId: 'mod-cs-105',
      timeLimit: 30,
      questions: [
        {
          id: 'ex-cs105-q1',
          text: 'Which Object-Oriented Programming (OOP) concept hides an object\'s internal fields and mandates interaction only via public methods?',
          options: ['Polymorphism', 'Inheritance', 'Encapsulation', 'Abstraction'],
          correctAnswerIndex: 2,
          explanation: 'Encapsulation restricts direct access to object attributes and binds variables and methods together in a class with private access scopes.'
        },
        {
          id: 'ex-cs105-q2',
          text: 'What characterizes the core operational difference between the traditional Waterfall life cycle model and Agile Prototyping?',
          options: [
            'Waterfall requires no documentation whatsoever.',
            'Agile uses an iterative cycle returning feedback loops, whereas Waterfall is structured and strictly linear sequential.',
            'Waterfall is highly optimal for dynamic, fast-changing requirements.',
            'Agile completely bypasses the coding phase.'
          ],
          correctAnswerIndex: 1,
          explanation: 'Waterfall is a rigid, step-by-step linear methodology with sequential phases, whereas Agile thrives on iterative development, rapid feedback, and continuous optimization.'
        },
        {
          id: 'ex-cs105-q3',
          text: 'What occurs when a subclass provides a specific implementation for a method that is already defined in its parent class?',
          options: ['Method Overloading', 'Method Overriding', 'Dynamic Instantiation', 'System Compiling'],
          correctAnswerIndex: 1,
          explanation: 'Method overriding allows a subclass to provide a specific implementation for a method defined in its superclass, resolved at runtime.'
        }
      ]
    }
  },
  {
    id: 'mod-cs-106',
    areaId: 'cs-106',
    title: 'Unit 6: Relational Databases & Management Systems (DBMS)',
    description: 'Master database design, normalized entities, keys, and relational schema structuring (1NF, 2NF, 3NF).',
    libraryLinks: [
      { title: "Limitations of File Systems vs. DBMS Advantages", url: "https://www.youtube.com/results?search_query=File+based+system+vs+database+management+system" },
      { title: "Database Normalization Tutorials (1NF, 2NF, 3NF)", url: "https://www.youtube.com/results?search_query=Database+normalization+1NF+2NF+3NF+computer+science" }
    ],
    lessons: [
      {
        id: 'cs106-l1',
        moduleId: 'mod-cs-106',
        title: '6.1 Limitations of File-Based Systems vs. DBMS Advantages',
        duration: 35,
        youtubeVideoId: 'SFA8SIsG_qY',
        content: `### 6.1 Limitations of File-Based Systems vs. DBMS Advantages

Storing enterprise data in raw text files creates significant operational and structural hazards. We examine key advantages of transitioning to a relational Database Management System (DBMS).

---

#### 1. Flat-File System Hazards
* **Data Redundancy:** The same data is stored in multiple places, wasting storage space and leading to synchronization issues.
* **Data Inconsistency:** Updating a record in one file doesn't update it everywhere, resulting in conflicting data.
* **Data Isolation:** Files are stored in different places in varying formats, making it difficult to extract unified reports.
* **Integrity Anomalies:** Inadequate mechanisms to enforce valid formats or fields across data entry points.
* **Concurrent Access Conflicts:** Reading and writing to files simultaneously can lead to memory locks and data loss.

#### 2. Relational DBMS Architectural Strengths
A Relational DBMS addresses these issues by offering:
* **Relational Integrity Rules:** Enforces constraints (e.g., primary and foreign keys) to ensure data stays valid and consistent.
* **ACID Transactions:**
  * **Atomicity:** All operations in a transaction either succeed completely or fail completely.
  * **Consistency:** A transaction leaves the database in a logically valid state.
  * **Isolation:** Simultaneous transactions run independently without interfering with one another.
  * **Durability:** Once committed, transaction records are safely written to disk and survive system crashes.

---

#### Video Resource Guide
* **YouTube Search:** \`File based system vs database management system\`
* **Link to copy:** [File-Based vs DBMS Search](https://www.youtube.com/results?search_query=File+based+system+vs+database+management+system)

#### Practical Assignment
1. Map a real-world scenario demonstrating how a data collision occurs in a file-based sharing office.
2. Write a detailed description of each letter in the ACID acronym.`,
        quiz: {
          id: 'q-cs106-l1',
          title: 'DBMS Advantages Quiz',
          questions: [
            {
              id: 'q-cs106-l1-1',
              text: 'Which risk occurs when the same customer address is updated on a shipping file but remains outdated on the accounting file?',
              options: ['Data Redundancy', 'Data Isolation', 'Data Inconsistency', 'Referential Integrity'],
              correctAnswerIndex: 2,
              explanation: 'Data Inconsistency occurs when identical records in different databases show conflicting values.'
            },
            {
              id: 'q-cs106-l1-2',
              text: 'In database systems, what does "D" represent in the ACID guidelines?',
              options: ['Decryption', 'Durability', 'De-duplication', 'De-allocation'],
              correctAnswerIndex: 1,
              explanation: 'Durability guarantees that committed transaction records are safely stored on the physical disk and survive system crashes.'
            }
          ]
        }
      },
      {
        id: 'cs106-l2',
        moduleId: 'mod-cs-106',
        title: '6.2 Relational Database Modeling & Normalization',
        duration: 40,
        youtubeVideoId: 'SFA8SIsG_qY',
        content: `### 6.2 Relational Database Modeling & Normalization

Designing a database schema requires careful modeling of entities and normalizing fields to eliminate duplicate data.

---

#### 1. Entity-Relationship Diagrams (ERDs) and Key Constraints
An ERD models entities as logical boxes, mapping connections (1-to-1, 1-to-Many, Many-to-Many):
* **Primary Key (PK):** A unique identifier for every row in a table.
* **Foreign Key (FK):** A primary key from another table used to establish relationships and enforce referential integrity.

#### 2. The Normalization Formulas
Normalization systematically organizes tables to eliminate redundancy and update anomalies:

#### First Normal Form (1NF)
* Every cell contains Only atomic (single-valued) values.
* No repeating groups or tables of complex arrays.

#### Second Normal Form (2NF)
* Must be in 1NF.
* All non-key columns must depend entirely on the primary key (no partial dependencies on a composite PK).

#### Third Normal Form (3NF)
* Must be in 2NF.
* No transitive dependencies—columns cannot depend on other non-key columns ($A \rightarrow B \rightarrow C$).

---

#### Video Resource Guide
* **YouTube Search:** \`Database normalization 1NF 2NF 3NF computer science\`
* **Link to copy:** [Database Normalization Search](https://www.youtube.com/results?search_query=Database+normalization+1NF+2NF+3NF+computer+science)

#### Practical Assignment
1. Take an unnormalized sales spreadsheet (Customer, Item, ItemPrice, OrderDate, RepName, RepOffice) and normalize it step-by-step into 3NF.
2. Outline why Many-to-Many relationships cannot be implemented directly in relational engines without a junction table.`,
        quiz: {
          id: 'q-cs106-l2',
          title: 'Database Normalization Quiz',
          questions: [
            {
              id: 'q-cs106-l2-1',
              text: 'A database table contains multi-valued, comma-separated lists of tags in a single column. Which normal form does this violate directly?',
              options: ['1NF', '2NF', '3NF', 'BCNF'],
              correctAnswerIndex: 0,
              explanation: 'First Normal Form (1NF) requires all columns to hold atomic, single-valued entries.'
            },
            {
              id: 'q-cs106-l2-2',
              text: 'How is a partial dependency eliminated to satisfy Second Normal Form (2NF)?',
              options: [
                'By splitting multi-valued array columns',
                'By moving partially dependent columns from a composite primary key into a separate table',
                'By removing columns that depend on non-primary key values',
                'By adding index files to all foreign key structures'
              ],
              correctAnswerIndex: 1,
              explanation: '2NF removes partial dependencies, meaning every non-prime column must depend on the full composite primary key, not just a portion of it.'
            }
          ]
        }
      }
    ],
    exam: {
      id: 'ex-cs-106',
      title: 'CS-106 Relational Databases & DBMS Certificate Exam',
      moduleId: 'mod-cs-106',
      timeLimit: 30,
      questions: [
        {
          id: 'ex-cs106-q1',
          text: 'To satisfy Third Normal Form (3NF) requirements, what type of dependency must be completely eliminated from our database schema?',
          options: ['Partial Dependency', 'Transitive Dependency', 'Multi-valued Dependency', 'Functional Dependency'],
          correctAnswerIndex: 1,
          explanation: '3NF mandates that the relation is in 2NF and that no non-prime attribute is transitively dependent on the primary key (no non-key attribute depends on another non-key attribute).'
        },
        {
          id: 'ex-cs106-q2',
          text: 'What kind of database key uniquely identifies rows in another table to establish logical structural cross-references?',
          options: ['Primary Key', 'Candidate Key', 'Foreign Key', 'Alternate Key'],
          correctAnswerIndex: 2,
          explanation: 'A Foreign Key is a field in a relational table that matches the primary key of another table, creating links and enforcing referential integrity.'
        },
        {
          id: 'ex-cs106-q3',
          text: 'What major database anomaly occurs when deleting a row inadvertently deletes secondary critical information about another entity?',
          options: ['Insertion Anomaly', 'Update Anomaly', 'Deletion Anomaly', 'Cascading Index Anomaly'],
          correctAnswerIndex: 2,
          explanation: 'A Deletion Anomaly is a relational hazard where removing key records forces the unintentional deletion of unrelated valuable data.'
        }
      ]
    }
  },
  {
    id: 'mod-cs-107',
    areaId: 'cs-107',
    title: 'Unit 7: Security, Ethics, and Professional Environment',
    description: 'Learn cyber threat profiles, MFA controls, physical system failovers, legislation, and Ubuntu ethical workplace guidelines.',
    libraryLinks: [
      { title: "Network Security Threats and Access Controls", url: "https://www.youtube.com/results?search_query=Network+security+threats+and+access+control+computer+science" },
      { title: "Computer Science Ethics, Laws, and Disaster Recovery", url: "https://www.youtube.com/results?search_query=Computer+science+ethics+laws+and+disaster" }
    ],
    lessons: [
      {
        id: 'cs107-l1',
        moduleId: 'mod-cs-107',
        title: '7.1 Vulnerabilities, Protection, and Access Controls',
        duration: 35,
        youtubeVideoId: 'SFA8SIsG_qY',
        content: `### 7.1 Vulnerabilities, Protection, and Access Controls

We examine security threat profiles and implementation strategies for building robust defensive filters.

---

#### 1. Software Security Exploits & Hazards
Modern systems operate under constant scanning and threat profiles:
* **Malware:** Viruses, worms, trojans, ransomware, and spyware designed to infiltrate and damage resources.
* **SQL Injection (SQLi):** Exploits insecure code that concatenates inputs directly into database queries. Attackers send structured commands to bypass authentication or extract raw tables.
* **Cross-Site Scripting (XSS):** Injects malicious script tags into a website, allowing scripts to execute in target browsers and harvest session data.

#### 2. Defensive Controls
* **Input Validation & Parameterized Queries:** Neutralizes SQLi by separating user inputs from executable SQL logic.
* **Firewalls:** Filters incoming and outgoing network traffic based on preset security rules.
* **Cryptography:** Encrypts data in transit (using protocols like SSL/TLS) and at rest (using AES-256 blocks) to defend against packet sniffing and physical leaks.

#### 3. Access Auditing Systems
* **Multi-Factor Authentication (MFA):** Requires users to verify their identity with multiple independent proofs:
  * *Something you know* (password).
  * *Something you have* (OTP token, mobile authenticator).
  * *Something you are* (fingerprint, Face ID).
* **Least Privilege Access:** Restricts permissions so that users and applications have only the minimum access necessary to perform their roles.

---

#### Video Resource Guide
* **YouTube Search:** \`Network security threats and access control computer science\`
* **Link to copy:** [Access Control Search](https://www.youtube.com/results?search_query=Network+security+threats+and+access+control+computer+science)

#### Practical Assignment
1. Compare symmetric and asymmetric encryption based on key sharing requirements and computational performance.
2. Explain how a parameterized query prevents SQL injection attacks.`,
        quiz: {
          id: 'q-cs107-l1',
          title: 'Cyber Security Controls Quiz',
          questions: [
            {
              id: 'q-cs107-l1-1',
              text: 'How does parameterization prevent SQL Injection attacks?',
              options: [
                'By converting SQL code into binary sequences',
                'By treating user input strictly as non-executable values, rather than executable commands',
                'By blocking all incoming SQL queries on the web firewall',
                'By encrypting physical database storage files'
              ],
              correctAnswerIndex: 1,
              explanation: 'Parameterized queries compile the SQL instruction set first, treating user parameters strictly as data values, preventing them from running as database command blocks.'
            },
            {
              id: 'q-cs107-l1-2',
              text: 'Which authentication factor classification represents an automated fingerprint reader check?',
              options: [
                'Something you know',
                'Something you have',
                'Something you are',
                'Something you remember'
              ],
              correctAnswerIndex: 2,
              explanation: 'Biometric identifiers (fingerprints, face scans, retinas) represent "Something you are".'
            }
          ]
        }
      },
      {
        id: 'cs107-l2',
        moduleId: 'mod-cs-107',
        title: '7.2 Cyber Legislation, Ethics, and Disaster Recovery',
        duration: 35,
        youtubeVideoId: 'SFA8SIsG_qY',
        content: `### 7.2 Cyber Legislation, Ethics, and Disaster Recovery

Professional software systems must operate in harmony with legal standards, ecological responsibilities, and cultural/ethical ideals (Unhu/Ubuntu).

---

#### 1. Professional Ethics & Code of Conduct
* **Unhu / Ubuntu Principle:** A cultural fabric guiding collective responsibility, respect for data privacy, and ethical development. In computer science, this translates into promoting digital inclusion, building accessible software, protecting children online, and avoiding predatory algorithms.
* **Professional Associations:** Organizations like ACM, IEEE, and BCS provide guidelines for professional responsibility, software quality, and security auditing.

#### 2. Legal Systems & Hardware Ecology
* **Data Protection Laws:** Regulations (e.g., GDPR, CCPA) that enforce strict data privacy rules and restrict how student/customer logs are tracked and analyzed.
* **Intellectual Property Rights:** Protects software creations using patents, copyrights, and open-source licenses.
* **E-Waste Management:** Focuses on the ecological recycling of redundant silicon and hardware components to minimize heavy metal pollution.

#### 3. Disaster Recovery Engineering
Disasters happen; we must build resilient architectures:
* **Recovery Point Objective (RPO):** The maximum tolerable volume of data loss, measured in time.
* **Recovery Time Objective (RTO):** The maximum target duration for restoring full operational capacity after an outage.
* **Backup Strategies:**
  * *Full Backup:* Complete copy of all system data. Slowest to run, fastest to restore.
  * *Incremental Backup:* Backs up only data that has changed since the *last backup* of any kind. Fastest to run, slowest to restore.
  * *Differential Backup:* Backs up only data that has changed since the last *full backup*. Balanced run/restore speeds.

---

#### Video Resource Guide
* **YouTube Search:** \`Computer science ethics laws and disaster recovery\`
* **Link to copy:** [Legislation & Recovery Search](https://www.youtube.com/results?search_query=Computer+science+ethics+laws+and+disaster+recovery)

#### Practical Assignment
1. Compare Incremental and Differential backup strategies based on backup window duration and restoration speed.
2. Outline how the Unhu/Ubuntu framework applies to automated data harvesting and privacy boundaries.`,
        quiz: {
          id: 'q-cs107-l2',
          title: 'Ethics & Disaster Recovery Quiz',
          questions: [
            {
              id: 'q-cs107-l2-1',
              text: 'What represents the primary goal of the Recovery Point Objective (RPO) within disaster planning?',
              options: [
                'The total financial cost of a hardware backup system',
                'Defining the maximum tolerable volume of data loss, measured in time since the last backup',
                'Setting the maximum time allowed to bring servers back online after an outage',
                'Limiting the number of physical drives active during a failover'
              ],
              correctAnswerIndex: 1,
              explanation: 'RPO defines how much data (measured in time, e.g., 4 hours of data loss) a company can tolerate losing when recovering from a backup.'
            },
            {
              id: 'q-cs107-l2-2',
              text: 'Which backup strategy copies only files modified since the last backup of ANY kind, resetting the archive bit?',
              options: ['Full Backup', 'Incremental Backup', 'Differential Backup', 'Asynchronous Mirror'],
              correctAnswerIndex: 1,
              explanation: 'Incremental backups save only files changed since the last backup of any kind, resulting in quick backups but a more complex restoration process.'
            }
          ]
        }
      }
    ],
    exam: {
      id: 'ex-cs-107',
      title: 'CS-107 Security, Ethics & Governance Certificate Exam',
      moduleId: 'mod-cs-107',
      timeLimit: 30,
      questions: [
        {
          id: 'ex-cs107-q1',
          text: 'Under the Unhu/Ubuntu ethics philosophy applied in computational workspaces, what represents the primary duty of an engineer?',
          options: [
            'Minimizing corporate software backup budgets at all costs',
            'Prioritizing community-centered development, data privacy, respect for human relationships, and ethical professional conduct',
            'Acquiring absolute monopoly patents over open-source platforms',
            'Bypassing national privacy regulations to double database throughput'
          ],
          correctAnswerIndex: 1,
          explanation: 'Ubuntu or Unhu ethics translates to "I am because we are," focusing heavily on collaborative impact, human dignity, respect for customers, and open ethical systems.'
        },
        {
          id: 'ex-cs107-q2',
          text: 'An engineering team establishes a disaster recovery target stating that the service must be restored within 2 hours of an outage. What metric is being defined?',
          options: ['Recovery Point Objective (RPO)', 'Recovery Time Objective (RTO)', 'Mean Time Between Failures (MTBF)', 'Disaster Response Protocol (DRP)'],
          correctAnswerIndex: 1,
          explanation: 'RTO (Recovery Time Objective) represents the maximum acceptable duration of time within which a systems architecture must be fully restored after an outage.'
        },
        {
          id: 'ex-cs107-q3',
          text: 'How does an engineer prevent catastrophic SQL injection (SQLi) attacks on input-enabled relational database interfaces?',
          options: [
            'Removing the backend firewall rules completely',
            'Employing parameterized queries and prepared statements to separate SQL commands from user input variables',
            'Applying binary sign-and-magnitude conversions to the frontend UI',
            'Compressing all input forms via zip standards'
          ],
          correctAnswerIndex: 1,
          explanation: 'Parameterized queries compile the SQL statement before inserting input parameters, treating active user input strictly as a safe literal rather than executable database commands.'
        }
      ]
    }
  },
  {
    id: 'mod-cs-108',
    areaId: 'cs-108',
    title: 'Unit 8: Technology Enterprising & E-Commerce',
    description: 'Learn e-business models, automated payment integration flows, technical specifications, and MVP proposal designs.',
    libraryLinks: [
      { title: "E-Commerce Models (B2B, B2C, C2C) & Logistical Channels", url: "https://www.youtube.com/results?search_query=E+commerce+models+B2B+B2C+C2C+explanation" },
      { title: "How to Write a Software Project Business Proposal", url: "https://www.youtube.com/results?search_query=How+to+write+a+software+project+business+proposal" }
    ],
    lessons: [
      {
        id: 'cs108-l1',
        moduleId: 'mod-cs-108',
        title: '8.1 E-Business vs. E-Commerce Models',
        duration: 35,
        youtubeVideoId: 'SFA8SIsG_qY',
        content: `### 8.1 E-Business vs. E-Commerce Models

We explore how web architectures and APIs drive online monetization and power complex transaction pipelines.

---

#### 1. Core transactional models
* **Business-to-Business (B2B):** Companies selling to other companies (e.g., Stripe providing developer APIs to software platforms).
* **Business-to-Consumer (B2C):** Businesses selling directly to end-users (e.g., purchasing educational courses on an online platform).
* **Consumer-to-Consumer (C2C):** Individuals selling to other individuals through platforms (e.g., eBay, Craigslist).

#### 2. E-Commerce Architecture & Payment Gateways
A typical online checkout workflow involves:
1. **The Client (Browser):** The user clicks "Checkout" which tokens are passed to secure checkout routes.
2. **The Merchant Server:** An API route proxies transactions to a third-party gateway to keep sensitive API keys hidden from the client.
3. **The Payment Gateway:** Secures and processes card networks safely, utilizing cryptography and PCI-DSS compliance checks.
4. **The Webhook:** The gateway broadcasts asynchronous events to update the database state when a transaction succeeds.

---

#### Video Resource Guide
* **YouTube Search:** \`E commerce models B2B B2C C2C explanation\`
* **Link to copy:** [E-Commerce Search](https://www.youtube.com/results?search_query=E+commerce+models+B2B+B2C+C2C+explanation)

#### Practical Assignment
1. Draw a sequence diagram mapping the connection paths between a Client, Merchant App, Stripe API, and Webhooks during a checkout session.
2. Explain the role of a webhook in managing asynchronous payment events.`,
        quiz: {
          id: 'q-cs108-l1',
          title: 'E-Commerce Pipelines Quiz',
          questions: [
            {
              id: 'q-cs108-l1-1',
              text: 'Which transactional pipeline model is demonstrated when a web platform sells API subscription tiers directly to corporate developers?',
              options: ['B2C', 'C2C', 'B2B', 'G2C'],
              correctAnswerIndex: 2,
              explanation: 'Enterprise to enterprise transactions represent B2B (Business-to-Business) pipelines.'
            },
            {
              id: 'q-cs108-l1-2',
              text: 'Why do payment gateways depend on webhooks to complete transaction workflows?',
              options: [
                'To convert currencies in real-time',
                'To securely compile SQL instructions',
                'To asynchronously notify the merchant server of event completions, like successful card captures',
                'To generate local browser security certificates'
              ],
              correctAnswerIndex: 2,
              explanation: 'Webhooks are automated HTTP call-and-response hooks that notify your merchant server of asynchronous payment completions.'
            }
          ]
        }
      },
      {
        id: 'cs108-l2',
        moduleId: 'mod-cs-108',
        title: '8.2 Business Proposal & Software Document Creation',
        duration: 35,
        youtubeVideoId: 'mNAsE6T0Gf0',
        content: `### 8.2 Business Proposal & Software Document Creation

Building software requires more than writing code—we must define clear project requirements, estimate budgets, and draft compelling technical proposals.

---

#### 1. Minimum Viable Product (MVP) Scope
An MVP is the simplest playable release of a product featuring only the essential elements needed to validate features, establish proof of value, and gather early feedback.

#### 2. Key Components of a Technical Proposal
* **Problem Statement:** Establishes the real-world problem or inefficiency to be solved.
* **Proposed Solution:** Describes how the proposed software addresses the problem.
* **Scope of Work (SoW):** Outlines specific inclusions, exclusions, and functional boundaries to prevent scope creep.
* **Budget & Resources:** Estimated expenditures, hardware costs, and software licensing.
* **Project Timeline:** A Gantt chart mapping milestones, development phases, and integration checks.

#### 3. Software Requirements Specification (SRS)
An SRS is the official manual that guides development:
* **Functional Requirements:** What the software must do (e.g., "The platform must email an invoice within 30 seconds of a successful purchase").
* **Non-Functional Requirements:** How the system performs (e.g., "The page loading speed must remain below 2 seconds under a load of 5,000 active sessions").

---

#### Video Resource Guide
* **YouTube Search:** \`How to write a software project business proposal\`
* **Link to copy:** [Business Proposals Search](https://www.youtube.com/results?search_query=How+to+write+a+software+project+business+proposal)

#### Practical Assignment
1. Draft a complete 2-page Technical Proposal for building a real-time hospital check-in app. Define target segments, budget tables, and RTO failovers.
2. Differentiate functional requirements from non-functional requirements.`,
        quiz: {
          id: 'q-cs108-l2',
          title: 'Project Documents Quiz',
          questions: [
            {
              id: 'q-cs108-l2-1',
              text: 'Which criteria represents a NON-functional requirement within an SRS document?',
              options: [
                'The system must send recovery passwords via SMS',
                'The application database must run automatic daily backup schedules',
                'Page loading speeds must remain below 1.5 seconds under a concurrent user load of 10k players',
                'Users must accept Terms of Service agreement rules before logging in'
              ],
              correctAnswerIndex: 2,
              explanation: 'Non-functional requirements specify quality, performance, or speed characteristics (e.g., maintaining load times below 1.5s), while functional requirements define specific behaviors or actions.'
            },
            {
              id: 'q-cs108-l2-2',
              text: 'What constitutes the main driver for releasing a Minimum Viable Product (MVP)?',
              options: [
                'To maximize upfront profit margins',
                'To test feature viability, collect user feedback, and validate viability with minimal resources',
                'To bypass security compliance procedures',
                'To replace the need for an formal SRS document'
              ],
              correctAnswerIndex: 1,
              explanation: 'Releasing an MVP allows teams to test their product in the wild, collect real user feedback, and iterate quickly with minimal waste.'
            }
          ]
        }
      }
    ],
    exam: {
      id: 'ex-cs-108',
      title: 'CS-108 Technology Enterprising & E-Commerce Exam',
      moduleId: 'mod-cs-108',
      timeLimit: 30,
      questions: [
        {
          id: 'ex-cs108-q1',
          text: 'Which document specifies the comprehensive technical and operational parameters of a proposed system, acting as a binding contract between developers and clients?',
          options: ['User Manual', 'Software Requirements Specification (SRS)', 'Product Backlog', 'System Architecture Design (SAD)'],
          correctAnswerIndex: 1,
          explanation: 'The SRS defines all functional and non-functional requirements of the software system, acting as the ultimate source of truth.'
        },
        {
          id: 'ex-cs108-q2',
          text: 'What represents a transaction-based monetization model within dynamic e-commerce pipelines?',
          options: [
            'Charging users a static monthly recurring subscription cost irrespective of system use',
            'Earning commissions or fees directly proportional to the value of processed network sales transactions',
            'Releasing software entirely free of charge with zero secondary services',
            'Selling the physical server hardware itself'
          ],
          correctAnswerIndex: 1,
          explanation: 'Transaction pricing charges a client per-action or takes a predefined percentage cut out of every transaction processed through the platform.'
        },
        {
          id: 'ex-cs108-q3',
          text: 'In commercial software proposals, why is a Service Level Agreement (SLA) included?',
          options: [
            'To bypass local cyber laws',
            'To guarantee system performance standards (e.g., 99.9% uptime) and detail legal recourse if thresholds are not met',
            'To override existing code files',
            'To estimate the overall budget of writing code'
          ],
          correctAnswerIndex: 1,
          explanation: 'An SLA is a formal business agreement detailing system reliability expectations, uptime stats, response times, and financial credits if targets are missed.'
        }
      ]
    }
  }
];
