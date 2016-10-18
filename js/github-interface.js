var Github = require('./../js/github.js').githubModule;

$(document).ready(function(){
  alert("test");
  var repoName;
  var repoDescription;
  userGithub = new Github();
  // userGithub.getRepos(repoName, repoDescription);
  // console.log(repoName);

  $('#userNameForm').submit(function(event) {
    event.preventDefault();
    var userName = $('#userNameInput').val();
    userGithub = new Github;
    userGithub.getRepos(userName);


  });
});
