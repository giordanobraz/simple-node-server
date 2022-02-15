import prismaClient from "../prisma";

class GetLastMessagesService {
  async execute() {
    const messages = await prismaClient.message.findMany({
      take: 3,
      include: {
        user: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });

    return messages;
  }
}

export { GetLastMessagesService };
