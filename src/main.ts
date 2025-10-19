import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

   const config = new DocumentBuilder()
    .setTitle('BeFit API')
    .setDescription('API do BeFit (usuários, treinos, etc.)')
    .setVersion('1.0.0')
    .addBearerAuth()
    .build();

  app.enableCors({ origin: true, credentials: true });
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  await app.listen(process.env.PORT ?? 8081);
}
bootstrap();
