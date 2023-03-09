// import { TSNE } from 'sklearn'
import * as sklearn from 'sklearn'
import { KMeans } from 'sklearn'

async function main() {
  const py = await sklearn.createPythonBridge()

  const v = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    [5, 1, 3, 3, 5, 4, 8, 8, 8, 10],
    [2, 8, 7, 10, 0, 9, 2, 4, 9, 1]
  ]

  // const s = new MinMaxScaler()
  // await s.init(py)
  // const res = await s.fit_transform({ X: v })
  // console.log(res)
  // await s.dispose()

  // const s = new TSNE({ perplexity: 2 })
  // await s.init(py)
  // const res = await s.fit_transform({ X: v })
  // console.log(res)
  // await s.dispose()

  const s = new KMeans({ n_clusters: 2, n_init: 'auto' })
  await s.init(py)
  const res = await s.fit_predict({ X: v })
  console.log(res)
  console.log('n_iter', await s.n_iter_)
  const res0 = await s.fit({ X: v })
  console.log(res0)
  const res1 = await s.predict({ X: v })
  console.log(res1)
  await s.dispose()

  // await py.ex`
  // import numpy as np
  // from sklearn import preprocessing
  // from sklearn.manifold import TSNE
  // def get_tsne(input):
  //     d = np.array(input)
  //     tsne = TSNE(n_components=2, random_state=42, perplexity=3)
  //     o = tsne.fit_transform(d)
  //     #o = preprocessing.StandardScaler(copy=False).fit_transform(o)
  //     o = preprocessing.MinMaxScaler(copy=False).fit_transform(o)
  //     return o.tolist()
  //   `
  // const res = await py`get_tsne(${v})`
  // console.log(res)

  await py.disconnect()
}

main()
