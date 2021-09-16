# Descriptors: Items
Custom items or item overrides are necessary when you want to extend the functionality of the game completely!
This article will go over how to create custom items, and all of their properties that can be used to your advantage to make cool stuff!

## Basics
For the first part of this guide, we're going to make a circle item. It won't do anything except make you question reality.
> Remember to put this inside a `descriptor` block!
```
  item circle {
    display-name: Circle
    texture: literal-circle.png
  }
```
Well that was easy. Compile your project now and load it up into a world/server!
Let's find your *namespace* name. This will be your .mcc file name without the extension and spaces.
In my case, my file name is "example item.mcc" so the namespace is "exampleitem".
> Try giving yourself your new item with `/give @s namespace:circle` and replace namespace!

## Properties
Next up, I want to be able to eat the circle. Don't ask questions. Let's add a new field to our item.
```
  item circle {
    display-name: Circle
    texture: literal-circle.png
    
    food: 2
  }
```
Now we can eat our circle to gain 2 food level (2 half drumsticks). You're probably wondering how to set some other stuff, like effects.
There will be a list of all item properties at the end of this section, but let's add an effect to our circle now. I want it to make you levitate.
```
  item circle {
    display-name: Circle
    texture: literal-circle.png
    
    food: 2
    food-effect: 100% levitation 5s 0
  }
```
The syntax for food-effect is: `<percent: chance> <string: effect> <time: duration> <int: amplifier>` which as you can see, is filled out.
Adding this line *added* that effect to the item, meaning that you can actually stack these if you want to add more effects.

<br />Okay, this is cool and all but finally I want to make the circle turn into a block of dirt after being used.
```
  item circle {
    display-name: Circle
    texture: literal-circle.png
    
    food: 2
    food-effect: 100% levitation 5s 0
    food-result: dirt
  }
```
Our circle is complete and it is beautiful.

## Overrides
If you want to override a regular item's properties, you can specify `override` in your item definition.
```
descriptor {
  item override(axolotl_bucket) {
    fuel: 60
  }
}
```

## All Item Properties
If a item is marked as **[LIST]** that means you can add multiple of them.

* `armor: <int: amount> <string: display-as>` This item gives armor when worn. display-as can be "diamond", "iron", "leather", etc...
* `armor-knockback-resistance: <percent: amount>` Wearing this armor lets you resist knockback.
* `place: <string: block>` Place a block when this item is used.
* `place-restrict: <string: block>` **[LIST]** Restrict which blocks this can be placed on.
* `display-name: <string: name>` Set the name which shows ingame.
* `durability: <int: max-amount>` The maximum amount of durability.
* `durability-chance: <percent: chance>` The chance for a use of this item to use durability.
* `places-entity: <string: entity>` This item will spawn an entity when placed.
* `places-entity-restrict: <string: block>` **[LIST]** Restrict which blocks this will spawn an entity on.
* `food: <int: amount>` Set that this item can be eaten and refills food points.
* `food-effect: <percent: chance> <string: effect> <time: duration> <int: amplifier>` **[LIST]** Add an effect when this item is consumed.
* `food-result: <string: item>` This item will transform into a new item once eaten.
* `food-always` This item can be eaten even when hunger is full.
* `fuel: <int: seconds>` This item can be used as fuel.
* `projectile: <string: entity> [float: full-charge-time]` This item can be shot from a shooter item.
* `shooter-ammo: <string: item>` The ammunition for this shooter.
* `shooter-max-charge: <time: max>` Amount of time this shooter can be charged max.
* `render-offset: <float: x> <float: y> <float: z>` Offset this item when in hand.
* `render-offset-offhand: <float: x> <float: y> <float: z>` Offset this item when in the offhand.
* `repairable: <string: item>` **[LIST]** This item can be repaired with this item.
* `throwable` This item can be thrown.
* `wearable: <string: slot>` This item can be worn/equipped in this slot.
