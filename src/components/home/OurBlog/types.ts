interface Image {
  alternativeText: string;
  url: string;
}

interface Blogs {
  date: string;
  description: string;
  id: number;
  image: Image;
  title: string;
}

export interface OurBlogSliderProps {
  blogData: Blogs[];
  longTitle: string;
}

export interface BlogSectionProps {
  blogs: Blogs[];
  longTitle: string;
  title: string;
}
