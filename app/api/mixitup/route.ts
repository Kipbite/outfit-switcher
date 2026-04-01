import { NextRequest, NextResponse } from "next/server";

export async function POST( request: NextRequest ) {
	const body = await request.json();
	const formBody = `data=${ JSON.stringify( body ) }`;

	if ( ! process.env.NEXT_PUBLIC_MIXITUP_WEBHOOK_URL ) {
		return NextResponse.json( { success: false } );
	}

	return await fetch(
		process.env.NEXT_PUBLIC_MIXITUP_WEBHOOK_URL,
		{
			cache: "no-store",
			method: "POST",
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
			},
			body: formBody
		}
	)
		.then( () => NextResponse.json( { success: true } ) )
		.catch( () => NextResponse.json( { success: false } ) )
}