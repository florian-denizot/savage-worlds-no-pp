/// power modifiers for novice powers ...

// TODO ... some way to handle different Areas of Effect using the single button selector ???

/*
  format of power modifier elements ...
    name: "xxxxx", // text for line in damage roll details, currently NOT translated
    button_name: "BRSW.xxxxx", // button text in modal dialog, is translated
    { selector_type: "item_name", selector_value: "xxxxx" }           // "item_name"      is currently NOT translated
    { selector_type: "actor_has_edge", selector_value: "BRSW.xxxxx" } // "actor_has_edge" is translated
    group: "BRSW.xxxxx"

    { selector_type: "actor_has_edge", selector_value: "BRSW.EdgeName-Epic-Mastery" }
*/

export const modifiers = [
  // ADDITIONALRECIPIENTS
  // NOTE: rather than have each power with the additional recipients have its own set of buttons, centralise it to this block
  {
    id: "POWERADDITIONALRECIPIENTS1",
    name: "Power",
    button_name: "BRSW.PowerModifiersGenericAdditionalRecipients1",
    skillMod: "-0.5",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      {
        or_selector: [
          {
            selector_type: "item_name", selector_value: "Arcane Protection",
          },
          {
            selector_type: "item_name", selector_value: "Boost",
          },
          {
            selector_type: "item_name", selector_value: "Burrow",
          },
          {
            selector_type: "item_name", selector_value: "Darksight",
          },
          {
            selector_type: "item_name", selector_value: "Deflection",
          },
          {
            selector_type: "item_name", selector_value: "DetectConcealArcana",
          },
          {
            selector_type: "item_name", selector_value: "Disguise",
          },
          {
            selector_type: "item_name", selector_value: "Empathy",
          },
          {
            selector_type: "item_name", selector_value: "Environmental Protection",
          },
          {
            selector_type: "item_name", selector_value: "Farsight",
          },
          {
            selector_type: "item_name", selector_value: "Fly",
          },
          {
            selector_type: "item_name", selector_value: "Intangibility",
          },
          {
            selector_type: "item_name", selector_value: "Invisibility",
          },
          {
            selector_type: "item_name", selector_value: "MindLink",
          },
          {
            selector_type: "item_name", selector_value: "PlaneShift",
          },
          {
            selector_type: "item_name", selector_value: "Protection",
          },
          {
            selector_type: "item_name", selector_value: "Puppet",
          },
          {
            selector_type: "item_name", selector_value: "Relief",
          },
          {
            selector_type: "item_name", selector_value: "SlothSpeed",
          },
          {
            selector_type: "item_name", selector_value: "Smite",
          },
          {
            selector_type: "item_name", selector_value: "SpeakLanguages",
          },
          {
            selector_type: "item_name", selector_value: "Teleport",
          },
          {
            selector_type: "item_name", selector_value: "Wall Walker",
          },
          {
            selector_type: "item_name", selector_value: "WarriorsGift",
          }
        ],
      }
    ],
    group: "BRSW.PowerModifiersGenericAdditionalRecipients",
    group_single: true,
  },
  {
    id: "POWERADDITIONALRECIPIENTS2",
    name: "Power",
    button_name: "BRSW.PowerModifiersGenericAdditionalRecipients2",
    skillMod: "-1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      {
        or_selector: [
          {
            selector_type: "item_name", selector_value: "Arcane Protection",
          },
          {
            selector_type: "item_name", selector_value: "Boost",
          },
          {
            selector_type: "item_name", selector_value: "Burrow",
          },
          {
            selector_type: "item_name", selector_value: "Darksight",
          },
          {
            selector_type: "item_name", selector_value: "Deflection",
          },
          {
            selector_type: "item_name", selector_value: "DetectConcealArcana",
          },
          {
            selector_type: "item_name", selector_value: "Disguise",
          },
          {
            selector_type: "item_name", selector_value: "Empathy",
          },
          {
            selector_type: "item_name", selector_value: "Environmental Protection",
          },
          {
            selector_type: "item_name", selector_value: "Farsight",
          },
          {
            selector_type: "item_name", selector_value: "Fly",
          },
          {
            selector_type: "item_name", selector_value: "Intangibility",
          },
          {
            selector_type: "item_name", selector_value: "Invisibility",
          },
          {
            selector_type: "item_name", selector_value: "MindLink",
          },
          {
            selector_type: "item_name", selector_value: "PlaneShift",
          },
          {
            selector_type: "item_name", selector_value: "Protection",
          },
          {
            selector_type: "item_name", selector_value: "Puppet",
          },
          {
            selector_type: "item_name", selector_value: "Relief",
          },
          {
            selector_type: "item_name", selector_value: "SlothSpeed",
          },
          {
            selector_type: "item_name", selector_value: "Smite",
          },
          {
            selector_type: "item_name", selector_value: "SpeakLanguages",
          },
          {
            selector_type: "item_name", selector_value: "Teleport",
          },
          {
            selector_type: "item_name", selector_value: "Wall Walker",
          },
          {
            selector_type: "item_name", selector_value: "WarriorsGift",
          }
        ],
      }
    ],
    group: "BRSW.PowerModifiersGenericAdditionalRecipients",
    group_single: true,
  },
  {
    id: "POWERADDITIONALRECIPIENTS3",
    name: "Power",
    button_name: "BRSW.PowerModifiersGenericAdditionalRecipients3",
    skillMod: "-1.5",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      {
        or_selector: [
          {
            selector_type: "item_name", selector_value: "Arcane Protection",
          },
          {
            selector_type: "item_name", selector_value: "Boost",
          },
          {
            selector_type: "item_name", selector_value: "Burrow",
          },
          {
            selector_type: "item_name", selector_value: "Darksight",
          },
          {
            selector_type: "item_name", selector_value: "Deflection",
          },
          {
            selector_type: "item_name", selector_value: "DetectConcealArcana",
          },
          {
            selector_type: "item_name", selector_value: "Disguise",
          },
          {
            selector_type: "item_name", selector_value: "Empathy",
          },
          {
            selector_type: "item_name", selector_value: "Environmental Protection",
          },
          {
            selector_type: "item_name", selector_value: "Farsight",
          },
          {
            selector_type: "item_name", selector_value: "Fly",
          },
          {
            selector_type: "item_name", selector_value: "Intangibility",
          },
          {
            selector_type: "item_name", selector_value: "Invisibility",
          },
          {
            selector_type: "item_name", selector_value: "MindLink",
          },
          {
            selector_type: "item_name", selector_value: "PlaneShift",
          },
          {
            selector_type: "item_name", selector_value: "Protection",
          },
          {
            selector_type: "item_name", selector_value: "Puppet",
          },
          {
            selector_type: "item_name", selector_value: "Relief",
          },
          {
            selector_type: "item_name", selector_value: "SlothSpeed",
          },
          {
            selector_type: "item_name", selector_value: "Smite",
          },
          {
            selector_type: "item_name", selector_value: "SpeakLanguages",
          },
          {
            selector_type: "item_name", selector_value: "Teleport",
          },
          {
            selector_type: "item_name", selector_value: "Wall Walker",
          },
          {
            selector_type: "item_name", selector_value: "WarriorsGift",
          }
        ],
      }
    ],
    group: "BRSW.PowerModifiersGenericAdditionalRecipients",
    group_single: true,
  },
  {
    id: "POWERADDITIONALRECIPIENTS4",
    name: "Power",
    button_name: "BRSW.PowerModifiersGenericAdditionalRecipients4",
    skillMod: "-2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      {
        or_selector: [
          {
            selector_type: "item_name", selector_value: "Arcane Protection",
          },
          {
            selector_type: "item_name", selector_value: "Boost",
          },
          {
            selector_type: "item_name", selector_value: "Burrow",
          },
          {
            selector_type: "item_name", selector_value: "Darksight",
          },
          {
            selector_type: "item_name", selector_value: "Deflection",
          },
          {
            selector_type: "item_name", selector_value: "DetectConcealArcana",
          },
          {
            selector_type: "item_name", selector_value: "Disguise",
          },
          {
            selector_type: "item_name", selector_value: "Empathy",
          },
          {
            selector_type: "item_name", selector_value: "Environmental Protection",
          },
          {
            selector_type: "item_name", selector_value: "Farsight",
          },
          {
            selector_type: "item_name", selector_value: "Fly",
          },
          {
            selector_type: "item_name", selector_value: "Intangibility",
          },
          {
            selector_type: "item_name", selector_value: "Invisibility",
          },
          {
            selector_type: "item_name", selector_value: "MindLink",
          },
          {
            selector_type: "item_name", selector_value: "PlaneShift",
          },
          {
            selector_type: "item_name", selector_value: "Protection",
          },
          {
            selector_type: "item_name", selector_value: "Puppet",
          },
          {
            selector_type: "item_name", selector_value: "Relief",
          },
          {
            selector_type: "item_name", selector_value: "SlothSpeed",
          },
          {
            selector_type: "item_name", selector_value: "Smite",
          },
          {
            selector_type: "item_name", selector_value: "SpeakLanguages",
          },
          {
            selector_type: "item_name", selector_value: "Teleport",
          },
          {
            selector_type: "item_name", selector_value: "Wall Walker",
          },
          {
            selector_type: "item_name", selector_value: "WarriorsGift",
          }
        ],
      }
    ],
    group: "BRSW.PowerModifiersGenericAdditionalRecipients",
    group_single: true,
  },
  {
    id: "POWERADDITIONALRECIPIENTS5",
    name: "Power",
    button_name: "BRSW.PowerModifiersGenericAdditionalRecipients5",
    skillMod: "-2.5",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      {
        or_selector: [
          {
            selector_type: "item_name", selector_value: "Arcane Protection",
          },
          {
            selector_type: "item_name", selector_value: "Boost",
          },
          {
            selector_type: "item_name", selector_value: "Burrow",
          },
          {
            selector_type: "item_name", selector_value: "Darksight",
          },
          {
            selector_type: "item_name", selector_value: "Deflection",
          },
          {
            selector_type: "item_name", selector_value: "DetectConcealArcana",
          },
          {
            selector_type: "item_name", selector_value: "Disguise",
          },
          {
            selector_type: "item_name", selector_value: "Empathy",
          },
          {
            selector_type: "item_name", selector_value: "Environmental Protection",
          },
          {
            selector_type: "item_name", selector_value: "Farsight",
          },
          {
            selector_type: "item_name", selector_value: "Fly",
          },
          {
            selector_type: "item_name", selector_value: "Intangibility",
          },
          {
            selector_type: "item_name", selector_value: "Invisibility",
          },
          {
            selector_type: "item_name", selector_value: "MindLink",
          },
          {
            selector_type: "item_name", selector_value: "PlaneShift",
          },
          {
            selector_type: "item_name", selector_value: "Protection",
          },
          {
            selector_type: "item_name", selector_value: "Puppet",
          },
          {
            selector_type: "item_name", selector_value: "Relief",
          },
          {
            selector_type: "item_name", selector_value: "SlothSpeed",
          },
          {
            selector_type: "item_name", selector_value: "Smite",
          },
          {
            selector_type: "item_name", selector_value: "SpeakLanguages",
          },
          {
            selector_type: "item_name", selector_value: "Teleport",
          },
          {
            selector_type: "item_name", selector_value: "Wall Walker",
          },
          {
            selector_type: "item_name", selector_value: "WarriorsGift",
          }
        ],
      }
    ],
    group: "BRSW.PowerModifiersGenericAdditionalRecipients",
    group_single: true,
  },

  // ARCANE PROTECTION
  // plus Additional Recipients, which is handled by the generic clause above
  {
    id: "POWERARCANEPROTECTIONGREATER",
    name: "Greater Arcane Protection",
    button_name: "BRSW.PowerModifiersArcaneProtectionGreater",
    skillMod: "-1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Arcane Protection" },
      { selector_type: "actor_has_edge", selector_value: "BRSW.EdgeName-Epic-Mastery" }
    ],
    group: "BRSW.PowerModifiersArcaneProtection"
  },

  // BANISH (V)

  // BARRIER (S)

  // BEAST FRIEND
  {
    id: "POWERBEASTFRIENDMODBESTIARIUM",
    name: "☆ Beastarium",
    button_name: "BRSW.PowerModifiersBeastFriendBeastarium",
    skillMod: "-1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Beast Friend" },
      { selector_type: "actor_has_edge", selector_value: "BRSW.EdgeName-Epic-Mastery" }
    ],
    group: "BRSW.PowerModifiersBeastFriend"
  },
  {
    id: "POWERBEASTFRIENDMODDURATION",
    name: "BRSW.PowerModifiersDuration",
    button_name: "BRSW.PowerModifiersDuration",
    skillMod: "-0.5",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Beast Friend" }
    ],
    group: "BRSW.PowerModifiersBeastFriend"
  },
  {
    id: "POWERBEASTFRIENDMODMINDRIDER",
    name: "BRSW.PowerModifiersMindRider",
    button_name: "BRSW.PowerModifiersMindRider",
    skillMod: "-0.5",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Beast Friend" }
    ],
    group: "BRSW.PowerModifiersBeastFriend"
  },

  // BLAST (S)

  // BLESSING (S)

  // BLIND
  {
    id: "POWERBLINDMOD3STRONG",
    name: "BRSW.PowerModifiersBlindStrong",
    button_name: "BRSW.PowerModifiersBlindStrong",
    skillMod: "-0.5",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Blind" }
    ],
    group: "BRSW.PowerModifiersBlind"
  },
  {
    id: "POWERBLINDMOD1MEDIUM",
    name: "BRSW.PowerModifiersBlindAreaEffect2MBT",
    button_name: "BRSW.PowerModifiersBlindAreaEffect2MBT",
    skillMod: "-1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Blind" }
    ],
    group: "BRSW.PowerModifiersBlind"
  },
  {
    id: "POWERBLINDMOD2LARGE",
    name: "BRSW.PowerModifiersBlindAreaEffect3LBTStream",
    button_name: "BRSW.PowerModifiersBlindAreaEffect3LBTStream",
    skillMod: "-1.5",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Blind" }
    ],
    group: "BRSW.PowerModifiersBlind"
  },

  // BOLT
  {
    id: "POWERBOLTMOD1DAMAGE",
    name: "Damage (+1d6)",
    button_name: "BRSW.PowerModifiersBoltDamage",
    skillMod: "-1",
    dmgMod: "+d6x",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Bolt" }
    ],
    group: "BRSW.PowerModifiersBolt"
  },
  {
    id: "POWERBOLTMOD3DISINTEGRATE",
    name: "Disintegrate",
    button_name: "BRSW.PowerModifiersBoltDisintegrate",
    skillMod: "-1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Bolt" },
      { selector_type: "actor_has_edge", selector_value: "BRSW.EdgeName-Epic-Mastery" }
    ],
    group: "BRSW.PowerModifiersBolt"
  },
  {
    id: "POWERBOLTMOD2GREATERBOLT",
    name: "Greater Bolt (+2d6)",
    button_name: "BRSW.PowerModifiersBoltGreaterBolt",
    skillMod: "-2",
    dmgMod: "+2d6x",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Bolt" },
      { selector_type: "actor_has_edge", selector_value: "BRSW.EdgeName-Epic-Mastery" }
    ],
    group: "BRSW.PowerModifiersBolt"
  },
  {
    id: "POWERBOLTMOD4RATEOFFIRE",
    name: "Rate of Fire",
    button_name: "BRSW.PowerModifiersBoltRateOfFire",
    skillMod: "-1",
    rof: "2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Bolt" },
      { selector_type: "actor_has_edge", selector_value: "BRSW.EdgeName-Epic-Mastery" }
    ],
    group: "BRSW.PowerModifiersBolt"
  },

  // BOOST/LOWER TRAIT
  // plus Additional Recipients, which is handled by the generic clause above
  {
    id: "POWERBOOSTLOWERTRAITMOGREATER",
    name: "Greater Boost/Lower Trait",
    button_name: "BRSW.PowerModifiersBoostLowerGreater",
    skillMod: "-1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Boost/Lower Trait" },
      { selector_type: "actor_has_edge", selector_value: "BRSW.EdgeName-Epic-Mastery" }
    ],
    group: "BRSW.PowerModifiersBoostLower"
  },
  {
    id: "POWERBOOSTLOWERTRAITMODSTRONG",
    name: "Strong (+1)",
    button_name: "BRSW.PowerModifiersBoostLowerStrong",
    skillMod: "-0.5",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Boost/Lower Trait" }
    ],
    group: "BRSW.PowerModifiersBoostLower"
  },

  // BURROW
  // plus Additional Recipients, which is handled by the generic clause above
  {
    id: "POWERBURROWMODPOWER",
    name: "Power",
    button_name: "BRSW.PowerModifiersBurrowPower",
    skillMod: "-0.5",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Burrow" }
    ],
    group: "BRSW.PowerModifiersBurrow"
  },

  // BURST
  {
    id: "POWERBURSTMOD1DAMAGE",
    name: "Damage (+2d6)",
    button_name: "BRSW.PowerModifiersBurstDamage",
    skillMod: "-1",
    dmgMod: "+d6x",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Burst" }
    ],
    group: "BRSW.PowerModifiersBurst"
  },
  {
    id: "POWERBURSTMOD3GREATERBURST",
    name: "Greater Burst (+2d6)",
    button_name: "BRSW.PowerModifiersBurstGreaterBurst",
    skillMod: "-2",
    dmgMod: "+2d6x",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Burst" },
      { selector_type: "actor_has_edge", selector_value: "BRSW.EdgeName-Epic-Mastery" }
    ],
    group: "BRSW.PowerModifiersBurst"
  },
  {
    id: "POWERBURSTMOD2PUSH",
    name: "Push (2d6 feet)",
    button_name: "BRSW.PowerModifiersBurstPush",
    skillMod: "-0.5",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Burst" }
    ],
    group: "BRSW.PowerModifiersBurst"
  },

  // CONFUSION

  // CONJURE ITEM

  // CURSE

  // DAMAGE FIELD

  // DARKSIGHT

  // DEFLECTION
  // just Additional Recipients, which is handled by the generic clause above

  // DETECT/CONCEAL ARCANA

  // DISGUISE

  // DISPEL

  // DIVINATION

  // DRAIN POWER POINTS

  // ELEMENTAL MANIPULATION

  // EMPATHY

  // ENTANGLE
  {
    id: "POWERENTANGLEMOD1MEDIUM",
    name: "Medium (LBT)",
    button_name: "BRSW.PowerModifiersEntangleAreaEffectMBT",
    skillMod: "-1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Entangle" }
    ],
    group: "BRSW.PowerModifiersEntangle"
  },
  {
    id: "POWERENTANGLEMOD2LARGE",
    name: "Large or Stream (+3)",
    button_name: "BRSW.PowerModifiersEntangleAreaEffectLBTStream",
    skillMod: "-1.5",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Entangle" }
    ],
    group: "BRSW.PowerModifiersEntangle"
  },
  {
    id: "POWERENTANGLEMOD4DAMAGE",
    name: "Damage (+2)",
    button_name: "BRSW.PowerModifiersEntangleDamage",
    skillMod: "-1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Entangle" }
    ],
    group: "BRSW.PowerModifiersEntangle"
  },
  {
    id: "POWERENTANGLEMOD5DEADLY",
    name: "☆ Deadly (+4)",
    button_name: "BRSW.PowerModifiersEntangleDeadly",
    skillMod: "-2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Entangle" },
      { selector_type: "actor_has_edge", selector_value: "BRSW.EdgeName-Epic-Mastery" }
    ],
    group: "BRSW.PowerModifiersEntangle"
  },
  {
    id: "POWERENTANGLEMOD3TOUGH",
    name: "Tough (+1)",
    button_name: "BRSW.PowerModifiersEntangleTough",
    skillMod: "-0.5",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Entangle" }
    ],
    group: "BRSW.PowerModifiersEntangle"
  },

  // ENVIRONMENTAL PROTECTION
  {
    id: "POWERENVPROTECTIONMODRESISTANCE",
    name: "Environmental Resistance",
    button_name: "BRSW.PowerModifiersEnvironmentalProtectionEnvironmentalResistance",
    skillMod: "-0.5",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Environmental Protection" }
    ],
    group: "BRSW.PowerModifiersEnvironmentalProtection"
  },

  // FARSIGHT

  // FEAR

  // GROWTH/SHRINK

  // HAVOC
  {
    id: "POWERHAVOCMODGREATER",
    name: "Greater Havoc (+2d6)",
    button_name: "BRSW.PowerModifiersHavocGreaterHavoc",
    skillMod: "-1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Havoc" },
      { selector_type: "actor_has_edge", selector_value: "BRSW.EdgeName-Epic-Mastery" }
    ],
    group: "BRSW.PowerModifiersHavoc"
  },
  {
    id: "POWERHAVOCMODAREA",
    name: "Area Effect (LBT)",
    button_name: "BRSW.PowerModifiersHavocAreaEffect",
    skillMod: "-0.5",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Havoc" }
    ],
    group: "BRSW.PowerModifiersHavoc"
  },

  // HEALING
  {
    id: "POWERHEALINGMOD4GREATERHEALING",
    name: "Greater Healing",
    button_name: "BRSW.PowerModifiersHealingGreaterHealing",
    skillMod: "-5",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Healing" }
    ],
    group: "BRSW.PowerModifiersHealing"
  },
  {
    id: "POWERHEALINGMOD5CRIPPLINGINJURIES",
    name: "Crippling Injuries",
    button_name: "BRSW.PowerModifiersHealingCripplingInjuries",
    skillMod: "-10",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Healing" }
    ],
    group: "BRSW.PowerModifiersHealing"
  },
  {
    id: "POWERHEALINGMOD2MASSHEALINGMEDIUMBLAST",
    name: "Mass Healing - MBT",
    button_name: "BRSW.PowerModifiersHealingMassHealingMBT",
    skillMod: "-1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Healing" },
      { selector_type: "actor_has_edge", selector_value: "BRSW.EdgeName-Epic-Mastery" }
    ],
    group: "BRSW.PowerModifiersHealing"
  },
  {
    id: "POWERHEALINGMOD3MASSHEALINGLARGEBLAST",
    name: "Mass Healing - LBT",
    button_name: "BRSW.PowerModifiersHealingMassHealingLBT",
    skillMod: "-1.5",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Healing" },
      { selector_type: "actor_has_edge", selector_value: "BRSW.EdgeName-Epic-Mastery" }
    ],
    group: "BRSW.PowerModifiersHealing"
  },
  {
    id: "POWERHEALINGMOD1NEUTRALIZEPOISON",
    name: "Neutralize Poison or Disease",
    button_name: "BRSW.PowerModifiersHealingNeutralisePoisonOrDisease",
    skillMod: "-0.5",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Healing" }
    ],
    group: "BRSW.PowerModifiersHealing"
  },

  // ILLUSION

  // INTANGIBILITY

  // INVISIBILITY

  // LIGHT/DARKNESS

  // LOCATE

  // LOCK/UNLOCK

  // MIND LINK

  // MIND READING

  // MIND WIPE

  // MYSTIC INTERVENTION

  // OBJECT READING

  // PLANAR BINDING

  // PLANE SHIFT

  // PROTECTION
  // just Additional Recipients, which is handled by the generic clause above

  // PUPPET

  // RELIEF
  // plus Additional Recipients, which is handled by the generic clause above
  {
    id: "POWERRELIEFMODRESTORATION",
    name: "Restoration",
    button_name: "BRSW.PowerModifiersReliefRestoration",
    skillMod: "-1.5",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Relief" }
    ],
    group: "BRSW.PowerModifiersRelief"
  },
  {
    id: "POWERRELIEFMODSTUNNED",
    name: "Stunned",
    button_name: "BRSW.PowerModifiersReliefStunned",
    skillMod: "-0.5",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Relief" }
    ],
    group: "BRSW.PowerModifiersRelief"
  },

  // RESURRECTION

  // SANCTUARY
  {
    id: "POWERSANCTUARYMODSTRONG",
    name: "☆ Strong",
    button_name: "BRSW.PowerModifiersSanctuaryStrong",
    skillMod: "-0.5",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Sanctuary" },
      { selector_type: "actor_has_edge", selector_value: "BRSW.EdgeName-Epic-Mastery" }
    ],
    group: "BRSW.PowerModifiersSanctuary"
  },
  {
    id: "POWERSANCTUARYMODMEDIUMBLAST",
    name: "Medium Blast",
    button_name: "BRSW.PowerModifiersSanctuaryAreaEffectMBT",
    skillMod: "-1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Sanctuary" }
    ],
    group: "BRSW.PowerModifiersSanctuary"
  },
  {
    id: "POWERSANCTUARYMODLARGEBLAST",
    name: "Large Blast",
    button_name: "BRSW.PowerModifiersSanctuaryAreaEffectLBT",
    skillMod: "-1.5",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Sanctuary" }
    ],
    group: "BRSW.PowerModifiersSanctuary"
  },

  // SCRYING

  // SHAPE CHANGE
  // plus Additional Recipients, which is handled by the generic clause above
  {
    id: "POWERSHAPECHANGEMODDURATION",
    name: "Duration",
    button_name: "BRSW.PowerModifiersShapeChangeDuration",
    skillMod: "-0.5",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Shape Change" }
    ],
    group: "BRSW.PowerModifiersShapeChange"
  },
  {
    id: "POWERSHAPECHANGEMODTRANSFORMTOUCH",
    name: "☆ Transform (Touch)",
    button_name: "BRSW.PowerModifiersShapeChangeTransformTouch",
    skillMod: "-1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Shape Change" },
      { selector_type: "actor_has_edge", selector_value: "BRSW.EdgeName-Epic-Mastery" }
    ],
    group: "BRSW.PowerModifiersShapeChange"
  },
  {
    id: "POWERSHAPECHANGEMODTRANSFORMRANGE",
    name: "☆ Transform (Range)",
    button_name: "BRSW.PowerModifiersShapeChangeTransformRange",
    skillMod: "-1.5",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Shape Change" },
      { selector_type: "actor_has_edge", selector_value: "BRSW.EdgeName-Epic-Mastery" }
    ],
    group: "BRSW.PowerModifiersShapeChange"
  },
  {
    id: "POWERSHAPECHANGEMODPOLYMORPH",
    name: "☆ Polymorph (+3)",
    button_name: "BRSW.PowerModifiersShapeChangePolymorph",
    skillMod: "-1.5",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Shape Change" },
      { selector_type: "actor_has_edge", selector_value: "BRSW.EdgeName-Epic-Mastery" }
    ],
    group: "BRSW.PowerModifiersShapeChange"
  },
  {
    id: "POWERSHAPECHANGEMOD1SIZE-4",
    name: "Size -4 to -1",
    button_name: "BRSW.PowerModifiersShapeChangeSize-4to-1",
    skillMod: "-1.5",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Shape Change" }
    ],
    group: "BRSW.PowerModifiersShapeChangeSize",
    group_single: true,
    defaultChecked: "on"
  },
  {
    id: "POWERSHAPECHANGEMOD2SIZE0",
    name: "Size 0",
    button_name: "BRSW.PowerModifiersShapeChangeSize0",
    skillMod: "-2.5",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Shape Change" },
      {
        or_selector: [
          {
            selector_type: "actor_value", selector_value: "system.advances.rank=Seasoned",
          },
          {
            selector_type: "actor_value", selector_value: "system.advances.rank=Veteran",
          },
          {
            selector_type: "actor_value", selector_value: "system.advances.rank=Heroic",
          },
          {
            selector_type: "actor_value", selector_value: "system.advances.rank=Legendary",
          }
        ],
      }
    ],
    group: "BRSW.PowerModifiersShapeChangeSize",
    group_single: true,
  },
  {
    id: "POWERSHAPECHANGEMOD3SIZE1",
    name: "Size 1 to 2",
    button_name: "BRSW.PowerModifiersShapeChangeSize1to2",
    skillMod: "-4",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Shape Change" },
      {
        or_selector: [
          {
            selector_type: "actor_value", selector_value: "system.advances.rank=Veteran",
          },
          {
            selector_type: "actor_value", selector_value: "system.advances.rank=Heroic",
          },
          {
            selector_type: "actor_value", selector_value: "system.advances.rank=Legendary",
          }
        ],
      }

    ],
    group: "BRSW.PowerModifiersShapeChangeSize",
    group_single: true,
  },
  {
    id: "POWERSHAPECHANGEMOD4SIZE3",
    name: "Size 3 to 4",
    button_name: "BRSW.PowerModifiersShapeChangeSize3to4",
    skillMod: "-5.5",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Shape Change" },
      {
        or_selector: [
          {
            selector_type: "actor_value", selector_value: "system.advances.rank=Heroic",
          },
          {
            selector_type: "actor_value", selector_value: "system.advances.rank=Legendary",
          }
        ],
      }

    ],
    group: "BRSW.PowerModifiersShapeChangeSize",
    group_single: true,
  },
  {
    id: "POWERSHAPECHANGEMOD5SIZE5",
    name: "Size 5 to 10",
    button_name: "BRSW.PowerModifiersShapeChangeSize5to10",
    skillMod: "-7.5",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Shape Change" },
      {
        or_selector: [
          {
            selector_type: "actor_value", selector_value: "system.advances.rank=Legendary",
          }
        ],
      }
    ],
    group: "BRSW.PowerModifiersShapeChangeSize",
    group_single: true,
  },

  // SLOTH/SPEED

  // SLUMBER

  // SMITE

  // SOUND/SILENCE

  // SPEAK LANGUAGE

  // STUN

  // SUMMON ALLY
  {
    id: "POWERSUMMONALLYMOD1NOVICE",
    name: "Novice",
    button_name: "BRSW.PowerModifiersSummonAlly1Novice",
    skillMod: "-0.5",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Summon Ally" }
    ],
    group: "BRSW.PowerModifiersSummonAllyRank"
  },
  {
    id: "POWERSUMMONALLYMOD2SEASONED",
    name: "Seasoned",
    button_name: "BRSW.PowerModifiersSummonAlly2Seasoned",
    skillMod: "-1.5",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Summon Ally" },
      {
        or_selector: [
          {
            selector_type: "actor_value", selector_value: "system.advances.rank=Seasoned",
          },
          {
            selector_type: "actor_value", selector_value: "system.advances.rank=Veteran",
          },
          {
            selector_type: "actor_value", selector_value: "system.advances.rank=Heroic",
          },
          {
            selector_type: "actor_value", selector_value: "system.advances.rank=Legendary",
          }
        ],
      }
    ],
    group: "BRSW.PowerModifiersSummonAllyRank"
  },
  {
    id: "POWERSUMMONALLYMOD3VETERAN",
    name: "Veteran",
    button_name: "BRSW.PowerModifiersSummonAlly3Veteran",
    skillMod: "-2.5",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Summon Ally" },
      {
        or_selector: [
          {
            selector_type: "actor_value", selector_value: "system.advances.rank=Veteran",
          },
          {
            selector_type: "actor_value", selector_value: "system.advances.rank=Heroic",
          },
          {
            selector_type: "actor_value", selector_value: "system.advances.rank=Legendary",
          }
        ],
      }
    ],
    group: "BRSW.PowerModifiersSummonAllyRank"
  },
  {
    id: "POWERSUMMONALLYMOD4HEROIC",
    name: "Heroic",
    button_name: "BRSW.PowerModifiersSummonAlly4Heroic",
    skillMod: "-3.5",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Summon Ally" },
      {
        or_selector: [
          {
            selector_type: "actor_value", selector_value: "system.advances.rank=Heroic",
          },
          {
            selector_type: "actor_value", selector_value: "system.advances.rank=Legendary",
          }
        ],
      }
    ],
    group: "BRSW.PowerModifiersSummonAllyRank"
  },
  {
    id: "POWERSUMMONALLYMODMINDRIDER",
    name: "Mind Rider",
    button_name: "BRSW.PowerModifiersSummonAllyMindRider",
    skillMod: "-0.5",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Summon Ally" }
    ],
    group: "BRSW.PowerModifiersSummonAlly"
  },
  {
    id: "POWERSUMMONALLYMODFLIGHT",
    name: "Flight",
    button_name: "BRSW.PowerModifiersSummonAllyFlight",
    skillMod: "-0.5",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Summon Ally" }
    ],
    group: "BRSW.PowerModifiersSummonAlly"
  },
  {
    id: "POWERSUMMONALLYMODADDITIONALALLIES",
    name: "Additional Allies",
    button_name: "BRSW.PowerModifiersSummonAllyAdditionalAllies",
    skillMod: "+0",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Summon Ally" },
      { selector_type: "actor_has_edge", selector_value: "BRSW.EdgeName-Epic-Mastery" }
    ],
    group: "BRSW.PowerModifiersSummonAlly"
  },
  {
    id: "POWERSUMMONALLYMODCOMBATEDGE",
    name: "Combat Edge",
    button_name: "BRSW.PowerModifiersSummonAllyCombatEdge",
    skillMod: "+0",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Summon Ally" }
    ],
    group: "BRSW.PowerModifiersSummonAlly"
  },
  {
    id: "POWERSUMMONALLYMODINCREASEDTRAIT",
    name: "Increased Trait",
    button_name: "BRSW.PowerModifiersSummonAllyIncreasedTrait",
    skillMod: "+0",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Summon Ally" }
    ],
    group: "BRSW.PowerModifiersSummonAlly"
  },

  // SUMMON ANIMAL

  // SUMMON MONSTER

  // SUMMON UNDEAD

  // TELEKINESIS

  // TELEPORT

  // TIME STOP

  // WALL WALKER
  // just Additional Recipients, which is handled by the generic clause above

  // WISH

  // ZOMBIE

];
