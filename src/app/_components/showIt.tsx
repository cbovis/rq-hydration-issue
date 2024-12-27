'use client'

import { useTestQuery } from '../_queries/useTestQuery'

const ShowIt = () => {
  const query = useTestQuery()

  return <>{query.data ? JSON.stringify(query.data) : 'Loading...'}</>
}

export default ShowIt
