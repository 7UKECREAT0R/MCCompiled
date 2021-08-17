# Drop Descriptors
Hate having to create structures for each of your custom items/kits? Use item descriptors! Start by making a file named `op_sword.descriptor` and put the following lines in it:
```
& drop op_sword
  name:  [color: CYAN]OP Sword
  item:         netherite_sword
  enchant:      unbreaking 10
  enchant:      sharpness 5
  enchant:      fire_aspect 2
  lock:         inventory
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
You can also access your custom item's properties in your code. Simply use any of these as if they were a preprocessor variable. Note that this is for the op_sword in the example.
```
drop.op_sword.name            "§bOP Sword"
drop.op_sword.count           1
drop.op_sword.item            "netherite_sword"
drop.op_sword.enchantcount    3

drop.op_sword.enchant1.name   "Unbreaking"
drop.op_sword.enchant2.name   "Sharpness"
drop.op_sword.enchant1.level  10
drop.op_sword.enchant2.level  5
drop.op_sword.enchant1.full   "Unbreaking X"
drop.op_sword.enchant2.full   "Sharpness V"

drop.op_sword.damage          0
drop.op_sword.keep            "False"
drop.op_sword.lock            "inventory"

drop.op_sword.canplaceon1     ""
drop.op_sword.candestroy1     ""
```
For properties which can have multiple, such as enchants or canplaceon, a number is placed after them to denote which one you want to access. Enchants have three sub-properties, being `full`, `name` and `level` so remember that you can pick between them. For properties which have multiple elements, you can also append `count` to get how many of them there are (see the example)
