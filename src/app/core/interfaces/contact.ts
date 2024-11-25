export interface Contact {
    status: number;
    meta: {
        message: string;
        errors: any | null;
    };
    data: {
        first_name: string;
        last_name: string;
        email: string;
        subject: string;
        message: string;
        updated_at: string;
        created_at: string;
        id: number;
    };
}
