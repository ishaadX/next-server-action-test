"use server";

import { CreateProductInput } from "@/type/product";
import { revalidatePath, revalidateTag } from "next/cache";
import { prisma } from "@/prisma/lib/prisma";
import { NextResponse } from "next/server";

export const getAllProduct = async () => {
  const products = await prisma.product.findMany();
  return NextResponse.json(products);
};
