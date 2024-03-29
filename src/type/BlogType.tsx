export interface BlogType {
    id: string;
    category: string;
    species: string;
    tag: string;
    title: string;
    date: string;
    author: string;
    thumbImg: string;
    coverImg: string;
    subImg: Array<string>;
    shortDesc: string;
    description: string;
    slug: string;
}