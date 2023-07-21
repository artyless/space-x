import React, {useEffect, useState} from 'react'
import { useGetMissionsQuery, useGetRocketImageQuery } from '../redux/api'
import MissionList from './MissionList'

const Missions = () => {
  const { data: descMissions, isLoading: missionsLoading } = useGetMissionsQuery()
  const { data: rocketImages, isLoading: rocketImageLoading } = useGetRocketImageQuery()

  const [order, setOrder] = useState('desc')
  const [ascMissions, setAscMissions] = useState()
  const [missions, setMissions] = useState(descMissions)

  useEffect(() => {
    if (descMissions) {
      setAscMissions(descMissions.toReversed())
    }
  }, [descMissions])

  useEffect(() => {
    setMissions(order === 'desc' ? descMissions : ascMissions)
  }, [order, descMissions, ascMissions])

  const handleChangeOrder = () => {
    setOrder(order === 'desc' ? 'asc' : 'desc')
  }

  if (missionsLoading || rocketImageLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <button onClick={handleChangeOrder}>Sort By Year</button>

      {
        Boolean(missions) && 
        <MissionList
          missions={missions}
          rocketImages={rocketImages}
        />
      }
    </div>
  )
}

export default Missions
