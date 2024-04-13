// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { integer, pgTableCreator, varchar, serial } from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator(
  (name) => `atlantis-front-end_${name}`,
);

export const posts = createTable("data", {
  id: serial('id').primaryKey(),
  level: integer("Level").notNull(),
  key: varchar("Key", { length: 131 }).notNull(),
  system: varchar("System", { length: 131 }).notNull().notNull(),
  subsystem: varchar("Subsystem", { length: 131 }).notNull().notNull(),
  part_number: varchar("Part Number", { length: 13 }).notNull(),
  part_title: varchar("Part Title", { length: 88 }).notNull(),
  parent: varchar("Parent", { length: 13 }),
  responsible_engineer: varchar("Responsible Engineer", {
    length: 25,
  }).notNull(),
  procurement_code: varchar("Procurement Code", { length: 7 }),
  sub_component_code: varchar("Sub Component Code", { length: 11 }),
  variant: varchar("Variant", { length: 170 }),
});
