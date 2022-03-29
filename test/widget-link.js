var blessed = require("../"),
  screen;

screen = blessed.screen({
  dump: __dirname + "/logs/link.log",
  warnings: true,
});

blessed.box({
  parent: screen,
  // left: "center",
  // top: "center",
  width: 25,
  height: 10,
  style: {
    bg: "green",
    fg: "blue",
  },
  tags: true,
  // border: "line",
  content: [
    "\x1b]8;;file:///E:/bnqkl/dev/bfcs-util/bfcs-util/dist/esm/index.mjs\x07dist/esm/index.mjs\x1b]8;;\x07123456789;123456789",
    "\u001b[31mGaubee\u001b[39m",
    "\x1b]8;;file:///E:/bnqkl/dev/bfcs-util/bfcs-util/dist/esm/index.mjs\x1b\\dist/esm/index.mjs\x1b]8;;\x1b\\123456789;123456789",
    "{red-fg}Gaubee{/red-fg}",
  ].join("\n"),
});

screen.key(["q", "C-c"], function () {
  return screen.destroy();
});

screen.render();
`\u001b[3;1H\u001b[29C┌───────────────────────────────────────────┐\u001b[4;1H\u001b[4;30H│\u001b[40;33m\u001b]8;;file:///E:/bnqkl/dev/bfcs-util/bfcs-ut\u001b[m│\u001b[5;1H\u001b[5;30H│\u001b[40;33mil/dist/esm/index.mjs\u0007dist/esm/index.mjs\u001b]8\u001b[m│\u001b[6;1H\u001b[6;30H│\u001b[40;33m;;\u0007123456789;123456789                     \u001b[m│\u001b[7;1H\u001b[7;30H│\u001b[40;31mGaubee\u001b[m\u001b[40;33m                                     \u001b[m│\u001b[8;1H\u001b[8;30H│\u001b[40;33m\u001b]8;;file:///E:/bnqkl/dev/bfcs-util/bfcs-ut\u001b[m│\u001b[9;1H\u001b[9;30H│\u001b[40;33mil/dist/esm/index.mjs\u0007dist/esm/index.mjs\u001b]8\u001b[m│\u001b[10;1H\u001b[10;30H│\u001b[40;33m;;\u0007123456789;123456789                     \u001b[m│\u001b[11;1H\u001b[11;30H│\u001b[40;31mGaubee\u001b[m\u001b[40;33m                                     \u001b[m│\u001b[12;1H\u001b[12;30H│\u001b[40;33m                                           \u001b[m│\u001b[13;1H\u001b[13;30H│\u001b[40;33m                                           \u001b[m│\u001b[14;1H\u001b[14;30H│\u001b[40;33m                                           \u001b[m│\u001b[15;1H\u001b[15;30H│\u001b[40;33m                                           \u001b[m│\u001b[16;1H\u001b[16;30H│\u001b[40;33m                                           \u001b[m│\u001b[17;1H\u001b[17;30H│\u001b[40;33m                                           \u001b[m│\u001b[18;1H\u001b[18;30H│\u001b[40;33m                                           \u001b[m│\u001b[19;1H\u001b[19;30H│\u001b[40;33m                                           \u001b[m│\u001b[20;1H\u001b[20;30H└───────────────────────────────────────────┘`