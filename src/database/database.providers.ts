import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        'mongodb+srv://kagan:Atgmx6YrWeifungN@dontwaste.59kk1hz.mongodb.net/?retryWrites=true&w=majority',
      ),
  },
];
