import  prisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export const PUT =  async ( req: NextRequest,{ params }: { params: { intent_Id: string } }) => {

  
  const { intent_Id } = params;

   console.log("Boy" + intent_Id)
  try {
    await prisma.order.update({
      where: {
        intent_id: intent_Id,
      },
      data: { status: "Being prepared!" },
    });
    return new NextResponse(
      JSON.stringify({ message: "Order has been updated" }),
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};