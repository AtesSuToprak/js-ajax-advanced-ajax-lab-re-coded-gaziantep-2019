function getRepositories(){
  const req = new XMLHttpRequest();
  req.addEventListener('load', showRepositories);
  req.open('GET', 'https://api.github.com/users/octocat/repos');
  req.send();
}

function showRepositories(event, data) {
  //we will use JSON.parse here to parse the response string into proper objects !
  const repos = JSON.parse(this.responseText);
  //We're simply building an 'unordered list' by using '.map' to create <li></li> nodes for each object in repos.
  const repoList = `<ul>${repos.map ( r => '<li><a href = "' + r.html_url + r.name + '</a></li>' ).join('')}</ul>`;
  // and now we shoul call the repositories we have created in the previous lines called as 'repoList !'
  document.getElementById('repositories').innerHTML = repoList;
}