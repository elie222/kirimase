export type DBType = "pg" | "mysql" | "sqlite";
export type DBProviderItem = {
  name: string;
  value: string;
  disabled?: string | boolean;
};
export type PackageChoice = {
  name: string;
  value: AvailablePackage;
  disabled?: string | boolean;
};
export type DBProvider =
  | "postgresjs"
  | "node-postgres"
  | "neon"
  | "vercel-pg"
  | "supabase"
  | "aws"
  | "planetscale"
  | "mysql-2"
  | "better-sqlite3";
// | "bun-sqlite";

export type DBProviderOptions = {
  pg: DBProviderItem[];
  mysql: DBProviderItem[];
  sqlite: DBProviderItem[];
};
export type PMType = "npm" | "yarn" | "pnpm" | "bun";

// export type FieldType =
//   | "id"
//   | "string"
//   | "text"
//   | "number"
//   | "references"
//   | "boolean";

export type DrizzleColumnType =
  | pgColumnType
  | mysqlColumnType
  | sqliteColumnType;

export type ColumnType = DrizzleColumnType | PrismaColumnType;

export type DBField<T extends ColumnType = ColumnType> = {
  name: string;
  type: T;
  references?: string;
  notNull?: boolean; // change to required later
  cascade?: boolean;
};

// export type DBField = {
//   name: string;
//   type: DrizzleColumnType;
//   references?: string;
//   notNull?: boolean; // change to required later
//   cascade?: boolean;
// };

// extend type or do a base type with prisma field and drizzle field

export type AvailablePackage =
  | "drizzle"
  | "trpc"
  | "next-auth"
  | "shadcn-ui"
  | "prisma"
  | "clerk"
  | "resend"
  | "lucia";

export type PackageType = "orm" | "auth" | "misc";
export type ORMType = "drizzle" | "prisma";
export type AuthType = "next-auth" | "clerk" | "lucia";
export type MiscType = "shadcn-ui" | "trpc" | "resend";

export type Config = {
  hasSrc: boolean;
  preferredPackageManager: PMType;
  driver: DBType | null;
  provider: DBProvider | null;
  packages: AvailablePackage[];
  orm: ORMType | null;
  auth: AuthType | null;
};

export type UpdateConfig = Partial<Config>;

export type ScaffoldSchema = {
  tableName: string;
  fields: DBField[];
  index?: string;
};

export type pgColumnType =
  | "varchar"
  | "text"
  | "number"
  | "float"
  | "boolean"
  | "references"
  | "timestamp"
  | "date";
// | "json";

export type mysqlColumnType =
  | "varchar"
  | "text"
  | "number"
  | "float"
  | "boolean"
  | "references"
  | "date"
  | "timestamp";
// | "json";

export type sqliteColumnType =
  | "string"
  | "number"
  | "boolean"
  | "date"
  | "timestamp"
  | "references";
// | "blob";

export type PrismaColumnType =
  | "String"
  | "Boolean"
  | "Int"
  | "BigInt"
  | "Float"
  | "Decimal"
  | "Boolean"
  | "DateTime"
  | "References";
// | "Json";

export type DotEnvItem = {
  key: string;
  value: string;
  isUrl?: boolean;
  isOptional?: boolean;
  customZodImplementation?: string;
  public?: boolean;
};
