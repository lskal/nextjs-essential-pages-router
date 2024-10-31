// our-domanain.com/news/something-important

import { useRouter } from "next/router"

export default function Detailsgpage() {
    const router = useRouter()

    const newsID = router.query.newsId

    return <h1>The Details page</h1>
}