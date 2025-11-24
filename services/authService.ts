import { User } from '../types';

// Simulating a delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const mockLogin = async (): Promise<User> => {
  await delay(800); // Simulate network request
  return {
    id: 'u-123',
    name: 'Somchai Jaidee',
    email: 'somchai@example.com',
    avatarUrl: 'https://picsum.photos/100/100'
  };
};

export const mockLogout = async (): Promise<void> => {
  await delay(500);
};