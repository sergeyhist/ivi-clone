export default interface IBannerSlide {
    id: number
    bannerUrl: string
    mobileBannerUrl: string
    logoUrl: string | undefined
    title: string | undefined
    description: string
    buttonText: string
}