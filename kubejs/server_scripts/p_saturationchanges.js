let tickNumber = 0
const INTERVAL = 20 * 30
//saturation range, effect, time, strength
let saturationEffects = []

//lower range is inclusive, upper is exclusive
//-1 is -inf and +inf for lower and upper respectively
function SEffect(minSat, maxSat, effectID, time, strength){
  this.range = [minSat, maxSat];
  this.effectID = effectID;
  this.time = time;
  this.strength = strength;
}

saturationEffects.push(new SEffect(5, -1, 'minecraft:strength', INTERVAL*2, 1)) //Middle effect, seems to cover almost the whole sat bar
saturationEffects.push(new SEffect(15, -1, 'minecraft:absorption', INTERVAL*2, 2)) //Highest tier effect, works on the higher half of sat

PlayerEvents.tick((event) => {
  if (event.player.tickCount % INTERVAL) return
  const saturation = event.player.foodData.saturationLevel 
  for (let i = 0; i<saturationEffects.length; i++){
    let effect = saturationEffects[i]
    if(effect.range[0] == -1 || effect.range[0] <= saturation){
      if(effect.range[1] == -1 || saturation < effect.range[1]){
        event.player.potionEffects.add(effect.effectID, effect.time, effect.strength)
      }
    }
  }
})