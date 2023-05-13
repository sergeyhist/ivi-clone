export default interface IBannerSlide {
  id: number;
  bannerUrl: string;
  mobileBannerUrl: string;
  logoUrl?: string;
  title?: string;
  description: string;
  buttonText: string;
  route: string;
}
