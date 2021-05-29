import React from 'react';

export default function Select({ register, options, defaultValue, name, ...rest }) {
	return (
		<select {...register(name)} defaultValue="DEFAULT" {...rest}>
			<option value="DEFAULT" disabled hidden>
				{defaultValue}
			</option>
			{options.map((value) => (
				<option key={value} value={value}>
					{value}
				</option>
			))}
		</select>
	);
}
