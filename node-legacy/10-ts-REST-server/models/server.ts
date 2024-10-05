import express, { Application } from 'express';
import cors from 'cors';

import userRoutes from '../routes/user.routes';
import db from '../db/connection';

class Server {
  private app: Application;
  private port: string;
  private apiPaths: { [key: string]: string };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '8000';
    this.apiPaths = {
      users: '/api/users',
    };

    // Database
    this.dbConnection();

    // Middlewares
    this.middlewares();

    // Router
    this.routes();
  }

  middlewares(): void {
    // CORS
    this.app.use(cors());

    // Read Body as JSON
    this.app.use(express.json());

    // Public folder
    this.app.use(express.static('public'));
  }

  async dbConnection(): Promise<void> {
    try {
      await db.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      throw new Error(`Error connecting to database: ${error}`);
    }
  }

  routes(): void {
    this.app.use(this.apiPaths.users, userRoutes);
  }

  listen(): void {
    this.app.listen(this.port, () => {
      console.log(`Listening on port: ${this.port}`);
    });
  }
}

export default Server;
