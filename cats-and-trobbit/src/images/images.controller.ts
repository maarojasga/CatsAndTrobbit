import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { ImagesService } from './images.service';

@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  // Endpoint para obtener imágenes aleatorias
  @Get()
  getImages() {
    return this.imagesService.getImages();
  }

  // Endpoint para obtener imágenes favoritas
  @Get('favourites')
  getFavourites() {
    return this.imagesService.getFavourites();
  }

  // Endpoint para agregar una imagen a favoritos
  @Post('favourites/add')
  addFavourite(@Body('imageId') imageId: string) {
    return this.imagesService.addFavourite(imageId);
  }

  // Endpoint para eliminar una imagen de favoritos
  @Delete('/favourites/:favouriteId')
  deleteFavourite(@Param('favouriteId') favouriteId: string) {
    return this.imagesService.deleteFavourite(favouriteId);
  }
}
