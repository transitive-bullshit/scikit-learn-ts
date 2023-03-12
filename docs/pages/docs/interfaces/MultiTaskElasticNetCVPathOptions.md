# MultiTaskElasticNetCVPathOptions

## Properties

### X?

> [`ArrayLike`](../types/ArrayLike.md)

Training data. Pass directly as Fortran-contiguous data to avoid unnecessary memory duplication. If `y` is mono-output then `X` can be sparse.

Defined in:  [generated/linear\_model/MultiTaskElasticNetCV.ts:639](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L639)

### Xy?

> [`ArrayLike`](../types/ArrayLike.md)

Xy = np.dot(X.T, y) that can be precomputed. It is useful only when the Gram matrix is precomputed.

Defined in:  [generated/linear\_model/MultiTaskElasticNetCV.ts:682](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L682)

### alphas?

> [`ArrayLike`](../types/ArrayLike.md)

List of alphas where to compute the models. If `undefined` alphas are set automatically.

Defined in:  [generated/linear\_model/MultiTaskElasticNetCV.ts:670](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L670)

### check\_input?

> `boolean`

If set to `false`, the input validation checks are skipped (including the Gram matrix when provided). It is assumed that they are handled by the caller.

#### Default Value

`true`

Defined in:  [generated/linear\_model/MultiTaskElasticNetCV.ts:722](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L722)

### coef\_init?

> [`ArrayLike`](../types/ArrayLike.md)

The initial values of the coefficients.

Defined in:  [generated/linear\_model/MultiTaskElasticNetCV.ts:694](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L694)

### copy\_X?

> `boolean`

If `true`, X will be copied; else, it may be overwritten.

#### Default Value

`true`

Defined in:  [generated/linear\_model/MultiTaskElasticNetCV.ts:689](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L689)

### eps?

> `number`

Length of the path. `eps=1e-3` means that `alpha\_min / alpha\_max \= 1e-3`.

#### Default Value

`0.001`

Defined in:  [generated/linear\_model/MultiTaskElasticNetCV.ts:658](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L658)

### l1\_ratio?

> `number`

Number between 0 and 1 passed to elastic net (scaling between l1 and l2 penalties). `l1\_ratio=1` corresponds to the Lasso.

#### Default Value

`0.5`

Defined in:  [generated/linear\_model/MultiTaskElasticNetCV.ts:651](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L651)

### n\_alphas?

> `number`

Number of alphas along the regularization path.

#### Default Value

`100`

Defined in:  [generated/linear\_model/MultiTaskElasticNetCV.ts:665](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L665)

### params?

> `any`

Keyword arguments passed to the coordinate descent solver.

Defined in:  [generated/linear\_model/MultiTaskElasticNetCV.ts:727](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L727)

### positive?

> `boolean`

If set to `true`, forces coefficients to be positive. (Only allowed when `y.ndim \== 1`).

#### Default Value

`false`

Defined in:  [generated/linear\_model/MultiTaskElasticNetCV.ts:715](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L715)

### precompute?

> `boolean` \| [`ArrayLike`](../types/ArrayLike.md)[] \| `"auto"`

Whether to use a precomputed Gram matrix to speed up calculations. If set to `'auto'` let us decide. The Gram matrix can also be passed as argument.

#### Default Value

`'auto'`

Defined in:  [generated/linear\_model/MultiTaskElasticNetCV.ts:677](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L677)

### return\_n\_iter?

> `boolean`

Whether to return the number of iterations or not.

#### Default Value

`false`

Defined in:  [generated/linear\_model/MultiTaskElasticNetCV.ts:708](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L708)

### verbose?

> `number` \| `boolean`

Amount of verbosity.

#### Default Value

`false`

Defined in:  [generated/linear\_model/MultiTaskElasticNetCV.ts:701](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L701)

### y?

> `any`

Target values.

Defined in:  [generated/linear\_model/MultiTaskElasticNetCV.ts:644](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L644)
