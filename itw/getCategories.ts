interface File {
  filename: string
  category?: string
}

// O(1)
// O(n)
// O(n²)
// O(n log n)
function getCategories(files: File[]): string[] {
  const categories: string[] = []
  if (files !== undefined) {
    for (const file of files) {
      if (file.category !== undefined && !categories.includes(file.category)) {
        categories.push(file.category)
      }
    }
  }

  return categories
}
