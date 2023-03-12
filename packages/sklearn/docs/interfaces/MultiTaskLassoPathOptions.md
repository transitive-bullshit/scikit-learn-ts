[sklearn](../readme.md) / [Exports](../modules.md) / MultiTaskLassoPathOptions

# Interface: MultiTaskLassoPathOptions

## Table of contents

### Properties

- [X](MultiTaskLassoPathOptions.md#x)
- [Xy](MultiTaskLassoPathOptions.md#xy)
- [alphas](MultiTaskLassoPathOptions.md#alphas)
- [check\_input](MultiTaskLassoPathOptions.md#check_input)
- [coef\_init](MultiTaskLassoPathOptions.md#coef_init)
- [copy\_X](MultiTaskLassoPathOptions.md#copy_x)
- [eps](MultiTaskLassoPathOptions.md#eps)
- [l1\_ratio](MultiTaskLassoPathOptions.md#l1_ratio)
- [n\_alphas](MultiTaskLassoPathOptions.md#n_alphas)
- [params](MultiTaskLassoPathOptions.md#params)
- [positive](MultiTaskLassoPathOptions.md#positive)
- [precompute](MultiTaskLassoPathOptions.md#precompute)
- [return\_n\_iter](MultiTaskLassoPathOptions.md#return_n_iter)
- [verbose](MultiTaskLassoPathOptions.md#verbose)
- [y](MultiTaskLassoPathOptions.md#y)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)

Training data. Pass directly as Fortran-contiguous data to avoid unnecessary memory duplication. If `y` is mono-output then `X` can be sparse.

#### Defined in

[generated/linear_model/MultiTaskLasso.ts:489](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L489)

___

### Xy

• `Optional` **Xy**: [`ArrayLike`](../modules.md#arraylike)

Xy = np.dot(X.T, y) that can be precomputed. It is useful only when the Gram matrix is precomputed.

#### Defined in

[generated/linear_model/MultiTaskLasso.ts:532](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L532)

___

### alphas

• `Optional` **alphas**: [`ArrayLike`](../modules.md#arraylike)

List of alphas where to compute the models. If `undefined` alphas are set automatically.

#### Defined in

[generated/linear_model/MultiTaskLasso.ts:520](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L520)

___

### check\_input

• `Optional` **check\_input**: `boolean`

If set to `false`, the input validation checks are skipped (including the Gram matrix when provided). It is assumed that they are handled by the caller.

**`Default Value`**

`true`

#### Defined in

[generated/linear_model/MultiTaskLasso.ts:572](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L572)

___

### coef\_init

• `Optional` **coef\_init**: [`ArrayLike`](../modules.md#arraylike)

The initial values of the coefficients.

#### Defined in

[generated/linear_model/MultiTaskLasso.ts:544](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L544)

___

### copy\_X

• `Optional` **copy\_X**: `boolean`

If `true`, X will be copied; else, it may be overwritten.

**`Default Value`**

`true`

#### Defined in

[generated/linear_model/MultiTaskLasso.ts:539](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L539)

___

### eps

• `Optional` **eps**: `number`

Length of the path. `eps=1e-3` means that `alpha\_min / alpha\_max \= 1e-3`.

**`Default Value`**

`0.001`

#### Defined in

[generated/linear_model/MultiTaskLasso.ts:508](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L508)

___

### l1\_ratio

• `Optional` **l1\_ratio**: `number`

Number between 0 and 1 passed to elastic net (scaling between l1 and l2 penalties). `l1\_ratio=1` corresponds to the Lasso.

**`Default Value`**

`0.5`

#### Defined in

[generated/linear_model/MultiTaskLasso.ts:501](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L501)

___

### n\_alphas

• `Optional` **n\_alphas**: `number`

Number of alphas along the regularization path.

**`Default Value`**

`100`

#### Defined in

[generated/linear_model/MultiTaskLasso.ts:515](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L515)

___

### params

• `Optional` **params**: `any`

Keyword arguments passed to the coordinate descent solver.

#### Defined in

[generated/linear_model/MultiTaskLasso.ts:577](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L577)

___

### positive

• `Optional` **positive**: `boolean`

If set to `true`, forces coefficients to be positive. (Only allowed when `y.ndim \== 1`).

**`Default Value`**

`false`

#### Defined in

[generated/linear_model/MultiTaskLasso.ts:565](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L565)

___

### precompute

• `Optional` **precompute**: `boolean` \| [`ArrayLike`](../modules.md#arraylike)[] \| ``"auto"``

Whether to use a precomputed Gram matrix to speed up calculations. If set to `'auto'` let us decide. The Gram matrix can also be passed as argument.

**`Default Value`**

`'auto'`

#### Defined in

[generated/linear_model/MultiTaskLasso.ts:527](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L527)

___

### return\_n\_iter

• `Optional` **return\_n\_iter**: `boolean`

Whether to return the number of iterations or not.

**`Default Value`**

`false`

#### Defined in

[generated/linear_model/MultiTaskLasso.ts:558](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L558)

___

### verbose

• `Optional` **verbose**: `number` \| `boolean`

Amount of verbosity.

**`Default Value`**

`false`

#### Defined in

[generated/linear_model/MultiTaskLasso.ts:551](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L551)

___

### y

• `Optional` **y**: `any`

Target values.

#### Defined in

[generated/linear_model/MultiTaskLasso.ts:494](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L494)
