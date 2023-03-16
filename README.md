![logo-banner](https://user-images.githubusercontent.com/43343249/156271242-48851b88-915f-4229-8b60-0823041594b9.png)
A production-ready feature-rich compiler which compiles to Minecraft Bedrock Edition commands. Outputs as a behavior/resource pack with extended support for mcstructures and entities. **1.1 is soon to release.**


# Useful Links
[`📜 Source Code`](https://github.com/7UKECREAT0R/MCCompiledSource) | view the source code!<br />
[`🌐 Wiki`](https://github.com/7UKECREAT0R/MCCompiled/wiki) | learn about the language and how to use it.<br />
[`🗣️ Discord`](https://discord.gg/Jd4UCueKA8) | share ideas, show off work, and report bugs!<br />
[`🖥️ IDE`](https://7ukecreat0r.github.io/mccompiled/editor.html) | editor with keyword info, error detection, and compilation.<br />

# **IMPORTANT:** Notice on the 1.1 Update
I am still actively working on the 1.1 update, and devlog entries are steady coming out in the Discord. There are a lot of breaking changes incoming, so you might consider holding off learning how to use MCCompiled until then. I want to make the best product humanly possible with the time I have, and the improvements 1.1 will bring are insurmountable!

# About
MCCompiled is an open source programming lanaguge designed for anyone and everyone who writes Minecraft commands. Its core mechanic is compiling down to a behavior pack based on a context-aware compiler. There's a constantly expanding, monolithic, widely spanning feature-set that is completely open source and free for anyone to use for any purpose! ❤

# Features
Changing up your workflow is hard. Take a look at the benefits of switching to MCCompiled and see if you're ready to take the plunge!:

### Preprocessor
It offers a full dynamic preprocessor with full support for coordinates, selectors, ranges, and even JSON files! The preprocessor's goal is to minimize repeated code by giving access to compile-time loops, conditionals, macros, constants, and anything else you can think of. Macros allow parameterized sets of commands to be pasted anywhere you want, and loops allow the adding of many commands at once that use slightly different arguments. If you've ever found yourself copy-pasting or changing many commands before, then the preprocessor is the solution. The preprocessor also offers parsing, traversing, and processing data from JSON files so you can data-drive all of your code!

### Raw-Text
Built in resolvers will automatically construct raw-text out of strings similarly to how string interpolation works in mainstream languages. Inserting variables and selectors is as easy as wrapping them in {brackets} inside the string. Want to insert the name of the player? Hey what's up {@s}? What about a variable value? {value} and you're done. Variables also have smart expansion, so things like booleans (True/False) and time displays just work like you would expect; no catches.

### Logic
If-statements allow you to write and branch logic in a very traditional way that is both easy to read, and optimized. MCCompiled automatically generates subfunctions for blocks of code and supports both merging and inverting comparisons. The goal is to make it feel as close to a traditional language as possible while minimizing the amount of code written.

### Variables
You can define variables with a multitude of unique types, all of which have custom ways of displaying to raw-text and being represented under the hood. Variables have their own fixed-point decimal implementation and additionally support booleans and time representations. Variables support *unlimited* operations per line (with PEMDAS conformity) and automatically manage and release temporary scoreboard values.

### Functions
Functions allow the creating of extra function files, but with a catch; they actually work like functions. Functions have input parameters and return values implemented at compile time, unlocking 1000x power with the least amount of code \[citation needed\].

### MCStructure Generation
Make use of the custom NBT implementation and use some of the special new commands that extend Minecraft's systems by generating structures and using their load parameters. You can /give named and enchanted items as well as randomly scatter blocks throughout an area, similarly to fill. More of these are to come.

### Definitions
MCCompiled is shipped with a [definitions.def](https://github.com/7UKECREAT0R/MCCompiledSource/blob/master/mc-compiled/definitions.def) file which is a massive library of organized aliases for inserting strings. One of my favorite parts of this file is that it has all text colors defined under normalized names. Rather than having to type `§6` you can just type `[color: gold]`. Give the file a look over to understand why it's so useful.

### IDE
Use MCCompiled's completely web-based IDE to build, error check, and autocomplete your way through your toughest projects. Save and load files natively, along with keyword information and a big "COMPILE" button to immediately put your results into Minecraft's development_x_packs directory. [Try it now!](https://7ukecreat0r.github.io/mccompiled/editor.html)

> Note: The IDE's features are limited without the MCCompiled language server running on your system.

# Sold?
Grab a pre-compiled copy over on the [releases page](https://github.com/7UKECREAT0R/MCCompiled/releases), or compile it yourself from [source](https://github.com/7UKECREAT0R/MCCompiledSource)! MCCompiled is completely free and will always stay that way.
