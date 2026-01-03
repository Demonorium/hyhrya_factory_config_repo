ServerEvents.tags('item', event => {
    event.add('curios:bracelet', event.get('curios:bangle').getObjectIds().stream().map(id => id.toString()).toList())
    event.removeAll('curios:bangle')
    event.removeAll('curios:flight_ring')
  
    // event.add('curios:belt', event.get('curios:quiver').getObjectIds().stream().map(id => id.toString()).toList())
    // event.add('curios:back', event.get('curios:quiver').getObjectIds().stream().map(id => id.toString()).toList())
    // event.add('curios:bundle', event.get('curios:quiver').getObjectIds().stream().map(id => id.toString()).toList())
    // event.add('curios:bundle', 'occultism:satchel')
    // event.removeAll('curios:quiver')
  
    event.add('curios:bundle', event.get('curios:extra').getObjectIds().stream().map(id => id.toString()).toList())
    event.add('curios:head', event.get('curios:extra').getObjectIds().stream().map(id => id.toString()).toList())
    event.add('curios:belt', event.get('curios:extra').getObjectIds().stream().map(id => id.toString()).toList())
    event.removeAll('curios:extra')
})  