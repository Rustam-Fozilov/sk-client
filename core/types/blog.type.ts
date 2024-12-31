export type Blog = {
  id: number,
  title: string,
  content: string,
  image_link: string,
  read_minute: number,
  tags: Array<any>,
  created_at: string,
  is_liked?: boolean,
  is_saved?: boolean,
  like_count: number,
}