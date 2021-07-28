# Item Descriptors
Hate having to create structures for each of your custom items/kits? Use item descriptors! Start by making a file named `op_sword.item` and put the following lines in it:
```
name:         op_sword

displayname:  [color: CYAN]OP Sword
item:         netherite_sword
enchant:      unbreaking 10
enchant:      sharpness 5
enchant:      fire_aspect 2
```
List of properties:
* `name` The name you will use in your code.
* `displayname` The name of the item in-game.
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
You can also put multiple items in one file. Just specify a new `name`.
```
name: hub_compass
displayname: Open HUB Menu
item: compass
enchant: infinity

name: hub_gadgets
displayname: Gadgets
item: slime_ball
enchant: infinity
```


# Compiling
To ensure you're able to give the item, make sure to include
```
compile op_sword.item
```
or
```
compile all
```
at the top of your file to generate the appropriate structure files and let the compiler know they exist.

# Using
The give statement automatically supports custom items.
```
give op_sword 1
```
