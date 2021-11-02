# Things I Want to do in The Future
MCCompiled has an ever growing awesome feature-set but there's a lot of things I want to implement
in the future which I think will spruce up your projects even more.

## Mapmaking
MCCompiled is aimed more at behavior pack and server development than mapmaking, since the
programming is built around having the same behavior executed every time. This isn't true
in maps where there's many scripted events and ever-changing mechanics.
Here's a couple of my proposals for making this stuff work in the future:

### Timelines
Making a timeline system could ultimately help with complex cutscene development or timed
levels/events which have many working parts. The language would generate all the timing code
and functions and you'd just have to sit back and let it run. You could think of timelines
as functions which run asynchronously over time and have extended asynchronous features.
> Timeline Proposal
```
timeline scene1 {
  print *Rumbling All Around*
  shake 2s
  
  // Asynchronously pause the execution.
  wait 2s
  
  print The Opening Collapses.
  fill stone 123 45 678 140 45 678
  sound everything_collapsing
  
  wait 3s
  
  print [color: cyan]Well... No going back now.
}

// To run the timeline ingame:
mc function timeline_scene1
// or in code:
play scene1
```

### Holograms
There's a lot of ways we could do floating text but I'm thinking the best way is to have some sort of
named custom entity which cannot be interacted with. We also have the NBT structure file generator
which could probably be used to make an invulnerable and invisible armor stand. We'll see in the future.
The idea would be to be able to define your holograms in a file and then they would be checked and placed
accordingly depending on if they exist already or not.
> Hologram Proposal
```
hologram {
  position 120 60 120
  lines {
    [color: RED]Welcome to the server!
    Make sure to check out our rules board on the left.
    And then visit the PvP zone on the right!
  }
}
```

## Language Events
Besides mapmaking, there's also a certain demand for having MCCompiled do polling work or even
behavior-pack based work to get events in your code. I think this could be done as modifiers on
functions, but since functions need to have names this would sort of cause confusion and
inconvenience. The solution then would just be to have events have their own definition keyword.
These would probably also have a layer of security around them to prevent them from being called
if an event *didn't* happen.
> Eventual Functions
```
event drop("Clear Inventory") {
  giveClearInventoryItem()
  clear
}
```
```
event playerdeath {
  deaths += 1
  print @s just died lol!
}
```

## Arrays
I want to implement fixed size arrays eventually that support multiple dimensions and even structs.
The big issue with this approach is that to have scoreboard-based indexing, there would need to be
a manual check for every single possible access of the array, which with a massive array could be
a lot of checks. And the problem isn't inherently with speed. It's that there's a limit to how many
commands can be executed in a tick. Once we run out of those, it's game over for the entire project
that a person is working on.
> Arrays Proposal
```
define numbers[100]

numbers[4] = 123
numbers[50] = 2
```

## Teleporting To Scoreboards
[todo]

## Trigonometry
[todo]
