import React from 'react'

const UserDetails = (props) => {
  return ( 
    <div className="user-details">
      <img src={props.user.avatar_url} alt={`${props.user.login} avatar`}/>
      <div className="user-info">
        <h1>{props.user.login}</h1>
        {props.user.location && (
            <div className="location">
              <svg viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
              {props.user.location}
            </div>
          )}

        {props.user.bio && (
          <div className="bio">{props.user.bio}</div>
        )}
      </div>
    </div>
  )
}

export default UserDetails
