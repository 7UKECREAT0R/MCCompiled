# MCCompiled
Programming language which is "compiled" down to a Minecraft Bedrock Edition .mcfunction file.

## How do I use this?
You can download and compile the source code or download the latest pre-compiled binary from the Releases section. The application is interfaced with through the command line. The basic syntax is `mc-compiled.exe <filename>`. For extra information, run `mc-compiled.exe` on its own.

## Tutorials on the language itself?
Check out the Tutorials folder for a deep dive into the langauge and all of its features.

## Why was this made?
Development in Minecraft has always consisted of massive, lengthy, and hard to read command block chains or mcfunction files. While it's been put up with, it doesn't necessarily have to be that way. For beginners, too, Minecraft development can be particularly hard to grasp. I made MCCompiled to sort-of close the gap between Minecraft commands and ordinary programming. It's not perfect, but it's loads easier.

The compiler also has a wide set of preprocessor commands which allow you to easily generate hundreds/thousands of repeated commands no problem, along with the ability to easily make changes later. It supports macros and the creation of multiple files in a single compilation.

## Is development faster?
Absolutely. Even without preprocessor commands, both the conceptual nature of the language and the way it handles everything under the hood speeds up development massively. You can more easily look through code to find bugs too.

## What is definitions.def?
The definitions file is a massive collection of constants which are specific to the latest Minecraft version. You can use any of them in the language at any time, both making code extremely readable, but also making version transition much easier. Need the ID to red wool? No need to look it up, just type \[wool: RED\]!

## Is Java Edition support coming?
This language is based around Minecraft Bedrock Edition (Windows 10, Xbox, Pocket), however I am considering Java Edition support in the future if the language picks up off the ground and enough requests are made for it. I also want to complete and phase out any bugs in the language before making the decision to port over to Java Edition. The main thing here is that the Bedrock Edition command system is much more limited than Java edition's is, meaning that ports would have to be seriously restructured and may not be the most efficient possible.

## Long Term Support?
I have no intention to stop updating the project as Bedrock Edition expands as of now. Maintaining shouldn't be extremely difficult.
