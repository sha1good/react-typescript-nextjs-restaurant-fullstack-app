import prisma from "@/utils/connect";
import { getAuthSession } from "@/utils/auth";
import { NextRequest, NextResponse } from "next/server";

//FETCH ALL ORDERS
export const GET = async (req: NextRequest) => {
  const session = await getAuthSession();
  if (session) {
    try {
      if (session.user.isAdmin) {
        const orders = await prisma.order.findMany();
        return new NextResponse(JSON.stringify(orders), { status: 200 });
      }
      const orders = await prisma.order.findMany({
        where: {
          userEmail: session.user.email!,
        },
      });
      return new NextResponse(JSON.stringify(orders), { status: 200 });
    } catch (error) {
      console.log(error);
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong!" }),
        { status: 500 }
      );
    }
  } else {
    return new NextResponse(
      JSON.stringify({ message: "You are unauthenticated! " }),
      { status: 401 }
    );
  }
};

//CREATE ORDERS
export const POST = async (req: NextRequest) => {
  const session = await getAuthSession();
  if (session) {
    const body = await req.json();
    try {
      const order = await prisma.order.create({
        data: body,
      });
      return new NextResponse(JSON.stringify(order), { status: 201 });
    } catch (error) {
      console.log(error);
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong!" }),
        { status: 500 }
      );
    }
  } else {
    return new NextResponse(
      JSON.stringify({ message: "You are unauthenticated! " }),
      { status: 401 }
    );
  }
};
