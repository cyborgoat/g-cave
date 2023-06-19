import {Experience} from "../types/experience";
import {API_HOST, API_TOKEN} from "./_settings";

// Fetch featured blogs
export async function experiences(): Promise<Experience[]> {
    const response = await fetch(`${API_HOST}/experience/experiences/`,
        {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Token ${API_TOKEN}`
            },
            next: { revalidate: 60 },
        });

    if (!response.ok) {
        return []
    }
    let data = await response.json();
    return data.results;
}