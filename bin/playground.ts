import * as lib from '@lib/index'
import { TSNE } from '@lib/generated/TSNE'

async function main() {
  const py = await lib.createPythonBridge()
  await py.ex`
import numpy as np
from sklearn import preprocessing
from sklearn.manifold import TSNE
def get_tsne(input):
    d = np.array(input)
    tsne = TSNE(n_components=2, random_state=42, perplexity=3)
    o = tsne.fit_transform(d)
    #s = preprocessing.StandardScaler(copy=False).fit(o)
    s = preprocessing.MinMaxScaler(copy=False).fit(o)
    return s.transform(o).tolist()
  `

  const r = await py`get_tsne(${embeddings})`
  console.log(r)

  await py.disconnect()
}

main()
