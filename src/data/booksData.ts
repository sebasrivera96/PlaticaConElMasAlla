import { BookData } from '../components/Book'

export const booksData: BookData[] = [
  {
    id: '1',
    title: 'Cien Años de Soledad',
    author: 'Gabriel García Márquez',
    coverImage: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327881361i/320.jpg',
    memberSummaries: [
      {
        memberName: 'Cepeda',
        summary: 'Una obra maestra del realismo mágico que nos transporta a Macondo, un lugar donde lo imposible se vuelve cotidiano. La forma en que García Márquez entrelaza la historia de la familia Buendía con la historia de Colombia es simplemente magistral.'
      },
      {
        memberName: 'Guayo',
        summary: 'Me fascinó cómo el libro explora temas de soledad, destino y la repetición de la historia. Cada generación de los Buendía parece condenada a repetir los errores del pasado, una reflexión profunda sobre la naturaleza humana.'
      },
      {
        memberName: 'Smith',
        summary: 'La prosa de García Márquez es hipnótica. Aunque al principio me costó seguir tantos personajes con nombres similares, una vez que me sumergí en el mundo de Macondo, no pude parar de leer. Una experiencia literaria inolvidable.'
      },
      {
        memberName: 'Sebastián R.',
        summary: 'Lo que más me impactó fue cómo el autor mezcla lo fantástico con lo real de manera tan natural. Remedios la Bella ascendiendo al cielo mientras dobla sábanas es tan creíble como cualquier otro evento del libro. Pura genialidad narrativa.'
      }
    ]
  },
  {
    id: '2',
    title: 'Contra Corriente',
    author: 'Miguel Treviño',
    coverImage: 'https://www.penguinlibros.com/mx/6420963-large_default/contracorriente.webp',
    memberSummaries: [
      {
        memberName: 'Cepeda',
        summary: 'Un libro inspirador que demuestra que el cambio es posible cuando ciudadanos comprometidos deciden actuar. La transformación de San Pedro Garza García es un ejemplo concreto de cómo el poder público puede servir al bien común y no a intereses personales.'
      },
      {
        memberName: 'Guayo',
        summary: 'Me impactó la honestidad con la que Treviño narra los desafíos de gobernar sin la maquinaria de un partido político. El libro ofrece lecciones prácticas sobre cómo implementar transparencia y rendición de cuentas en el gobierno local.'
      },
      {
        memberName: 'Smith',
        summary: 'En un país donde la desilusión política es la norma, este libro ofrece esperanza real. No es un manual teórico, sino la historia vivida de cómo un grupo de personas decidió ir contracorriente y demostró que el buen gobierno es posible.'
      },
      {
        memberName: 'Sebastián R.',
        summary: 'Treviño logra algo difícil: escribir sobre política sin caer en la demagogia. Su enfoque en resultados medibles, seguridad ciudadana y transformación urbana muestra que el liderazgo ético y efectivo no es una utopía, sino una opción real para nuestras ciudades.'
      }
    ]
  }
]
