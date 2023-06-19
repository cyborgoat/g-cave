export interface Tag {
    id: number,
    name: string,
}

export interface BlogInfo {
    id: number,
    title: string,
    author: string,
    date: string,
    summary: string,
    tags: Tag[],
    visits: number,
    likes: number,
}

export interface BlogDetail extends BlogInfo {
    content: string,
}