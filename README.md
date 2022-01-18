# MCCompiled - [SOURCE CODE HERE](https://github.com/7UKECREAT0R/MCCompiledSource)
Programming language which is "compiled" down to a Minecraft Bedrock Edition .mcfunction file.

## How do I use this?
You can download and compile the source code or download the latest pre-compiled binary from the Releases section. The application is interfaced with through the command line. The basic syntax is `mc-compiled.exe <filename>`. For extra information, run `mc-compiled.exe` on its own.

## Tutorials on the language itself?
Check out the Tutorials folder for a deep dive into the langauge and all of its features.

## Why was this made?
Because developing things in Minecraft commands is hard, and upon taking on a producer position at Lifeboat I realized I would be writing a lot of these. MCCompiled is meant to heavily reduce the overhead in writing code for minecraft by standing as a middleman. It has built in intrinsics and tokens which compile to be dozens of times longer.
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
I made MCCompiled to standardize the commands of Minecraft to look and feel more like a programming language. There's support for things like variables, different data types, structs, if statements, loops, and tons more. It also contains many sub-features which do specialized stuff like letting you give players enchanted/named items!

## What is definitions.def?
The definitions file is a massive collection of constants which are specific to the latest Minecraft version. You can use any of them in the language at any time, both making code extremely readable, and making version transition much easier. Need the ID to red wool? No need to look it up, just type \[wool: RED\]! And if the ID changes in some scuffed Minecraft release, then it will automatically change with the next update!

## Is Java Edition support coming?
This language is based around Minecraft Bedrock Edition (Windows 10, Xbox, Pocket), however I am considering Java Edition support in the future if the language picks up off the ground and enough requests are made for it. I also want to complete and phase out any bugs in the language before making the decision to port over to Java Edition. The main thing here is that the Bedrock Edition command system is much more limited than Java edition's is, meaning that ports would have to be seriously restructured and may not be the most efficient possible.

## Long Term Support?
I have no intention to stop updating the project as Bedrock Edition expands as of now. Maintaining shouldn't be extremely difficult.
