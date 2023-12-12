import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ArticlesService } from './articles.service';

@Controller('article')
export class ArticlesController {
  constructor(private articlesService: ArticlesService) {}

  @Get('all')
  getAllArticles() {
    console.log(`[ArticlesController] getAllArticles`);
    return this.articlesService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('my')
  getMyArticles(@Req() req) {
    console.log(`[ArticlesController] getMyArticles`, req.user.email);
    return this.articlesService.findByOwnerEmail(req.user.email);
  }
}
