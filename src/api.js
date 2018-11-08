export default class Api {

  fetch(path) {
    const baseUrl = "https://api.github.com"

    return global.fetch(`${baseUrl}${path}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`
      }
    })
      .then(res => {
        return res.ok ? res.json() : res.then(inner => Promise.reject(inner))
      })
  }
}
