import { prisma } from "@/lib/prisma"
import { Metadata } from "next"
import Image from "next/image"

interface IUserProfileProps {
  params: {
    id: string
  }
}

export async function generateMetadata({params}: IUserProfileProps): Promise<Metadata> {
  // const user = await prisma.user.findUnique({ where: { id: params.id } })
  // return {title: `User profile of ${user?.name}`}

  return {title: `User profile`}

}

export default async function UserProfile({ params }: IUserProfileProps) {
  // const user = await prisma.user.findUnique({ where: { id: params.id } })

  // const { name, bio, image } = user ?? {}
  // return <div>
  //   <h1>{name}</h1>

  //   <Image width={300} height={300} src={image || ""} alt="User" />

  //   <p>{bio}</p>
  // </div>
  return <div></div>
}
