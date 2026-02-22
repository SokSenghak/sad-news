export interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  imageUrl: string;
  excerpt?: string;
  author?: string;
}

export const CATEGORIES = [
  { id: 'entertainment', name: 'កម្សាន្ត', color: 'bg-sabay-red' },
  { id: 'tech', name: 'បច្ចេកវិទ្យា', color: 'bg-blue-600' },
  { id: 'life', name: 'ជីវិតនិងសង្គម', color: 'bg-green-600' },
  { id: 'sports', name: 'កីឡា', color: 'bg-red-600' },
  { id: 'auto', name: 'AUTO TALK', color: 'bg-gray-800' },
];

export const MOCK_NEWS: NewsItem[] = [
  {
    id: '1',
    title: 'Bill Gates បដិសេធថា លោកមិនបានឆ្លងជំងឺតាមរយៈ STD ក្រោយបញ្ចេញរឿងអាស្រូវថ្មីៗនេះ',
    category: 'បច្ចេកវិទ្យា',
    date: 'ច័ន្ទ, 2 កុម្ភៈ 2026 11:58',
    imageUrl: 'https://picsum.photos/seed/bill/800/450',
    excerpt: 'កាលពីពេលថ្មីៗនេះ លោក Bill Gates បានចេញមុខបដិសេធរាល់ការចោទប្រកាន់នានាដែលទាក់ទងនឹងសុខភាពផ្ទាល់ខ្លួនរបស់លោក...',
  },
  {
    id: '2',
    title: 'លាទាំងអាល័យ! ប្រជាជនចិន រំភើបចិត្តខ្លាំង ស្រក់ទឹកភ្នែក ខណៈខ្លាឃ្មុំផេនដា ត្រូវត្រឡប់ទៅចិនវិញ',
    category: 'ជីវិតនិងសង្គម',
    date: 'ពុធ, 28 មករា 2026 10:51',
    imageUrl: 'https://picsum.photos/seed/panda/800/450',
  },
  {
    id: '3',
    title: 'មោទកភាព! អាល់ប៊ុម Tena បញ្ចេញបទថ្មី "Turn on" ច្រៀង ft ជាមួយ Rakhie និង Meezy24k',
    category: 'កម្សាន្ត',
    date: 'ច័ន្ទ, 26 មករា 2026 11:59',
    imageUrl: 'https://picsum.photos/seed/tena/800/450',
  },
  {
    id: '4',
    title: 'ពិភពលោក បាត់បង់កំពូលអ្នកច្នៃម៉ូដឆ្នើម អន្តរជាតិ លោក Valentino Garavani',
    category: 'កម្សាន្ត',
    date: 'អង្គារ, 20 មករា 2026 16:55',
    imageUrl: 'https://picsum.photos/seed/fashion/800/450',
  },
  {
    id: '5',
    title: 'សម្រែកផ្អើលអាហ្វ្រិក! គ្រាប់បាល់ Real Madrid និង Dortmund ខណៈ Vinicius ស៊ុត Hat-Trick',
    category: 'កីឡា',
    date: 'ពុធ, 23 តុលា 2024 07:05',
    imageUrl: 'https://picsum.photos/seed/football/800/450',
    excerpt: 'ការប្រកួត UEFA Champions League យប់មិញនេះ ក្នុងវគ្គសន្សំពិន្ទុ Real Madrid និង Dortmund ស៊ុតគ្នាស្ទើរតែបែកបាល់...',
  },
  {
    id: '6',
    title: 'MST Story Night បញ្ចេញ Trailer ជាក់ៗធ្វើឱ្យ មនុស្សរាប់ម៉ឺននាក់នៅកម្ពុជា',
    category: 'កម្សាន្ត',
    date: 'ព្រហស្បតិ៍, 15 មករា 2026',
    imageUrl: 'https://picsum.photos/seed/mst/800/450',
  },
  {
    id: '7',
    title: 'ទម្លាក់ MV ថ្មី ទាំងប្លែក ភ្នែកធំៗ ជាមួយការ ទឹកមុខ Jennie ហិរខ្លាំង',
    category: 'កម្សាន្ត',
    date: 'សុក្រ, 10 មករា 2026',
    imageUrl: 'https://picsum.photos/seed/jennie/800/450',
  },
  {
    id: '8',
    title: 'Fazzio ស៊េរី ២០២៦ មើលទៅសាមញ្ញ តែមានភាពទាក់ទាញ កាន់តែខ្លាំងជាមួយសម័យកាលថ្មី',
    category: 'បច្ចេកវិទ្យា',
    date: 'សៅរ៍, 11 មករា 2026',
    imageUrl: 'https://picsum.photos/seed/scooter/800/450',
  }
];
