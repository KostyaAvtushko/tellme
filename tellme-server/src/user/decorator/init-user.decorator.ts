import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { Request } from 'express';

export const InitUser = createParamDecorator(
  (data: string | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<Request>().body;
    console.log(request);
    if (data) {
      return request;
    }
    return request;
  },
);
