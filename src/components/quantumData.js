export const initialData = [
  // =========================================
  // 🟢 LEVEL 1: THE BASICS
  // =========================================
  { 
    keywords: ["guide", "roadmap", "start", "begin"], 
    term: "Learning Roadmap",
    response: "Welcome to the path. Follow this order: 1. Atoms 2. Wave-Particle Duality 3. Uncertainty 4. Superposition 5. Entanglement.",
    mechanics: "We move from the physical structure to the behavior, and then to the weird connections.",
    importance: "Following this path ensures you don't get confused by the advanced math later.",
    insight: "Type 'Step 1' to start.",
    deepDive: "Think of this roadmap like a video game skill tree. You cannot understand Entanglement (Level 4) without first mastering Superposition (Level 3)."
  },
  { 
    keywords: ["step 1", "atom", "atomic"], 
    term: "The Atom", 
    response: "The atom is the basic building block of all matter in the universe.", 
    mechanics: "It consists of a dense nucleus (protons & neutrons) surrounded by a probabilistic cloud of electrons.", 
    importance: "Understanding atoms is the first step to understanding chemistry, biology, and physics.", 
    insight: "If an atom were a football stadium, the nucleus would be a marble on the 50-yard line.",
    deepDive: "Here is the crazy part: The electron isn't actually orbiting the nucleus like a planet. It is 'teleporting' around in a cloud shape called an orbital."
  },
  {
    keywords: ["electron", "cloud"],
    term: "The Electron",
    response: "A subatomic particle with a negative charge that acts as the primary carrier of electricity.",
    mechanics: "In quantum physics, electrons don't orbit like planets; they teleport around in 'shells' or energy levels.",
    importance: "Electron movement creates electricity, magnetism, and chemical bonds.",
    insight: "They are so small that they are considered 'point particles' with zero radius.",
    deepDive: "Electrons are 'fermions', which means no two electrons can occupy the exact same state at the same time (Pauli Exclusion Principle)."
  },
  {
    keywords: ["photon", "light"],
    term: "The Photon",
    response: "A photon is a tiny packet (quantum) of light energy.",
    mechanics: "It has zero mass and always travels at the speed of light. It behaves as both a particle and a wave.",
    importance: "Photons carry electromagnetic force, allowing us to see and transmitting Wi-Fi signals.",
    insight: "Sunlight takes 8 minutes to reach Earth, but thousands of years to escape the Sun's core.",
    deepDive: "Photons are strange because they do not experience time. From the perspective of a photon, it is created in the sun and instantly hits your eye."
  },

  // =========================================
  // 🟡 LEVEL 2: CORE CONCEPTS
  // =========================================
  {
    keywords: ["duality", "wave particle", "double slit"],
    term: "Wave-Particle Duality",
    response: "The concept that every quantum entity exhibits both particle and wave properties.",
    mechanics: "The Double Slit Experiment proved this: electrons create an interference pattern (wave) unless observed (particle).",
    importance: "It destroyed the old idea that matter and energy were separate things.",
    insight: "You are technically a wave, but your wavelength is too small to notice!",
    deepDive: "This is best explained by the 'Double Slit Experiment'. If you fire electrons at a wall with two slits, they go through BOTH slits simultaneously."
  },
  { 
    keywords: ["superposition", "states"], 
    term: "Superposition",
    response: "The ability of a quantum system to exist in multiple states at the same time.",
    mechanics: "A particle doesn't choose 'Up' or 'Down' until you measure it. Before that, it is both.",
    importance: "This is how Quantum Computers calculate millions of possibilities at once.",
    insight: "Think of a spinning coin: it is neither Heads nor Tails until it stops.",
    deepDive: "In classical computing, a bit is either 0 or 1. In superposition, a Qubit is 0 and 1 at the same time."
  },
  { 
    keywords: ["schrodinger", "cat"], 
    term: "Schrodinger's Cat",
    response: "A famous thought experiment where a cat in a box is simultaneously dead and alive.",
    mechanics: "It links a quantum event (atom decay) to a macroscopic event (the cat). Since the atom is in superposition, the cat must be too.",
    importance: "It highlights the absurdity of the Copenhagen Interpretation when applied to real life.",
    insight: "Schrodinger actually created this example to mock the theory, not support it!",
    deepDive: "Erwin Schrodinger invented this scenario to show how silly quantum mechanics sounds when applied to big objects."
  },
  { 
    keywords: ["heisenberg", "uncertainty", "measure"], 
    term: "Uncertainty Principle",
    response: "You cannot know both the position and momentum (speed) of a particle perfectly.",
    mechanics: "To see a particle, you must bounce a photon off it. That photon creates a tiny impact, changing the particle's speed.",
    importance: "It proves the universe is probabilistic, not deterministic. We can only predict odds, not certainties.",
    insight: "The more precisely you know where you are, the less you know where you are going.",
    deepDive: "This isn't just about our tools being bad. It is a fundamental property of nature. A particle is a wave."
  },

  // =========================================
  // 🟠 LEVEL 3: ADVANCED PHENOMENA
  // =========================================
  { 
    keywords: ["entanglement", "spooky"], 
    term: "Entanglement",
    response: "Two particles become linked so that measuring one instantly affects the other, regardless of distance.",
    mechanics: "They share a single mathematical 'Wave Function'. If Particle A spins Up, Particle B must spin Down.",
    importance: "It allows for Quantum Teleportation and unhackable communication networks.",
    insight: "Einstein hated this, calling it 'Spooky Action at a Distance'.",
    deepDive: "Imagine you have two magic dice. You shake them and separate them by light-years. If you roll a '6' on one die on Earth, the other die on Mars will INSTANTLY show a '1'."
  },
  { 
    keywords: ["tunneling", "wall", "through"], 
    term: "Quantum Tunneling",
    response: "When a particle passes through a solid barrier that it shouldn't be able to cross.",
    mechanics: "Because a particle is a probability wave, a small part of the wave extends *past* the wall. Occasionally, the particle appears there.",
    importance: "Without tunneling, the Sun wouldn't shine (protons couldn't fuse) and USB drives wouldn't work.",
    insight: "There is a non-zero (but tiny) chance you could walk through a wall right now.",
    deepDive: "Imagine throwing a tennis ball at a brick wall. In our world, it bounces back 100% of the time. In the quantum world, eventually the ball will just appear on the other side."
  },
  {
    keywords: ["collapse", "observation", "observer"],
    term: "Wave Function Collapse",
    response: "The moment a spread-out quantum wave snaps into a single, definite particle.",
    mechanics: "Interaction with the environment (measurement) forces the system to choose one outcome.",
    importance: "This is the bridge between the weird Quantum world and our normal Classic world.",
    insight: "Does the moon exist if no one looks at it? In quantum physics, maybe not.",
    deepDive: "Before collapse, a particle is like a spinning wheel—it's a blur of all numbers. When you measure it, it's like stopping the wheel on a single number."
  },

  // =========================================
  // 🔴 LEVEL 4: THEORETICAL & COSMIC
  // =========================================
  { 
    keywords: ["string theory", "dimensions"], 
    term: "String Theory",
    response: "A theory that the universe is made of tiny vibrating strings, not point particles.",
    mechanics: "The frequency at which the string vibrates determines if it becomes an electron, photon, or quark.",
    importance: "It is a candidate for the 'Theory of Everything', uniting Gravity and Quantum Mechanics.",
    insight: "It requires the universe to have 10 or 11 dimensions.",
    deepDive: "If you zoom in on an electron, standard physics says it's a point with no size. String theory says it's actually a tiny loop of energy vibrating like a guitar string."
  },
  { 
    keywords: ["multiverse", "many worlds", "parallel"], 
    term: "Many-Worlds Theory",
    response: "The idea that every time a quantum measurement happens, the universe splits into copies.",
    mechanics: "In one universe, the cat is alive. In another, it is dead. Both exist simultaneously in parallel.",
    importance: "It solves the 'Collapse' problem by saying the wave function never actually collapses.",
    insight: "Somewhere out there, there is a version of you who is a rockstar.",
    deepDive: "This theory suggests that you never actually make a choice. Instead, the universe splits. Did you eat cereal or toast for breakfast? In this universe, you ate cereal. In a parallel universe, you ate toast."
  },
  { 
    keywords: ["antimatter", "anti"], 
    term: "Antimatter",
    response: "Matter composed of antiparticles, which have the same mass as ordinary matter but opposite charge.",
    mechanics: "An antielectron (positron) is positive. If it touches a normal electron, they annihilate.",
    importance: "It is the most efficient fuel source possible (E=mc^2), converting 100% of mass to energy.",
    insight: "Bananas produce small amounts of antimatter (positrons) naturally!",
    deepDive: "When matter and antimatter touch, they turn into pure energy (explosion). Just one gram of antimatter could create an explosion equal to a nuclear bomb."
  },
  {
    keywords: ["dark matter"],
    term: "Dark Matter",
    response: "Invisible matter that makes up about 85% of the total mass of the universe.",
    mechanics: "It doesn't interact with light. We only know it exists because its gravity pulls on galaxies.",
    importance: "Without it, galaxies would fly apart because they spin too fast for visible matter to hold them.",
    insight: "We are currently swimming through dark matter, but we can't feel it.",
    deepDive: "Imagine looking at a merry-go-round spinning so fast that the kids should fly off, but they don't. You would assume they are holding onto something invisible. That is Dark Matter."
  },

  // =========================================
  // 🔵 APPLICATIONS (Real World)
  // =========================================
  {
    keywords: ["computer", "computing", "qubit"],
    term: "Quantum Computing",
    response: "A new type of computer that uses quantum mechanics to solve problems supercomputers can't.",
    mechanics: "It uses Qubits (Superposition) to test every possible password or molecule structure at once.",
    importance: "It will revolutionize medicine (drug discovery) and break current internet security.",
    insight: "Google's Quantum Processor did a 10,000-year calculation in just 200 seconds.",
    deepDive: "Classical computers are like a mouse in a maze; they try one path. A Quantum Computer is like a flood of water; it flows down EVERY path of the maze at the exact same time."
  },
  {
    keywords: ["laser", "lasers"],
    term: "The Laser",
    response: "Light Amplification by Stimulated Emission of Radiation.",
    mechanics: "We excite atoms so they all release photons of the exact same wavelength and direction at once.",
    importance: "Used in surgery, internet fiber optics, and barcode scanners.",
    insight: "It is a purely quantum mechanical device found in every supermarket.",
    deepDive: "Normal light is like a chaotic crowd. Laser light is like a marching band—every photon is stepping in perfect sync (coherent)."
  },
  {
    keywords: ["mri", "medical"],
    term: "MRI Scanners",
    response: "Magnetic Resonance Imaging uses quantum spin to look inside your body.",
    mechanics: "A giant magnet aligns the quantum spin of hydrogen atoms in your water. Radio waves then flip them.",
    importance: "Allows doctors to see soft tissues (brain, muscles) without dangerous X-rays.",
    insight: "You are being used as a quantum experiment every time you get a scan.",
    deepDive: "The MRI machine is essentially a giant magnet. It pulls the protons in your body so they all spin in the same direction, then knocks them over to listen for the signal."
  },

  // =========================================
  // 👋 SYSTEM
  // =========================================
  {
      keywords: ["hello", "hi", "hey"],
      term: "AURA AI",
      response: "Greetings. I am Aura, your Quantum Research Assistant.",
      mechanics: "I access a neural database of physics concepts to guide your learning.",
      importance: "My goal is to make the subatomic world understandable and peaceful.",
      insight: "Try asking about 'String Theory' or 'Schrodinger's Cat'.",
      deepDive: "I am designed to simulate a conversation about quantum mechanics. I don't 'know' physics like a human does, but I have access to structured data about how the universe works."
  }
];