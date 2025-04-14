import { createMiddleware } from '@mswjs/http-middleware';
import { handlers } from '@/mocks/handlers'; // 핸들러 경로에 맞게 수정

const middleware = createMiddleware(...handlers);
