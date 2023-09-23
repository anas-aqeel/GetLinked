import { createDateString } from "@/lib/createDateSrting"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
    let { email, phone_number, team_name, group_size, project_topic, category, privacy_policy_accepted } = await request.json()
    if (email && phone_number && team_name && group_size && project_topic && category && privacy_policy_accepted) {
        let date = createDateString()
        return NextResponse.json(JSON.stringify({
            "id": new Date().getTime(),
            email,
            team_name,
            phone_number,
            project_topic,
            group_size,
            privacy_policy_accepted,
            "date_created": date,
            "last_updated": date,
            "category": category
        }))
    }
    return NextResponse.json(JSON.stringify({
        error: "Please review your registration details before submitting"
    }))
}
