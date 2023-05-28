import { createClient } from '@supabase/supabase-js'

export default async function Post() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  )
  const { data: posts } = await supabase.from('posts').select('id, title, created_at' )
  return <pre>{ JSON.stringify(posts, null, 2) }</pre>
}