export interface ApiResponse {
    status: number;
    meta: {
        message: string;
        errors: any;
    };
    data: {
        sliders: Slider[];
        about_us_section: AboutUsSection;
        why_us_section: WhyUsSection;
        home_booking_section: HomeBookingSection;
        services_section: ServicesSection;
        goals_section: Goal[];
        projects: ProjectsSection;
        testimonials: Testimonial[];
        partners: Partner[];
    };
}

export interface Slider {
    title: string;
    description: string;
    btn_text: string;
    image: string;
    link: string | null;
}

export interface AboutUsSection {
    slug: string;
    title: string;
    image: string;
    btn_text: string;
    description: string;
    btn_url: string | null;
}

export interface WhyUsSection {
    slug: string;
    title: string;
    image: string;
    items: WhyUsItem[];
}

export interface WhyUsItem {
    icon: string;
    title: string;
    description: string;
}

export interface HomeBookingSection {
    slug: string;
    title: string;
    box_title: string;
    background: string;
    button_text: string;
    button_url: string;
}

export interface ServicesSection {
    slug: string;
    title: string;
    items: ServiceItem[];
}

export interface ServiceItem {
    icon: string;
    title: string;
    background: string;
}

export interface Goal {
    title: string;
    background: string;
    description: string;
}

export interface ProjectsSection {
    slug: string;
    title: string;
    items: Project[];
}

export interface Project {
    id: number;
    title: string;
    image_path: string;
}

export interface Testimonial {
    name: string;
    job: string;
    description: string;
    image: string;
}

export interface Partner {
    id: number;
    image: string;
}