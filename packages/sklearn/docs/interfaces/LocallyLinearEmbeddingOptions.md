# LocallyLinearEmbeddingOptions

## Properties

### eigen\_solver?

> `"auto"` \| `"arpack"` \| `"dense"`

The solver used to compute the eigenvectors. The available options are:

#### Default Value

`'auto'`

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:446](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L446)

### hessian\_tol?

> `number`

Tolerance for Hessian eigenmapping method. Only used if `method \== 'hessian'`.

#### Default Value

`0.0001`

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:474](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L474)

### max\_iter?

> `number`

Maximum number of iterations for the arpack solver. Not used if eigen\_solver==’dense’.

#### Default Value

`100`

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:460](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L460)

### method?

> `"standard"` \| `"hessian"` \| `"modified"` \| `"ltsa"`

`standard`: use the standard locally linear embedding algorithm. see reference [\[1\]](#r62e36dd1b056-1)

#### Default Value

`'standard'`

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:467](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L467)

### modified\_tol?

> `number`

Tolerance for modified LLE method. Only used if `method \== 'modified'`.

#### Default Value

`1e-12`

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:481](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L481)

### n\_components?

> `number`

Number of coordinates for the manifold.

#### Default Value

`2`

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:432](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L432)

### n\_jobs?

> `number`

The number of parallel jobs to run. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:498](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L498)

### n\_neighbors?

> `number`

Number of neighbors to consider for each point.

#### Default Value

`5`

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:425](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L425)

### neighbors\_algorithm?

> `"auto"` \| `"ball_tree"` \| `"kd_tree"` \| `"brute"`

Algorithm to use for nearest neighbors search, passed to [`NearestNeighbors`](sklearn.neighbors.NearestNeighbors.html#sklearn.neighbors.NearestNeighbors "sklearn.neighbors.NearestNeighbors") instance.

#### Default Value

`'auto'`

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:488](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L488)

### random\_state?

> `number`

Determines the random number generator when `eigen\_solver` == ‘arpack’. Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:493](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L493)

### reg?

> `number`

Regularization constant, multiplies the trace of the local covariance matrix of the distances.

#### Default Value

`0.001`

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:439](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L439)

### tol?

> `number`

Tolerance for ‘arpack’ method Not used if eigen\_solver==’dense’.

#### Default Value

`0.000001`

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:453](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L453)
