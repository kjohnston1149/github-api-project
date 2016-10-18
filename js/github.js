var apiKey = require('./../.env').apiKey;

function Github(){
}

Github.prototype.getRepos = function(userName, repoNumber){
  $.get('https://api.github.com/users/'+ userName + '/repos?access_token=' + apiKey).then(function(response){
    repoName = response[repoNumber].name;
    repoDescription = response[repoNumber].description;
    $('#nameOfRepo').text(repoName);   $('#descriptionOfRepo').text(repoDescription);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.githubModule = Github;
