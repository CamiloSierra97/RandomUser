import React from 'react'

const RandomUser = ({ newUser, user }) => {

    return (
        <div className="random__user">
            <img src={`${user?.picture.large}`} alt="User" style={{ width: 200, height: 200 }} />
            <h1 className="name__title">
                {user?.name.title}
            </h1>
            <h1 className="name">
                {`${user?.name.first} ${user?.name.last}`}
            </h1>
            <ul className="data">
                <li className="gender">
                    <span>Gender: </span>{user?.gender}
                </li>
                <li className="age">
                    <span>Age: </span>{user?.dob.age}
                </li>
                <li className="email">
                    <span>Email: </span>{user?.email}
                </li>
                <li className="location">
                    <span>Location</span>
                    <ul>
                        <li className="country"><span>Country: </span>{user?.location.country}</li>
                        <li className="state"><span>State: </span>{user?.location.state}</li>
                        <li className="street"><span>Street: </span>{`${user?.location.street.name} ${user?.location.street.number}`}</li>
                    </ul>
                </li>
                <li className="cell">
                    <span>Cell: </span>{user?.cell}
                </li>
            </ul>
            <br />
            <button className="get__user" onClick={newUser}>
                Get random user
            </button>
        </div>
    )
}

export default RandomUser