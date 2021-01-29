export interface AppMenu {
  name: string
  title: string
  page: string
  complete?: boolean
}

export interface MenuGroup {
  name: string
  children: AppMenu[]
}

export const MENUS: MenuGroup[] = [
  {
    name: '基础',
    children: [
      { name: 'Color', title: '颜色', page: '/normal/color', complete: false },
      { name: 'Button', title: '按钮', page: '/normal/button', complete: false }
    ]
  }
]
