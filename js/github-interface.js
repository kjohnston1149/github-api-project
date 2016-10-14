var Github = require('./../js/github.js').githubModule;

$(document).ready(function(){
  alert("test");
  userGithub = new Github();
  userGithub.getRepos();
});
