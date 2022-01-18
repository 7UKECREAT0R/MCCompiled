# MCCompiled - [SOURCE CODE HERE](https://github.com/7UKECREAT0R/MCCompiledSource)
Programming language which is "compiled" down to a Minecraft Bedrock Edition .mcfunction file.

## How do I use this?
unreleased as of now

## Tutorials on the language itself?
check out the Tutorials folder on the main GitHub for a deep dive into the langauge and all of its features.

## Why was this made?
Because developing things in Minecraft commands is hard, and upon taking on a producer position at Lifeboat I realized I would be writing a lot of these. MCCompiled is meant to heavily reduce the overhead in writing code for Minecraft. It has built in intrinsics and tokens which compile to be dozens of times longer than the original code.
```
define "coins"
coins += 10 * 3
```
Compiles to:
```
scoreboard objectives add "MCC_TEMP0" dummy
scoreboard objectives add "MCC_TEMP1" dummy
scoreboard objectives add "coins" dummy
scoreboard players set @a "MCC_TEMP0" 10
scoreboard players set @a "MCC_TEMP1" 3
scoreboard players operation * "MCC_TEMP0" *= @a "MCC_TEMP1"
scoreboard players operation * "coins" += @a "MCC_TEMP0"
```

## What does it have?
Variables, custom data structures, decimal numbers, if statements, loops, and a complete preprocessor which allows easy duplication of commands.

## What is definitions.def?
The definitions file is a massive collection of constants which are specific to the latest Minecraft version. You can use any of them in the language at any time, both making code extremely readable, and making version transition much easier. Need the ID to red wool? No need to look it up, just type \[wool: RED\]! And if the ID changes in some scuffed Minecraft release, then it will automatically change with the next update!

## Is Java Edition support coming?
There will not be any java edition support in the future, since writing functions for it is a little more bearable and the generated code would be extremely inefficient for this reason.

## Long Term Support?
As long as I remain in a position where this is advantagous to my work, MCCompiled is staying. Even after there may still be some motivation to do so.
