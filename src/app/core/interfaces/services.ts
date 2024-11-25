export interface Services {
    status: number;
    meta: {
        message: string;
        errors: any | null;
    };
    data: {
        about_services_section: {
            slug: string;
            title: string;
            description: string;
            image: string;
        };
        services_section: {
            slug: string;
            title: string;
            items: Array<{
                id: number;
                title: string;
                image_path: string;
            }>;
        };
    };
}
