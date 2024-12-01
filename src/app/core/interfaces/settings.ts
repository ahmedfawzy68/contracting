export interface Settings {
    status: number;
    meta: {
        message: string;
        errors: string[] | null;
    };
    data: {
        mobile: string;
        whatsapp: string | null;
        email: string;
        instagram: string | null;
        facebook: string | null;
        twitter: string | null;
        tiktok: string | null;
        snapchat: string | null;
        linkedin: string | null;
        footer_title: string;
        footer_description: string;
        footer_services: string[];
        background: string;
        map_iframe: string;
        profile_pdf: string;
        careers_pdf: string;
        supplier_join_url: string;
        main_branch : {
            address: string;
            email: string;
            mobile: string;
        };
        second_branch:{
            address: string;
            email: string;
            mobile: string;
        }
    };
}
