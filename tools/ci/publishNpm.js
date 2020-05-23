const cp = require("child_process");

function publishNpm(cwd) {
  try {
    cp.execSync("npm publish", {
      cwd: cwd,
      env: process.env
    });
  } catch (err) {
    console.log("publishNpm err", err.stdout.toString("utf8"));
    process.exit(1);
  }
}

module.exports = publishNpm;
