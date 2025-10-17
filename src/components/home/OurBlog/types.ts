import { Button, Image } from "@/types";

interface BlogData {
  id: number;
  src: string;
  alt: string;
  date: string;
  title: string;
  description: string;
}

interface BlogCard {
  src: string;
  alt: string;
  title: string;
  description: string;
  button: Button;
}

export interface OurBlogSliderProps {
  longTitle: string;
  blogData: BlogData[];
}

export interface BlogSectionProps {
  title: string;
  longTitle: string;
  blogData: BlogData[];
  blogCard: BlogCard;
  backgroundImage: Image;
}
