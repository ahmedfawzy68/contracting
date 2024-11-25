export interface Portfolio {
    status: number;
    meta: Meta;
    data: ProjectCategory[];
}

export interface Meta {
    message: string;
    errors: any | null;
}

export interface ProjectCategory {
    id: number;
    slug: string;
    name: string;
    projects: Project[];
}

export interface Project {
    id: number;
    image: string;
    project_category_id: number;
}
