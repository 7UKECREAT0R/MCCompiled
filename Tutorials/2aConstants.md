# Preprocessor Variables
Before discussing constants, let's go over preprocessor variables once more. They are a useful way to make a value that is used multiple times throughout your code. This section is the first in the Preprocessor series of guides. You can define a preprocessor variable using the command `ppv <name> <value>`, and from there, any time the word `name` comes up it will be replaced with `value` automatically.
```
ppv my_name Luke
print Hi my name is my_name!
```
Preprocessor variables can be overwritten, added to, multiplied with, compared, and so much more which will be gone over in the next section.

# Actual Constants
Constants work similarly to preprocessor variables, but there's a lot more of them and they are only evaluated once at compile time. Defined constants are placed in the `definitions.def` file. If you take a look at the contents of it, you'll notice there's a lot going on. There are both `CATEGORY`ies and definitions that look like `X IS Y`. These constants specify things that help shorten and make your code more readable. For example, setting red wool as `[wool: red]` rather than `14` helps you know "oh yeah, this is red wool!" Speaking of which, the way to reference ANY of the constants you find you want to use is just to put `[category: query]` anywhere in your code. They are case insensitive too so use uppercase, lowercase, all the cases!<br /><br />

You can even define your own if you want. Just make sure the keywords like `CATEGORY` and `IS` are uppercase.
```
CATEGORY EXAMPLE
    MYCONSTANT IS Hello World!
    PI IS 3.141
```
```
print [Example: MyConstant].
print Fun fact: PI is [EXAMPLE:PI].
```
