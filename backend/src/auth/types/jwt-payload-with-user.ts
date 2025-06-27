import { UserRole } from '../../user/user.entity';

export type JwtPayload = {
  sub: number;
  email: string;
  role: UserRole;
};

export type JwtPayloadWithUser = {
  id: number;
  email: string;
  role: UserRole;
};
