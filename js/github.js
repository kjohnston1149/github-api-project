var apiKey = require('./../.env').apiKey;

function Github(){

}

Github.prototype.getRepos = function(userName){

  $.get('https://api.github.com/users/'+ userName + '/repos?access_token=' + apiKey).then(function(response){
    console.log(JSON.stringify(response));
    repoName = response[0].name;
    repoDescription = response[0].description;
    console.log(response[0].description);
    $('#nameOfRepo').text(repoName);
    $('#descriptionOfRepo').text(descriptionOfRepo);
    return repoName;
    return repoDescription;
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.githubModule = Github;
