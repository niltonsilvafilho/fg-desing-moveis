import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    const cozinhaCategory = await prisma.category.create({
      data: {
        name: "Cozinha",
        slug: "cozinha",
        imageUrl:
          "https://cdn.discordapp.com/attachments/1008152302483406879/1194738728736935966/nicho-1.jpeg?ex=65b17226&is=659efd26&hm=14f9865f13cd293286e284cdd81c8548af349cb445827a371975b6624167a12e&",
      },
    });

    const cozinha = [
      {
        name: "Nicho MDF - 30x30",
        slug: "nicho-mdf-fg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://cdn.discordapp.com/attachments/1008152302483406879/1194738728736935966/nicho-1.jpeg?ex=65b17226&is=659efd26&hm=14f9865f13cd293286e284cdd81c8548af349cb445827a371975b6624167a12e&",
          "https://cdn.discordapp.com/attachments/1008152302483406879/1194738728736935966/nicho-1.jpeg?ex=65b17226&is=659efd26&hm=14f9865f13cd293286e284cdd81c8548af349cb445827a371975b6624167a12e&",
          "https://cdn.discordapp.com/attachments/1008152302483406879/1194738728736935966/nicho-1.jpeg?ex=65b17226&is=659efd26&hm=14f9865f13cd293286e284cdd81c8548af349cb445827a371975b6624167a12e&",
          "https://cdn.discordapp.com/attachments/1008152302483406879/1194738728736935966/nicho-1.jpeg?ex=65b17226&is=659efd26&hm=14f9865f13cd293286e284cdd81c8548af349cb445827a371975b6624167a12e&",
        ],
        basePrice: 100,
        categoryId: cozinhaCategory.id,
        discountPercent: 10,
      },
    ];

    await prisma.product.createMany({
      data: cozinha,
    });

    const dormitorioCasalCategory = await prisma.category.create({
      data: {
        name: "Dormitório Casal",
        slug: "dormitoriocasal",
        imageUrl:
          "https://cdn.discordapp.com/attachments/1008152302483406879/1194738728736935966/nicho-1.jpeg?ex=65b17226&is=659efd26&hm=14f9865f13cd293286e284cdd81c8548af349cb445827a371975b6624167a12e&",
      },
    });

    const dormitorioCasal = [
      {
        name: "Nicho MDF - 30x30",
        slug: "nicho-mdf-fg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://cdn.discordapp.com/attachments/1008152302483406879/1194738728736935966/nicho-1.jpeg?ex=65b17226&is=659efd26&hm=14f9865f13cd293286e284cdd81c8548af349cb445827a371975b6624167a12e&",
          "https://cdn.discordapp.com/attachments/1008152302483406879/1194738728736935966/nicho-1.jpeg?ex=65b17226&is=659efd26&hm=14f9865f13cd293286e284cdd81c8548af349cb445827a371975b6624167a12e&",
          "https://cdn.discordapp.com/attachments/1008152302483406879/1194738728736935966/nicho-1.jpeg?ex=65b17226&is=659efd26&hm=14f9865f13cd293286e284cdd81c8548af349cb445827a371975b6624167a12e&",
          "https://cdn.discordapp.com/attachments/1008152302483406879/1194738728736935966/nicho-1.jpeg?ex=65b17226&is=659efd26&hm=14f9865f13cd293286e284cdd81c8548af349cb445827a371975b6624167a12e&",
        ],
        basePrice: 100,
        categoryId: dormitorioCasalCategory.id,
        discountPercent: 10,
      },
    ];

    await prisma.product.createMany({
      data: dormitorioCasal,
    });

    const dormitorioSolteiroCategory = await prisma.category.create({
      data: {
        name: "Dormitório Solteiro",
        slug: "dormitoriosolteiro",
        imageUrl:
          "https://cdn.discordapp.com/attachments/1008152302483406879/1194738728736935966/nicho-1.jpeg?ex=65b17226&is=659efd26&hm=14f9865f13cd293286e284cdd81c8548af349cb445827a371975b6624167a12e&",
      },
    });

    const dormitorioSolteiro = [
      {
        name: "Nicho MDF - 30x30",
        slug: "nicho-mdf-fg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://cdn.discordapp.com/attachments/1008152302483406879/1194738728736935966/nicho-1.jpeg?ex=65b17226&is=659efd26&hm=14f9865f13cd293286e284cdd81c8548af349cb445827a371975b6624167a12e&",
          "https://cdn.discordapp.com/attachments/1008152302483406879/1194738728736935966/nicho-1.jpeg?ex=65b17226&is=659efd26&hm=14f9865f13cd293286e284cdd81c8548af349cb445827a371975b6624167a12e&",
          "https://cdn.discordapp.com/attachments/1008152302483406879/1194738728736935966/nicho-1.jpeg?ex=65b17226&is=659efd26&hm=14f9865f13cd293286e284cdd81c8548af349cb445827a371975b6624167a12e&",
          "https://cdn.discordapp.com/attachments/1008152302483406879/1194738728736935966/nicho-1.jpeg?ex=65b17226&is=659efd26&hm=14f9865f13cd293286e284cdd81c8548af349cb445827a371975b6624167a12e&",
        ],
        basePrice: 100,
        categoryId: dormitorioSolteiroCategory.id,
        discountPercent: 10,
      },
    ];

    await prisma.product.createMany({
      data: dormitorioSolteiro,
    });

    const salaDeEstarCategory = await prisma.category.create({
      data: {
        name: "Sala de Estar",
        slug: "saladeestar",
        imageUrl:
          "https://cdn.discordapp.com/attachments/1008152302483406879/1194738728736935966/nicho-1.jpeg?ex=65b17226&is=659efd26&hm=14f9865f13cd293286e284cdd81c8548af349cb445827a371975b6624167a12e&",
      },
    });

    const salaDeEstar = [
      {
        name: "Nicho MDF - 30x30",
        slug: "nicho-mdf-fg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://cdn.discordapp.com/attachments/1008152302483406879/1194738728736935966/nicho-1.jpeg?ex=65b17226&is=659efd26&hm=14f9865f13cd293286e284cdd81c8548af349cb445827a371975b6624167a12e&",
          "https://cdn.discordapp.com/attachments/1008152302483406879/1194738728736935966/nicho-1.jpeg?ex=65b17226&is=659efd26&hm=14f9865f13cd293286e284cdd81c8548af349cb445827a371975b6624167a12e&",
          "https://cdn.discordapp.com/attachments/1008152302483406879/1194738728736935966/nicho-1.jpeg?ex=65b17226&is=659efd26&hm=14f9865f13cd293286e284cdd81c8548af349cb445827a371975b6624167a12e&",
          "https://cdn.discordapp.com/attachments/1008152302483406879/1194738728736935966/nicho-1.jpeg?ex=65b17226&is=659efd26&hm=14f9865f13cd293286e284cdd81c8548af349cb445827a371975b6624167a12e&",
        ],
        basePrice: 100,
        categoryId: salaDeEstarCategory.id,
        discountPercent: 10,
      },
    ];

    await prisma.product.createMany({
      data: salaDeEstar,
    });

    const banheiroCategory = await prisma.category.create({
      data: {
        name: "Banheiro",
        slug: "banheiro",
        imageUrl:
          "https://cdn.discordapp.com/attachments/1008152302483406879/1194740711585759242/rack.png?ex=65b173fe&is=659efefe&hm=54a6f3b3af04844a4b0a75c64c335ed641e66e1cadbd51f0123dac22e4698787&",
      },
    });

    const banheiro = [
      {
        name: "Rack MDF com Painel p/ TV",
        slug: "rack-com-painel-tv",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://cdn.discordapp.com/attachments/1008152302483406879/1194740711585759242/rack.png?ex=65b173fe&is=659efefe&hm=54a6f3b3af04844a4b0a75c64c335ed641e66e1cadbd51f0123dac22e4698787&",
          "https://cdn.discordapp.com/attachments/1008152302483406879/1194740711585759242/rack.png?ex=65b173fe&is=659efefe&hm=54a6f3b3af04844a4b0a75c64c335ed641e66e1cadbd51f0123dac22e4698787&",
          "https://cdn.discordapp.com/attachments/1008152302483406879/1194740711585759242/rack.png?ex=65b173fe&is=659efefe&hm=54a6f3b3af04844a4b0a75c64c335ed641e66e1cadbd51f0123dac22e4698787&",
          "https://cdn.discordapp.com/attachments/1008152302483406879/1194740711585759242/rack.png?ex=65b173fe&is=659efefe&hm=54a6f3b3af04844a4b0a75c64c335ed641e66e1cadbd51f0123dac22e4698787&",
        ],
        basePrice: 650,
        categoryId: banheiroCategory.id,
        discountPercent: 10,
      },
    ];

    await prisma.product.createMany({
      data: banheiro,
    });

    const outrosCategory = await prisma.category.create({
      data: {
        name: "Outros",
        slug: "outros",
        imageUrl:
          "https://cdn.discordapp.com/attachments/1008152302483406879/1194738728736935966/nicho-1.jpeg?ex=65b17226&is=659efd26&hm=14f9865f13cd293286e284cdd81c8548af349cb445827a371975b6624167a12e&",
      },
    });

    const outros = [
      {
        name: "Nicho MDF - 30x30",
        slug: "nicho-mdf-fg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://cdn.discordapp.com/attachments/1008152302483406879/1194738728736935966/nicho-1.jpeg?ex=65b17226&is=659efd26&hm=14f9865f13cd293286e284cdd81c8548af349cb445827a371975b6624167a12e&",
          "https://cdn.discordapp.com/attachments/1008152302483406879/1194738728736935966/nicho-1.jpeg?ex=65b17226&is=659efd26&hm=14f9865f13cd293286e284cdd81c8548af349cb445827a371975b6624167a12e&",
          "https://cdn.discordapp.com/attachments/1008152302483406879/1194738728736935966/nicho-1.jpeg?ex=65b17226&is=659efd26&hm=14f9865f13cd293286e284cdd81c8548af349cb445827a371975b6624167a12e&",
          "https://cdn.discordapp.com/attachments/1008152302483406879/1194738728736935966/nicho-1.jpeg?ex=65b17226&is=659efd26&hm=14f9865f13cd293286e284cdd81c8548af349cb445827a371975b6624167a12e&",
        ],
        basePrice: 100,
        categoryId: outrosCategory.id,
        discountPercent: 10,
      },
    ];

    await prisma.product.createMany({
      data: outros,
    });

    console.log("Seed completed successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
