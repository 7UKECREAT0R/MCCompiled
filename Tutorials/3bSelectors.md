# Selectors
While originally you might use a selector in your commands, they work a little differently here. Let's start by selecting the executor of the command, known as `@s`.
```
select @s
```
Now, all of my subsequent commands will be using this as their selector. Here are the available selectors and what they select:
* `@a` All Players
* `@e` All Entities
* `@p` Nearest Player
* `@s` Self
<br />
For those which select multiple players/entities, the commands will be run individually on each of them.

## Uses
In the next section, we'll go over if-statements and how they can be used to implement basic logic. For now, let's combine selectors and values to make a money system. This code here will be part of a command that could be something like `/function work`!
```
define money
initialize money

select @s
money += 10

printp [color: GREEN]You just made $10!
```
So now, when someone runs the function they will be given 10 `money` and sent a message! Simple, right?
