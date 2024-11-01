import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class ImagesService {
  private readonly apiKey: string;
  private readonly baseUrl: string;

  constructor(private configService: ConfigService) {
    this.apiKey = this.configService.get<string>('CAT_API_KEY');
    this.baseUrl = this.configService.get<string>('CAT_API_BASE_URL');
  }

  // Método para obtener imágenes aleatorias
  async getImages(): Promise<any> {
    const response = await axios.get(`${this.baseUrl}/images/search`, {
      params: { limit: 10 },
      headers: { 'x-api-key': this.apiKey },
    });
    return response.data;
  }

  // Método para obtener imágenes favoritas
  async getFavourites(): Promise<any> {
    const response = await axios.get(`${this.baseUrl}/favourites`, {
      headers: { 'x-api-key': this.apiKey },
    });
    return response.data;
  }

  // Método para agregar una imagen a favoritos
  async addFavourite(imageId: string): Promise<any> {
    const response = await axios.post(
      `${this.baseUrl}/favourites`,
      { image_id: imageId },
      { headers: { 'x-api-key': this.apiKey } },
    );
    return response.data;
  }

  // Método para eliminar una imagen de favoritos
  async deleteFavourite(favouriteId: string): Promise<any> {
    const response = await axios.delete(`${this.baseUrl}/favourites/${favouriteId}`, {
      headers: { 'x-api-key': this.apiKey },
    });
    return response.data;
  }
}
