import { createMiddleware } from '@mswjs/http-middleware';
import { handlers } from '@/mocks/handlers'; // 핸들러 경로에 맞게 수정

const middleware = createMiddleware(...handlers);

export async function GET(req) {
  const { handler } = await middleware(req);
  return handler || new Response('Handled by MSW!', { status: 200 });
}
