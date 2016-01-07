async function reposOfFollowers (username) {
  var user = await $get('https://api.github.com/users/' + username)
  var followers = await $get(user.followers_url)
  var reposNested = await followers.map((follower) => $get(follower.repos_url))
  return _.flatten(reposNested)
}

var repos = await reposOfFollowers('fengb')
repos.forEach(console.log)
