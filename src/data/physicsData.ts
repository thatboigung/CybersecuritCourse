import { RoadmapArea, Module } from '../types';

export const PHYSICS_ROADMAP_AREAS: RoadmapArea[] = [
  {
    id: 'phys-u1',
    name: 'General Physics, Error Analysis, and Vectors',
    description: 'Foundational frameworks for mathematical measurements, dimensional checks, and graphical error calculations.',
    icon: 'Compass',
    color: 'blue',
    courseGroup: 'physics'
  },
  {
    id: 'phys-u2',
    name: 'Newtonian Mechanics & Robotics',
    description: 'Analyzing structural forces in static equilibrium, linear motion paths, orbital field equations, and automation.',
    icon: 'Activity',
    color: 'indigo',
    courseGroup: 'physics'
  },
  {
    id: 'phys-u3',
    name: 'Oscillations, Waves, and Superposition',
    description: 'The mathematical and graphical representation of simple harmonic systems and waveform optics.',
    icon: 'Shuffle',
    color: 'rose',
    courseGroup: 'physics'
  },
  {
    id: 'phys-u4',
    name: 'Electricity, DC Circuits, and Capacitance',
    description: 'The management, routing, and accumulation properties of electrical networks.',
    icon: 'Zap',
    color: 'amber',
    courseGroup: 'physics'
  },
  {
    id: 'phys-u5',
    name: 'Electromagnetism, Induction, and AC Networks',
    description: 'Dynamic interactions inside magnetic fields, transformation ratios, and rectification mechanisms.',
    icon: 'Cpu',
    color: 'violet',
    courseGroup: 'physics'
  },
  {
    id: 'phys-u6',
    name: 'Analogue & Digital Electronics',
    description: 'Operational amplifiers, feedback loops, logic structures, and digital applications.',
    icon: 'Sliders',
    color: 'emerald',
    courseGroup: 'physics'
  },
  {
    id: 'phys-u7',
    name: 'Phases of Matter & Thermal Dynamics',
    description: 'Microscopic models of states, deformation limits, tracking scale conversions, and gas equations.',
    icon: 'Thermometer',
    color: 'rose',
    courseGroup: 'physics'
  },
  {
    id: 'phys-u8',
    name: 'Modern & Quantum Physics',
    description: 'Wave-particle duality, atomic fields, mass excess, ionizing radiation, and communication links.',
    icon: 'Sparkles',
    color: 'cyan',
    courseGroup: 'physics'
  },
  {
    id: 'phys-exam',
    name: 'Physics Examination Model',
    description: 'The structure of examination papers and strategic past paper reviews.',
    icon: 'GraduationCap',
    color: 'indigo',
    courseGroup: 'physics'
  }
];

export const PHYSICS_MODULES: Module[] = [
  {
    id: 'mod-physics-u1',
    areaId: 'phys-u1',
    title: 'Unit 1: General Physics, Error Analysis, and Vectors',
    description: 'Foundational frameworks for mathematical measurements, dimensional checks, and graphical error calculations.',
    lessons: [
      {
        id: 'phys-u1-l1',
        moduleId: 'mod-physics-u1',
        title: '1.1 Base Quantities, Units, and Equation Homogeneity',
        duration: 25,
        youtubeVideoId: 'f0epc9wN_q8',
        content: `### 1.1 Base Quantities, Units, and Equation Homogeneity

#### Core Theoretical Foundations

Physics models properties using established dimensional foundations. Any physical parameter is represented as a product of a numerical magnitude and its respective unit.

##### Dimensional Homogeneity
A scientific formula represents a physical reality and must satisfy the constraint of **dimensional homogeneity**.
* Every distinct additive or subtractive term across both sides of an equation must map to identical base SI units.
* If a physical equation is dimensionally homogenous, it could be physically correct (though dimensionless constants like $2\\pi$ or coefficients may still be wrong). If it is not dimensionally homogeneous, it is mathematically and physically impossible.

##### Example Check
Verify the homogeneity of the kinematic distance equation:
$$s = ut + \\frac{1}{2}at^2$$

Evaluating each term's dimensions:
1. **Left hand side (displacement $s$):** $[s] = \\text{m}$ (meters)
2. **Right hand side (initial velocity term $ut$):** $[ut] = (\\text{m}\\cdot\\text{s}^{-1}) \\times \\text{s} = \\text{m}$
3. **Right hand side (acceleration term $\\frac{1}{2}at^2$):** $[at^2] = (\\text{m}\\cdot\\text{s}^{-2}) \\times \\text{s}^2 = \\text{m}$ (Note: the constant $\\frac{1}{2}$ is dimensionless).

All terms resolve perfectly to meters ($[\\text{m}]$). Therefore, this equation is **homogeneous**.

---

### 📺 Video Study Guide

Copy and paste these search links into your browser to watch live solution breakdowns:

* **YouTube Search:** [Checking homogeneity of physical equations A level physics](https://www.youtube.com/results?search_query=Checking+homogeneity+of+physical+equations+A+level+physics)
`,
        quiz: {
          id: 'q-phys-u1-l1',
          title: 'Homogeneity Check',
          questions: [
            {
              id: 'q-phys-u1-1',
              text: 'Which of the following is a fundamental base SI unit rather than a derived unit?',
              options: ['Newton', 'Watt', 'Kelvin', 'Joule'],
              correctAnswerIndex: 2,
              explanation: 'Kelvin is one of the seven base SI units. Newton, Watt, and Joule are all derived units.'
            }
          ]
        }
      },
      {
        id: 'phys-u1-l2',
        moduleId: 'mod-physics-u1',
        title: '1.2 Errors, Uncertainties, and Data Presentation',
        duration: 25,
        youtubeVideoId: 'h8Sby_Z7H2A',
        content: `### 1.2 Errors, Uncertainties, and Data Presentation

#### Distinguishing Variations
* **Systematic Errors:** Constant variations that displace observations away from correct values by the same constant direction (e.g., zero errors in calipers, incorrect calibration). Can be corrected via calibration but not by averaging.
* **Random Errors:** Fluctuating, unpredictable variations that scatter coordinates in both directions around a mean point due to parallax, ambient shifts, and reaction ticks. Reduced significantly by repeated trials and computing averages.

#### Accuracy vs. Precision
* **Accuracy:** How close the average of experimental recordings rests relative to the true accepted values.
* **Precision:** The tight clustering or range span of recordings, irrespective of whether the baseline center mirrors the correct standard coordinate.

#### Compounding Composite Percentage Uncertainties
When manipulating physical quantities mathematically, uncertainties propagate:
* **Sum/Difference ($z = x \\pm y$):** Add **absolute** uncertainties:
  $$\\Delta z = \\Delta x + \\Delta y$$
* **Product/Quotient ($z = x^a y^b$):** Add **fractional/percentage** uncertainties multiplied by powers:
  $$\\frac{\\Delta z}{z} = a\\frac{\\Delta x}{x} + b\\frac{\\Delta y}{y}$$

---

### 📺 Video Study Guide

Practice compounding fractional errors with this resource:

* **YouTube Search:** [Errors and uncertainties combining absolute percentage uncertainty A level](https://www.youtube.com/results?search_query=Errors+and+uncertainties+combining+absolute+percentage+uncertainty+A+level)
`,
        quiz: {
          id: 'q-phys-u1-l2',
          title: 'Uncertainties Quiz',
          questions: [
            {
              id: 'q-phys-u1-2-1',
              text: 'If a voltage measurement V has an uncertainty of 2% and current I has an uncertainty of 3%, what is the uncertainty of resistance R = V/I?',
              options: ['1%', '5%', '6%', '1.5%'],
              correctAnswerIndex: 1,
              explanation: 'For division, we add the percentage uncertainties: 2% + 3% = 5%.'
            }
          ]
        }
      },
      {
        id: 'phys-u1-l3',
        moduleId: 'mod-physics-u1',
        title: '1.3 Vector Resolving and Coplanar Resultants',
        duration: 30,
        youtubeVideoId: 'SFA8SIsG_qY',
        content: `### 1.3 Vector Resolving and Coplanar Resultants

#### Concepts

Vectors are physical quantities possessing both magnitude and spatial direction.

##### Resolving vectors into components
Any vector $F$ inclined at an angle $\\theta$ relative to a horizontal axis can be mathematically split into two mutually perpendicular independent elements:
* **Horizontal scalar element:**
  $$F_x = F \\cos\\theta$$
* **Vertical scalar element:**
  $$F_y = F \\sin\\theta$$

This allows calculating complex resultants for overlapping coplanar arrays in equilibrium by resolving them into independent $x$ and $y$ vectors, and summing them up algebraically.

---

### 📺 Video Study Guide

Learn how to resolve vectors in mechanics:

* **YouTube Search:** [Resolving vectors into perpendicular components physics](https://www.youtube.com/results?search_query=Resolving+vectors+into+perpendicular+components+physics)
`,
        quiz: {
          id: 'q-phys-u1-l3',
          title: 'Vectors Quiz',
          questions: [
            {
              id: 'q-phys-u1-3-1',
              text: 'What horizontal component does a 10 Newton force vector have if it is inclined 60 degrees to the horizontal plane?',
              options: ['8.66 N', '5.00 N', '7.07 N', '10.0 N'],
              correctAnswerIndex: 1,
              explanation: 'F_x = 10 * cos(60 degrees) = 10 * 0.5 = 5.0 Newtons.'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'mod-physics-u2',
    areaId: 'phys-u2',
    title: 'Unit 2: Newtonian Mechanics & Robotics',
    description: 'Analyzing structural forces in static equilibrium, linear motion paths, orbital field equations, and automation.',
    lessons: [
      {
        id: 'phys-u2-l1',
        moduleId: 'mod-physics-u2',
        title: '2.1 Kinematics & Projectile Motion Trajectories',
        duration: 25,
        youtubeVideoId: 'mNAsE6T0Gf0',
        content: `### 2.1 Kinematics & Projectile Motion Trajectories

#### Dynamics along Parallel Fields
By decoupling horizontal movements from gravity drops, we formulate two parallel kinematics expressions:
* **Horizontal Axis Movement:** No active horizontal acceleration exists ($\\,a_x = 0$) neglecting drag:
  $$x = v_x \\cdot t$$
* **Vertical Axis Drop:** Subject to uniform acceleration due to gravity ($g$):
  $$y = v_{0y}t - \\frac{1}{2}gt^2$$

This forms the foundations to find range limits, maximum coordinates, and projectile velocities.

---

### 📺 Video Study Guide

Follow dynamic sample question workouts:

* **YouTube Search:** [Projectile motion resolution and calculations A level physics](https://www.youtube.com/results?search_query=Projectile+motion+resolution+and+calculations+A+level+physics)
`,
        quiz: {
          id: 'q-phys-u2-l1',
          title: 'Kinematics Check',
          questions: [
            {
              id: 'q-phys-u2-1-1',
              text: 'What acceleration dictates horizontal velocity changes of a projectile when air resistance is neglected?',
              options: ['9.81 m/s^2', '0 m/s^2', '4.9 m/s^2', 'It varies with the projection angle'],
              correctAnswerIndex: 1,
              explanation: 'With negligible air drag resistance, no horizontal forces act, hence ax = 0.'
            }
          ]
        }
      },
      {
        id: 'phys-u2-l2',
        moduleId: 'mod-physics-u2',
        title: '2.2 Dynamics, Linear Momentum, and Impulse',
        duration: 25,
        youtubeVideoId: 'mNAsE6T0Gf0',
        content: `### 2.2 Dynamics, Linear Momentum, and Impulse

#### Mechanical Conservation Rules
Newton's three laws establish that force is the rate of exchange of linear momentum:
$$F = \\frac{dp}{dt}$$

##### Collision Types
* **Elastic Collisions:** Both total kinetic energy and total linear momentum are conserved. Relative speed of approach equals relative speed of separation:
  $$u_1 - u_2 = v_2 - v_1$$
* **Inelastic Collisions:** Momentum conserved, but overall kinetic energy decreases (lost to sound, heat, and internal deformation).

* **Force-Time Boundaries:** The total impulse corresponds to the definite integral of force over time, represented by the area bounded beneath the $F-t$ curve:
  $$\\text{Impulse} = \\Delta p = \\int F \\, dt$$

---

### 📺 Video Study Guide

* **YouTube Search:** [Conservation of momentum elastic inelastic collisions A level physics](https://www.youtube.com/results?search_query=Conservation+of+momentum+elastic+inelastic+collisions+A+level+physics)
`,
        quiz: {
          id: 'q-phys-u2-l2',
          title: 'Collision Mechanics',
          questions: [
            {
              id: 'q-phys-u2-2-1',
              text: 'Which physical quantity is always conserved in both elastic and inelastic collisions?',
              options: ['Kinetic Energy', 'Mechanical Velocity', 'Linear Momentum', 'Rotational Torque'],
              correctAnswerIndex: 2,
              explanation: 'Linear momentum remains universally conserved in isolated collision networks.'
            }
          ]
        }
      },
      {
        id: 'phys-u2-l3',
        moduleId: 'mod-physics-u2',
        title: '2.3 Fluid Forces, Viscosity, and Equilibrium',
        duration: 30,
        youtubeVideoId: 'mNAsE6T0Gf0',
        content: `### 2.3 Fluid Forces, Viscosity, and Equilibrium

#### Drag Coefficients & Upthrust
When a body sinks through a medium, it feels three forces: gravity ($W$), buoyancy upthrust ($U$), and viscous drag ($F_d$).

##### Upthrust (Archimedes' Principle)
The upward force is equal to the weight of the fluid volume displaced:
$$U = \\rho_f V_d g$$

##### Stoke's Law Viscous Drag
For a smooth sphere of radius $r$ sliding at velocity $v$ inside a laminar fluid, viscous drag is modeled by:
$$F_d = 6\\pi\\eta r v$$

Where $\\eta$ represents the fluid's dynamic viscosity.

At **Terminal Velocity**, net physical acceleration resets to zero:
$$W = U + F_d$$

---

### 📺 Video Study Guide

Observe fluid dynamics terminal physics demonstrations:

* **YouTube Search:** [Stokes law terminal velocity and viscosity experiment physics](https://www.youtube.com/results?search_query=Stokes+law+terminal+velocity+and+viscosity+experiment+physics)
`,
        quiz: {
          id: 'q-phys-u2-l3',
          title: 'Fluid Viscosity',
          questions: [
            {
              id: 'q-phys-u2-3-1',
              text: 'What happens to the acceleration of a falling sphere when it reaches terminal velocity inside a viscous oil column?',
              options: ['It equals gravity', 'It reaches its maximum', 'It becomes exactly 0', 'It changes direction'],
              correctAnswerIndex: 2,
              explanation: 'At terminal velocity, the upward forces perfectly balance the down-weight, keeping acceleration at 0.'
            }
          ]
        }
      },
      {
        id: 'phys-u2-l4',
        moduleId: 'mod-physics-u2',
        title: '2.4 Work, Energy, Power, and Rotational Torque',
        duration: 25,
        youtubeVideoId: 'mNAsE6T0Gf0',
        content: `### 2.4 Work, Energy, Power, and Rotational Torque

#### Work and Expansion Mechanics
* **Gas Volume Shifts:** Work done by an expanding gas against constant external pressure ($P$) matches:
  $$W = P \\Delta V$$
* **Torque Couples:** The turning moment of a couple is the product of one force ($F$) and the perpendicular distance ($d$) between the forces:
  $$\\text{Torque} = F \\cdot d$$

---

### 📺 Video Study Guide

* **YouTube Search:** [Work done by an expanding gas thermodynamics physics](https://www.youtube.com/results?search_query=Work+done+by+an+expanding+gas+thermodynamics+physics)
`,
        quiz: {
          id: 'q-phys-u2-l4',
          title: 'Torque and Work',
          questions: [
            {
              id: 'q-phys-u2-4-1',
              text: 'A gas expands from 0.02 m^3 to 0.05 m^3 at a constant pressure of 100 kPa. Calculate the work done by the gas.',
              options: ['3 kJ', '30 kJ', '300 J', '30 J'],
              correctAnswerIndex: 0,
              explanation: 'W = P * dV = 100,000 Pa * (0.05 - 0.02) m^3 = 3000 Joules = 3 kJ.'
            }
          ]
        }
      },
      {
        id: 'phys-u2-l5',
        moduleId: 'mod-physics-u2',
        title: '2.5 Uniform Circular Motion Mechanics',
        duration: 25,
        youtubeVideoId: 'mNAsE6T0Gf0',
        content: `### 2.5 Uniform Circular Motion Mechanics

#### Circular Motion Fields
* **Angular Velocity ($\\omega$):** The rate of change of angular displacement in radians:
  $$\\omega = \\frac{v}{r} = 2\\pi f$$
* **Centripetal Acceleration ($a_c$):** Real acceleration directed radially inward:
  $$a_c = \\frac{v^2}{r} = r \\omega^2$$

---

### 📺 Video Study Guide

* **YouTube Search:** [Centripetal acceleration and force calculations physics](https://www.youtube.com/results?search_query=Centripetal+acceleration+and+force+calculations+physics)
`,
        quiz: {
          id: 'q-phys-u2-l5',
          title: 'Circular Motion',
          questions: [
            {
              id: 'q-phys-u2-5-1',
              text: 'How is centripetal acceleration mathematically related to linear speed v and radius r?',
              options: ['a = v/r', 'a = v^2 * r', 'a = v^2 / r', 'a = v * r^2'],
              correctAnswerIndex: 2,
              explanation: 'Centripetal acceleration a = v^2/r.'
            }
          ]
        }
      },
      {
        id: 'phys-u2-l6',
        moduleId: 'mod-physics-u2',
        title: '2.6 Gravitational Fields & Satellite Orbits',
        duration: 30,
        youtubeVideoId: 'mNAsE6T0Gf0',
        content: `### 2.6 Gravitational Fields & Satellite Orbits

#### Principles

Gravitation models the attraction between masses across physical distances.

##### 1. Newton's Inverse-Square Law
The mechanical attractive force between two point masses $m_1$ and $m_2$ separated by distance $r$ is:
$$F = \\frac{G m_1 m_2}{r^2}$$

##### 2. Field Strengths ($g$) & Potentials ($\\phi$)
* **Field Strength:** The force per unit mass:
  $$g = \\frac{G M}{r^2}$$
* **Gravitational Potential:** The work done per unit mass in bringing a test mass from infinity to a point:
  $$\\phi = -\\frac{G M}{r}$$
  The negative sign represents the attractive baseline nature of gravity fields.

---

### 📺 Video Study Guide

* **YouTube Search:** [Gravitational potential energy and satellite orbits A level physics](https://www.youtube.com/results?search_query=Gravitational+potential+energy+and+satellite+orbits+A+level+physics)
`,
        quiz: {
          id: 'q-phys-u2-l6',
          title: 'Gravity Fields',
          questions: [
            {
              id: 'q-phys-u2-6-1',
              text: 'Why is the gravitational potential of any massive body defined as negative?',
              options: ['Because gravity forces repel test masses', 'Because work must be done by an external agent to bring a mass closer', 'Because the potential energy is zero at infinity, and gravity is an attractive force', 'Because of core kinetic limits'],
              correctAnswerIndex: 2,
              explanation: 'Since gravity is attractive, work is done by the field rather than on it when moving from infinity. Energy decreases below reference zero.'
            }
          ]
        }
      },
      {
        id: 'phys-u2-l7',
        moduleId: 'mod-physics-u2',
        title: '2.7 Principles of Robotic Systems',
        duration: 35,
        youtubeVideoId: 'mNAsE6T0Gf0',
        content: `### 2.7 Principles of Robotic Systems

#### Concepts

This module examines modern microcontroller nodes (ESP32, Arduino, Raspberry Pi) processing live sensory streams.

##### Microcontrollers & Hardware I/O
* **Digital Inputs/Outputs:** Reading toggle states (e.g., switches) and writing binary control signals (e.g., to relays or motor drivers).
* **Analog Sensors:** Reading variable physical coordinates (such as ambient temperature or light intensity) by mapping analog voltages through an Analog-to-Digital Converter (ADC).
* **Actuation Drivers:** Controlling physical robotic motors and servos using precise PWM signals to steer mechanical joints and drives.

---

### 📺 Video Study Guide

* **YouTube Search:** [ESP32 microcontroller interfacing sensors and actuators robotics](https://www.youtube.com/results?search_query=ESP32+microcontroller+interfacing+sensors+and+actuators+robotics)
`,
        quiz: {
          id: 'q-phys-u2-l7',
          title: 'Embedded Robotics',
          questions: [
            {
              id: 'q-phys-u2-7-1',
              text: 'Which chip mechanism converts real-world fluctuating physical voltage measurements into binary data fields?',
              options: ['The DAC', 'The ADC', 'The CPU ALU', 'The H-Bridge driver'],
              correctAnswerIndex: 1,
              explanation: 'The Analog-to-Digital Converter (ADC) translates analog voltage fluctuations into distinct numeric metrics.'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'mod-physics-u3',
    areaId: 'phys-u3',
    title: 'Unit 3: Oscillations, Waves, and Superposition',
    description: 'The mathematical and graphical representation of simple harmonic systems and waveform optics.',
    lessons: [
      {
        id: 'phys-u3-l1',
        moduleId: 'mod-physics-u3',
        title: '3.1 Simple Harmonic Motion (SHM) Frameworks',
        duration: 25,
        youtubeVideoId: 'f0epc9wN_q8',
        content: `### 3.1 Simple Harmonic Motion (SHM) Frameworks

#### Mathematical and Graphical SHM

SHM defines acceleration as directly proportional to displacement, but directed in the opposite direction toward the equilibrium center:
$$a = -\\omega^2 x$$

##### Displacement Equation
$$x = x_0 \\sin(\\omega t)$$

##### Velocity profile
$$v = \\pm \\omega \\sqrt{x_0^2 - x^2}$$

---

### 📺 Video Study Guide

* **YouTube Search:** [Simple harmonic motion equations displacement velocity acceleration](https://www.youtube.com/results?search_query=Simple+harmonic+motion+equations+displacement+velocity+acceleration)
`,
        quiz: {
          id: 'q-phys-u3-l1',
          title: 'SHM Check',
          questions: [
            {
              id: 'q-phys-u3-1-1',
              text: 'At what displacement position is the velocity of an SHM oscillator maximized?',
              options: ['Maximum displacement', 'Zero displacement (equilibrium)', 'At half amplitude', 'At terminal boundaries'],
              correctAnswerIndex: 1,
              explanation: 'From v = w * sqrt(x0^2 - x^2), velocity is highest when displacement x = 0.'
            }
          ]
        }
      },
      {
        id: 'phys-u3-l2',
        moduleId: 'mod-physics-u3',
        title: '3.2 Superposition, Coherence, and Stationary Waves',
        duration: 30,
        youtubeVideoId: 'f0epc9wN_q8',
        content: `### 3.2 Superposition, Coherence, and Stationary Waves

#### Waves Principles
* **Nodes vs. Antinodes:** Nodes correspond to locations of zero displacement (complete destructive interference). Antinodes correspond to locations of maximum displacement (constructive interference).
* **Tomography Matrices (CT-scans):** Analyzing multi-angle X-ray path intersections to compile complex cross-sectional maps of internal tissue densities.

---

### 📺 Video Study Guide

* **YouTube Search:** [Stationary waves on strings and air columns physics](https://www.youtube.com/results?search_query=Stationary+waves+on+strings+and+air+columns+physics)
`,
        quiz: {
          id: 'q-phys-u3-l2',
          title: 'Wave Superposition',
          questions: [
            {
              id: 'q-phys-u3-2-1',
              text: 'In a stationary wave system, what displacement property resides at a node position?',
              options: ['Maximal displacement', 'Continually rotating phase angles', 'Zero displacement tracking the node', 'A varying phase profile'],
              correctAnswerIndex: 2,
              explanation: 'Nodes represent stationary locations of zero amplitude.'
            }
          ]
        }
      },
      {
        id: 'phys-u3-l3',
        moduleId: 'mod-physics-u3',
        title: "3.3 Wave Interference, Young's Double-Slit, and Diffraction Gratings",
        duration: 30,
        youtubeVideoId: 'f0epc9wN_q8',
        content: `### 3.3 Wave Interference, Young's Double-Slit, and Diffraction Gratings

#### Optical Wavefront Interferences
* **Young's Double-Slit:** Computing optical fringe intervals:
  $$x = \\frac{\\lambda D}{a}$$
* **Diffraction Gratings:** Calculating distinct maxima:
  $$d \\sin\\theta = n \\lambda$$

---

### 📺 Video Study Guide

* **YouTube Search:** [Youngs double slit experiment fringe spacing physics](https://www.youtube.com/results?search_query=Youngs+double+slit+experiment+fringe+spacing+physics)
`,
        quiz: {
          id: 'q-phys-u3-l3',
          title: 'Diffraction Gratings',
          questions: [
            {
              id: 'q-phys-u3-3-1',
              text: 'What is represented by a in the Youngs double slit formula x = d*L/a?',
              options: ['The screen distance', 'The source wavelength', 'The separation spacing between slits', 'Fringe resolution'],
              correctAnswerIndex: 2,
              explanation: 'In the formula x = L * lambda / a, a represents the distance separating the slits.'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'mod-physics-u4',
    areaId: 'phys-u4',
    title: 'Unit 4: Electricity, DC Circuits, and Capacitance',
    description: 'The management, routing, and accumulation properties of electrical networks.',
    lessons: [
      {
        id: 'phys-u4-l1',
        moduleId: 'mod-physics-u4',
        title: '4.1 Charge Properties, Resistivity, and Real Sources',
        duration: 25,
        youtubeVideoId: 'SFA8SIsG_qY',
        content: `### 4.1 Charge Properties, Resistivity, and Real Sources

#### Material Impedance & EMF
* **Resistivity:** Resistance is determined by material resistivity ($\\rho$), length ($l$), and cross-sectional area ($A$):
  $$R = \\frac{\\rho l}{A}$$
* **Internal Resistance:** Real-world battery EMF ($E$) includes an internal resistance ($r$). Terminal potential difference ($V$) drops under current load ($I$):
  $$V = E - I r$$

---

### 📺 Video Study Guide

* **YouTube Search:** [Internal resistance and electromotive force A level physics](https://www.youtube.com/results?search_query=Internal+resistance+and+electromotive+force+A+level+physics)
`,
        quiz: {
          id: 'q-phys-u4-l1',
          title: 'Resistivity and EMF',
          questions: [
            {
              id: 'q-phys-u4-1-1',
              text: 'How does the resistance of a copper wire change if we double its physical length and double its cross-sectional area?',
              options: ['It quadruples', 'It halves', 'It remains unchanged', 'It doubles'],
              correctAnswerIndex: 2,
              explanation: 'Since R = rho * l / A, doubling both l and A cancels out, keeping resistance unchanged.'
            }
          ]
        }
      },
      {
        id: 'phys-u4-l2',
        moduleId: 'mod-physics-u4',
        title: "4.2 Kirchhoff's Laws & Potential Dividers",
        duration: 30,
        youtubeVideoId: 'SFA8SIsG_qY',
        content: `### 4.2 Kirchhoff's Laws & Potential Dividers

#### Network Analysis Frameworks
* **Kirchhoff's First Law:** Total current entering any node equals total current leaving it (conservation of charge).
* **Kirchhoff's Second Law:** The algebraic sum of electromagnetic forces equals the sum of potential drops around any closed loop (conservation of energy):
  $$\\sum E = \\sum I R$$
* **Potential Dividers:** Dividing output voltages recursively using series resistors:
  $$V_{\\text{out}} = V_{\\text{in}} \\left( \\frac{R_2}{R_1 + R_2} \\right)$$

Excellent for designing light or temperature sensors using light-dependent resistors (LDRs) and thermistors.

---

### 📺 Video Study Guide

* **YouTube Search:** [Kirchhoffs laws circuit loops conservation of energy](https://www.youtube.com/results?search_query=Kirchhoffs+laws+circuit+loops+conservation+of+energy)
`,
        quiz: {
          id: 'q-phys-u4-l2',
          title: 'Kirchhoff Checks',
          questions: [
            {
              id: 'q-phys-u4-2-1',
              text: 'Which physical conservation rule forms the basis of Kirchhoffs second law?',
              options: ['Conservation of momentum', 'Conservation of charge', 'Conservation of energy', 'Conservation of mass'],
              correctAnswerIndex: 2,
              explanation: 'Kirchhoffs Second Law (voltage rule) is direct representation of the conservation of energy.'
            }
          ]
        }
      },
      {
        id: 'phys-u4-l3',
        moduleId: 'mod-physics-u4',
        title: "4.3 Electric Fields & Coulomb's Law Forces",
        duration: 30,
        youtubeVideoId: 'SFA8SIsG_qY',
        content: `### 4.3 Electric Fields & Coulomb's Law Forces

#### Electric Field Foundations
* **Uniform Parallel Fields:** Field strength ($E$) between parallel plates separated by distance $d$ under potential difference $V$ is:
  $$E = \\frac{V}{d}$$
* **Coulomb's Law Point-Charge Force:** Force between two charges in a vacuum:
  $$F = \\frac{Q_1 Q_2}{4 \\pi \\varepsilon_0 r^2}$$

---

### 📺 Video Study Guide

* **YouTube Search:** [Coulombs law and electric field strength point charges](https://www.youtube.com/results?search_query=Coulombs+law+and+electric+field+strength+point+charges)
`,
        quiz: {
          id: 'q-phys-u4-l3',
          title: 'Electric Fields',
          questions: [
            {
              id: 'q-phys-u4-3-1',
              text: 'What shape describes a charged particle path passing horizontally inside uniform vertical electric fields?',
              options: ['Circular loop', 'Parabolic path', 'Linear path', 'Helical path'],
              correctAnswerIndex: 1,
              explanation: 'Like projectile movement under constant gravity acceleration, electric fields project charges along a parabolic trajectory.'
            }
          ]
        }
      },
      {
        id: 'phys-u4-l4',
        moduleId: 'mod-physics-u4',
        title: '4.4 Capacitance and Charge Storage Networks',
        duration: 30,
        youtubeVideoId: 'SFA8SIsG_qY',
        content: `### 4.4 Capacitance and Charge Storage Networks

#### Capacitance Formulations
* **Capacitance Definition:**
  $$C = \\frac{Q}{V}$$
* **Series Capacitance:** Reciprocal sum:
  $$\\frac{1}{C_{\\text{total}}} = \\frac{1}{C_1} + \\frac{1}{C_2} + \\dots$$
* **Parallel Capacitance:** Directly additive:
  $$C_{\\text{total}} = C_1 + C_2 + \\dots$$
* **Energy Stored:** Determined by the area under the potential-charge curves:
  $$W = \\frac{1}{2} Q V = \\frac{1}{2} C V^2$$

---

### 📺 Video Study Guide

* **YouTube Search:** [Energy stored in a capacitor derivation and calculations](https://www.youtube.com/results?search_query=Energy+stored+in+a+capacitor+derivation+and+calculations)
`,
        quiz: {
          id: 'q-phys-u4-l4',
          title: 'Capacitance Quiz',
          questions: [
            {
              id: 'q-phys-u4-4-1',
              text: 'Two 10 uF capacitors are linked in parallel. What is their combined total capacitance?',
              options: ['5 uF', '20 uF', '10 uF', '1 uF'],
              correctAnswerIndex: 1,
              explanation: 'For parallel configurations, capacitance adds directly: 10 uF + 10 uF = 20 uF.'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'mod-physics-u5',
    areaId: 'phys-u5',
    title: 'Unit 5: Electromagnetism, Induction, and AC Networks',
    description: 'Dynamic interactions inside magnetic fields, transformation ratios, and rectification mechanisms.',
    lessons: [
      {
        id: 'phys-u5-l1',
        moduleId: 'mod-physics-u5',
        title: '5.1 Magnetic Fields, Conducting Forces, and Hall Probes',
        duration: 25,
        youtubeVideoId: 'SFA8SIsG_qY',
        content: `### 5.1 Magnetic Fields, Conducting Forces, and Hall Probes

#### Concepts
Magnetic fields exert physical forces on both moving electric changes and current-carrying conductors.

##### Conductor Force (Laplace Force)
$$F = B I L \\sin\\theta$$

##### Moving Ion Path (Lorentz Force)
$$F = B q v \\sin\\theta$$

##### Hall Effect
Measuring magnetic fields by recording Hall voltage ($V_H$) generated across a conductor boundary in perpendicular fields:
$$V_H = \\frac{B I}{n t e}$$

---

### 📺 Video Study Guide

* **YouTube Search:** [Magnetic force on a moving charge in a magnetic field](https://www.youtube.com/results?search_query=Magnetic+force+on+a+moving+charge+in+a+magnetic+field)
`,
        quiz: {
          id: 'q-phys-u5-l1',
          title: 'Lorentz Force Checks',
          questions: [
            {
              id: 'q-phys-u5-1-1',
              text: 'What trajectory describes an electron moving exactly perpendicular to a uniform magnetic field?',
              options: ['Parabolic trajectory', 'Strictly circular path', 'Linear forward path', 'Expanding spiral'],
              correctAnswerIndex: 1,
              explanation: 'Because magnetic force stays perpendicular to velocity, it acts as centripetal force, routing the electron in circular coordinates.'
            }
          ]
        }
      },
      {
        id: 'phys-u5-l2',
        moduleId: 'mod-physics-u5',
        title: '5.2 Electromagnetic Induction Laws',
        duration: 30,
        youtubeVideoId: 'SFA8SIsG_qY',
        content: `### 5.2 Electromagnetic Induction Laws

#### Flux Dynamics & Induction
* **Magnetic Flux ($\\Phi$):** Defined as:
  $$\\Phi = B A$$
* **Faraday's Law of Induction:** The induced electromotive force is directly proportional to the rate of change of magnetic flux linkage:
  $$E = - N \\frac{d\\Phi}{dt}$$
* **Lenz's Law:** The polarity of induced EMF creates currents whose magnetic fields directly oppose the initial flux changes that produced them (conservation of energy).

---

### 📺 Video Study Guide

* **YouTube Search:** [Faradays law and Lenzs law electromagnetic induction](https://www.youtube.com/results?search_query=Faradays+law+and+Lenzs+law+electronic+induction)
`,
        quiz: {
          id: 'q-phys-u5-l2',
          title: 'Induction Quiz',
          questions: [
            {
              id: 'q-phys-u5-2-1',
              text: 'Which physical principle underlies Lenzs law?',
              options: ['Conservation of energy', 'Conservation of charge', 'Conservation of momentum', 'Newtonian gravity'],
              correctAnswerIndex: 0,
              explanation: 'Lenzs law ensures energy is conserved. Work must be done to displace magnet fields to induce power.'
            }
          ]
        }
      },
      {
        id: 'phys-u5-l3',
        moduleId: 'mod-physics-u5',
        title: '5.3 Alternating Currents, Transformers, and Rectification',
        duration: 30,
        youtubeVideoId: 'SFA8SIsG_qY',
        content: `### 5.3 Alternating Currents, Transformers, and Rectification

#### AC Power
* **RMS Formulas:** Current (or voltage) producing equivalent heating power as stable DC:
  $$I_{\\text{rms}} = \\frac{I_0}{\\sqrt{2}}$$
* **Ideal Transformers:** Relation between coil winding turns ($N$) and voltage ($V$):
  $$\\frac{V_s}{V_p} = \\frac{N_s}{N_p} = \\frac{I_p}{I_s}$$
* **Diode Bridge Rectification:** Translating oscillating AC waves into DC pipelines using a four-diode bridge network with smoothing capacitors.

---

### 📺 Video Study Guide

* **YouTube Search:** [Full wave bridge rectifier smoothing capacitor physics](https://www.youtube.com/results?search_query=Full+wave+bridge+rectifier+smoothing+capacitor+physics)
`,
        quiz: {
          id: 'q-phys-u5-l3',
          title: 'AC Networks Check',
          questions: [
            {
              id: 'q-phys-u5-3-1',
              text: 'If a peak AC voltage is 340 V, what is its root-mean-square (RMS) value?',
              options: ['240 V', '340 V', '170 V', '120 V'],
              correctAnswerIndex: 0,
              explanation: 'V_rms = V_0 / sqrt(2) = 340 / 1.414 = 240 Volts.'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'mod-physics-u6',
    areaId: 'phys-u6',
    title: 'Unit 6: Analogue & Digital Electronics',
    description: 'Operational amplifiers, feedback loops, logic structures, and digital applications.',
    lessons: [
      {
        id: 'phys-u6-l1',
        moduleId: 'mod-physics-u6',
        title: '6.1 Operational Amplifiers (Op-Amps) & Control Elements',
        duration: 35,
        youtubeVideoId: 'SFA8SIsG_qY',
        content: `### 6.1 Operational Amplifiers (Op-Amps) & Control Elements

#### Operational Amplifier Behavior
* **Properties of Ideal Op-Amps:** Infinite gain ($A_{OL} = \\infty$), infinite input resistance ($R_{\\text{in}} = \\infty$), and zero output resistance ($R_{\\text{out}} = 0$).
* **Virtual Earth Approximation:** High gain keeps the potential difference between inputs negligible ($V_+ \\approx V_-$ under negative feedback conditions).
* **Inverting Configurations:** Gain:
  $$\\text{Gain} = \\frac{V_{\\text{out}}}{V_{\\text{in}}} = -\\frac{R_f}{R_{\\text{in}}}$$
* **Non-Inverting Configurations:** Gain:
  $$\\text{Gain} = 1 + \\frac{R_f}{R_1}$$

---

### 📺 Video Study Guide

* **YouTube Search:** [Inverting and non inverting operational amplifier circuits](https://www.youtube.com/results?search_query=Inverting+and+non+inverting+operational+amplifier+circuits)
`,
        quiz: {
          id: 'q-phys-u6-l1',
          title: 'Op-Amps Quiz',
          questions: [
            {
              id: 'q-phys-u6-1-1',
              text: 'What is the voltage gain of an inverting amplifier containing a 20 kOhm feedback resistor and 2 kOhm input resistor?',
              options: ['-10', '11', '-20', '10'],
              correctAnswerIndex: 0,
              explanation: 'Gain = -R_f / R_in = -20k / 2k = -10.'
            }
          ]
        }
      },
      {
        id: 'phys-u6-l2',
        moduleId: 'mod-physics-u6',
        title: '6.2 Logic Gates & System Combinations',
        duration: 25,
        youtubeVideoId: 'SFA8SIsG_qY',
        content: `### 6.2 Logic Gates & System Combinations

#### Logic Systems
* **Discrete Logic Blocks:** Configuring universal gates (NAND, NOR) to execute AND, OR, and NOT logical pipelines.
* **Control Systems:** Interfacing sensory signals with logical gates to automate industrial and domestic processes.

---

### 📺 Video Study Guide

* **YouTube Search:** [Logic gates truth tables combinational logic circuits](https://www.youtube.com/results?search_query=Logic+gates+truth+tables+combinational+logic+circuits)
`,
        quiz: {
          id: 'q-phys-u6-l2',
          title: 'Logic Circuits',
          questions: [
            {
              id: 'q-phys-u6-2-1',
              text: 'Which of the following serves as a universal logic gate from which all other logic configurations can be built?',
              options: ['AND', 'NAND', 'OR', 'XOR'],
              correctAnswerIndex: 1,
              explanation: 'NAND (and NOR) are universal logic choices that can build any logic system.'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'mod-physics-u7',
    areaId: 'phys-u7',
    title: 'Unit 7: Phases of Matter & Thermal Dynamics',
    description: 'Microscopic models of states, deformation limits, tracking scale conversions, and gas equations.',
    lessons: [
      {
        id: 'phys-u7-l1',
        moduleId: 'mod-physics-u7',
        title: '7.1 Deformation of Solids, Stress, Strain, and Young Modulus',
        duration: 25,
        youtubeVideoId: 'SFA8SIsG_qY',
        content: `### 7.1 Deformation of Solids, Stress, Strain, and Young Modulus

#### Solid Mechanics
* **Young Modulus ($E$):** The measure of a material's elasticity or stiffness:
  $$E = \\frac{\\text{Stress}}{\\text{Strain}} = \\frac{F / A}{\\Delta l / l}$$
* **Deformation Properties:** Distinguishing elastic limits (temporary structural elongation) from plastic regions (permanent metal/material creep and structural fatigue).

---

### 📺 Video Study Guide

* **YouTube Search:** [Young modulus experiment stress strain curve physics](https://www.youtube.com/results?search_query=Young+modulus+experiment+stress+strain+curve+physics)
`,
        quiz: {
          id: 'q-phys-u7-l1',
          title: 'Young Modulus Checks',
          questions: [
            {
              id: 'q-phys-u7-1-1',
              text: 'What represents the slope of the elastic region on a stress-strain graph?',
              options: ['Elastic limit', 'Young Modulus', 'Strain Energy Density', 'Breaking stress'],
              correctAnswerIndex: 1,
              explanation: 'Slope of Stress vs Strain matches Young Modulus (Elasticity).'
            }
          ]
        }
      },
      {
        id: 'phys-u7-l2',
        moduleId: 'mod-physics-u7',
        title: '7.2 Thermodynamic Scales & Thermal Configurations',
        duration: 25,
        youtubeVideoId: 'SFA8SIsG_qY',
        content: `### 7.2 Thermal Configurations

#### Thermodynamics and Calibration
* **Temperature Scales:** Inter-conversions:
  $$T_K = \\theta_C + 273.15$$
* **Specific Heat Formula:** Heat $Q$ required to change temperature of mass $m$:
  $$Q = m c \\Delta\\theta$$
* **Latent Heat Formula:** Phase changes at constant temp:
  $$Q = m L$$

---

### 📺 Video Study Guide

* **YouTube Search:** [Specific heat capacity electrical method physics experiment](https://www.youtube.com/results?search_query=Specific+heat+capacity+electrical+method+physics+experiment)
`,
        quiz: {
          id: 'q-phys-u7-l2',
          title: 'Heat Calculations',
          questions: [
            {
              id: 'q-phys-u7-2-1',
              text: 'Calculate the heat energy required to warm up 2 kg of water (c = 4200 J/kg K) by 10 Kelvin.',
              options: ['840 kJ', '84 kJ', '42 kJ', '21 kJ'],
              correctAnswerIndex: 1,
              explanation: 'Q = m * c * dT = 2 * 4200 * 10 = 84,000 Joules = 84 kJ.'
            }
          ]
        }
      },
      {
        id: 'phys-u7-l3',
        moduleId: 'mod-physics-u7',
        title: '7.3 Ideal Gases & Kinetic Energy Laws',
        duration: 30,
        youtubeVideoId: 'SFA8SIsG_qY',
        content: `### 7.3 Ideal Gases & Kinetic Energy Laws

#### Microscopic Gas Dynamics
* **Equation of State:** Modulating pressure, volume and temperature:
  $$p V = n R T$$
* **Kinetic Theory Pressure:** Finding values from atomic speeds:
  $$p = \\frac{1}{3} \\rho \\langle c^2 \\rangle$$
* **The First Law of Thermodynamics:**
  $$\\Delta U = q + w$$
  Where $\\Delta U$ is the change in internal energy, $q$ is heat added, and $w$ is work done on the system coordinate.

---

### 📺 Video Study Guide

* **YouTube Search:** [Kinetic theory of gases derivation ideal gas equation](https://www.youtube.com/results?search_query=Kinetic+theory+of+gases+derivation+ideal+gas+equation)
`,
        quiz: {
          id: 'q-phys-u7-l3',
          title: 'Ideal Gases',
          questions: [
            {
              id: 'q-phys-u7-3-1',
              text: 'An ideal gas undergoes expansion doing 500 J of work while absorbing 800 J of heat. What is its change in internal energy?',
              options: ['+300 J', '+1300 J', '-300 J', '+800 J'],
              correctAnswerIndex: 0,
              explanation: 'From First Law, dU = q + w. Since gas expands, it does work (w = -500J) so dU = 800J - 500J = +300 Joules.'
            }
          ]
        }
      },
      {
        id: 'phys-u7-l4',
        moduleId: 'mod-physics-u7',
        title: '7.4 Fluid Flow Continuity & Bernoulli Dynamics',
        duration: 30,
        youtubeVideoId: 'SFA8SIsG_qY',
        content: `### 7.4 Fluid Flow Continuity & Bernoulli Dynamics

#### Fluid Mechanics Actions
* **Equation of Continuity:** Mass conservation in a pipe flow:
  $$A_1 v_1 = A_2 v_2 = \\text{constant}$$
* **Bernoulli's Equation:** Energy conservation for inviscid flowing fluids:
  $$P + \\frac{1}{2} \\rho v^2 + \\rho g h = \\text{constant}$$

---

### 📺 Video Study Guide

* **YouTube Search:** [Bernoulli equation and equation of continuity fluid dynamics](https://www.youtube.com/results?search_query=Bernoulli+equation+and+equation+of+continuity+fluid+dynamics)
`,
        quiz: {
          id: 'q-phys-u7-l4',
          title: 'Fluid Vectors',
          questions: [
            {
              id: 'q-phys-u7-4-1',
              text: 'Under the equation of continuity, what occurs to fluid velocity as pipe diameter narrows?',
              options: ['It decreases', 'It increases', 'It remains completely identical', 'It stops flowing'],
              correctAnswerIndex: 1,
              explanation: 'Since product of area and velocity remains constant, a reduced area forces velocity to increase.'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'mod-physics-u8',
    areaId: 'phys-u8',
    title: 'Unit 8: Modern & Quantum Physics',
    description: 'Wave-particle duality, atomic fields, mass excess, ionizing radiation, and communication links.',
    lessons: [
      {
        id: 'phys-u8-l1',
        moduleId: 'mod-physics-u8',
        title: '8.1 Deflection, Mass Spectrometry, and Photons',
        duration: 25,
        youtubeVideoId: 'SFA8SIsG_qY',
        content: `### 8.1 Deflection, Mass Spectrometry, and Photons

#### Quantum Particles & Cross Fields
* **Balanced Cross Fields:** Velocity selectors establish straight coordinate paths when electric and magnetic forces perfectly cancel out:
  $$q E = q v B \\implies v = \\frac{E}{B}$$
* **Photon Energy (Planck Formula):**
  $$E = h f = \\frac{h c}{\\lambda}$$

---

### 📺 Video Study Guide

* **YouTube Search:** [Charged particles in uniform electric and magnetic fields crossed fields](https://www.youtube.com/results?search_query=Charged+particles+in+uniform+electric+and+magnetic+fields+crossed+fields)
`,
        quiz: {
          id: 'q-phys-u8-l1',
          title: 'Quantum Photons',
          questions: [
            {
              id: 'q-phys-u8-1-1',
              text: 'What equation determines the equilibrium velocity of particles passing through a magnetic field orthogonal to an electric field selectors?',
              options: ['v = B/E', 'v = E/B', 'v = E * B', 'v = qE / B'],
              correctAnswerIndex: 1,
              explanation: 'Since qE = qvB, resolving velocity results in v = E/B.'
            }
          ]
        }
      },
      {
        id: 'phys-u8-l2',
        moduleId: 'mod-physics-u8',
        title: '8.2 Photoelectric Emission & Atomic Transitions',
        duration: 25,
        youtubeVideoId: 'SFA8SIsG_qY',
        content: `### 8.2 Photoelectric Emission & Atomic Transitions

#### Photoelectric Quantum Rules
* **Photoelectric Dispersion Formula:**
  $$h f = \\phi + K.E._{\\text{max}}$$
  Where $\\phi$ is the work function constraint threshold.
* **Energy Transitions:** Emission frequency when hopping atomic levels:
  $$\\Delta E = h f = E_1 - E_2$$

---

### 📺 Video Study Guide

* **YouTube Search:** [Photoelectric effect equation and work function graphs](https://www.youtube.com/results?search_query=Photoelectric+effect+equation+and+work+function+graphs)
`,
        quiz: {
          id: 'q-phys-u8-l2',
          title: 'Photoelectric Checks',
          questions: [
            {
              id: 'q-phys-u8-2-1',
              text: 'In the photoelectric effect equation, what does work function (phi) represent?',
              options: ['The maximum kinetic energy gained', 'The minimum energy required to liberate an electron from a metal surface', 'The intensity of the light source', 'Thermal energy loss'],
              correctAnswerIndex: 1,
              explanation: 'The work function represents the minimum quantity of photon energy required to release a metal electron.'
            }
          ]
        }
      },
      {
        id: 'phys-u8-l3',
        moduleId: 'mod-physics-u8',
        title: '8.3 Nuclear Properties, Binding Energy, and Fission/Fusion',
        duration: 30,
        youtubeVideoId: 'SFA8SIsG_qY',
        content: `### 8.3 Nuclear Properties, Binding Energy, and Fission/Fusion

#### Nuclear Mass Defect
* **Einstein Mass-Energy equivalence:** Mass lost in binding nuclei directly turns to binding energy ($E$):
  $$\\Delta E = \\Delta m c^2$$
* **Fission vs. Fusion:** Combining lighter components to gain stability vs. splitting heavy modules (both lead to peak binding energy per nucleon).

---

### 📺 Video Study Guide

* **YouTube Search:** [Binding energy per nucleon curve fission fusion physics](https://www.youtube.com/results?search_query=Binding+energy+per+nucleon+curve+fission+fusion+physics)
`,
        quiz: {
          id: 'q-phys-u8-l3',
          title: 'Binding Energy',
          questions: [
            {
              id: 'q-phys-u8-3-1',
              text: 'Why do both nuclear fusion and fission reactions release energy?',
              options: ['They always destroy neutron counts', 'Both pathways elevate raw atomic mass totals', 'Both transition products towards isotopes with higher binding energy per nucleon', 'Because kinetic profiles collapse'],
              correctAnswerIndex: 2,
              explanation: 'Both pathways transform reactants into products with higher binding energy, releasing the mass difference as energy.'
            }
          ]
        }
      },
      {
        id: 'phys-u8-l4',
        moduleId: 'mod-physics-u8',
        title: '8.4 Radioactive Decay Mechanics',
        duration: 30,
        youtubeVideoId: 'SFA8SIsG_qY',
        content: `### 8.4 Radioactive Decay Mechanics

#### Exponential Decay Profiles
* **Radioactive Decay Equation:**
  $$N = N_0 e^{-\\lambda t}$$
* **Constant Half-Life mapping:**
  $$\\lambda = \\frac{\\ln 2}{t_{1/2}} \\approx \\frac{0.693}{t_{1/2}}$$

---

### 📺 Video Study Guide

* **YouTube Search:** [Radioactive decay law calculations and half life equations](https://www.youtube.com/results?search_query=Radioactive+decay+law+calculations+and+half+life+equations)
`,
        quiz: {
          id: 'q-phys-u8-l4',
          title: 'Decay Mechanics',
          questions: [
            {
              id: 'q-phys-u8-4-1',
              text: 'If a sample decay constant lambda is 0.1 s^-1, what is its half life?',
              options: ['6.93 s', '10.0 s', '0.693 s', '1.41 s'],
              correctAnswerIndex: 0,
              explanation: 't_1/2 = ln 2 / lambda = 0.693 / 0.1 = 6.93 seconds.'
            }
          ]
        }
      },
      {
        id: 'phys-u8-l5',
        moduleId: 'mod-physics-u8',
        title: '8.5 Communication Media, Modulation, and Attenuation Logs',
        duration: 30,
        youtubeVideoId: 'SFA8SIsG_qY',
        content: `### 8.5 Telecom Transmission
* **Power Losses in Decibels (dB):** Logging attenuation across fiber lines:
  $$\\text{Loss (dB)} = 10 \\log_{10}\\left(\\frac{P_{\\text{out}}}{P_{\\text{in}}}\\right)$$

---

### 📺 Video Study Guide

* **YouTube Search:** [Signal attenuation decibel calculations communication channels](https://www.youtube.com/results?search_query=Signal+attenuation+decibel+calculations+communication+channels)
`,
        quiz: {
          id: 'q-phys-u8-l5',
          title: 'Telecom Mechanics',
          questions: [
            {
              id: 'q-phys-u8-5-1',
              text: 'If output power is 1/100th of input power, what is the attenuation in decibels?',
              options: ['-10 dB', '-20 dB', '-100 dB', '20 dB'],
              correctAnswerIndex: 1,
              explanation: 'Loss in dB = 10 * log10(0.01) = 10 * (-2) = -20 dB.'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'mod-physics-exam',
    areaId: 'phys-exam',
    title: 'Unit 9: Physics Examination Model',
    description: 'The structure of examination papers and strategic past paper reviews.',
    lessons: [
      {
        id: 'phys-exam-study',
        moduleId: 'mod-physics-exam',
        title: '9.1 Structure & Strategies for Papers 1, 2, 3, & 4',
        duration: 45,
        youtubeVideoId: 'SFA8SIsG_qY',
        content: `### 9.1 Structure & Strategies for Papers 1, 2, 3, & 4

#### Advanced Level Model Overview
* **Paper 1 (Multiple Choice):** 1 Hour | 40 Marks | 13% Weighting. 40 mandatory conceptual problems covering all core learning matrices.
* **Paper 2 (Structured Questions):** 1 Hour 30 Minutes | 60 Marks | 19% Weighting. Systemic formulas, algebraic proofs, and mathematical derivation challenges.
* **Paper 3 (Free Response Questions):** 2 Hours 30 Minutes | 100 Marks | 32% Weighting. Consists of 5 large-scale topical problems carrying 25 marks each. Question 1 (General Physics & Newtonian Mechanics) is completely mandatory. Select exactly three out of the remaining four topical partitions.
* **Paper 4 (Practical Examination):** 2 Hours 30 Minutes | 50 Marks | 16% Weighting. Experimental execution, data tabulation, and system error configuration across two experiments and one custom design scenario.

---

### 📺 Video Study Guide

Solve actual practical and theory questions with the following resource:

* **YouTube Search:** [Advanced A level physics past papers](https://www.youtube.com/results?search_query=Advanced+A+level+physics+past+papers)
`,
        quiz: {
          id: 'q-phys-exam-all',
          title: 'Exam Structure Check',
          questions: [
            {
              id: 'q-phys-exam-1-1',
              text: 'In Advanced Level Paper 3, which physics topic section is completely mandatory for all students?',
              options: ['Modern Quantum Physics', 'General Physics & Newtonian Mechanics', 'Operational Amplifiers', 'Thermal Dynamics'],
              correctAnswerIndex: 1,
              explanation: 'Question 1 covering General Physics & Newtonian Mechanics is a completely mandatory composite in Paper 3.'
            }
          ]
        }
      }
    ]
  }
];
