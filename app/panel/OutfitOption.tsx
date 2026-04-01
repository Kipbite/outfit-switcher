'use client'
import { Dispatch } from "react";
/* eslint-disable @next/next/no-img-element */

import { attemptPurchase } from "../lib";

interface Props {
	text: string
	imageUrl: string
	cooldownAmount: number
	onCooldown: boolean
	setOnCooldown: Dispatch<boolean>
	price?: number
};

export default function OutfitOption( {
	text,
	imageUrl,
	price,
	cooldownAmount,
	onCooldown,
	setOnCooldown
}: Props ) {
	async function handleClick() {
		if ( onCooldown ) return;

		setOnCooldown( true );
		setTimeout(
			() => setOnCooldown( false ),
			cooldownAmount
		);

		const success = await attemptPurchase( text );
		console.log( 'success: ', success );
	}

	return (
		<button className="outfit-option" onClick={ handleClick } disabled={ onCooldown }>
			<img
				src={ imageUrl }
				width={ 50 }
				height={ 50 }
				alt={ text }
			/>
			<span className="label">{ text }</span>
			{ price &&
				<span className="price">{ price } bits</span>
			}
		</button>
	);
}