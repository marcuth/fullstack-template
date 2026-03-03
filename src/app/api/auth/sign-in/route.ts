import { configHelper } from "@/helpers/config.helper"
import { signInSchema } from "@/schemas/users/auth.schema"
import { signIn } from "@/services/auth.service"
import { NextResponse } from "next/server"
import { ZodError } from "zod"

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const validatedData = signInSchema.parse(body)

        const result = await signIn(validatedData)

        const response = NextResponse.json(result, { status: 200 })

        response.cookies.set("refreshToken", result.refreshToken, {
            httpOnly: true,
            secure: configHelper.isProduction,
            sameSite: "strict",
            maxAge: 30 * 24 * 60 * 60, // 30 dias
            path: "/",
        })

        return response
    } catch (error) {
        if (error instanceof ZodError) {
            return NextResponse.json({ errors: error.issues }, { status: 400 })
        }

        const message = error instanceof Error ? error.message : "Erro interno"
        return NextResponse.json({ message }, { status: 401 })
    }
}
