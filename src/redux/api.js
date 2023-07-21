import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const spacexApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.spacexdata.com/' }),
  endpoints: (builder) => ({
    getMissions: builder.query({
      query: () => ({
        url: 'v5/launches/query',
        method: 'POST',
        body: {
          query: {
            date_utc: {
              $gte: '2015-01-01T00:00:00.000Z',
              $lte: '2019-12-31T23:59:59.999Z',
            },
            success: true
          },
          options: {
            sort: {
              flight_number: "desc"
            },
            limit: 100
          }
        },
      }),
      transformResponse: (response) => response.docs
    }),
    getRocketImage: builder.query({
      query: () => `v4/rockets/`,
      transformResponse: (response) => {
        const transformedData = {}
        response.forEach((item) => {
          transformedData[item.id] = item.flickr_images[0]
        })
        return transformedData
      },
    }),
  }),
})

export const { useGetMissionsQuery, useGetRocketImageQuery } = spacexApi
