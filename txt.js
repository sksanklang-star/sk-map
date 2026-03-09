// --- MECH STATS (The Hardware) ---
let hp                
let weight            // Affects base speed
let mobility          // Affects hit chance/dodge
let armorType         

// --- THE LOADOUT (The Modules) ---
let module1           // e.g., Thermal Sword (Weapon)
let module2           // e.g., Resonance Cannon (Weapon)
let module3           // e.g., Dash Thrusters (Utility)
let module4           // e.g., Heavy Shield (Defense)
let module5           // e.g., Sync Stabilizer (Passive)

// --- PILOT STATS (The Mind) ---
let sync              // The Reality Bubble. Determines if the module actually connects.
let stress            // Fills up when taking damage or facing terrifying monsters.

// --- MONSTER STATS ---
let m_hp             // Total physical health once solidified
let m_size           // Affects how many Hexes they occupy (1 hex vs 3 hexes)
let m_phaseShift     // The "Ghost" stat. This is the difficulty rating for your Pilot's Sync. 
let m_instability    // How much the monster pushes its own turns around the timeline (Glitches)
let m_aggro          // Who the monster is currently focusing on
let m_armor          // Natural hardened skin/shell



let mechHeight = 60 // meters
let mapScale = 5000 // 1 Hex = 5000 meters (5km)
// How many hexes can a 60m Mech sprint per Time Unit?
let sprintSpeed = (enginePower * sync) / weight