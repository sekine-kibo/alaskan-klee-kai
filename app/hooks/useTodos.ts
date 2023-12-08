import { API_URL } from '@/constants/url'
import useSWR from 'swr'

async function fetcher(url: string) {
  return await fetch(url).then(res => res.json())
}

export const useTodos = () => {
  const { data, isLoading, error, mutate } = useSWR(
    `${API_URL}/todos`,
    fetcher
  )
  return {
    todos: data,
    isLoading,
    error,
    mutate
  }
}
