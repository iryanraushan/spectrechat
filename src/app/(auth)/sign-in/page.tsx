"use client";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from 'zod'
import Link from 'next/link'
import {useState} from 'react'
import { useDebounceValue } from 'usehooks-ts'
import { useToast } from "@/components/ui/use-toast"
import { signUpSchema } from "@/schemas/signUpSchema";
import { useRouter } from "next/navigation";

const page = () => {

  const { toast } = useToast()
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [usernameMessage, setUsernameMessage] = useState('')
  const [isCheckingUsername, setIsCheckingUsername] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const debouncedUsername = useDebounceValue(username, 300)

  const form = useForm({
    resolver:zodResolver(signUpSchema)
  })

  return (
    <div>page</div>
  )
}

export default page