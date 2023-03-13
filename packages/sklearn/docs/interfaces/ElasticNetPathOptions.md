# ElasticNetPathOptions

## Properties

### X?

> [`ArrayLike`](../types/ArrayLike.md)

Training data. Pass directly as Fortran-contiguous data to avoid unnecessary memory duplication. If `y` is mono-output then `X` can be sparse.

Defined in:  [generated/linear\_model/ElasticNet.ts:499](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L499)

### Xy?

> [`ArrayLike`](../types/ArrayLike.md)

Xy = np.dot(X.T, y) that can be precomputed. It is useful only when the Gram matrix is precomputed.

Defined in:  [generated/linear\_model/ElasticNet.ts:542](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L542)

### alphas?

> [`ArrayLike`](../types/ArrayLike.md)

List of alphas where to compute the models. If `undefined` alphas are set automatically.

Defined in:  [generated/linear\_model/ElasticNet.ts:530](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L530)

### check\_input?

> `boolean`

If set to `false`, the input validation checks are skipped (including the Gram matrix when provided). It is assumed that they are handled by the caller.

#### Default Value

`true`

Defined in:  [generated/linear\_model/ElasticNet.ts:582](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L582)

### coef\_init?

> [`ArrayLike`](../types/ArrayLike.md)

The initial values of the coefficients.

Defined in:  [generated/linear\_model/ElasticNet.ts:554](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L554)

### copy\_X?

> `boolean`

If `true`, X will be copied; else, it may be overwritten.

#### Default Value

`true`

Defined in:  [generated/linear\_model/ElasticNet.ts:549](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L549)

### eps?

> `number`

Length of the path. `eps=1e-3` means that `alpha\_min / alpha\_max \= 1e-3`.

#### Default Value

`0.001`

Defined in:  [generated/linear\_model/ElasticNet.ts:518](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L518)

### l1\_ratio?

> `number`

Number between 0 and 1 passed to elastic net (scaling between l1 and l2 penalties). `l1\_ratio=1` corresponds to the Lasso.

#### Default Value

`0.5`

Defined in:  [generated/linear\_model/ElasticNet.ts:511](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L511)

### n\_alphas?

> `number`

Number of alphas along the regularization path.

#### Default Value

`100`

Defined in:  [generated/linear\_model/ElasticNet.ts:525](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L525)

### params?

> `any`

Keyword arguments passed to the coordinate descent solver.

Defined in:  [generated/linear\_model/ElasticNet.ts:587](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L587)

### positive?

> `boolean`

If set to `true`, forces coefficients to be positive. (Only allowed when `y.ndim \== 1`).

#### Default Value

`false`

Defined in:  [generated/linear\_model/ElasticNet.ts:575](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L575)

### precompute?

> `boolean` \| [`ArrayLike`](../types/ArrayLike.md)[] \| `"auto"`

Whether to use a precomputed Gram matrix to speed up calculations. If set to `'auto'` let us decide. The Gram matrix can also be passed as argument.

#### Default Value

`'auto'`

Defined in:  [generated/linear\_model/ElasticNet.ts:537](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L537)

### return\_n\_iter?

> `boolean`

Whether to return the number of iterations or not.

#### Default Value

`false`

Defined in:  [generated/linear\_model/ElasticNet.ts:568](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L568)

### verbose?

> `number` \| `boolean`

Amount of verbosity.

#### Default Value

`false`

Defined in:  [generated/linear\_model/ElasticNet.ts:561](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L561)

### y?

> `any`

Target values.

Defined in:  [generated/linear\_model/ElasticNet.ts:504](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L504)
