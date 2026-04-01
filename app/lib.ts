export interface MixitupPayload {
	itemId: string
}

export async function attemptPurchase( itemId: string ) {
	const { success } = await fireMixitupWebhook( { itemId } );

	return success;
}

export async function fireMixitupWebhook( data: MixitupPayload ): Promise<{ success: boolean }> {
	const url = `${ process.env.NEXT_PUBLIC_MIXITUP_WEBHOOK_URL }`;

	return await fetch(
		url,
		{
			cache: "no-store",
			method: "POST",
			body: JSON.stringify( data )
		}
	)
		.then( res => res.json() )
		.catch( e => {
			console.error( e );
			return { success: false }
		} );
}