import { getAndParseDoc } from '@/parser'

async function main() {
  const doc = await getAndParseDoc(
    // 'https://scikit-learn.org/stable/modules/generated/sklearn.cluster.k_means.html'
    'https://scikit-learn.org/stable/modules/generated/sklearn.cluster.KMeans.html'

    // 'https://scikit-learn.org/stable/modules/generated/sklearn.manifold.TSNE.html'
    // 'https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.PCA.html'
    // 'https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.StandardScaler.html'
  )

  console.log(JSON.stringify(doc, null, 2))
}

main()
