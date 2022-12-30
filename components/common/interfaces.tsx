export interface SeoProps {
  pageTitle?: string;
  pageDescription?: string;
}

export interface ScrollProps {
  scrollup?: boolean;
  setScrollup: (scrollup: boolean) => void;
}