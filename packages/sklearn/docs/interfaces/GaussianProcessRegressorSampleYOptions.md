[sklearn](../readme.md) / [Exports](../modules.md) / GaussianProcessRegressorSampleYOptions

# Interface: GaussianProcessRegressorSampleYOptions

## Table of contents

### Properties

- [X](GaussianProcessRegressorSampleYOptions.md#x)
- [n\_samples](GaussianProcessRegressorSampleYOptions.md#n_samples)
- [random\_state](GaussianProcessRegressorSampleYOptions.md#random_state)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)[]

Query points where the GP is evaluated.

#### Defined in

[generated/gaussian_process/GaussianProcessRegressor.ts:612](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L612)

___

### n\_samples

• `Optional` **n\_samples**: `number`

Number of samples drawn from the Gaussian process per query point.

**`Default Value`**

`1`

#### Defined in

[generated/gaussian_process/GaussianProcessRegressor.ts:619](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L619)

___

### random\_state

• `Optional` **random\_state**: `number`

Determines random number generation to randomly draw samples. Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

**`Default Value`**

`0`

#### Defined in

[generated/gaussian_process/GaussianProcessRegressor.ts:626](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L626)
