# LassoCVPathOptions

## Properties

### X?

> [`ArrayLike`](../types/ArrayLike.md)

Training data. Pass directly as Fortran-contiguous data to avoid unnecessary memory duplication. If `y` is mono-output then `X` can be sparse.

Defined in:  [generated/linear\_model/LassoCV.ts:579](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoCV.ts#L579)

### Xy?

> [`ArrayLike`](../types/ArrayLike.md)

Xy = np.dot(X.T, y) that can be precomputed. It is useful only when the Gram matrix is precomputed.

Defined in:  [generated/linear\_model/LassoCV.ts:615](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoCV.ts#L615)

### alphas?

> [`ArrayLike`](../types/ArrayLike.md)

List of alphas where to compute the models. If `undefined` alphas are set automatically.

Defined in:  [generated/linear\_model/LassoCV.ts:603](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoCV.ts#L603)

### coef\_init?

> [`ArrayLike`](../types/ArrayLike.md)

The initial values of the coefficients.

Defined in:  [generated/linear\_model/LassoCV.ts:627](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoCV.ts#L627)

### copy\_X?

> `boolean`

If `true`, X will be copied; else, it may be overwritten.

#### Default Value

`true`

Defined in:  [generated/linear\_model/LassoCV.ts:622](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoCV.ts#L622)

### eps?

> `number`

Length of the path. `eps=1e-3` means that `alpha\_min / alpha\_max \= 1e-3`.

#### Default Value

`0.001`

Defined in:  [generated/linear\_model/LassoCV.ts:591](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoCV.ts#L591)

### n\_alphas?

> `number`

Number of alphas along the regularization path.

#### Default Value

`100`

Defined in:  [generated/linear\_model/LassoCV.ts:598](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoCV.ts#L598)

### params?

> `any`

Keyword arguments passed to the coordinate descent solver.

Defined in:  [generated/linear\_model/LassoCV.ts:653](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoCV.ts#L653)

### positive?

> `boolean`

If set to `true`, forces coefficients to be positive. (Only allowed when `y.ndim \== 1`).

#### Default Value

`false`

Defined in:  [generated/linear\_model/LassoCV.ts:648](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoCV.ts#L648)

### precompute?

> `boolean` \| [`ArrayLike`](../types/ArrayLike.md)[] \| `"auto"`

Whether to use a precomputed Gram matrix to speed up calculations. If set to `'auto'` let us decide. The Gram matrix can also be passed as argument.

#### Default Value

`'auto'`

Defined in:  [generated/linear\_model/LassoCV.ts:610](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoCV.ts#L610)

### return\_n\_iter?

> `boolean`

Whether to return the number of iterations or not.

#### Default Value

`false`

Defined in:  [generated/linear\_model/LassoCV.ts:641](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoCV.ts#L641)

### verbose?

> `number` \| `boolean`

Amount of verbosity.

#### Default Value

`false`

Defined in:  [generated/linear\_model/LassoCV.ts:634](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoCV.ts#L634)

### y?

> `any`

Target values.

Defined in:  [generated/linear\_model/LassoCV.ts:584](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoCV.ts#L584)
