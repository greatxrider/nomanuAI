export interface Service {
    id: string
    title: string
    description: string
    features: string[]
    icon: string
    price?: string
}

export interface Testimonial {
    id: string
    name: string
    company: string
    position: string
    content: string
    avatar?: string
    rating: number
}

export interface FormData {
    name: string
    email: string
    phone?: string
    company?: string
    message: string
    serviceType?: string
    budgetRange?: string
    timeline?: string
}

export interface NavItem {
    label: string
    href: string
} 