import React from 'react'

const RepoTile = (props) => (
  <div className="repo-tile">
    <a href={props.repo.html_url} target="_blank" rel="noopener noreferrer">
      <h3>{props.repo.name}</h3>
    </a>
    <p>{props.repo.description}</p>
    <p>{props.repo.language}</p>
  </div>
)

export default RepoTile
