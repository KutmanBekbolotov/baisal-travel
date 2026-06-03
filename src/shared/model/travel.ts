export type TransferRoute = {
  title: string
  region: string
  vehicle: string
  note: string
  image: string
  highlights: string[]
}

export type FleetOption = {
  title: string
  capacity: string
  description: string
}

export const transferRoutes: TransferRoute[] = [
  {
    title: 'Бишкек - Иссык-Куль',
    region: 'Чолпон-Ата / Бостери / Каракол',
    vehicle: 'Седан, минивэн или микроавтобус',
    note: 'Ежедневные поездки для семей, компаний и туристических групп',
    image:
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80',
    highlights: ['встреча у адреса', 'остановки по пути', 'багаж и детские кресла по запросу'],
  },
  {
    title: 'Аэропорт Манас',
    region: 'Встреча и проводы',
    vehicle: 'Комфорт-класс, минивэн, Sprinter',
    note: 'Подача к рейсу, табличка для гостей и помощь с багажом',
    image:
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
    highlights: ['контроль времени прилета', 'ночные рейсы', 'поездки в Бишкек и регионы'],
  },
  {
    title: 'Бишкек - Ош',
    region: 'Межгород по южной трассе',
    vehicle: 'Минивэн или автобус под группу',
    note: 'Перевозки между городами с расчетом маршрута под состав пассажиров',
    image:
      'https://images.pexels.com/photos/17455632/pexels-photo-17455632.jpeg?auto=compress&cs=tinysrgb&w=1600',
    highlights: ['опытные водители', 'план остановок', 'рейсы для командировок и групп'],
  },
]

export const fleetOptions: FleetOption[] = [
  {
    title: 'Седаны',
    capacity: '1-3 пассажира',
    description: 'Для аэропорта, деловых поездок, встреч гостей и быстрых трансферов по городу.',
  },
  {
    title: 'Минивэны',
    capacity: '4-7 пассажиров',
    description: 'Удобный формат для семьи, небольшой группы, туристов с багажом и дальних поездок.',
  },
  {
    title: 'Микроавтобусы и автобусы',
    capacity: '8-50 пассажиров',
    description: 'Для корпоративных выездов, экскурсий, свадеб, спортивных команд и больших групп.',
  },
]

export const stats = [
  { value: '24/7', label: 'прием заявок и рейсов' },
  { value: '1-50', label: 'мест под любой состав' },
  { value: '7', label: 'областей Кыргызстана' },
]

export const services = [
  'Подбираем транспорт под количество пассажиров, багаж и дальность поездки',
  'Встречаем в аэропорту, у отеля, офиса или дома с точной подачей ко времени',
  'Согласуем маршрут, остановки, обратную дорогу и сопровождение группы заранее',
]
