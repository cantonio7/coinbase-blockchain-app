import  SanityClient  from "@sanity/client";

export const client = SanityClient({
    projectId: 'zpzue0dd',
    dataset: 'production',
    apiVersion: '2022-03-18',
    token: 'sk4JThtNncIOoCBZftkAfS54HysH7kRlcrwU4Fxk1SzEalPHBQJUCJRwxXY8XapH3sjYoeTLPmnP1Jm1tMXZjVdJhTk7zQsF2V1ReL4JhsChDgYoTKRVtSJ6Q6RdgNt4rw0d0pcmE4O9qYz00vFWokSv2esu4chY7kvJGVcMl4igPNjZ7meI',
    useCdn: false,
})