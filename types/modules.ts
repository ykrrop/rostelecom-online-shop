import { IProduct } from './common'

export interface IAccordionProps {
  children: React.ReactNode
  title: string
  titleClass: string
  rotateIconClass?: string
}

export interface IMenuLinkItemProps {
  item: {
    id: number
    text: string
    href: string
  }
  handleRedirectToCatalog: (arg0: string) => void
}

export interface ICatalogMenuButtonProps {
  name: string
  isActive: boolean
  handler: VoidFunction
}

export interface IProductsListItemProps {
  item: IProduct
  title?: string
}

export interface IProductLabelProps {
  isNew: boolean
  isBestseller: boolean
}
