[sklearn](../readme.md) / [Exports](../modules.md) / ElasticNetPathOptions

# Interface: ElasticNetPathOptions

## Table of contents

### Properties

- [X](ElasticNetPathOptions.md#x)
- [Xy](ElasticNetPathOptions.md#xy)
- [alphas](ElasticNetPathOptions.md#alphas)
- [check\_input](ElasticNetPathOptions.md#check_input)
- [coef\_init](ElasticNetPathOptions.md#coef_init)
- [copy\_X](ElasticNetPathOptions.md#copy_x)
- [eps](ElasticNetPathOptions.md#eps)
- [l1\_ratio](ElasticNetPathOptions.md#l1_ratio)
- [n\_alphas](ElasticNetPathOptions.md#n_alphas)
- [params](ElasticNetPathOptions.md#params)
- [positive](ElasticNetPathOptions.md#positive)
- [precompute](ElasticNetPathOptions.md#precompute)
- [return\_n\_iter](ElasticNetPathOptions.md#return_n_iter)
- [verbose](ElasticNetPathOptions.md#verbose)
- [y](ElasticNetPathOptions.md#y)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)

Training data. Pass directly as Fortran-contiguous data to avoid unnecessary memory duplication. If `y` is mono-output then `X` can be sparse.

#### Defined in

[generated/linear_model/ElasticNet.ts:499](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L499)

___

### Xy

• `Optional` **Xy**: [`ArrayLike`](../modules.md#arraylike)

Xy = np.dot(X.T, y) that can be precomputed. It is useful only when the Gram matrix is precomputed.

#### Defined in

[generated/linear_model/ElasticNet.ts:542](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L542)

___

### alphas

• `Optional` **alphas**: [`ArrayLike`](../modules.md#arraylike)

List of alphas where to compute the models. If `undefined` alphas are set automatically.

#### Defined in

[generated/linear_model/ElasticNet.ts:530](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L530)

___

### check\_input

• `Optional` **check\_input**: `boolean`

If set to `false`, the input validation checks are skipped (including the Gram matrix when provided). It is assumed that they are handled by the caller.

**`Default Value`**

`true`

#### Defined in

[generated/linear_model/ElasticNet.ts:582](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L582)

___

### coef\_init

• `Optional` **coef\_init**: [`ArrayLike`](../modules.md#arraylike)

The initial values of the coefficients.

#### Defined in

[generated/linear_model/ElasticNet.ts:554](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L554)

___

### copy\_X

• `Optional` **copy\_X**: `boolean`

If `true`, X will be copied; else, it may be overwritten.

**`Default Value`**

`true`

#### Defined in

[generated/linear_model/ElasticNet.ts:549](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L549)

___

### eps

• `Optional` **eps**: `number`

Length of the path. `eps=1e-3` means that `alpha\_min / alpha\_max \= 1e-3`.

**`Default Value`**

`0.001`

#### Defined in

[generated/linear_model/ElasticNet.ts:518](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L518)

___

### l1\_ratio

• `Optional` **l1\_ratio**: `number`

Number between 0 and 1 passed to elastic net (scaling between l1 and l2 penalties). `l1\_ratio=1` corresponds to the Lasso.

**`Default Value`**

`0.5`

#### Defined in

[generated/linear_model/ElasticNet.ts:511](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L511)

___

### n\_alphas

• `Optional` **n\_alphas**: `number`

Number of alphas along the regularization path.

**`Default Value`**

`100`

#### Defined in

[generated/linear_model/ElasticNet.ts:525](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L525)

___

### params

• `Optional` **params**: `any`

Keyword arguments passed to the coordinate descent solver.

#### Defined in

[generated/linear_model/ElasticNet.ts:587](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L587)

___

### positive

• `Optional` **positive**: `boolean`

If set to `true`, forces coefficients to be positive. (Only allowed when `y.ndim \== 1`).

**`Default Value`**

`false`

#### Defined in

[generated/linear_model/ElasticNet.ts:575](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L575)

___

### precompute

• `Optional` **precompute**: `boolean` \| [`ArrayLike`](../modules.md#arraylike)[] \| ``"auto"``

Whether to use a precomputed Gram matrix to speed up calculations. If set to `'auto'` let us decide. The Gram matrix can also be passed as argument.

**`Default Value`**

`'auto'`

#### Defined in

[generated/linear_model/ElasticNet.ts:537](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L537)

___

### return\_n\_iter

• `Optional` **return\_n\_iter**: `boolean`

Whether to return the number of iterations or not.

**`Default Value`**

`false`

#### Defined in

[generated/linear_model/ElasticNet.ts:568](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L568)

___

### verbose

• `Optional` **verbose**: `number` \| `boolean`

Amount of verbosity.

**`Default Value`**

`false`

#### Defined in

[generated/linear_model/ElasticNet.ts:561](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L561)

___

### y

• `Optional` **y**: `any`

Target values.

#### Defined in

[generated/linear_model/ElasticNet.ts:504](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L504)
