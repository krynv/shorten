# Shorten

A GraphQL powered URL shortener 

## Available Schemas

### Create a link
```graphql
mutation createLink {
    createLink(description: "Test", url: "http://flix.industries", hash: "flix") {
        id
    }
}
```

## List all links
```graphql
query links {
    allLinks {
        id
        url
        description
        hash
    }
}
```