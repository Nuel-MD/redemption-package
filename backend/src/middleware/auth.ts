import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { adminRouter } from '../routes/admin';

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET as string, (err, user) => {
    if (err) return res.sendStatus(403);
    (req as any).user = user;
    next();
  });
};

// Use the middleware on protected routes
app.use('/api/admin', authenticateToken, adminRouter);