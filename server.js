
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const express = require('express')
const app = express();
app.use(express.json())
const pushToGitHub = async () => {
  // await exec('git pull origin newbranch');
  // console.log("pulling successfuylly");
  await exec('git add .');
  console.log("added successfully");
  await exec('git commit -m "done"');
  await exec('git push origin master');
}

app.get("/merge", async (req, res) => {
  await pushToGitHub()
  console.log("successfully changed")
  res.send("done ")
})

app.listen(3000, () => {
  console.log("the server is runnning on port 3000")
})


