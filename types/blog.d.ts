export interface Tag {
    id: number,
    name: string,
}

export interface BlogInfo {
    category: string,
    fname: string,
    title: string,
    author: string,
    date: string,
    summary: string,
    tags: Tag[],
}

export interface BlogDetail extends BlogInfo {
    content: string,
}