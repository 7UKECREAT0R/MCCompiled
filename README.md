# MCCompiled
[source code](https://github.com/7UKECREAT0R/MCCompiledSource) - Programming language which is "compiled" down to a Minecraft Bedrock Edition behavior pack.<br />
[wiki](https://github.com/7UKECREAT0R/MCCompiled/wiki) - Learn about the language and how to use it.

# About
MCCompiled is an open source programming lanaguge designed for everyone who mods Minecraft. Its core mechanic is compiling down to a behavior pack based on a context-aware compiler. It differs from Minecraft Commands for a multitude of reasons, but the main reason is the efficiency of code. The compiler features a large set of options and an IDE-like mode which watches files and automatically recompiles when updated.

# Features
Okay, but what's so special about it? The language is similar to that of javascript, using blocks and different code styles to construct unique and difficult-to-write Minecraft commands with ease.

### Preprocessor
It offers a full dynamic preprocessor with full support for coordinates and selectors. The preprocessor's goal is to minimize repeated code by giving access to compile-time loops, conditionals, macros, constants, and anything else you can think of. Macros allow parameterized sets of commands to be pasted anywhere you want, and loops allow the adding of many commands at once that use slightly different arguments. If you've ever found yourself copy-pasting or changing many commands before, then the preprocessor is the solution.

### Raw-Text
Built in resolvers will automatically construct raw-text out of strings similarly to how string interpolation works in mainstream languages. Inserting variables and selectors is as easy as wrapping them in {brackets} inside the string. Want to insert the name of the player? Hey what's up {@s}? What about a variable value? {value} and you're done. Variables also have smart expansion, so things like booleans (True/False) and time displays are possible automatically.

### Selectors/Selection
Selection is a new concept introduced in MCCompiled to allow you to run commands under the same entity without having to re-type the selector. `select @a[lm=10]` would then make all proceeding commands be run under all players that have more than 10 levels. So that's different, but selectors... work pretty much the same. MCCompiled features a full selector parser to allow more advanced logic, and even the ability to merge selectors together. You can store selectors in preprocessor variables and re-use them anywhere in the code as well.

### Logic
If-statements now exist. They act as a compact and user friendly way to specify selectors and branch out logic. If-statements with more than one command inside are automatically compressed down into their own function file, so logic is extremely performant and well structured. This is possible with normal Minecraft commands, but it's tedious. The selector engine also allows else-statements. This theme of simple-but-powerful is present throughout the entire language.

### Variables
Variables are the smartest part of the language. You can define variables with a multitude of unique types, all of which have custom ways of displaying to raw-text and being represented under the hood. Variables have their own fixed-point decimal implementation and additionally support booleans or time representations. Still following? Variables allow multiple operations per statement and automatically manage temporary scoreboard values.

### Functions
Functions allow the creating of extra function files, but with a catch; they actually work like functions. Functions have input parameters and return values implemented at compile time, unlocking 1000x power with the least amount of code \[citation needed\].

### Structs
Ever wanted to have custom data structures? MCCompiled supports those too. You can define custom structure types and use them as variables, for whatever that might be used for. They also support being sent out to raw-text, so it's automatically awesome.

### MCStructure Generation
Make use of the custom NBT implementation and use some of the special new commands that extend Minecraft's systems by generating structures and using their load parameters. You can /give named and enchanted items as well as randomly scatter blocks throughout an area, similarly to fill. (more of these are to come)

### Definitions
MCCompiled is shipped with a [definitions.def](https://github.com/7UKECREAT0R/MCCompiledSource/blob/master/mc-compiled/definitions.def) file which is a massive library of organized aliases for inserting strings. One of my favorite parts of this file is that it has all text colors defined under normalized names. Rather than having to type `§6` you can just type `[color: gold]`. Give the file a look over to understand why it's so useful.

# Sold?
Grab a pre-compiled copy over on the [releases page](https://github.com/7UKECREAT0R/MCCompiled/releases), or compile it yourself from [source](https://github.com/7UKECREAT0R/MCCompiledSource)! MCCompiled is completely free and will always stay that way.
