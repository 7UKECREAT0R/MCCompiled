# Functions

Functions let you define other `mcfunction` that will be outputted, but they work same as any other function in a programming language!
Functions don't have return values, but they can have passed in arguments. After compilation, each function will show up as its own `mcfuntion` file.

## Defining
Here is a function which can be called when the player leaves a specified region. It then will send them a message, make them face (0, 0, 0), and teleport them forwards away from the border. This is an example of how a function can be used to make your projects easier and more organized. The code inside will also be outputted into `projectname-deny.mcfunction`!
```
function deny {
  printp [color: RED]You can't go there!
  face 0 0 0
  tp forwards 1
}
```
Here is a function which takes in an argument named 'color'. Note that these are always of integral type and are stored as values. This code generates a way to set a block of wool based off of a value by manually checking each possibility. 
```
function set_wool color {
  ppv check -1
  pprepeat [wool: BLACK] {
    ppinc check
    if color = check {
      place wool ~ ~ ~ check
    }
  }
}
```

## Calling
When you call a function through the language, anything you select will be reset once the function finishes.
Calling a function can be done two ways.

> Using the call keyword (clearer, more concise):
```
call <function> <args>
```

> Implied call (shorter, easier to read):
```
function(args)
```

It doesn't matter how you choose to call a function; both compile to exactly the same code!

## Modifiers
You can apply modifiers to your functions to make them behave in different ways.

### `_tick`
```
function _tick mytimer {
  select @a
  time += 1
}
```
This function will be run every tick, without needing repeating command blocks. Note the underscore is present to denote that this method is unstable and is known for executing your function before the world is loaded, which can lead to unexpected behavior or even crashing. Another note is that if the function is called again before its previous delay is up, it will simply reset the delay back and begin counting again, not executing the original call.

### `delay(ticks)`
```
function clearlag {
  print [color: BOLD]Clearing lag in 5 seconds...!
  clearlag_next()
}
function delay(100) clearlag_next {
  select @e
  if family monster {
    kill
  }
  if type item {
    kill
  }
}
```
This function will send a message, wait 5 seconds, then clear all items/monsters in the world.

### `namespace(value)`
```
function namespace(utility) goto_spawn {
  tp 34 100 34
}
```
This is more for advanced projects, but this function file will be placed into its own "utility" folder can can be called in-game via `/function utility/goto_spawn`.

### `private`
```
function private add_coins amount {
  coins += amount
}
```
Private functions have a thin layer of security over them to prevent players from executing them in-game, however other things can execute them fine.

### `harsh`
```
function harsh kick_nearest {
  select @a
  limit 1
  if not mode creative {
    kick "You have been kicked by an administrator."
  }
}
```
Harsh functions take private to the next level by kicking players who attempt to use them. It also takes extra precautionary measures to make sure someone can't tinker with the internal scoreboard values to get past the guard like they can with `private`.

### `long`
```
function long search
start.y = 0

pprep 255 y {
  pprep 500 z {
    pprep 500 x {
      define vector pos
      pos.x += x
      pos.y += y
      pos.z += z
      TODO
    }
  }
}
