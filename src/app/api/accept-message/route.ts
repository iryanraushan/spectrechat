import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User.model";
import { User } from "next-auth";

export async function POST(request: Request) {
  await dbConnect();

  const session = getServerSession(authOptions);
  const user: User = (session as any)?.user;

  if (!session || !(session as any).user) {
    return Response.json(
      {
        success: false,
        message: "Not authenticated",
      },
      {
        status: 401,
      }
    );
  }

  const userId = user._id;

  const { acceptMessage } = await request.json();

  try {

    const updatedUser = await UserModel.findById(
      userId,
      {
        isAcceptingMessage : acceptMessage
      },
      {
        new : true
      }
    )

    if (!updatedUser){
      return Response.json(
      {
        success: false,
        message: "Failed to update status to accept message",
      },
      {
        status: 401,
      }
    );
    }
    
    return Response.json(
      {
        success: true,
        message: "Message acceptance status updated successfully", updatedUser,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log("Failed to update status to accept message");
    
    return Response.json(
      {
        success: false,
        message: "Failed to update status to accept message",
      },
      {
        status: 500,
      }
    );
  }

}

export async function GET(request:Request){
  await dbConnect()
  const session = getServerSession(authOptions);
    const user: User = (session as any)?.user;

    if (!session || !(session as any).user) {
      return Response.json(
        {
          success: false,
          message: "Not authenticated",
        },
        {
          status: 401,
        }
      );
    }

  const userId = user._id;

  try {
     const foundUser = await UserModel.findById(userId)
  if (!foundUser){
        return Response.json(
        {
          success: false,
          message: "User not found",
        },
        {
          status: 404,
        }
      );
    }

     return Response.json(
        {
          success: true,
          isAcceptingMessage:foundUser.isAcceptingMessage,
        },
        {
          status: 200,
        }
      );
  } catch (error) {
    console.log("Error in getting message acceptance status");
    
    return Response.json(
      {
        success: false,
        message: "Error in getting message acceptance status",
      },
      {
        status: 500,
      }
    );
  }
 
}