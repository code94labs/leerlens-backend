export const ormConfig = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'Nazhimkalam12345',
  database: 'leerlens',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};
