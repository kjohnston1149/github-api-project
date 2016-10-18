var apiKey = require('./../.env').apiKey;

function Github(){
}
var repoNameArray = [];
var repoDescriptionArray = [];

Github.prototype.getRepos = function(userName){
  $.get('https://api.github.com/users/'+ userName + '/repos?access_token=' + apiKey).then(function(response){
    repoName = response[0].name;
    repoDescription = response[0].description;
    $('#nameOfRepo').text(repoName);   $('#descriptionOfRepo').text(repoDescription);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.githubModule = Github;
