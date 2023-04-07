![banner-meta](https://user-images.githubusercontent.com/43343249/228995662-70182739-5a3d-4b16-b6d2-086570bdd51a.png)

# [Download Installer](https://github.com/7UKECREAT0R/MCCompiled/raw/main/mc-compiled-installer.zip)
[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/W7W6JMNO1)<br />
[`📜 Source Code`](https://github.com/7UKECREAT0R/MCCompiledSource) | view the source code!<br />
[`📦 Releases`](https://github.com/7UKECREAT0R/MCCompiled/releases) | all of the raw pre-compiled binaries of the software. consider using the [installer](https://github.com/7UKECREAT0R/MCCompiled/raw/main/mc-compiled-installer.zip)<br />
[`🌐 Wiki`](https://github.com/7UKECREAT0R/MCCompiled/wiki) | learn about the language and how to use it.<br />
[`🗣️ Discord`](https://discord.gg/Jd4UCueKA8) | share ideas, show off work, and report bugs!<br />
[`🖥️ IDE`](https://7ukecreat0r.github.io/mccompiled/editor.html) | editor with keyword info, error detection, and compilation.<br />

# About
MCCompiled is an open source programming lanaguge designed for anyone and everyone who writes Minecraft commands. Its core mechanic is compiling down to a behavior pack based on a context-aware compiler. There's a constantly expanding, monolithic, widely spanning feature-set that is completely open source and free for anyone to use for any purpose! ❤

# Features
Changing up your workflow is hard. Take a look at the benefits of switching to MCCompiled and see if you're ready to take the plunge!:

### Preprocessor
It offers a full dynamic preprocessor with full support for coordinates, selectors, ranges, and even JSON files! The preprocessor's goal is to minimize repeated code by giving access to compile-time loops, conditionals, macros, constants, and anything else you can think of. Macros allow parameterized sets of commands to be pasted anywhere you want, and loops allow the adding of many commands at once that use slightly different arguments. If you've ever found yourself copy-pasting or changing many commands before, then the preprocessor is the solution. The preprocessor also offers parsing, traversing, and processing data from JSON files so you can data-drive all of your code!
```ts
$var hubLocation 4 102 -54

$json "server.json" serverInfo
$var lines $serverInfo["lines"]

function gotoHub {
    tp @s $hubLocation
}

function welcome {
    $iterate lines line
        print $line
}
```

### Raw-Text
Built in resolvers will automatically construct raw-text out of strings similarly to how string interpolation works in mainstream languages. Inserting variables and selectors is as easy as wrapping them in {brackets} inside the string. Want to insert the name of the player? Hey what's up {@s}? What about a variable value? {value} and you're done. Variables also have smart expansion, so things like booleans (True/False) and time displays just work like you would expect; no catches.
```ts
define int totalPoints
define bool isGameRunning
define time timeAlive

function reset {
    totalPoints = 0
    isGameRunning = true
    timeAlive = 0s
}

$var _timeformat "mm:ss"

function displayStats {
    if isGameRunning
        actionbar "SCORE: {totalPoints} | TIME: {timeAlive}"
    else
        actionbar "<PAUSED>"
}
```

### Logic
If-statements allow you to write and branch logic in a very traditional way that is both easy to read, and optimized. MCCompiled automatically generates subfunctions for blocks of code and supports both merging and inverting comparisons. The goal is to make it feel as close to a traditional language as possible while minimizing the amount of code written.
```ts
if any @e[type=cow] {
    print "Found a cow in the world!"
    print "Exterminating..."

    execute as @e[type=cow] at @s {
        say "NOOO!"
        kill
    }
}
else {
    print "No cows found... yet."
}
```

### Variables
You can define variables with a multitude of unique types, all of which have custom ways of displaying to raw-text and being represented under the hood. Variables have their own fixed-point decimal implementation and additionally support booleans and time representations. Variables support *unlimited* operations per line (with PEMDAS conformity) and automatically manage and release temporary scoreboard values.
```ts
define decimal 2 baseSpeed = 5.50

define decimal 2 multiplier
define decimal 2 speed

function updateSpeed {
    speed = baseSpeed * multiplier
}
function setMultiplier decimal 2 num {
    multiplier = num
    updateSpeed()
}

function showSpeed {
    actionbar "[color: yellow]Speed: {speed}"
}

// increase speed as time goes on
setMultiplier(0.00)

function tick {
    multiplier += 0.01
    updateSpeed()
}
```

### Functions
Functions allow the creating of extra function files, but with a catch; they actually work like functions. Functions have input parameters and return values implemented at compile time, unlocking 1000x power with the least amount of code \[citation needed\].
```ts
function abs int number {
    if number < 0
        number *= -1
    return number
}

print "{abs(-4)}"
print "{abs(-100)}"
print "{abs(2)}"
print "{abs(927)}"
print "{abs(-1)}"
```

### MCStructure Generation
Make use of the custom NBT implementation and use some of the special new commands that extend Minecraft's systems by generating structures and using their load parameters. You can /give named and enchanted items as well as randomly scatter blocks throughout an area, similarly to fill. More of these are to come.
```ts
give @s diamond_sword
    name: "[color: purple]Super Sword"
    lore: "The G.S.O.A.T (greatest sword of all time)"
    enchant: sharpness 6
    enchant: unbreaking 3
    enchant: looting 2
    enchant: fire_aspect 1

$var minesA 400 10 400
$var minesB 450 60 450

function resetMines {
    fill "stone" $minesA $minesB
    scatter "diamond_ore" 30 $minesA $minesB
    globalprint "The mines have been reset!"
}
```

### Entity Generation
Enable built in extended language features that utilize fully custom entity generation. Create and manage dummy entities, spawn explosions, and more to come soon!
```ts
feature exploders

define bool alive

function explodeAllPlayers {
    for @a {
        if alive {
            explode ~ ~ ~ 4 0 false false
        }
    }
}
```

### IDE
Use MCCompiled's completely web-based IDE to build, error check, and autocomplete your way through your toughest projects. Save and load files natively, along with keyword information and a big "COMPILE" button to immediately put your results into Minecraft's development packs directory. [Try it now!](https://7ukecreat0r.github.io/mccompiled/editor.html)

> Note: The IDE's features are limited without the MCCompiled language server running on your system.

# Sold?
Grab the [installer](https://github.com/7UKECREAT0R/MCCompiled/raw/main/mc-compiled-installer.zip) to automatically download, install, and update to the latest version. MCCompiled is completely free and will always stay that way. Want to install manually? Head to the [releases](https://github.com/7UKECREAT0R/MCCompiled/releases) page!
