//  let IdParams : {
//   id:string
// }

import prisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (req: NextRequest, { params } : { params: { id: string }} ) => {
  
 const { id } = params;
   console.log("Id", id)

  try {
    const body = await req.json();
    console.log("Body" + body)
    await prisma.order.update({
      where: {
        id: id,
      },
      data: { status: body },
    });
    return new NextResponse(
      JSON.stringify({ messages: "Order has been update!" }),
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
