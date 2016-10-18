var apiKey = require('./../.env').apiKey;

function Github(){
}
var repoNameArray = [];
var repoDescriptionArray = [];

Github.prototype.getRepos = function(userName){
  $.get('https://api.github.com/users/'+ userName + '/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
    for(var i = 0; i <= response.length; i++){
      // repoName = response[i].name;
      // repoDescription = response[i].description;
      repoNameArray.push(response[i].name);
      repoDescriptionArray.push(response[i].description);
      console.log(repoNameArray);
      $('#nameOfRepo').append(repoNameArray);
      $('#descriptionOfRepo').append(repoDescriptionArray);

    }

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.githubModule = Github;
