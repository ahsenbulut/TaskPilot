import { ConfigService } from '@nestjs/config';
import { JwtPayloadWithUser, JwtPayload } from '../types/jwt-payload-with-user';
declare const JwtStrategy_base: new (...args: any) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor(config: ConfigService);
    validate(payload: JwtPayload): JwtPayloadWithUser;
}
export {};
