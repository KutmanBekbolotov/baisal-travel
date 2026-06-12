export type PageId = 'home' | 'transfers' | 'about' | 'contacts' | 'tours' | 'BMtours' | 'BMtickets' | 'BMinsurance' | 'BMvisa' | 'BMhotels' | 'BMvip-transfers'

export type NavItem = {
  id: PageId
  label: string
}

export const navItems: NavItem[] = [
  { id: 'home', label: 'Главная' },
  { id: 'tours', label: 'Трансферы' },
  { id: 'about', label: 'O нас' },
  { id: 'contacts', label: 'Контакты' },
]

export const burgerLinks: NavItem[] = [
  { id: 'BMtours', label: 'Туры по всему миру' },
  { id: 'BMtickets', label: 'Авиабилеты по всем направлениям' },
  { id: 'BMinsurance', label: 'Страховка' },
  { id: 'BMvisa', label: 'Визовая поддержка' },
  { id: 'BMhotels', label: 'Luxury отели' },
  { id: 'BMvip-transfers', label: 'VIP трансферы' },
]
