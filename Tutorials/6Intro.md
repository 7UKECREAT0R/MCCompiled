# Descriptors
Now we're entering into the world of actually modding the game. You may have already noticed that MCCompiled outputs into a nicely formatted behavior pack, but it can do more than just generate functions!

## Descriptor Statements
These statements allow you to append information into your datapack and begin modifying the game like you've never seen it before. Descriptor statements have different syntax from the rest of MCCompiled, but it's not too difficult to understand. This entire section will be dedicated to going over the different kinds of descriptors, their properties, and how they can be used and attached to your code.

<br />A basic descriptor statement will look something like this:
```
descriptor {
  // Code here
}
```
It's simply placed anywhere you want in your code. Note that all the sample code ahead and in this section must be placed inside this descriptor statement.

## A Basic Block
Let's take a look at a custom block defined inside a descriptor statement.
```
  block {
    internal: uraniumblock
    name: Uranium Block
    texture: textures/uranium.png

    flammable: 0
    destroytime: 10
  }
```
As you can see, there's some basic block properties like `flammable`, `destroytime`, and `texture`. The `name` is how the block will appear ingame. The `internal` name is how you can obtain the item through `/give projectname:internalname`. Usually the projectname is just the name of the MCC file.
