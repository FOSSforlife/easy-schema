# Easy Schema

Goal: Utility web app that takes in a simple database schema written in YAML:

```yaml
user:
  - name
  - birthdate
  - email
  - password
  - followers
  - booksRead

book:
  - author
  - title
# ...
```

...and generates opinionated relational schema definitions in JSON-Schema, Zod, Drizzle, Prisma, TypeORM, Knex, GraphQL Nexus, etc.

## Why?

- To speed up the software development workflow
- To compare readability between different schema languages
- To eliminate vendor lock-in (the eventual goal is to also parse and convert these schema languages)
