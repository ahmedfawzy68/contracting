export interface AboutUsData {
    status: number;
    meta: {
        message: string;
        errors: string[] | null;
    };
    data: {
        more_about_us_section: {
            slug: string;
            title: string;
            image: string;
            description: string;
        };
        why_choose_us_section: {
            slug: string;
            title: string;
            description: string;
            items: Array<{
                icon: string;
                title: string;
                description: string;
                background: string;
                overLayerColor: string;
            }>;
        };
        why_company_section: {
            title: string;
            image: string;
            background: string;
            description: string;
        };
    };
}
