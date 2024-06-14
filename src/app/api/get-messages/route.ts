import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User.model";
import { User } from "next-auth";


export async function GET(request:Request) {
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

    const userId = new mongoose.TYpes.ObjectId(user._id);

    try {

        const user = await UserModel.agregate([
            {
                $match: {id:userId}
            },
            {
                $unwind:'$messages'
            },
            {
                $sort:{'messages.createdAt':-1}
            },
            {
                $group:{_id : '$_id', messages : {$push:'$messages'}}
            }
        ])

        if(!user || user.length === 0){
            return Response.json(
                {
                    success: false,
                    message: "User not found",
                },
                {
                    status: 401,
                }
            );
        }

        return Response.json(
            {
                success: true,
                message: user[0].messages,
            },
            {
                status: 200,
            }
        );
        
    } catch (error) {
        console.log("An unexpected error occured : ", error);
        
        return Response.json(
                {
                    success: false,
                    message: "An unexpected error occured : ", error,
                },
                {
                    status: 403,
                }
        );
    }
}