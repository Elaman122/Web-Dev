export interface Company{
  id: number,
  name: string,
  description: string,
  city: string,
  address: string
}

export interface Vacancy{
  name: string,
  description: string,
  salary: number,
  company: number
}
