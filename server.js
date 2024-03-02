const { exec } = require('child_process');
const express = require('express')
const app = express();
app.use(express.json())
function pushToGitHub(commitMessage) {
  const gitCommand = `git add seconde.txt && git commit -m "${commitMessage}" && git push origin master`;

  exec(gitCommand, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing Git command: ${error.message}`);
      return;
    }

    if (stderr) {
      console.error(`Git command stderr: ${stderr}`);
      return;
    }

    console.log(`Git command stdout: ${stdout}`);
  });
}

app.get("/", (req, res) => {
  const commitMessage = "Committing changes";
  pushToGitHub(commitMessage);
  res.send("done!")
})
app.listen(3000, () => {
  console.log("the server is runnning on port 3000")
})
// Example usage:

