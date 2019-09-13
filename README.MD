# DashboardHero Lite

UI has become increasingly complex - building an admin dashboard has become ridiculous. Modern web development is too slow, and unnecessarily complicated for most use cases.

React and Angular are sharp tools, that unexperienced developers can cut themselves with. Moreover, they are unfit for small teams that don't do UI exclusively.

That's 99% of the market.

We help small to medium sized startups scale their SaaS business fast, by providing a user management, UI and billing solution that's easy to extend and customize.

Build your admin dashboard this week, and start selling!

# Features

1. Fully functional user management

![User login] (https://media.giphy.com/media/eGsPaNngF1Ht9AxNKT/giphy.gif)

## Getting Started

You will need node and npm installed on your system. We've used node version 11, and npm 6. If you run into trouble with a different version, open an issue and we'll try to be helpful.

To get and run the project:

```
git clone https://github.com/dashboard-hero/admin-dashboard-components-lite.git
cd admin-dashboard-components-lite
npm install
npm run dev
```

Docker will be your friend, if all else fails. Get a node docker image, and run
```
docker run -it -v {path-to-dbh-files}:/app -p 3300:3000  dbhLite npm install
```

### Project structure

The UI is built on top of [Adminator](https://github.com/puikinsh/Adminator-admin-dashboard)
It uses [Svelte framework](https://svelte.dev) and [Firebase](https://firebase.com/) for authentication and data persistence.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
