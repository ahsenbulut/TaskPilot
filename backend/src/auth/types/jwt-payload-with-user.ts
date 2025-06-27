export type JwtPayload = {
  sub: number;
  email: string;
  role: string;
};

export type JwtPayloadWithUser = {
  id: number;
  email: string;
  role: string;
};
