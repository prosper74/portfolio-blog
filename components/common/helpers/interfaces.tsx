export interface SeoProps {
  pageTitle?: string;
  pageDescription?: string;
}

export interface ScrollProps {
  scrollup?: boolean;
  setScrollup: (scrollup: boolean) => void;
}

export interface PostsProps {
  _id?: string;
  title?: string;
  content?: string;
  like?: number;
  createdAt?: string | number | Date;
  updatedAt?: string | number | Date;
  map?: any;
  length: number;
}
