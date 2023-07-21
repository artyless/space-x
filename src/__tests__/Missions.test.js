import React from 'react'
import { render, screen, act } from '@testing-library/react'
import { Provider } from 'react-redux'
import '@testing-library/jest-dom/extend-expect'
import Missions from '../Components/Missions'
import MissionList from '../Components/MissionList'
import store from '../redux/store'

test('render "Loading..." text when data is loading', () => {
  act(() => {
    render(
        <Provider store={store}>
            <Missions />
        </Provider>
      )
  })

  expect(screen.getByText(/Loading.../i)).toBeInTheDocument()
})

test('render the mission list when data is loaded', () => {
  const missions = [
    { name: 'Mission 1', date_utc: '2023-07-20', details: 'Mission details 1', rocket: 'rocketId1' },
    { name: 'Mission 2', date_utc: '2023-07-21', details: 'Mission details 2', rocket: 'rocketId2' },
  ]

  const rocketImages = {
    rocketId1: 'image1.jpg',
    rocketId2: 'image2.jpg',
  }

  act(() => {
    render(<MissionList missions={missions} rocketImages={rocketImages} />)
  })

  expect(screen.getByText(/Mission 1/i)).toBeInTheDocument()
  expect(screen.getByText(/Mission 2/i)).toBeInTheDocument()
})
