import { BoxProps, Box as MuiBox } from '@mui/material'
import { animated } from '@react-spring/web'
import { Ref, forwardRef } from 'react'
import styled from 'styled-components'

const BoxComp = (props: BoxProps, ref: Ref<unknown> | undefined) => {
	const display = props.display ?? 'flex'
	const flexDirection = props.flexDirection ?? 'column'
	const flexWrap = props.flexWrap ?? 'wrap'
	const boxSizing = props.boxSizing ?? 'border-box'

	return (
		<MuiBox
			{...props}
			// boxShadow="inset 0px 0px 0px 2px #f00;"
			boxSizing={boxSizing}
			ref={ref}
			display={display}
			flexDirection={flexDirection}
			flexWrap={flexWrap}
		/>
	)
}

const BoxRef = forwardRef(BoxComp)
const Box = styled(BoxRef)`
	&.container-md {
		width: 100%;
		max-width: 1560px;
		margin-inline: auto;
	}
`

export default Box
export const AnimatedBox = animated(Box)
