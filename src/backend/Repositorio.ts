import { PrismaClient } from "@prisma/client";

export default class Repositorio {
  protected static db: PrismaClient = new PrismaClient()
}