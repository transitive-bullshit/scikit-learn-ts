# KNeighborsTransformerKneighborsGraphOptions

## Properties

### X?

> `any`

The query point or points. If not provided, neighbors of each indexed point are returned. In this case, the query point is not considered its own neighbor. For `metric='precomputed'` the shape should be (n\_queries, n\_indexed). Otherwise the shape should be (n\_queries, n\_features).

Defined in:  [generated/neighbors/KNeighborsTransformer.ts:602](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L602)

### mode?

> `"connectivity"` \| `"distance"`

Type of returned matrix: ‘connectivity’ will return the connectivity matrix with ones and zeros, in ‘distance’ the edges are distances between points, type of distance depends on the selected metric parameter in NearestNeighbors class.

#### Default Value

`'connectivity'`

Defined in:  [generated/neighbors/KNeighborsTransformer.ts:614](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L614)

### n\_neighbors?

> `number`

Number of neighbors for each sample. The default is the value passed to the constructor.

Defined in:  [generated/neighbors/KNeighborsTransformer.ts:607](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L607)
