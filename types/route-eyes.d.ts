declare module 'route-eyes' {
  import { RequestHandler, Request, Response, NextFunction } from 'express';

  export interface RouteEyesOptions {
    block?: boolean;

    log?: boolean;

    banFile?: string;

    onDetect?: (req: Request, res: Response, next?: NextFunction) => void;
  }

  const routeEyes: (options?: RouteEyesOptions) => RequestHandler;

  export = routeEyes;
}
