import {API_HOST, API_TOKEN} from "./_settings";
import {BlogDetail, BlogInfo} from "../types/blog";

// Fetch featured blogs
export async function featuredBlogs(): Promise<BlogInfo[]> {
    const response = await fetch(`${API_HOST}/blog/blogs/?limit=9`,
        {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Token ${API_TOKEN}`
            },
            next: { revalidate: 60 },
        })

    if (!response.ok) {
        return [];
    }

    const data = await response.json();

    return data.results;
}

export async function blogList(tag?: string | undefined): Promise<BlogInfo[]> {
    let requestURL = `${API_HOST}/blog/blogs/`

    if (typeof tag != "undefined") {
        requestURL = requestURL.concat(`?tags=${tag}`)
    }




    const response = await fetch(requestURL,
        {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Token ${API_TOKEN}`
            },
            next: { revalidate: 60 },
        })

    if (!response.ok) {
        return []
    }

    const data = await response.json();
    return data.results;
}

export async function blogDetail(id: number): Promise<BlogDetail> {
    const response = await fetch(`${API_HOST}/blog/blogs/${id}`,
        {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Token ${API_TOKEN}`
            },
            next: { revalidate: 60 },
        })

    if (!response.ok) {
        const data: BlogDetail = {
            id: 0,
            title: "",
            author: "",
            date: "",
            summary: "",
            tags: [],
            content: "",
            likes: 0,
            visits: 0,
        };
        return data
    }

    const data = await response.json();
    return data
}