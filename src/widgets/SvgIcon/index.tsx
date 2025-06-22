import React, { memo } from 'react'
import { Image } from '@widgets/LagacyImage'

import { SVG, SVGs } from './types'

interface SvgIconProps {
	name: SVGs
	size?: number
}

interface SvgDimensionProp {
	name: SVGs
	width: number
	height: number
}

export const SvgDimension = ({ name, width, height }: SvgDimensionProp) => {
	const src = SVG[name]

	return <Image src={src} width={width} height={height} alt={name} />
}

const SvgIcon = ({ name, size = 24 }: SvgIconProps) => {
	const src = SVG[name]

	return <Image src={src} width={size} height={size} alt={name} />
}

export default memo(SvgIcon)
