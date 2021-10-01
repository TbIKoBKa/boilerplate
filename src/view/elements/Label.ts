// Core
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

type AfterIconSize = 'small' | 'big'
type marginType = {
    top?: number | 'auto'
    right?: number | 'auto'
    bottom?: number | 'auto'
    left?: number | 'auto'
}
type textTransformType = 'uppercase' | 'lowercase' | 'none'

interface LabelProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    fontSize?: number
    fontWeight?: number
    afterIcon?: AfterIconSize
    margin?: marginType
    textTransform?: textTransformType
    lineHeight?: 'normal' | number
}

export const Label = styled.p<LabelProps>`
    position: relative;
    ${({ fontSize = 24, fontWeight = 400, afterIcon, margin = { top: 'auto', left: 'auto', right: 'auto', bottom: 'auto' }, textTransform = 'none', lineHeight = 'normal' }) => css`
        
        ${{
        lineHeight:   `${lineHeight === 'normal' ? 'normal' : lineHeight}`,
        fontSize:     `${fontSize}px`,
        fontWeight,
        marginTop:    `${margin.top === 'auto' || !margin.top ? 'auto' : `${margin.top}px`}`,
        marginBottom: `${margin.bottom === 'auto' || !margin.bottom ? 'auto' : `${margin.bottom}px`}`,
        marginRight:  `${margin.right === 'auto' || !margin.right ? 'auto' : `${margin.right}px`}`,
        marginLeft:   `${margin.left === 'auto' || !margin.left ? 'auto' : `${margin.left}px`}`,
        textTransform,
    }}
        ${afterIcon && {
        [ '&::after' ]: {
            content:      '\'\'',
            display:      'inline-block',
            position:     'absolute',
            borderRadius: '50%',
            top:          `${afterIcon === 'big' ? '53px' : '7px'}`,
            right:        `${afterIcon === 'big' ? '-70px' : '-12px'}`,
            width:        `${afterIcon === 'big' ? '37px' : '5px'}`,
            height:       `${afterIcon === 'big' ? '41px' : '6px'}`,
            border:       `${afterIcon === 'big' ? '5px solid #fff' : '1px solid #fff'}`,
        },
    }}
    `}
`;
