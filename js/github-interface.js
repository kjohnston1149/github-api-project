var Github = require('./../js/github.js').githubModule;

$(document).ready(function(){
  alert("test");
  userGithub = new Github();



  $('#userNameForm').submit(function(event) {
    event.preventDefault();
    $('#results').show();
    var userName = $('#userNameInput').val();
    userGithub = new Github;
    userGithub.getRepos(userName);


  });
});
