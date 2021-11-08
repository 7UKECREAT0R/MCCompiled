# Blocks
Placing and interacting with blocks is a fairly simple process. There's two main commands that can be used to modify the world's blocks, `place` and `fill`.

## Place
The place statement places a block in the world.
```
place <block> <x> <y> <z> [data] [destroyMode]
```
The data of the block could be a constant or data value for that block, such as `[button: east]`. The destroyMode describes how to handle the placing of the block and can be any of the following:
* `replace` The block will replace any block that is already existing.
* `keep` The block will only be placed if there is no block present in its location.
* `destroy` The old block will be destroyed, if any, and its item(s) will be dropped.

An example is shown here which will replace the block under the player with a diamond block, destroying the previous block if any.
```
select @s
place diamond_block ~ ~-1 ~ 0 destroy
```

## Fill
Fill works similarly to place, but it allows you to specify an entire region of blocks to apply.
```
fill <block> <x1> <y1> <z1> <x2> <y2> <z2> [data] [fillMode]
```
Notice that fillMode is different from destroyMode. The available options include:
* `replace` The blocks will replace any other blocks that already exist.
* `keep` A block will only be placed if there is no block present in its location.
* `destroy` The old blocks will be destroyed, if any, and their item(s) will be dropped.
* `outline` Inherits from replace, but only places blocks on the faces of the selected area.
* `hollow` Inherits from outline, but also replaces all the inside blocks with air

Here's an example showing the filling of a 5x5 platform of glass under the player.
```
select @s
fill glass ~-2 ~-1 ~-2 ~2 ~-1 ~2
```
