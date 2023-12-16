import * as BASE from './base-modifiers.js';
import * as GENERIC from './generic-modifiers.js';
import * as SPECIFIC from './specific-modifiers.js';
import * as ACTIONS from './new-actions.js';



Hooks.once('init', () => {
  // --------------------------------------------------
  // SETTINGS

  // call this with: game.settings.get("savage-worlds-no-pp", "betterrolls_globalactions")
  game.settings.register('savage-worlds-no-pp', 'betterrolls_globalactions', {
    name: 'Better Rolls - Global Actions',
    hint: 'Check this to load Savage Worlds No Power Points global actions for the Better Rolls module. Changing this will reload the world.',
    scope: 'world',
    config: true,
    default: true,
    type: Boolean,
    requiresReload: true
  });   
  
}); // END HOOKS


  
Hooks.once('ready', () => {
  
  const useBetterRollsGA =  game.settings.get("savage-worlds-no-pp", "betterrolls_globalactions");
  if ( useBetterRollsGA && game.modules.get("betterrolls-swade2")?.active ) { 
	  game.brsw.add_actions(BASE.modifiers);       
	  game.brsw.add_actions(GENERIC.modifiers);       
	  game.brsw.add_actions(SPECIFIC.modifiers);       
	  game.brsw.add_actions(ACTIONS.modifiers);       
  } else if(useBetterRollsGA && !game.modules.get("betterrolls-swade2")?.active) {
      console.log("Savage World No PP: Please activate the Better Rolls module.")    
  }
  
}); // END HOOKS