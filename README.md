# Application FAQ

#### Commands:

- `yarn dev` - Start in development mode
- `yarn build` — Build application for production
- `yarn prettier:format` - Format code according to general rules (Prettier)


#### Startup
1. Clone application:
   ```shell
   git clone https://github.com/arsamurai/drop.git
   ```
2. Go to application folder:
   ```shell
   cd drop
   ```
3. Install dependencies yarn:
   ```shell
   yarn install
   ```
4. Set up environment variables
   - For development:
   ```shell
   cp ./env/.env.example ./env/.env.development.local
   ```
   - For production:
   ```shell
   cp ./env/.env.example ./env/.env.production.local
   ```
5. Start application in dev mode:
   ```shell
   yarn dev
   ```
6. Build in production:
   ```shell
   yarn build
   ```
6. Open website in your browser via http://localhost:3000 link.
