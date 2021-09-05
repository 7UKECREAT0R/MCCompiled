# Includes
If you have other files that you want to be included with the file you're currently compiling, you can include it using `ppinclude`. Anywhere a `ppinclude` command is specified, the contents of the requested file will be inserted into the current file.

```
ppinclude myotherfile
```
**NOTE: The .mcc extension is not required.**

## Usage
You can create your own headers or libraries for use aswell! Just create a `.mcc` file and put whatever you want in it. Useful for keeping massive projects organized.
