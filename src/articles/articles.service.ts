import { Injectable } from '@nestjs/common';
import { IArticle } from './articles.interface';

@Injectable()
export class ArticlesService {

  private readonly articles: IArticle[] = [
    {
      title: 'Lorem ipsum article 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu egestas sapien. Integer in vestibulum lectus. Vivamus dui nulla, efficitur quis bibendum at, sodales sed nunc. Aenean fringilla molestie dolor, ac eleifend odio consectetur sit amet. Quisque ut sapien a massa fermentum vulputate et nec est. Etiam posuere aliquam metus at ornare. Integer dapibus pharetra dui, in tincidunt enim molestie id.',
      owner: 'israel.lavi@gmail.com',
      ownerName: 'Israel Lavi',
    },
    {
      title: 'Lorem ipsum article 2',
      description: 'Nulla augue nisl, commodo ut imperdiet sit amet, auctor et turpis. Nunc feugiat tortor eu tortor porttitor facilisis. Praesent vulputate convallis nibh, nec tristique tellus mollis in. Pellentesque at finibus neque. Integer vel magna quam. Morbi odio mi, faucibus non varius sit amet, lobortis ac mauris. Duis nec cursus tortor, in sollicitudin purus. Proin condimentum enim nec tristique sagittis. Proin id tellus vel nisl scelerisque rutrum. Etiam quis ultricies purus. Proin non urna sodales, luctus elit id, viverra massa.',
      owner: 'yossi.buzaglo@gmail.com',
      ownerName: 'Yossi Buzaglo',
    },
    {
      title: 'Lorem ipsum article 3',
      description: 'In rhoncus, magna eget varius dapibus, quam dolor tempor neque, in sagittis nulla eros sit amet nulla. Cras efficitur diam quis lacus blandit lacinia. Phasellus ut libero massa. Vestibulum lobortis quam vel eros semper lacinia. Nulla id vestibulum arcu. Proin a massa tincidunt, pulvinar odio at, pretium orci. Nulla aliquet sed lectus ut sodales.',
      owner: 'dany.din@gmail.com',
      ownerName: 'Dany Din',
    },
    {
      title: 'Lorem ipsum article 4',
      description: 'Nulla lacinia finibus nulla non bibendum. Proin ante metus, aliquet quis volutpat at, varius id massa. Praesent convallis aliquam tellus vitae pellentesque. Morbi viverra ipsum neque, vitae pretium nunc commodo tristique. Nulla imperdiet libero eget purus finibus, eget dignissim eros tincidunt. Quisque varius mi sed ipsum pretium accumsan. Proin et nisi augue.',
      owner: 'ronaldo.levi@gmail.com',
      ownerName: 'Ronaldo Levi',
    },
    {
      title: 'Lorem ipsum article 5',
      description: 'Sed ut sagittis elit, at pulvinar metus. Quisque lectus massa, ultrices vel magna ac, luctus auctor mi. Aenean vulputate ullamcorper sapien at pulvinar. Etiam porta porttitor nulla, vitae elementum nisi pellentesque ut. Vivamus eleifend semper nisi, et efficitur velit malesuada vitae. Maecenas interdum elementum placerat. Aenean non elementum enim, molestie aliquet magna.',
      owner: 'moshe.mizrachi@gmail.com',
      ownerName: 'Moshe Mizrahi',
    },
    {
      title: 'Lorem ipsum article 6',
      description: 'Phasellus et iaculis leo, eu egestas odio. Nunc non libero vitae elit interdum accumsan vel quis lorem. In vehicula arcu leo, non placerat velit mollis id. In sit amet arcu elementum, suscipit diam quis, efficitur nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      owner: 'israel.lavi@gmail.com',
      ownerName: 'Israel Lavi',
    },
  ];

  async findByOwnerEmail(ownerEmail: string): Promise<IArticle[] | undefined> {
    return this.articles.filter(item => item.owner === ownerEmail);
  }

  async findAll(): Promise<IArticle[]> {
    return this.articles;
  }
}
