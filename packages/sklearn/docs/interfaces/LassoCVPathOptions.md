[sklearn](../readme.md) / [Exports](../modules.md) / LassoCVPathOptions

# Interface: LassoCVPathOptions

## Table of contents

### Properties

- [X](LassoCVPathOptions.md#x)
- [Xy](LassoCVPathOptions.md#xy)
- [alphas](LassoCVPathOptions.md#alphas)
- [coef\_init](LassoCVPathOptions.md#coef_init)
- [copy\_X](LassoCVPathOptions.md#copy_x)
- [eps](LassoCVPathOptions.md#eps)
- [n\_alphas](LassoCVPathOptions.md#n_alphas)
- [params](LassoCVPathOptions.md#params)
- [positive](LassoCVPathOptions.md#positive)
- [precompute](LassoCVPathOptions.md#precompute)
- [return\_n\_iter](LassoCVPathOptions.md#return_n_iter)
- [verbose](LassoCVPathOptions.md#verbose)
- [y](LassoCVPathOptions.md#y)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)

Training data. Pass directly as Fortran-contiguous data to avoid unnecessary memory duplication. If `y` is mono-output then `X` can be sparse.

#### Defined in

[generated/linear_model/LassoCV.ts:579](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoCV.ts#L579)

___

### Xy

• `Optional` **Xy**: [`ArrayLike`](../modules.md#arraylike)

Xy = np.dot(X.T, y) that can be precomputed. It is useful only when the Gram matrix is precomputed.

#### Defined in

[generated/linear_model/LassoCV.ts:615](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoCV.ts#L615)

___

### alphas

• `Optional` **alphas**: [`ArrayLike`](../modules.md#arraylike)

List of alphas where to compute the models. If `undefined` alphas are set automatically.

#### Defined in

[generated/linear_model/LassoCV.ts:603](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoCV.ts#L603)

___

### coef\_init

• `Optional` **coef\_init**: [`ArrayLike`](../modules.md#arraylike)

The initial values of the coefficients.

#### Defined in

[generated/linear_model/LassoCV.ts:627](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoCV.ts#L627)

___

### copy\_X

• `Optional` **copy\_X**: `boolean`

If `true`, X will be copied; else, it may be overwritten.

**`Default Value`**

`true`

#### Defined in

[generated/linear_model/LassoCV.ts:622](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoCV.ts#L622)

___

### eps

• `Optional` **eps**: `number`

Length of the path. `eps=1e-3` means that `alpha\_min / alpha\_max \= 1e-3`.

**`Default Value`**

`0.001`

#### Defined in

[generated/linear_model/LassoCV.ts:591](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoCV.ts#L591)

___

### n\_alphas

• `Optional` **n\_alphas**: `number`

Number of alphas along the regularization path.

**`Default Value`**

`100`

#### Defined in

[generated/linear_model/LassoCV.ts:598](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoCV.ts#L598)

___

### params

• `Optional` **params**: `any`

Keyword arguments passed to the coordinate descent solver.

#### Defined in

[generated/linear_model/LassoCV.ts:653](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoCV.ts#L653)

___

### positive

• `Optional` **positive**: `boolean`

If set to `true`, forces coefficients to be positive. (Only allowed when `y.ndim \== 1`).

**`Default Value`**

`false`

#### Defined in

[generated/linear_model/LassoCV.ts:648](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoCV.ts#L648)

___

### precompute

• `Optional` **precompute**: `boolean` \| [`ArrayLike`](../modules.md#arraylike)[] \| ``"auto"``

Whether to use a precomputed Gram matrix to speed up calculations. If set to `'auto'` let us decide. The Gram matrix can also be passed as argument.

**`Default Value`**

`'auto'`

#### Defined in

[generated/linear_model/LassoCV.ts:610](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoCV.ts#L610)

___

### return\_n\_iter

• `Optional` **return\_n\_iter**: `boolean`

Whether to return the number of iterations or not.

**`Default Value`**

`false`

#### Defined in

[generated/linear_model/LassoCV.ts:641](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoCV.ts#L641)

___

### verbose

• `Optional` **verbose**: `number` \| `boolean`

Amount of verbosity.

**`Default Value`**

`false`

#### Defined in

[generated/linear_model/LassoCV.ts:634](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoCV.ts#L634)

___

### y

• `Optional` **y**: `any`

Target values.

#### Defined in

[generated/linear_model/LassoCV.ts:584](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoCV.ts#L584)
