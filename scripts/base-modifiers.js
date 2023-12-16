const groupName = "BRSW.powerTnModifier";

export const modifiers = [
  {
    id:"POWER_BASE_MODIFIER-0-5",
    name:"BRSW.powerTnModifier0-5",
    button_name:"BRSW.powerTnModifier0-5",
    skillMod: "-0.5",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      {
        or_selector:[
          { selector_type: "item_name", selector_value: "Arcane Protection" },
          { selector_type: "item_name", selector_value: "Beast Friend" },
          { selector_type: "item_name", selector_value: "Arcane Protection" },
          { selector_type: "item_name", selector_value: "Bolt" },
          { selector_type: "item_name", selector_value: "Confusion" },
          { selector_type: "item_name", selector_value: "Darksight" },
          { selector_type: "item_name", selector_value: "Dispel" },
          { selector_type: "item_name", selector_value: "Elemental Manipulation" },
          { selector_type: "item_name", selector_value: "Empathy" },
          { selector_type: "item_name", selector_value: "Mind Link" },
          { selector_type: "item_name", selector_value: "Protection" },
          { selector_type: "item_name", selector_value: "Relief" },
          { selector_type: "item_name", selector_value: "Sound/Silence" },
          { selector_type: "item_name", selector_value: "Speak Language" },
          { selector_type: "item_name", selector_value: "Summon Ally" }
        ]
      },
    ],
    group: groupName,
    defaultChecked: "on"
  },
  {
    id:"POWER_BASE_MODIFIER-1",
    name:"BRSW.powerTnModifier1",
    button_name:"BRSW.powerTnModifier1",
    skillMod: "-1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      {
        or_selector:[
          { selector_type: "item_name", selector_value: "Blind" },
          { selector_type: "item_name", selector_value: "Burrow" },
          { selector_type: "item_name", selector_value: "Detect/Conceal Arcana" },
          { selector_type: "item_name", selector_value: "Entangle" },
          { selector_type: "item_name", selector_value: "Environmental Protection" },
          { selector_type: "item_name", selector_value: "Fear" },
          { selector_type: "item_name", selector_value: "Havoc" },
          { selector_type: "item_name", selector_value: "Light / Darkness" },
          { selector_type: "item_name", selector_value: "Mind Reading" },
          { selector_type: "item_name", selector_value: "Smite" },
          { selector_type: "item_name", selector_value: "Stun" },
          { selector_type: "item_name", selector_value: "Wall Walker" },
          { selector_type: "item_name", selector_value: "Barrier" },
          { selector_type: "item_name", selector_value: "Farsight" },
          { selector_type: "item_name", selector_value: "Growth/Shrink" },
          { selector_type: "item_name", selector_value: "Object Reading" },
          { selector_type: "item_name", selector_value: "Sloth/Speed" },
          { selector_type: "item_name", selector_value: "Slumber" },
          { selector_type: "item_name", selector_value: "Teleport" },
          { selector_type: "item_name", selector_value: "Drain Power Points" }
        ]
      },
    ],
    group: groupName,
    defaultChecked: "on"
  },
  {
    id:"POWER_BASE_MODIFIER-1-5",
    name:"BRSW.powerTnModifier1-5",
    button_name:"BRSW.powerTnModifier1-5",
    skillMod: "-1.5",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      {
        or_selector:[
          { selector_type: "item_name", selector_value: "Boost/Lower Trait" },
          { selector_type: "item_name", selector_value: "Deflection" },
          { selector_type: "item_name", selector_value: "Healing" },
          { selector_type: "item_name", selector_value: "Illusion" },
          { selector_type: "item_name", selector_value: "Shape Change" },
          { selector_type: "item_name", selector_value: "Banish" },
          { selector_type: "item_name", selector_value: "Fly" },
          { selector_type: "item_name", selector_value: "Mind Wipe" },
          { selector_type: "item_name", selector_value: "Puppet" },
          { selector_type: "item_name", selector_value: "Zombie" }
        ]
      },
    ],
    group: groupName,
    defaultChecked: "on"
  },
  {
    id:"POWER_BASE_MODIFIER-2",
    name:"BRSW.powerTnModifier2",
    button_name:"BRSW.powerTnModifier2",
    skillMod: "-2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      {
        or_selector:[
          { selector_type: "item_name", selector_value: "Damage Field" },
          { selector_type: "item_name", selector_value: "Warrior's Gift" }
        ]
      },
    ],
    group: groupName,
    defaultChecked: "on"
  },
  {
    id:"POWER_BASE_MODIFIER-2-5",
    name:"BRSW.powerTnModifier2-5",
    button_name:"BRSW.powerTnModifier2-5",
    skillMod: "-2.5",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { 
        or_selector:[
          { selector_type: "item_name", selector_value: "Divination" },
          { selector_type: "item_name", selector_value: "Invisibility" },
          { selector_type: "item_name", selector_value: "Telekinesis" },
          { selector_type: "item_name", selector_value: "Intangibility" }
        ]
      },
    ],
    group: groupName,
    defaultChecked: "on"
  },
  {
    id:"POWER_BASE_MODIFIER-15",
    name:"BRSW.powerTnModifier15",
    button_name:"BRSW.powerTnModifier15",
    skillMod: "-15",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { 
        or_selector:[
          { selector_type: "item_name", selector_value: "Resurrection" }
        ]
      },
    ],
    group: groupName,
    defaultChecked: "on"
  }
];