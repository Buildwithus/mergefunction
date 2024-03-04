const { exec } = require('child_process');
const express = require('express')
const app = express();
app.use(express.json())
const pushToGitHub = async (commitMessage) => {
  const gitCommand = `git add . && git commit -m "${commitMessage}" && git push origin branch`;
  const newDirectory = 'D:/node scheduler/newf';
  // process.chdir(newDirectory);
  // console.log(process.cwd())
  await exec(gitCommand, (error, stdout, stderr) => {
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

const checkbranch=async(newbranch)=>{
  const gitCommand=`git branch ${newbranch}`;
 await exec(gitCommand,(err)=>{
    if(err){
      console.log(err)
    }
  })
}



app.get("/push", (req, res) => {
  const commitMessage = "Committing changes";
  pushToGitHub(commitMessage);
  res.send("done!")
})
// app.get("/check",async(req,res)=>{
//   const commitMessage='git branch add'
//   const newbranch="branch"
//  await checkbranch(newbranch);
//  console.log("checking branch")
// })
app.listen(3000, () => {
  console.log("the server is runnning on port 3000")
})
// Example usage:

