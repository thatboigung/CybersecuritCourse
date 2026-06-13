import { RoadmapArea, Module } from '../types';

export const MATH_ROADMAP_AREAS: RoadmapArea[] = [
  {
    id: 'math-301',
    name: 'Course 301: Discrete Mathematics & Algorithmic Logic',
    description: 'The foundational mathematical language of computer science, data structures, and logical execution paths.',
    icon: 'Split',
    color: 'indigo',
    courseGroup: 'mathematics'
  },
  {
    id: 'math-302',
    name: 'Course 302: Linear Algebra & Multi-Dimensional Spaces',
    description: 'The mathematical engine powering Game Development, 3D Graphics, Computer Vision, and Machine Learning.',
    icon: 'Compass',
    color: 'blue',
    courseGroup: 'mathematics'
  },
  {
    id: 'math-303',
    name: 'Course 303: Calculus & Optimization Functions',
    description: 'Mastering continuous change, rate modeling, and the optimization loops that drive neural network training.',
    icon: 'Percent',
    color: 'rose',
    courseGroup: 'mathematics'
  },
  {
    id: 'math-304',
    name: 'Course 304: Probability & Mathematical Statistics',
    description: 'Modeling uncertainty, analyzing datasets, managing risk, and driving randomized machine learning algorithms.',
    icon: 'BarChart2',
    color: 'amber',
    courseGroup: 'mathematics'
  },
  {
    id: 'math-305',
    name: 'Course 305: Numerical Methods & Computational Mathematics',
    description: 'Bridging theoretical continuous math with the realistic limits, precision barriers, and bit-constraints of digital computers.',
    icon: 'Binary',
    color: 'violet',
    courseGroup: 'mathematics'
  },
  {
    id: 'math-306',
    name: 'Course 306: Cryptographic Mathematics & Number Theory',
    description: 'The discrete mathematical systems, modular arithmetic, and prime number behaviors that secure data and communications.',
    icon: 'Key',
    color: 'emerald',
    courseGroup: 'mathematics'
  },
  {
    id: 'math-307',
    name: 'Course 307: Information Theory & Algorithmic Complexity',
    description: 'Quantifying data compression boundaries, communication throughput limits, and mathematical bounds of algorithm performance.',
    icon: 'Gauge',
    color: 'cyan',
    courseGroup: 'mathematics'
  }
];

export const MATH_MODULES: Module[] = [
  {
    id: 'mod-math-301',
    areaId: 'math-301',
    title: 'Discrete Mathematics & Algorithmic Logic',
    description: 'Master truth tables, Induction checking, combinations, Graph traversals, and structural relational connections.',
    libraryLinks: [
      { title: "Discrete Mathematics Full Video Course", url: "https://www.youtube.com/watch?v=Z7_nMTHROZo" },
      { title: "Graph Theory Advanced Guide", url: "https://www.youtube.com/watch?v=09_LlHjoEiY" },
      { title: "Logic & Proof Techniques Instruction", url: "https://www.youtube.com/watch?v=K8QhGJkD6d8" },
      { title: "Combinatorics & Permutations Explanation", url: "https://www.youtube.com/watch?v=2fA1h6W3K4Q" }
    ],
    lessons: [
      {
        id: 'math301-l1',
        moduleId: 'mod-math-301',
        title: 'Unit 1: Formal Logic & Proof Techniques',
        duration: 30,
        youtubeVideoId: 'K8QhGJkD6d8',
        content: `### Lecture Notes: Discrete Logic and Verification Systems

In the domain of computer science, formal logic operates as both the grammar of execution and the physical schematic of computing cells. Today we formalize how compound conditions resolve and how logical axioms allow us to prove recursive execution correctness.

---

#### 1. Propositional & Predicate Algebra
A proposition is a clean, declarative statement that is strictly either **True** or **False**. We compound statements utilizing operators:
* **Conjunction ($A \\land B$):** Evaluates true only if both operands are true.
* **Disjunction ($A \\lor B$):** Evaluates true if at least one operand is true.
* **Conditional Implication ($A \\implies B$):** Asserts "If A, then B". Evaluates false only under the specific case where $A$ is True and $B$ is False.
* **Quantifiers:** $\\forall$ (Universal: "for all") and $\\exists$ (Existential: "there exists").

#### 2. Induction Verification
To formally guarantee recursive functions or patterns hold across infinite inputs, we utilize **Mathematical Induction**:
1. **Base Case:** Prove the proposition holds true for the smallest valid boundary, e.g., $P(1)$.
2. **Inductive Hypothesis:** Assume the statement holds true for arbitrary positive integer $k$, representing $P(k)$.
3. **Inductive Step:** Show that if $P(k)$ is true, it mathematically guarantees $P(k+1)$ is true. By chain relation, $P(n)$ is true for all $n$.

---

#### 3. Applied Scholar Milestones
You have unlocked the **Discrete Logician Scholar Milestone** for verifying logical implication gates and validating recursive loops via structural mathematical induction.`,
        quiz: {
          id: 'q-math301-l1',
          title: 'Formal Logic Check',
          questions: [
            {
              id: 'q-m301-l1-1',
              text: 'Under what specific condition does the logical implication statement (A ⟹ B) evaluate to FALSE?',
              options: ['A is False, B is False', 'A is True, B is False', 'A is False, B is True', 'A is True, B is True'],
              correctAnswerIndex: 1,
              explanation: 'An implication (A ⟹ B) is only false when the hypothesis A is true, but the conclusion B is false.'
            },
            {
              id: 'q-m301-l1-2',
              text: 'What are the three structural steps required in a proof by Mathematical Induction?',
              options: ['Construct a Truth Table, minimize terms, select gates', 'State Hypothesis, query options, construct bounds', 'Prove Base Case, assume Inductive Hypothesis, complete Inductive Step', 'Declare sets, evaluate mapping, check bijection'],
              correctAnswerIndex: 2,
              explanation: 'Mathematical Induction requires proving a base case, assuming the hypothesis for k, and checking that this guarantees the statement for k+1.'
            }
          ]
        }
      },
      {
        id: 'math301-l2',
        moduleId: 'mod-math-301',
        title: 'Unit 2: Set Theory, Combinatorics & SQL Joins',
        duration: 35,
        youtubeVideoId: '2fA1h6W3K4Q',
        content: `### Lecture Notes: Computations of Quantities and Set Relations

We look at Set Theory as the formal mathematical logic behind database interactions, and Combinatorics as our calculations of computational feasibility.

---

#### 1. Set Operations and Database Algebra
Sets are unordered collections of distinct items. They map directly onto database table records:
* **Union ($A \\cup B$):** Combines elements of both sets (corresponds to full outer joins).
* **Intersection ($A \\cap B$):** Retains only elements common to both (corresponds to an inner join).
* **Cartesian Product ($A \\times B$):** Couples every element of $A$ with every element of $B$ (representing cross join scalability limits).

#### 2. Pure Counting & Combinatorics
* **Permutations ($P(n, r) = \\frac{n!}{(n-r)!}$):** Selecting $r$ elements from $n$ distinct objects when **order matters**.
* **Combinations ($C(n, r) = \\frac{n!}{r!(n-r)!}$):** Selecting $r$ elements from $n$ distinct objects when **order is irrelevant** (also known as binomial coefficients).
* **Pigeonhole Principle:** If $n$ items are put into $m$ containers, and $n > m$, then at least one container must house more than one item.

---

#### 3. Scholar Recognitions
You have earned the **Set Architect & Combinatorial Strategist Award** for formalizing join indexes and establishing algorithmic search trees.`,
        quiz: {
          id: 'q-math301-l2',
          title: 'Combinatorics Check',
          questions: [
            {
              id: 'q-m301-l2-1',
              text: 'If you need to calculate the number of unique 4-digit PINs containing no repeating numbers, should you use Permutations or Combinations?',
              options: ['Combinations, because order is irrelevant', 'Permutations, because order of the digits matters', 'Direct boolean reduction', 'Euclidean modular indexing'],
              correctAnswerIndex: 1,
              explanation: 'Since the order of the digits within a PIN determines its value (e.g., 1234 is different from 4321), Permutations must be used.'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'mod-math-302',
    areaId: 'math-302',
    title: 'Linear Algebra & Multi-Dimensional Spaces',
    description: 'Command vectors, transformation matrices, dot and cross calculations, and Singular Value factorization.',
    libraryLinks: [
      { title: "Linear Algebra - 3Blue1Brown Full Series", url: "https://www.youtube.com/watch?v=kjBOesZCoqc" },
      { title: "Matrices & Linear Transformations", url: "https://www.youtube.com/watch?v=ZK3O402wf1c" },
      { title: "Eigenvalues & Eigenvectors Tutorial", url: "https://www.youtube.com/watch?v=PFDu9oVAE-g" }
    ],
    lessons: [
      {
        id: 'math302-l1',
        moduleId: 'mod-math-302',
        title: 'Unit 1: Vector Mechanics & Spatial Transforms',
        duration: 35,
        youtubeVideoId: 'ZK3O402wf1c',
        content: `### Lecture Notes: Multi-Dimensional Vectors & Rotational Engines

Linear algebra is the foundational mathematical pipeline for rendering pixel models, structuring image embeddings, and mapping vector coordinates.

---

#### 1. Inner Products & Spatial Rotations
* **Dot Product ($A \\cdot B = \\sum A_i B_i = ||A|| ||B|| \\cos(\\theta)$):** Projects one vector onto another. Directly utilized in graphics shading to evaluate backface culling and calculate light refraction angles.
* **Cross Product ($A \\times B$):** Outputs a vector perpendicular to both input matrices. Essential for establishing orthogonal coordinate systems and normal lighting surfaces.

#### 2. Transformations & Homogeneous Coordinates
To translate, scale, and rotate an object in space continuously, we apply matrix transformations. In computer graphics, we expand 3D coordinates into a 4-dimensional matrix known as **Homogeneous Coordinates**:
$$\\begin{bmatrix} x' \\\\ y' \\\\ z' \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} r_{11} & r_{12} & r_{13} & t_x \\\\ r_{21} & r_{22} & r_{23} & t_y \\\\ r_{31} & r_{32} & r_{33} & t_z \\\\ 0 & 0 & 0 & 1 \\end{bmatrix} \\begin{bmatrix} x \\\\ y \\\\ z \\\\ 1 \\end{bmatrix}$$
This unifies translation and rotation into a single matrix multiplication, which modern GPUs execute with maximum hardware capability.

---

#### 3. Graphic Engineering Designation
You are named a **Master Graphics Spatial Engineer** for structuring matrix transformation systems.`,
        quiz: {
          id: 'q-math302-l1',
          title: 'Spatial Mechanics Quiz',
          questions: [
            {
              id: 'q-m302-l1-1',
              text: 'In graphics rendering, why is the Dot Product of the light source vector and surface normal vector computed?',
              options: ['To scale the geometric size of the surface', 'To compute the diffuse reflection intensity of the surface based on the angle', 'To rotate the coordinate system clockwise', 'To compress the depth coordinates'],
              correctAnswerIndex: 1,
              explanation: 'The dot product measures the cosine of the angle between vectors. When a light beam strikes perpendicular to a surface normal, the diffuse intensity is at its mathematical peak.'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'mod-math-303',
    areaId: 'math-303',
    title: 'Calculus & Optimization Functions',
    description: 'Solve rate-change limits, execute multi-dimensional gradients, and formulate chain backpropagation.',
    libraryLinks: [
      { title: "Calculus Full Course - Essence of Calculus", url: "https://www.youtube.com/watch?v=WUvTyaaNkzM" },
      { title: "Derivative Basics Walkthrough", url: "https://www.youtube.com/watch?v=9vKqVkMQHKk" },
      { title: "Multivariable Calculus Lecture", url: "https://www.youtube.com/watch?v=2K0P6t9JXkA" },
      { title: "Gradient Descent AI Mathematical Framework", url: "https://www.youtube.com/watch?v=sDv4f4s2SB8" }
    ],
    lessons: [
      {
        id: 'math303-l1',
        moduleId: 'mod-math-303',
        title: 'Unit 1: The Gradient & Gradient Descent Optimization',
        duration: 40,
        youtubeVideoId: 'sDv4f4s2SB8',
        content: `### Lecture Notes: Continuous Curvatures & AI Optimization Loops

We look at derivatives as rates of change, and gradients as the vectors tracking steepest ascent across complex multidimensional mathematical hills.

---

#### 1. Rate Change & the Gradient Vector
Within single-variable bounds, derivative $f'(x)$ is the slope of our local tangent line. In multi-dimensional spaces, we assemble partial derivatives across variables into a single vector called **The Gradient ($\" \\nabla f \"$ or \\nabla)**:
$$\\nabla f(x, y) = \\begin{bmatrix} \\frac{\\partial f}{\\partial x} \\\\ \\frac{\\partial f}{\\partial y} \\end{bmatrix}$$
The gradient points towards the direction of the steepest ascent on that surface.

#### 2. Gradient Descent Optimization
To minimize an error or cost function $J(\\theta)$ during parameter training, algorithms calculate the local gradient and move in the **opposite** direction (descending toward the global minimum):
$$\\theta := \\theta - \\alpha \\nabla J(\\theta)$$
*Where $\\alpha$ represents the learning rate scaling variable.*

---

#### 3. Honorific Scholar Milestone
You have unlocked the **Optimization Strategist Scholar Milestone** for formalizing multivariable cost-minimization equations.`,
        quiz: {
          id: 'q-math303-l1',
          title: 'Optimization Quiz',
          questions: [
            {
              id: 'q-m303-l1-1',
              text: 'In optimization algorithms, which direction does the negative gradient vector (-∇f) point?',
              options: ['The direction of steepest local ascent', 'The direction perpendicular to normal trajectories', 'The direction of steepest local descent toward a minimum', 'Along the static horizontal baseline'],
              correctAnswerIndex: 2,
              explanation: 'Since the gradient points toward the fastest increase (ascent) in output value, its negative points toward the fastest local decrease (descent).'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'mod-math-304',
    areaId: 'math-304',
    title: 'Course 304: Probability & Mathematical Statistics',
    description: 'Calculate conditional Bayes risks, map continuous normal bells, and validate statistical features through hypothesis tests.',
    libraryLinks: [
      { title: "Probability Full Course", url: "https://www.youtube.com/watch?v=uzkc-qNVoOk" },
      { title: "Statistics Full Course Series", url: "https://www.youtube.com/watch?v=xxpc-HPKN28" },
      { title: "Bayes Theorem Visualized", url: "https://www.youtube.com/watch?v=HZGCoVF3YvM" },
      { title: "Normal Distribution & Central Limit Theorem", url: "https://www.youtube.com/watch?v=rzFX5NWojp0" }
    ],
    lessons: [
      {
        id: 'math304-l1',
        moduleId: 'mod-math-304',
        title: 'Unit 1: Conditional Risk & Bayes Theorem',
        duration: 30,
        youtubeVideoId: 'HZGCoVF3YvM',
        content: `### Lecture Notes: Probability Foundations & Bayesian Classifiers

Decisions within software engines must commonly resolve under conditions of incomplete data or risk. Today we study conditional probability and evaluate how evidence shifts expectations.

---

#### 1. Conditional Probabilities
Conditional probability measures the probability of an event $A$ occurring given that event $B$ has already occurred:
$$P(A | B) = \\frac{P(A \\cap B)}{P(B)}$$

#### 2. Bayes' Theorem
Bayes' Theorem provides our mathematical blueprint for updating belief systems based on incoming empirical evidence:
$$P(H | E) = \\frac{P(E | H) P(H)}{P(E)}$$
*Where $P(H)$ is our prior probability of hypothesis $H$ without evidence, and $P(H|E)$ is our revised posterior probability.*

In programmatic classifiers (like Naive Bayes search filters), this theorem allows classification of inputs based on independent text features.

---

#### 3. Forensic Scholar Title
You are awarded the **Bayesian Probability Analyst Title** for designing diagnostic risk equations.`,
        quiz: {
          id: 'q-math304-l1',
          title: 'Bayesian Probability Check',
          questions: [
            {
              id: 'q-m304-l1-1',
              text: 'According to Bayes Theorem, what does the term P(H|E) represent?',
              options: ['The prior probability before evidence shifts expectations', 'The posterior probability of hypothesis H being true given that evidence E is observed', 'The absolute sum of event independent variances', 'The probability of observation errors'],
              correctAnswerIndex: 1,
              explanation: 'P(H|E) is the posterior probability: the updated likelihood of the hypothesis being true after taking the context evidence into account.'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'mod-math-305',
    areaId: 'math-305',
    title: 'Course 305: Numerical Methods & Computational Mathematics',
    description: 'Deconstruct sign exponent layouts, troubleshoot standard precision errors, and write stable numerical solvers.',
    libraryLinks: [
      { title: "Numerical Methods & Approximation Techniques", url: "https://www.youtube.com/watch?v=0g1A0p_hCq0" }
    ],
    lessons: [
      {
        id: 'math305-l1',
        moduleId: 'mod-math-305',
        title: 'Unit 1: Computer Float Formats & Floating-Point Limitations',
        duration: 35,
        youtubeVideoId: '0g1A0p_hCq0',
        content: `### Lecture Notes: Digital Precision Limits & Float Failures

Real numbers are mathematically infinite, yet physical computer storage arrays are strictly finite. That friction introduces truncation, rounding, and catastrophic algebraic cancellations.

---

#### 1. IEEE 754 Floating-Point Standard
Most modern processor chips follow the **IEEE 754 standard** for representing real decimal values using bits. A standard 64-bit Double Precision Float allocates bits across:
1. **Sign (1 bit):** Determines whether the output is positive ($0$) or negative ($1$).
2. **Exponent (11 bits):** Magnifies the base scaling factor.
3. **Fraction/Mantissa (52 bits):** Defines the actual fractional precision.

#### 2. Rounding & Floating-Point Anomalies
Because binary numbers cannot precisely map certain periodic base-10 fractions (such as $0.1$ or $0.2$), roundoff errors accumulate. This is why in JavaScript, Python, or C, the logical statement '0.1 + 0.2 === 0.3' evaluates to **False** (the computer instead outputs $0.30000000000000004$).

---

#### 3. IEEE Systems Architect Scholar
You are decorated with the **IEEE Systems Precision Engineer Designation** for mitigating cumulative rounding margins.`,
        quiz: {
          id: 'q-math305-l1',
          title: 'Floating Point Check',
          questions: [
            {
              id: 'q-m305-l1-1',
              text: 'Why does the expression 0.1 + 0.2 != 0.3 register inside standard programming environments?',
              options: ['Because processors run variables sequentially', 'Because periodic base-10 decimals cannot be mapped precisely into finite binary fractions without subtle rounding errors', 'Because sign bits override exponents', 'Because of memory leakages'],
              correctAnswerIndex: 1,
              explanation: 'Decimal decimals without finite binary fractions are truncated inside IEEE 754 float models, which can cause subtle rounding discrepancies.'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'mod-math-306',
    areaId: 'math-306',
    title: 'Course 306: Cryptographic Mathematics & Number Theory',
    description: 'Master modular arithmetic, prime divisors, Euclidean algorithms, and key structures for RSA, Diffie-Hellman, and ECC.',
    libraryLinks: [
      { title: "Modular Arithmetic & RSA Key Generation", url: "https://www.youtube.com/watch?v=7f9v7Q0L5lI" }
    ],
    lessons: [
      {
        id: 'math306-l1',
        moduleId: 'mod-math-306',
        title: 'Unit 1: Modular Arithmetic, primes, and Cryptographic Structures',
        duration: 35,
        youtubeVideoId: '7f9v7Q0L5lI',
        content: `### Lecture Notes: Divisibility Structures & Asymmetric Key Encryptions

Today we explore modular arithmetic, prime numbers, and asymmetric mathematics—the keys to transport layer encryption.

---

#### 1. Modular arithmetic congruence
Two numbers $a$ and $b$ are congruent modulo $n$ ($a \\equiv B \\pmod n$) if their difference is divisible by $n$.
* **Modular Inverses:** A number $x$ is the multiplicative inverse of $a$ modulo $n$ if:
  $$a x \\equiv 1 \\pmod n$$
  Calculated using the **Extended Euclidean Algorithm**.

#### 2. The RSA Encryption Algorithm
RSA relies on the extreme computational difficulty of factorizing massive prime products:
1. **Primes:** Select two massive distinct primes $p$ and $q$. Compute product $n = pq$.
2. **Totient:** Calculate Euler's totient: $\\phi(n) = (p-1)(q-1)$.
3. **Public Component ($e$):** Choose an integer $e$ coprime to $\\phi(n)$ (typically $65537$).
4. **Private Component ($d$):** Calculate the modular inverse $d$ of $e$ mod $\\phi(n)$, so:
   $$e \\cdot d \\equiv 1 \\pmod{\\phi(n)}$$
5. **Mechanics:**
   * **Encryption:** $c = m^e \\pmod n$
   * **Decryption:** $m = c^d \\pmod n$

---

#### 3. Cryptosystems Scholar Designation
You have unlocked the **Sovereign Cryptographic Strategist Milestone** for generating asymmetric prime scales and verifying modular identities.`,
        quiz: {
          id: 'q-math306-l1',
          title: 'Modular Cryptographic Check',
          questions: [
            {
              id: 'q-m306-l1-1',
              text: 'In the RSA algorithm, why is the private exponent d calculated as the modular inverse of the public exponent e?',
              options: ['To allow decryption of ciphertexts generated using e', 'To compute the public key factor', 'To optimize disk storage footprint', 'To select random prime boundaries'],
              correctAnswerIndex: 0,
              explanation: 'Because e and d are modular inverses, raise a ciphertext to the exponent d undoes the encryption operation.'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'mod-math-307',
    areaId: 'math-307',
    title: 'Course 307: Information Theory & Algorithmic Complexity',
    description: 'Formulate Shannon entropy bounds, evaluate Big-O asymptotic limits, and classify NP complex partitions.',
    libraryLinks: [
      { title: "Shannon Entropy & Lossless compression", url: "https://www.youtube.com/watch?v=0ike-qp_6Cq" }
    ],
    lessons: [
      {
        id: 'math307-l1',
        moduleId: 'mod-math-307',
        title: 'Unit 1: Shannon Entropy & Big-O Asymptotic Complexity',
        duration: 40,
        youtubeVideoId: '0ike-qp_6Cq',
        content: `### Lecture Notes: Quantifying Information & Asymptotic Complexity Boundaries

Today we study Shannon Entropy to measure informational randomness, and formalize Big-O notation as the rate of algorithm resource growth.

---

#### 1. Shannon Entropy ($H$)
Shannon Entropy measures the expected informational density of a dataset:
$$H(X) = -\\sum_{i=1}^{n} P(x_i) \\log_2 P(x_i)$$
This outlines the absolute theoretical limit for lossless data compression.

#### 2. Big-O Asymptotic Complexity
Big-O measures the growth rate of algorithm execution time or memory utilization as the input size $n$ approaches infinity:
$$f(n) = O(g(n)) \\iff \\exists c > 0, n_0 > 0 \\text{ s.t. } f(n) \\leq c \\cdot g(n) \\quad \\forall n \\geq n_0$$
*This sets the upper execution boundaries for performance analysis.*

---

#### 3. Information Theorist Designation
You have earned the **Sovereign Information & Algorithmic complexity Analyst Award** for analyzing runtime growth and measuring data entropy.`,
        quiz: {
          id: 'q-math307-l1',
          title: 'Entropy & Complexity Check',
          questions: [
            {
              id: 'q-m307-l1-1',
              text: 'What does Shannon Entropy mathematically measure within a messaging payload?',
              options: ['The total physical transport speed of signals', 'The average level of uncertainty, surprise, or information density contained in the messages', 'The database transaction scale', 'The CPU power usage'],
              correctAnswerIndex: 1,
              explanation: 'Shannon Entropy measures the expected surprise or information density. Higher randomness equals higher entropy.'
            }
          ]
        }
      }
    ]
  }
];
