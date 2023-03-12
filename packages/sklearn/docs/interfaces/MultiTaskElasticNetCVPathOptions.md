[sklearn](../readme.md) / [Exports](../modules.md) / MultiTaskElasticNetCVPathOptions

# Interface: MultiTaskElasticNetCVPathOptions

## Table of contents

### Properties

- [X](MultiTaskElasticNetCVPathOptions.md#x)
- [Xy](MultiTaskElasticNetCVPathOptions.md#xy)
- [alphas](MultiTaskElasticNetCVPathOptions.md#alphas)
- [check\_input](MultiTaskElasticNetCVPathOptions.md#check_input)
- [coef\_init](MultiTaskElasticNetCVPathOptions.md#coef_init)
- [copy\_X](MultiTaskElasticNetCVPathOptions.md#copy_x)
- [eps](MultiTaskElasticNetCVPathOptions.md#eps)
- [l1\_ratio](MultiTaskElasticNetCVPathOptions.md#l1_ratio)
- [n\_alphas](MultiTaskElasticNetCVPathOptions.md#n_alphas)
- [params](MultiTaskElasticNetCVPathOptions.md#params)
- [positive](MultiTaskElasticNetCVPathOptions.md#positive)
- [precompute](MultiTaskElasticNetCVPathOptions.md#precompute)
- [return\_n\_iter](MultiTaskElasticNetCVPathOptions.md#return_n_iter)
- [verbose](MultiTaskElasticNetCVPathOptions.md#verbose)
- [y](MultiTaskElasticNetCVPathOptions.md#y)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)

Training data. Pass directly as Fortran-contiguous data to avoid unnecessary memory duplication. If `y` is mono-output then `X` can be sparse.

#### Defined in

[generated/linear_model/MultiTaskElasticNetCV.ts:639](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L639)

___

### Xy

• `Optional` **Xy**: [`ArrayLike`](../modules.md#arraylike)

Xy = np.dot(X.T, y) that can be precomputed. It is useful only when the Gram matrix is precomputed.

#### Defined in

[generated/linear_model/MultiTaskElasticNetCV.ts:682](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L682)

___

### alphas

• `Optional` **alphas**: [`ArrayLike`](../modules.md#arraylike)

List of alphas where to compute the models. If `undefined` alphas are set automatically.

#### Defined in

[generated/linear_model/MultiTaskElasticNetCV.ts:670](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L670)

___

### check\_input

• `Optional` **check\_input**: `boolean`

If set to `false`, the input validation checks are skipped (including the Gram matrix when provided). It is assumed that they are handled by the caller.

**`Default Value`**

`true`

#### Defined in

[generated/linear_model/MultiTaskElasticNetCV.ts:722](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L722)

___

### coef\_init

• `Optional` **coef\_init**: [`ArrayLike`](../modules.md#arraylike)

The initial values of the coefficients.

#### Defined in

[generated/linear_model/MultiTaskElasticNetCV.ts:694](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L694)

___

### copy\_X

• `Optional` **copy\_X**: `boolean`

If `true`, X will be copied; else, it may be overwritten.

**`Default Value`**

`true`

#### Defined in

[generated/linear_model/MultiTaskElasticNetCV.ts:689](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L689)

___

### eps

• `Optional` **eps**: `number`

Length of the path. `eps=1e-3` means that `alpha\_min / alpha\_max \= 1e-3`.

**`Default Value`**

`0.001`

#### Defined in

[generated/linear_model/MultiTaskElasticNetCV.ts:658](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L658)

___

### l1\_ratio

• `Optional` **l1\_ratio**: `number`

Number between 0 and 1 passed to elastic net (scaling between l1 and l2 penalties). `l1\_ratio=1` corresponds to the Lasso.

**`Default Value`**

`0.5`

#### Defined in

[generated/linear_model/MultiTaskElasticNetCV.ts:651](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L651)

___

### n\_alphas

• `Optional` **n\_alphas**: `number`

Number of alphas along the regularization path.

**`Default Value`**

`100`

#### Defined in

[generated/linear_model/MultiTaskElasticNetCV.ts:665](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L665)

___

### params

• `Optional` **params**: `any`

Keyword arguments passed to the coordinate descent solver.

#### Defined in

[generated/linear_model/MultiTaskElasticNetCV.ts:727](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L727)

___

### positive

• `Optional` **positive**: `boolean`

If set to `true`, forces coefficients to be positive. (Only allowed when `y.ndim \== 1`).

**`Default Value`**

`false`

#### Defined in

[generated/linear_model/MultiTaskElasticNetCV.ts:715](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L715)

___

### precompute

• `Optional` **precompute**: `boolean` \| [`ArrayLike`](../modules.md#arraylike)[] \| ``"auto"``

Whether to use a precomputed Gram matrix to speed up calculations. If set to `'auto'` let us decide. The Gram matrix can also be passed as argument.

**`Default Value`**

`'auto'`

#### Defined in

[generated/linear_model/MultiTaskElasticNetCV.ts:677](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L677)

___

### return\_n\_iter

• `Optional` **return\_n\_iter**: `boolean`

Whether to return the number of iterations or not.

**`Default Value`**

`false`

#### Defined in

[generated/linear_model/MultiTaskElasticNetCV.ts:708](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L708)

___

### verbose

• `Optional` **verbose**: `number` \| `boolean`

Amount of verbosity.

**`Default Value`**

`false`

#### Defined in

[generated/linear_model/MultiTaskElasticNetCV.ts:701](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L701)

___

### y

• `Optional` **y**: `any`

Target values.

#### Defined in

[generated/linear_model/MultiTaskElasticNetCV.ts:644](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L644)
