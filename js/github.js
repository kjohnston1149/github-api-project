var apiKey = require('./../.env').apiKey;

function Github(){

}

Github.prototype.getRepos = function(){
  $.get('https://api.github.com/users/kjohnston1149/repos?access_token=' + apiKey).then(function(response){
    console.log(JSON.stringify(response));
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.githubModule = Github;
