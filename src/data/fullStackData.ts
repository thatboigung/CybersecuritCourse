import { RoadmapArea, Module } from '../types';

export const FULL_STACK_ROADMAP_AREAS: RoadmapArea[] = [
  {
    id: 'fs-201',
    name: 'Foundations of the Web & Static Interfaces',
    description: 'Mastering the core visual blocks of the internet, semantic document structures, and CSS styling layouts.',
    icon: 'Globe',
    color: 'blue',
    courseGroup: 'full_stack'
  },
  {
    id: 'fs-202',
    name: 'Client-Side Programmatic Logic & Package Ecosystems',
    description: 'Injecting dynamic operational logic into interfaces and working with modular code dependencies via npm.',
    icon: 'Code',
    color: 'indigo',
    courseGroup: 'full_stack'
  },
  {
    id: 'fs-203',
    name: 'Modern Frontend Frameworks & Utility Styling',
    description: 'Building single-page component architectures with React and fast utility styling with Tailwind CSS.',
    icon: 'Smartphone',
    color: 'violet',
    courseGroup: 'full_stack'
  },
  {
    id: 'fs-204',
    name: 'Backend Systems Engineering & Command Line Automation',
    description: 'Transitioning to server-side environments, writing custom automated scripts, and structural database designs.',
    icon: 'Server',
    color: 'emerald',
    courseGroup: 'full_stack'
  },
  {
    id: 'fs-205',
    name: 'Advanced Application States & API Engineering',
    description: 'Securing routes with JWT, optimizing in-memory storage states with Redis, and complete distributed full-stack lifecycles.',
    icon: 'Database',
    color: 'amber',
    courseGroup: 'full_stack'
  },
  {
    id: 'fs-206',
    name: 'DevOps Engineering & Cloud Infrastructures',
    description: 'Setting up Linux host servers, creating VPC networks, routing domains with Route53, and managing core AWS objects.',
    icon: 'Cloud',
    color: 'rose',
    courseGroup: 'full_stack'
  },
  {
    id: 'fs-207',
    name: 'Infrastructure as Code, CI/CD Automation & Telemetry',
    description: 'Programmatically orchestrating server groups with Terraform/Ansible and continuous telemetry monitoring.',
    icon: 'Terminal',
    color: 'cyan',
    courseGroup: 'full_stack'
  }
];

export const FULL_STACK_MODULES: Module[] = [
  {
    id: 'mod-fs-201',
    areaId: 'fs-201',
    title: 'Foundations of the Web & Static Interfaces',
    description: 'Covers semantic layouts, CSS flexbox and grid, Git staging, branch commits, and collaborative conflict resolutions.',
    libraryLinks: [
      {
        title: "HTML & CSS Full Mastery (Part 1)",
        url: "https://www.youtube.com/watch?v=mU6anWqZJcc"
      },
      {
        title: "HTML & CSS Full Mastery (Part 2)",
        url: "https://www.youtube.com/watch?v=G3e-cpL7ofc"
      },
      {
        title: "HTML & CSS Full Mastery (Part 3)",
        url: "https://www.youtube.com/watch?v=1Rs2ND1ryYc"
      },
      {
        title: "Responsive Web Design (Part 1)",
        url: "https://www.youtube.com/watch?v=srvUrASNj0s"
      },
      {
        title: "Responsive Web Design (Part 2)",
        url: "https://www.youtube.com/watch?v=Z4pCqK-V_Wo"
      },
      {
        title: "Git & GitHub Version Control (Part 1)",
        url: "https://www.youtube.com/watch?v=RGOj5yH7evk"
      },
      {
        title: "Git & GitHub Version Control (Part 2)",
        url: "https://www.youtube.com/watch?v=USjZcfj8yxE"
      },
      {
        title: "Git & GitHub Version Control (Part 3)",
        url: "https://www.youtube.com/watch?v=SWYqp7iY_Tc"
      }
    ],
    lessons: [
      {
        id: 'fs201-l1',
        moduleId: 'mod-fs-201',
        title: 'Unit 1: Structural & Stylistic Layouts (HTML & CSS)',
        duration: 30,
        youtubeVideoId: 'mU6anWqZJcc',
        content: `### Lecture Notes: Foundations of Web Structure and Stylistic Presentation

As full stack developers, we must acknowledge that everything visual on the internet starts with markup and style. HTML forms the backbone, while CSS represents the aesthetic blueprint.

---

#### 1. Semantic Document Schemas
To build accessible, SEO-friendly, and maintainable applications, you must use Semantic HTML tags instead of nesting endless generic \`<div>\` containers:
* **\`<header>\`**: Houses promotional headers, navigation bars, and brand identities.
* **\`<nav>\`**: Stores the index navigation links for crawling.
* **\`<main>\`**: Represents the unique, central core document contents.
* **\`<section>\`**: Groupings of related thematic content blocks.
* **\`<article>\`**: Self-contained, independently redistributable text entries (like blog posts or product cards).
* **\`<footer>\`**: Holds copyright symbols, dynamic sitemaps, and terms of service documents.

---

#### 2. Advanced CSS Layout Models
Modern static interfaces demand fluid styling hierarchies. We rely on two primary layouts:
* **CSS Flexbox**: One-dimensional layout container optimized for either a horizontal row or a vertical column. Ideal for align-items centering and justify-content distributions.
* **CSS Grid**: Two-dimensional structural grid system with predefined rows and columns. Excellent for complex dashboards and multi-column bento-grid modules.

---

#### 3. Academic Milestones and Scholar Award
You have earned the **Sovereign Static Web Layout Specialist Milestone** for constructing semantic documents entirely from scratch with impeccable responsive alignment.`,
        quiz: {
          id: 'q-fs201-l1',
          title: 'HTML & CSS Layouts Check',
          questions: [
            {
              id: 'q-fs201-l1-q1',
              text: 'Which HTML element should be preferred to house the main, unique content block of a webpage?',
              options: ['<article>', '<main>', '<div>', '<section>'],
              correctAnswerIndex: 1,
              explanation: 'The <main> element represents the dominant block containing content unique to that specific document, serving as a core semantic landmark.'
            },
            {
              id: 'q-fs201-l1-q2',
              text: 'What layout model is best suited for aligning elements in a single dimension (such as a horizontal navbar)?',
              options: ['CSS Grid', 'Float layouts', 'Absolute positioning', 'CSS Flexbox'],
              correctAnswerIndex: 3,
              explanation: 'CSS Flexbox is designed for one-dimensional layouts, allowing effortless alignment and distribution of space along a single axis.'
            }
          ]
        }
      },
      {
        id: 'fs201-l2',
        moduleId: 'mod-fs-201',
        title: 'Unit 2: Collaborative Workflows & Version Control (Git & GitHub)',
        duration: 25,
        youtubeVideoId: 'RGOj5yH7evk',
        content: `### Lecture Notes: Modern Version Control and Codebase Integration

Programming in an enterprise environment means writing code simultaneously with dozens of developers. To avoid overwriting work, we use Git.

---

#### 1. Core Git Workspaces
Git works with three main code states:
* **Working Directory**: The active sandbox where you edit files local to your storage.
* **Staging Area**: A preparation layer tracker. Running \`git add\` indexes your modifications, ready to be bundled.
* **Local Repository**: Permanent system commit registry. Running \`git commit\` saves a snapshot of your staged files with a unique hash.

---

#### 2. Conflict Resolutions
When two developers modify the exact same line in a file and push to GitHub, a Merge Conflict occurs. True practitioners resolve this by:
1. Inspecting the raw file, searching for standard Git conflict markers (\`<<<<<<\` and \`>>>>>>\`).
2. Selecting which code block to keep, then deleting the markers.
3. Staging and committing the unified, resolved state back up to the remote hub.

---

#### 3. Academic Milestones and Scholar Award
You have earned the **Sovereign VCS Integration Engineer Milestone** for establishing branch commits and resolving upstream code conflicts.`,
        quiz: {
          id: 'q-fs201-l2',
          title: 'Git & Version Control Check',
          questions: [
            {
              id: 'q-fs201-l2-q1',
              text: 'Which command transitions modifications from the working directory into the Git staging area?',
              options: ['git status', 'git add', 'git commit', 'git push'],
              correctAnswerIndex: 1,
              explanation: 'The git add command registers files into the staging index, prepping them to be committed.'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'mod-fs-202',
    areaId: 'fs-202',
    title: 'Client-Side Programmatic Logic & Package Ecosystems',
    description: 'Covers JavaScript event handling, async control loops, and third-party dependency tracking via npm.',
    libraryLinks: [
      {
        title: "JavaScript Full Course (Part 1)",
        url: "https://www.youtube.com/watch?v=PkZNo7MFNFg"
      },
      {
        title: "JavaScript Full Course (Part 2)",
        url: "https://www.youtube.com/watch?v=hdI2bqOjy3c"
      },
      {
        title: "JavaScript Full Course (Part 3)",
        url: "https://www.youtube.com/watch?v=Oe421EPjeBE"
      },
      {
        title: "DOM Manipulation & Browser Logic (Part 1)",
        url: "https://www.youtube.com/watch?v=0ik6X4DJKCc"
      },
      {
        title: "DOM Manipulation & Browser Logic (Part 2)",
        url: "https://www.youtube.com/watch?v=Ukg_U3CnJWI"
      },
      {
        title: "npm & Node Package Ecosystem Basics (Part 1)",
        url: "https://www.youtube.com/watch?v=O6P86uwfdR0"
      },
      {
        title: "npm & Node Package Ecosystem Basics (Part 2)",
        url: "https://www.youtube.com/watch?v=jHDhaSSKmB0"
      }
    ],
    lessons: [
      {
        id: 'fs202-l1',
        moduleId: 'mod-fs-202',
        title: 'Unit 1: Dynamic Interface Execution (JavaScript)',
        duration: 35,
        youtubeVideoId: 'hdI2bqOjy3c',
        content: `### Lecture Notes: Dynamic Logic Pipelines & Asynchronous Loops

JavaScript is the scripting engine of the browser. It breathes life into static HTML markup by letting elements respond to mouse interactions, database fetching, and user events.

---

#### 1. The Core Event Loop
JavaScript runs on a single thread. It uses an **Asynchronous Event Loop** to handle time-consuming database fetches or animations without freezing the screen:
* **Call Stack**: Records the line coordinates currently being active.
* **Web APIs**: The browser handles intensive background operations (like \`fetch\` networks) off-thread.
* **Callback Queue**: Holds functions waiting to execute once the main stack is empty.

---

#### 2. Promised Pipelines
Modern code handles asynchronous results using **Promises** or **async/await** blocks. This keeps code readable and prevents nested "callback hell":
\`\`\`js
async function loadUserData() {
  try {
    const response = await fetch('/api/user');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch failure:', error);
  }
}
\`\`\`

---

#### 3. Academic Milestones and Scholar Award
You have earned the **Sovereign Client-side Logic Engineer Milestone** for compiling dynamic DOM event loops with async promises.`,
        quiz: {
          id: 'q-fs202-l1',
          title: 'JavaScript Execution Check',
          questions: [
            {
              id: 'q-fs202-l1-q1',
              text: 'How does the JavaScript single-threaded runtime avoid freezing the UI during intensive Network requests?',
              options: ['By spawning secondary guest operating kernels', 'By using the asynchronous Event Loop and Web APIs', 'By disabling layout execution loops', 'By force-rebooting active DOM branches'],
              correctAnswerIndex: 1,
              explanation: 'JavaScript offloads intensive async operations to Web APIs, returning callbacks to the queue only when tasks complete.'
            }
          ]
        }
      },
      {
        id: 'fs202-l2',
        moduleId: 'mod-fs-202',
        title: 'Unit 2: Modular Dependency Ecosystems (npm)',
        duration: 20,
        youtubeVideoId: 'O6P86uwfdR0',
        content: `### Lecture Notes: Node Package Manager and Modular Implementations

Rather than writing database drivers or visual chart graphics by hand, engineers install prepackaged libraries via npm.

---

#### 1. package.json and package-lock.json
* **package.json**: The primary project outline declaration. Records general metadata, custom build scripts, and direct dependencies with version offsets.
* **package-lock.json**: Records the exact cryptographic hash and nested sub-dependencies of every package installed. This guarantees that your coworkers install the precise same code, avoiding subtle version clashes.

---

#### 2. Academic Milestones and Scholar Award
You have earned the **Sovereign Dependency Integrator Milestone** for declaring, updating, and locking package files.`,
        quiz: {
          id: 'q-fs202-l2',
          title: 'npm Dependency Check',
          questions: [
            {
              id: 'q-fs202-l2-q1',
              text: 'What file guarantees that all developers and build servers install the exact identical sub-dependency tree?',
              options: ['package.json', 'Makefile', 'package-lock.json', 'index.ts'],
              correctAnswerIndex: 2,
              explanation: 'package-lock.json locks down the precise dependency tree and specific version hashes for absolute reproducibility.'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'mod-fs-203',
    areaId: 'fs-203',
    title: 'Modern Frontend Frameworks & Utility Styling',
    description: 'Covers React state hooks, declarative rendering, and rapid Tailwind layout styling.',
    libraryLinks: [
      {
        title: "React Full Course (Part 1)",
        url: "https://www.youtube.com/watch?v=bMknfKXIFA8"
      },
      {
        title: "React Full Course (Part 2)",
        url: "https://www.youtube.com/watch?v=Ke90Tje7VS0"
      },
      {
        title: "React Full Course (Part 3)",
        url: "https://www.youtube.com/watch?v=SqcY0GlETPk"
      },
      {
        title: "React Hooks & State Management (Part 1)",
        url: "https://www.youtube.com/watch?v=O6P86uwfdR0"
      },
      {
        title: "React Hooks & State Management (Part 2)",
        url: "https://www.youtube.com/watch?v=f687hBjwFcM"
      },
      {
        title: "Tailwind CSS Tutorial (Part 1)",
        url: "https://www.youtube.com/watch?v=UBOj6rqRUME"
      },
      {
        title: "Tailwind CSS Tutorial (Part 2)",
        url: "https://www.youtube.com/watch?v=ft30zcMlFao"
      }
    ],
    lessons: [
      {
        id: 'fs203-l1',
        moduleId: 'mod-fs-203',
        title: 'Unit 1: Component-Driven UIs (React)',
        duration: 40,
        youtubeVideoId: 'Ke90Tje7VS0',
        content: `### Lecture Notes: Declarative Interfaces & State Hooks

Traditional web development manually forces raw DOM updates. Modern UI frameworks like React use a declarative approach: you update data state, and the framework automatically updates the elements.

---

#### 1. Core Hooks & Reusable Components
* **Virtual DOM**: React keeps a lightweight replica of the interface, compares state modifications, and renders only changed elements to the real browser screen to optimize speed.
* **useState**: Declares reactive variables that trigger automatic screen updates on mutation.
* **useEffect**: Handles data syncing and subscription loops safely.

---

#### 2. Academic Milestones and Scholar Award
You have earned the **Sovereign Declarative UI Developer Milestone** for rendering responsive virtual component models.`,
        quiz: {
          id: 'q-fs203-l1',
          title: 'React Functional Check',
          questions: [
            {
              id: 'q-fs203-l1-q1',
              text: 'What optimizer does React use to batch updates and avoid sluggish browser paint cycles?',
              options: ['The Virtual DOM', 'The CPU hyperthreading rings', 'Monolithic server calls', 'Local storage buffers'],
              correctAnswerIndex: 0,
              explanation: 'React compares changes within a lightweight Virtual DOM memory tree to compute the absolute minimum real DOM paint operations.'
            }
          ]
        }
      },
      {
        id: 'fs203-l2',
        moduleId: 'mod-fs-203',
        title: 'Unit 2: Rapid Production Layout (Tailwind CSS)',
        duration: 25,
        youtubeVideoId: 'UBOj6rqRUME',
        content: `### Lecture Notes: Utility-First Layout Hierarchies

Instead of writing massive separate CSS files, Tailwind embeds styles directly into your components using semantic markup abbreviations.

---

#### 1. Responsive Prefixes
Designing responsive dashboards is incredibly simple with mobile-first media flags:
* \`w-full\`: Mobile default (full screen).
* \`md:w-1/2\`: Tablet screens (split half width).
* \`lg:w-1/3\`: Large monitors (one-third grid cards).

---

#### 2. Academic Milestones and Scholar Award
You have earned the **Sovereign Utility Styling Master Milestone** for eliminating separate stylesheet files entirely.`,
        quiz: {
          id: 'q-fs203-l2',
          title: 'Tailwind CSS Check',
          questions: [
            {
              id: 'q-fs203-l2-q1',
              text: 'How does Tailwind CSS approach media queries for responsive layouts?',
              options: ['With standalone CSS stylesheets', 'Through media-specific inline HTML tables', 'By utilizing mobile-first breakpoint prefixes (sm:, md:, lg:)', 'Via runtime custom JavaScript checks'],
              correctAnswerIndex: 2,
              explanation: 'Tailwind applies classes in a mobile-first hierarchy, leveraging sm:, md:, and lg: class prefixes to override styles as screens grow.'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'mod-fs-204',
    areaId: 'fs-204',
    title: 'Backend Systems Engineering & Command Line Automation',
    description: 'Covers Node.js server runners, local script deployment, and PostgreSQL relational designs.',
    libraryLinks: [
      {
        title: "Node.js Full Course (Part 1)",
        url: "https://www.youtube.com/watch?v=Oe421EPjeBE"
      },
      {
        title: "Node.js Full Course (Part 2)",
        url: "https://www.youtube.com/watch?v=fBNz5xF-Kx4"
      },
      {
        title: "Express.js Backend APIs (Part 1)",
        url: "https://www.youtube.com/watch?v=L72fhGm1tfE"
      },
      {
        title: "Express.js Backend APIs (Part 2)",
        url: "https://www.youtube.com/watch?v=pKd0Rpw7O48"
      },
      {
        title: "PostgreSQL & SQL Databases (Part 1)",
        url: "https://www.youtube.com/watch?v=qw--VYLpxG4"
      },
      {
        title: "PostgreSQL & SQL Databases (Part 2)",
        url: "https://www.youtube.com/watch?v=HXV3zeQKqGY"
      }
    ],
    lessons: [
      {
        id: 'fs204-l1',
        moduleId: 'mod-fs-204',
        title: 'Unit 1: Server-Side Logic Foundations (Node.js)',
        duration: 30,
        youtubeVideoId: 'Oe421EPjeBE',
        content: `### Lecture Notes: Server-Side JS Engines & CLI Environments

Node.js allows us to run JavaScript outside the browser. This allows us to write server backends, compile local scripts, and interact directly with host systems.

---

#### 1. Non-Blocking I/O
Node.js uses an event-driven, non-blocking I/O model. When reading a five gigabyte file from storage or querying a remote API, Node does not block the thread; it simply fires an event callback when the operation finishes.

---

#### 2. Academic Milestones and Scholar Award
You have earned the **Sovereign System Back-end Architect Milestone** for writing server script pipelines.`,
        quiz: {
          id: 'q-fs204-l1',
          title: 'Node.js Execution Check',
          questions: [
            {
              id: 'q-fs204-l1-q1',
              text: 'Which Engine does Node.js use to compile server-side JavaScript into native machine code?',
              options: ['The Mozilla SpiderMonkey Core', 'The Google V8 Engine', 'The WebKit layout engine', 'The Java VM'],
              correctAnswerIndex: 1,
              explanation: 'Node.js is built on top of Google V8, compiling standard Javascript straight into optimized machine code on the server host.'
            }
          ]
        }
      },
      {
        id: 'fs204-l2',
        moduleId: 'mod-fs-204',
        title: 'Unit 2: Relational Storage Architecture (PostgreSQL)',
        duration: 35,
        youtubeVideoId: 'qw--VYLpxG4',
        content: `### Lecture Notes: Relational Databases, Normalization & SQL Queries

To persist corporate data safely, we use Relational Database Management Systems like PostgreSQL.

---

#### 1. SQL Schema Norms
* **Constraints**: Enforce rules like \`PRIMARY KEY\`, \`FOREIGN KEY\`, and \`UNIQUE\` checks on tables.
* **ACID Transactions**: Guarantees database operations are Atomicity, Consistency, Isolation, and Durability complaint. Either your transaction saves fully or it rolls back completely, preventing data corruption.

---

#### 2. Academic Milestones and Scholar Award
You have earned the **Sovereign Relational Schema Architect Milestone** for modeling ACID-compliant relative table keys.`,
        quiz: {
          id: 'q-fs204-l2',
          title: 'PostgreSQL Architecture Check',
          questions: [
            {
              id: 'q-fs204-l2-q1',
              text: 'Which property guarantees that if a multi-step financial transaction fails in the middle, the datastore rolls back entirely?',
              options: ['Normalization', 'SQL constraints', 'ACID Transactions', 'Foreign Key indexers'],
              correctAnswerIndex: 2,
              explanation: 'ACID guarantees complete rollback (Atomicity) of partial or failed sequence changes.'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'mod-fs-205',
    areaId: 'fs-205',
    title: 'Advanced Application States & API Engineering',
    description: 'Covers RESTful endpoint designs, JWT auth security layers, Redis caching, and integrated distributed states.',
    libraryLinks: [
      {
        title: "REST API Development (Part 1)",
        url: "https://www.youtube.com/watch?v=pKd0Rpw7O48"
      },
      {
        title: "REST API Development (Part 2)",
        url: "https://www.youtube.com/watch?v=7YcW25PHnAA"
      },
      {
        title: "JWT Authentication (Part 1)",
        url: "https://www.youtube.com/watch?v=7Q17ubqLfaM"
      },
      {
        title: "JWT Authentication (Part 2)",
        url: "https://www.youtube.com/watch?v=2jqok-WgelI"
      },
      {
        title: "Redis Caching & Performance (Part 1)",
        url: "https://www.youtube.com/watch?v=Hbt56gFj998"
      },
      {
        title: "Redis Caching & Performance (Part 2)",
        url: "https://www.youtube.com/watch?v=OqCK95AS-YE"
      },
      {
        title: "Redux State Management (Part 1)",
        url: "https://www.youtube.com/watch?v=CVpUuw9XSjY"
      },
      {
        title: "Redux State Management (Part 2)",
        url: "https://www.youtube.com/watch?v=poQXNp9ItL4"
      }
    ],
    lessons: [
      {
        id: 'fs205-l1',
        moduleId: 'mod-fs-205',
        title: 'Unit 1: API Security & Infrastructure Optimization',
        duration: 40,
        youtubeVideoId: 'pKd0Rpw7O48',
        content: `### Lecture Notes: REST API routing, JWT Auth, and Redis Caching

At this advanced level, we must connect our UI cards to secure back-end servers with ultra-low latency.

---

#### 1. RESTful HTTP Endpoints
We route systems using standardized HTTP verbs:
* **\`GET\`**: Retrieve resources from the datastore.
* **\`POST\`**: Submit data to instantiate a new record.
* **\`PUT/PATCH\`**: Overwrite or modify an existing record.
* **\`DELETE\`**: Destroy database records.

---

#### 2. Secure Access with JWT (JSON Web Tokens)
JWT is a stateless, secure authentication standard. A user logs in, and the server signs a cryptographically secure token token containing their payload. The client attaches this to their header, allowing access without the server storing sessions in memory.

---

#### 3. Low-Latency Caching with Redis
To avoid redundant database queries, we cache frequently read key-values in-memory using **Redis**. This reduces data fetching speeds from milliseconds to microseconds.

---

#### 4. Academic Milestones and Scholar Award
You have earned the **Sovereign Full Stack Orchestrator Award** for bundling frontend screens with secure database pipelines, caches, and stateless JWT decoders.`,
        quiz: {
          id: 'q-fs205-l1',
          title: 'API & Secure States Check',
          questions: [
            {
              id: 'q-fs205-l1-q1',
              text: 'Why are JSON Web Tokens (JWT) highly popular compared to traditional session identifiers?',
              options: ['They are stateless and do not require the server to store active sessions in its memory', 'They automatically encrypt all communication packets', 'They compress image files on storage disks', 'They bypass database primary key requirements'],
              correctAnswerIndex: 0,
              explanation: 'Because JWTs contain signed, self-contained verified data payloads, servers can authorize requests stateless without querying a session store.'
            },
            {
              id: 'q-fs205-l1-q2',
              text: 'Which component is best suited for accelerating data speeds by caching key-values in RAM?',
              options: ['PostgreSQL', 'Redis', 'Docker', 'Git LFS'],
              correctAnswerIndex: 1,
              explanation: 'Redis is an in-memory key-value cache, ideal for avoiding slow redundant queries.'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'mod-fs-206',
    areaId: 'fs-206',
    title: 'DevOps Engineering & Cloud Infrastructures',
    description: 'Covers Linux server setup, secure network VPC structures, S3 object storage, and Route53 DNS nameservers.',
    libraryLinks: [
      {
        title: "Linux Basics Tutorial (Part 1)",
        url: "https://www.youtube.com/watch?v=ZtqBQ68cfJc"
      },
      {
        title: "Linux Basics Tutorial (Part 2)",
        url: "https://www.youtube.com/watch?v=IVquJh3DXUA"
      },
      {
        title: "AWS Cloud Full Course (Part 1)",
        url: "https://www.youtube.com/watch?v=KXkQHB9u3vQ"
      },
      {
        title: "AWS Cloud Full Course (Part 2)",
        url: "https://www.youtube.com/watch?v=2LaAJq1lB1Q"
      },
      {
        title: "AWS EC2 + S3 + VPC (Part 1)",
        url: "https://www.youtube.com/watch?v=0X0g6b0jJkQ"
      },
      {
        title: "AWS EC2 + S3 + VPC (Part 2)",
        url: "https://www.youtube.com/watch?v=8U6e5r9w8kQ"
      },
      {
        title: "Route53 & Cloud Deployment (Part 1)",
        url: "https://www.youtube.com/watch?v=3hLmDS179YE"
      },
      {
        title: "Route53 & Cloud Deployment (Part 2)",
        url: "https://www.youtube.com/watch?v=Z3SYDTMP3ME"
      }
    ],
    lessons: [
      {
        id: 'fs206-l1',
        moduleId: 'mod-fs-206',
        title: 'Unit 1: Host Basics & Core AWS Resources',
        duration: 35,
        youtubeVideoId: 'ZtqBQ68cfJc',
        content: `### Lecture Notes: Cloud Architecture & High-Performance Hosting

DevOps is the engineering bridge between code compilation and stable system hosting.

---

#### 1. Isolated VPC Networking
A **Virtual Private Cloud (VPC)** splits cloud storage boundaries:
* **Public Subnets**: House load balancers and domain routing gates.
* **Private Subnets**: Lock down core database and execution containers, completely isolating them from direct visual public internet access.

---

#### 2. AWS DNS Domain Routing & Route53
We map internet domain traffic to hosting containers using **Route53**, resolving human names to remote physical IP targets.

---

#### 3. Academic Milestones and Scholar Award
You have earned the **Sovereign Cloud Deployer Milestone** for hosting full-stack applications behind isolated private network subnets.`,
        quiz: {
          id: 'q-fs206-l1',
          title: 'Cloud Networking Check',
          questions: [
            {
              id: 'q-fs206-l1-q1',
              text: 'In standard cloud engineering, where should core relational databases always be deployed?',
              options: ['To a public subnet directly bound to domain nameservers', 'Within isolated private subnets with no direct incoming public paths', 'On root physical master nodes', 'Inside simple public S3 buckets'],
              correctAnswerIndex: 1,
              explanation: 'Databases should live in private subnets to prevent direct access over the public internet, using bastion hosts or VPC endpoints instead.'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'mod-fs-207',
    areaId: 'fs-207',
    title: 'Infrastructure as Code, CI/CD Automation & Telemetry',
    description: 'Covers Ansible, Terraform architectures, automated GitHub Action commits, and Monit telemetry.',
    libraryLinks: [
      {
        title: "Ansible Automation Tutorial (Part 1)",
        url: "https://www.youtube.com/watch?v=1id6ERvfozo"
      },
      {
        title: "Ansible Automation Tutorial (Part 2)",
        url: "https://www.youtube.com/watch?v=wgQ3rHh3Xk8"
      },
      {
        title: "Terraform Infrastructure as Code (Part 1)",
        url: "https://www.youtube.com/watch?v=SLB_c_ayRMo"
      },
      {
        title: "Terraform Infrastructure as Code (Part 2)",
        url: "https://www.youtube.com/watch?v=YcJ9IeukJL8"
      },
      {
        title: "GitHub Actions CI/CD (Part 1)",
        url: "https://www.youtube.com/watch?v=R8_veQiYBjI"
      },
      {
        title: "GitHub Actions CI/CD (Part 2)",
        url: "https://www.youtube.com/watch?v=RGOj5yH7evk"
      },
      {
        title: "Monitoring & Observability DevOps (Part 1)",
        url: "https://www.youtube.com/watch?v=5s4a0fJmG1Q"
      },
      {
        title: "Monitoring & Observability DevOps (Part 2)",
        url: "https://www.youtube.com/watch?v=Q1a6Q5xk5mM"
      }
    ],
    lessons: [
      {
        id: 'fs207-l1',
        moduleId: 'mod-fs-207',
        title: 'Unit 1: Infrastructure Automation & Telemetry Monitor Systems',
        duration: 40,
        youtubeVideoId: 'SLB_c_ayRMo',
        content: `### Lecture Notes: Code-Driven Systems & Automated Deployment Pipelines

Manual system server configurations are slow and unreliable. Modern web-scale companies treat their entire infrastructure strictly as code.

---

#### 1. Infrastructure as Code (IaC) with Terraform
We outline isolated VM servers, virtual networks, and configurations inside text files. Running \`terraform apply\` instantly provisions identical environments programmatically.

---

#### 2. Automated Telemetry Observability
An application is only as healthy as its live metrics. We deploy systems using **Monit** or prometheus stacks to trace:
* **CPU and Memory Limits**.
* **Direct Network port availability**.
* **Active Disk sector consumption**.

---

#### 3. Academic Milestones and Scholar Award
You have earned the **Sovereign DevOps Lead Milestone** for delivering automated code-to-cloud telemetry pipelines.`,
        quiz: {
          id: 'q-fs207-l1',
          title: 'DevOps & Telemetry Check',
          questions: [
            {
              id: 'q-fs207-l1-q1',
              text: 'What tool allows developers to declare an entire server configuration programmatically via code files?',
              options: ['Monit', 'GitHub Actions', 'Terraform', 'S3 Object Store'],
              correctAnswerIndex: 2,
              explanation: 'Terraform is a widely adopted Infrastructure as Code (IaC) tool used to declare and version cloud resources.'
            }
          ]
        }
      }
    ]
  }
];
