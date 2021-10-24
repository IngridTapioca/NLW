const links = {
  github: 'maykbrito',
  youtube: 'maykbrito',
  facebook: 'maykbrito',
  instagram: 'maykbrito',
  twitter: 'maykbrito'
}

function changeSocialMediaLinks() {
  // document.getElementById('userName').textContent = 'Olivia'
  // pode ser resumido usando apenas o nome da ID

  userName.textContent = 'Marcelo'

  for (let li of socialMedia.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${links[social]}`

    alert(li.children[0].href)
  }
}

changeSocialMediaLinks()

function getGitProfileInfos() {
  const url = `https://api.github.com/users/${links.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImg.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitProfileInfos()

// arrow functions forma contraida de escreve função
// elimina a necessidade de nome (função anonima)
// (vazio/argumento/s) => {}
