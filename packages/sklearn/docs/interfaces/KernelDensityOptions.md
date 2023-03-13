# KernelDensityOptions

## Properties

### algorithm?

> `"auto"` \| `"ball_tree"` \| `"kd_tree"`

The tree algorithm to use.

#### Default Value

`'auto'`

Defined in:  [generated/neighbors/KernelDensity.ts:335](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L335)

### atol?

> `number`

The desired absolute tolerance of the result. A larger tolerance will generally lead to faster execution.

#### Default Value

`0`

Defined in:  [generated/neighbors/KernelDensity.ts:364](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L364)

### bandwidth?

> `number` \| `"scott"` \| `"silverman"`

The bandwidth of the kernel. If bandwidth is a float, it defines the bandwidth of the kernel. If bandwidth is a string, one of the estimation methods is implemented.

#### Default Value

`1`

Defined in:  [generated/neighbors/KernelDensity.ts:328](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L328)

### breadth\_first?

> `boolean`

If true (default), use a breadth-first approach to the problem. Otherwise use a depth-first approach.

#### Default Value

`true`

Defined in:  [generated/neighbors/KernelDensity.ts:378](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L378)

### kernel?

> `"linear"` \| `"cosine"` \| `"exponential"` \| `"gaussian"` \| `"tophat"` \| `"epanechnikov"`

The kernel to use.

#### Default Value

`'gaussian'`

Defined in:  [generated/neighbors/KernelDensity.ts:342](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L342)

### leaf\_size?

> `number`

Specify the leaf size of the underlying tree. See [`BallTree`](sklearn.neighbors.BallTree.html#sklearn.neighbors.BallTree "sklearn.neighbors.BallTree") or [`KDTree`](sklearn.neighbors.KDTree.html#sklearn.neighbors.KDTree "sklearn.neighbors.KDTree") for details.

#### Default Value

`40`

Defined in:  [generated/neighbors/KernelDensity.ts:385](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L385)

### metric?

> `string`

Metric to use for distance computation. See the documentation of [scipy.spatial.distance](https://docs.scipy.org/doc/scipy/reference/spatial.distance.html) and the metrics listed in [`distance\_metrics`](sklearn.metrics.pairwise.distance_metrics.html#sklearn.metrics.pairwise.distance_metrics "sklearn.metrics.pairwise.distance_metrics") for valid metric values.

Not all metrics are valid with all algorithms: refer to the documentation of [`BallTree`](sklearn.neighbors.BallTree.html#sklearn.neighbors.BallTree "sklearn.neighbors.BallTree") and [`KDTree`](sklearn.neighbors.KDTree.html#sklearn.neighbors.KDTree "sklearn.neighbors.KDTree"). Note that the normalization of the density output is correct only for the Euclidean distance metric.

#### Default Value

`'euclidean'`

Defined in:  [generated/neighbors/KernelDensity.ts:357](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L357)

### metric\_params?

> `any`

Additional parameters to be passed to the tree for use with the metric. For more information, see the documentation of [`BallTree`](sklearn.neighbors.BallTree.html#sklearn.neighbors.BallTree "sklearn.neighbors.BallTree") or [`KDTree`](sklearn.neighbors.KDTree.html#sklearn.neighbors.KDTree "sklearn.neighbors.KDTree").

Defined in:  [generated/neighbors/KernelDensity.ts:390](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L390)

### rtol?

> `number`

The desired relative tolerance of the result. A larger tolerance will generally lead to faster execution.

#### Default Value

`0`

Defined in:  [generated/neighbors/KernelDensity.ts:371](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L371)
