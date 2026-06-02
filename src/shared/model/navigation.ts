export type PageId = 'home' | 'tours' | 'about' | 'contacts'

export type NavItem = {
  id: PageId
  label: string
}

export const navItems: NavItem[] = [
  { id: 'home', label: 'Главная' },
  { id: 'tours', label: 'Маршруты' },
  { id: 'about', label: 'О нас' },
  { id: 'contacts', label: 'Контакты' },
]
