import ShowIt from '../_components/showIt'
import PrefetchIt from '../_components/prefetchIt'

export default async function Home() {
  return (
    <PrefetchIt>
      <div>
        Page:
        <ShowIt />
      </div>
    </PrefetchIt>
  )
}
