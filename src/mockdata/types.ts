// Manga types
export interface Manga {
  id: string
  title: string
  slug: string
  description: string
  coverImage: string
  author: string
  artist: string
  status: 'ongoing' | 'completed' | 'hiatus'
  rating: number
  totalChapters: number
  latestChapter: number
  genres: string[]
  tags: string[]
  publishedYear: number
  viewCount: number
  bookmarkCount: number
  updatedAt: string
  createdAt: string
}

export interface Chapter {
  id: string
  mangaId: string
  chapterNumber: number
  title: string
  publishedAt: string
  viewCount: number
  pageCount: number
}

export interface Genre {
  id: string
  name: string
  slug: string
  description: string
  color: string
  mangaCount: number
}

export interface ReadingProgress {
  mangaId: string
  chapterNumber: number
  pageNumber: number
  lastReadAt: string
  totalProgress: number // percentage
}

export interface UserStats {
  totalMangaRead: number
  totalChaptersRead: number
  totalTimeSpent: number // in minutes
  favoriteGenres: string[]
  readingStreak: number
}