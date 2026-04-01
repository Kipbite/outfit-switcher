'use client'

import { useState } from "react";
import OutfitOption from "./OutfitOption";

export default function PanelPage() {
	const [ onCooldown, setOnCooldown ] = useState<boolean>( false );

	const baseCooldownAmount = 1000;

	return (
		<main>
			<h2>Hair options</h2>
			<div className="outfit-list">
				<OutfitOption
					text="blue"
					imageUrl="https://placehold.co/50x50/lightblue/black"
					cooldownAmount={ baseCooldownAmount }
					onCooldown={ onCooldown }
					setOnCooldown={ setOnCooldown }
				/>
				<OutfitOption
					text="pink"
					imageUrl="https://placehold.co/50x50/lightpink/black"
					cooldownAmount={ baseCooldownAmount }
					onCooldown={ onCooldown }
					setOnCooldown={ setOnCooldown }
				/>
			</div>
		</main>
	);
}