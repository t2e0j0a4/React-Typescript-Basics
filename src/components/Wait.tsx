import React from 'react'
import useFetchData from '../hooks/useFetchData'

const Wait = () => {

    const API = 'https://api.github.com/users';
    const myUsers = useFetchData(API);

    return (
        <div style={{ display: 'flex', flexDirection: 'row', gap: '0.8rem 1.2rem', flexWrap: 'wrap' }}>
            {
                myUsers.map((user) => {
                    return (
                        <div key={user.id}>
                            <h2>{user.login}</h2>
                            <a href={user.html_url}>Open</a>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Wait