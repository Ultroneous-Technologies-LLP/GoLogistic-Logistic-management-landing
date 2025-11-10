interface BlogData {
  alt: string;
  date: string;
  description: string;
  id: number;
  src: string;
  title: string;
}

export interface OurBlogSliderProps {
  blogData: BlogData[];
  longTitle: string;
}

export interface BlogSectionProps {
  blogData: BlogData[];
  longTitle: string;
  title: string;
}
