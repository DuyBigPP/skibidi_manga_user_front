import { Manga, Genre, ReadingProgress, UserStats } from './types'

// Genres data
export const genres: Genre[] = [
  {
    id: '1',
    name: 'Action',
    slug: 'action',
    description: 'Fast-paced stories with fights and adventures',
    color: 'bg-red-500',
    mangaCount: 1250
  },
  {
    id: '2',
    name: 'Romance',
    slug: 'romance',
    description: 'Stories focused on love and relationships',
    color: 'bg-pink-500',
    mangaCount: 890
  },
  {
    id: '3',
    name: 'Comedy',
    slug: 'comedy',
    description: 'Humorous and funny stories',
    color: 'bg-yellow-500',
    mangaCount: 650
  },
  {
    id: '4',
    name: 'Drama',
    slug: 'drama',
    description: 'Emotional and character-driven stories',
    color: 'bg-purple-500',
    mangaCount: 780
  },
  {
    id: '5',
    name: 'Fantasy',
    slug: 'fantasy',
    description: 'Magical worlds and supernatural elements',
    color: 'bg-blue-500',
    mangaCount: 920
  },
  {
    id: '6',
    name: 'Horror',
    slug: 'horror',
    description: 'Scary and suspenseful stories',
    color: 'bg-gray-800',
    mangaCount: 340
  },
  {
    id: '7',
    name: 'Slice of Life',
    slug: 'slice-of-life',
    description: 'Everyday life stories',
    color: 'bg-green-500',
    mangaCount: 560
  },
  {
    id: '8',
    name: 'Sci-Fi',
    slug: 'sci-fi',
    description: 'Science fiction and futuristic stories',
    color: 'bg-cyan-500',
    mangaCount: 420
  }
]

// Sample manga data
export const mangas: Manga[] = [
  {
    id: '1',
    title: 'Attack on Titan',
    slug: 'attack-on-titan',
    description: 'Humanity fights for survival against giant humanoid Titans',
    coverImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop',
    author: 'Hajime Isayama',
    artist: 'Hajime Isayama',
    status: 'completed',
    rating: 9.2,
    totalChapters: 139,
    latestChapter: 139,
    genres: ['Action', 'Drama', 'Fantasy'],
    tags: ['Military', 'Titans', 'War'],
    publishedYear: 2009,
    viewCount: 15420000,
    bookmarkCount: 892000,
    updatedAt: '2024-09-15T10:30:00Z',
    createdAt: '2009-09-09T00:00:00Z'
  },
  {
    id: '2',
    title: 'One Piece',
    slug: 'one-piece',
    description: 'Monkey D. Luffy explores the Grand Line to become the Pirate King',
    coverImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop',
    author: 'Eiichiro Oda',
    artist: 'Eiichiro Oda',
    status: 'ongoing',
    rating: 9.5,
    totalChapters: 1095,
    latestChapter: 1095,
    genres: ['Action', 'Adventure', 'Comedy'],
    tags: ['Pirates', 'Devil Fruit', 'Friendship'],
    publishedYear: 1997,
    viewCount: 25800000,
    bookmarkCount: 1250000,
    updatedAt: '2024-09-18T14:22:00Z',
    createdAt: '1997-07-22T00:00:00Z'
  },
  {
    id: '3',
    title: 'Death Note',
    slug: 'death-note',
    description: 'A high school student gains the power to kill anyone by writing their name',
    coverImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop',
    author: 'Tsugumi Ohba',
    artist: 'Takeshi Obata',
    status: 'completed',
    rating: 9.0,
    totalChapters: 108,
    latestChapter: 108,
    genres: ['Horror', 'Drama', 'Supernatural'],
    tags: ['Death God', 'Psychology', 'Crime'],
    publishedYear: 2003,
    viewCount: 12300000,
    bookmarkCount: 750000,
    updatedAt: '2024-09-10T09:15:00Z',
    createdAt: '2003-12-01T00:00:00Z'
  },
  {
    id: '4',
    title: 'My Hero Academia',
    slug: 'my-hero-academia',
    description: 'In a world of superheroes, a quirkless boy aims to become the greatest hero',
    coverImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop',
    author: 'Kohei Horikoshi',
    artist: 'Kohei Horikoshi',
    status: 'ongoing',
    rating: 8.8,
    totalChapters: 405,
    latestChapter: 405,
    genres: ['Action', 'School', 'Superhero'],
    tags: ['Quirks', 'Hero School', 'Coming of Age'],
    publishedYear: 2014,
    viewCount: 18900000,
    bookmarkCount: 920000,
    updatedAt: '2024-09-17T16:45:00Z',
    createdAt: '2014-07-07T00:00:00Z'
  },
  {
    id: '5',
    title: 'Demon Slayer',
    slug: 'demon-slayer',
    description: 'A young boy becomes a demon slayer to save his sister',
    coverImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop',
    author: 'Koyoharu Gotouge',
    artist: 'Koyoharu Gotouge',
    status: 'completed',
    rating: 8.7,
    totalChapters: 205,
    latestChapter: 205,
    genres: ['Action', 'Historical', 'Supernatural'],
    tags: ['Demons', 'Sword Fighting', 'Family'],
    publishedYear: 2016,
    viewCount: 16700000,
    bookmarkCount: 845000,
    updatedAt: '2024-09-12T11:20:00Z',
    createdAt: '2016-02-15T00:00:00Z'
  },
  {
    id: '6',
    title: 'Jujutsu Kaisen',
    slug: 'jujutsu-kaisen',
    description: 'High school students fight cursed spirits in modern Japan',
    coverImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop',
    author: 'Gege Akutami',
    artist: 'Gege Akutami',
    status: 'ongoing',
    rating: 8.9,
    totalChapters: 245,
    latestChapter: 245,
    genres: ['Action', 'School', 'Supernatural'],
    tags: ['Cursed Energy', 'Spirits', 'Magic'],
    publishedYear: 2018,
    viewCount: 14200000,
    bookmarkCount: 680000,
    updatedAt: '2024-09-16T13:10:00Z',
    createdAt: '2018-03-05T00:00:00Z'
  },
  {
    id: '7',
    title: 'Chainsaw Man',
    slug: 'chainsaw-man',
    description: 'A young man merges with a chainsaw devil to hunt other devils',
    coverImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop',
    author: 'Tatsuki Fujimoto',
    artist: 'Tatsuki Fujimoto',
    status: 'ongoing',
    rating: 8.6,
    totalChapters: 97,
    latestChapter: 97,
    genres: ['Action', 'Horror', 'Supernatural'],
    tags: ['Devils', 'Gore', 'Dark Comedy'],
    publishedYear: 2018,
    viewCount: 11800000,
    bookmarkCount: 590000,
    updatedAt: '2024-09-14T15:30:00Z',
    createdAt: '2018-12-03T00:00:00Z'
  },
  {
    id: '8',
    title: 'Spy x Family',
    slug: 'spy-x-family',
    description: 'A spy creates a fake family for a mission, not knowing his wife is an assassin',
    coverImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop',
    author: 'Tatsuya Endo',
    artist: 'Tatsuya Endo',
    status: 'ongoing',
    rating: 9.1,
    totalChapters: 89,
    latestChapter: 89,
    genres: ['Comedy', 'Action', 'Slice of Life'],
    tags: ['Spy', 'Family', 'School'],
    publishedYear: 2019,
    viewCount: 13500000,
    bookmarkCount: 720000,
    updatedAt: '2024-09-18T12:00:00Z',
    createdAt: '2019-03-25T00:00:00Z'
  }
]

// Featured manga (homepage hero)
export const featuredManga = mangas[1] // One Piece

// Trending manga this week
export const trendingManga = mangas.slice(0, 6)

// Recently updated manga
export const recentlyUpdated = mangas.filter(manga => manga.status === 'ongoing').slice(0, 8)

// Popular manga
export const popularManga = [...mangas].sort((a, b) => b.viewCount - a.viewCount).slice(0, 10)

// User's reading progress (mock data)
export const userReadingProgress: ReadingProgress[] = [
  {
    mangaId: '2',
    chapterNumber: 1050,
    pageNumber: 15,
    lastReadAt: '2024-09-18T20:30:00Z',
    totalProgress: 95.8
  },
  {
    mangaId: '4',
    chapterNumber: 350,
    pageNumber: 8,
    lastReadAt: '2024-09-17T19:45:00Z',
    totalProgress: 86.4
  },
  {
    mangaId: '6',
    chapterNumber: 200,
    pageNumber: 12,
    lastReadAt: '2024-09-16T22:15:00Z',
    totalProgress: 81.6
  },
  {
    mangaId: '8',
    chapterNumber: 75,
    pageNumber: 20,
    lastReadAt: '2024-09-15T18:20:00Z',
    totalProgress: 84.3
  }
]

// User stats
export const userStats: UserStats = {
  totalMangaRead: 45,
  totalChaptersRead: 1850,
  totalTimeSpent: 14520, // 242 hours
  favoriteGenres: ['Action', 'Fantasy', 'Comedy'],
  readingStreak: 15
}