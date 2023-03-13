# BallTreeKernelDensityOptions

## Properties

### X?

> [`ArrayLike`](../types/ArrayLike.md)[]

An array of points to query. Last dimension should match dimension of training data.

Defined in:  [generated/neighbors/BallTree.ts:390](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/BallTree.ts#L390)

### atol?

> `number`

Specify the desired absolute tolerance of the result. If the true result is `K\_true`, then the returned result `K\_ret` satisfies `abs(K\_true \- K\_ret) < atol + rtol \* K\_ret` The default is zero (i.e. machine precision).

#### Default Value

`0`

Defined in:  [generated/neighbors/BallTree.ts:409](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/BallTree.ts#L409)

### breadth\_first?

> `boolean`

If `true`, use a breadth-first search. If `false` (default) use a depth-first search. Breadth-first is generally faster for compact kernels and/or high tolerances.

#### Default Value

`false`

Defined in:  [generated/neighbors/BallTree.ts:423](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/BallTree.ts#L423)

### h?

> `number`

the bandwidth of the kernel

Defined in:  [generated/neighbors/BallTree.ts:395](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/BallTree.ts#L395)

### kernel?

> `string`

specify the kernel to use. Options are - ‘gaussian’ - ‘tophat’ - ‘epanechnikov’ - ‘exponential’ - ‘linear’ - ‘cosine’ Default is kernel = ‘gaussian’

#### Default Value

`'gaussian'`

Defined in:  [generated/neighbors/BallTree.ts:402](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/BallTree.ts#L402)

### return\_log?

> `boolean`

Return the logarithm of the result. This can be more accurate than returning the result itself for narrow kernels.

#### Default Value

`false`

Defined in:  [generated/neighbors/BallTree.ts:430](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/BallTree.ts#L430)

### rtol?

> `number`

Specify the desired relative tolerance of the result. If the true result is `K\_true`, then the returned result `K\_ret` satisfies `abs(K\_true \- K\_ret) < atol + rtol \* K\_ret` The default is `1e-8` (i.e. machine precision).

#### Default Value

`1e-8`

Defined in:  [generated/neighbors/BallTree.ts:416](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/BallTree.ts#L416)
