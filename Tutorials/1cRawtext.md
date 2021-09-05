# RawText Generator
The rawtext generator is used to make raw JSON messages for use in the `tellraw` or `titleraw` commands.

## Usage
To open the generator, run `rawtext-builder.bat` or type `mc-compiled.exe -jsonbuilder` in a command line. This will open up the user interface.

## Adding Items
If you hit 'A' this will let you add an item. An item can be any of the following types:
* `TEXT <string>`                 Regular text.
* `SCORE <objective> <selector>`  A scoreboard value.
* `SELECTOR <selector>`           A player or entity selector.

The uppercase isn't required. You can append these elements together to create a cool formatted sentence to use!

```
[You have ] [SCORE money OF @s] [ dollars!]
```
When you're done, hit 'C' to copy the rawtext to the clipboard, and you're done!
```
{"rawtext":[{"text": "You have "}, {"score": {"name":"@s", "objective": "money"}}, {"text": " dollars!"}]}
```
