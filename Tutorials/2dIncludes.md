# Includes
If you have other files that you want to be included with the file you're currently compiling, you can include it using `ppinclude`. Anywhere a `ppinclude` command is specified, the contents of the requested file will be inserted into the current file.

## stdmcc
A common include you can use is the `stdmcc` file included with the binary. This file contains many macros, constants, and other things that can help a lot with your development. For information on how to use stdmcc, check the next section. To include this file, simply put the following at the top of your code:
```
ppinclude stdmcc
```

**NOTE: The .mcc extension is not required.**

## Usage
You can create your own headers or libraries for use aswell! Just create a `.mcc` file and put whatever you want in it. Useful for keeping massive projects organized.
