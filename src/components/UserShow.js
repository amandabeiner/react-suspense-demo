import React, { unstable_Suspense as Suspense, Fragment } from 'react'
import { createResource } from 'react-cache'
import RepoTile from './RepoTile'
import UserDetails from './UserDetails'
import Spinner from './Spinner'
import { cache } from '../cache'
import Api from '../api'

const api = new Api()

const fetchUserDetails = createResource(
  (login) => api.fetch(`/users/${login}`)
)

const fetchUserRepos = createResource(
  (login) => api.fetch(`/users/${login}/repos`)
)

const UserRepos = ({ member  }) => {
  const repos = fetchUserRepos.read(cache, member)
  return (
    <div>
      {repos.length > 0 ? (
        <Fragment>
          <div className='repo-container'>
            {repos.map(repo => (
              <RepoTile repo={repo} key={repo.id} />
            ))}
          </div>
      </Fragment>
      ) : (
        <h2>No public repos</h2>
      )}
    </div>
  )
}

const UserShow = ({ member }) => {
  const user = fetchUserDetails.read(cache, member)
  
  return ( 
    <div className="user-show">
      <UserDetails user={user} />
      <Suspense maxDuration={2000} fallback={<Spinner size="large"/>}>
        <UserRepos member={member}/>
      </Suspense>
    </div>
  )
}

export default UserShow
