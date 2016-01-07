function reposOfFollowers (username) {
  var user = $get('https://api.github.com/users/' + username)
  var followers = $get(user.followers_url)
  var reposNested = followers.map((follower) => $get(follower.repos_url))
  return _.flatten(reposNested)
}

var repos = reposOfFollowers('fengb')
repos.forEach(console.log)
