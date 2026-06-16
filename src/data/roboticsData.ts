import { RoadmapArea, Module } from '../types';

export const ROBOTICS_ROADMAP_AREAS: RoadmapArea[] = [
  {
    id: 'robotics-1',
    name: 'Electronics & Robotics for Computer Science',
    description: 'A comprehensive, beginner-friendly path from physical hardware rules to building real autonomous mobile systems.',
    icon: 'Radio',
    color: 'rose',
    courseGroup: 'robotics'
  }
];

export const ROBOTICS_MODULES: Module[] = [
  {
    id: 'mod-robotics-electronics',
    areaId: 'robotics-1',
    title: 'Electronics, Microcontrollers, Sensing & Autonomous Robots',
    description: 'Master hardware circuits, breadboard prototyping, Arduino code execution, sensory processing, and autonomous navigation.',
    lessons: [
      {
        id: 'rob-les-1',
        moduleId: 'mod-robotics-electronics',
        title: 'Phase 1: Electronics Foundation (Absolute Beginner)',
        duration: 30,
        youtubeVideoId: 'mc979OhitAg',
        content: `### Phase 1: Electronics Foundation

Welcome to the complete, beginner-friendly curriculum for Electronics and Robotics, tailored specifically for Computer Science students.

As a computer science enthusiast, you already understand how code thinks (logic, loops, and structures). This course will teach you how to give that code a physical body using electronic hardware, sensors, and electric motors (Turhal et al., 2026).

Before writing code for hardware, you must understand the invisible rules governing electricity, basic circuit paths, and protection components (MGU-UGP, 2024; Texas A&M, 2012).

---

#### 1. Core Physical Concepts & Electrical Rules

To manage hardware interfaces safely, you must grasp the fundamental units of electrical pipelines:

* **Voltage (V):** Measured in Volts ($V$), representing the potential energy difference that pushes electrical charges through a circuit loop. Think of it as water pressure in a pipe.
* **Current (I):** Measured in Amperes ($A$ or $mA$), representing the continuous rate at which electrical charge flows. Think of it as water volume flow rate.
* **Resistance (R):** Measured in Ohms ($\\Omega$), representing a material's opposition to electrical current flow. Think of it as a constriction in the water pipe.

#### 2. Ohm's Law ($V = I \\times R$)
Ohm's Law is the most critical equation in electrical prototyping. It states that the voltage drop across a resistor is equal to the current flowing through it multiplied by its resistance:
$$V = I \\times R$$

* **Preventing LED Failures:** LEDs are delicate semiconductor diodes. If connected directly to a $5\\text{V}$ power supply without a Current-Limiting Resistor, excess current flows instantly, destroying the diode.
* **Calculating Resistors Example:**
  If your microcontroller outputs $5\\text{V}$ (supply voltage $V_s$), your LED needs $2\\text{V}$ forward voltage drop ($V_f$), and its safe maximum current ($I$) is $20\\text{mA}$ ($0.02\\text{A}$):
  $$R = \\frac{V_s - V_f}{I} = \\frac{5\\text{V} - 2\\text{V}}{0.02\\text{A}} = 150\\ \\Omega$$
  Always round up to a standard resistor size (e.g., $220\\ \\Omega$) to keep your circuit extra safe!

#### 3. Prototyping Infrastructure & Core Components
* **Breadboards:** Mock up circuits dynamically without permanent soldering. Internal metal clips connect components placed in the same columns (for signal links) or horizontal rails (for power distribution).
* **Diodes and LEDs:** One-way valves for electricity. Current can only flow from the positive side (Anode, longer leg) to the negative side (Cathode, shorter leg with a flat edge on the plastic body).

---

### 📺 Video Study Guide

Copy and paste these exact links into your browser or search bar to follow along:

1. **Electricity Basics (Crash Course Physics):**
   https://www.youtube.com/watch?v=mc979OhitAg
2. **How to Use a Breadboard (Science Buddies):**
   https://www.youtube.com/watch?v=6WReFkfrUIk
3. **Resistors and Ohm's Law Explained (The Engineering Mindset):**
   https://www.youtube.com/watch?v=8jB7P_I1SMM

---

### References
* **Texas A&M University Kingsville.** (2012). *A two-semester project-based robotics curriculum.* https://www.tamuk.edu/engineering/_docs_CoE/research/laboratory-based-robotics/two-semester-project-based-robotics-curriculam.pdf
* **Turhal, E., Bektaş, O., & Eroğlu, S.** (2026). *Students' experiences with robotics coding activities.* International Journal of Technology in Education and Science, 10(1), 45–58. https://ijtes.net/index.php/ijtes/article/view/5231
* **Mahatma Gandhi University UG Program.** (2024). *Honours degree curriculum in robotics and automation prototyping.* https://cap.mgu.ac.in/SYLLABUS/FILE20_syllabus.pdf`,
        quiz: {
          id: 'q-rob-les-1',
          title: 'Electronics Basics Check',
          questions: [
            {
              id: 'q-rob-les-1-1',
              text: 'Using Ohm\'s Law, what resistor value is needed if supply is 5V, the LED forward drop is 2V, and target current is 15mA?',
              options: ['200 Ohms', '100 Ohms', '300 Ohms', '500 Ohms'],
              correctAnswerIndex: 0,
              explanation: '(5V - 2V) / 0.015A = 3V / 0.015A = 200 Ohms.'
            },
            {
              id: 'q-rob-les-1-2',
              text: 'Which leg of an LED represents the positive electrode (Anode)?',
              options: ['The shorter leg', 'The longer leg', 'The thicker leg', 'Either leg is positive'],
              correctAnswerIndex: 1,
              explanation: 'The longer leg of a default through-hole light-emitting diode (LED) represents the positive lead (Anode).'
            }
          ]
        }
      },
      {
        id: 'rob-les-2',
        moduleId: 'mod-robotics-electronics',
        title: 'Phase 2: Microcontrollers & Hardware I/O (Intermediate Beginner)',
        duration: 35,
        youtubeVideoId: 'fJWR7dBuc18',
        content: `### Phase 2: Microcontrollers & Hardware I/O

This is where software meets physical hardware (Hong Kong PolyU, 2019). You will learn about microcontrollers, which act as single-board computers capable of reading physical inputs and executing physical actions based on code.

---

#### 1. The Arduino Ecosystem
* **Core Loops:** An Arduino sketch compiles to run two principal functions:
  * \`void setup()\`: Triggers exactly once when the board boots up, initializing pin modes, starting Serial communication pipelines, or setting initial hardware states.
  * \`void loop()\`: Executes repeatedly at extreme speeds, forming the core operational loop where your logic rules and sensory evaluations run.

#### 2. Digital vs. Analog Signals
* **Digital Signals:** Binary states with zero middle ground. Pins evaluate to either high voltage (\`HIGH\`, $5\\text{V}$ or $3.3\\text{V}$) or ground zero (\`LOW\`, $0\\text{V}$). Essential for toggle buttons and simple on/off indicator lines.
* **Analog Signals:** Continuous sliding scales. Microcontrollers use an Analog-to-Digital Converter (ADC) to read intermediate voltages (e.g., mapping $0\\text{V}-5\\text{V}$ into a digital integer range of $0-1023$). Highly useful for light trackers, dials, and thermistors.

#### 3. Pulse Width Modulation (PWM)
Microcontrollers are fully digital chips and cannot natively output analog voltages. Instead, we use **PWM** to mimic lower voltages:
* **Duty Cycle:** Microcontrollers cycle a digital pin on and off at very high frequencies (around $500\\text{Hz}$). The ratio of "on" time to the total period determines the average voltage delivered.
* **Effect:** A $50\\%$ active duty cycle delivers an average of $2.5\\text{V}$ to a motor, effectively slicing its speed in half or dimming an LED by $50\\%$.

#### 4. Serial Communication
Understanding the serial protocol is vital for debugging embedded assemblies:
* **The serial print pipeline:** Microcontrollers write structured text packets back along host USB connectors. Running \`Serial.print()\` outputs variable states, raw register counts, and sensor logs directly to the PC Monitor console, letting you quickly isolate logical bugs.

---

### 📺 Video Study Guide

Copy and paste these links to start writing hardware programs:

1. **Arduino Tutorial for Beginners - Full Course (Paul McWhorter):**
   https://www.youtube.com/watch?v=fJWR7dBuc18
2. **Digital vs Analog Signals Explained (EEVblog):**
   https://www.youtube.com/watch?v=XhSly7Yg8g4
3. **Understanding PWM - Pulse Width Modulation (SparkFun):**
   https://www.youtube.com/watch?v=YmPziPfaByw

---

### References
* **Hong Kong Polytechnic University.** (2019). *Embedded software engineering graduate course framework.* Advances in Engineering Education. https://files.eric.ed.gov/fulltext/EJ1236921.pdf
* **Mahatma Gandhi University UG Program.** (2024). *Honours degree curriculum in robotics and automation prototyping.* https://cap.mgu.ac.in/SYLLABUS/FILE20_syllabus.pdf`,
        quiz: {
          id: 'q-rob-les-2',
          title: 'Microcontroller I/O Check',
          questions: [
            {
              id: 'q-rob-les-2-1',
              text: 'Which function in an Arduino program executes exactly once when the microcontroller power is initiated?',
              options: ['void loop()', 'void setup()', 'void main()', 'void init()'],
              correctAnswerIndex: 1,
              explanation: 'void setup() is called once at start or reset to define pin configuration settings.'
            },
            {
              id: 'q-rob-les-2-2',
              text: 'How does Pulse Width Modulation (PWM) fake an analog voltage on a digital output pin?',
              options: ['By mechanically sliding variable resistors', 'By cycling a digital output between HIGH and LOW at high speeds', 'By using internal solar panels', 'By varying the clock frequency of the processor'],
              correctAnswerIndex: 1,
              explanation: 'PWM operates by switching a digital signal between full HIGH and LOW states exceptionally fast, creating an adjustable average output voltage.'
            }
          ]
        }
      },
      {
        id: 'rob-les-3',
        moduleId: 'mod-robotics-electronics',
        title: 'Phase 3: Sensing and Actuation (Intermediate)',
        duration: 40,
        youtubeVideoId: 'ZejQOX69K5M',
        content: `### Phase 3: Sensing and Actuation

Robots require two primary facilities: Sensors to observe the environment, and Actuators (motors) to interact with it (Annamalai University, 2022; MGU-UGP, 2024).

---

#### 1. Physical Sensing Mechanics
* **Ultrasonic Distance Sensors (HC-SR04):** These calculate distance by emitting a high-frequency sound pulse and timing how long it takes to bounce off a physical barrier and return to the receiver.
  * **Equation:**
    $$\\text{Distance} = \\frac{\\text{Time Elapsed} \\times \\text{Speed of Sound}}{2}$$
    We divide by $2$ because the sound wave travels to the obstacle and back.
* **Infrared (IR) Reflector Sensors:** These contain an IR LED emitter and a photodiode receiver. The photodiode measures how much infrared light bounces back. Excellent for distinguishing dark lines (light absorbency) from light floors (high reflectivity).

#### 2. Robotic Actuators & Motion Tools
* **Standard DC Motors:** Run continuously when voltage is applied. Speed is managed with PWM, and direction is managed by flipping electrical polarity manually or with driver switches.
* **Servo Motors:** Precise angle positioning rotators (constrained to $0^\\circ-180^\\circ$). Instead of continuous spinning, they interpret a custom signal stream to lock the gears onto a very precise, reproducible target angle. Ideal for robotic arm joints, steering links, and panning sensors.

#### 3. High-Current Motor Drivers (H-Bridge L298N)
Microcontrollers are delicate logical chips. They can only output a few milliamperes of current (typically $20-40\\text{mA}$ max per pin), which is way too weak to run a physical motor. If you try to power a motor directly from a microcontroller pin, you will permanently burn out the processor!
* **Our Solution:** The H-Bridge (L298N). This driver chip sits between the microcontroller and the heavy motors. It uses isolated, heavy-duty transistor paths to let a low-power microcontroller toggle massive electric currents from an external high-voltage battery pack safely to control motor direction and intensity.

---

### 📺 Video Study Guide

Copy and paste these links to study sensor data processing and motor setups:

1. **How Ultrasonic Sensors Work & Code (HowToMechatronics):**
   https://www.youtube.com/watch?v=ZejQOX69K5M
2. **Servo Motor Control Tutorial (Core Electronics):**
   https://www.youtube.com/watch?v=tY84OiaS_g4
3. **How to Use the L298N Motor Driver with Arduino (DroneBot Workshop):**
   https://www.youtube.com/watch?v=dyjoJmdX5Sg

---

### References
* **Annamalai University.** (2022). *B.Sc. Electronics Science syllabus.* https://annamalaiuniversity.ac.in/affcl/download/syllabus_2022/ug%20pdf/12.B.Sc.%20Electronics%20Science.pdf
* **Mahatma Gandhi University UG Program.** (2024). *Honours degree curriculum in robotics and automation prototyping.* https://cap.mgu.ac.in/SYLLABUS/FILE20_syllabus.pdf`,
        quiz: {
          id: 'q-rob-les-3',
          title: 'Sensors and Actuators Check',
          questions: [
            {
              id: 'q-rob-les-3-1',
              text: 'Why do we need a motor driver chip like the L298N between our microcontroller and DC motor?',
              options: ['To decode binary computer screen output', 'Because microcontrollers do not produce enough current to safely spin heavy motors directly', 'To slow down calculations', 'To act as a central backup hard drive'],
              correctAnswerIndex: 1,
              explanation: 'Motors require significant electric current. Direct microcontroller connection draws excess current, causing immediate chip damage.'
            },
            {
              id: 'q-rob-les-3-2',
              text: 'Which actuator is best suited for precision rotational positioning such as turning a steering hinge exactly 45 degrees?',
              options: ['A continuous DC motor', 'A stepper driver', 'A standard Servo motor', 'A solenoid switch'],
              correctAnswerIndex: 2,
              explanation: 'Servo motors are designed specifically for exact angular position holds under closed-loop control.'
            }
          ]
        }
      },
      {
        id: 'rob-les-4',
        moduleId: 'mod-robotics-electronics',
        title: 'Phase 4: Autonomous Mobile Robots (Advanced Intermediate)',
        duration: 45,
        youtubeVideoId: '0nAnXvEosO0',
        content: `### Phase 4: Autonomous Mobile Robots

This final stage combines your structural code experience with your newfound understanding of hardware (Hong Kong PolyU, 2019). You will learn how to design an automated mobile robot capable of navigating a room without crashing.

---

#### 1. Obstacle Avoidance Logic & Autonomous Coding
An autonomous robot continuously executes a loop cycle of sensing, processing, and responding to its environment:
* **The Avoidance Algorithm:**
  1. Trigger an ultrasonic distance ping down the path ahead.
  2. Parse the return ping delay. If the distance to the wall is greater than $30\\text{cm}$, drive forward at standard speed.
  3. If the distance drops below $30\\text{cm}$, halt both wheels, activate a servo to look left and look right, evaluate which path is clearer, turn the wheels in that direction, and restart forward motion execution.

#### 2. Line Following Automation
By mounting a pair of infrared reflectivity sensors beneath the chassis:
* **The Logic Rules:**
  * If both sensors detect structural reflectivity (light floor), keep motoring forward.
  * If the left sensor hits a dark line (infrared absorbed), trigger a hard-left wheel counterspin to steer the chassis back on track.
  * If the right sensor hits the line, trigger a hard-right counterspin.

#### 3. Power Delivery Isolation & Safe Prototyping
When electric motors start up, spin, or suddenly change direction, they act as massive inductive loads.
* **The Hazard:** Inductive noise. Motors draw rapid, massive spikes of electricity from the power lanes, which can cause the voltage going to your microcontroller to plummet. This triggers a brownout reset, causing your autonomous code to freeze or reboot repeatedly.
* **The Safeguard:** Always decouple your delicate microcontroller power lines from your high-current motor power rails! Use a separate battery pack for the motors and tie only their electrical grounds (\`GND\`) together to establish a baseline voltage level.

---

### 📺 Video Study Guide

Copy and paste these links to see how complete mobile autonomous systems are put together:

1. **Build an Obstacle Avoidance Robot Step-by-Step (Mert Arduino):**
   https://www.youtube.com/watch?v=0nAnXvEosO0
2. **Line Follower Robot Complete Guide (Curio探险家):**
   https://www.youtube.com/watch?v=tIit6e_b7wI
3. **Common Robot Hardware Wiring Mistakes to Avoid (GreatScott!):**
   https://www.youtube.com/watch?v=F3_B8X_pndY

---

### References
* **Hong Kong Polytechnic University.** (2019). *Embedded software engineering graduate course framework.* Advances in Engineering Education. https://files.eric.ed.gov/fulltext/EJ1236921.pdf
* **Mahatma Gandhi University UG Program.** (2024). *Honours degree curriculum in robotics and automation prototyping.* https://cap.mgu.ac.in/SYLLABUS/FILE20_syllabus.pdf`,
        quiz: {
          id: 'q-rob-les-4',
          title: 'Autonomous Mobile Robots Check',
          questions: [
            {
              id: 'q-rob-les-4-1',
              text: 'How can you protect a microcontroller board from the high inductive power surges of electrical motors?',
              options: ['By using extremely thick copper wires', 'By using isolated battery power sources for the logical chips and active motor systems while sharing a common ground', 'By writing software delays', 'By running the system at lower frequencies only'],
              correctAnswerIndex: 1,
              explanation: 'Separating the digital controller power supply from the heavy-current motor supply prevents voltage dips and software crashes.'
            },
            {
              id: 'q-rob-les-4-2',
              text: 'Under standard infrared line-following logic, what should occur if the left sensor detects a low-reflectivity dark line?',
              options: ['The robot must stop and honk', 'The robot must execute a corrective leftward steer movement', 'The robot must spin backward indefinitely', 'The robot must shut off its sensors'],
              correctAnswerIndex: 1,
              explanation: 'When the left track sensor detects the line, a corrective left turn steering adjustment is executed to re-center the machine chassis.'
            }
          ]
        }
      }
    ]
  }
];
