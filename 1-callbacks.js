function reposOfFollowers (username, callback) {
  $get('https://api.github.com/users/' + username, (user) => {
    $get(user.followers_url, (followers) => {
      var reposNested = []
      followers.forEach((follower) => {
        $get(follower.repos_url, (repos) => {
          reposNested.push(repos)
          if (reposNested.length === followers.length) {
            callback(_.flatten(reposNested))
          }
        })
      })
    })
  })
}

reposOfFollowers('fengb', (repos) => {
  repos.forEach(console.log)
})
