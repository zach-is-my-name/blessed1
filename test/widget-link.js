var blessed = require("../"),
  screen;

screen = blessed.screen({
  dump: __dirname + "/logs/link.log",
  warnings: true,
});

blessed.box({
  parent: screen,
  left: "center",
  top: "center",
  width: 25,
  height: "80%",
  style: {
    bg: "black",
    fg: "yellow",
  },
  tags: true,
  border: "line",
  content: [
    "\x1b]8;;file:///E:/bnqkl/dev/bfcs-util/bfcs-util/dist/esm/index.mjs\x07dist/esm/index.mjs\x1b]8;;\x07123456789;123456789",
    "\u001b[31mGaubee\u001b[39m",
    "{red-fg}Gaubee{/red-fg}",
  ].join("\n"),
});

screen.key(["q", "C-c"], function () {
  return screen.destroy();
});

screen.render();
