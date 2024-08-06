import { SetMetadata } from '@nestjs/common';
export const POLICY = 'POLICY';
export const Policy = (policy: string) => SetMetadata(POLICY, policy);
