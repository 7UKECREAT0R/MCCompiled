# Kit Descriptors
To go along with drop descriptors, you can also create kits! Kits also have a few automatically managed properties that might prove useful.

## Examples
```
& kit pvp
    description: The regular PvP kit.
    item: iron_sword
    item: bow
    item: arrow 24
    item: iron_helmet
    item: iron_chestplate
    item: iron_leggings
    item: iron_boots
    autoequip: true

& kit op
    description: Overpowered kit that's fun only when you're the one playing it.
    item: op_sword
    item: fishing_rod
    item: diamond_helmet
    item: diamond_chestplate
    item: diamond_leggings
    item: diamond_boots
    autoequip: true
```
Note that the `op` kit uses the `op_sword` from \[6A: Drops].

List of properties:
* `description` A brief description of the kit.
* `item` Add an item to the kit.
* `autoequip` true or false. Automatically equip armor? Only works on regular items.
* `clear` true or false. Clear the player's inventory before giving.
* `message` Message sent to the player receiving the kit. Use `{player}` to denote the player's name.

# Usage
To use a kit, simply write a `kit` statement. This will give the kit to the selected player/players.
```
kit pvp
```
