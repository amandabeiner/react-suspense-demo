import React, { Fragment } from 'react'
import UserTile from './UserTile'
import { createResource } from 'react-cache'
import { cache } from '../cache'
import Api from  '../api'

const api = new Api()

const fetchUsers = createResource(
  () => api.fetch('/orgs/Privy/members')
)

const UsersIndex = props => {
  const users = fetchUsers.read(cache)
  return (
    <Fragment>
      <h1>Privy Team:</h1>
      <div className="team-list">
        {users.map(m => (
          <UserTile
            key={m.id}
            id={m.id}
            login={m.login}
            avatar_url={m.avatar_url}
            onClick={props.selectMember}
            loading={props.loadingId && m.login === props.loadingId}
          />
        ))}
      </div>
    </Fragment>
  )
}

export default UsersIndex
