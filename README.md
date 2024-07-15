# Authentication & Dashboard Example

This is a basic example of authentication and a sample dashboard for company and user data.

## User Roles

- System Administrator
- Company Administrator
- User Within Company

## Overview

This is a custom admin dashboard template using the following stack

- Framework - Next.js(App Router)
- Language - TypeScript
- Authentication - NextAuth.js
- Database - Mongodb
- Deployment - TBD
- Styling - Tailwind CSS
- Components - NextUI
- Analytics - TBD
- Formatting - Prettier
- Icons - ReactIcons
- Testing - TBD

NextAuth.js is a complete open source authentication solution.

This is an example application that shows how `next-auth` is applied to a admin dashboard Next.js app.

The deployed version can be found at [`TBD`](https://tbd.net)

### About NextAuthDashboard



Go to [next-auth-dashboard](https://github.com/focus9345/next-auth-dashboard) for more information and documentation.

> 

## Getting Started

### 1. Clone the repository and install dependencies

```
git clone https://github.com/focus9345/next-auth-dashboard
cd next-auth-dashboard
npm install
```

### 2. Configure your local environment

Copy the .env.local.example file in this directory to .env.local (which will be ignored by Git):

```
cp .env.local.example .env.local
```

Add details for one or more providers (e.g. Google, Twitter, GitHub, Email, etc).

#### Database

A database is needed to persist user accounts and to support email sign in. However, you can still use NextAuth.js for authentication without a database by using OAuth for authentication. If you do not specify a database, [JSON Web Tokens](https://jwt.io/introduction) will be enabled by default.

You **can** skip configuring a database and come back to it later if you want.

For more information about setting up a database, please check out the following links:

- Docs: [authjs.dev/reference/core/adapters](https://authjs.dev/reference/core/adapters)

### 3. Configure Authentication Providers

1. Review and update options in `auth.ts` as needed.

2. When setting up OAuth, in the developer admin page for each of your OAuth services, you should configure the callback URL to use a callback path of `{server}/api/auth/callback/{provider}`.

e.g. For Google OAuth you would use: `http://localhost:3000/api/auth/callback/google`

A list of configured providers and their callback URLs is available from the endpoint `api/auth/providers`. You can find more information at https://authjs.dev/getting-started/providers/oauth-tutorial

1. You can also choose to specify an SMTP server for passwordless sign in via email.

### 4. Start the application

To run your site locally, use:

```
npm run dev
```

To run it in production mode, use:

```
npm run build
npm run start
```

### 5. Preparing for Production

Follow the [Deployment TBD](https://tbd.net)

## Acknowledgements

Built by developer Joshua Connor

## License

ISC
