import { sanitizeUserForFrontend } from '~~/server/app/services/userService';
import { H3Event } from "h3"
import { createSession, getSessionByAuthToken } from "~~/server/database/repositories/sessionRepository"
import { v4 as uuidv4 } from 'uuid'
import { User } from '@prisma/client';

export async function makeSession(user: User, event: H3Event): Promise<Session | undefined> {
    const authToken = uuidv4().replaceAll('-', '')
    const session = await createSession({ authToken, userId: user.id })
    setCookie(event, 'auth_token', authToken, { path: '/', httpOnly: true })
    return session;
}
