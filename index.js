var blessed = require('blessed');
const {db} = require('./db.js')
// const chalk = require('chalk')

// Create a screen object.
var screen = blessed.screen({
  smartCSR: true
});


screen.title = 'my window title';
const link = `\x1B]8;;https://blog.ethereum.org/2022/08/24/mainnet-merge-announcement\u0007Merge announcement\x1b]8;;\u0007` 
const link2 = '\x1B]8;;http://example.com\e\\This is a link\e]8;;\e\\\n'
const link3 ="\u001b]8;;http://example.com/\u0007Example.com\u001b]8;;\u0007"
const phrase = '\u001b[1mtest string\u001b[22m'
const phrase2 = '\u001b[1msuppppppppppppppppppppppppper looooooooooooong test string\u001b[22m'
const phrase3 =  '\u001b[1mabc\u001b[22m'
const phrase4 = '{bold}test{/bold}a'
const link4 ="\x1B]8;;http://example.com/,\u0007Example.com\x1B]8;;\u0007"
// Create a box perfectly centered horizontally and vertically.
var box = blessed.box({
  //top: 'center',
  left: 'center',
  width: '100%',
  height: '100%',
  content: link4,
  tags: true,
});

// Append our box to the screen.

screen.append(box);

// Quit on Escape, q, or Control-C.
screen.key(['escape', 'q', 'C-c'], function(ch, key) {
  return process.exit(0);
});

// Focus our element.
box.focus();

// Render the screen.
screen.render();
