interface BlogData {
  id: number;
  src: string;
  alt: string;
  date: string;
  title: string;
  description: string;
}

export interface OurBlogSliderProps {
  longTitle: string;
  blogData: BlogData[];
}

export interface BlogSectionProps {
  title: string;
  longTitle: string;
  blogData: BlogData[];
}
