[sklearn](../readme.md) / [Exports](../modules.md) / MultiTaskLassoCVPathOptions

# Interface: MultiTaskLassoCVPathOptions

## Table of contents

### Properties

- [X](MultiTaskLassoCVPathOptions.md#x)
- [Xy](MultiTaskLassoCVPathOptions.md#xy)
- [alphas](MultiTaskLassoCVPathOptions.md#alphas)
- [coef\_init](MultiTaskLassoCVPathOptions.md#coef_init)
- [copy\_X](MultiTaskLassoCVPathOptions.md#copy_x)
- [eps](MultiTaskLassoCVPathOptions.md#eps)
- [n\_alphas](MultiTaskLassoCVPathOptions.md#n_alphas)
- [params](MultiTaskLassoCVPathOptions.md#params)
- [positive](MultiTaskLassoCVPathOptions.md#positive)
- [precompute](MultiTaskLassoCVPathOptions.md#precompute)
- [return\_n\_iter](MultiTaskLassoCVPathOptions.md#return_n_iter)
- [verbose](MultiTaskLassoCVPathOptions.md#verbose)
- [y](MultiTaskLassoCVPathOptions.md#y)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)

Training data. Pass directly as Fortran-contiguous data to avoid unnecessary memory duplication. If `y` is mono-output then `X` can be sparse.

#### Defined in

[generated/linear_model/MultiTaskLassoCV.ts:601](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L601)

___

### Xy

• `Optional` **Xy**: [`ArrayLike`](../modules.md#arraylike)

Xy = np.dot(X.T, y) that can be precomputed. It is useful only when the Gram matrix is precomputed.

#### Defined in

[generated/linear_model/MultiTaskLassoCV.ts:637](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L637)

___

### alphas

• `Optional` **alphas**: [`ArrayLike`](../modules.md#arraylike)

List of alphas where to compute the models. If `undefined` alphas are set automatically.

#### Defined in

[generated/linear_model/MultiTaskLassoCV.ts:625](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L625)

___

### coef\_init

• `Optional` **coef\_init**: [`ArrayLike`](../modules.md#arraylike)

The initial values of the coefficients.

#### Defined in

[generated/linear_model/MultiTaskLassoCV.ts:649](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L649)

___

### copy\_X

• `Optional` **copy\_X**: `boolean`

If `true`, X will be copied; else, it may be overwritten.

**`Default Value`**

`true`

#### Defined in

[generated/linear_model/MultiTaskLassoCV.ts:644](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L644)

___

### eps

• `Optional` **eps**: `number`

Length of the path. `eps=1e-3` means that `alpha\_min / alpha\_max \= 1e-3`.

**`Default Value`**

`0.001`

#### Defined in

[generated/linear_model/MultiTaskLassoCV.ts:613](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L613)

___

### n\_alphas

• `Optional` **n\_alphas**: `number`

Number of alphas along the regularization path.

**`Default Value`**

`100`

#### Defined in

[generated/linear_model/MultiTaskLassoCV.ts:620](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L620)

___

### params

• `Optional` **params**: `any`

Keyword arguments passed to the coordinate descent solver.

#### Defined in

[generated/linear_model/MultiTaskLassoCV.ts:675](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L675)

___

### positive

• `Optional` **positive**: `boolean`

If set to `true`, forces coefficients to be positive. (Only allowed when `y.ndim \== 1`).

**`Default Value`**

`false`

#### Defined in

[generated/linear_model/MultiTaskLassoCV.ts:670](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L670)

___

### precompute

• `Optional` **precompute**: `boolean` \| [`ArrayLike`](../modules.md#arraylike)[] \| ``"auto"``

Whether to use a precomputed Gram matrix to speed up calculations. If set to `'auto'` let us decide. The Gram matrix can also be passed as argument.

**`Default Value`**

`'auto'`

#### Defined in

[generated/linear_model/MultiTaskLassoCV.ts:632](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L632)

___

### return\_n\_iter

• `Optional` **return\_n\_iter**: `boolean`

Whether to return the number of iterations or not.

**`Default Value`**

`false`

#### Defined in

[generated/linear_model/MultiTaskLassoCV.ts:663](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L663)

___

### verbose

• `Optional` **verbose**: `number` \| `boolean`

Amount of verbosity.

**`Default Value`**

`false`

#### Defined in

[generated/linear_model/MultiTaskLassoCV.ts:656](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L656)

___

### y

• `Optional` **y**: `any`

Target values.

#### Defined in

[generated/linear_model/MultiTaskLassoCV.ts:606](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L606)
