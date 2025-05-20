import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const add = async (data) => {
    const result = await prisma.Detail.create({ data });
    return result;
};

export const fetchUser = async ( name ) => {
    const result = await prisma.Detail.findUnique({
        where: { name },
    });
    return result;
};
