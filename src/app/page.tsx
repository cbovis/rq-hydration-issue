import ShowIt from './_components/showIt'
import PrefetchIt from './_components/prefetchIt'

export default async function Home() {
  return (
    <PrefetchIt>
      <ShowIt />
    </PrefetchIt>
  )
}
