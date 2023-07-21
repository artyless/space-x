import React from 'react'

const formatDate = dateString => new Date(dateString).toLocaleDateString('ru-RU')

const MissionList = ({ missions, rocketImages}) => {
    return (
      <div>
        {missions.map((mission) => (
            <div key={mission.flight_number}>
              <h3>{mission.name}</h3>
              <p>{formatDate(mission.date_utc)}</p>
              <p>{mission.details}</p>
              <img
                src={rocketImages[mission.rocket]}
                alt={mission.rocket}
                style={{ width: '200px', height: '200px' }}
              />
            </div>
          ))}
      </div>
    )
  }

  export default MissionList
