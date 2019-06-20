import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Lavage auto')
    .setDescription('Description de l\'API de lavage de voiture')
    .setVersion('1.0')
    .addTag('statuts')
    .addTag('role')
    .addTag('utilisateur')
    .addTag('portefeuille')
    .addTag('type-evenement')
    .addTag('assignation')
    .addTag('portique')
    .addTag('anomalie')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
