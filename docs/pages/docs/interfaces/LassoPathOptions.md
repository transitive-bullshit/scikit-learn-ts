# LassoPathOptions

## Properties

### X?

> [`ArrayLike`](../types/ArrayLike.md)

Training data. Pass directly as Fortran-contiguous data to avoid unnecessary memory duplication. If `y` is mono-output then `X` can be sparse.

Defined in:  [generated/linear\_model/Lasso.ts:489](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/Lasso.ts#L489)

### Xy?

> [`ArrayLike`](../types/ArrayLike.md)

Xy = np.dot(X.T, y) that can be precomputed. It is useful only when the Gram matrix is precomputed.

Defined in:  [generated/linear\_model/Lasso.ts:532](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/Lasso.ts#L532)

### alphas?

> [`ArrayLike`](../types/ArrayLike.md)

List of alphas where to compute the models. If `undefined` alphas are set automatically.

Defined in:  [generated/linear\_model/Lasso.ts:520](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/Lasso.ts#L520)

### check\_input?

> `boolean`

If set to `false`, the input validation checks are skipped (including the Gram matrix when provided). It is assumed that they are handled by the caller.

#### Default Value

`true`

Defined in:  [generated/linear\_model/Lasso.ts:572](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/Lasso.ts#L572)

### coef\_init?

> [`ArrayLike`](../types/ArrayLike.md)

The initial values of the coefficients.

Defined in:  [generated/linear\_model/Lasso.ts:544](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/Lasso.ts#L544)

### copy\_X?

> `boolean`

If `true`, X will be copied; else, it may be overwritten.

#### Default Value

`true`

Defined in:  [generated/linear\_model/Lasso.ts:539](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/Lasso.ts#L539)

### eps?

> `number`

Length of the path. `eps=1e-3` means that `alpha\_min / alpha\_max \= 1e-3`.

#### Default Value

`0.001`

Defined in:  [generated/linear\_model/Lasso.ts:508](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/Lasso.ts#L508)

### l1\_ratio?

> `number`

Number between 0 and 1 passed to elastic net (scaling between l1 and l2 penalties). `l1\_ratio=1` corresponds to the Lasso.

#### Default Value

`0.5`

Defined in:  [generated/linear\_model/Lasso.ts:501](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/Lasso.ts#L501)

### n\_alphas?

> `number`

Number of alphas along the regularization path.

#### Default Value

`100`

Defined in:  [generated/linear\_model/Lasso.ts:515](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/Lasso.ts#L515)

### params?

> `any`

Keyword arguments passed to the coordinate descent solver.

Defined in:  [generated/linear\_model/Lasso.ts:577](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/Lasso.ts#L577)

### positive?

> `boolean`

If set to `true`, forces coefficients to be positive. (Only allowed when `y.ndim \== 1`).

#### Default Value

`false`

Defined in:  [generated/linear\_model/Lasso.ts:565](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/Lasso.ts#L565)

### precompute?

> `boolean` \| [`ArrayLike`](../types/ArrayLike.md)[] \| `"auto"`

Whether to use a precomputed Gram matrix to speed up calculations. If set to `'auto'` let us decide. The Gram matrix can also be passed as argument.

#### Default Value

`'auto'`

Defined in:  [generated/linear\_model/Lasso.ts:527](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/Lasso.ts#L527)

### return\_n\_iter?

> `boolean`

Whether to return the number of iterations or not.

#### Default Value

`false`

Defined in:  [generated/linear\_model/Lasso.ts:558](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/Lasso.ts#L558)

### verbose?

> `number` \| `boolean`

Amount of verbosity.

#### Default Value

`false`

Defined in:  [generated/linear\_model/Lasso.ts:551](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/Lasso.ts#L551)

### y?

> `any`

Target values.

Defined in:  [generated/linear\_model/Lasso.ts:494](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/Lasso.ts#L494)
