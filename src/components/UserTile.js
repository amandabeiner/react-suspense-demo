import React from 'react'
import Spinner from './Spinner'

const UserTile = (props) => {
  const selectTile = () =>  (
    props.onClick(props.login)
  )

  return (
    <div className="user-tile" onClick={selectTile}>
      <img src={props.avatar_url} alt="avatar"/>
      <h1>{props.login}</h1>
      {props.loading && (
        <Spinner size="small" />
      )}
    </div>
  )
}

export default UserTile
