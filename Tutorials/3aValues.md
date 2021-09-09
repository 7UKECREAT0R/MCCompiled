# Values
Values are a way to store and utilize player-specific variables. The `value` command has a lot of options so we'll get right into it. A value could be anything from a coins counter, timer, or any other numerical value you need. Values can also be global, meaning it's bound to the world rather than the selected player.

# Defining and Initializing
Before a value can be used, it must be defined. Defining a value can be done by simply using the `define` command.
```
define coins
```
By default, players will not have this value (even 0) so it may be a good idea to initialize it as well. This makes it so that every player has at least 0 of the value.
```
define coins
initialize coins
```

# Syntax
Now let's take a look at all of the different ways the value command can be used directly. Later, when learning about if-statements, these values will be able to be used. You can also place them in `print` and `printp` statements which will be gone over later as well.

> You can also use inline statements without the `value` keyword if you want!<br />Something like this: `coins add 10`. You can also use operators instead of words, like `add` -> `+=`, making `coins += 10`.

## value \<value> add \<integer/othervalue>
Add a value to this value. `+=` or `add`

## value \<value> sub \<integer/othervalue>
Subtract a value from this value. `-=` or `sub`

## value \<value> mul \<integer/othervalue>
Multiply this value with another value. `*=` or `mul`

## value \<value> div \<integer/othervalue>
Divide this value with another value. `/=` or `div`

## value \<value> mod \<integer/othervalue>
Set this value to the remainder of a `div` operation. `%=` or `mod`

## value \<value> = \<integer/othervalue>
Set this value. `set` or `=`

# Other Syntax
## value display \<location> \[value]
Set where this value is displayed. Not specifying a value will clear the selected location. Valid options for location are:
* `list` Visible on the pause screen next to each player.
* `sidebar` Visible on the right sidebar for all players.
* `belowName` Visible below the player's name in-game.
