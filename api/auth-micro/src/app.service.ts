import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { IAnswerPromise, IAnswerService } from './intarface';
import { Auth, AuthDocument } from './schemas/auth.schema';
import { hash, compare } from 'bcryptjs';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Auth.name) private User: Model<AuthDocument>,
    private jwtService: JwtService,
  ) {}

  async register(RegisterDto: RegisterDto): Promise<IAnswerPromise> {
    try {
      const { email, password, name, lastName, roles, permission } =
        RegisterDto;

      const candidate = await this.User.findOne({ email });
      if (candidate) return { message: 'This user already exists' };
      const hashedPassword: string = await hash(password, 12);
      const candidates: any = await this.User.find();
      const user = new this.User({
        email,
        password: hashedPassword,
        name,
        lastName,
        roles,
        permission: candidates.length > 0 ? false : true,
      });

      await user.save();
      const access_token: string = this.jwtService.sign({
        email: user.email,
        _id: user._id,
      });

      const answerService: IAnswerService = {
        email,
        name,
        lastName,
        roles,
        permission: user.permission,
        _id: user._id,
        access_token: `Bearer ${access_token}`,
      };

      return answerService;
    } catch (e) {
      console.log(e);
    }
  }

  async login(loginDto: LoginDto): Promise<IAnswerPromise> {
    try {
      const user = await this.User.findOne({ email: loginDto.email });
      if (!user) return { message: 'You don not have registration' };
      const isMatchPass: boolean = await compare(
        loginDto.password,
        user.password,
      );
      if (!isMatchPass)
        return { message: 'Invalid password, please try again' };
      const access_token: string = this.jwtService.sign({
        email: user.email,
        _id: user._id,
      });
      const answerService: IAnswerService = {
        email: user.email,
        name: user.name,
        lastName: user.lastName,
        roles: user.roles,
        permission: user.permission,
        _id: user._id,
        access_token: `Bearer ${access_token}`,
      };
      return answerService;
    } catch (e) {
      console.log(e);
    }
  }
}
