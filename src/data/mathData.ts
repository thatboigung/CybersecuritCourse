import { RoadmapArea, Module } from '../types';

export const MATH_ROADMAP_AREAS: RoadmapArea[] = [
  {
    id: 'math-301',
    name: 'Advanced Algebra & Proof Matrix',
    description: 'Advanced properties of polynomials, algebraic structural transformations, systems of linear equations, and mathematical induction proofs.',
    icon: 'Grid',
    color: 'indigo',
    courseGroup: 'mathematics'
  },
  {
    id: 'math-302',
    name: 'Geometry and Vectors (2D & 3D)',
    description: 'Extending coordinate geometry, parametric paths, dot/cross vector calculations, and 3D plane configurations.',
    icon: 'Compass',
    color: 'blue',
    courseGroup: 'mathematics'
  },
  {
    id: 'math-303',
    name: 'Sequences, Series, and Binomial Expansions',
    description: 'Mastering arithmetic, geometric, periodic, and infinite progressions, rational expansions, and Maclaurin/Taylor series.',
    icon: 'Shuffle',
    color: 'rose',
    courseGroup: 'mathematics'
  },
  {
    id: 'math-304',
    name: 'Advanced Trigonometry',
    description: 'Developing trigonometric sector properties, small-angle approximation structures, inverse coordinate functions, and identity proofs.',
    icon: 'Activity',
    color: 'amber',
    courseGroup: 'mathematics'
  },
  {
    id: 'math-305',
    name: 'Differential and Integral Calculus',
    description: 'The mathematical core of change, continuous accumulative rates, substitution / integration by parts, and first-order differential variables.',
    icon: 'TrendingUp',
    color: 'violet',
    courseGroup: 'mathematics'
  },
  {
    id: 'math-306',
    name: 'Numerical Methods',
    description: 'Solving complex theoretical root bounds, iterative formulas, the Newton-Raphson method, and trapezoidal estimations.',
    icon: 'Percent',
    color: 'emerald',
    courseGroup: 'mathematics'
  },
  {
    id: 'math-307',
    name: 'Complex Numbers',
    description: 'Expanding normal mathematical calculations with modulus, argument coordinates, loci graphing, and de Moivre\'s exponential roots.',
    icon: 'Sparkles',
    color: 'cyan',
    courseGroup: 'mathematics'
  }
];

export const MATH_MODULES: Module[] = [
  {
    id: 'mod-math-301',
    areaId: 'math-301',
    title: 'Unit 1: Advanced Algebra & Proof Matrix',
    description: 'Decompose rational functions into partial fractions, sketch modulus paths, invert singular matrices, apply mathematical induction, and verify group binary operations.',
    libraryLinks: [
      { title: "ZIMSEC Pure Mathematics Past Papers Search", url: "https://www.youtube.com/results?search_query=ZIMSEC+A+level+pure+mathematics+past+papers" },
      { title: "Induction Proof Mechanics Instruction", url: "https://www.youtube.com/results?search_query=Proof+by+mathematical+induction+A+level+pure+math" }
    ],
    lessons: [
      {
        id: 'math301-l1',
        moduleId: 'mod-math-301',
        title: '1.1 Polynomial Operations, Identities & Partial Fractions',
        duration: 35,
        youtubeVideoId: 'mNAsE6T0Gf0',
        content: `### Study Notes: Polynomial Algebra & Fractional Decompositions

In this section, we master the algebra of polynomial structures, evaluating behavior under factor/remainder theorems, and learning to break high-order quotient fractions into modular partial fractions.

---

#### 1. Polynomials & Remainder Axioms
A polynomial of degree $n$ is defined by:
$$P(x) = a_n x^n + a_{n-1} x^{n-1} + \\dots + a_1 x + a_0$$

* **Factor Theorem:** If $P(c) = 0$, then $(x-c)$ is a factor of $P(x)$.
* **Remainder Theorem:** Dividing polynomial $P(x)$ by $(ax - b)$ yields a static remainder of $P(\\frac{b}{a})$.

#### 2. Partial Fractions Decompositions
To integrate or expand complex rational expressions like $\\frac{P(x)}{Q(x)}$ (where degree of $P$ < degree of $Q$), we decompose them based on the denominator's factors:

* **Linear Factors:** 
  $$\\frac{px + q}{(x - a)(x - b)} = \\frac{A}{x - a} + \\frac{B}{x - b}$$
* **Repeated Linear Factors:**
  $$\\frac{px^2 + qx + r}{(x - a)^2(x - b)} = \\frac{A}{x - a} + \\frac{B}{(x - a)^2} + \\frac{C}{x - b}$$
* **Irreducible Quadratic Factors:**
  $$\\frac{px^2 + qx + r}{(x^2 + a)(x - b)} = \\frac{Ax + B}{x^2 + a} + \\frac{C}{x - b}$$

*Note: If the fraction is improper (degree of numerator $\\ge$ degree of denominator), you MUST first perform algebraic long division.*

---

#### Video Resource Guide
* **YouTube Search:** \`A level math polynomials and partial fractions\`
* **Link to copy:** [https://www.youtube.com/results?search_query=A+level+math+polynomials+and+partial+fractions](https://www.youtube.com/results?search_query=A+level+math+polynomials+and+partial+fractions)

#### Practice Assignment
1. Find the remainder when $2x^3 - x^2 + 5x - 7$ is divided by $(2x - 1)$.
2. Express $\\frac{x + 4}{(x-2)(x^2+1)}$ as partial fractions.`,
        quiz: {
          id: 'q-math301-l1',
          title: 'Polynomials & Fractions Test',
          questions: [
            {
              id: 'q-m301-l1-1',
              text: 'Using the Remainder Theorem, what is the remainder when P(x) = x³ - 3x² + 4x - 5 is divided by (x - 2)?',
              options: ['-5', '-1', '3', '0'],
              correctAnswerIndex: 1,
              explanation: 'P(2) = (2)³ - 3(2)² + 4(2) - 5 = 8 - 12 + 8 - 5 = -1.'
            },
            {
              id: 'q-m301-l1-2',
              text: 'Which partial fraction setup is appropriate for a repeated linear factor in the denominator of the form 1 / [(x-2)² (x+1)]?',
              options: [
                'A/(x-2) + B/(x+1)',
                'A/(x-2) + B/(x-2)² + C/(x+1)',
                '(Ax+B)/(x-2)² + C/(x+1)',
                'A/(x-2)² + B/(x+1)'
              ],
              correctAnswerIndex: 1,
              explanation: 'For repeating linear factors, we must build a ladder of increasing powers: A/(x-2) + B/(x-2)² addition alongside the other factor C/(x+1).'
            }
          ]
        }
      },
      {
        id: 'math301-l2',
        moduleId: 'mod-math-301',
        title: '1.2 Advanced Functions & Modulus Graphing',
        duration: 35,
        youtubeVideoId: 'f07fX_6uP7o',
        content: `### Study Notes: Injections, Composite Mappings, and Modulus Graphing

Analyzing structural relationships, domains, composite mappings, and the behavior of absolute values inside functions.

---

#### 1. Function Classifications
A function $f: X \\to Y$ maps elements from the **Domain** ($X$) to the **Co-domain** ($Y$).

* **Injective (One-to-One):** Every element in the domain maps to a unique element in the co-domain. If $f(a) = f(b)$ then $a = b$.
* **Surjective (Onto):** The Range of the function is identical to its co-domain. Every $y \\in Y$ has some $x \\in X$ such that $f(x) = y$.
* **Bijective:** Both injective and surjective. Only bijective functions possess a well-defined inverse function $f^{-1}(x)$.

#### 2. Composite Functions
To formulate composite $fg(x) = f(g(x))$, the **Range of $g$** must be a subset of the **Domain of $f$**.

#### 3. Modulus Graphics
The modulus symbol $|x|$ represents the absolute magnitude:
$$|f(x)| = \\begin{cases} f(x) & \\text{if } f(x) \\ge 0 \\\\ -f(x) & \\text{if } f(x) < 0 \\end{cases}$$

* To match $y = |f(x)|$, sketch $y = f(x)$ and reflect any negative output parts (below the $x$-axis) upwards.
* To match $y = f(|x|)$, discard the left side of the $y$-axis and reflect the right-hand side over the left-hand side.

---

#### Video Resource Guide
* **YouTube Search:** \`Injective surjective bijective functions A level math\`
* **Link to copy:** [https://www.youtube.com/results?search_query=Injective+surjective+bijective+functions+A+level+math](https://www.youtube.com/results?search_query=Injective+surjective+bijective+functions+A+level+math)

#### Practice Assignment
1. Proving Injectivity: Check if $f(x) = 3x - 5$ is injective for all real numbers.
2. Given $f(x) = e^x$ and $g(x) = x^2 - 1$, state the domain and range of the composite mapping $gf(x)$.`,
        quiz: {
          id: 'q-math301-l2',
          title: 'Functions & Modulus Test',
          questions: [
            {
              id: 'q-m301-l2-1',
              text: 'In pure mathematics, what is the prerequisite requirement for a function f(x) to have a well-defined inverse f⁻¹(x)?',
              options: [
                'It must be a continuous polynomial',
                'It must be onto (surjective) but not necessarily one-to-one',
                'It must be bijective (both injective and surjective)',
                'It must always check positive gradients'
              ],
              correctAnswerIndex: 2,
              explanation: 'An inverse exists if and only if the original mapping represents a bijection (one-to-one and onto), ensuring each target element pairs with exactly one source element.'
            },
            {
              id: 'q-m301-l2-2',
              text: 'If we reflect the parts of the graph of y = f(x) which lie below the x-axis, which modulus function are we plotting?',
              options: ['y = f(|x|)', 'y = |f(x)|', 'y = -|f(x)|', 'y = |f(|x|)|'],
              correctAnswerIndex: 1,
              explanation: 'The function y = |f(x)| transforms all negative values of f(x) into their positive absolute counterparts, effectively reflecting anything below the x-axis upwards.'
            }
          ]
        }
      },
      {
        id: 'math301-l3',
        moduleId: 'mod-math-301',
        title: '1.3 Matrices and Systems of Linear Equations',
        duration: 40,
        youtubeVideoId: 'ZK3O402wf1c',
        content: `### Study Notes: 3D Matrices and Linear Array Transformations

Mastering operations up to $3 \\times 3$, computation of determinants and inverse matrices, and algebraic resolution of systems of equations.

---

#### 1. Operations & Determinants
For a $3 \\times 3$ matrix $A$:
$$A = \\begin{bmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i \\end{bmatrix}$$

The **determinant** is calculated by cofactor expansion along the top row:
$$\\det(A) = |A| = a(ei - fh) - b(di - fg) + c(dh - eg)$$

* If $\\det(A) = 0$, the matrix is **singular** and has no determinant inverse.

#### 2. Finding the Inverse Matrix ($A^{-1}$)
The inverse of a non-singular matrix is computed using:
$$A^{-1} = \\frac{1}{\\det(A)} C^T$$
Where $C^T$ is the **adjugate/transpose of the cofactor matrix**.

#### 3. Solving Linear Arrangements
Systems of equations are written as:
$$AX = B \\implies \\begin{bmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i \\end{bmatrix} \\begin{bmatrix} x \\\\ y \\\\ z \\end{bmatrix} = \\begin{bmatrix} p \\\\ q \\\\ r \\end{bmatrix}$$

If $A$ is non-singular ($|A| \\ne 0$), a unique solutions vector is found using:
$$X = A^{-1}B$$

If $|A| = 0$, the planes either have infinitely many paths (consistent, intersecting in a line/coincident) or have no values in common (inconsistent, parallel planes or triangular block shape).

---

#### Video Resource Guide
* **YouTube Search:** \`Inverse of a 3x3 matrix and simultaneous equations\`
* **Link to copy:** [https://www.youtube.com/results?search_query=Inverse+of+a+3x3+matrix+and+simultaneous+equations](https://www.youtube.com/results?search_query=Inverse+of+a+3x3+matrix+and+simultaneous+equations)

#### Practice Assignment
1. Compute the determinant of the matrix:
   $$M = \\begin{bmatrix} 1 & -2 & 3 \\\\ 3 & 1 & -1 \\\\ -2 & 0 & 2 \\end{bmatrix}$$
2. Solve the linear system using inverse matrix:
   $$x + 2y - z = 4$$
   $$2x - y + z = -1$$
   $$x + y + 2z = 5$$`,
        quiz: {
          id: 'q-math301-l3',
          title: 'Matrix Systems Quiz',
          questions: [
            {
              id: 'q-m301-l3-1',
              text: 'Which statement is true if the determinant of a matrix A equals 0?',
              options: [
                'The matrix is non-singular and has a unique inverse',
                'The matrix is singular and does not have an inverse',
                'All eigenvalues of A must be zero',
                'The equations system AX = B always has exactly one solution'
              ],
              correctAnswerIndex: 1,
              explanation: 'A matrix with a determinant of zero is singular, meaning its columns are linearly dependent, and it has no inverse matrix.'
            }
          ]
        }
      },
      {
        id: 'math301-l4',
        moduleId: 'mod-math-301',
        title: '1.4 Matrix Transformations',
        duration: 35,
        youtubeVideoId: 'ZK3O402wf1c',
        content: `### Study Notes: Linear Mapping Scaling & Matrix Shapes in 2D

Utilizing $2 \\times 2$ matrices to execute enlargement, rotation, reflection, stretch, and shear transformations across the coordinate grid.

---

#### 1. Core Geometric Matrices
We trace modifications using the unit coordinates $I = \\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix}$ and $J = \\begin{bmatrix} 0 \\\\ 1 \\end{bmatrix}$:

* **Enlargement by Scale Factor $k$ centered at origin:**
  $$\\begin{bmatrix} k & 0 \\\\ 0 & k \\end{bmatrix}$$
* **Reflection in the line $y = mx$:**
  Using angle $\\theta = \\arctan(m)$ to origin, or reflection configurations:
  $$\\begin{bmatrix} \\cos 2\\theta & \\sin 2\\theta \\\\ \\sin 2\\theta & -\\cos 2\\theta \\end{bmatrix}$$
* **Rotation through angle $\\theta$ anticlockwise about the origin:**
  $$\\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{bmatrix}$$
* **Stretch with Scale Factor $s$ parallel to the $x$-axis (keeping $y$ constant):**
  $$\\begin{bmatrix} s & 0 \\\\ 0 & 1 \\end{bmatrix}$$
* **Shear with $y$-axis invariant and factor $k$:**
  $$I \\to \\begin{bmatrix} 1 \\\\ k \\end{bmatrix}, J \\to \\begin{bmatrix} 0 \\\\ 1 \\end{bmatrix} \\implies \\begin{bmatrix} 1 & 0 \\\\ k & 1 \\end{bmatrix}$$

#### 2. Determinant Area Scale Factor
The determinant $|M|$ tells us how areas transform:
$$\\text{Area of Image Shape} = |\\det(M)| \\times \\text{Area of Original Shape}$$

* If $\\det(M)$ is negative, the transformation has reversed the geometric orientation of the shape (or handedness).

---

#### Video Resource Guide
* **YouTube Search:** \`Matrix transformations shear stretch reflection A level\`
* **Link to copy:** [https://www.youtube.com/results?search_query=Matrix+transformations+shear+stretch+reflection+A+level](https://www.youtube.com/results?search_query=Matrix+transformations+shear+stretch+reflection+A+level)

#### Practice Assignment
1. Find the matrix representing a reflection in the $x$-axis combined with a shear of factor $3$ parallel to the $x$-axis.
2. A circle of area $5\\pi$ is transformed using $T = \\begin{bmatrix} 2 & 1 \\\\ -3 & 4 \\end{bmatrix}$. Determine the area of the resulting ellipse.`,
        quiz: {
          id: 'q-math301-l4',
          title: 'Spatial Transformations Test',
          questions: [
            {
              id: 'q-m301-l4-1',
              text: 'If a triangle of area 12 is transformed by a matrix with determinant -3, what is the area of the transformed triangle?',
              options: ['-36', '4', '36', '15'],
              correctAnswerIndex: 2,
              explanation: 'Area scale factor is equal to the absolute value of the determinant: |-3| * 12 = 36.'
            }
          ]
        }
      },
      {
        id: 'math301-l5',
        moduleId: 'mod-math-301',
        title: '1.5 Mathematical Induction',
        duration: 30,
        youtubeVideoId: 'U_Y3F8xQdOk',
        content: `### Study Notes: Proof by Induction & Rational Divisibility Sequences

Executing rigorous verification proofs using inductive steps.

---

#### 1. The Operational Inductive Framework
We prove a statement $P(n)$ is true for all positive integers $n \\ge n_0$:

* **I. Base Step:** Prove that the statement holds for the initial starting case $n = n_0$ (typically $n=1$).
* **II. Inductive Assumption Hypothesis:** Assume the statement is true for some arbitrary positive integer $k$, i.e., $P(k)$ is true.
* **III. Inductive Step:** Prove that $P(k+1)$ is true as a mathematical consequence of the assumption.
* **IV. Conclusion:** Since the base case is true, and $P(k) \\implies P(k+1)$, then by induction $P(n)$ holds true for all $n \\in \\mathbb{Z}^+$.

#### 2. Standard Mathematical induction Areas
* **Summation of Terms:**
  Proving: $\\sum_{r=1}^n r = \\frac{1}{2}n(n+1)$ or sequences of series.
* **Divisibility Proofs:**
  Prove $7^n - 2^n$ is divisible by $5$ for all $n \\ge 1$.
* **Matrix Powers:**
  Prove $\\begin{bmatrix} 1 & 1 \\\\ 0 & 1 \\end{bmatrix}^n = \\begin{bmatrix} 1 & n \\\\ 0 & 1 \\end{bmatrix}$.

---

#### Video Resource Guide
* **YouTube Search:** \`Proof by mathematical induction A level pure math\`
* **Link to copy:** [https://www.youtube.com/results?search_query=Proof+by+mathematical+induction+A+level+pure+math](https://www.youtube.com/results?search_query=Proof+by+mathematical+induction+A+level+pure+math)

#### Practice Assignment
1. Prove by induction that $1^2 + 2^2 + \\dots + n^2 = \\frac{1}{6}n(n+1)(2n+1)$ for $n \\in \\mathbb{Z}^+$.
2. Prove that $4^n + 15n - 1$ is divisible by $9$ for all positive integers $n$.`,
        quiz: {
          id: 'q-math301-l5',
          title: 'Inductive Proof Check',
          questions: [
            {
              id: 'q-m301-l5-1',
              text: 'In proving a theorem by induction, what is the crucial core assumption of the Inductive Hypothesis step?',
              options: [
                'We assume the statement holds for all possible numbers inside the domain',
                'We assume the statement is true for the base case only',
                'We assume the statement holds true for some arbitrary integer k',
                'We assume the statement fails at n = k+1'
              ],
              correctAnswerIndex: 2,
              explanation: 'The inductive hypothesis is the assumption that the statement is true for some specific but arbitrary integer k, which is then used to establish correctness for k+1.'
            }
          ]
        }
      },
      {
        id: 'math301-l6',
        moduleId: 'mod-math-301',
        title: '1.6 Groups and Binary Operations',
        duration: 35,
        youtubeVideoId: 'inWWhr5tnEA',
        content: `### Study Notes: Binary Structures & Abstract Group Axioms

Testing algebraic networks under binary operators.

---

#### 1. Binary Operations $(\\mathbb{S}, *)$
A binary operation $*$ combines two elements of a set $\\mathbb{S}$ to output a single value $a * b$.
* **Closure:** For all $a, b \\in \\mathbb{S}$, the result $a * b \\in \\mathbb{S}$.
* **Commutativity:** $a * b = b * a$.
* **Associativity:** $(a * b) * c = a * (b * c)$.
* **Distributivity:** $a * (b + c) = (a * b) + (a * c)$.

#### 2. Group Axioms $(\\mathbb{G}, *)$
A set $\\mathbb{G}$ associated with binary operation $*$ is a mathematical **Group** $(\\mathbb{G}, *)$ if it satisfies four mandatory axioms:

1. **Closure:** If $a, b \\in \\mathbb{G}$, then $a * b \\in \\mathbb{G}$.
2. **Associativity:** If $a, b, c \\in \\mathbb{G}$, then $(a * b) * c = a * (b * c)$.
3. **Identity Element ($e$):** There exists an element $e \\in \\mathbb{G}$ such that $a * e = e * a = a$ for all $a \\in \\mathbb{G}$.
4. **Inverse Elements ($a^{-1}$):** If $a \\in \\mathbb{G}$, there is some $a^{-1} \\in \\mathbb{G}$ such that $a * a^{-1} = a^{-1} * a = e$.

* **Abelian Group:** A group where the operation is also **commutative** ($a * b = b * a$).

---

#### Video Resource Guide
* **YouTube Search:** \`Binary operations and group theory pure math\`
* **Link to copy:** [https://www.youtube.com/results?search_query=Binary+operations+and+group+theory+pure+math](https://www.youtube.com/results?search_query=Binary+operations+and+group+theory+pure+math)

#### Practice Assignment
1. Is the set of odd integers closed under addition? Explain.
2. Verify if the set $\\{1, -1, i, -i\\}$ forms an Abelian group under complex multiplication.`,
        quiz: {
          id: 'q-math301-l6',
          title: 'Group Theory Test',
          questions: [
            {
              id: 'q-m301-l6-1',
              text: 'Which of the following describes the commutative abstract property of a group operator?',
              options: [
                'a * (b * c) = (a * b) * c',
                'a * e = a',
                'a * b = b * a',
                'a * a⁻¹ = e'
              ],
              correctAnswerIndex: 2,
              explanation: 'Commutativity states that changing the order of the operands does not change the result: a * b = b * a.'
            }
          ]
        }
      }
    ],
    exam: {
      id: 'ex-math-301',
      title: 'Advanced Algebra, Matrices, & Proofs Sovereign Exam',
      moduleId: 'mod-math-301',
      timeLimit: 30,
      questions: [
        {
          id: 'ex-m301-q1',
          text: 'Using Proof by Mathematical Induction, if we assume the statement P(k) is true for some positive integer k, what must we show to prove the inductive step?',
          options: [
            'P(k) is true for all integers.',
            'P(k+1) is true based on the assumption that P(k) is true.',
            'P(1) is true for the base case.',
            'P(k-1) is true.'
          ],
          correctAnswerIndex: 1,
          explanation: 'The inductive step requires showing that if the statement holds for k, it must hold for k+1: P(k) ⟹ P(k+1).'
        },
        {
          id: 'ex-m301-q2',
          text: 'What is the sum of the roots of the cubic polynomial equation x³ - 6x² + 11x - 6 = 0?',
          options: ['-6', '11', '6', '1'],
          correctAnswerIndex: 2,
          explanation: 'By Vieta\'s formulas, for a polynomial a_n x^n + a_{n-1} x^{n-1} + ... + a_0 = 0, the sum of roots is -a_{n-1}/a_n. Here, -(-6)/1 = 6.'
        },
        {
          id: 'ex-m301-q3',
          text: 'The set {1, -1} is a Group under which standard binary operation?',
          options: ['Addition', 'Multiplication', 'Subtraction', 'Division'],
          correctAnswerIndex: 1,
          explanation: 'Under multiplication, {1, -1} is closed, associative, has identity 1, and inverses 1⁻¹=1 and (-1)⁻¹=-1. It satisfies all group axioms.'
        }
      ]
    }
  },
  {
    id: 'mod-math-302',
    areaId: 'math-302',
    title: 'Unit 2: Geometry and Vectors (2D & 3D)',
    description: 'Solve parametric coordinate geometries, analyze orthogonal dot/cross lines, formulate coordinate planes, and evaluate points-to-plane distance metrics.',
    libraryLinks: [
      { title: "ZIMSEC Pure Mathematics Past Papers Search", url: "https://www.youtube.com/results?search_query=ZIMSEC+A+level+pure+mathematics+past+papers" },
      { title: "Line and Plane Vectors 3D Guide", url: "https://www.youtube.com/results?search_query=Vector+equation+of+a+line+and+plane+3D+pure+math" }
    ],
    lessons: [
      {
        id: 'math302-l1',
        moduleId: 'mod-math-302',
        title: '2.1 Advanced Coordinate Geometry & Parametric Curves',
        duration: 35,
        youtubeVideoId: 'S_-qZ6bM0qE',
        content: `### Study Notes: Coordinates, Planes, and Parametric Curve Math

Mapping mathematical curves through separate parametric variables.

---

#### 1. Parametric Formulations
In many mechanical or physical problems, the coordinates $x$ and $y$ are expressed in terms of a third variable $t$ (the parameter):
$$x = f(t), \\quad y = g(t)$$

* For example, the parameters $x = r\\cos t, \\ y = r\\sin t$ map onto the circle $x^2 + y^2 = r^2$.
* Ellipse parametric curve properties: $x = a\\cos\\theta, \\ y = b\\sin\\theta$.

#### 2. Cartesians Conversions
To convert a parametric description back to standard Cartesian equations ($y$ as a direct function of $x$), eliminate the parameter $t$:
* **Method A:** Solve one equation for $t$ and substitute it into the other.
* **Method B:** Utilize trigonometric identities (e.g., if $x = 3\\sin t$ and $y = 3\\cos t$, then $(\\frac{x}{3})^2 + (\\frac{y}{3})^2 = 1 \\implies x^2 + y^2 = 9$).

#### 3. Linear Axis Reductions
For a non-linear relationship like $P = aV^n$, taking logarithms converts the curve plots to linear representation:
$$\\ln P = \\ln a + n \\ln V$$
Plotting $\\ln P$ against $\\ln V$ yields a straight line with gradient $n$ and vertical intercept $\\ln a$.

---

#### Video Resource Guide
* **YouTube Search:** \`Parametric equations calculus and curve sketching A level\`
* **Link to copy:** [https://www.youtube.com/results?search_query=Parametric+equations+calculus+and+curve+sketching+A+level](https://www.youtube.com/results?search_query=Parametric+equations+calculus+and+curve+sketching+A+level)

#### Practice Assignment
1. Sketch and find the Cartesian equation of the curve given paramatrically by: $x = t^2 - 1, \\ y = 2t$.
2. Convert the parametric path $x = 2 + 3\\sec\\theta, \\ y = 1 + 3\\tan\\theta$ to Cartesian form.`,
        quiz: {
          id: 'q-math302-l1',
          title: 'Parametric Geometry Test',
          questions: [
            {
              id: 'q-m302-l1-1',
              text: 'Find the Cartesian equation for the parametric equations: x = cos(t), y = sin(t).',
              options: [
                'y = x + 1',
                'x² + y² = 1',
                'x² - y² = 1',
                'y = x²'
              ],
              correctAnswerIndex: 1,
              explanation: 'Since cos²(t) + sin²(t) = 1, substituting yields x² + y² = 1, which represents a circle centered at the origin.'
            }
          ]
        }
      },
      {
        id: 'math302-l2',
        moduleId: 'mod-math-302',
        title: '2.2 Vector Operations and Cross Products',
        duration: 35,
        youtubeVideoId: 'VectorDotCross',
        content: `### Study Notes: Multi-Dimensional Vectors & Rotational Mechanics

Operating under 3-dimensional vectors, evaluating scalar products (dot), and cross products.

---

#### 1. Dot (Scalar) Product
The dot product projects vector $a$ onto $b$ to return a scalar real number:
$$a \\cdot b = a_1 b_1 + a_2 b_2 + a_3 b_3 = |a||b|\\cos\\theta$$

* If $a \\cdot b = 0$, the vectors are **perpendicular** (orthogonal).

#### 2. Cross (Vector) Product
The cross product outputs a vector $c = a \\times b$ perpendicular to both $a$ and $b$:
$$a \\times b = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ a_1 & a_2 & a_3 \\\\ b_1 & b_2 & b_3 \\end{vmatrix} = \\mathbf{i}(a_2 b_3 - a_3 b_2) - \\mathbf{j}(a_1 b_3 - a_3 b_1) + \\mathbf{k}(a_1 b_2 - a_2 b_1)$$

* The magnitude of the cross product measures spatial shape areas:
  $$\\text{Area of Triangle with adjacent edges } a \\text{ and } b = \\frac{1}{2}|a \\times b|$$
  $$\\text{Area of Parallelogram} = |a \\times b|$$

---

#### Video Resource Guide
* **YouTube Search:** \`Vector cross product and area of plane shapes\`
* **Link to copy:** [https://www.youtube.com/results?search_query=Vector+cross+product+and+area+of+plane+shapes](https://www.youtube.com/results?search_query=Vector+cross+product+and+area+of+plane+shapes)

#### Practice Assignment
1. Find the cross product $A \\times B$ for $A = 2\\mathbf{i} - \\mathbf{j} + 3\\mathbf{k}$ and $B = \\mathbf{i} + 3\\mathbf{j} - 2\\mathbf{k}$.
2. Determine the area of the triangle with vertices $(0,0,0)$, $(1,3,2)$, and $(-1,0,4)$.`,
        quiz: {
          id: 'q-math302-l2',
          title: 'Dot & Cross Products Test',
          questions: [
            {
              id: 'q-m302-l2-1',
              text: 'What mathematical property of two vectors a and b is confirmed when their dot product a · b is equal to zero?',
              options: [
                'They are scalar multiples of each other',
                'They are perpendicular (orthogonal)',
                'They are parallel in the same direction',
                'One of them has zero length'
              ],
              correctAnswerIndex: 1,
              explanation: 'Because a · b = |a||b|cos(θ), if cos(θ) = 0 then θ = 90 degrees, proving vectors are perpendicular.'
            }
          ]
        }
      },
      {
        id: 'math302-l3',
        moduleId: 'mod-math-302',
        title: '2.3 Vector Equations of Lines and Planes',
        duration: 40,
        youtubeVideoId: 'U_Y3F8xQdOk',
        content: `### Study Notes: Linear Routes & Spatial Plane Transformations

Formulating equations of lines and 3D planes in vector coordinate systems.

---

#### 1. Straight lines in 3-Dimensions
A line passing through target point $a$ in direction $d$ has the vector equation:
$$\\mathbf{r} = \\mathbf{a} + \\lambda \\mathbf{d}, \\quad \\lambda \\in \\mathbb{R}$$
$$\\mathbf{r} = \\begin{bmatrix} a_x \\\\ a_y \\\\ a_z \\end{bmatrix} + \\lambda \\begin{bmatrix} d_x \\\\ d_y \\\\ d_z \\end{bmatrix}$$

#### 2. Planes in 3-Dimensions
We can define planes through three main formulations:

* **Vector form containing direction coordinates:**
  $$\\mathbf{r} = \\mathbf{a} + \\mu \\mathbf{u} + \\lambda \\mathbf{v}$$
* **Normal scalar vector form:**
  $$\\mathbf{r} \\cdot \\mathbf{n} = d$$
  Where $\\mathbf{n}$ is a vector perpendicular to the plane.
* **Cartesian Equation:**
  $$ax + by + cz = d$$
  Where vector $\\mathbf{n} = [a, b, c]^T$ is the plane normal vector.

---

#### Video Resource Guide
* **YouTube Search:** \`Vector equation of a line and plane 3D pure math\`
* **Link to copy:** [https://www.youtube.com/results?search_query=Vector+equation+of+a+line+and+plane+3D+pure+math](https://www.youtube.com/results?search_query=Vector+equation+of+a+line+and+plane+3D+pure+math)

#### Practice Assignment
1. State the vector equation of the line passing through points $(2, 1, -1)$ and $(1, 3, 4)$.
2. Calculate the Cartesian equation of the plane passing through direction $(1, 0, 2)$ having normal vector $\\mathbf{n} = 2\\mathbf{i} + \\mathbf{j} - 3\\mathbf{k}$.`,
        quiz: {
          id: 'q-math302-l3',
          title: '3D Lines & Planes Check',
          questions: [
            {
              id: 'q-m302-l3-1',
              text: 'In the Cartesian plane equation 2x - 3y + z = 7, what are the components of the normal vector to the plane?',
              options: [
                '[2, -3, 7]',
                '[2, 3, 1]',
                '[2, -3, 1]',
                '[1, -3, 2]'
              ],
              correctAnswerIndex: 2,
              explanation: 'The coefficients of x, y, and z in the Cartesian equation correspond exactly to the normal vector components: [2, -3, 1].'
            }
          ]
        }
      },
      {
        id: 'math302-l4',
        moduleId: 'mod-math-302',
        title: '2.4 Perpendicular Distances and Intersections',
        duration: 40,
        youtubeVideoId: 'U_Y3F8xQdOk',
        content: `### Study Notes: Perpendicular Angles, Planes Intersections, & Distance Scales

Calculating geometric relations: intersection angles and closest distances in 3D.

---

#### 1. Angle intersections
* **Angle between two lines (directions $d_1, d_2$):**
  $$\\cos\\theta = \\frac{|d_1 \\cdot d_2|}{|d_1||d_2|}$$
* **Angle between line (direction $d$) and plane (normal $n$):**
  $$\\sin\\theta = \\frac{|d \\cdot n|}{|d||n|}$$
* **Angle between two planes (normals $n_1, n_2$):**
  $$\\cos\\theta = \\frac{|n_1 \\cdot n_2|}{|n_1||n_2|}$$

#### 2. Shortest Distance Calculations
* **Perpendicular distance from point $P$ (position vector $p$) to Plane $r \\cdot n = d$:**
  $$\\text{Distance } D = \\frac{|a x_0 + b y_0 + c z_0 - d|}{\\sqrt{a^2 + b^2 + c^2}}$$
* **Shortest Distance between skew lines $r_1 = a_1 + \\lambda d_1$ and $r_2 = a_2 + \\mu d_2$:**
  First locate a common perpendicular vector normal $\\mathbf{n} = d_1 \\times d_2$:
  $$\\text{Distance } = \\frac{|(a_1 - a_2) \\cdot (d_1 \\times d_2)|}{|d_1 \\times d_2|}$$

---

#### Video Resource Guide
* **YouTube Search:** \`Perpendicular distance from a point to a plane vectors\`
* **Link to copy:** [https://www.youtube.com/results?search_query=Perpendicular+distance+from+a+point+to+a+plane+vectors](https://www.youtube.com/results?search_query=Perpendicular+distance+from+a+point+to+a+plane+vectors)

#### Practice Assignment
1. Calculate the perpendicular distance from point $(1, -2, 5)$ to the plane $2x - y + 2z = 4$.
2. State the intersection coordinates between line $r = (\\mathbf{i} + \\mathbf{j}) + \\lambda (2\\mathbf{i} - \\mathbf{j} + \\mathbf{k})$ and plane $x + 2y - z = -3$.`,
        quiz: {
          id: 'q-math302-l4',
          title: '3D Geometry Metrics Check',
          questions: [
            {
              id: 'q-m302-l4-1',
              text: 'What mathematical function is used to find the angle between a line direcion and a plane normal instead of cosine?',
              options: [
                'Cosine (cos)',
                'Sine (sin)',
                'Tangent (tan)',
                'Secant (sec)'
              ],
              correctAnswerIndex: 1,
              explanation: 'Because normal vector is perpendicular to the plane surface, the angle with the plane is the complement of the angle with the normal, transforming the cosine formula into sine: sin(θ) = |d · n| / (|d||n|).'
            }
          ]
        }
      }
    ],
    exam: {
      id: 'ex-math-302',
      title: 'Geometry and 3D Vectors Sovereign Exam',
      moduleId: 'mod-math-302',
      timeLimit: 30,
      questions: [
        {
          id: 'ex-m302-q1',
          text: 'What is the dot product of two mutually orthogonal 3D vectors u and v?',
          options: ['1', '0', '-1', '|u||v|'],
          correctAnswerIndex: 1,
          explanation: 'The dot product u · v = |u||v| cos(θ). Since orthogonal vectors have θ = 90° and cos(90°) = 0, their dot product is always 0.'
        },
        {
          id: 'ex-m302-q2',
          text: 'What geometry does the equation r · n = d represent in 3D vector space, where n is a constant vector and d is a scalar?',
          options: ['A line parallel to n', 'A sphere centered at n', 'A plane perpendicular to n', 'A cylinder along n'],
          correctAnswerIndex: 2,
          explanation: 'r · n = d is the standard vector equation of a plane, where n is the normal vector perpendicular to the plane surface.'
        },
        {
          id: 'ex-m302-q3',
          text: 'If vectors a = [2, 1, -1] and b = [1, 3, 5] are given, what does their cross product a × b represent physically?',
          options: [
            'A scalar representing their area projection.',
            'A vector perpendicular to both a and b.',
            'The projection length of a onto b.',
            'A parallel vector in the same plane.'
          ],
          correctAnswerIndex: 1,
          explanation: 'The cross product of two non-parallel 3D vectors results in a new vector that is perpendicular (orthogonal) to the plane containing both input vectors.'
        }
      ]
    }
  },
  {
    id: 'mod-math-303',
    areaId: 'math-303',
    title: 'Unit 3: Sequences, Series, and Binomial Expansions',
    description: 'Construct progressions, evaluate infinite summation limits, perform binomial expansion for rational values, and build functions using Maclaurin/Taylor representations.',
    libraryLinks: [
      { title: "ZIMSEC Pure Mathematics Past Papers Search", url: "https://www.youtube.com/results?search_query=ZIMSEC+A+level+pure+mathematics+past+papers" },
      { title: "Binomial Expansions Negative Indices", url: "https://www.youtube.com/results?search_query=Binomial+expansion+rational+negative+indices+A+level" }
    ],
    lessons: [
      {
        id: 'math303-l1',
        moduleId: 'mod-math-303',
        title: '3.1 Sequences and Progressions (AP & GP)',
        duration: 30,
        youtubeVideoId: 'U_Y3F8xQdOk',
        content: `### Study Notes: Mathematical Progressions & Sum-to-Infinity Constraints

Exploring convergence characteristics.

---

#### 1. Arithmetic Progressions (AP)
A series where subsequent values increase by constant difference $d$:
$$u_n = a + (n-1)d$$
$$S_n = \\frac{n}{2}[2a + (n-1)d]$$

#### 2. Geometric Progressions (GP)
A series where subsequent values are scaled by constant ratio $r$:
$$u_n = a r^{n-1}$$
$$S_n = \\frac{a(1 - r^n)}{1 - r}, \\quad r \\ne 1$$

#### 3. Sum to Infinity of Converging Series
If a geometric ratio has absolute value $|r| < 1$, as $n$ approaches infinity, $r^n \\to 0$. The geometric progression series converges to a static limiting bound:
$$S_\\infty = \\frac{a}{1 - r}$$
*If $|r| \\ge 1$, the series diverges and has no sum to infinity.*

---

#### Video Resource Guide
* **YouTube Search:** \`Arithmetic and geometric progressions sum to infinity A level\`
* **Link to copy:** [https://www.youtube.com/results?search_query=Arithmetic+and+geometric+progressions+sum+to+infinity+A+level](https://www.youtube.com/results?search_query=Arithmetic+and+geometric+progressions+sum+to+infinity+A+level)

#### Practice Assignment
1. An infinite geometric progression has first term $8$ and sum to infinity $12$. Find the common ratio of this progression sequence.
2. Formulate the general $n^{\\text{th}}$ term of the sequence: $5, 11, 17, 23, \\dots$, hence calculate the sum of the first $50$ entries.`,
        quiz: {
          id: 'q-math303-l1',
          title: 'AP & GP Progressions Check',
          questions: [
            {
              id: 'q-m303-l1-1',
              text: 'Under what specific condition will an infinite geometric progression converge and have a valid limit sum to infinity S_∞?',
              options: [
                'Common ratio r must be greater than 1',
                'Common ratio r must satisfy |r| < 1',
                'First term must be zero',
                'Common difference must be positive'
              ],
              correctAnswerIndex: 1,
              explanation: 'An infinite GP converges if and only if |r| < 1, which guarantees that higher-order power terms rⁿ decay toward zero as n approaches infinity.'
            }
          ]
        }
      },
      {
        id: 'math303-l2',
        moduleId: 'mod-math-303',
        title: '3.2 Binomial Expansion',
        duration: 35,
        youtubeVideoId: 'U_Y3F8xQdOk',
        content: `### Study Notes: Factorial Arithmetic & Negative / Fractional Binomial Expansions

Formulating rational expressions.

---

#### 1. Positive Integer Power Expansions
Using standard combinations combinations notations $\\binom{n}{r} = \\frac{n!}{r!(n-r)!}$, we expand:
$$(a+b)^n = a^n + \\binom{n}{1}a^{n-1}b + \\binom{n}{2}a^{n-2}b^2 + \\dots + b^n$$

#### 2. Negative and Fractional Expansions
For cases where powers are fractions or negative integers (rational powers), we use standard Newton expansion:
$$(1+x)^n = 1 + n x + \\frac{n(n-1)}{2!}x^2 + \\frac{n(n-1)(n-2)}{3!}x^3 + \\dots$$

* **Convergence and Validity:** Since this series produces infinitely many terms rather than stopping, it is **only valid** inside convergence interval limit:
  $$|x| < 1$$

* **General Formulation Expansion Guide:** To expand $(a+x)^n$ where $n \\notin \\mathbb{Z}^+$, rewrite it as:
  $$(a+x)^n = a^n\\left(1 + \\frac{x}{a}\\right)^n \\implies \\text{Valid only when } \\left|\\frac{x}{a}\\right| < 1$$

---

#### Video Resource Guide
* **YouTube Search:** \`Binomial expansion rational negative indices A level\`
* **Link to copy:** [https://www.youtube.com/results?search_query=Binomial+expansion+rational+negative+indices+A+level](https://www.youtube.com/results?search_query=Binomial+expansion+rational+negative+indices+A+level)

#### Practice Assignment
1. Expand $(1 - 2x)^{-3}$ up to the term in $x^3$, stating the intervals of validity.
2. Find the binomial approximation of $\\sqrt{4 + x}$ up to the coefficient in $x^2$.`,
        quiz: {
          id: 'q-math303-l2',
          title: 'Binomial Expansion Test',
          questions: [
            {
              id: 'q-m303-l2-1',
              text: 'What represents the correct range of validity for the binomial series representation of (1 - 3x)^(-1/2)?',
              options: [
                'All real numbers x',
                '|x| < 1',
                '|x| < 1/3',
                '|x| > 3'
              ],
              correctAnswerIndex: 2,
              explanation: 'For the binomial expansion to converge, the variable term in (1+u)ⁿ must satisfy |u| < 1. Here, u = -3x, hence |-3x| < 1 which yields |x| < 1/3.'
            }
          ]
        }
      },
      {
        id: 'math303-l3',
        moduleId: 'mod-math-303',
        title: '3.3 Series Summations, Maclaurin, and Taylor',
        duration: 35,
        youtubeVideoId: 'U_Y3F8xQdOk',
        content: `### Study Notes: Series Sums, Method of Differences & Functions Expansions

Evaluating patterns in sums.

---

#### 1. Series Sums Identities
Standard formulas for integer powers:
$$\\sum_{r=1}^n r = \\frac{1}{2}n(n+1), \\quad \\sum_{r=1}^n r^2 = \\frac{1}{6}n(n+1)(2n+1)$$

#### 2. Method of Differences
Used to evaluate partial fraction summations. If standard term can be expressed as $u_r = f(r) - f(r+1)$, the series telescopes:
$$\\sum_{r=1}^n (f(r) - f(r+1)) = f(1) - f(n+1)$$

#### 3. Maclaurin & Taylor Polynomials
Approximating arbitrary coordinate functions using infinite derivatives:

* **Maclaurin Series (expanded about $x=0$):**
  $$f(x) = f(0) + x f'(0) + \\frac{x^2}{2!}f''(0) + \\frac{x^3}{3!}f'''(0) + \\dots$$
* **Taylor Series (expanded about point $x=a$):**
  $$f(x) = f(a) + (x-a) f'(a) + \\frac{(x-a)^2}{2!}f''(a) + \\dots$$

---

#### Video Resource Guide
* **YouTube Search:** \`Method of differences series Taylor Maclaurin pure math\`
* **Link to copy:** [https://www.youtube.com/results?search_query=Method+of+differences+series+Taylor+Maclaurin+pure+math](https://www.youtube.com/results?search_query=Method+of+differences+series+Taylor+Maclaurin+pure+math)

#### Practice Assignment
1. Using Maclaurin series, prove that $e^x = 1 + x + \\frac{x^2}{2} + \\frac{x^3}{6} + \\dots$.
2. Express $\\frac{1}{r(r+1)}$ inside differences form, hence evaluate sum of sequence from $r=1$ to $n$.`,
        quiz: {
          id: 'q-math303-l3',
          title: 'Maclaurin & Sums Quiz',
          questions: [
            {
              id: 'q-m303-l3-1',
              text: 'Using Maclaurin expansion of f(x) = ln(1+x), what is the coefficient of the x² term?',
              options: ['1/2', '-1/2', '2', '-1'],
              correctAnswerIndex: 1,
              explanation: 'f(0) = ln(1) = 0. f\'(x) = (1+x)⁻¹, so f\'(0) = 1. f\'\'(x) = -(1+x)⁻², so f\'\'(0) = -1. The term is [f\'\'(0)/2!]x² = (-1/2)x².'
            }
          ]
        }
      }
    ],
    exam: {
      id: 'ex-math-303',
      title: 'Sequences, Infinite Series & Binomial Sovereign Exam',
      moduleId: 'mod-math-303',
      timeLimit: 30,
      questions: [
        {
          id: 'ex-m303-q1',
          text: 'For what range of x is the binomial expansion of (1 - 2x)⁻¹/² valid and convergent?',
          options: ['|x| < 1', '|x| < 1/2', '|x| < 2', 'All real numbers x'],
          correctAnswerIndex: 1,
          explanation: 'For (1 + u)^n, convergence requires |u| < 1. Here, u = -2x, so |-2x| < 1 ⟹ |x| < 1/2.'
        },
        {
          id: 'ex-m303-q2',
          text: 'Given an infinite geometric series with first term a = 3 and common ratio r = 1/3, what is the exact sum to infinity? ',
          options: ['9/2', '9', '4', '3'],
          correctAnswerIndex: 0,
          explanation: 'The sum to infinity S_∞ is given by a / (1 - r) = 3 / (1 - 1/3) = 3 / (2/3) = 9/2.'
        },
        {
          id: 'ex-m303-q3',
          text: 'Which series convergence test is most suitable for evaluating the limit or convergence of infinite series with factorial terms, such as ∑ (3ⁿ / n!)?',
          options: ['Integral Test', 'Ratio Test', 'Leibniz Alternating Test', 'Geometric Series Convergence Test'],
          correctAnswerIndex: 1,
          explanation: 'The Ratio Test (D\'Alembert) is highly optimal for series with factorials because consecutive terms simplify cleanly: (a_{n+1}/a_n) = 3 / (n+1) ⟹ limit as n→∞ is 0 < 1.'
        }
      ]
    }
  },
  {
    id: 'mod-math-304',
    areaId: 'math-304',
    title: 'Advanced Trigonometry',
    description: 'Plane trigonometry sector coordinates, small-angle approximation math, graphing inverse trigonometric coordinates, and solving compound proving identities.',
    libraryLinks: [
      { title: "ZIMSEC Pure Mathematics Past Papers Search", url: "https://www.youtube.com/results?search_query=ZIMSEC+A+level+pure+mathematics+past+papers" },
      { title: "Trig Proofs & Compounds Identities Tutorial", url: "https://www.youtube.com/results?search_query=Solving+trigonometric+equations+and+proving+identities+A+level" }
    ],
    lessons: [
      {
        id: 'math304-l1',
        moduleId: 'mod-math-304',
        title: '4.1 Plane Trigonometry and Sector Properties',
        duration: 30,
        youtubeVideoId: 'U_Y3F8xQdOk',
        content: `### Study Notes: Radian Measures, Arc Geometries, & Small Angle Limits

Reviewing circular arcs and geometric small angle models.

---

#### 1. Radian Geometries
Angle $\\theta$ in radians is arc length divided by radius.
* **Arc Length:** $s = r\\theta$
* **Sector Area:** $A = \\frac{1}{2} r^2 \\theta$
* **Segment Area:** $A_{\\text{seg}} = \\frac{1}{2} r^2(\\theta - \\sin\\theta)$
*Where $\\theta$ is measured strictly in **radians**.*

#### 2. Small Angle Approximations
When angle $x$ is extremely small ($x \\approx 0$) and measured in radians:
$$\\sin x \\approx x, \\quad \\tan x \\approx x, \\quad \\cos x \\approx 1 - \\frac{x^2}{2}$$

These approximations allow rapid estimations of complex waveforms without high-order trigonometric computations.

---

#### Video Resource Guide
* **YouTube Search:** \`Small angle approximations trigonometry A level math\`
* **Link to copy:** [https://www.youtube.com/results?search_query=Small+angle+approximations+trigonometry+A+level+math](https://www.youtube.com/results?search_query=Small+angle+approximations+trigonometry+A+level+math)

#### Practice Assignment
1. An arc of radius $5\\text{ cm}$ has sector area of $20\\text{ cm}^2$. Determine the sector angle in radians.
2. When $x$ is small, show that the expression $\\frac{2\\sin x - \\tan x}{x}$ simplifies to approximately $1$.`,
        quiz: {
          id: 'q-math304-l1',
          title: 'Trig Sectors Test',
          questions: [
            {
              id: 'q-m304-l1-1',
              text: 'What does the mathematical expression cos(θ) simplify to when applying small-angle approximations where θ ≈ 0?',
              options: [
                'θ',
                '1',
                '1 - θ²/2',
                '0'
              ],
              correctAnswerIndex: 2,
              explanation: 'The small-angle approximation for cosine is cos(θ) ≈ 1 - θ²/2, derived from the first two terms of its Taylor expansion.'
            }
          ]
        }
      },
      {
        id: 'math304-l2',
        moduleId: 'mod-math-304',
        title: '4.2 Trigonometric Functions, Identities, and Equations',
        duration: 40,
        youtubeVideoId: 'U_Y3F8xQdOk',
        content: `### Study Notes: Graphing inverse properties, compounding equations, and proving identities

Reviewing inverse mappings, compound identities, and solving trigonometric ranges.

---

#### 1. Compound and Double Angle Identities
* **Addition Formulas:**
  $$\\sin(A \\pm B) = \\sin A\\cos B \\pm \\cos A\\sin B$$
  $$\\cos(A \\pm B) = \\cos A\\cos B \\mp \\sin A\\sin B$$
* **Double Angles:**
  $$\\sin(2A) = 2\\sin A\\cos A$$
  $$\\cos(2A) = \\cos^2 A - \\sin^2 A = 2\\cos^2 A - 1 = 1 - 2\\sin^2 A$$

#### 2. The $R$-Formula Transformation
To solve equations of the form $a\\cos\\theta + b\\sin\\theta = c$, convert it into a single phase-shifted trigonometric term:
$$a\\cos\\theta + b\\sin\\theta = R\\cos(\\theta - \\alpha)$$
Where:
$$R = \\sqrt{a^2 + b^2} \\quad \\text{and} \\quad \\alpha = \\arctan\\left(\\frac{b}{a}\right)$$

---

#### Video Resource Guide
* **YouTube Search:** \`Solving trigonometric equations and proving identities A level\`
* **Link to copy:** [https://www.youtube.com/results?search_query=Solving+trigonometric+equations+and+proving+identities+A+level](https://www.youtube.com/results?search_query=Solving+trigonometric+equations+and+proving+identities+A+level)

#### Practice Assignment
1. Prove the identity: $\\frac{1 - \\cos 2x}{\\sin 2x} = \\tan x$.
2. Express $3\\cos\\theta + 4\\sin\\theta$ in the form $R\\cos(\\theta - \\alpha)$, and hence find the maximum value of the expression.`,
        quiz: {
          id: 'q-math304-l2',
          title: 'Advanced Trig Identities Test',
          questions: [
            {
              id: 'q-m304-l2-1',
              text: 'Which equation is correct for the double-angle formula cos(2θ) represented in terms of sin²(θ)?',
              options: [
                'cos(2θ) = 1 - 2sin²(θ)',
                'cos(2θ) = 2sin²(θ) - 1',
                'cos(2θ) = 2sin(θ)cos(θ)',
                'cos(2θ) = sin²(θ) - cos²(θ)'
              ],
              correctAnswerIndex: 0,
              explanation: 'cos(2θ) = cos²(θ) - sin²(θ). Replacing cos²(θ) with 1 - sin²(θ) yields cos(2θ) = 1 - 2sin²(θ).'
            }
          ]
        }
      }
    ],
    exam: {
      id: 'ex-math-304',
      title: 'Advanced Trigonometry & Functions Sovereign Exam',
      moduleId: 'mod-math-304',
      timeLimit: 30,
      questions: [
        {
          id: 'ex-m304-q1',
          text: 'Using the trigonometric identity for cos(A + B), express cos(θ + π/2) in its simplest form.',
          options: ['sin(θ)', '-sin(θ)', 'cos(θ)', '-cos(θ)'],
          correctAnswerIndex: 1,
          explanation: 'cos(θ + π/2) = cos(θ)cos(π/2) - sin(θ)sin(π/2). Since cos(π/2) = 0 and sin(π/2) = 1, this simplifies to -sin(θ).'
        },
        {
          id: 'ex-m304-q2',
          text: 'According to small angle approximations, when θ is very small and measured in radians, what is the approximated value of (1 - cos(θ)) / θ²?',
          options: ['1', '0', '1/2', 'Infinity'],
          correctAnswerIndex: 2,
          explanation: 'The small-angle approximation for cos(θ) is 1 - θ²/2. Substituting this yields (1 - (1 - θ²/2)) / θ² = (θ²/2) / θ² = 1/2.'
        },
        {
          id: 'ex-m304-q3',
          text: 'What are the coordinates of the turning points of the reciprocal function f(x) = sec(x) within the domain 0 ≤ x < π?',
          options: [
            '(0, 1) only, which is a local minimum',
            '(0, 1) as a local minimum, and (π, -1) as a local maximum',
            '(π/2, 0) as a point of inflection',
            'Sec(x) has no turning points in this domain'
          ],
          correctAnswerIndex: 0,
          explanation: 'The derivative of sec(x) is sec(x)tan(x). Within 0 ≤ x < π, this derivative is 0 only at x = 0. f(0) = 1, which acts as a turning point (local minimum).'
        }
      ]
    }
  },
  {
    id: 'mod-math-305',
    areaId: 'math-305',
    title: 'Unit 5: Differential and Integral Calculus',
    description: 'Master first-principle limits, chain/product/quotient rules, implicit parametric paths, stationary trajectories, parts/substitution integration, and separation of variables solvers.',
    libraryLinks: [
      { title: "ZIMSEC Pure Mathematics Past Papers Search", url: "https://www.youtube.com/results?search_query=ZIMSEC+A+level+pure+mathematics+past+papers" },
      { title: "Separation of Variables Differential Equations", url: "https://www.youtube.com/results?search_query=Separation+of+variables+differential+equations+A+level+pure+math" }
    ],
    lessons: [
      {
        id: 'math305-l1',
        moduleId: 'mod-math-305',
        title: '5.1 Advanced Differentiation',
        duration: 35,
        youtubeVideoId: 'U_Y3F8xQdOk',
        content: `### Study Notes: Implicit, Parametric, & Advanced Derivative Axioms

Mastering complex differentiation rules.

---

#### 1. Core Derivative Tools
* **Product Rule:** $\\frac{d}{dx}(uv) = u\\frac{dv}{dx} + v\\frac{du}{dx}$
* **Quotient Rule:** $\\frac{d}{dx}\\left(\\frac{u}{v}\\right) = \\frac{v\\frac{du}{dx} - u\\frac{dv}{dx}}{v^2}$
* **Chain Rule:** $\\frac{dy}{dx} = \\frac{dy}{du} \\times \\frac{du}{dx}$

#### 2. Implicit Differentiation
When an expression contains $x$ and $y$ mixed implicitly (like $x^2 + y^2 = 5xy$):
$$\\frac{d}{dx}[f(y)] = f'(y)\\frac{dy}{dx}$$

Evaluate the derivative with respect to $x$ by treating $y$ as a function of $x$ and appending the differential operator $\\frac{dy}{dx}$.

#### 3. Parametric Differentiation
If curves are defined parameters $x = f(t)$ and $y = g(t)$, find gradient using the chain derivative relationship:
$$\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}$$
$$\\frac{d^2y}{dx^2} = \\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) \\times \\frac{dt}{dx}$$

---

#### Video Resource Guide
* **YouTube Search:** \`Implicit and parametric differentiation A level pure math\`
* **Link to copy:** [https://www.youtube.com/results?search_query=Implicit+and+parametric+differentiation+A+level+pure+math](https://www.youtube.com/results?search_query=Implicit+and+parametric+differentiation+A+level+pure+math)

#### Practice Assignment
1. Differentiate $y = xe^{-2x}$ with respect to $x$.
2. Find the gradient of curve $x^2 + 4xy + y^2 = 13$ at coordinates $(1, 2)$.`,
        quiz: {
          id: 'q-math305-l1',
          title: 'Advanced Differentiation Check',
          questions: [
            {
              id: 'q-m305-l1-1',
              text: 'Given parametric functions x = t² and y = t³, determine dy/dx at t = 2.',
              options: [
                '3/2',
                '2/3',
                '3',
                '4'
              ],
              correctAnswerIndex: 2,
              explanation: 'dx/dt = 2t and dy/dt = 3t². Then dy/dx = (3t²)/(2t) = 1.5t. At t = 2, dy/dx = 1.5 * 2 = 3.'
            }
          ]
        }
      },
      {
        id: 'math305-l2',
        moduleId: 'mod-math-305',
        title: '5.2 Applications of Differentiation',
        duration: 35,
        youtubeVideoId: 'U_Y3F8xQdOk',
        content: `### Study Notes: Tangents/Normals, Rates of Change, and Inflection Points

Analyzing spatial curvatures and rate optimizations.

---

#### 1. Tangents & Normals Equations
At point $(x_1, y_1)$ with gradient $m = \\frac{dy}{dx}$:
* **Tangent Equation:** $y - y_1 = m(x - x_1)$
* **Normal Equation:** $y - y_1 = -\\frac{1}{m}(x - x_1)$  *(Since Normal is perpendicular to Tangent)*

#### 2. Stationary Points Identification
Find locations where rate $\\frac{dy}{dx} = 0$:
* **Local Minima:** $\\frac{dy}{dx} = 0$ and $\\frac{d^2y}{dx^2} > 0$
* **Local Maxima:** $\\frac{dy}{dx} = 0$ and $\\frac{d^2y}{dx^2} < 0$
* **Point of Inflection:** Location where curvature changes sign $\\frac{d^2y}{dx^2} = 0$ and changes signs across coordinate.

---

#### Video Resource Guide
* **YouTube Search:** \`Stationary points maximum minimum inflection A level math\`
* **Link to copy:** [https://www.youtube.com/results?search_query=Stationary+points+maximum+minimum+inflection+A+level+math](https://www.youtube.com/results?search_query=Stationary+points+maximum+minimum+inflection+A+level+math)

#### Practice Assignment
1. Locate and classify the stationary points on the curve $y = 2x^3 - 9x^2 + 12x - 3$.
2. Cylindrical container has radius $r$ and height $h$ with fixed volume $100\\pi\\text{ cm}^3$. Find dimensions minimizing total surface area.`,
        quiz: {
          id: 'q-math305-l2',
          title: 'Calculus Applications Test',
          questions: [
            {
              id: 'q-m305-l2-1',
              text: 'At point x = c, the first derivative dy/dx is zero. If the second derivative d²y/dx² is strictly negative, what does this denote?',
              options: [
                'A local minimum point',
                'A local maximum point',
                'A point of geometric inflection',
                'A break in function continuity'
              ],
              correctAnswerIndex: 1,
              explanation: 'A second derivative of less than zero denotes downward concavity, proving that the stationary gradient represents a local maximum peak.'
            }
          ]
        }
      },
      {
        id: 'math305-l3',
        moduleId: 'mod-math-305',
        title: '5.3 Advanced Integration Techniques',
        duration: 40,
        youtubeVideoId: 'U_Y3F8xQdOk',
        content: `### Study Notes: Substitution Models, Integration by Parts, and Rational Identity Integrations

Mastering non-elementary continuous calculations.

---

#### 1. Integration by Substitution
To simplify $\\int f(g(x))g'(x) dx$, define variable variable substitution $u = g(x) \\implies du = g'(x) dx$:
$$\\int f(u) du$$

#### 2. Integration by Parts
Derived from product rule derivative scaling. Essential for evaluating product functions like $\\int x\\ln x \\ dx$:
$$\\int u \\frac{dv}{dx} dx = uv - \\int v \\frac{du}{dx} dx$$
*Tip: Use LIATE priority order (Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential) to select which function to define as $u$.*

#### 3. Standard Trigonometric Integrations
Utilize identities to break powers down:
* For $\\int \\cos^2 x \\ dx$, substitute $\\cos^2 x = \\frac{1 + \\cos 2x}{2}$.
* For $\\int \\sin^2 x \\ dx$, substitute $\\sin^2 x = \\frac{1 - \\cos 2x}{2}$.

---

#### Video Resource Guide
* **YouTube Search:** \`Integration by parts substitution recognition A level pure math\`
* **Link to copy:** [https://www.youtube.com/results?search_query=Integration+by+parts+substitution+recognition+A+level+pure+math](https://www.youtube.com/results?search_query=Integration+by+parts+substitution+recognition+A+level+pure+math)

#### Practice Assignment
1. Evaluate $\\int x \\cos(3x) \\ dx$ using Integration by Parts.
2. Solve $\\int \\frac{2x}{x^2 + 4} \\ dx$ using substitution.`,
        quiz: {
          id: 'q-math305-l3',
          title: 'Integration Methods Test',
          questions: [
            {
              id: 'q-m305-l3-1',
              text: 'In the Integration by Parts formula: ∫ u dv = uv - ∫ v du, what is the best choice for u when integrating functional product x ln(x)?',
              options: [
                'u = x',
                'u = ln(x)',
                'u = 1',
                'u = x ln(x)'
              ],
              correctAnswerIndex: 1,
              explanation: 'According to LIATE priority rules, Logarithmic functions come before Algebraic. Setting u = ln(x) yields easy standard derivative du = (1/x)dx, simplifying the integrals.'
            }
          ]
        }
      },
      {
        id: 'math305-l4',
        moduleId: 'mod-math-305',
        title: '5.4 Definite Integration & First-Order Differential Equations',
        duration: 40,
        youtubeVideoId: 'U_Y3F8xQdOk',
        content: `### Study Notes: Definite Area Integrals & Separation of variables

Evaluating bounds of integrals, tracking area/volume properties, and resolving differential arrangements.

---

#### 1. Volumetric Rotational Integrals
When curve $y = f(x)$ between boundaries $x=a$ and $x=b$ is rotated $360^\\circ$ around the horizontal $x$-axis, the volume of solid of revolution is:
$$V = \\pi \\int_{a}^{b} y^2 \\ dx$$

#### 2. First-Order Separable Differential Equations
To resolve differential relationship of standard separable form:
$$\\frac{dy}{dx} = g(x)h(y)$$

Separate parameters so the dependent terms $y$ group alongside $dy$ and independent $x$ terms group alongside $dx$:
$$\\int \\frac{1}{h(y)} dy = \\int g(x) dx$$

Evaluate both sides to establish the general solution equation (remembering constant $C$). Apply boundary parameters to find particular solutions.

---

#### Video Resource Guide
* **YouTube Search:** \`Separation of variables differential equations A level pure math\`
* **Link to copy:** [https://www.youtube.com/results?search_query=Separation+of+variables+differential+equations+A+level+pure+math](https://www.youtube.com/results?search_query=Separation+of+variables+differential+equations+A+level+pure+math)

#### Practice Assignment
1. Calculate the volume when the region under $y = 3x^2$ from limit $x=1$ to $x=2$ is rotated completely about the $x$-axis.
2. Find the particular solution to $\\frac{dy}{dx} = 3x^2 y$, given that $y = e$ when $x = 0$.`,
        quiz: {
          id: 'q-math305-l4',
          title: 'Differential Equations Test',
          questions: [
            {
              id: 'q-m305-l4-1',
              text: 'Find the general solution to the separable differential equation dy/dx = 4xy.',
              options: [
                'y = 2x² + C',
                'y = C e^(2x²)',
                'y = e^(4x) + C',
                'y = C x²'
              ],
              correctAnswerIndex: 1,
              explanation: 'Separating variables yields ∫ (1/y) dy = ∫ 4x dx ⟹ ln|y| = 2x² + K ⟹ y = e^(2x² + K) = C e^(2x²).'
            }
          ]
        }
      }
    ],
    exam: {
      id: 'ex-math-305',
      title: 'Calculus, Integrations & Systems Sovereign Exam',
      moduleId: 'mod-math-305',
      timeLimit: 30,
      questions: [
        {
          id: 'ex-m305-q1',
          text: 'What integration technique is required to evaluate ∫ x e^x dx?',
          options: ['Integration by Parts', 'Integration by Substitution', 'Partial Fractions Expansion', 'Numerical Trapezoidal expansion'],
          correctAnswerIndex: 0,
          explanation: '∫ u dv = u v - ∫ v du. Setting u = x (du = dx) and dv = e^x dx (v = e^x) gives x e^x - ∫ e^x dx = x e^x - e^x + C.'
        },
        {
          id: 'ex-m305-q2',
          text: 'If a curve is defined parametrically by x = t² and y = t³, find the gradient of the curve dy/dx in terms of t.',
          options: ['2/3 t', '3/2 t', '3/2 t²', '2/3 t²'],
          correctAnswerIndex: 1,
          explanation: 'dy/dx = (dy/dt) / (dx/dt). For x = t², dx/dt = 2t. For y = t³, dy/dt = 3t². Therefore, dy/dx = (3t²) / (2t) = 3/2 t.'
        },
        {
          id: 'ex-m305-q3',
          text: 'A solid of revolution is generated by rotating the region under the curve y = √x from x = 0 to x = 4 through 360° about the x-axis. What is the volume of this solid?',
          options: ['8π', '16π', '4π', '12π'],
          correctAnswerIndex: 0,
          explanation: 'Volume V = π ∫ y² dx from a to b. Here, ∫ (√x)² dx = ∫ x dx = [x²/2] from 0 to 4 = 16/2 = 8. Thus, Volume is 8π.'
        }
      ]
    }
  },
  {
    id: 'mod-math-306',
    areaId: 'math-306',
    title: 'Numerical Methods',
    description: 'Solve real root boundaries with sign change evaluations, formulate converging iterative schemas, calculate Newton-Raphson approximations, and estimate definite areas via the Trapezium Rule.',
    libraryLinks: [
      { title: "ZIMSEC Pure Mathematics Past Papers Search", url: "https://www.youtube.com/results?search_query=ZIMSEC+A+level+pure+mathematics+past+papers" },
      { title: "Newton Raphson Approximations & failures", url: "https://www.youtube.com/results?search_query=Newton+Raphson+method+convergence+and+failure+pure+math" }
    ],
    lessons: [
      {
        id: 'math306-l1',
        moduleId: 'mod-math-306',
        title: '6.1 Error Analysis & Root Approximations',
        duration: 35,
        youtubeVideoId: 'U_Y3F8xQdOk',
        content: `### Study Notes: Absolute / Relative Errors and Locating Root Intervals

Understanding numerical estimation variance and verifying root intervals.

---

#### 1. Computational Errors
* **Absolute Error:** The raw magnitude difference:
  $$\\text{Absolute Error } e_a = |x_{\\text{approx}} - x_{\\text{exact}}|$$
* **Relative Error:** Quantifies error relative to size:
  $$\\text{Relative Error } e_r = \\frac{|x_{\\text{approx}} - x_{\\text{exact}}|}{x_{\\text{exact}}}$$

#### 2. Differential Error Approximation
Utilize small incremental derivatives to estimate how input deviations scale:
$$\\delta y \\approx \\frac{dy}{dx} \\delta x$$

#### 3. Root Locations via Sign Change
A continuous function $f(x) = 0$ must cross $y=0$ inside segment $[a, b]$ if the signs at the endpoints differ:
$$\\text{If } f(a) \\times f(b) < 0, \\text{ there exists at least one root } \\alpha \\in (a, b)$$

*Note: Sign change can fail if there are asymptotic breaks (e.g. $y=1/x$) or repeated roots tangent to the x-axis.*

---

#### Video Resource Guide
* **YouTube Search:** \`Absolute and relative errors numerical methods A level\`
* **Link to copy:** [https://www.youtube.com/results?search_query=Absolute+and+relative+errors+numerical+methods+A+level](https://www.youtube.com/results?search_query=Absolute+and+relative+errors+numerical+methods+A+level)

#### Practice Assignment
1. The radius of a sphere is measured as $5.0\\text{ cm}$ with maximum absolute error interval of $0.1\\text{ cm}$. Find the absolute error in calculating total volume.
2. Confirm that equation $x^3 - 2x - 5 = 0$ contains a root between integer bounds $x_1 = 2$ and $x_2 = 3$.`,
        quiz: {
          id: 'q-math306-l1',
          title: 'Errors & Roots Test',
          questions: [
            {
              id: 'q-m306-l1-1',
              text: 'Under what specific condition can the sign-change rule fail to identify a root in the interval [a, b] even when f(a) and f(b) have opposite signs?',
              options: [
                'If the function is non-linear',
                'If there is a discontinuity or asymptote within the interval',
                'If there are logarithmic terms',
                'If the interval has a width greater than 5'
              ],
              correctAnswerIndex: 1,
              explanation: 'The sign change theorem requires a continuous function. If a discontinuity (such as an asymptote) exists, the function can jump across the axis without a root.'
            }
          ]
        }
      },
      {
        id: 'math306-l2',
        moduleId: 'mod-math-306',
        title: '6.2 Iterative Procedures & Newton-Raphson',
        duration: 35,
        youtubeVideoId: 'U_Y3F8xQdOk',
        content: `### Study Notes: Converging Iterative Loops & Newton-Raphson Formulas

Deriving approximations through iterative sequences.

---

#### 1. General Iteration ($x_{n+1} = g(x_n)$)
To solve $f(x)=0$, rearrange as $x = g(x)$. Choose starting point $x_0$ and calculate recursive steps.
* **Convergence condition:** The sequence converges to root $\\alpha$ if gradient:
  $$|g'(\\alpha)| < 1$$
  *(If $|g'(\\alpha)| > 1$, steps diverge away from target).*

#### 2. The Newton-Raphson Formula
Uses tangents of derivative slope to compute roots. Converges to roots at extremely rapid quadratic speed:
$$x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$$

#### 3. Mechanics of Newton-Raphson Failure
The formula can fail to resolve roots if:
* Initial starting guess $x_0$ is located near stationary point ($f'(x_0) \\approx 0$), causing divisor division by zero or shooting tangent coordinates far off-bounds.
* The sequence oscillates back and forth continuously in a periodic loop.

---

#### Video Resource Guide
* **YouTube Search:** \`Newton Raphson method convergence and failure pure math\`
* **Link to copy:** [https://www.youtube.com/results?search_query=Newton+Raphson+method+convergence+and+failure+pure+math](https://www.youtube.com/results?search_query=Newton+Raphson+method+convergence+and+failure+pure+math)

#### Practice Assignment
1. Rearrange $x^3 - x - 1 = 0$ inside convergent iterative layout, and evaluate root up to 3 decimal places using $x_0 = 1.3$.
2. Derive the Newton-Raphson formula schema for finding the cube root of $N$.`,
        quiz: {
          id: 'q-math306-l2',
          title: 'Newton-Raphson check',
          questions: [
            {
              id: 'q-m306-l2-1',
              text: 'Why does the Newton-Raphson method fail when approaching a coordinate where f\'(x) = 0?',
              options: [
                'Because the root value must be zero',
                'Because the calculation requires division by f\'(x), which leads to division by zero',
                'Because the function is discontinuous',
                'Because the error bounds expand exponentially'
              ],
              correctAnswerIndex: 1,
              explanation: 'The iteration formula divides by f\'(x_n). If the gradient at a coordinate is near zero, the division fails or projects the next guess out of range.'
            }
          ]
        }
      },
      {
        id: 'math306-l3',
        moduleId: 'mod-math-306',
        title: '6.3 The Trapezium Rule',
        duration: 35,
        youtubeVideoId: 'U_Y3F8xQdOk',
        content: `### Study Notes: Standard Numerical Area Estimations & Boundary Errors

Estimating integration areas under curve graphs.

---

#### 1. The Trapezium Formulation
Dividing area under $y=f(x)$ from boundary $a$ to $b$ into $n$ strips of equal width $h = \\frac{b-a}{n}$:
$$\\int_{a}^{b} f(x) dx \\approx \\frac{1}{2}h \\left[ (y_0 + y_n) + 2(y_1 + y_2 + \\dots + y_{n-1}) \\right]$$

Where:
$$y_r = f(a + rh)$$

#### 2. Checking Overestimations & Underestimations
The nature of the trapezium estimation boundary matches the local concavity of the curve graph:
* If the curve is **convex** (curving upwards, $\\frac{d^2y}{dx^2} > 0$), the straight trapezoidal lines pass above the curve, resulting in an **overestimation**.
* If the curve is **concave** (curving downwards, $\\frac{d^2y}{dx^2} < 0$), the trapezoidal lines pass below the curve, resulting in an **underestimation**.

---

#### Video Resource Guide
* **YouTube Search:** \`Trapezium rule estimating area under a curve math\`
* **Link to copy:** [https://www.youtube.com/results?search_query=Trapezium+rule+estimating+area+under+a+curve+math](https://www.youtube.com/results?search_query=Trapezium+rule+estimating+area+under+a+curve+math)

#### Practice Assignment
1. Estimate $\\int_{1}^{3} \\frac{1}{x} \\ dx$ using the Trapezium Rule with $4$ equal intervals (5 ordinates).
2. Given $I = \\int_{0}^{1} e^{-x^2} \\ dx$, check whether the Trapezium estimation represents an under/overestimate.`,
        quiz: {
          id: 'q-math306-l3',
          title: 'Trapezium Rule Test',
          questions: [
            {
              id: 'q-m306-l3-1',
              text: 'Under what concavity condition will the Trapezium Rule yield an UNDERESTIMATION of the actual value of an area?',
              options: [
                'When the curve has a positive straight gradient',
                'When the curve is concave downwards (d²y/dx² < 0)',
                'When the curve is convex upwards (d²y/dx² > 0)',
                'When the function contains only positive x values'
              ],
              correctAnswerIndex: 1,
              explanation: 'When a curve is concave downwards, the chord lines of the trapezoids fall strictly below the curve, yielding an underestimation of the area.'
            }
          ]
        }
      }
    ],
    exam: {
      id: 'ex-math-306',
      title: 'Numerical Methods & Approximations Exam',
      moduleId: 'mod-math-306',
      timeLimit: 30,
      questions: [
        {
          id: 'ex-m306-q1',
          text: 'What is the iterative formula of the Newton-Raphson method used to approximate roots of f(x) = 0?',
          options: [
            'x_{n+1} = x_n - f\'(x_n) / f(x_n)',
            'x_{n+1} = x_n - f(x_n) / f\'(x_n)',
            'x_{n+1} = x_n + f(x_n) f\'(x_n)',
            'x_{n+1} = (x_n + f(x_n)) / 2'
          ],
          correctAnswerIndex: 1,
          explanation: 'The Newton-Raphson formula is x_{n+1} = x_n - f(x_n) / f\'(x_n), which projects the tangent line from x_n onto the x-axis.'
        },
        {
          id: 'ex-m306-q2',
          text: 'When using the Interval Bisection method on f(x) = 0 in range [a, b], where f(a) < 0 and f(b) > 0, what condition must f(x) satisfy to guarantee a root exists?',
          options: [
            'f(x) must be strictly linear',
            'f(x) must be continuous across the interval [a, b]',
            'f(x) must have a positive second derivative',
            'The interval length must be exactly 1 unit'
          ],
          correctAnswerIndex: 1,
          explanation: 'By the Intermediate Value Theorem, f(x) must be continuous on [a, b] for a change of sign to guarantee at least one crossing (root).'
        },
        {
          id: 'ex-m306-q3',
          text: 'How does increasing the number of intervals (n) affect the error margin of a Trapezium Rule approximation?',
          options: [
            'It increases the error quadratically.',
            'It reduces the error margin because the trapezoid segments fit closer to the actual curve.',
            'It has no impact whatsoever on error margins.',
            'It changes an overestimation into an underestimation.'
          ],
          correctAnswerIndex: 1,
          explanation: 'As the width h of each trapezoid decreases (by increasing n), the linear chords approximate the curve more precisely, reducing error.'
        }
      ]
    }
  },
  {
    id: 'mod-math-307',
    areaId: 'math-307',
    title: 'Unit 7: Complex Numbers',
    description: 'Deconstruct complex conjugates, graph geometric locus paths on Argand diagrams, represent equations in polar Euler coordinates, and calculate root matrices via de Moivre\'s theorem.',
    libraryLinks: [
      { title: "ZIMSEC Pure Mathematics Past Papers Search", url: "https://www.youtube.com/results?search_query=ZIMSEC+A+level+pure+mathematics+past+papers" },
      { title: "De Moivre Theorem roots of unity", url: "https://www.youtube.com/results?search_query=De+Moivre+theorem+roots+of+unity+polar+form+complex+numbers" }
    ],
    lessons: [
      {
        id: 'math307-l1',
        moduleId: 'mod-math-307',
        title: '7.1 Modulus, Argument, and Argand Geometry',
        duration: 35,
        youtubeVideoId: 'U_Y3F8xQdOk',
        content: `### Study Notes: Argand Diagrams, Modulus Algebra, & Geometric Loci

Graphing relationships across complex dimensions.

---

#### 1. Complex Algebra
A complex number $z = x + iy$ consists of Real ($\\text{Re}(z)=x$) and Imaginary ($\\text{Im}(z)=y$) components:
* **Modulus (size):** $|z| = \\sqrt{x^2 + y^2}$
* **Argument (angle):** $\\arg(z) = \\theta = \\arctan\\left(\\frac{y}{x}\right)$, bounded between $-\\pi < \\theta \\le \\pi$ (principal argument).
* **Conjugate:** $z^* = x - iy$

#### 2. Locus of Points on Argand Coordinate Graphs
Paths containing complex constraints:
* **Circle Locus:** $|z - z_1| = R$
  Circles centered at point coordinate $z_1$ with radius $R$.
* **Perpendicular Bisector Locus:** $|z - z_1| = |z - z_2|$
  Perpendicular bisector joining point $z_1$ and $z_2$ directly.
* **Half-line (Ray) Locus:** $\\arg(z - z_1) = \\alpha$
  Ray line starting at (but excluding) $z_1$ moving at angle $\\alpha$ with real axis.

---

#### Video Resource Guide
* **YouTube Search:** \`Complex numbers loci on Argand diagrams A level math\`
* **Link to copy:** [https://www.youtube.com/results?search_query=Complex+numbers+loci+on+Argand+diagrams+A+level+math](https://www.youtube.com/results?search_query=Complex+numbers+loci+on+Argand+diagrams+A+level+math)

#### Practice Assignment
1. State the modulus and principal argument of $z = -1 - i\\sqrt{3}$.
2. On an Argand diagram, sketch the locus defined by $|z - 3| = |z - 5i|$.`,
        quiz: {
          id: 'q-math307-l1',
          title: 'Argand Diagrams Test',
          questions: [
            {
              id: 'q-m307-l1-1',
              text: 'Describe the geometric path represented by the locus equation |z - (2 + 3i)| = 5 on an Argand coordinate graph.',
              options: [
                'A straight perpendicular line passing through coordinates (2, 3)',
                'A circle centered at (2, 3) with a radius of 5',
                'A straight line inclined at 5 radians from real axis',
                'A modular ellipse centered at coordinates (3, 2)'
              ],
              correctAnswerIndex: 1,
              explanation: 'The constraint |z - z_1| = R represents a circle whose center is z_1 and whose radius is R. Here, z_1 = 2+3i, so the circle’s center is (2, 3) with radius 5.'
            }
          ]
        }
      },
      {
        id: 'math307-l2',
        moduleId: 'mod-math-307',
        title: '7.2 Polar Configurations & de Moivre\'s Theorem',
        duration: 40,
        youtubeVideoId: 'U_Y3F8xQdOk',
        content: `### Study Notes: Polar and Exponential Systems & Roots of Unity

Evaluating multiplications and fractional roots using angles.

---

#### 1. Polar and Exponential Form
Instead of Cartesian vectors, complex numbers map using angles:
$$z = r(\\cos\\theta + i\\sin\\theta) = r e^{i\\theta}$$

* **Multiplying Polars:** $z_1 z_2 = r_1 r_2 e^{i(\\theta_1 + \\theta_2)}$  *(multiply moduli, add arguments)*
* **Dividing Polars:** $\\frac{z_1}{z_2} = \\frac{r_1}{r_2} e^{i(\\theta_1 - \\theta_2)}$ *(divide moduli, subtract arguments)*

#### 2. de Moivre's Theorem
For any rational value $n$:
$$z^n = [r(\\cos\\theta + i\\sin\\theta)]^n = r^n (\\cos n\\theta + i\\sin n\\theta)$$

#### 3. Solving Complex Equation Roots
To solve $z^n = w = R e^{i\\phi}$, express the argument in periodic form $\\phi + 2k\\pi$:
$$z_k = R^{1/n} e^{i\\left(\\frac{\\phi + 2k\\pi}{n}\\right)} \\quad \\text{for } k = 0, 1, \\dots, n-1$$

This produces exactly $n$ distinct roots symmetrically distributed on a circle on the Argand diagram, spaced at angular intervals of $\\frac{2\\pi}{n}$.

---

#### Video Resource Guide
* **YouTube Search:** \`De Moivre theorem roots of unity polar form complex numbers\`
* **Link to copy:** [https://www.youtube.com/results?search_query=De+Moivre+theorem+roots+of+unity+polar+form+complex+numbers](https://www.youtube.com/results?search_query=De+Moivre+theorem+roots+of+unity+polar+form+complex+numbers)

#### Practice Assignment
1. Using de Moivre\'s theorem, find absolute values of $(1+i)^8$.
2. Resolve the complex roots of the equation $z^3 = 8i$, expressing results in polar coordinates.`,
        quiz: {
          id: 'q-math307-l2',
          title: 'de Moivre & Roots Test',
          questions: [
            {
              id: 'q-m307-l2-1',
              text: 'According to de Moivre\'s Theorem, what is the value of [r(cos(θ) + i sin(θ))]ⁿ?',
              options: [
                'rⁿ (cos(nθ) + i sin(nθ))',
                'n r (cos(θⁿ) + i sin(θⁿ))',
                'rⁿ (cosⁿ(θ) + i sinⁿ(θ))',
                'r (cos(nθ) - i sin(nθ))'
              ],
              correctAnswerIndex: 0,
              explanation: 'De Moivre\'s Theorem states that raising a complex number to a power n raises the scale modulus to power n and multiplies the argument angle by n.'
            }
          ]
        }
      }
    ],
    exam: {
      id: 'ex-math-307',
      title: 'Complex Numbers & de Moivre Sovereign Exam',
      moduleId: 'mod-math-307',
      timeLimit: 30,
      questions: [
        {
          id: 'ex-m307-q1',
          text: 'Convert the complex expression z = 1 + i√3 into exponential polar coordinates (r e^(iθ)).',
          options: ['2 e^(iπ/6)', '2 e^(iπ/3)', '√2 e^(iπ/4)', '4 e^(iπ/3)'],
          correctAnswerIndex: 1,
          explanation: 'r = √(1² + (√3)²) = √4 = 2. θ = arctan(√3 / 1) = π/3. Thus, z = 2 e^(iπ/3).'
        },
        {
          id: 'ex-m307-q2',
          text: 'What locus is described in the Argand diagram by the algebraic equation |z - 3 - 4i| = 5?',
          options: [
            'A perpendicular bisector of the line joining (0,0) and (3,4)',
            'A circle of radius 5 centered at the point (3, 4)',
            'A straight line passing through (3,4) with gradient 5',
            'A circle of radius 25 centered at the point (-3, -4)'
          ],
          correctAnswerIndex: 1,
          explanation: '|z - z_0| = r describes a circle centered at complex coordinate z_0 with radius r. Here, z_0 = 3 + 4i and r = 5.'
        },
        {
          id: 'ex-m307-q3',
          text: 'Using de Moivre\'s Theorem, express cos(3θ) in terms of powers of cos(θ).',
          options: [
            '3cos(θ) - 4cos³(θ)',
            '4cos³(θ) - 3cos(θ)',
            'cos³(θ) - 3cos(θ)sin²(θ)',
            '2cos³(θ) - 3cos(θ)'
          ],
          correctAnswerIndex: 1,
          explanation: 'Using (cos(θ) + i sin(θ))³ = cos(3θ) + i sin(3θ) and expanding yields the identity cos(3θ) = 4cos³(θ) - 3cos(θ).'
        }
      ]
    }
  }
];
