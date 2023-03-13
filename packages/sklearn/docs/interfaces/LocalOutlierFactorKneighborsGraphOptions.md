# LocalOutlierFactorKneighborsGraphOptions

## Properties

### X?

> `any`

The query point or points. If not provided, neighbors of each indexed point are returned. In this case, the query point is not considered its own neighbor. For `metric='precomputed'` the shape should be (n\_queries, n\_indexed). Otherwise the shape should be (n\_queries, n\_features).

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:695](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L695)

### mode?

> `"connectivity"` \| `"distance"`

Type of returned matrix: ‘connectivity’ will return the connectivity matrix with ones and zeros, in ‘distance’ the edges are distances between points, type of distance depends on the selected metric parameter in NearestNeighbors class.

#### Default Value

`'connectivity'`

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:707](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L707)

### n\_neighbors?

> `number`

Number of neighbors for each sample. The default is the value passed to the constructor.

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:700](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L700)
