import { NextResponse } from "next/server"

export async function POST(request: Request) {
    let { email, message, first_name } = await request.json()
    if (email && message && first_name) {

        return NextResponse.json(JSON.stringify({
            "id": new Date().getTime(),
            email,
            first_name,
            message
        }))
    }
    return NextResponse.json(JSON.stringify({
        error: "Please review your registration details before submitting"
    }))
}
