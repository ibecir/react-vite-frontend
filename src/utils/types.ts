export type Item = {
    id: number,
    name: string,
    population: number
}

export type Article = {
    id: string,
    thumbnailUrl: string,
    title: string,
    content: string,
    createdAt: string,
    articleType: "SHORT_ARTICLE" | "LONG_ARTICLE"
}

export type User = {
    userId: string,
    userType: string,
    name: string,
    email: string,
    username: string,
    creationDate: string,
    password: string
}