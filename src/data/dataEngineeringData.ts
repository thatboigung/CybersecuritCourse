import { RoadmapArea, Module } from '../types';

export const DATA_ENGINEERING_ROADMAP_AREAS: RoadmapArea[] = [
  {
    id: 'de-401',
    name: 'Computer Science Foundations & Core Infrastructure',
    description: 'Mastering the underlying operational systems, networking baselines, and data generation mechanics.',
    icon: 'Cpu',
    color: 'blue',
    courseGroup: 'data_engineering'
  },
  {
    id: 'de-402',
    name: 'Database Engineering & Storage Architecture',
    description: 'Processing, modeling, and persisting datasets across transactional and analytical storage engines.',
    icon: 'Database',
    color: 'indigo',
    courseGroup: 'data_engineering'
  },
  {
    id: 'de-403',
    name: 'Data Warehousing, Data Lakes & Modern Analytics',
    description: 'Architecting enterprise analytical platforms, distributed file spaces, and business intelligence views.',
    icon: 'Cloud',
    color: 'violet',
    courseGroup: 'data_engineering'
  },
  {
    id: 'de-404',
    name: 'Big Data Processing, Batch & Stream Engineering',
    description: 'Writing data transformations, managing massive parallel compute loops, and real-time streams.',
    icon: 'Zap',
    color: 'amber',
    courseGroup: 'data_engineering'
  },
  {
    id: 'de-405',
    name: 'Workflow Orchestration & Data Governance',
    description: 'Sequencing complex jobs, quality monitoring, metadata lineages, and compliance controls.',
    icon: 'Split',
    color: 'emerald',
    courseGroup: 'data_engineering'
  },
  {
    id: 'de-406',
    name: 'Containers, DevOps, Cloud Provisioning & Observability',
    description: 'Packaging data structures, orchestrating containers, declaring IaC arrays, and tracing telemetry.',
    icon: 'Activity',
    color: 'rose',
    courseGroup: 'data_engineering'
  },
  {
    id: 'de-407',
    name: 'Machine Learning Operations (MLOps) Foundations',
    description: 'Connecting upstream data channels with live model serving containers and performance monitoring.',
    icon: 'Gauge',
    color: 'cyan',
    courseGroup: 'data_engineering'
  }
];

export const DATA_ENGINEERING_MODULES: Module[] = [
  {
    id: 'mod-de-401',
    areaId: 'de-401',
    title: 'Computer Science Foundations & Core Infrastructure',
    description: 'Hardware interfaces, terminal scripting, version control flow structures, and OSI models.',
    libraryLinks: [
      { title: "Python for Beginners - FreeCodeCamp", url: "https://www.youtube.com/watch?v=rfscVS0vtbw" },
      { title: "Data Structures & Algorithms - FreeCodeCamp", url: "https://www.youtube.com/watch?v=RBSGKlAboiM" },
      { title: "Git & GitHub - Amigoscode", url: "https://www.youtube.com/watch?v=RGOj5yH7evk" },
      { title: "Linux Course - NetworkChuck", url: "https://www.youtube.com/watch?v=wbpDixQZdRw" }
    ],
    lessons: [
      {
        id: 'de401-l1',
        moduleId: 'mod-de-401',
        title: 'Unit 1: Technical Infrastructure & Core Systems',
        duration: 35,
        youtubeVideoId: 'wbpDixQZdRw',
        content: `### Technical Infrastructure & Core Systems

Modern data infrastructure rests on the robustness of lower-level operating systems and networks. In this unit, we detail the core architectural mechanisms.

---

#### 1. Programming Primitives & Core Logic
Highly performant data pipelines depend on type evaluation, memory management, and efficient execution paths:
* **Object-Oriented & Functional programming:** Choosing custom strategies to isolate state changes.
* **Algorithmic Complexity (Big-O):** Calculating execution scaling thresholds of custom transforms.

#### 2. Linux Administration and Version Integrity
* **Bash Scripting & Stream parsers:** Manipulating configuration paths, scheduling tasks, and mining system directories using \`grep\`, \`sed\`, and \`awk\`.
* **Git Version Topologies:** Stabilizing collective commits via clean branching strategies and merge checks.

#### 3. Networking Boundaries
* **OSI 7-Layer Reference:** Analyzing network routers, DNS handchecks, routing routes (TCP vs. UDP), and gateway boundaries.
* **Distributed Systems Theory:** Scaling resources, aligning cluster clocks, and monitoring partition lag rates.`,
        quiz: {
          id: 'q-de401-l1',
          title: 'Infrastructure & Linux Check',
          questions: [
            {
              id: 'q-de401-l1-1',
              text: 'Which stream parsing utility is best suited for columnar data scanning and pattern-action evaluations?',
              options: ['sed', 'awk', 'grep', 'wc'],
              correctAnswerIndex: 1,
              explanation: 'awk is designed as a pattern-directed scanning and processing language, making it highly effective for extraction of text columns.'
            }
          ]
        }
      },
      {
        id: 'de401-l2',
        moduleId: 'mod-de-401',
        title: 'Unit 2: The Data Generation & Ingestion Lifecycle',
        duration: 30,
        youtubeVideoId: 'WXsD0ZgxjXc',
        content: `### The Data Generation & Ingestion Lifecycle

We examine how raw data is captured from sources and delivered into durable entry points.

---

#### 1. Ingestion Source Interfaces
To move records efficiently, we establish ingestion loops mapped against source systems:
* **REST & GraphQL Endpoints:** Extracting JSON payloads from APIs.
* **Change Data Capture (CDC):** Tail-scraping database transaction commit logs.
* **Clickstreams:** Gathering frontend actions, telemetry frames, and event state histories.

#### 2. Collection Dynamics
When dealing with extreme volume, collection layers must actively protect resource boundaries:
* **Memory Buffer Pools:** Compacting and caching payloads to minimize network requests.
* **System Backpressure:** Moderating consumer intake speed to prevent resource exhaustion and buffer overflows on database gateways.`,
        quiz: {
          id: 'q-de401-l2',
          title: 'Ingestion Dynamics Check',
          questions: [
            {
              id: 'q-de401-l2-1',
              text: 'What does system backpressure resolve in an ingestion dataset pipeline?',
              options: ['It accelerates client rendering', 'It prevents consumer stages from being overwhelmed by slower publisher speeds', 'It stops publishers from overloading a consumer by signal slowing to match consumption capacity', 'It enforces static schema migrations'],
              correctAnswerIndex: 2,
              explanation: 'Backpressure is a flow control mechanism that signals to the publisher to slow down when the consuming server runs out of buffer space.'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'mod-de-402',
    areaId: 'de-402',
    title: 'Database Engineering & Storage Architecture',
    description: 'Enforcing transactional ACID principles, index optimization, star mapping, and wide-column NoSQL setups.',
    libraryLinks: [
      { title: "Advanced SQL Course - FreeCodeCamp", url: "https://www.youtube.com/watch?v=HXV3zeQKqGY" },
      { title: "Database Storage & Indexing - Hussein Nasser", url: "https://www.youtube.com/watch?v=0VwCJAn_mY8" },
      { title: "Star vs Snowflake Relational Designs", url: "https://www.youtube.com/watch?v=M3H9vAt2scM" }
    ],
    lessons: [
      {
        id: 'de402-l1',
        moduleId: 'mod-de-402',
        title: 'Unit 1: Relational Systems & SQL Optimizations',
        duration: 35,
        youtubeVideoId: 'HXV3zeQKqGY',
        content: `### Database Systems & Advanced SQL

This unit focuses on advanced techniques inside relational databases to manage high volume while maintaining ACID integrity.

---

#### 1. Advanced SQL Mechanics
Command complex query spaces, construct advanced window analytical operations, and model nested queries:
* **Analytic Windowing:** Leveraging \`PARTITION BY\` and dynamic rows frames to compute running statistics on the fly.
* **Query Execution Plans:** Evaluating query trees, scanning nodes, and identifying where index misses occur.

#### 2. Enforcing ACID Under Strain
* **Atomicity & Consistency:** Assuring a group of operations execute as an indivisible unit.
* **Isolation Levels:** Tuning locks (Read Committed, Repeatable Read, Serializable) to defend against dirty reads and lost updates.

#### 3. Disk Storage Optimization
* **B-Trees vs. Log-Structured Merge (LSM) Trees:** Balancing seek times against write throughput.
* **Vacuuming & Clustering:** Recovering dead heap storage and contiguous grouping of relational data.`,
        quiz: {
          id: 'q-de402-l1',
          title: 'SQL Engineering Optimization',
          questions: [
            {
              id: 'q-de402-l1-1',
              text: 'In relational index engines, what is the primary benefit of LSM-Trees over standard B-Trees?',
              options: ['Faster random point query reads', 'Higher write throughput by transforming random disk writes into structured sequential appends', 'Reduced memory layout requirements', 'Removal of primary key validations'],
              correctAnswerIndex: 1,
              explanation: 'LSM-Trees buffer writes in memory and flush them sequentially to disk, offering significantly faster write performance relative to random B-Tree page rewrites.'
            }
          ]
        }
      },
      {
        id: 'de402-l2',
        moduleId: 'mod-de-402',
        title: 'Unit 2: Analytical schemas & NoSQL Distributions',
        duration: 35,
        youtubeVideoId: 'M3H9vAt2scM',
        content: `### Analytical Data Modeling & Distributed NoSQL

In this unit, we transition from highly normalized transactional designs to optimized analytical data warehousing schemas and non-relational distributed databases.

---

#### 1. Dimensional Schemas
* **Star vs. Snowflake Schema:** Determining when to normalize dimensions to optimize disk layout versus flattening dimensions to reduce computational join costs.
* **Slowly Changing Dimensions (SCD):**
  * *Type 1:* Overwriting prior variables with fresh updates.
  * *Type 2:* Tracking histographical records to capture attribute changes over time (valid start/end dates).
  * *Type 3:* Isolating historical values into sibling columns.

#### 2. Distributed Database Systems & The CAP Limit
* **CAP Theorem:** Demonstrating why a shared network cluster must select between Consistency (C) and Availability (A) during network splits (P).
* **NoSQL Typologies:**
  * *Document (MongoDB):* Organizing index-free JSON collections.
  * *Wide-Column (Cassandra):* Distributing write segments across partition rings without a single central point of failure.
  * *In-Memory (Redis):* Executing low-latency microsecond operations for caching layers.`,
        quiz: {
          id: 'q-de402-l2',
          title: 'Storage Formats & CAP Check',
          questions: [
            {
              id: 'q-de402-l2-1',
              text: 'Under SCD Type 2 guidelines, how is a historic field modification tracked?',
              options: ['By overwriting the current record field immediately', 'By adding a new row with valid start and end system timestamps', 'By converting the entity tree to a NoSQL document', 'By creating a separate index tree shadow'],
              correctAnswerIndex: 1,
              explanation: 'SCD Type 2 handles historical changes by inserting a new version record row alongside active/inactive date flags.'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'mod-de-403',
    areaId: 'de-403',
    title: 'Data Warehousing, Data Lakes & Modern Analytics',
    description: 'Decoupling compute engines, optimizing columnar file partitions, and building interactive BI serving layers.',
    libraryLinks: [
      { title: "What is a Data Warehouse? - Seattle Data Guy", url: "https://www.youtube.com/watch?v=k0MRZ8N8m6E" },
      { title: "AWS S3 Object Deep Dive - Be A Better Dev", url: "https://www.youtube.com/watch?v=e6w9LwZJFIA" },
      { title: "Columnar Storage Formats Explained", url: "https://www.youtube.com/watch?v=7867C_6I68w" },
      { title: "What is a Data Mesh? - Techworld with Nana", url: "https://www.youtube.com/watch?v=s_zS0wV_XwA" }
    ],
    lessons: [
      {
        id: 'de403-l1',
        moduleId: 'mod-de-403',
        title: 'Unit 1: Modern Cloud Data Warehouses & Lakehouses',
        duration: 35,
        youtubeVideoId: 'k0MRZ8N8m6E',
        content: `### Modern Cloud Analytical Storage

Modern analytical environments handle massive volumes of records using decoupled computing resources and compressed, query-optimized file structures.

---

#### 1. Cloud Warehouse Scaling
Modern cloud warehouses (Google BigQuery, Snowflake, and Amazon Redshift) provide immense performance improvements because they decouple compute power from storage limits:
* **Micro-Partitioning & Clustering:** Organizing data by specific keys to skip reading irrelevant blocks.
* **Column-Oriented Storage:** Reading only requested columns to drastically reduce disk I/O.

#### 2. Data Lakehouses & Active Metadata
By layering metadata management tools on top of object storage, lakehouses achieve both scalable, low-cost storage and ACID database guarantees:
* **Delta Lake, Apache Iceberg, Apache Hudi:** Enforcing schemas, executing updates/deletions, and querying historical snapshots (Time Travel querying).
* **Parquet vs. Avro:** Balancing columnar binaries (Parquet, ORC) optimized for reads against row-based schemas (Avro) optimized for streaming writes.`,
        quiz: {
          id: 'q-de403-l1',
          title: 'Lakehouse Schema Check',
          questions: [
            {
              id: 'q-de403-l1-1',
              text: 'Which file serialization format is highly optimized for analytical query reads?',
              options: ['Apache Avro', 'CSV text records', 'Apache Parquet', 'JSON files'],
              correctAnswerIndex: 2,
              explanation: 'Apache Parquet is a compressed, columnar binary storage representation designed for high-efficiency analytical scanning.'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'mod-de-404',
    areaId: 'de-404',
    title: 'Big Data Processing, Batch & Stream Engineering',
    description: 'Developing in-memory transformations with Spark, resolving partition data skewing, and building Kafka streams.',
    libraryLinks: [
      { title: "Hadoop Distributed File System- Edureka", url: "https://www.youtube.com/watch?v=49H_S7un7YQ" },
      { title: "MapReduce & YARN - Simplilearn", url: "https://www.youtube.com/watch?v=SbyZre68U64" },
      { title: "Apache Spark Master Course - FreeCodeCamp", url: "https://www.youtube.com/watch?v=_C8kWso4ne4" },
      { title: "Apache Kafka 101 - Confluent", url: "https://www.youtube.com/watch?v=R873BlNVUB4" }
    ],
    lessons: [
      {
        id: 'de404-l1',
        moduleId: 'mod-de-404',
        title: 'Unit 1: Distributed Computing & Apache Spark',
        duration: 40,
        youtubeVideoId: '_C8kWso4ne4',
        content: `### High-Performance Distributed Computing

When datasets exceed traditional computer limits, workloads are distributed across cluster nodes to run tasks in parallel.

---

#### 1. Apache Spark Architecture
Apache Spark handles parallel processing using active in-memory evaluations, minimizing slow disk read/write cycles:
* **Driver & Executor Nodes:** Coordinating operations, managing variables, and processing partitions.
* **Catalyst Optimizer:** Compiling processing commands into optimized Directed Acyclic Graph (DAG) execution steps.
* **Lazy Evaluation:** Skipping execution until a final action (like saving or counting) is triggered.

#### 2. Tuning & Performance Optimizations
* **Partition Skewing:** Resolving compute bottlenecks caused by unevenly distributed partition keys.
* **Shuffling Mechanics:** Managing network and disk overhead during multi-node data joins.`,
        quiz: {
          id: 'q-de404-l1',
          title: 'Distributed Compute Check',
          questions: [
            {
              id: 'q-de404-l1-1',
              text: 'In Apache Spark, what is the primary benefit of Lazy Evaluation?',
              options: ['It reduces memory usage', 'It allows the Catalyst optimizer to analyze the entire plan and combine tasks for faster execution', 'It skips schema validation', 'It stores copy datasets on the driver node'],
              correctAnswerIndex: 1,
              explanation: 'Lazy evaluation defers executions until an action is called, which lets Spark optimize the logical plan as a unified sequence.'
            }
          ]
        }
      },
      {
        id: 'de404-l2',
        moduleId: 'mod-de-404',
        title: 'Unit 2: Real-Time Event Streaming (Apache Kafka & RabbitMQ)',
        duration: 35,
        youtubeVideoId: 'R873BlNVUB4',
        content: `### Real-Time Event Streaming

This unit focuses on managing millisecond data streams safely using distributed logs and message systems.

---

#### 1. Distributed Log Appends (Apache Kafka)
Kafka acts as a highly scalable, real-time message bus that persists record streams sequentially to disk:
* **Topics & Partition Scales:** Spreading message streams across multiple nodes for high-throughput writes.
* **Consumer Groups & Offsets:** Tracking each modern consumer progress independently to allow parallel stream sharing.
* **Compaction:** Retaining the latest value for a given key over time to optimize storage footprints.

#### 2. Message Brokers (RabbitMQ & AMQP)
For complex routing needs, RabbitMQ manages message queues with precise delivery rules:
* **Exchanges types:** Direct, Fanout, and Topic based target routing.
* **Durability Policies:** Securing transient cues and managing consumer acknowledge flags.`,
        quiz: {
          id: 'q-de404-l2',
          title: 'Event Streaming Architecture',
          questions: [
            {
              id: 'q-de404-l2-1',
              text: 'In Apache Kafka, what is the purpose of partition scaling in topics?',
              options: ['To encode encryption values', 'To enable message delivery to multiple client systems', 'To distribute message writes and consumer execution tracks concurrently across multiple cluster nodes', 'To purge duplicate metadata'],
              correctAnswerIndex: 2,
              explanation: 'Partitions divide topic records across different brokers, allowing many processes to read and write messages in parallel.'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'mod-de-405',
    areaId: 'de-405',
    title: 'Workflow Orchestration & Data Governance',
    description: 'Sequencing pipelines using Airflow, executing quality tests, and tracing sensitive data access paths.',
    libraryLinks: [
      { title: "Apache Airflow Tutorial - Techworld with Nana", url: "https://www.youtube.com/watch?v=DzY2_7bN9B8" },
      { title: "Data Lineage Systems Explained", url: "https://www.youtube.com/watch?v=p49g7Z3ZzY0" }
    ],
    lessons: [
      {
        id: 'de405-l1',
        moduleId: 'mod-de-405',
        title: 'Unit 1: Orchestration, Quality, and Governance',
        duration: 35,
        youtubeVideoId: 'DzY2_7bN9B8',
        content: `### Workflow Orchestration & Data Governance

Data engineering involves complex networks of dependencies. In this unit, we look at orchestration, data quality guarantees, and global access compliance.

---

#### 1. Workflow Orchestration (Apache Airflow & dbt)
Orchestration systems manage the scheduling, sequencing, and monitoring of data pipeline dependencies:
* **Directed Acyclic Graphs (DAGs):** Writing custom schedules with automated retry configurations and failure alerts.
* **Sensor & Event Triggers:** Designing pipelines that wait for external file arrivals or database mutations to trigger downstream runs.

#### 2. Data Quality & Lineage
* **Automated Data Quality Tests:** Enforcing null-value blocks and schema conformance constraints during ingestion.
* **Data Lineage:** Programmatically mapping the origin, transfer points, and modifications of every record.

#### 3. Security & Legal Compliance
* **Masking & Field-Level Decryptions:** Obfuscating database columns containing sensitive user details (PII) to prevent access leaks.
* **Compliance (GDPR / EU AI Act):** Honoring "Right to be Forgotten" deletion schedules and managing data retention policies.`,
        quiz: {
          id: 'q-de405-l1',
          title: 'Governance & Orchestration',
          questions: [
            {
              id: 'q-de405-l1-1',
              text: 'Why are workflow pipelines structured specifically as Directed Acyclic Graphs (DAGs)?',
              options: ['To allow cyclic loops to run continuously', 'To ensure task sequences have clearly defined steps and dependencies without recursive loops', 'To compress deep nested databases', 'To force synchronous multi-threading limits'],
              correctAnswerIndex: 1,
              explanation: 'DAGs ensure tasks flow in a single direction without cyclic references, allowing the scheduler to evaluate and process dependencies predictably.'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'mod-de-406',
    areaId: 'de-406',
    title: 'Containers, DevOps, Cloud Provisioning & Observability',
    description: 'Orchestrating containers with Kubernetes, deploying Terraform environments, and tracking partition lags.',
    libraryLinks: [
      { title: "Docker Tutorial for Beginners - Mosh", url: "https://www.youtube.com/watch?v=pTFZFxd4hOI" },
      { title: "Kubernetes Full Course - Techworld with Nana", url: "https://www.youtube.com/watch?v=X48VuDVv0do" },
      { title: "Terraform Course - FreeCodeCamp", url: "https://www.youtube.com/watch?v=Yclj_PGV_fI" },
      { title: "Prometheus & Grafana - Techworld with Nana", url: "https://www.youtube.com/watch?v=h4Sl21AK9f8" }
    ],
    lessons: [
      {
        id: 'de406-l1',
        moduleId: 'mod-de-406',
        title: 'Unit 1: Infra Automation, Packages, and Observability',
        duration: 35,
        youtubeVideoId: 'pTFZFxd4hOI',
        content: `### Infrastructure Automation & Container Operations

This unit focuses on packaging applications in portable containers and programmatically managing cloud infrastructure resources.

---

#### 1. Container Operations (Docker & Kubernetes)
* **Docker Multi-Stage Builds:** Creating minimized, lightweight container layers to run pipelines predictably.
* **Kubernetes Orchestration:** Deploying container pods, configuring auto-scaling, and managing network connections.

#### 2. Infrastructure as Code (IaC)
* **Terraform & Declarative Configuration:** Programmatically describing and versioning storage buckets, execution clusters, and networks.

#### 3. Monitoring & Observability Telemetry
* **Prometheus & Grafana:** Building dashboards, measuring task durations, and tracking stream consumer lag.
* **Automated Alerting:** Intercepting processing errors and forwarding notifications to debugging channels.`,
        quiz: {
          id: 'q-de406-l1',
          title: 'Infrastructure Ops Check',
          questions: [
            {
              id: 'q-de406-l1-1',
              text: 'What do Multi-Stage builds deliver inside enterprise Docker configurations?',
              options: ['They enable containers to run with root credentials', 'They split storage across multiple host drives', 'They keep the final runtime image isolated and small by excluding build dependencies', 'They bypass internal networking controls'],
              correctAnswerIndex: 2,
              explanation: 'Multi-stage builds let you separate the heavy build tools from the final deployment container, resulting in a smaller and more secure production image.'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'mod-de-407',
    areaId: 'de-407',
    title: 'Machine Learning Operations (MLOps) Foundations',
    description: 'Integrating feature stores, running model inference containers, and verifying training drifts.',
    libraryLinks: [
      { title: "Feature Store Integrations Explained", url: "https://www.youtube.com/watch?v=N6Ue8b3K024" },
      { title: "MLOps Architecture Overview - Techworld with Nana", url: "https://www.youtube.com/watch?v=tgS6tOnn2m0" }
    ],
    lessons: [
      {
        id: 'de407-l1',
        moduleId: 'mod-de-407',
        title: 'Unit 1: Feature Engineering Pipelines & Model Lifecycles',
        duration: 35,
        youtubeVideoId: 'tgS6tOnn2m0',
        content: `### Feature Stores & Model Lifecycle Management

MLOps bridges data engineering with machine learning lifecycles to ensure model inputs are served reliably at scale.

---

#### 1. Unified Feature Stores (Feast, Tecton)
Feature stores act as a central repository to compute, store, and serve clean data features for machine learning models:
* **Offline Storage (Parquet/Warehouse):** Handling high-volume historical features for model training.
* **Online Storage (Redis/Cassandra):** Serving features with low latency for real-time model predictions.

#### 2. ML Lifecycle Automation
* **Artifact Versioning:** Tracking ML model weights alongside the exact data version used for training.
* **Concept Drift Monitoring:** Generating alerts when real-world input data diverges from the training dataset.
* **Automated Retraining:** Triggering container pipelines to retrain models when performance dips are detected.`,
        quiz: {
          id: 'q-de407-l1',
          title: 'MLOps Foundations Check',
          questions: [
            {
              id: 'q-de407-l1-1',
              text: 'In a Feature Store, what is the primary role of the low-latency Online Storage layer?',
              options: ['To archive long-term historical records', 'To serve feature vectors with sub-millisecond speeds during live model predictions', 'To run heavy offline batch computations', 'To compress old model weights'],
              correctAnswerIndex: 1,
              explanation: 'The online storage layer (using tools like Redis or DynamoDB) is optimized to serve pre-computed features to live models immediately.'
            }
          ]
        }
      }
    ]
  }
];
