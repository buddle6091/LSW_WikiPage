export interface Wiki {
    id: number;
    title: string;
    content: string;
}

export interface WikiEdit {
    content: string;
}

export interface WikiAdd {
    title: string;
    content: string;
}