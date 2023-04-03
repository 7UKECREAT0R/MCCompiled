const mccompiled = {
	operators: [ `<`, `>`, `{`, `}`, `=`, `(`, `)`, `+`, `-`, `*`, `/`, `%`, `!` ],
	selectors: [ `@e`, `@a`, `@s`, `@p`, `@i`, `@initiator` ],
	preprocessor: [ `` ],
	commands: [ `` ],
	literals: [ `true`, `false`, `not`, `and`, `null`, `~`, `^` ],
	types: [ `int`, `decimal`, `bool`, `time`, `struct`, `ppv`, `global`, `folder` ],
	comparisons: [ `count`, `any`, `block`, `blocks`, `positioned` ],
	options: [ `dummies`, `gametest`, `exploders`, `uninstall`, `up`, `down`, `left`, `right`, `forward`, `backward`, `ascending`, `descending`, `survival`, `creative`, `adventure`, `spectator`, `times`, `subtitle`, `destroy`, `replace`, `hollow`, `outline`, `keep`, `lockinventory`, `lockslot`, `canplaceon:`, `candestroy:`, `enchant:`, `name:`, `lore:`, `author:`, `title:`, `page:`, `dye:`, `align`, `anchored`, `as`, `at`, `facing`, `facing entity`, `in`, `positioned`, `positioned as`, `rotated`, `rotated as` ],
    tokenizer: {
        root: [
            [ /@?[a-zA-Z$][\w]*/, {
                cases: {
                    '@selectors': 'selectors',
                    '@preprocessor': 'preprocessor',
                    '@commands': 'commands',
                    '@literals': 'literals',
                    '@types': 'types',
                    '@comparisons': 'comparisons',
                    '@options': 'options'
                }
            }],
			
			{ include: '@handler' },
			
			[ /[<>{}=()+\-*/%!]+/, 'operators' ],
            [ /"(?:[^"\\]|\\.)*"/, 'strings' ],
            [ /'(?:[^'\\]|\\.)*'/, 'strings' ],
            [ /\[.+\]/, 'selectors.properties' ],
            [ /!?(?:\.\.)?\d+(?:\.\.)?\.?\d*[hms]?/, 'numbers' ]
        ],
		comment: [
            [/[^\/*]+/, 'comment' ],
			[/\/\*/, 'comment', '@push' ],
			["\\*/", 'comment', '@pop'  ],
			[/[\/*]/, 'comment' ]
		],
		handler: [
			[/[ \t\r\n]+/, 'white' ],
			[/\/\*/, 'comment', '@comment' ],
			[/\/\/.*$/, 'comment' ],
		]
    }
}
const mcc_operators = [
	{
		word: `<`,
		docs: 'No documentation available for v1.11.'
	},
	{
		word: `>`,
		docs: 'No documentation available for v1.11.'
	},
	{
		word: `{`,
		docs: 'No documentation available for v1.11.'
	},
	{
		word: `}`,
		docs: 'No documentation available for v1.11.'
	},
	{
		word: `=`,
		docs: 'No documentation available for v1.11.'
	},
	{
		word: `(`,
		docs: 'No documentation available for v1.11.'
	},
	{
		word: `)`,
		docs: 'No documentation available for v1.11.'
	},
	{
		word: `+`,
		docs: 'No documentation available for v1.11.'
	},
	{
		word: `-`,
		docs: 'No documentation available for v1.11.'
	},
	{
		word: `*`,
		docs: 'No documentation available for v1.11.'
	},
	{
		word: `/`,
		docs: 'No documentation available for v1.11.'
	},
	{
		word: `%`,
		docs: 'No documentation available for v1.11.'
	},
	{
		word: `!`,
		docs: 'No documentation available for v1.11.'
	},
]
const mcc_selectors = [
	{
		word: `@e`,
		docs: `References all entities in the world.`
	},
	{
		word: `@a`,
		docs: `References all players in the world.`
	},
	{
		word: `@s`,
		docs: `References the executing entity/player.`
	},
	{
		word: `@p`,
		docs: `References the nearest player.`
	},
	{
		word: `@i`,
		docs: `References the initiator, if this was run from dialogue.`
	},
	{
		word: `@initiator`,
		docs: `References the initiator, if this was run from dialogue.`
	},
]
const mcc_preprocessor = [
]
const mcc_commands = [
]
const mcc_literals = [
	{
		word: `true`,
		docs: `A boolean value representing true/yes.`
	},
	{
		word: `false`,
		docs: `A boolean value representing false/no.`
	},
	{
		word: `not`,
		docs: `Invert the following comparison.`
	},
	{
		word: `and`,
		docs: `Includes on another comparison.`
	},
	{
		word: `null`,
		docs: `No value. Goes to 0/false under all types.`
	},
	{
		word: `~`,
		docs: `Relative to executor's position.`
	},
	{
		word: `^`,
		docs: `Relative to executor's direction.`
	},
]
const mcc_types = [
	{
		word: `int`,
		docs: `An integer, representing any whole value between -2147483648 to 2147483647.`
	},
	{
		word: `decimal`,
		docs: `A decimal number with a pre-specified level of precision.`
	},
	{
		word: `bool`,
		docs: `A true or false value. Displayed as whatever is set in the '_true' and '_false' preprocessor variables respectively.`
	},
	{
		word: `time`,
		docs: `A value representing a number of ticks. Displayed as MM:SS.`
	},
	{
		word: `struct`,
		docs: `A user-defined structure of multiple variables.`
	},
	{
		word: `ppv`,
		docs: `A preprocessor variable that will be set on function call. Not currently supported as a variable/struct type.`
	},
	{
		word: `global`,
		docs: `Attribute that ensures the defined variable will never be tied to an entity, only the global fakeplayer.`
	},
	{
		word: `folder`,
		docs: `Attribute that places a function in the provided folder path.`
	},
]
const mcc_comparisons = [
	{
		word: `count`,
		docs: `Compare the number of entities that match a selector.`
	},
	{
		word: `any`,
		docs: `Check if any entities match a selector.`
	},
	{
		word: `block`,
		docs: `Check for a block.`
	},
	{
		word: `blocks`,
		docs: `Check for an area of blocks matching another.`
	},
	{
		word: `positioned`,
		docs: `Position the next comparison.`
	},
]
const mcc_options = [
	{
		word: `dummies`,
		docs: `Feature: Create dummy entity behavior/resource files and allow them to be spawned in the world.`
	},
	{
		word: `gametest`,
		docs: `Feature: Gametest Integration (not implemented)`
	},
	{
		word: `exploders`,
		docs: `Feature: Create exploder entity behavior/resource files and allow them to be created through the 'explode' command.`
	},
	{
		word: `uninstall`,
		docs: `Feature: Create an function named 'uninstall' to remove all tags/scoreboards/etc., made by this project.`
	},
	{
		word: `up`,
		docs: `Used with the 'move' command. Goes up relative to where the entity is looking.`
	},
	{
		word: `down`,
		docs: `Used with the 'move' command. Goes down relative to where the entity is looking.`
	},
	{
		word: `left`,
		docs: `Used with the 'move' command. Goes left relative to where the entity is looking.`
	},
	{
		word: `right`,
		docs: `Used with the 'move' command. Goes right relative to where the entity is looking.`
	},
	{
		word: `forward`,
		docs: `Used with the 'move' command. Goes forward relative to where the entity is looking.`
	},
	{
		word: `backward`,
		docs: `Used with the 'move' command. Goes backward relative to where the entity is looking.`
	},
	{
		word: `ascending`,
		docs: `Used with the '$sort' command. Sorts with the lowest value first.`
	},
	{
		word: `descending`,
		docs: `Used with the '$sort' command. Sorts with the highest value first.`
	},
	{
		word: `survival`,
		docs: `Survival mode. (0)`
	},
	{
		word: `creative`,
		docs: `Creative mode. (1)`
	},
	{
		word: `adventure`,
		docs: `Adventure mode. (2)`
	},
	{
		word: `spectator`,
		docs: `Spectator mode. (spectator)`
	},
	{
		word: `times`,
		docs: `Specifies the fade-in/stay/fade-out times this text will show for.`
	},
	{
		word: `subtitle`,
		docs: `Sets the subtitle for the next title shown.`
	},
	{
		word: `destroy`,
		docs: `Destroy any existing blocks as if broken by a player.`
	},
	{
		word: `replace`,
		docs: `Replace any existing blocks. Default option.`
	},
	{
		word: `hollow`,
		docs: `Hollow the area, only filling the outer edges with the block. To keep inside contents, use 'outline'.`
	},
	{
		word: `outline`,
		docs: `Outline the area, only filling the outer edges with the block. To remove inside contents, use 'hollow'.`
	},
	{
		word: `keep`,
		docs: `Keep any existing blocks/items, and only fill where air is present.`
	},
	{
		word: `lockinventory`,
		docs: `Lock the item in the player's inventory.`
	},
	{
		word: `lockslot`,
		docs: `Lock the item in the slot which it is placed in.`
	},
	{
		word: `canplaceon:`,
		docs: `Specifies a block the item can be placed on.`
	},
	{
		word: `candestroy:`,
		docs: `Specifies a block the item can destroy.`
	},
	{
		word: `enchant:`,
		docs: `Give a leveled enchantment to this item. No limits.`
	},
	{
		word: `name:`,
		docs: `Give the item a display name.`
	},
	{
		word: `lore:`,
		docs: `Give the item a line of lore. Multiple of these can be used to add more lines.`
	},
	{
		word: `author:`,
		docs: `If this item is a 'written_book', set the name of the author.`
	},
	{
		word: `title:`,
		docs: `If this item is a 'written_book', set its title.`
	},
	{
		word: `page:`,
		docs: `If this item is a 'written_book', add a page to it.  Multiple of these can be used to add more pages.`
	},
	{
		word: `dye:`,
		docs: `If this item is a piece of leather armor, set its color to an RGB value.`
	},
	{
		word: `align`,
		docs: `Execute subcommand: Runs aligned to the given axes.`
	},
	{
		word: `anchored`,
		docs: `Execute subcommand: Runs anchored to the executing entities eyes or feet.`
	},
	{
		word: `as`,
		docs: `Execute subcommand: Runs as the given entity(s).`
	},
	{
		word: `at`,
		docs: `Execute subcommand: Runs at the given location or entity.`
	},
	{
		word: `facing`,
		docs: `Execute subcommand: Runs facing a certain position.`
	},
	{
		word: `facing entity`,
		docs: `Execute subcommand: Runs facing a certain entity.`
	},
	{
		word: `in`,
		docs: `Execute subcommand: Runs in a given dimension.`
	},
	{
		word: `positioned`,
		docs: `Execute subcommand: Runs at a given position.`
	},
	{
		word: `positioned as`,
		docs: `Execute subcommand: Runs at the position of the given entity.`
	},
	{
		word: `rotated`,
		docs: `Execute subcommand: Runs at the given rotation.`
	},
	{
		word: `rotated as`,
		docs: `Execute subcommand: Runs at the rotation of the given entity.`
	},
]
