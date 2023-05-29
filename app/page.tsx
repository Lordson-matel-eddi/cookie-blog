import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export default async function Post() {
  const supabase = createServerComponentClient({
    cookies
  })

  const { data: posts } = await supabase.from('posts').select('id, title, created_at' )
  return <pre>{ JSON.stringify(posts, null, 2) }</pre>
}