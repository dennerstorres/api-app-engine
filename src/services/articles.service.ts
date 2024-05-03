import { Request } from 'express'

import { ServiceAPIResponse } from '../../types/service-response'
import { Article } from '../../types/articles'

const getAll = async (): Promise<ServiceAPIResponse<Article[]>> => {
  /* fetch data here */
  return {
    statusCode: 200,
    body: [
      {
        title: 'Article 1',
        publishedBy: 'Jane Doe',
      },
      {
        title: 'Article 2',
        publishedBy: 'John Smith',
      },
      {
        title: 'Article 3',
        publishedBy: 'Kevin Anderson',
      },
    ],
  }
}

const getById = async (req: Request): Promise<ServiceAPIResponse<Article>> => {
  /* fetch data here */
  /* id: req.params?.id */
  return {
    statusCode: 200,
    body: {
      title: `Article title ${req.params?.id}`,
      publishedBy: 'Publisher Name',
    },
  }
}

export { getAll, getById }
