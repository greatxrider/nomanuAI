import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

// Don't throw error during build time
if (process.env.NODE_ENV === 'production' &&
    !process.env.NEXT_PHASE &&
    (!supabaseUrl || !supabaseAnonKey || supabaseUrl === 'https://placeholder.supabase.co')) {
    console.warn('Missing Supabase environment variables - using placeholder values')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface ContactSubmission {
    id?: string
    name: string
    email: string
    phone?: string
    company?: string
    message: string
    service_type?: string
    created_at?: string
}

export interface NewsletterSubscriber {
    id?: string
    email: string
    subscribed_at?: string
}

export interface ServiceInquiry {
    id?: string
    name: string
    email: string
    phone?: string
    company?: string
    service_type: string
    budget_range?: string
    timeline?: string
    message: string
    created_at?: string
} 