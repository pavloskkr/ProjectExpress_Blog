import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

interface UserPayload extends JwtPayload {
    id: string;
    email: string;
}

interface AuthenticatedRequest extends Request {
    user?: UserPayload;
}

export function authenticateToken(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const token = req.header("Authorization")?.split(" ")[1];
    if (!token) {
        console.error("No token provided");
        return res.sendStatus(401);
    }

    console.log("Token provided:", token);
    console.log("Secret:", process.env.JWT_SECRET);

    jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
        if (err) {
            console.error("JWT Verification Error:", err);
            return res.sendStatus(403);
        }

        console.log("Decoded token:", decoded);
        req.user = decoded as UserPayload;
        next();
    });
}
