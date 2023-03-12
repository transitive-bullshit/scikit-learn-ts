[sklearn](../readme.md) / [Exports](../modules.md) / MultiTaskElasticNetPathOptions

# Interface: MultiTaskElasticNetPathOptions

## Table of contents

### Properties

- [X](MultiTaskElasticNetPathOptions.md#x)
- [Xy](MultiTaskElasticNetPathOptions.md#xy)
- [alphas](MultiTaskElasticNetPathOptions.md#alphas)
- [check\_input](MultiTaskElasticNetPathOptions.md#check_input)
- [coef\_init](MultiTaskElasticNetPathOptions.md#coef_init)
- [copy\_X](MultiTaskElasticNetPathOptions.md#copy_x)
- [eps](MultiTaskElasticNetPathOptions.md#eps)
- [l1\_ratio](MultiTaskElasticNetPathOptions.md#l1_ratio)
- [n\_alphas](MultiTaskElasticNetPathOptions.md#n_alphas)
- [params](MultiTaskElasticNetPathOptions.md#params)
- [positive](MultiTaskElasticNetPathOptions.md#positive)
- [precompute](MultiTaskElasticNetPathOptions.md#precompute)
- [return\_n\_iter](MultiTaskElasticNetPathOptions.md#return_n_iter)
- [verbose](MultiTaskElasticNetPathOptions.md#verbose)
- [y](MultiTaskElasticNetPathOptions.md#y)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)

Training data. Pass directly as Fortran-contiguous data to avoid unnecessary memory duplication. If `y` is mono-output then `X` can be sparse.

#### Defined in

[generated/linear_model/MultiTaskElasticNet.ts:528](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L528)

___

### Xy

• `Optional` **Xy**: [`ArrayLike`](../modules.md#arraylike)

Xy = np.dot(X.T, y) that can be precomputed. It is useful only when the Gram matrix is precomputed.

#### Defined in

[generated/linear_model/MultiTaskElasticNet.ts:571](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L571)

___

### alphas

• `Optional` **alphas**: [`ArrayLike`](../modules.md#arraylike)

List of alphas where to compute the models. If `undefined` alphas are set automatically.

#### Defined in

[generated/linear_model/MultiTaskElasticNet.ts:559](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L559)

___

### check\_input

• `Optional` **check\_input**: `boolean`

If set to `false`, the input validation checks are skipped (including the Gram matrix when provided). It is assumed that they are handled by the caller.

**`Default Value`**

`true`

#### Defined in

[generated/linear_model/MultiTaskElasticNet.ts:611](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L611)

___

### coef\_init

• `Optional` **coef\_init**: [`ArrayLike`](../modules.md#arraylike)

The initial values of the coefficients.

#### Defined in

[generated/linear_model/MultiTaskElasticNet.ts:583](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L583)

___

### copy\_X

• `Optional` **copy\_X**: `boolean`

If `true`, X will be copied; else, it may be overwritten.

**`Default Value`**

`true`

#### Defined in

[generated/linear_model/MultiTaskElasticNet.ts:578](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L578)

___

### eps

• `Optional` **eps**: `number`

Length of the path. `eps=1e-3` means that `alpha\_min / alpha\_max \= 1e-3`.

**`Default Value`**

`0.001`

#### Defined in

[generated/linear_model/MultiTaskElasticNet.ts:547](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L547)

___

### l1\_ratio

• `Optional` **l1\_ratio**: `number`

Number between 0 and 1 passed to elastic net (scaling between l1 and l2 penalties). `l1\_ratio=1` corresponds to the Lasso.

**`Default Value`**

`0.5`

#### Defined in

[generated/linear_model/MultiTaskElasticNet.ts:540](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L540)

___

### n\_alphas

• `Optional` **n\_alphas**: `number`

Number of alphas along the regularization path.

**`Default Value`**

`100`

#### Defined in

[generated/linear_model/MultiTaskElasticNet.ts:554](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L554)

___

### params

• `Optional` **params**: `any`

Keyword arguments passed to the coordinate descent solver.

#### Defined in

[generated/linear_model/MultiTaskElasticNet.ts:616](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L616)

___

### positive

• `Optional` **positive**: `boolean`

If set to `true`, forces coefficients to be positive. (Only allowed when `y.ndim \== 1`).

**`Default Value`**

`false`

#### Defined in

[generated/linear_model/MultiTaskElasticNet.ts:604](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L604)

___

### precompute

• `Optional` **precompute**: `boolean` \| [`ArrayLike`](../modules.md#arraylike)[] \| ``"auto"``

Whether to use a precomputed Gram matrix to speed up calculations. If set to `'auto'` let us decide. The Gram matrix can also be passed as argument.

**`Default Value`**

`'auto'`

#### Defined in

[generated/linear_model/MultiTaskElasticNet.ts:566](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L566)

___

### return\_n\_iter

• `Optional` **return\_n\_iter**: `boolean`

Whether to return the number of iterations or not.

**`Default Value`**

`false`

#### Defined in

[generated/linear_model/MultiTaskElasticNet.ts:597](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L597)

___

### verbose

• `Optional` **verbose**: `number` \| `boolean`

Amount of verbosity.

**`Default Value`**

`false`

#### Defined in

[generated/linear_model/MultiTaskElasticNet.ts:590](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L590)

___

### y

• `Optional` **y**: `any`

Target values.

#### Defined in

[generated/linear_model/MultiTaskElasticNet.ts:533](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L533)
