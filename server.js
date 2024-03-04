
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const express = require('express')
const app = express();
app.use(express.json())
const pushToGitHub = async (branchname) => {
  await exec('git add .');
  console.log("added successfully");
  await exec('git commit -m "done"');
  console.log("commited successfully ")
  await exec(`git push origin ${branchname}`);
  console.log('git push successfully')
}
const pullingfromgithub=async()=>{
  // await exec('git fetch origin newbranch')
  await exec('git fetch origin newbranch')
  await exec('git merge newbranch')
  console.log("pulling done")
}

app.get("/merge", async (req, res) => {
  const branchname='master'
  // await pullingfromgithub();
  await pushToGitHub(branchname)
  console.log("successfully changed")
  res.send("done ")
})

app.listen(3000, () => {
  console.log("the server is runnning on port 3000")
})


