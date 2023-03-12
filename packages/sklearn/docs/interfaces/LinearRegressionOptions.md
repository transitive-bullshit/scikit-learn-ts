[sklearn](../readme.md) / [Exports](../modules.md) / LinearRegressionOptions

# Interface: LinearRegressionOptions

## Table of contents

### Properties

- [copy\_X](LinearRegressionOptions.md#copy_x)
- [fit\_intercept](LinearRegressionOptions.md#fit_intercept)
- [n\_jobs](LinearRegressionOptions.md#n_jobs)
- [positive](LinearRegressionOptions.md#positive)

## Properties

### copy\_X

• `Optional` **copy\_X**: `boolean`

If `true`, X will be copied; else, it may be overwritten.

**`Default Value`**

`true`

#### Defined in

[generated/linear_model/LinearRegression.ts:375](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LinearRegression.ts#L375)

___

### fit\_intercept

• `Optional` **fit\_intercept**: `boolean`

Whether to calculate the intercept for this model. If set to `false`, no intercept will be used in calculations (i.e. data is expected to be centered).

**`Default Value`**

`true`

#### Defined in

[generated/linear_model/LinearRegression.ts:368](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LinearRegression.ts#L368)

___

### n\_jobs

• `Optional` **n\_jobs**: `number`

The number of jobs to use for the computation. This will only provide speedup in case of sufficiently large problems, that is if firstly `n\_targets > 1` and secondly `X` is sparse or if `positive` is set to `true`. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

#### Defined in

[generated/linear_model/LinearRegression.ts:380](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LinearRegression.ts#L380)

___

### positive

• `Optional` **positive**: `boolean`

When set to `true`, forces the coefficients to be positive. This option is only supported for dense arrays.

**`Default Value`**

`false`

#### Defined in

[generated/linear_model/LinearRegression.ts:387](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LinearRegression.ts#L387)
