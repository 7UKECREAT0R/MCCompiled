# Drop Descriptors
Hate having to create structures for each of your custom items/kits? Use item descriptors! Start by making a file named `op_sword.descriptor` and put the following lines in it:
```
& drop op_sword
  name:  [color: CYAN]OP Sword
  item:         netherite_sword
  enchant:      unbreaking 10
  enchant:      sharpness 5
  enchant:      fire_aspect 2
```
List of properties:
* `name` The name of the item in-game.
* `count` The amount of items.
* `item` The type of the item.
* `enchant` Adds an enchantment to the item. Requires both name and level.
* `damage` Sets the amount of damage dealt to this item (durability)
* `keep` true or false. Whether this item should never drop.
* `canplaceon` Adds a block to the CanPlaceOn list.
* `candestroy` Adds a block to the CanDestroy list.
* `lock: inventory` Makes item undroppable and unusable for crafting.
* `lock: slot` Makes item immovable from its slot as well as /\

## Multiple Items
You can also put multiple drops in one file. Just specify a new `drop`.
```
& drop hub_compass
  name:     Open HUB Menu
  item:     compass
  enchant:  infinity

& drop hub_gadgets
  name:     Gadgets
  item:     slime_ball
  enchant:  infinity
```

# Using
The give statement automatically supports custom drops.
```
give op_sword 1
```
