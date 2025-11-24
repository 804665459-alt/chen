export enum CategoryType {
  PAPER_MODEL = 'PAPER_MODEL',
  GAME_MERCH = 'GAME_MERCH',
  MOVIE_MERCH = 'MOVIE_MERCH',
  ARTIST_TOY = 'ARTIST_TOY',
  DOLL_CLOTHES = 'DOLL_CLOTHES',
  TRADING_CARD = 'TRADING_CARD'
}

export interface Product {
  id: string;
  title: string;
  category: CategoryType;
  pricePerDay: number;
  imageUrl: string;
  isPopular?: boolean;
  description: string;
}

export enum OrderStatus {
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED'
}

export interface Order {
  id: string;
  productId: string;
  productTitle: string;
  productImage: string;
  startDate: string;
  endDate: string;
  totalPrice: number;
  status: OrderStatus;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isLoading?: boolean;
}