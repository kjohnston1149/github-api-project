var apiKey = require('./../.env').apiKey;

function Github(){

}

Github.prototype.getRepos = function(userName){
  // $.get('https://api.github.com/users/'+ userName + '/repos?access_token=' + apiKey).then(function(public){
  //   // console.log(JSON.stringify(public));
  // }).fail(function(error){
  //   console.log(error.responseJSON.message);
  // });
  $.get('https://api.github.com/users/'+ userName + '/repos?access_token=' + apiKey).then(function(response){
    console.log(JSON.stringify(response));
    repoName = response[0].name;
    repoDescription = response[0].description;
    console.log(repoName);
    console.log(repoDescription);
    return repoName;
    return repoDescription;
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.githubModule = Github;
