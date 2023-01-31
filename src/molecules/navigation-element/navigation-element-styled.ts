import styled from 'styled-components'
import Box from '../../atoms/box'
import { Title } from '../../atoms/typography'
import { themeGet } from '../../utils'
import { NavigationElementProps } from './navigation-element-props'

export type StyledNavigationElementProps = Pick<NavigationElementProps, 'isSelected' | 'isOpen'>

export const getBg = (props: StyledNavigationElementProps): string => (props.isOpen ? themeGet('colors', 'grey20')(props) : 'transparent')

export const getSelectedColor = (props: StyledNavigationElementProps): string => themeGet('colors', props.isSelected ? 'primary100' : 'grey100')(props)

export const getSelectedBg = (props: StyledNavigationElementProps): string => themeGet('colors', props.isSelected ? 'lightButtonHoverBg' : 'transparent')(props)

export const getHoverColor = (props: StyledNavigationElementProps): string => themeGet('colors', props.isOpen ? 'grey80' : 'primary100')(props)

export const getHoverBg = (props: StyledNavigationElementProps): string => themeGet('colors', props.isOpen ? 'errorLight' : 'transparent')(props)

export const StyledNavigationElement = styled(Box)<StyledNavigationElementProps>`

  padding: ${themeGet('space', 'md', '-1px')} ${themeGet('space', 'lg')};
  text-decoration: none;
  color: ${getSelectedColor};
  background-color: ${getSelectedBg};
  cursor: pointer;
  &:hover {
    color: ${getHoverColor};
  }
  & > * {
    align-self: center;
  }
  & > .icon-box {
    flex-shrink: 0;
    padding-right: ${themeGet('space', 'lg')};
    & svg {
      stroke: ${getSelectedColor};
    }
  }
  & > ${Title} {
    flex-grow: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  & > .arrow-box {
    flex-shrink: 0;
    & svg {
      stroke: ${themeGet('colors', 'grey40')};
    }
  }
`
