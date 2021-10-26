const LinksSocialMedia = {
  github: 'ragnerx1',
  youtube: 'UCz99U7evdk1yuhb2I7vD',
  facebook: 'ragner.evangelistadelima',
  instagram: 'ragner_/',
  twitter: 'ragner99'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    //alert(li.children[0].href)

    li.children[0].href = `http://${social}.com/${LinksSocialMedia[social]}`

    //alert(li.children[0].href)
  }
}

changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGithubProfileInfos()
