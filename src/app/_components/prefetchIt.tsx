import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
import { PropsWithChildren } from 'react'
import { testQuery } from '../_queries/useTestQuery'

const PrefetchIt = async ({ children }: PropsWithChildren) => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(testQuery)

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  )
}

export default PrefetchIt
