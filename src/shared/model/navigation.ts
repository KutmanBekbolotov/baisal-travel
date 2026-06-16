export type PageId = 'home' | 'tours' | 'about' | 'contacts'

export type NavItem = {
  id: PageId
  label: string
}

export const navItems: NavItem[] = [
  { id: 'home', label: 'Главная' },
  { id: 'transfer', label: 'Трансфер' },
  { id: 'about', label: 'O\u00a0нас' },
  { id: 'contacts', label: 'Контакты' },
]
