export interface PostTag {
  pk_tag?: number;
  tag_name: string;
}

export interface Post {
  pk_post?: number;
  platform: string;
  title: string;
  description: string;
  publish_date: string;
  url_link: string;
  tags: PostTag[];
}
