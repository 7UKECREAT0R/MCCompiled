### This guide is intended mostly for people who already have programming/coding knowledge in more modern language. If not, you can probably still use this to learn.
If you don't already know a different programming/coding language, this guide will still be useful; However, it doesn't go into detail on some of the more basic concepts.

# Hello, World! (from minecraft)
Let's get our first line of code running, a classic Hello World in Minecraft! Create a file named `first-code.mcc` and open it in any text editor. If you use notepad++, you can install the custom coloring profile to have highlighted code [here](). In the file, let's simply do:
```
print Hello World!
```
Simple, right? I know it's pretty lackluster but let's make sure we're able to compile and run one of these guys first. Put your file in the same folder as `mc-compiled.exe` to make this a little easier. To compile the file, simply drag it onto `mc-compiled.exe` in the file explorer. You may notice it doesn't really say anything, which is not useful. Instead, drag the file onto `compile-debug.bat` to compile with a lot more information. Boom, at the bottom of the console:
```
Compile:        Print Hello World!
Wrote 1 function files.
```
This basically is saying that it went good. We now have a `first-code.mcfunction` file that can be used in minecraft! If we take a look at the function code:
```
tellraw @a {"rawtext":[{"text": "Hello World!"}]}
```
We can now run this .mcfunction however we want! In my case, I just ran the command in minecraft which does about what you'd expect. Boring. Let's add in some colors! Change the file to instead be:
```
print [color: GREEN] Hello World!
```
When we compile again and run it, you might notice the command is slightly different now. MCCompiled identified the color and replaced it with the appropriate color code for Minecraft! If we run the newly compiled function (remember to `/reload`!), the text is now green! (big surprise)

# Cooler Thing
Okay, lets ramp it up a bit. The new goal will be to teleport the player onto a glass platform in the sky. Create a new `.mcc` file; we're going to define a preprocessor variable. This means that after we define it, we can type it anywhere in our code (with a '$' before it) and the value of it will be replaced. Kind of like an all-seeing variable.
```
ppv height 25
```
Now, every time `$height` pops up in our code, it will be replaced with 25. `ppv` means "Preprocessor variable." Let's continue by teleporting the player next.
```
ppv height 25
tp ~ ~$height ~
```
The `tp` command syntax is used similarly to the original Minecraft command, however it assumes the selector is `@s` by default. So this will teleport the player `$height` blocks into the air, or 25 in this case.
```
ppv height 25
tp ~ ~$height ~ 
fill ~-1 ~-1 ~-1 ~1 ~-1 ~1 glass
```
The tilde \[~\] means that the coordinate will be relative to where the player is right now, which in this case is way up in the air. Awesome, now you can compile the .mcfunction file and run it!

### That's the basics of the language. You can find references for all the commands, along with more guides in the Table of Contents!
