## The aim of this section is to go over the differences in Minecraft Command coding and programming in MCCompiled.

## Scoreboard
If you're at all familiar with scoreboards, they aren't present in MCCompiled. There is a command named `value` and it's what `if` statements default to. Values *are* scoreboard values under the hood, but the syntax is simplified and the values can be defined and initialized wherever in your code.
```
select @s
value money add 1
```
Compiles to:
```
scoreboard players add @s money 1
```

## Statements
Every statement made in MCCompiled is a top level statement, as in, they don't require stacking executes or other things like that. If you place a statement inside an `if` block, the logic will be done for you by the compiler.

## Selectors
When setting selectors via the `select` statement, you should only include the base of it, such as @p, @s, etc... The compiler will do the rest of the logic and structuring for you. This is an important distinction to make when working with MCC; The compiler attempts to make commands much more lenient and "automatic" per say.
