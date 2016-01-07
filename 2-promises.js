function reposOfFollowers (username) {
  return $get('https://api.github.com/users/' + username).then((user) => {
    return $get(user.followers_url)
  }).then((followers) => {
    return Promise.all(followers.map((follower) => $get(follower.repos_url)))
  }).then((reposNested) => {
    return _.flatten(reposNested)
  })
}

reposOfFollowers('fengb').then((repos) => {
  repos.forEach(console.log)
})
