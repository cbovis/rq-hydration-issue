import { queryOptions, useQuery } from '@tanstack/react-query'

const queryKey = ['test']

const testQuery = queryOptions({
  queryKey,
  queryFn: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Dummy Data')
      }, 5000)
    })
  },
})

const useTestQuery = () => {
  return useQuery(testQuery)
}

export { queryKey, testQuery, useTestQuery }
