# Concepts
#### Comments
`// <text>` - Line comment. Must be at the start of the line and extends to the very end.<br />
`/* <text> */` - Multiline comment. Only ends when specified, not at the end of the line.

#### Code Block
Starts and ends with brackets, holding code inside:
```js
...
{
    // inside code block
}
```

---

# Types
Descriptions of the upcoming types that will be present in the different command arguments.
- `id` An identifier that either has meaning or doesn't. An identifier can be the name of anything defined in the language, and is usually context dependent.
- `int` Any integral number, like 5, 10, 5291, or -40. Use time suffixes to scale the integer accordingly, like with 4s -> 80.
- `string` A block of text on a single line, surrounded with either 'single quotes' or "double quotes."
- `bool` A value that can be either 'true' or 'false.'
- `selector` A Minecraft selector that targets a specific entity or set of entities. Example: `@e[type=cow]`
- `value` The name of a runtime value that was defined using the `define` command.
- `coord` A Minecraft coordinate value that can optionally be both relative and facing offset, like ~10, 40, or ^5.
- `enum` Usually a specific keyword in a subset of possible keywords. This type is entirely context dependent.
- `range` A Minecraft number that specifies a range of integers (inclusive). Omitting a number from one side makes the number unbounded. 4.. means four and up. 1..5 means one through five.
- `json` A JSON object achieved by $dereferencing a preprocessor variable holding one.

---

# Commands
All of the commands in the language (version 1.11). The command ID is the first word of the line, followed by the arguments it gives. Each command parameter includes the type it's allowed to be and its name. A required parameter is surrounded in \<angle brackets\>, and an optional parameter is surrounded in [square brackets].

---
## Category: preprocessor
Commands that allow the user to do things at compile time. Preprocessor commands generally start with a $ and are highlighted differently than regular commands.


#### Add to Preprocessor Variable `$add`
Adds two preprocessor variables/values together, changing only the first one. A += B
- `$add` `<id: variable>` `<object: values>`

#### Decrement Preprocessor Variable `$dec`
Decrements the given preprocessor variable by one. If multiple values are held, they are all decremented.
- `$dec` `<id: variable>`

#### Define/Call Macro `$macro`
If a code-block follows this call, it is treated as a definition. Arguments are passed in as preprocessor variables. If no code-block follows this call, it will attempt to run the macro with any inputs parameters copied to their respective preprocessor variables.
- `$macro` `<id: name>`

#### Divide Preprocessor Variable `$div`
Divides two preprocessor variables/values from each other, changing only the first one. A /= B
- `$div` `<id: variable>` `<object: values>`

#### Exponentiate Preprocessor Variable `$pow`
Exponentiates two preprocessor variables/values with each other, changing only the first one. A = A^B
- `$pow` `<id: variable>` `<object: values>`

#### Include File `$include`
Places the contents of the given file in replacement for this statement. Not intended for production use yet.
- `$include` `<string: file>`

#### Increment Preprocessor Variable `$inc`
Increments the given preprocessor variable by one. If multiple values are held, they are all incremented.
- `$inc` `<id: variable>`

#### Iterate Preprocessor Array `$iterate`
Runs the following statement/code-block once for each value in the given preprocessor variable. The current iteration is held in the preprocessor variable given. If the target is a JSON array, the elements will be iterated upon.
- `$iterate` `<id: variable>` `<id: current>`

#### Log to Console `$log`
Sends a message to stdout with a line terminator at the end.
- `$log` `<*: message>`

#### Modulo Preprocessor Variable `$mod`
Divides two preprocessor variables/values from each other, setting only the first one to the remainder of the operation. A %= B
- `$mod` `<id: variable>` `<object: values>`

#### Multiply with Preprocessor Variable `$mul`
Multiplies two preprocessor variables/values together, changing only the first one. A *= B
- `$mul` `<id: variable>` `<object: values>`

#### Preprocessor Array Mean `$mean`
Averages all values in the given preprocessor variable together into one value and stores it in a result variable.
- `$mean` `<id: result>` `[id: variable]`

#### Preprocessor Array Median `$median`
Gets the middle value/average of the two middle values and stores it in a result variable.
- `$median` `<id: result>` `[id: variable]`

#### Preprocessor Array Sort `$sort`
Sorts the order of the values in the given preprocessor variable either 'ascending' or 'descending'. Values must be comparable.
- `$sort` `<id: ascending or descending>` `<id: variable>`

#### Preprocessor Array Sum `$sum`
Adds all values in the given preprocessor variable together into one value and stores it in a result variable.
- `$sum` `<id: result>` `[id: variable]`

#### Preprocessor Else `$else`
Directly inverts the result of the last $if call at this level in scope.

#### Preprocessor If `$if`
Compares a preprocessor variable and another value/variable. If the source variable contains multiple values, they all must match the condition.
- `$if` `<id: a>` `<compare: comparison>` `<object: b>`

#### Preprocessor Length `$len`
If a preprocessor variable ID is given, the number of elements it holds is gotten. If a JSON array is given, the number of elements is gotten. If a string is given, the number of characters is gotten.
- `$len` `<id: result>` `<id: variable>`
- `$len` `<id: result>` `<json: array>`
- `$len` `<id: result>` `<string: text>`

#### Preprocessor Load JSON Value `$json`
Load a JSON file (if not previously loaded) and retrieve a value from it, storing said value in a preprocessor variable.
- `$json` `<string: file name>` `<id: result>` `[string: path]`
- `$json` `<json: existing json>` `<id: result>` `[string: path]`

#### Preprocessor Repeat `$repeat`
Repeats the following statement/code-block a number of times. If a variable identifier is given, that variable will be set to the index of the current iteration. 0, 1, 2, etc.
- `$repeat` `<int: amount>` `[id: indicator]`
- `$repeat` `<range: amount>` `[id: indicator]`

#### Preprocessor Reverse `$reverse`
Reverses the order of the values in the given preprocessor variable.
- `$reverse` `<id: variable>`

#### Preprocessor String Friendly Name `$strfriendly`
Convert the given preprocessor variable value(s) to a string in 'Title Case'.
- `$strfriendly` `<id: result>` `[id: variable]`

#### Preprocessor String Lowercase `$strlower`
Convert the given preprocessor variable value(s) to a string in 'lowercase'.
- `$strlower` `<id: result>` `[id: variable]`

#### Preprocessor String Uppercase `$strupper`
Convert the given preprocessor variable value(s) to a string in 'UPPERCASE'.
- `$strupper` `<id: result>` `[id: variable]`

#### Set Preprocessor Variable `$var`
Sets a preprocessor variable to the value(s) provided.
- `$var` `<id: variable>` `<object: values>`

#### Subtract from Preprocessor Variable `$sub`
Subtracts two preprocessor variables/values from each other, changing only the first one. A -= B
- `$sub` `<id: variable>` `<object: values>`

#### Swap Preprocessor Variables `$swap`
Swaps the values of two preprocessor variables
- `$swap` `<id: a>` `<id: b>`

---
## Category: text
Commands which display text to players through FStrings.


#### Print to All Players `globalprint`
Prints a chat message to all players in the game. Supports format strings.
- `globalprint` `<string: text>`

#### Print to Player `print`
Prints a chat message to the executing player, or to the given one if specified. Supports format strings.
- `print` `<selector: entity>` `<string: text>`
- `print` `<string: text>`

#### Say `say`
Send a plain-text message as the executing entity. Plain selectors can be used, but not variables.
- `say` `<string: message>`

#### Show Actionbar `actionbar`
Displays an actionbar on the screen of the executing player, or to the given one if specified. Supports format strings.
- `actionbar` `<selector: target>` `<string: text>`
- `actionbar` `<string: text>`

#### Show Actionbar to All Players `globalactionbar`
Displays an actionbar on the screen of all players in the game. Can also be used to set the timings of the actionbar. Supports format strings.
- `globalactionbar` `<id: times>` `<int: fade in>` `<int: stay>` `<int: fade out>`
- `globalactionbar` `<string: text>`

#### Show Title `title`
Displays a title on the screen of the executing player, or to the given one if specified. Can also be used to set the timings of the title. Supports format strings.
- `title` `<selector: target>` `<id: times>` `<int: fade in>` `<int: stay>` `<int: fade out>`
- `title` `<selector: target>` `<id: subtitle>` `<string: text>`
- `title` `<selector: target>` `<string: text>`
- `title` `<id: times>` `<int: fade in>` `<int: stay>` `<int: fade out>`
- `title` `<id: subtitle>` `<string: text>`
- `title` `<string: text>`

#### Show Title to All Players `globaltitle`
Displays a title on the screen of all players in the game. Can also be used to set the timings of the title. Supports format strings.
- `globaltitle` `<id: times>` `<int: fade in>` `<int: stay>` `<int: fade out>`
- `globaltitle` `<id: subtitle>` `<string: text>`
- `globaltitle` `<string: text>`

---
## Category: entities
Commands which manipulate, spawn, and transform entities in various ways.


#### Damage Entity `damage`
Damages the given entities with a certain cause, optionally coming from a position or blaming an entity by a selector, "name:type" of entity, or name of another managed entity (e.g., dummy entities).
- `damage` `<selector: target>` `<int: amount>` `[enum: damage cause]`
- `damage` `<selector: target>` `<int: amount>` `[enum: damage cause]` `<selector: blame>`
- `damage` `<selector: target>` `<int: amount>` `[enum: damage cause]` `<string: blame>`
- `damage` `<selector: target>` `<int: amount>` `[enum: damage cause]` `<coord: from x>` `<coord: from y>` `<coord:  from z>`

#### Face Towards... `face`
Faces the given entities towards a specific position, selector, "name:type" of entity, or name of another managed entity (e.g., dummy entities).
- `face` `<selector: source>` `<coord: x>` `<coord: y>` `<coord: z>`
- `face` `<selector: source>` `<selector: other>`
- `face` `<selector: source>` `<string: other>`

#### Give Effect to Entity `effect`
Gives the given entities a potion effect. Time and amplifier can be specified to further customize the potion effect. All potion effects can be cleared using 'effect \<selector\> clear'.
- `effect` `<selector: target>` `<id: clear>`
- `effect` `<selector: target>` `<enum: effect>` `[int: seconds]` `[int: amplifier]` `[bool: hide]`

#### Kill Entity `kill`
Kills the given entities, causing the death animation, sounds, and particles to appear.
- `kill` `[selector: target]`

#### Move Entity `move`
Moves the specified entity in a direction (LEFT, RIGHT, UP, DOWN, FORWARD, BACKWARD) for a certain amount. Simpler alternative for teleporting using caret offsets.
- `move` `<selector: source>` `<id: direction>` `<number: amount>` `[bool: check for blocks]`

#### Remove Entity `remove`
Teleports the given entities deep into the void, causing a silent death.
- `remove` `[selector: target]`

#### Rotate Entity `rotate`
Rotates the given entities a certain number of degrees horizontally and vertically from their current rotation.
- `rotate` `<selector: source>` `<int: y>` `<int: x>`

#### Tag Entity `tag`
Adds, removes, or singles out a tag on the given entities.
- `tag` `<selector: target>` `<id: mode>` `<string: name>`

#### Teleport Entity `tp`
Teleports the given entities to a specific position, selector, "name:type" of entity, or name of another managed entity (e.g., dummy entities).
- `tp` `<selector: source>` `<coord: x>` `<coord: y>` `<coord: z>`
- `tp` `<selector: source>` `<selector: other>`
- `tp` `<selector: source>` `<string: other>`

---
## Category: blocks
Commands which interact with the Minecraft world's blocks.


#### Fill Region `fill`
Fills blocks in a specific region, optionally using a replace mode.
- `fill` `<id: fill mode>` `<string: block>` `<coord: x1>` `<coord: y1>` `<coord: z1>` `<coord: x2>` `<coord: y2>` `<coord: z2>`
- `fill` `<string: block>` `<coord: x1>` `<coord: y1>` `<coord: z1>` `<coord: x2>` `<coord: y2>` `<coord: z2>`

#### Replace in Region `replace`
Replaces all source blocks with a result block in a specific region.
- `replace` `<string: source block>` `[int: data]` `<coord: x1>` `<coord: y1>` `<coord: z1>` `<coord: x2>` `<coord: y2>` `<coord: z2>` `<string: result block>` `[int: data]`

#### Scatter Blocks in Region `scatter`
Randomly scatters blocks throughout a region with a certain percentage.
- `scatter` `<string: block>` `<int: percent>` `<coord: x1>` `<coord: y1>` `<coord: z1>` `<coord: x2>` `<coord: y2>` `<coord: z2>` `[string: seed]`

#### Set Block `setblock`
Sets the block at a specific position, optionally using a replace mode.
- `setblock` `<id: replace mode>` `<string: block>` `<coord: x>` `<coord: y>` `<coord: z>` `[int: data]`
- `setblock` `<string: block>` `<coord: x>` `<coord: y>` `<coord: z>` `[int: data]`

---
## Category: items
Commands relating to entity/player items and inventories.


#### Clear Entity `clear`
Clears the inventories of all given entities, optionally searching for a specific item and limiting the number of items to remove.
- `clear` `[selector: target]` `[string: item]` `[int: data]` `[int: max count]`

#### Give Item `give`
Gives item(s) to the given entity. Runs either a 'give' or 'structure load' depending on requirements. Utilizes builder fields.
- `give` `<selector: entity>` `<string: item>` `[int: amount]` `[int: data]`

---
## Category: cosmetic
Commands that add visual and auditory appeal to the user's code.


#### Play Sound `playsound`
Plays a sound effect in the world, optionally with volume, pitch, and filtering specific players.
- `playsound` `<string: sound>` `[selector: filter]` `[coord: x]` `[coord: y]` `[coord: z]` `[number: volume]` `[number: pitch]` `[number: minimum volume]`

#### Spawn Particle `particle`
Spawns a particle effect in the world.
- `particle` `<string: effect>` `[coord: x]` `[coord: y]` `[coord: z]`

---
## Category: values
Commands tied directly to values. Values can be used in if-statements, FStrings, and many other places.


#### Define Variable `define`
Defines a variable with a name and type, defaulting to int if unspecified. Can be assigned a value directly after defining.
- `define` `<*: args>`

#### Initialize Variable `init`
Ensures the given entities have a value for the given variable, defaulting to 0 if not. This ensures the given entities function as intended all the time.
- `init` `<selector: entity>` `<value: value>`

---
## Category: logic
Commands which handle logic and code flow. The butter for all the bread (code).


#### Define Function `function`
Must be followed by a code-block. Parameters must have types, optionally having default values. Function calls look like this: functionName(parameters)
- `function` `<*: args>`

#### Else Statement `else`
Inverts the comparison given by the previous if-statement at this scope level.

#### Execute `execute`
Begins a vanilla minecraft 1.19.70+ execute chain. Can be followed by a statement or code-block, but does not explicitly support the 'run' subcommand.
- `execute` `<id: subcommand>` `<*: subcommand arguments>`

#### For Each Entity `for`
Runs the following statement or code-block once over every entity that matches a selector at its current position. Functionally equivalent to 'execute as \<selector\> at @s run \<code\>'
- `for` `<selector: entities>`

#### Halt Execution `halt`
Ends the execution of the code entirely by hitting the function command limit.

#### If Statement `if`
Allows comparison of variables, along with a huge collection of other criteria. Can be chained together by the keyword 'and' and inverted by the keyword 'not'. Only runs the proceeding statement/code-block for entities where the condition returns true.
- `if` `<value: boolean>`
- `if` `<value: score>` `<compare: comparison>` `<value: other>`
- `if` `<selector: check for match>`
- `if` `<id: count>` `<selector: entities>` `<compare: comparison>` `<value: amount>`
- `if` `<id: count>` `<selector: entities>` `<compare: comparison>` `<number: amount>`
- `if` `<id: any>` `<selector: filter>`
- `if` `<id: block>` `<coord: x>` `<coord: y>` `<coord: z>` `<string: block>` `[int: data]`

#### Set Return Value `return`
Set the value that will be returned from this function when it ends. The caller can use this value however it wishes.
- `return` `<value: variable>`
- `return` `<any: return value>`

---
## Category: features
Commands related to the optionally enable-able features in the language.


#### Create Explosion `explode`
Create an explosion at a specific position with optional positioning, power, delay, fire, and block breaking settings. Requires feature 'EXPLODERS' to be enabled.
- `explode` `[coord: x]` `[coord: y]` `[coord: z]` `[int: power]` `[int: delay]` `[id: causes fire]` `[id: breaks blocks]`

#### Create/Remove Dummy Entity `dummy`
Create a dummy entity, remove the selected ones, or manage the classes on the selected ones. Requires feature 'DUMMIES' to be enabled.
- `dummy` `<id: create>` `<string: name>` `[string: class]` `[coord: x]` `[coord: y]` `[coord: x]`
- `dummy` `<id: remove>` `<string: name>` `[string: class]`
- `dummy` `<id: class>` `<id: remove>`
- `dummy` `<id: class>` `<string: class>`

#### Enable Feature `feature`
Enables a feature to be used for this project, generating any of the necessary files.
- `feature` `<id: feature name>`

---
## Category: other
The other commands that don't have a good designation.


#### Minecraft Command `mc`
Places a plain command in the output file, used for when the language lacks a certain feature.
- `mc` `<string: command>`

---
# Features
Extended language features can be enabled through the `feature` `<id: feature name>` command and enable functionality into your project. The reason these need to be manually enabled is because they produce extra files which may be unexpected for users not intending to use these features.

#### `feature` `dummies`
Feature: Create dummy entity behavior/resource files and allow them to be spawned in the world.

#### `feature` `gametest`
Feature: Gametest Integration (not implemented)

#### `feature` `exploders`
Feature: Create exploder entity behavior/resource files and allow them to be created through the 'explode' command.

#### `feature` `uninstall`
Feature: Create an function named 'uninstall' to remove all tags/scoreboards/etc., made by this project.

