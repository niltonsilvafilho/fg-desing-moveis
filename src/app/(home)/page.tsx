"use client";

import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "./components/productList";
import SectionTitle from "./components/section-title";
import PromoBanner from "./components/promo-banner";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercent: {
        gt: 0,
      },
    },
  });

  const nichos = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "nichos",
      },
    },
  });

  const racks = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "rack",
      },
    },
  });
  return (
    <div className="flex flex-col gap-8 py-8">
      <PromoBanner src="/desconto-teste.png" alt="desconto" />

      <div className="px-5">
        <Categories />
      </div>

      <div>
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={deals} />
      </div>

      <PromoBanner src="/desconto-teste.png" alt="desconto" />

      <div>
        <SectionTitle>Nichos</SectionTitle>
        <ProductList products={nichos} />
      </div>

      <PromoBanner src="/desconto-teste.png" alt="desconto" />

      <div>
        <SectionTitle>Racks</SectionTitle>
        <ProductList products={racks} />
      </div>
    </div>
  );
}
