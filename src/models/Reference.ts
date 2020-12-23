export interface Reference {
  investor: string
  scope_of_work: ScopeOfWork[]
}

export interface ScopeOfWork {
  work: string
  file: {
    relativePath: string
  }
}
