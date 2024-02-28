# Easy Schema

Goal: Utility web app that takes in a simple database schema written in YAML, for example:

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

- Speeds up software development workflow
- Compare readability between different schema languages
- Eliminate vendor lock-in (the eventual goal is to also parse and convert these schema languages)
