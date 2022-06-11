import { faker } from '@faker-js/faker';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const randomInt = (min = 0, max = 100): number => {
  return min + Math.floor(Math.random() * max);
};

const randomUser = (): IUser => {
  return {
    name: faker.name.findName(),
    profession: faker.name.jobTitle(),
    progress: randomInt(),
    bio: faker.lorem.sentence(),
    email: faker.internet.email()
  };
};

export interface IUser {
  name: string;
  profession: string;
  progress: number;
  bio: string;
  email: string;
}

export interface UserProps {
  user: IUser;
}

export const USERS: IUser[] = Array.from({ length: 40 }, () => randomUser());
