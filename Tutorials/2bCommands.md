# Preprocessor Commands
Here's a reference for all the preprocessor commands you can use, as well as examples on how to use them!

## ppv \<destination> \<value>
Sets a variable to a value.
```
ppv age 16
ppv pi 3.14
ppv name Luke

print Hi, I'm name and I'm age years old!
print PI is equivalent to pi.
```

## ppinc \<variable>
Increment a variable by one.
```
ppv offset 5
ppinc offset

// offset == 6
```

## ppdec \<variable>
Decrement a variable by one.
```
ppv health 20
ppdec health

// health == 19
```

## ppadd \<variable> \<source>
Add a value to a variable.
```
ppv coins 50
ppv chest 10
ppadd coins chest
ppadd coins 40

// coins == 100
```

## ppsub \<variable> \<source>
Subtract a value from a variable.
```
ppv coins 50
ppv attack 15

ppsub coins attack
ppsub coins 5

// coins == 30
```

## ppmul \<variable> \<source>
Multiply a variable by a value.
```
ppv coins 50
ppmul coins 3

// coins == 150
```

## ppdiv \<variable> \<source>
Divide a variable by a value.
```
ppv ammo 50
ppdiv ammo 2

// ammo == 25
```

## ppmod \<variable> \<source>
Set a variable to the remainder of dividing it with a value.
```
ppv stocks 12
ppmod stocks 10

// stocks == 2
```

## ppif \<a> <,<=,=,!=,>,>= \<b>
Compare two values, either of which can be preprocessor variables.
<br />Must be followed by a block.
```
ppv age 16

ppif age < 18 {
  print Not old enough!
}
```

## ppelse
Used after a ppif block. Performs an operation if the assessment failed.
<br />Must be followed by a block.
```
ppv age 16

ppif age < 18 {
  print Not old enough!
} ppelse {
  print You are old enough!
}
```

## pprep \<amount>
Repeats the following block x times.
```
pprep 100 {
  print SPAM!
}
```

## pplog \<message>
Logs a message to the console during compilation.
```
pplog Hey waddup from console!
```

## ppmacro \<name> \[args]
If a block is included after this, then it's treated as defining a macro. Macros let you prevent repeating a ton of code.
```
ppmacro spam message amount {
  pprep amount {
    print message
  }
}

ppmacro spam "I" 100
ppmacro spam "AM" 100
ppmacro spam "SPAMMING" 100
```

## ppfriendly \<variable>
Converts a string variable to a more user-friendly name.
```
ppv item diamond_block
ppfriendly item
print item

// Diamond Block
```

## ppupper \<variable>
Converts a string variable to a completely uppercase name.
```
ppv name Luke
ppupper name
print name

// LUKE
```

## pplower \<variable>
Converts a string variable to a completely lowercase name.
```
ppv text Hello World
pplower text
print text

// hello world
```
