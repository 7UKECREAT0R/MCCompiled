# Descriptors
Now we're entering into the world of actually modding the game. You may have already noticed that MCCompiled outputs into a nicely formatted behavior pack, but it can do more than just generate functions!

## Descriptor Files
Descriptor files use the extension `.descriptor`. These files are the modding base for your entire project. Descriptors let you define and generate relatively complex structures with ease, whether it be actual minecraft structures or custom items or entites. To put it simply, they compress multiple different file types and formats down into one relatively simple and easy to read file.

## Format
A descriptor file contains multiple descriptors. These are separated by a type identifier. The different pages in this section detail over each type identifier separately. The general format however follows the same rule: Line must start with an `&` symbol and contain both the type and symbol name for your descriptor (in order).
```
& drop awesome_sword
...
```
The symbol name (in this case `awesome_sword`) is what's used in your code to make a reference to the described object. I personally recommend indenting the lines a bit after your section identifier. Makes it easier to read. 

## Manifest
To change up the pack manifest and actually name your final behavior pack, use the `manifest` type; A special descriptor type which isn't named.
```
& manifest
  name: My Epic Pack
  description: The best behavior pack ever.
```
UUIDs will automatically be generated off of this information. 

## Compiling
In your actual `.mcc` file, you can include your descriptors by typing:
```
compile <filename>
```
If you want MCCompiled to scan the entire directory and automatically compile descriptors, use:
```
compile all
```
And that's it! Your compiled files will be included in the final behavior pack output, AND you can use them in your code when available!
