export type Tour = {
  title: string
  location: string
  days: string
  price: string
  image: string
  highlights: string[]
}

export const tours: Tour[] = [
  {
    title: 'Aurora Fjords',
    location: 'Норвегия',
    days: '7 дней',
    price: 'от $2 140',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    highlights: ['ледниковый круиз', 'северное сияние', 'smart-гид 24/7'],
  },
  {
    title: 'Neo Tokyo Pulse',
    location: 'Япония',
    days: '9 дней',
    price: 'от $2 880',
    image:
      'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80',
    highlights: ['ночной Токио', 'гастротуры', 'капсульные отели premium'],
  },
  {
    title: 'Glass Desert',
    location: 'ОАЭ',
    days: '5 дней',
    price: 'от $1 590',
    image:
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80',
    highlights: ['дюны на рассвете', 'яхта', 'AR-маршрут по городу'],
  },
]

export const stats = [
  { value: '42', label: 'страны в подборке' },
  { value: '18k', label: 'путешественников' },
  { value: '4.9', label: 'средняя оценка' },
]

export const services = [
  'AI-подбор маршрута под бюджет, даты и ритм отдыха',
  'Отели, трансферы, визовая поддержка и страховка в одном плане',
  'Персональный тревел-оператор на связи до возвращения домой',
]
