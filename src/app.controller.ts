import { Body, Controller, Get, Headers, HttpCode, Param, Query, Req, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("App")
@Controller("/app")
export class AppController {
  constructor(private readonly appService: AppService) { }
}

